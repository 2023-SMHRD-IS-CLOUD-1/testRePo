import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductItem = ({item}) => {
  console.log('item in ProductItem', item); 
  
  const nav = useNavigate();

  return (
    <div
      className='product-container'
      onClick={()=>{
        nav(`/detail/${item.no}`); 
      }}>
      <img
        src={item.src} width="150px"></img>
      <p>
        {item.title}
      </p>
      <span>{item.price}원</span>
    </div>
  )
}

export default ProductItem