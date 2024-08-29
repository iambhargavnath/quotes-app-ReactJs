import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuoteList from './pages/QuoteList';
import UpdateQuote from './pages/UpdateQuote';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuoteList />} />
        <Route path="/update/:id" element={<UpdateQuote />} />
      </Routes>
    </Router>
  );
};

export default App;