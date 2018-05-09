import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card, {CardData, CardImage } from "./Card"

class App extends Component {
  constructor()
  {
      super()

      this.state = {
        profiles: [
          {name : "Exar Kun", content: "A Jedis strength flows from the Force. But beware of the d"},
          {name : 'man', image: 'images/img-profile-man.jpg', content:'A Jedis strength flows from the Force. But beware of the d'},
          {name : 'girl', image: 'images/img-profile-girl.jpg', content:'A Jedis strength flows from the Force. But beware of the d'},
          {name : 'man',image: 'images/img-profile-man.jpg'}
        ]
      }
  }


  render() {
    const  {profiles} = this.state
    return (
      <div class="container">
        {
          profiles.map((profile,ix) => (
            <Card key={ix}>
              <CardImage image={profile.image}></CardImage>
              <CardData name={profile.name} description={profile.content}></CardData>
            </Card>
          ))
        }
      </div>
    )
  }
}

export default App;
