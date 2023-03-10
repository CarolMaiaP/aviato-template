import { GiPhone } from 'react-icons/gi'
import { SlBag } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import '../styles/header.scss'

export function Header(){
  return(
    <header>
      <div className="contact">
        <GiPhone size={24} /> 
        <p>4191 4399</p>
      </div>
      <div className="logo">
        <h3><Link to="/">Aviato</Link></h3>
      </div>
      <div className="cart">
        <SlBag size={20} />
        <div className="quantity">
          <p>(0) - </p>
        </div>
        <div className="price">
          <p><strong>R$ 0.00</strong></p>
        </div>
      </div>
    </header>
  )
}