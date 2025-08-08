import React from 'react'

const ResultMatrix = ({ matrix }) => {
  if (!matrix || matrix.length === 0) return null

  return (
    <div className="result-section">
      <div className="matrix-container">
        <div className="matrix-table">
       
          <div className="matrix-row header-row">
            <div className="matrix-cell header-cell corner"></div>
            {matrix[0].map((_, colIndex) => (
              <div key={colIndex} className="matrix-cell header-cell orange">
                {colIndex}
              </div>
            ))}
          </div>
          
       
          {matrix.map((row, rowIndex) => (
            <div key={rowIndex} className="matrix-row">
              <div className="matrix-cell header-cell orange">{rowIndex}</div>
              {row.map((cell, colIndex) => (
                <div 
                  key={colIndex} 
                  className="matrix-cell orange"
                >
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
        
        <div className="matrix-description orange">
          Final Result: Sum of both matrices - combining addition and multiplication patterns
        </div>
      </div>
    </div>
  )
}

export default ResultMatrix