import React, { useCallback, useState } from 'react';
import axios from 'axios';

const alignCenter = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
};

export const NumbersGetter = () => {
  const [sentence, setSentence] = useState('');
  const [charNr, setCharNr] = useState('');

  const fetchChars = () => {
    axios
      .get(`http://localhost:8000/char_count?text=${sentence}`)
      .then(({ data }) => {
        //@ts-ignore
        setCharNr(data.count);
      })
      .catch((err) => console.log(err));
  };
  
  return (
    <div style={alignCenter}>
      <div style={alignCenter}>
        <label htmlFor="char-input">Enter a sentence:</label>
        <input
          id="char-number"
          type="text"
          onChange={(e) => {
            setSentence(e.target.value);
          }}
        />
        <button onClick={fetchChars}>Submit</button>
      </div>

      <div>
        <h3>{charNr}</h3>
      </div>
    </div>
  );
};
