import { BrowserRouter, Route, Routes } from "react-router"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import About from "./pages/About"
import ProductDetails from "./pages/ProductDetails"
import Contact from "./pages/Contact"
import Log from "./components/UI/Log"
import Signup from "./components/UI/Signup"


function App() {
  

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/shop/:id" element={<ProductDetails/> } />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/log" element={<Log/>}/>
        <Route path="/signup" element={<Signup/> } />
      </Route>
     </Routes>
    </BrowserRouter>

  )
}

export default App
