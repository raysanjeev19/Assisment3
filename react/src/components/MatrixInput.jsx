import React from 'react'

const MatrixInput = ({ rows, columns, setRows, setColumns, onGenerate }) => {
  return (
    <div className="input-section">
      <div className="input-group">
        <div className="input-row">
          <div className="input-field">
            <label htmlFor="rows">Rows</label>
            <input
              id="rows"
              type="number"
              value={rows}
              onChange={(e) => setRows(Number(e.target.value))}
              min="1"
              max="10"
              placeholder="4"
            />
          </div>
          
          <div className="input-field">
            <label htmlFor="columns">Columns</label>
            <input
              id="columns"
              type="number"
              value={columns}
              onChange={(e) => setColumns(Number(e.target.value))}
              min="1"
              max="10"
              placeholder="4"
            />
          </div>
        </div>
        
        <button className="generate-btn" onClick={onGenerate}>
          Generate
        </button>
      </div>
    </div>
  )
}

export default MatrixInput