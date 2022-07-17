import React from 'react'
import AppContext from '../context'

function Info({ img, title, text }) {
  const { setCartOpen } = React.useContext(AppContext)

  return (
    <div class="cartEmpty d-flex align-center justify-center flex-column flex">
      <img class="mb-20" width="110px" height="120px" src={img} alt="Empty" />
      <h2>{title}</h2>
      <p class="opacity-6">{text}</p>
      <button onClick={() => setCartOpen(false)} class="greenButton">
        <img src="/img/arrow.svg" alt="Arrow" />
        Вернуться назад
      </button>
    </div>
  )
}

export default Info