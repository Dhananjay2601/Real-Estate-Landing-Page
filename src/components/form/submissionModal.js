import React, { useEffect } from "react";
import checkicon from "../../icons/pngIcons/checkicon.png";

const SubmissionModal = ({ closeModal }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      closeModal();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [closeModal]);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div
        className="absolute w-full h-full bg-gray-900 opacity-50"
        onClick={closeModal}
      ></div>
      <div className="w-84 h-24 p-2 px-4 text-base flex flex-col justify-center items-start bg-gray-600 bg-opacity-90 rounded-lg text-white z-50">
        <div className="flex gap-3 ">
          <img src={checkicon} alt="check mark" width={25} />
          <p>Message Sent!</p>
        </div>
        <p className="text-sm py-2">
          Thanks for completing the form. We'll be in touch soon!
        </p>
      </div>
    </div>
  );
};

export default SubmissionModal;
