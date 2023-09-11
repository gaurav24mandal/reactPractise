import React, { useState } from 'react';

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    // Handle item click action here
    console.log(`Selected: ${item}`);
    setIsOpen(false); // Close the dropdown after selecting an item
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onMouseEnter={toggleDropdown}>
        Open Dropdown
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {items.map((item, index) => (
            <li
              key={index}
              className="dropdown-item"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
