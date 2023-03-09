import { useEffect, useState } from "react";

const url = 'https://cors-anywhere.herokuapp.com/https://bob-teste-front-end.herokuapp.com/api/products.json'

export function Popular(){
  const [ products, setProducts ] = useState([])

  async function handleApi(){   
    const response = await fetch(url)
    const data = await response.json();

    setProducts(data)
  }

  useEffect(() => {
    handleApi()
  }, [])

  return(
    <>
      <div className="title">
        <h3>Populares</h3>
      </div>

      <div className="popular-clothes">
          <div className="products">
            {products.map((product) => {
              return(
                <div className="product" key={product.id}>
                  <img src={product.photo} alt={product.name} />
                  <h4>{product.name}</h4>
                  <p>R$ {product.price}</p>
                </div>
              )
            })}
          </div>
        <div className="show-more-button">
          <button>Ver mais produtos</button>
        </div>
      </div>
    </>
  )
}