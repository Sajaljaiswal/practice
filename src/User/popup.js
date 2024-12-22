import React, { useState } from "react";
import Menu from "./menu";

const Popup = () => {
  const [hide, setHide] = useState(false);
  const togglePopup = () => {
    setHide(true);
  };
  return (
    <div>
      <button onClick={togglePopup}>CLick to PopUp</button>

      {hide && <Menu setHide={setHide} />}
    </div>
  );
};

export default Popup;
