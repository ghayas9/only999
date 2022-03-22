import Home from "./Components/Pages/Home/Home";
import Product from "./Components/Pages/Product/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Components/admin/admin";
import Pages from "./Components/Pages/Pages";
function App(){
  return(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Pages page={<Home />}/>}/>
        <Route index element={<Pages page={<Home />}/>} />
        <Route path="Products" element={<Pages page={<Product />}/>} />
        <Route path="admin" element={<Admin/>} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
    </Routes>
    
  </BrowserRouter>
  )
}
export default App;