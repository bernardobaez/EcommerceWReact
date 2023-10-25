import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import { CarProvider } from "./contexts/CarProvider"
import Cart from "./pages/Cart"

function App() {

  return (
  <CarProvider>
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/car" Component={Cart}/>
        </Routes>
    </Router>
  </CarProvider>
  )
}

export default App
