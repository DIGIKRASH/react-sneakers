import React from 'react'

import { Sneaker, Info } from '../components'
import AppContext from '../context'


function Favorites({ onAddToCart, onAddToFavorites }) {
  const { favorites } = React.useContext(AppContext)

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1 className="mb-40">Мои закладки</h1>
      </div>

      <div className="d-flex flex-wrap">

        {favorites.length > 0
          ? favorites.map((obj,) => (
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
          : <Info
            img='./img/favorites-empty.svg'
            title='Закладок нет :('
            text='Вы ничего не добавляли в закладки'
          />
        }

      </div>
    </div>
  )
}

export default Favorites