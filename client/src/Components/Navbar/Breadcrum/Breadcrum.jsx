    import React from 'react'
    import '/Users/sarangaghara/Desktop/E-commerce/frontend/client/src/Components/Navbar/Breadcrum/Breadcrum.css'
    import arrow_icon from '/Users/sarangaghara/Desktop/E-commerce/frontend/client/src/Assets/breadcrum_arrow.png'
    const Breadcrum = (props) => {
        const {product} = props;
      return (
        <div className='breadcrum'>
         HOME <img src={arrow_icon} alt=""/> SHOP <img src={arrow_icon} alt=""/>{product.category} <img src={arrow_icon} alt=""/>{product.name}
        </div>
      )
    }
    
    export default Breadcrum
    