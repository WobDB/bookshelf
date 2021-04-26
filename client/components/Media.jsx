import React from 'react';
import { mediaTypesSchema } from '../constants/mediaTypeConfigs';

export default (props) => {
  console.log(props);
  return (
    <div className='media'>
      <p>Title: {props.title}</p>
      <p>Status: {mediaTypesSchema[props.type].statusNames[props.currentStatus]}</p> 
    </div>
  )
}

