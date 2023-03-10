import { useEffect, useState } from 'react'
import { HiViewGrid } from 'react-icons/hi'
import { MdViewList } from 'react-icons/md'
import { MdKeyboardArrowRight } from 'react-icons/md'

const url = 'https://cors-anywhere.herokuapp.com/https://bob-teste-front-end.herokuapp.com/api/products.json'

export function ProductsCategory(){
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
    <div className="category-products">
      <div className="categories">
        <button>Feminino</button>
        <button>Masculino</button>
        <button>Acessórios</button>
      </div>
      <div className="products-top-bar">
        <div className="filter">
          <p><span>Ordenar</span>: Name</p>
          <p><span>Visualizar</span>: 9</p>
        </div>
        <div className="view">
          <p>View</p>
          <div className="view-grid">
            <HiViewGrid size={22} />
          </div>
          <div className="view-list">
            <MdViewList size={22} />
          </div>
        </div>
      </div>
      <div className="products">
        {products.map((product) => {
          return(
            <div className="product" key={product.id}>
              <img src={product.photo} alt={product.name} />
              <div className="infos">
                <h4>{product.name}</h4>
                <p><strong>R$ {product.price}</strong></p>
              </div>
            </div>
          )
        })}
      </div>
      <div className="pagination">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>...</span>
        <span>5</span>
        <div className="next-page">
          <MdKeyboardArrowRight size={20} />
        </div>
      </div>
    </div>
  )
}