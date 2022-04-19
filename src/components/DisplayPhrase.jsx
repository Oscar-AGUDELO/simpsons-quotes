// src/components/DisplayPhrase.jsx
import React from 'react';

function DisplayPhrase({ phrase }) {
  return (
    phrase && (
      <div className='DisplayPhrase'>
        <img src={phrase.image} alt={"im,mkage"} />
        <p>{phrase.character} says {phrase.quote}</p>
       </div>
    )
  );
}

export default DisplayPhrase;