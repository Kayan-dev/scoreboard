import React, { useState } from "react";

export default function AddPlayerForm(props) {
  const [name, set_name] = useState("");

  const submitName = (event) => {
    event.preventDefault();
    props.addPlayer(name);
    set_name("");
  };

  const change_name = (event) => {
    console.log("new input .value:", event.target.value);
    set_name(event.target.value);
  };

  return (
    <div className="AddPlayerForm">
      <form onSubmit={submitName}>
        <p>
          New player:{" "}
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={change_name}
          />
          <button>Add</button>
        </p>
      </form>
    </div>
  );
}
