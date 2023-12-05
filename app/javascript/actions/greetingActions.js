export const fetchRandomGreeting = () => {
  return dispatch => {
    fetch('/random_greeting')
      .then(response => response.json())
      .then(data => dispatch(setRandomGreeting(data.greeting)))
      .catch(error => console.error('Error fetching greeting:', error));
  };
};

export const setRandomGreeting = greeting => {
  return {
    type: 'SET_RANDOM_GREETING',
    payload: greeting,
  };
};
