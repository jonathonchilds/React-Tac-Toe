import React, { useState } from 'react'
import './App.css'
import axios from 'axios'

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

  function handleNewGame() {
    const handleNewGame = async () => {
      const response = await axios.post('summer-dust-2476.fly.dev/games')
      if (response) {
        console.log(response)
        const newGame = response.data

        setGame(newGame)
        console.log(newGame)
      }
    }
  }

  async function handleClickCell(row: number, column: number) {
    const url = `summer-dust-2476.fly.dev/game/${game.id}`
    try {
      const response = await axios.post(url, { row: row, column: column })
      const newGame = await response.data
      setGame(newGame)
    } catch (err) {
      console.log(err)
    }
  }

  // async function handleClickCell(row: number, column: number) {
  //   const url = `summer-dust-2476.fly.dev/game/${game.id}`
  //   const body = { row: row, column: column }
  //   const response = await fetch(url, {
  //     method: 'POST',
  //     headers: { 'content-type': 'application/json' },
  //     body: JSON.stringify(body),
  //   })
  //   console.log(response)
  //   if (response.ok) {
  //     const newGame = await response.json()
  //     setGame(newGame)
  //   }
  // }

  const header = game.winner ? `${game.winner} is the winner!` : 'React Tac Toe'

  return (
    <div>
      <h1>
        {header} <button onClick={handleNewGame}>New Game</button>
      </h1>
      <ul>
        {game.board.map((boardRow, rowIndex) => {
          return boardRow.map((cell, columnIndex) => {
            return (
              <li
                key={columnIndex}
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
