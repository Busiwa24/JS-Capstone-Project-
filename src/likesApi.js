export const postLikes = async (url, mealId) => {
    const request = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: mealId,
      }),
    });
    return request;
  };

const 