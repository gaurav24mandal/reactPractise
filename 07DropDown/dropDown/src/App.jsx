import React from 'react';
import Dropdown from './component/dropDown';

const App = () => {
  const dropdownItems = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div className="App">
      <h1>Dropdown Example</h1>
      <Dropdown items={dropdownItems} />
    </div>
  );
};

export default App;
