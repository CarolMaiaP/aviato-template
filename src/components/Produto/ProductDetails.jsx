import { useState } from 'react'
import { HiMinus, HiPlus } from 'react-icons/hi'
import '../../styles/produto.scss'

export function ProductDetails(){
  const [ quantity, setQuantity ] = useState(1)
  const [ toggleDescription, setToggleDescription ] = useState(true);
  const [ toggleSpecifications, setToggleSpecifications ] = useState(false);

  return(
    <>
    <div className="product-item">
      <div className="product-images">
        <img src="https://via.placeholder.com/500x600" alt="" />
        <div className="miniature">
          <img src="https://via.placeholder.com/100x100" alt="" />
          <img src="https://via.placeholder.com/100x100" alt="" />
          <img src="https://via.placeholder.com/100x100" alt="" />
          <img src="https://via.placeholder.com/100x100" alt="" />
        </div>
      </div>
      <div className="product-infos">
        <div className="title">
          <h3>Product Est Quis Euismod</h3>
        </div>

        <div className="price">
          <h3>R$ 155.99</h3>
        </div>

        <div className="about-product">
          <p>But I must explain to you how all this mistaken ideia od ouncing and
            aising pain was born and I will give you a complete count of ut I must to you how all this mistaken ideia od ouncing and
            aising pain was born and I will give you a complete account of 
          </p>
        </div>

        <div className="product-colors">
          <p><strong>Cores</strong></p>
          <div className="colors">
            <div className="color">
            <div className="blue"></div>
            </div>
            <div className="color">
              <div className="pink"></div>
            </div>
            <div className="color">
              <div className="purple"></div>
            </div>
            <div className="color">
              <div className="green"></div>
            </div>
          </div>
        </div>

        <div className="product-sizes">
          <div className="title">
            <p><strong>Tamanhos</strong></p>
          </div>

          <div className="sizes">
            <div className="size">
              <p>P</p>
            </div>
            <div className="size">
              <p>M</p>
            </div>
            <div className="size">
              <p>G</p>
            </div>
            <div className="size">
              <p>XG</p>
            </div>
            <div className="size">
              <p>XXG</p>
            </div>
          </div>
        </div>

        <div className="buy">
          <div className="quantity">
            {quantity > 0 ?
              <span onClick={() => setQuantity((quantity) => quantity - 1)}><HiMinus /></span>
            : 
            <span className='blocked' onClick={() => setQuantity((quantity) => quantity - 1)}><HiMinus /></span>
            }
            <p>
              {quantity < 10 ?
                `0${quantity}`
              :
                quantity
              }
            </p>
            <span onClick={() => setQuantity((quantity) => quantity + 1)}><HiPlus /></span>
          </div>
          <div className="button">
            <button>Comprar</button>
          </div>
        </div>

        <div className="accordion">
          <div className="description">
            <div className="title" onClick={() => setToggleDescription(!toggleDescription)}>
              <h4>Descrição</h4>
              <span>{toggleDescription ? <HiMinus /> : <HiPlus />}</span>
            </div>
            <p className={`${toggleDescription ? "active" : "disabled"}`}>But I must explain to you how all this mistaken ideia od ouncing and
            aising pain was born and I will give you a complete count of ut how all this mistaken ideia </p>
          </div>
          <div className="specifications">
            <div className="title" onClick={() => setToggleSpecifications(!toggleSpecifications)}>
              <h4>Especificações</h4>
              <span>{toggleSpecifications ? <HiMinus /> : <HiPlus />}</span>
            </div>
            <p className={`${toggleSpecifications ? "active" : "disabled"}`}>But I must explain to you how all this mistaken ideia od ouncing and
            aising pain was born and I will give you a complete count of ut </p>
          </div>
        </div>
      </div>
    </div>

    <div className='related-products'>
        <div className="title">
          <h3>Produtos Relacionados</h3>
        </div>
        <div className="related">
          <div className="product">
            <img src="https://bob-teste-front-end.herokuapp.com/images/products/001.png" alt="Produto Relacionado" />
            <div className="infos">
              <h4>Creative Adidas T-shirt</h4>
              <p><strong>R$ 150.55</strong></p>
            </div>
          </div>

          <div className="product">
            <img src="https://bob-teste-front-end.herokuapp.com/images/products/002.png" alt="Produto Relacionado" />
            <div className="infos">
              <h4>Mango-Navy</h4>
              <p><strong>R$ 190.99</strong></p>
            </div>
          </div>

          <div className="product">
            <img src="https://bob-teste-front-end.herokuapp.com/images/products/003.png" alt="Produto Relacionado" />
            <div className="infos">
              <h4>Gravida Est Quis Euismod</h4>
              <p><strong>R$ 150.55</strong></p>
            </div>
          </div>

          <div className="product">
            <img src="https://bob-teste-front-end.herokuapp.com/images/products/004.png" alt="Produto Relacionado" />
            <div className="infos">
              <h4>Donec Condimentum Fer</h4>
              <p><strong>R$ 150.55</strong></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}