// src/App.tsx
import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('body-with-sidebar');
    } else {
      document.body.classList.remove('body-with-sidebar');
    }
  }, [isSidebarOpen]);

  return (
    <div>
      <Navbar setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />

      <div
        className={`content ${isSidebarOpen ? 'content-with-sidebar' : ''}`}
      >
        {/* Main content */}
        <h1>Content goes here</h1>
        {/* You can add other content here */}
      </div>
    </div>
  );
};

export default App;

