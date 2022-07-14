import React from 'react'

import { Sneaker, SneakerLoading } from '../components'


function Home() {
  const [items, setItems] = React.useState([])


  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1 className="mb-40">Все кроссовки</h1>

        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          <input placeholder="Поиск..." />
        </div>
      </div>

      <div className="d-flex">


        {
          arr.map((obj) => (
            <Sneaker
              key={obj.index}
              img='./img/sneakers/1.jpg'
              title={obj.title}
              price={obj.price}
            />
          ))
        }

        {/* <SneakerLoading

        /> */}

      </div>
    </div >
  )
}

export default Home