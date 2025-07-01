import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Checkout from './pages/Checkout'
import ResponsiveAppBar from './components/ResponsiveAppBar'



function App() {

  return (
    <>
    <ResponsiveAppBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Checkout" element={<Checkout />} />
    </Routes>

    </>
  )
}

export default App
