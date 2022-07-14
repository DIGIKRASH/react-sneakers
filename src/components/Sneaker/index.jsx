import React from 'react'
import PropTypes from 'prop-types'


function Sneaker({ img, title, price, onFavorite, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false)

  const onClickPlus = () => {
    onPlus({img, title, price})
    setIsAdded(!isAdded)
  }

  return (
    <div className="card mb-40">
      <img width={133} height={112} src={img} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <button className="button" onClick={onClickPlus}>
          <img width={11} height={11} src={isAdded ? './img/btn-checked.svg' : './img/btn-plus.svg'} alt="Plus" />
        </button>
      </div>
    </div>
  )
}

Sneaker.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

Sneaker.defaultProps = {
  img: '',
  title: '',
  price: 0,
}

export default Sneaker