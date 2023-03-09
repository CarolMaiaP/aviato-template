import { MdKeyboardArrowRight } from 'react-icons/md'

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
              <img src="https://via.placeholder.com/500x300" alt="" />
            
              <div className="product-infos">
                <h4>Men Dresses</h4>
                <p>Ver produtos <MdKeyboardArrowRight /></p>
              </div>
            </div>
            <div className="product">
              <img src="https://via.placeholder.com/500x300" alt="" />

              <div className="product-infos">
                <h4>Jewellery</h4>
                <p>Ver produtos <MdKeyboardArrowRight /></p>
              </div>
            </div>
          </div>
          <div className="product">
            <img src="https://via.placeholder.com/500x600" alt="" />

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