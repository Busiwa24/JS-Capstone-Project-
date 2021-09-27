import mealsCounter from '../meals_counter.js';

const meals = [{
  strMeal: 'Chick-Fil-A Sandwich',
  strMealThumb: 'https://www.themealdb.com//images//media//meals//sbx7n71587673021.jpg',
  idMeal: '53016',
},
{
  strMeal: 'Chicken Couscous',
  strMealThumb: 'https://www.themealdb.com//images//media//meals//qxytrx1511304021.jpg',
  idMeal: '52850',
},
];

describe('Test meal counter method', () => {
  test('it returns the correct number of meals', () => {
    expect(mealsCounter(meals)).toBe(2);
  });
});