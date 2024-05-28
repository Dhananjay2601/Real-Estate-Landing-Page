import React from "react";

const TextArea = ({ title, value, onChange, error, clearError }) => {
  const inputHandler = (event) => {
    const newValue = event.target.value;
    onChange(newValue); // Update the parent state with the new value
    clearError(); // Clear the error when the user starts typing
  };

  return (
    <>
      <p className="text-xs font-thin mb-1">
        {title} <span className="text-green-600">*</span>
      </p>
      <textarea
        rows="3"
        value={value}
        onChange={inputHandler}
        className={`border-2 border-gray-300 rounded-md p-1 w-full resize-none hover:border-green-800 focus:border-green-800 focus:border-2 focus:outline-none ${
          error ? "border-[1px] border-red-600 focus:outline-none" : ""
        }`}
      ></textarea>
      {error && <p className="mt-2 text-red-600 text-xs">{error}</p>}
    </>
  );
};

export default TextArea;
