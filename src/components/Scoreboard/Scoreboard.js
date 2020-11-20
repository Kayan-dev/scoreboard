import React, { useState } from "react";
import Player from "../Player/Player";
import AddPlayerForm from "../AddPlayerForm";

function compare_score(player_a, player_b) {
  return player_b.score - player_a.score;
}

function compare_name(player_a, player_b) {
  return player_b.name.localeCompare(player_a.name);
}

export default function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  const [sort_by, set_sort_by] = useState("score"); // either "score" or "name"

  const players_sorted =
    sort_by === "score"
      ? [...players].sort(compare_score)
      : [...players].sort(compare_name);

  const incrementScore = (player_id) => {
    console.log("scored id", player_id);
    const new_players_array = players.map((player) => {
      if (player.id === player_id) {
        console.log("play", player);
        // player.score = player.score + 1;
        return { ...player, score: player.score + 1 };
      } else {
        console.log("PLAYED");
        return player;
      }
    });
    console.log("score update", new_players_array);
    set_players(new_players_array);
  };

  const change_sorting = (event) => {
    console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  };

  const reset = () => {
    const reset_player_score = players.map((player) => {
      if (player) {
        console.log("play", player);
        return { ...player, score: player.score - player.score };
      }
    });
    set_players(reset_player_score);
  };

  const addPlayer = (name) => {
    const newPlayer = { id: players.length + 1, name, score: 0 };
    console.log("Let's add a new player with the name:", newPlayer);
    const goodPlayers = [...players, newPlayer];
    console.log(goodPlayers);
    set_players(goodPlayers);
  };

  return (
    <div className="Scoreboard">
      <h1>Scoreboard</h1>
      <p>
        Sort order:{" "}
        <select onChange={change_sorting} value={sort_by}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
        -<button onClick={reset}>Reset</button>-
        {/* CREATE RANDOMIZING BUTTON
        <button onClick={random}>Randomize</button>
         */}
      </p>
      {players_sorted.map((player) => {
        return (
          <Player
            key={player.id}
            id={player.id}
            name={player.name}
            score={player.score}
            incrementScore={incrementScore}
          />
        );
      })}

      <AddPlayerForm addPlayer={addPlayer} />
    </div>
  );
}
