import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { CartMini, Header, Sneaker, SneakerLoading } from './components';
import { Home, Cart } from './pages'


function App() {
  const [cartOpen, setCartOpen] = React.useState(false)
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')

  React.useEffect(() => {
    fetch('https://62d0089fd9bf9f170581f8bf.mockapi.io/items')
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        setItems(json)
      })
  }, [])

  const handleClickCart = () => {
    setCartOpen(true)
  }
  const handleCloseCart = () => {
    setCartOpen(false)
  }

  const onAddToCart = (obj) => {
    // if (obj.id !== id) {
    setCartItems((prev) => [...prev, obj])
    // }
  }

  const handleRemoveItem = () => {

  }

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value)
  }
  const clearSearchInput = () => {
    setSearchValue('')
  }

  return (
    <div className="wrapper clear">

      {cartOpen &&
        <CartMini onClose={handleCloseCart} items={cartItems} onRemoveItem={handleRemoveItem} />}

      <Header onClickCart={handleClickCart} />


      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="mb-40">
            {searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
          </h1>

          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            {searchValue &&
              <img onClick={clearSearchInput} className='clear cu-p' src="/img/btn-remove.svg" alt="Clear"  />}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">


          {
            items
            .filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((obj, index) => (
              <Sneaker
                key={`${obj.title}_${index}`}
                img={obj.img}
                title={obj.title}
                price={obj.price}
                onPlus={(item) => onAddToCart(item)}
              />
            ))
          }

          {/* <SneakerLoading

        /> */}

        </div>
      </div>


      {/* <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes> */}

    </div>
  );
}

export default App;
