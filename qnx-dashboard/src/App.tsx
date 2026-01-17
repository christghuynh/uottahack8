import { useState } from 'react'
import './App.css'

function App() {
  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null)
  const GRID_SIZE = 5

  const handleCellClick = (row: number, col: number) => {
    setSelectedCell({ row, col })
    console.log(`Clicked cell: (${row}, ${col})`)
  }

  return (
    <div className="container">
      <h1>Autonomous Vehicle Grid Controller</h1>
      <div className="grid-wrapper">
        <div className="grid">
          {Array.from({ length: GRID_SIZE }).map((_, row) =>
            Array.from({ length: GRID_SIZE }).map((_, col) => (
              <div
                key={`${row}-${col}`}
                className={`grid-cell ${
                  selectedCell?.row === row && selectedCell?.col === col ? 'selected' : ''
                }`}
                onClick={() => handleCellClick(row, col)}
              >
                ({row}, {col})
              </div>
            ))
          )}
        </div>
      </div>
      {selectedCell && (
        <div className="info">
          <p>Selected: Grid Position ({selectedCell.row}, {selectedCell.col})</p>
        </div>
      )}
    </div>
  )
}

export default App