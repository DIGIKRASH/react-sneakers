import React from 'react'

import { Sneaker } from '../components'


function Favorites({ items, onAddToCart, onAddToFavorites }) {

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1 className="mb-40">Мои закладки</h1>
      </div>

      <div className="d-flex flex-wrap">

        {
          items.map((obj,) => (
            <Sneaker
              key={`${obj.title}_${obj.id}`}
              id={obj.id}
              img={obj.img}
              title={obj.title}
              price={obj.price}
              favorited={true}
              onFavorite={(item) => onAddToFavorites(item)}
              onPlus={(item) => onAddToCart(item)}
            />
          ))
        }

      </div>
    </div>
  )
}

export default Favorites