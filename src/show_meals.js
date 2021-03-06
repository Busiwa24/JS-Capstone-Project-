import showComment from './show_comments.js';
import { likes, postLikes } from './likes_api.js';

const main = document.getElementById('main');
const header = document.getElementsByTagName('header');
const footer = document.getElementsByTagName('footer');

const likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/N3qJO6H3DKthRFBBn3Uz/likes/';

export default (mealsDiv, allMeals) => {
  mealsDiv.innerHTML = '';
  allMeals.forEach((meal) => {
    const spanId = meal.idMeal + 1;
    const card = `<img src="${meal.strMealThumb}" alt="Food">
    <div class="meal-name flex">
      <p>${meal.strMeal}</p>
      <i class="far fa-heart" id="${meal.strMeal}"></i>
    </div>
    <span class="meal-likes" id="${spanId}">0 likes</span>
    <button class="meal-comment" id="${meal.idMeal}">Comments</button>`;

    const meals = document.createElement('div');
    meals.classList.add('mealBox');
    meals.innerHTML = card;
    mealsDiv.appendChild(meals);

    const icon = document.getElementById(meal.strMeal);
    const span = document.getElementById(spanId);

    icon.addEventListener('click', () => {
      postLikes(likesUrl, meal.idMeal).then(() => likes(likesUrl, span, meal.idMeal));
    });

    likes(likesUrl, span, meal.idMeal);

    const displayComment = document.getElementById(meal.idMeal);
    displayComment.addEventListener('click', () => {
      showComment(meal.idMeal);
      main.style.display = 'none';
      header[0].style.display = 'none';
      footer[0].style.display = 'none';
    });
  });
};
