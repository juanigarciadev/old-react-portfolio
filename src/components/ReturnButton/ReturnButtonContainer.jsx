import React from "react";
import ReturnButton from "./ReturnButton";
import { useNavigate } from "react-router-dom";

const ReturnButtonContainer = () => {
  const navigate = useNavigate();
  return <ReturnButton navigate={navigate} />;
};

export default ReturnButtonContainer;
