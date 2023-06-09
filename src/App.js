import { useState, useEffect } from "react";
// css 파일 import
import './App.css';
// React Bootstrap
import { Container, Form, Row } from 'react-bootstrap';
// React router import 
import { Route, Routes, Link, useParams } from 'react-router-dom'
// Product data import
import product from './productData';
// Main Page import
import MainPage from './pages/main';
// Shop Page import
import ShopPage from './pages/shop';
// Detail Page import
import DetailPage from './pages/detail';
// Cart Page import
import CartPage from './pages/cart';
// our Story Page import
import OurStory from "./pages/ourstory";
// contact us Page import
import ContactUs from "./pages/contactus";

function App() {
  // ==> localStorage 에 저장하기
  // localStorage  에는 array / object 자료형을 저장불가.
  // 따라서 JSON 형태로 바꿔주어 저장해야 함
  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify([]))
  }, [])

  return (
    <>
      {/* 페이지 이동 url router 등록 */}
      <Routes>
        {/* ==> 메인페이지 */}
        <Route path="/" element={<MainPage/>}></Route>
        {/* ==> shop 페이지 */}
        <Route path="/shop" element={<ShopPage/>}></Route>
        {/* ==> detail 페이지 */}
        <Route path="/detail/:id" element={<DetailPage/>}></Route>
        {/* ==> cart 페이지 */}
        <Route path="/cart" element={<CartPage/>}></Route>
        {/* ==> ourstory 페이지 */}
        <Route path="/ourstory" element={<OurStory/>}></Route>
        {/* ==> contactus 페이지 */}
        <Route path='/contactus' element={<ContactUs/>}></Route>
      </Routes>
    </>
  );
}
export default App;
