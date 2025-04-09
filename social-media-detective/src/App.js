import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';
// import HistoryPage from './pages/HistoryPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/results" element={<ResultsPage />} />
            {/* <Route path="/history" element={<HistoryPage />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;