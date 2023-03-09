import { RiFacebookFill, RiTumblrFill } from 'react-icons/ri'
import { BsTwitter } from 'react-icons/bs'
import { ImInstagram, ImPinterest } from 'react-icons/im'
import { TiSocialInstagram } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import '../styles/footer.scss'

export function Footer(){
  return(
    <footer>
      <div className="main-footer">
        <div className="menu">
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to="/categoria">Categoria</Link></li>
            <li><Link to="/produto">Produto</Link></li>
          </ul>
        </div>
        <div className="newsletter">
          <p>Cadastre-se e receba nossas novidades</p>
          <div className="field">
            <input type="text" />
            <button>Cadastrar</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright &copy; 2019</p>
        
        <ul>
          <li>FAQ</li>
          <li>Minha conta</li>
          <li>Meus pedidos</li>
        </ul>

        <div className="social-media">
          <a href="https://www.facebook.com/" target="_blank"><RiFacebookFill size={16} /></a>
          <a href="https://twitter.com/" target="_blank"><BsTwitter size={16} /></a>
          <a href="https://www.instagram.com/" target="_blank"><TiSocialInstagram size={16} /></a>
          <a href="https://www.tumblr.com/" target="_blank"><RiTumblrFill size={16} /></a>
          <a href="https://br.pinterest.com/" target="_blank"><ImPinterest size={16} /></a>
        </div>
      </div>
    </footer>
  )
}