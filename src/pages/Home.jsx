import React from 'react'

import { Sneaker } from '../components'

function Home({ items, searchValue, onAddToCart, clearSearchInput, onChangeSearchInput, onAddToFavorites, isLoading }) {

  const renderItems = () => {
    const filteredItems = items.filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase()))

    return (
      isLoading
        ? [...Array(10)]
        : filteredItems.map((obj, index) => (
          <Sneaker
            key={`${obj.title}_${index}`}
            img={obj.img}
            title={obj.title}
            price={obj.price}
            onFavorite={(item) => onAddToFavorites(item)}
            onPlus={(item) => onAddToCart(item)}
            loading={isLoading}
          />
        ))
    )
  }

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1 className="mb-40">
          {searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
        </h1>

        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          {searchValue &&
            <img onClick={clearSearchInput} className='clear cu-p' src="/img/btn-remove.svg" alt="Clear" />}
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
        </div>
      </div>


      <div className="d-flex flex-wrap">

        {renderItems()}

      </div>
    </div>
  )
}

export default Home