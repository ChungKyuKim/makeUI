import React, { useState } from "react";
import "./Accordion.css";
import { ACCODION_DATA } from "./ACCORDION_DATA";

function Accordion() {
  const [select, setSelect] = useState(null);
  const toggle = (i) => {
    if (select === i) {
      return setSelect(null);
    }
    setSelect(i);
  };
  return (
    <div className="Wrapper">
      <div className="Accordion">
        {ACCODION_DATA.map((item, i) => (
          <div className="item">
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span>{select === i ? "-" : "+"}</span>
            </div>
            <div className={select === i ? "content show" : "content"}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
