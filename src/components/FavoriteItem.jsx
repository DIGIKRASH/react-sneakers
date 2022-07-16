import React from 'react'


function FavoriteItem({ id, img, title, price, onRemove }) {
  return (
    <div className="card mb-40">
      <img width={133} height={112} src={img} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <button className="button" onClick={() => onRemove(id)}>
          <img width={11} height={11} src='./img/btn-remove.svg' alt="Plus" />
        </button>
      </div>
    </div>
  )
}

export default FavoriteItem