import React from 'react';

const MyInput = ({onChange,value,qty}) => {
  return <div><input maxLength="100" onChange={onChange} value={value}/><p>{qty}</p></div>
    }

export default MyInput
