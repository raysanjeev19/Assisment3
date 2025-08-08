import React from 'react'

const MatrixTable = ({ matrix,  subtitle, color }) => {
  if (!matrix || matrix.length === 0) return null


  const getDescription = (color) => {
    switch(color) {
      case 'green':
        return "Addition Pattern"
      case 'red':
        return "Multiplication Pattern"
      default:
        return subtitle
    }
  }

  return (
    <div className="matrix-container">
      <div className="matrix-table">
    
        <div className="matrix-row header-row">
          <div className="matrix-cell header-cell corner"></div>
          {matrix[0].map((_, colIndex) => (
            <div key={colIndex} className="matrix-cell header-cell">
              {colIndex}
            </div>
          ))}
        </div>
        
      
        {matrix.map((row, rowIndex) => (
          <div key={rowIndex} className="matrix-row">
            <div className="matrix-cell header-cell">{rowIndex}</div>
            {row.map((cell, colIndex) => (
              <div 
                key={colIndex} 
                className={`matrix-cell ${color}`}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
      
      <div className={`matrix-description ${color}`}>
        {getDescription(color)}
      </div>
    </div>
  )
}

export default MatrixTable