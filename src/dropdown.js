import React, { useState} from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-center">
      <div className="">
        <button
          type="button"
          className="text-lg flex justify-between rounded-full bg-[#393936] px-4 py-2  h-[43px] w-[165px] text-center font-semibold text-gray-50 shadow-sm"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          Público
          <svg
            className="-mr-1 h-8 w-8 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div
          className="absolute right-5 z-10 mt-2 w-35 origin-top-right rounded-xl bg-[#393936] shadow-xl ring-3 ring-black ring-opacity-100 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <a
              href="/"
              className="block px-5 py-1 text-lg text-gray-50"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              Privado
            </a>
            <a
              href="/"
              className=" block px-5 py-1 text-lg text-gray-50"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-1"
            >
              Solo para mi
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
