// Write your code here.

import './index.css'

const CardItem = props => {
  const {carddet} = props
  const {title, description, imgUrl, className} = carddet
  return (
    <li className={`card ${className}`}>
      <h1 className="title">{title}</h1>
      <p className="desc">{description}</p>
      <img className="img" src={imgUrl} alt={title} />
    </li>
  )
}

export default CardItem
