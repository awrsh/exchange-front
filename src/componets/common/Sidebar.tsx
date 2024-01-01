"use client"

import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-gray-800 text-white w-16 fixed top-0 right-0 h-screen" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="flex items-center justify-center h-full">
        Hover
      </div>
      {isOpen && (
        <div className="absolute top-0 right-16 bg-gray-700 p-2">
          <div className="py-2">
            <p className="text-white">Item 1</p>
          </div>
          <div className="py-2">
            <p className="text-white">Item 2</p>
          </div>
          <div className="py-2">
            <p className="text-white">Item 3</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
