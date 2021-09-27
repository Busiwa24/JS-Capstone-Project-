import countComments from './comments_counter.js';

class Meal {
  static async postComment(mealId, name, comment) {
    const response = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lCZQ9jd97Oj1oy24PzZg/comments',
      {
        method: 'POST',
        body: JSON.stringify({
          item_id: mealId,
          username: name,
          comment,
        }),
        headers: { 'content-type': 'application/json' },
      },
    );

    if (response.status === 201) {
      return response;
    }
  }

  static async getComments(mealId) {
    const response = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lCZQ9jd97Oj1oy24PzZg/comments?item_id=${mealId}`,
    );
    const comments = await response.json();
    return comments;
  }
}

const comments = (list, mealId) => {
  Meal.getComments(mealId).then((data) => {
    list.innerHTML = '';
    const listHeading = list.previousSibling.previousSibling;
    const counter = countComments(data);
    if (counter > 0) {
      listHeading.innerHTML = `Comments (${counter})`;
    }

    if (data.length > 0) {
      data.forEach((comment) => {
        list.innerHTML += `${comment.creation_date} ${comment.username}: ${comment.comment} <br>`;
      });
    } else {
      list.innerHTML = 'No comments';
    }
  });
};
export { Meal, comments };