
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignUp from './Pages/LoginSignUp';
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Mens' element={<ShopCategory category="Men"/>}/>
        <Route path='/Womens' element={<ShopCategory category="Women"/>}/>
        <Route path='/Kids' element={<ShopCategory category="Kid"/>}/>
        <Route path='/Product' element={<Product/>}>
         <Route path=':productId' element={<Product/>}/>
         </Route>
         <Route path='/Cart' element={<Cart/>}/>
         <Route path='/login' element={<LoginSignUp/>}/>
      </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
