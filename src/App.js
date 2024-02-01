import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import { Routes,Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from 'axios';

function App() {
  const [list, setList] = useState([]);

  useEffect(()=>{
    axios
     .get("http://localhost:3000/bestList.json")
     .then((res)=>{
        console.log('res', res.data.list);
        setList(res.data.list);
      })
  },[])
  return (
    <div className="container">    
        <Header/>
        {/* page 별로 바뀌어야 하는 값들은 Router */}
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route
            path="/list"
            element={<ProductList list={list} setList={setList}/>}/>
          <Route 
            path="/detail/:num" 
            element={<ProductDetail list={list}/>}
          ></Route>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
