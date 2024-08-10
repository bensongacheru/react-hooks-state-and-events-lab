// src/components/App.js
import React, { useState } from 'react';
import ShoppingList from './ShoppingList';

const App = () => {
  // State variable for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle function
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      {/* Pass actual items or mock data to ShoppingList */}
      <ShoppingList items={[]} />
    </div>
  );
};

export default App;
