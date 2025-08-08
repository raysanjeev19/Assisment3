import { useState } from 'react';
import MatrixInput from './components/MatrixInput';
import MatrixTable from './components/MatrixTable';
import ResultMatrix from './components/ResultMatrix'; // नया कंपोनेंट import करें
import Footer from './components/Footer';
import './App.css';

function App() {
  const [rows, setRows] = useState(4);
  const [columns, setColumns] = useState(4);
  const [matrices, setMatrices] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const generateMatrices = () => {
    const sumMatrix = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        row.push(i + j);
      }
      sumMatrix.push(row);
    }

    const multiplyMatrix = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        row.push(i * j);
      }
      multiplyMatrix.push(row);
    }

    setMatrices([sumMatrix, multiplyMatrix]);
    setShowResult(false);
  };

  const addMatrices = () => {
    if (matrices.length === 2) {
      const [matrix1, matrix2] = matrices;
      const resultMatrix = [];

      for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
          row.push(matrix1[i][j] + matrix2[i][j]);
        }
        resultMatrix.push(row);
      }

      setMatrices([...matrices, resultMatrix]);
      setShowResult(true);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Matrix Calculator</h1>

        {matrices.length === 0 && (
          <div className="welcome-section">
            <h2 className="welcome-title">Welcome to Matrix Calculator! 🧮</h2>
            <p className="welcome-description">
              Create two mathematical matrices based on index calculations and add them together.
              Simply enter your desired rows and columns, then click generate to see the magic happen!
            </p>
            <div className="welcome-features">
              <div className="feature-item">
                <div className="feature-icon">➕</div>
                <div className="feature-text">Sum Matrix<br/>(i + j)</div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✖️</div>
                <div className="feature-text">Multiply Matrix<br/>(i × j)</div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🔢</div>
                <div className="feature-text">Add Matrices<br/>Together</div>
              </div>
            </div>
          </div>
        )}

        <MatrixInput
          rows={rows}
          columns={columns}
          setRows={setRows}
          setColumns={setColumns}
          onGenerate={generateMatrices}
        />

        {matrices.length >= 2 && (
          <div className="matrices-container">
            <div className="input-matrices">
              <div className="matrix-wrapper">
                <MatrixTable
                  matrix={matrices[0]}
                  title="Sum Matrix"
                  subtitle="cell = sum of index (i+j)"
                  color="green"
                />
              </div>

              <div className="plus-sign">+</div>

              <div className="matrix-wrapper">
                <MatrixTable
                  matrix={matrices[1]}
                  title="Multiplication Matrix"
                  subtitle="cell = multiplication of index (i*j)"
                  color="red"
                />
              </div>

              {!showResult ? (
                <div className="add-button-container">
                  <button
                    className="add-matrix-btn"
                    onClick={addMatrices}
                  >
                    Add Matrix
                  </button>
                </div>
              ) : (
                <ResultMatrix matrix={matrices[2]} showResult={showResult} />
              )}
            </div>
          </div>
        )}
      </div>

      
    </div>
  );
}

export default App;