import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Navbar } from "./components/Navbar"
import { Category } from "./pages/Category"
import { Home } from "./pages/Home"
import { Product } from "./pages/Product"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/categoria" element={<Category />}/>
          <Route path="/produto" element={<Product />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
