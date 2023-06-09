// ==> css 파일 import
import '../App.css';
// ==> React router import 
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
// => React Bootstrap
import { Container, Form, Row, Col } from 'react-bootstrap';
// ==> navBar import
import NavBar from '../components/nav';
// ==> product import
import Product from '../components/product';
import { useState, useEffect, useRef } from "react";
// ==> 최근 본 상품 목록 import 
import RecentWatched from '../components/RecentWatched';
// ==> jquery import
// import $ from "jquery";

let MainPage = function MainPage() {

  // page 이동을 위함
  let navigate = useNavigate();
  // 페이지가 로드 된 직후부터 메인 대문 이미지 1초마다 변경
  // const[image, setImage] = useState(document.getElementById('item-img-box-img'));
  // useEffect(()=>{
  // const roll = 1;
  // setInterval(function(){
  //     roll++;
  //     setImage(image.setAttribute("src", "{require('../img/roll'" + roll+ ".jpg)}"));
  //     if(roll>3){roll=1;}
  //   },1000);
  // })

  return (
    <div className='body'>
      {/* 초록 배경 */}
      <div className='body-green'>
        {/* header */}
        <NavBar />
        {/* grenn-content */}
        <div className="green-content-box">
          {/* item-intro */}
          <div className='item-intro-box'>
            <h1>DISCOVER<img className='flower-box' src={require('../img/flower.png')}></img>
            </h1>
            <h1>NEW TASTE</h1>
            <br />
            <p>Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop.</p>
            {/* btn div */}
            <div className='shop-btn-box'>
              <button className='shop-btn' onClick={() => {
                navigate('/shop');
              }}>Shop all products</button>
            </div>
          </div>
          {/* item-img */}
          <div className='item-img-box'>
            <img src={require('../img/roll2.jpg')} id='item-img-box-img'></img>
            {/* <img src={ref} id='item-img-box-img'></img> */}
          </div>
        </div>
      </div>
      {/* 중간 흰 배경 */}
      <div className='body-white'>
        <p className='white-text'>PASSION INTENSITY PASSION PASSION  <img className='flower-box3' src={require('../img/flower.png')}></img> INTENSITY PASSION PASSION INTENSITY PASSION PASSION INTENSITY PASSION  <img className='flower-box3' src={require('../img/flower.png')}></img> PASSION PASSION INTENSITY PASSION PASSION</p>
      </div>

      {/* product-area  */}
      <div className='body-yellow'>
        {/* ====================================product-area */}
        <Product />
        <RecentWatched />
      </div>
      {/* <recentWatced/> */}
    </div>
  )
}
export default MainPage;