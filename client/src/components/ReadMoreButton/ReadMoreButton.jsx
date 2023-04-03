import React, { useState } from 'react';

function ReadMoreButton({ text, maxChars }) {
  const [showAll, setShowAll] = useState(false);

  function handleButtonClick() {
    setShowAll(!showAll);
  }

  const displayText = showAll ? text : `${text?.substring(0, maxChars)}...`;

  return (
    <>
      <p>{displayText}</p>
      {text?.length > maxChars && (
        <button onClick={handleButtonClick} className='text-xs font-bold border-black'>
          {showAll ? 'Leer menos' : 'Leer más'}
        </button>
      )}
    </>
  );
}

export default ReadMoreButton;