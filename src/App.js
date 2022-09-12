
import { Route, Routes } from 'react-router-dom';
import Onlinestore from './Onlinestore';
import 'bootstrap/dist/css/bootstrap.min.css';
import Access from './Access';
import Clothing from './Clothing';
import Navbar from './Navbar';
import Footer from './Footer';
import Sign1 from './Sign1';
import Login1 from './Login1'
import CartItems from './CartItems';


function App() {
  return (
    <>
  
    <Routes>
      <Route path='/' element={<Sign1/>}/>
      <Route path='/login1' element={<Login1/>}/>
<Route path='/onlinestore' element={<Onlinestore/>}/>
<Route path='/access' element={<Access/>}/>
<Route path='/clothing' element={<Clothing/>}/>
<Route path='/cartitems' element={<CartItems/>}/>
    </Routes>
    
    </>
  );
}

export default App;
