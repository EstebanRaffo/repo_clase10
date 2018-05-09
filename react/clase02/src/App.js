import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import TodoList from './TodoList'
import Home from './Home'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const initialState = {
  todo: '',
  todos: [
    { id: 1, text: 'tarea 1' }
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_TODO':
      return {
        ...state,
        todo: action.value
      }
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos, {
            id: action.id,
            text: action.text
          }
        ],
        todo: ''
      }
    default:
      return state
  }
}

const store = createStore(reducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <div>
              <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/todo">TodoList</Link></li>
              </ul>

              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/todo" component={TodoList}/>
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
