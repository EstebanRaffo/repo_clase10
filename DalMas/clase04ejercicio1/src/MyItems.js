import React from 'react';

const MyItems = ({items}) => {
  return <ul>
    {
      items.map((value,i) => {
        return <li key={i}>{i} - {value}</li>
      })
    }
  </ul>
}

export default MyItems
