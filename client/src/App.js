import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shopcategory from './Pages/Shopcategory.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Product from './Pages/Product.jsx'; 
import  Cart  from './Pages/Cart.jsx';
import LoginSignup from './Pages/LoginSignup.jsx'; 
import Shop from './Pages/Shop.jsx';
import Footer from './Components/Navbar/Footer/Footer.jsx';
import men_banner from '/Users/sarangaghara/Desktop/E-commerce/frontend/client/src/Assets/banner_mens.png'
import women_banner from '/Users/sarangaghara/Desktop/E-commerce/frontend/client/src/Assets/banner_women.png'
import kids_banner from '/Users/sarangaghara/Desktop/E-commerce/frontend/client/src/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<Shopcategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<Shopcategory  banner={women_banner} category="women" />} />
          <Route path="/kids" element={<Shopcategory banner={kids_banner} category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
