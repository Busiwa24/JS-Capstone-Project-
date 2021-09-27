import './style.css';
import './comment_popup.css';
import displayMeals from './show_meals.js';
import getMeals from './get_api.js';
import mealsCounter from './meals_counter.js';

const allMeals = document.getElementById('allMeals');
const allMealsLink = document.getElementById('ChickenBreast');


const url = 'https://www.themealdb.com/api/json/v1/1/filter.php';

getMeals(url, 'i=chicken_breast').then((data) => {
  const allCount = mealsCounter(data.meals);
  allMealsLink.innerHTML += `(${allCount})`;
  displayMeals(allMeals, data.meals);
});

allMealsLink.addEventListener('click', () => {
  allMeals.style.display = 'flex';
  tumericMeals.style.display = 'none';
  garamMeals.style.display = 'none';
});
