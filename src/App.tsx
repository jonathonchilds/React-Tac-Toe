import React, { useState } from 'react'
import './App.css'

export function App() {
  const [game, setGame] = useState({
    board: [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ],
    id: null,
    winner: null,
  })

  return (
    <div>
      <h1>
        React-Tac-Toe: <button>New</button>
      </h1>
      <ul>
        <li>{game.board[0][0]}</li>
        <li>{game.board[0][1]}</li>
        <li>{game.board[0][2]}</li>
        <li>{game.board[1][0]}</li>
        <li>{game.board[1][1]}</li>
        <li>{game.board[1][2]}</li>
        <li>{game.board[2][0]}</li>
        <li>{game.board[2][1]}</li>
        <li>{game.board[2][2]}</li>
      </ul>
    </div>
  )
}
