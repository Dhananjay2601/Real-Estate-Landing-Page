import React from "react";

const Consent = ({ setConsent, consent, clearError }) => {
  const onChangeHandler = (event) => {
    setConsent(event.target.checked);
    clearError(); // Clear the error when the consent checkbox is changed
  };
  return (
    <>
      <input
        type="checkbox"
        checked={consent}
        onChange={onChangeHandler}
        className="accent-green-800"
      ></input>
      <p className="pl-3 text-xs font-thin">
        I consent to being contacted by the team
        <span className="pl-1 text-green-600">*</span>
      </p>
    </>
  );
};

export default Consent;
