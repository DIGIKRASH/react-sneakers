import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { CartMini, Header } from './components';
import { Home, Cart } from './pages'

function App() {
  const [cartOpen, setCartOpen] = React.useState(false)

  const handleClickCart = () => {
    setCartOpen(true)
  }
  const handleCloseCart = () => {
    setCartOpen(false)
  }

  return (
    <div className="wrapper clear">

      {cartOpen &&
        <CartMini onClose={handleCloseCart} />}

      <Header onClickCart={handleClickCart} />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>

    </div>
  );
}

export default App;
