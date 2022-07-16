import axios from 'axios';
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { CartMini, Header } from './components';
import { Home, Favorites } from './pages'


const AppContext = React.createContext({})

function App() {
  const [cartOpen, setCartOpen] = React.useState(false)
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get('https://62d0089fd9bf9f170581f8bf.mockapi.io/cart')
      const favoritesResponse = await axios.get('https://62d0089fd9bf9f170581f8bf.mockapi.io/favorites')
      const itemsResponse = await axios.get('https://62d0089fd9bf9f170581f8bf.mockapi.io/items')

      setIsLoading(false)

      setCartItems(cartResponse.data)
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data)
    }

    fetchData()
  }, [])


  const handleClickCart = () => {
    setCartOpen(true)
  }
  const handleCloseCart = () => {
    setCartOpen(false)
  }

  const onAddToCart = async (obj) => {
    try {
      if (cartItems.find((cartObj) => Number(cartObj.id) === Number(obj.id))) {
        axios.delete(`https://62d0089fd9bf9f170581f8bf.mockapi.io/cart/${obj.id}`)
        setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
      } else {
        const { data } = await axios.post('https://62d0089fd9bf9f170581f8bf.mockapi.io/cart', obj)
        setCartItems((prev) => [...prev, data])
      }
    }
    catch (error) {
      alert('Ошибка!')
    }
  }
  const onAddToFavorites = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://62d0089fd9bf9f170581f8bf.mockapi.io/favorites/${obj.id}`)
      } else {
        const { data } = await axios.post('https://62d0089fd9bf9f170581f8bf.mockapi.io/favorites', obj)
        setFavorites((prev) => [...prev, data])
      }
    }
    catch (error) {
      alert('Ошибка!')
    }
    console.log(favorites)
  }


  const handleRemoveCartItem = (id) => {
    axios.delete(`https://62d0089fd9bf9f170581f8bf.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value)
  }
  const clearSearchInput = () => {
    setSearchValue('')
  }


  return (
    <AppContext.Provider value=({items, cartItems, favorites})>
      <div className="wrapper clear">

        {cartOpen &&
          <CartMini
            onClose={handleCloseCart}
            items={cartItems}
            onRemoveItem={handleRemoveCartItem}
          />}

        <Header onClickCart={handleClickCart} />


        <Routes>
          <Route exact path='/' element={
            <Home
              items={items}
              searchValue={searchValue}
              onAddToCart={onAddToCart}
              clearSearchInput={clearSearchInput}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorites={onAddToFavorites}
              cartItems={cartItems}
              isLoading={isLoading}
            />}
          />
          <Route exact path='/favorites' element={
            <Favorites
              items={favorites}
              onAddToFavorites={onAddToFavorites}
              onAddToCart={onAddToCart}
            />}
          />
        </Routes>

      </div>
    </AppContext.Provider>
  );
}

export default App;
