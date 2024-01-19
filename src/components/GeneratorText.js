import React from "react";
import data from "../data";
import { useState } from "react";

export default function GeneratorText() {
  const [size, setSize] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(size);

    //   setText(data.slice(0, 3));
    setText(data.slice(0, size));
  };

  const handleChange = (event) => {
    const value = event.target.value;
    if (value < 0) {
      setSize(0);
    } else if (value > 8) {
      setSize(8);
    } else {
      setSize(value);
    }

    // if (value < 0) {
    //   setSize(0);
    // } else if (value > data.length) {
    //   setSize(data.length);
    // } else {
    //   setSize(value);
    // }
  };

  return (
    <div>
      <h3>Генератор тексту</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Параграфи
          <input
            type="number"
            value={size}
            // onChange={(event) => setSize(event.target.value)}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Згенерувати</button>

        <div>
          {text.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </form>
    </div>
  );
}
