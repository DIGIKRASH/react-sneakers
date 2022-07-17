import React from 'react'
import axios from 'axios'

import { CartItem, Info } from '../components'
import AppContext from '../context'



function CartMini({ onClose, items, onRemoveItem }) {
  const { cartItems, setCartItems } = React.useContext(AppContext)
  const [isOrder, setIsOrder] = React.useState(false)
  const [orderId, setOrderId] = React.useState(null)


  const onClickOrder = () => {
    // axios.post('https://62d0089fd9bf9f170581f8bf.mockapi.io/orders', cartItems)
    // setCartItems((prev) => [...prev, data])
    setIsOrder(true)
    setCartItems([])
    console.log(isOrder);
  }

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" alt="Remove" />
        </h2>

        {
          items.length > 0 ?
            (
              <>
                <div className="items">
                  {
                    items &&
                    items.map((obj, index) => (
                      <CartItem
                        key={`${obj.title}_${index}`}
                        id={obj.id}
                        img={obj.img}
                        title={obj.title}
                        price={obj.price}
                        onRemove={onRemoveItem}
                      />
                    ))
                  }
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
                  <button onClick={onClickOrder} className="greenButton">
                    Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
                  </button>
                </div>
              </>
            )


            : (
              <Info
                img={isOrder ? './img/complete-order.jpg' : './img/empty-cart.jpg'}
                title={isOrder ? 'Заказ оформлен!' : 'Корзина пустая'}
                text={isOrder ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
              />
            )
        }

      </div>
    </div>
  )
}

export default CartMini