import Home from "./Components/Pages/Home/Home";
import Product from "./Components/Pages/Product/Product";
import Footbar from "./Components/TopBar/FootBar/Footbar";
import Topbar from "./Components/TopBar/TopBar";
function App(){
  return(
    <>
    <Topbar/>
    {/* <Home/> */}
    <Product/>
    <Footbar/>
    </>
  )
}
export default App;