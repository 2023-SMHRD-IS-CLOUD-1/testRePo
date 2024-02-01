import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = ({list}) => {

  let {num} = useParams(); 
  console.log('detail page list', list.find(item => item.no == num))
  let selectItem = list.find(item => item.no == num);
  
  return (
    <div className='list-container'>
      <div className='detail-item'>

        <h3>{selectItem.title}</h3>
        <div>
          <img src={selectItem.src} width='200px'></img>
        </div>
        <p>가격 : {selectItem.price}원</p>
        <p>배송비 : {selectItem.delivery}원</p>
      </div>
    </div>
  )
}

export default ProductDetail