import React, { useEffect } from 'react'
import axios from 'axios';
import ProductItem from './ProductItem';

const ProductList = ({list, setList}) => {


  return (
    <div className='list-container'>
      {list.map(item => 
          <ProductItem item={item}/>
      )}
    </div>
  )
}

export default ProductList