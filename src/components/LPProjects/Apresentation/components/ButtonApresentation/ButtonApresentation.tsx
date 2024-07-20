import React from "react";

interface ButtonApresentationProps {
  text: string;
}

const ButtonApresentation: React.FC<ButtonApresentationProps> = ({ text }) => (
  <button>{text}</button>
);

export default ButtonApresentation;
