import React from 'react'


function CartItem({ img, title, price, onRemoveItem }) {
  return (
    <div className="cartItem d-flex align-center mb-20">
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="cartItemImg"></div>

      <div className="mr-20 flex">
        <p className="mb-5">{title}</p>
        <b>{price} руб.</b>
      </div>
      <img onClick={onRemoveItem} className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
    </div>
  )
}

export default CartItem