import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchRandomGreeting } from '../actions/greetingActions';
import Greeting from './Greeting';

const App = () => {
 const dispatch = useDispatch();

 useEffect(() => {
   // Fetch random greeting when the app component mounts
   dispatch(fetchRandomGreeting());
 }, [dispatch]);

 return (
   <Router>
     <Routes>
       <Route path="/" element={<Greeting />} />
     </Routes>
   </Router>
 );
};

export default App;
