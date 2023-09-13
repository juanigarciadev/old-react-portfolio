import React from "react";
import { BsChevronLeft } from "react-icons/bs";

const ReturnButton = ({ navigate }) => {
  return (
    <button
      className="secondaryButton gap-2 md:w-full"
      onClick={() => navigate(-1)}
    >
      <BsChevronLeft />
      Go back
    </button>
  );
};

export default ReturnButton;
