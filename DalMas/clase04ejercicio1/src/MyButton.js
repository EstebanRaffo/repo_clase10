import React from 'react';

const MyButton = ({onClick,title}) => {
  return <button onClick={onClick}>{title}</button>
}

export default MyButton
