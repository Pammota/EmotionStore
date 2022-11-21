import React, { useState } from 'react';
import axios from 'axios';

const alignCenter = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
};

export const Binaryer = () => {
  const [number, setNumber] = useState('');
  const [binaryNumber, setBinaryNumber] = useState('');

  const fetchBinary = () => {
    axios
      .get(`http://localhost:8000/testAPI?number=${number}`)
      .then(({ data }) => {
        //@ts-ignore
        setBinaryNumber(data.binary);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={alignCenter}>
      <div style={alignCenter}>
        <label htmlFor="char-input">Enter number in decimal:</label>
        <input
          id="char-number"
          type="text"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <button onClick={fetchBinary}>Submit</button>
      </div>

      <div>
        <h3>{binaryNumber}</h3>
      </div>
    </div>
  );
};
