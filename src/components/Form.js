import React, { useState } from "react";
import Input from "../components/form/input";
import ButtonInput from "../components/form/radioInput";
import TextArea from "../components/form/textArea";
import Consent from "../components/form/consent";
import SubmitButton from "../components/form/submitButton";
import SubmissionModal from "../components/form/submissionModal";

const Form = () => {
  const [selectedRadio, setSelectedRadio] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [query, setQuery] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [errors, setErrors] = useState({});

  const clearError = (field) => {
    setErrors((prevErrors) => {
      const { [field]: _, ...rest } = prevErrors;
      return rest;
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    const newErrors = {};
    if (!firstName) newErrors.firstName = "First Name is required.";
    if (!lastName) newErrors.lastName = "Last Name is required.";
    if (!email) {
      newErrors.email = "Email Address is required.";
    } else if (!validateEmail(email)) {
      newErrors.email = "Email Address is invalid.";
    }
    if (!query) newErrors.query = "Query Type is required.";
    if (!message) newErrors.message = "Message is required.";
    if (!consent) newErrors.consent = "Consent is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Form submission successful, reset form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
    setQuery("");
    setConsent(false);

    setSubmitted(true); // Show submission modal
    console.log(firstName, lastName, email, message, query, consent);
  };

  const handleRadioChange = (value) => {
    setSelectedRadio(value);
    setQuery(value); // Update query state when radio button is changed
    clearError("query"); // Clear query error
  };

  const closeModal = () => {
    if (submitted) {
      setSubmitted(false);
    }
  };

  return (
    <>
      {submitted && <SubmissionModal closeModal={closeModal} />}
      <form
        className="grid grid-cols-2 gap-4 min-w-[40%] border p-6 my-10 bg-white rounded-xl"
        onSubmit={submitFormHandler}
      >
        <div className="col-span-2">
          <h1 className="font-extrabold text-xl">Contact Us</h1>
        </div>
        <div className="">
          <Input
            type={"text"}
            title={"First Name"}
            value={firstName}
            onChange={setFirstName}
            error={errors.firstName}
            clearError={() => clearError("firstName")}
          />
        </div>
        <div className="">
          <Input
            type={"text"}
            title={"Last Name"}
            value={lastName}
            onChange={setLastName}
            error={errors.lastName}
            clearError={() => clearError("lastName")}
          />
        </div>
        <div className="col-span-2">
          <Input
            type={"email"}
            title={"Email Address"}
            value={email}
            onChange={setEmail}
            error={errors.email}
            clearError={() => clearError("email")}
          />
        </div>
        <div className="">
          <ButtonInput
            title={"Query Type"}
            astrix={"*"}
            value="General Enquiry"
            isChecked={selectedRadio === "General Enquiry"}
            onChange={handleRadioChange}
            text={"General Enquiry"}
            setQuery={setQuery}
            type={"radio"}
            clearError={() => clearError("query")}
          />
          {errors.query && (
            <p className="text-red-600 text-xs mt-1 col-span-2">
              {errors.query}
            </p>
          )}
        </div>
        <div className="">
          <ButtonInput
            value="Support Request"
            isChecked={selectedRadio === "Support Request"}
            onChange={handleRadioChange}
            text={"Support Request"}
            setQuery={setQuery}
            type={"radio"}
            clearError={() => clearError("query")}
          />
        </div>
        <div className="col-span-2">
          <TextArea
            title={"Message"}
            value={message}
            onChange={setMessage}
            error={errors.message}
            clearError={() => clearError("message")}
          />
        </div>
        <div className="col-span-2 flex">
          <Consent
            type={"radio"}
            setConsent={setConsent}
            consent={consent}
            clearError={() => clearError("consent")}
          />
        </div>
        {errors.consent && (
          <p className="text-red-600 text-xs">{errors.consent}</p>
        )}
        <div className="col-span-2">
          <SubmitButton />
        </div>
      </form>
    </>
  );
};

export default Form;
