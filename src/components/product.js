import { useState, useEffect } from "react";
// product.js 파일 import
import productData from "../productData";
// React router import 
import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom'
// React redux import
import { useDispatch, useSelector } from 'react-redux';
// redux 변경함수  import
import { addCart, removeCart } from '../store';


let Product = function Product() {
  // ==> import 해온 product배열 data를 state에 저장 
  let [product, setProduct] = useState(productData);
  // ==> 페이지 이동을 위함 
  let navigate = useNavigate();
  // ==> 상품별 상세페이지 이동을 위함
  let { id } = useParams();
  // ==> 상품별 갯수를 담을 state
  let [productCount, setProductCount] = useState(1);
  // ==> 상품 갯수에 따른 가격을 담을 state
  let [productPrice, setProductPrice] = useState(0);
  // ==> redux (store.js) 로 데이터 보내기 위함
  let dispatch = useDispatch();
  // redux state 가져오기, 장바구니 동일 상품 중복검사를 위함.
  let cart = useSelector((state) => { return state });


  return (
    <>
      {/* ==> 가격순 버튼 box */}
      <div className='price-sort-box'>
        {/* ==> 낮은 가격순 */}
        <button onClick={() => {
          let productCopy = [...product];
          setProduct(productCopy.sort((a, b) => {
            return a.price - b.price;
          }));
        }}>LOW PRICE</button>
        {/* ==> 높은 가격순 */}
        <button onClick={() => {
          let productCopy = [...product];
          setProduct(productCopy.sort((a, b) => {
            return b.price - a.price;
          }));
        }}>HIGH PRICE</button>
        {/* ==> ABC 순 */}
        <button onClick={() => {
          let productCopy = [...product];
          setProduct(productCopy.sort((a, b) => {
            return a.title.localeCompare(b.title);
          }));
        }}>ABC</button>
      </div>
      {/* ====================================product-area */}
      <div className='container'>
        <div className='row'>
          {
            // ==> map 반복문으로 product state 에 담긴 배열 상품 뿌려주기
            product.map((a, i) => {
              return (
                <div className='col-md-4 product-box'>
                  {/* <div> */}
                  {/* ==> 제품 이름 */}
                  <h1>{product[i].title}</h1>
                  {/* ==> 제품 이미지 */}
                  <div className='product-img-box' onClick={() => {
                    navigate('/detail/' + product[i].id)
                    //최근에 본 상품 localStorage 에 추가하기
                    let watched = JSON.parse(localStorage.getItem('watched'));
                    watched.push(product[i].id);
                    watched = new Set(watched);
                    watched = Array.from(watched);
                    localStorage.setItem('watched', JSON.stringify(watched));
                  }}>
                    <img src={product[i].img}></img>
                  </div>
                  <br />
                  {/* ==> 장바구니 추가 버튼*/}
                  <button className="add-cart-btn" onClick={() => {
                            // 만약 store.js 에 중복된 상품 있다면 중복 알림창 띄우라 
                            // 중복 안되었다면 store.js 에 데이터 저장해라
                            // 조건문으로 처리
                            // ==> some()메서드 이용
                            let result = cart.stock.some((x)=>{ return x.id == product[i].id});
                            if(result == true) 
                            {
                                alert('이미 장바구니에 있는 상품입니다. 장바구니 페이지로 이동하시겠습니까 ');
                                navigate('/cart');
                            }else{
                                navigate('/cart'); dispatch(addCart({ id: product[i].id, title: product[i].title, price: product[i].price, img: product[i].img, count: product[i].count, totalPrice: product[i].price }));
                            }
                  }}>ADD TO CART&nbsp;&nbsp;
                    {/*==> 상품 가격  */}
                    ${product[i].price}</button>
                </div>
                //</div>
              )
            })
          }
        </div >
      </div >
      {/* ====================================product-area 끝 */}
    </>
  )
}

export default Product;