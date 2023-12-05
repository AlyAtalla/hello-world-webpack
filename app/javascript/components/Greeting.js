import React, { useEffect } from 'react';
import { getGreetingsAsync } from '../reducers/greetingReducer';
import { useSelector, useDispatch } from 'react-redux';
const Greeting = () => {
  const { greeting, isLoading, error } = useSelector((state ) => state.greetings)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getGreetingsAsync())
  }, [dispatch])
  return (
    <div>
      <h1>Random Greeting:</h1>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error?.message}</h2>}
      {greeting && <p>{greeting.content}</p>}
    </div>
  );
};
export default Greeting;