import React, { Component, useState } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState('');
  const [prev, setPrev] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('');

  return (
    <>
      <div className="display">{num}</div>
      <div className="buttons">
        <ul className="keyboard">
          <li>
            <button
              onClick={() => {
                setNum(num + '1');
              }}
            >
              1
            </button>
            <button
              onClick={() => {
                setNum(num + '2');
              }}
            >
              2
            </button>
            <button
              onClick={() => {
                setNum(num + '3');
              }}
            >
              3
            </button>
            <button
              onClick={() => {
                setPrev(num);
                setNum('');
                setOperation('+');
              }}
            >
              +
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setNum(num + '4');
              }}
            >
              4
            </button>
            <button
              onClick={() => {
                setNum(num + '5');
              }}
            >
              5
            </button>
            <button
              onClick={() => {
                setNum(num + '6');
              }}
            >
              6
            </button>
            <button
              onClick={() => {
                setPrev(num);
                setNum('');
                setOperation('-');
              }}
            >
              -
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setNum(num + '7');
              }}
            >
              7
            </button>
            <button
              onClick={() => {
                setNum(num + '8');
              }}
            >
              8
            </button>
            <button
              onClick={() => {
                setNum(num + '9');
              }}
            >
              9
            </button>
            <button
              onClick={() => {
                setPrev(num);
                setNum('');
                setOperation('x');
              }}
            >
              x
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setNum('');
                setResult('');
                setPrev(0);
                setOperation('');
              }}
            >
              C
            </button>
            <button
              onClick={() => {
                setNum(num + '0');
              }}
            >
              0
            </button>
            <button
              onClick={() => {
                switch (operation) {
                  case '+':
                    setResult(parseFloat(prev) + parseFloat(num));
                    break;
                  case '-':
                    setResult(parseFloat(prev) - parseFloat(num));
                    break;
                  case 'x':
                    setResult(parseFloat(prev) * parseFloat(num));
                    break;
                  case '/':
                    setResult(parseFloat(prev) / parseFloat(num));
                    break;
                  default:
                    break;
                }
                setNum(`${result}`);
                setPrev('');
              }}
            >
              =
            </button>
            <button
              onClick={() => {
                setPrev(parseInt(num, 10));
                setNum('');
                setOperation('/');
              }}
            >
              /
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
