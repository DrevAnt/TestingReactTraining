import { useState } from "react";

function Button() {
  const [buttonText, setbuttonText] = useState("Press me");
  const buttonFunction = () => {
    setbuttonText("You Clicked");
  };

  return (
    <button onClick={buttonFunction} title="buttonTitle">
      {buttonText}
    </button>
  );
}

export default Button;
