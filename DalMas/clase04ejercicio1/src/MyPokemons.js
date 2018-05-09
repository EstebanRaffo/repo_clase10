import React, { Component } from 'react';
import MyInput from './MyInput'
import MyButton from './MyButton'
import MyItems from './MyItems'
import MyTotal from './MyTotal'

class MyPokemons extends Component {
  constructor(props)
  {
    super(props)
    this.state = {
      inputValue : "",
      items: []
    }

    console.log("constructor")
  }

  componentWillMount(){
    console.log("MyPokemons será montado")
  }

  componentDidMount()
  {
    console.log(this.displayName + "fue montado")
  }

  handleOnChangeInput = e => {
    this.setState({
      inputValue: e.target.value
    })
  }

  addToList = () => {
    const items = this.state.items

    if (items.indexOf(this.state.inputValue) < 0)
      items.push(this.state.inputValue)
    else
      alert("duplicado")

    this.setState({
      items: items
    })
  }

  handleAddButtonClick = (e) => {
    this.addToList()
  }

  handleOnKeyPressInput = (event) => {
    if(event.key == 'Enter')
        this.addToList()
  }

  cleanList = (e) => {
    let confirmado = window.confirm("seguro?")

    if (confirmado)
      this.setState({
          inputValue: "",
          items: []
        })
  }

  render() {
    const { inputValue,items } = this.state

    return (
      <div>
        <MyInput value={ inputValue } onChange={this.handleOnChangeInput} qty={100-inputValue.length} />
        <MyTotal total={ items.length}></MyTotal>
        <MyItems items={this.state.items} />
        <MyButton onClick={this.handleAddButtonClick} title="agregar"/>
        <MyButton onClick={this.cleanList} title="vaciar" />
        </div>
    );
  }
}

export default MyPokemons;
