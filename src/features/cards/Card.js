import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCards } from "./cardsSlice";

export default function Card({ id }) {
  const cards = useSelector(selectCards); // replace this with a call to your selector to get all the cards in state
  const card = cards[id];
  const [flipped, setFlipped] = useState(false);

  const handleClick = (e) => {
    console.log(flipped);
    if (flipped === false) {
      e.target.classList.add("flipped-style");
    } else {
      e.target.classList.remove("flipped-style");
    }
    setFlipped(!flipped);
  };

  return (
    <li>
      <div className="card" onClick={handleClick}>
        {flipped ? card.back : card.front}
      </div>
    </li>
  );
}
