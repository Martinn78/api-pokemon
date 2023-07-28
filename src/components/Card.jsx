import './Card.css'

const Card = ({name, img}) => {
  return (
    <div className="card">
        <div className="card__circle"></div>
        <p className="card__name">{name}</p>
        <img className="card__img" src={img} alt="pokemon img" />
    </div>
  )
}

export {Card}