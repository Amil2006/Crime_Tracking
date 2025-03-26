import React from 'react';
import ReportCrime from './pages/ReportCrime';
import { HashRouter as Router } from 'react-router-dom'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import CrimeStats from './components/CrimeStats';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';
import Login from './pages/Login';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      {/* Header and Footer outside Routes to show on all pages */}
      <Header />
      <main>
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Banner />
                <div className="content-container">
                  <CrimeStats />
                  <NewsSection />
                </div>
              </>
            } 
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/report-crime" element={<ReportCrime />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
