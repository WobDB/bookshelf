import React from 'react';

export default ( {displayName} ) => {
  
  return (
    <div id='greeting-display'>
      <h1>
        Hello, {displayName}
      </h1>
    </div>
  )
}