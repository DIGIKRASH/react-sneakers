import React from 'react'
import PropTypes from 'prop-types'

import SneakerLoading from './SneakerLoading'

function Sneaker({ id, img, title, price, onPlus, onFavorite, favorited = false, added = false, loading }) {
  const [isAdded, setIsAdded] = React.useState(added)
  const [isFavorite, setIsFavorite] = React.useState(favorited)


  const onClickPlus = () => {
    onPlus({ id, img, title, price })
    setIsAdded(!isAdded)
  }

  const handleFavorite = () => {
    onFavorite({ id, img, title, price })
    setIsFavorite(!isFavorite)
  }


  return (
    <div className="card mb-40">
      {
        loading
          ? <SneakerLoading />
          : <>
            <div onClick={handleFavorite} className="favorite">
              <img src={isFavorite ? "./img/liked.svg" : "./img/unliked.svg"} alt="Unliked" />
            </div>
            <img width='100%' height={135} src={img} alt="Sneakers" />
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
          </>
      }
    </div>

  )
}

Sneaker.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onPlus: PropTypes.func.isRequired,
  onFavorite: PropTypes.func.isRequired,
}

Sneaker.defaultProps = {
  img: '',
  title: '',
  price: 0,
}

export default Sneaker