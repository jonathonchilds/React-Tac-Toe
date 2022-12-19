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

  async function handleNewGame() {
    const response = await fetch(
      'https://sdg-tic-tac-toe-api.herokuapp.com/game',
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
      }
    )
    if (response.ok) {
      const newGame = await response.json()
      setGame(newGame)
    }
  }

  async function handleClickCell(row: number, cell: number) {
    if (game.id === null || game.winner || game.board[row][cell] !== ' ') {
      return
    }
    const url = `https://sdg-tic-tac-toe-api.herokuapp.com/game/${game.id}`
    const body = { row: row, cell: cell }
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    })
    if (response.ok) {
      const newGame = await response.json()
      setGame(newGame)
    }
  }

  const header = game.winner ? `${game.winner} is the winner!` : 'React Tac Toe'

  return (
    <div>
      <h1>
        {header} <button onClick={handleNewGame}>New Game</button>
      </h1>
      <ul>
        {game.board.map((row, rowIndex) => {
          return row.map((cell, columnIndex) => {
            return (
              <li
                key={columnIndex}
                className={cell === ' ' ? undefined : 'taken'}
                onClick={() => handleClickCell(rowIndex, columnIndex)}
              >
                {cell}
              </li>
            )
          })
        })}
      </ul>
    </div>
  )
}
