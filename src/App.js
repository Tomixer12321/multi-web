import {BrowserRouter,Routes,Route} from "react-router-dom"

const App = () => {
  return<BrowserRouter>
   <Routes>
    <Route path="/" element={<h1>home</h1>}/>
    <Route path="/movies" element={<h1>filmy</h1>}/>
    <Route path="/serials" element={<h1>serialy</h1>}/>
    <Route path="/new" element={<h1>nove</h1>}/>
   </Routes>
   </BrowserRouter>
}

export default App