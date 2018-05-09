import React from 'react';

const CardImage = ({image}) => (
  <div className="card-image">
    <img src={image} alt="girl"/>
    <ul className="social-media">
      <li><a href="#"><span className="ion-social-facebook"></span></a></li>
      <li><a href="#"><span className="ion-social-twitter"></span></a></li>
      <li><a href="#"><span className="ion-social-linkedin"></span></a></li>
    </ul>
  </div>
)

export default CardImage

CardImage.defaultProps = { image: 'https://vignette.wikia.nocookie.net/yakusokunoneverland/images/3/3c/NoImageAvailable.png/revision/latest?cb=20160910192028' }
