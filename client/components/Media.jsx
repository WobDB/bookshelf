import React from 'react';
import { mediaTypesSchema } from '../constants/mediaTypeConfigs';

export default (props) => {
  console.log(props);
  return (
    <div className='media'>
      <p class='title'><strong>Title</strong> {props.title}</p>
      <p class='status'><strong>Status</strong> {mediaTypesSchema[props.type].statusNames[props.currentStatus]}</p> 
    </div>
  )
}

