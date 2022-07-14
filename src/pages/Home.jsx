import axios from 'axios'
import React from 'react'

import { Sneaker, SneakerLoading } from '../components'


function Home() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])

  React.useEffect(() => {
    fetch('https://62d0089fd9bf9f170581f8bf.mockapi.io/items')
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        setItems(json)
      })
  }, [])

  const onAddToCart = (obj) => {
    setCartItems([...cartItems, obj])
  }


  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1 className="mb-40">Все кроссовки</h1>

        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          <input placeholder="Поиск..." />
        </div>
      </div>

      <div className="d-flex flex-wrap">


        {
          items.map((obj, index) => (
            <Sneaker
              key={index}
              img={obj.img}
              title={obj.title}
              price={obj.price}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))
        }

        {/* <SneakerLoading

        /> */}

      </div>
    </div>
  )
}

export default Home