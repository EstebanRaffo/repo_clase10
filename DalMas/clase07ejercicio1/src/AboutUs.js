import React from 'react';
import {Link} from 'react-router-dom'

const AboutUs = ({}) => { return (
  <div>
    <h1>Acerca de nosotros</h1>
    <p>description 123 123 123 123</p>
    <ul>
      <li> <Link to='/about/bob'> bob </Link> </li>
      <li> <Link to='/about/forrest'> forrest</Link> </li>
      <li> <Link to='/about/tony'> tony </Link> </li>
    </ul>
  </div>
  )}

export default AboutUs
