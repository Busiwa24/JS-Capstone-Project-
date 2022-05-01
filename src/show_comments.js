import './show_comments.css';
 import { Meal, comments } from './comments_api.js';

const fetchMeals = async (url) => {
  const request = await fetch(`${url}`);
  const result = await request.json();
  return result;
};

const mainContainer = document.getElementById('home');
const main = document.getElementById('main');
const header = document.getElementsByTagName('header');
const footer = document.getElementsByTagName('footer');

const showComment = (mealId) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetchMeals(url).then((data) => {
    const listId = data.meals[0].idMeal + 1;
    mainContainer.innerHTML = '';
    const showComment = document.createElement('div');
    showComment.className = 'showComment';
    showComment.innerHTML = `<button type='button' class='close-btn'>X</button>
                            <div class='comment-card'>
                              <div class='image-box'>
                                <div class='image-thumb'><img src="${data.meals[0].strMealThumb}"></div>
                              </div>
                              <div><h2>${data.meals[0].strMeal}</h2></div>
                              <div><b>Category:</b> ${data.meals[0].strCategory}</div>
                              <div><b> Ingredients:</b> ${data.meals[0].strIngredient1}, ${data.meals[0].strIngredient2}, ${data.meals[0].strIngredient3}, ${data.meals[0].strIngredient4}, ${data.meals[0].strIngredient5}</div>
                              <div class='flex-div'>
                              <div>
                                <h3>Comments</h3>
                                <div id="${listId}"> </div>
                              </div>
                              
                              <div class="commentForm">
                                  <div><h2>Add a comment:</h2></div>
                                  <div><input type="text" id="${data.meals[0].strMeal}" name="name" class="comment-name" placeholder="Your Name"></div><br>
                                  <div> <textarea id="${data.meals[0].strIngredient1}" name="comment-text" class="textarea-comment" placeholder="Your Message"></textarea></div><br>
                                  <div><button type="button" id="${data.meals[0].idMeal}" class="submit-btn" >Add Comment</button></div>
                              </div>
                              </div>
                            </div>`;

    mainContainer.appendChild(showComment);
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
      showComment.remove();
      main.style.display = 'block';
      header[0].style.display = 'flex';
      footer[0].style.display = 'block';
    });

    const commentBtn = document.getElementById(data.meals[0].idMeal);
    const inputName = document.getElementById(data.meals[0].strMeal);
    const inputComment = document.getElementById(data.meals[0].strIngredient1);
    commentBtn.addEventListener('click', () => {
      Meal.postComment(
        data.meals[0].idMeal,
        inputName.value,
        inputComment.value,
      ).then(() => comments(list, data.meals[0].idMeal));
      inputName.value = '';
      inputComment.value = '';
    });

    const list = document.getElementById(listId);
    comments(list, data.meals[0].idMeal);
  });
};

export default showComment;
