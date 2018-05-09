import React from 'react';

const ListGroup = ({children}) => (
  <ul className="list-group">
    {React.Children.map(children, (child) => (
      
      React.cloneElement(child, {
        className: "list-group-item"
      }

      )))
    }

  </ul>
)

export default ListGroup
