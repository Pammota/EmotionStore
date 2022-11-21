import React, { useState } from 'react';
import axios from 'axios';

const fetchNumber = (number: string) => {
  axios
    .get(`http://localhost:8000/testAPI?number=${number}`)
    .then(({ data }) => {
      //@ts-ignore
      return data.binary;
    })
    .catch((err) => console.log(err));
};

const alignCenter = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
};

export const Binaryer = () => {
  const [number, setNumber] = useState('');
  const [binaryNumber, setBinaryNumber] = useState('');

  const onSubmit = async () => {
    const bin = await fetchNumber(number);
    if (bin !== undefined) setBinaryNumber(bin);
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
        <button onClick={onSubmit}>Submit</button>
      </div>

      <div>
        <h3>{binaryNumber}</h3>
      </div>
    </div>
  );
};
