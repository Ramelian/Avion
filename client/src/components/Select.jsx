import { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Select = ({ types, currentCategory, onChange }) => {
  const [isClicked, setIsClicked] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsClicked(!isClicked);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      className="relative text-primary-dark select-none text-base"
      ref={dropdownRef}
    >
      <div
        className="flex items-center justify-between md:gap-3 px-4 sm:px-6 py-3 cursor-pointer"
        onClick={toggleDropdown}
      >
        <span>{currentCategory}</span>
        {isClicked ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
      </div>
      {isClicked && (
        <ul className="absolute top-12 right-0 left-0 bg-white border border-gray-300 rounded shadow-md">
          {types.map((item, id) => {
            return (
              <li
                key={id}
                className="py-2 hover:bg-lightGray rounded cursor-pointer text-center "
                onClick={() => {
                  setIsClicked(false);
                  onChange(item);
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default Select;
