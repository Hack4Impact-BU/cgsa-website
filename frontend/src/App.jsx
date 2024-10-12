import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import ContactUs from './pages/contact-us/contact-us';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;