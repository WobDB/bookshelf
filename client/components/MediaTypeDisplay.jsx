import React from 'react';
import { mediaTypesSchema } from '../constants/mediaTypeConfigs';

export default ({ selected, updateType, type }) => {
  
  //if type is the current user-selected type, use custom styling
  const selectedStyle = {};
  if (selected) selectedStyle.backgroundColor = 'green';

  return (
    <div id='media-type-container'>
      <button 
        onClick={(e) => updateType(e)} 
        style={selectedStyle}
        name={type}
      >{mediaTypesSchema[type].displayName}</button>
    </div>
  )
}