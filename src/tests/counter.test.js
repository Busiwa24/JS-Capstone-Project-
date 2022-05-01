import counters from '../counter.js';

const comments = [
  {
    comment: 'lovely',
    creation_date: '2021-09-22',
    username: 'mb',
  },
  {
    comment: 'looks tasty',
    creation_date: '2021-09-22',
    username: 'busi',
  },
];

describe('Comments Counter function Test', () => {
  test('it should return comment array length of 2', () => {
    expect(counters.comments(comments)).toBe(2);
  });
});



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

describe('Meals Counter function Test', () => {
  test('it should return meals array length of 2', () => {
    expect(counters.meals(meals)).toBe(2);
  });
});
