import React from "react";

const Button = ({ text, color, onClick }) => {
  return (
    <button
      onClick={onClick} // Pass onClick handler here
      className={`start-button text-[1.5rem] font-bold py-[10px] px-[20px] m-[5px] border-none rounded-[10px] cursor-pointer bg-[rgb(212,212,212)] min-w-[125px] text-white transition-colors duration-500 ease-in ${color}`}
    >
      {text}
    </button>
  );
};

export default Button;
