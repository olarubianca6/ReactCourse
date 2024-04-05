import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import reviews from "./data";

const App = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text } = reviews[index];

  const nextPerson = () => {
    setIndex((index) => {
      const newValue = (index +1) % reviews.length;
      return newValue;
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      const newValue = (index - 1 + reviews.length) % reviews.length;
      return newValue;
    });
  };

  const randomPerson = () => {
    let randomNr = Math.floor(Math.random() * reviews.length);
    if (randomNr == index) {
      randomNr = index + 1;
    }
    const newIndex = randomNr % reviews.length;
    setIndex(newIndex);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          randomize
        </button>
      </article>
    </main>
  ) ;
};
export default App;
