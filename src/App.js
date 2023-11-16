import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import Serials from "./pages/Serials"
import Error from "./pages/Error"

const App = () => {
  return<BrowserRouter>
  <header>Hlavicka stranky</header>
  <Routes>
    
    <Route path="/" element={<Home />}>
      <Route path="/movies" element={<Movies />}/>
      <Route path="/serials" element={<Serials />}/>
      <Route path="*" element={<Error />}/>
    </Route>

  </Routes>
   <footer>peta stranky</footer>
   </BrowserRouter>
}

export default App