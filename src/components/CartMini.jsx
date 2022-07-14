import React from 'react'

import { CartItem } from '../components'



function CartMini({ onClose, items, onRemoveItem }) {


  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" alt="Remove" />
        </h2>

        <div className="items">

          {
            items &&
            items.map((obj, index) => (
              <div key={`${obj.title}_${index}`} className="cartItem d-flex align-center mb-20" >
                <div
                  style={{ backgroundImage: `url(${obj.img})` }}
                  className="cartItemImg"></div>

                <div className="mr-20 flex">
                  <p className="mb-5">{obj.title}</p>
                  <b>{obj.price} руб.</b>
                </div>
                <img onClick={onRemoveItem} className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
              </div>
            ))
          }

          {/* <CartItem
                key={index}
                img={obj.img}
                title={obj.title}
                price={obj.price}
                onRemoveItem={handleRemoveItem}
              /> */}
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div >
  )
}

export default CartMini