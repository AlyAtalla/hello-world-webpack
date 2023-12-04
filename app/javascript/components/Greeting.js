import React from 'react';
import { useEffect, useState } from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    // Fetch random greeting from the API endpoint
    fetch('/random_greeting')
      .then(response => response.json())
      .then(data => setGreeting(data.greeting))
      .catch(error => console.error('Error fetching greeting:', error));
  }, []);

  return (
    <div>
      <h1>Random Greeting:</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;
