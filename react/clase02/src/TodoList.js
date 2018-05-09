import React, { Component } from 'react'
import uuid from 'uuid/v4'
import { connect } from 'react-redux'

let input

const TodoList = ({ todos, todo, onSubmit, onChange, removeTodo }) =>
  <section>
    <h1>Todo List</h1>
    <form onSubmit={e => {
      e.preventDefault()
      onSubmit(uuid(), input.value)
      input.value = ''
    }}>
      <input
        type="text"
        name="todo"
        ref={e => input = e}
        autoFocus
      />
    </form>
    <ul>
      {todos.map(todo =>
        <li key={todo.id}>
          {todo.text}
          <button onClick={e => removeTodo(todo.id)}>Borrar</button>
        </li>
      )}
    </ul>
  </section>

const mapStateToProps = state => {
  return {
    todo: state.todo,
    todos: state.todos
  }
}

const addTodo = (id, text) => ({
  type: 'ADD_TODO',
  id,
  text
})

const changeTodo = value => ({
  type: 'CHANGE_TODO',
  value
})

const mapDispatchToProps = {
  onSubmit: addTodo,
  onChange: changeTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
