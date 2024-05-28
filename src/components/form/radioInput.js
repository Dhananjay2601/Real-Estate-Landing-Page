import React, { useEffect } from "react";

const InputButton = ({
  title,
  astrix,
  isChecked,
  onChange,
  value,
  text,
  setQuery,
  clearError,
}) => {
  // Use useEffect to handle side effects such as setting query state
  useEffect(() => {
    if (isChecked) {
      setQuery(value);
    }
  }, [isChecked, value, setQuery]);

  const onChangeHandler = () => {
    onChange(value);
    clearError(); // Clear the error when the radio button is changed
  };
  return (
    <>
      <p className="text-xs font-thin mb-2 col-span-2 min-h-4 ">
        {title} <span className=" text-green-600">{astrix}</span>
      </p>
      <div
        className={`flex gap-2  text-xs  border-2 border-gray-300 cursor-pointer  rounded-md p-[6px]  w-full hover:bg-green-300 hover:bg-opacity-25 hover:border-green-800 ${
          isChecked ? "bg-green-300 bg-opacity-25 border-green-800" : ""
        }`}
        onClick={onChangeHandler}
      >
        <input
          type="radio"
          name="radio"
          value={value}
          checked={isChecked}
          onChange={onChangeHandler}
          className="ml-3  accent-green-800 hover:bg-green-800"
        ></input>
        <p>{text}</p>
      </div>
    </>
  );
};

export default InputButton;
