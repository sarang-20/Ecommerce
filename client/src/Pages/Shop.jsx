import React from 'react';
import Hero from '/Users/sarangaghara/Desktop/E-commerce/frontend/client/src/Components/Navbar/Hero/Hero.jsx';
import Popular from '../Components/Navbar/Item/Popular/Popular';
import Offers from '/Users/sarangaghara/Desktop/E-commerce/frontend/client/src/Components/Navbar/Offers/Offers.jsx'
import NewCollection from '../Components/Navbar/NewCollection/NewCollection';
import NewsLetter from '../Components/Navbar/NewsLetter/NewsLetter';
const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular/>
      <Offers/>
      <NewCollection/>
      <NewsLetter/>
    </div>
  );
};

export default Shop;
