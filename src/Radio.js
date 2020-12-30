import React from "react";

const Radio = ({ pergunta, id, options, onChange, value, active }) => {
  if (active === false) return null;
  return (
    <fieldset>
      <legend>{pergunta}</legend>
      {options.map((option) => (
        <label key={option}>
          <input
            active
            type="radio"
            name="option"
            value={option}
            onChange={onChange}
            id={id}
            checked={value === option}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
