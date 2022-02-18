import Home from "./Components/Pages/Home/Home";
import Product from "./Components/Pages/Product/Product";
import Footbar from "./Components/TopBar/FootBar/Footbar";
import Topbar from "./Components/TopBar/TopBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App(){
  return(
    <BrowserRouter>
     <Topbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
        <Route index element={<Home />} />
        <Route path="Products" element={ <Product/>} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
    </Routes>
    <Footbar/>
  </BrowserRouter>
  )
}
export default App;