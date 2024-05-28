import React, { useEffect, useState } from "react";

const Input = ({ value, onChange, title, type, error, clearError }) => {
  const [isTyping, setIsTyping] = useState(false);

  const inputHandler = (event) => {
    const newValue = event.target.value;
    onChange(newValue); // Update the parent state with the new value
    setIsTyping(true);
    clearError(); // Clear the error when user starts typing
  };

  useEffect(() => {
    if (isTyping) {
      const debounce = setTimeout(() => {
        setIsTyping(false);
      }, 500); // Adjust the debounce delay as needed

      return () => clearTimeout(debounce);
    }
  }, [value, isTyping]);

  return (
    <>
      <p className="text-xs font-medium mb-1">
        {title} <span className="text-green-600">*</span>
      </p>
      <input
        type={type}
        value={value}
        onChange={inputHandler}
        className={`peer border-2 border-gray-300 rounded-md p-[2px] w-full hover:border-green-800  focus:border-green-800 focus:border-2 focus:outline-none ${
          error ? "border-[1px] border-red-600 focus:outline-none" : ""
        }`}
      />
      {error && <p className="mt-2 text-red-600 text-xs">{error}</p>}
    </>
  );
};

export default Input;
