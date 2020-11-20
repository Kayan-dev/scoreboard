import React from "react";
import "./Player.scss";

export default function Player(props) {
  const onClickIncrement = () => {
    // console.log(props.id, "id check");
    // call the callback prop passed down from the scoreboard
    props.incrementScore(props.id);
  };

  return (
    <li className="Player">
      <div
        className="percentage_coloring"
        style={{ width: props.score + "%" }}
      ></div>
      <p>
        {props.name} (score: {props.score})
        <button onClick={onClickIncrement} className="increment_coloring">
          increment
        </button>
      </p>
    </li>
  );
}
