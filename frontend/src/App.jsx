import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import Menu from './components/menu/menu';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import AboutUs from './pages/about-us/about-us';
import Resources from './pages/resources/resources';
import ContactUs from './pages/contact-us/contact-us';
import Blog from './pages/blog/blog';
import Calendar from './pages/calendar/calendar';
import Newsletter from './pages/newsletter/newsletter';
import SpaceBooking from './pages/space-booking/space-booking';
import Volunteer from './pages/volunteer/volunteer'
import AdminPage from './pages/admin/admin-page';
import './App.css'

function App() {
  const [visible, setVisible] = useState(false);
  function getVisible() {
    setVisible(!visible);
  }
  function ErrorBoundary() {
    const localLink = window.location.href.substring(window.location.href.lastIndexOf('/'));
    return (
      <>
        <h1 style={{ textAlign: 'center', marginTop: '5rem' }}>Error 404: Page Not Found</h1>
        <h2 style={{ textAlign: 'center', marginBottom: '5rem' }}>The requested URL {localLink} was not found on this server.</h2>
      </>
    );
  }
  return (
    <Router>
      <Header visible={visible} sendVisible={getVisible} />
      <Menu visible={visible} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/space-booking" element={<SpaceBooking />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/admin-page" element={<AdminPage />} />
        <Route path="*" element={<ErrorBoundary />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;