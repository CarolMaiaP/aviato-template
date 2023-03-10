import { MdKeyboardArrowRight } from 'react-icons/md'
import productImage1 from '../../assets/500x300.png'
import productImage2 from '../../assets/500x300.png'
import productImage3 from '../../assets/500x600.png'

export function Tendencies(){
  return(
    <>
      <div className="title">
        <h3>Tendências</h3>
      </div>
      <div className="highlight">
        <div className="images">
          <div className="first-images">
            <div className="product">
              <img src={productImage1} alt="Men Dresses" />
            
              <div className="product-infos">
                <h4>Men Dresses</h4>
                <p>Ver produtos <MdKeyboardArrowRight /></p>
              </div>
            </div>
            <div className="product">
              <img src={productImage2} alt="Jewellery" />

              <div className="product-infos">
                <h4>Jewellery</h4>
                <p>Ver produtos <MdKeyboardArrowRight /></p>
              </div>
            </div>
          </div>
          <div className="highlight-product">
            <img src={productImage3} alt="Women Dresses" />

            <div className="product-infos">
                <h4>Women Dresses</h4>
                <p>Ver produtos <MdKeyboardArrowRight /> </p>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}