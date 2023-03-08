import { Link } from "react-router-dom";

export function Navbar(){
  return(
    <div className="navbar">
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to="/categoria">Categoria</Link></li>
        <li><Link to="/produto">Produto</Link></li>
      </ul>
    </div>
  )
}