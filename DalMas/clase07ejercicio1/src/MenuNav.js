import React from 'react'
import {Link} from 'react-router-dom'

const MenuNav = () => { return (
<nav>
  <ul>
    <li> <Link to='/'> Home </Link> </li>
    <li> <Link to='/about'> About us </Link> </li>
    <li> <Link to='/contact'> Contact us </Link> </li>
  </ul>
</nav>
)}

export default MenuNav
