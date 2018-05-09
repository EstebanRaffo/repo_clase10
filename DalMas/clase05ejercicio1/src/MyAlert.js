import React, {Component} from 'react';
import Alert from './Alert'

class MyAlert extends Component {

  constructor()
  {
    super()
    this.state = { alerts : [
          {type: 'warning', content: 'Este es un alert de tipo danger'},
          {type: 'secondary', content: 'Este es un alert de tipo secondary'},
          {type: 'dark', content: 'Este es un alert de tipo sucess'}
        ]
    }
  }

  handleRemoveAlert = () => {
    this.state.alerts.pop()
    this.setState({
      alerts: this.state.alerts
    })
  }

  render() {
    const {alerts} = this.state

    return (
      <div className = "container">
        {alerts.map((value,i) => {
          return <Alert type={value.type} key={i}/>
        })
        }
        <button className="btn btn-primary" onClick={this.handleRemoveAlert} >Quitar alertas</button>
      </div>
    );
  }
}

export default MyAlert
