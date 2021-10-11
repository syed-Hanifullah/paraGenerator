import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
    // console.log(data);
  };
  return (
    <div>
      <section className="section-center">
        <h3>
          Type the number of Paragraphs you want
          (max:9)
        </h3>
        <form
          onSubmit={handleSubmit}
          className="lorem-form"
        >
          <label htmlFor="amount">
            Paragraph(s)
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={count}
            onChange={(e) =>
              setCount(e.target.value)
            }
          />
          <button className="btn" type="submit">
            Generate
          </button>
        </form>
        <article className="lorem-text">
          {text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </article>
      </section>
    </div>
  );
}

export default App;
