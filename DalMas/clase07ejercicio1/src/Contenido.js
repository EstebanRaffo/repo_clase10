import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import AboutUs from './AboutUs'
import Contact from './Contact'
import Error404 from './Error404'
import Bio from './Bio'

const Contenido = () => { return (
<Switch>
  <Route exact path='/' component={Home} />
  <Route path='/about/:id' component={Bio} />
  <Route path='/about' component={AboutUs} />
  <Route path='/contact' component={Contact} />
  <Route component={Error404}></Route>
    </Switch>
)}

export default Contenido
