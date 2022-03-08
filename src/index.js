import './style.css';
import './show_comments.css';
import showMeals from './show_meals.js';
import counters from './counter.js';

const fetchMeals = async (url) => {
  const request = await fetch(`${url}`);
  const result = await request.json();
  return result;
};

const allMeals = document.getElementById('allMeals');
const allMealsLink = document.getElementById('ChickenBreast');


const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast';

fetchMeals(url).then((data) => {
  const allCount = counters.meals(data.meals);
  allMealsLink.innerHTML += `(${allCount})`;
  showMeals(allMeals, data.meals);
});

