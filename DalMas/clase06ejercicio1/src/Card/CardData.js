import React,{Component} from 'react';
import styled from 'styled-components'

class CardData extends Component {
  render() {
    const  DescriptionContainer = styled.p`color: ${props => (props.description) ? "black" : "red" }`
    const {name,description} = this.props

    return(
      <div className="card-data">
        <h2>{name}</h2>
        <DescriptionContainer description>{description}</DescriptionContainer>
        <a href="#">Ver más</a>
      </div>
  )}
}

export default CardData

CardData.defaultProps = {
  description: "You got a real attitude problem, McFly"
}
