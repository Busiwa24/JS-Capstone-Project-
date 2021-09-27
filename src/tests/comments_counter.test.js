import countComments from '../comments_counter.js';

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

describe('Test comments counter method', () => {
  test('it returns the correct number of comments', () => {
    expect(countComments(comments)).toBe(2);
  });
});
