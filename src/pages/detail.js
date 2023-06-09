// navBar import
import NavBar from '../components/nav';
// React router import 
import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom'
// product import
import product from '../productData';
// useState import
import { useState, useEffect  } from "react";
// React redux import
import { useDispatch, useSelector } from 'react-redux';
// redux 변경함수  import
import store, { addCart, removeCart } from '../store';


let DetailPage = function DetailPage(){
    // page 이동을 위함
    let navigate = useNavigate();
    // mainpage에서 detail/:id 로 이동하기 위함.
    let {id} = useParams();
    let foundProduct = product.find(function(x){
        return x.id ==id;
    });
    // ==> 상품별 갯수를 담을 state
    let [productCount,setProductCount] = useState(1);
    // ==> 상품 갯수에 따른 가격을 담을 state
    let [productPrice, setProductPrice] = useState(foundProduct.price);
    // ==> react 는 state 변경 시마다 html을 재렌더링 함으로써 개발자 의도대로 state 변경이 
    // 이루어지지 않을 수 있음. 따라서 useEffet 로 lifscycle hook 을 걸어 조작해주어야함
    useEffect(()=>{
        setProductPrice(foundProduct.price * productCount);
    }) 
    // redux state 가져오기, 장바구니 동일 상품 중복검사를 위함.
    let cart = useSelector((state) => { return state });
    // ==> redux (store.js) 로 데이터 보내기 위함
    let dispatch = useDispatch();


    return (
        <>
            <div className="detail-bg">
                <NavBar/>
                {/* ==> product-detail-box */}
                <div className='product-detail-box'>
                    {/* ==> product-img-box */}
                     <div className='product-detail-img-box'>
                        <img src={foundProduct.img}></img>   
                     </div>  
                    {/* ==> product-text-box  */}
                    <div className='product-detail-text-box'>
                        {/* ==> 제품이름 */}
                        <h2 style={{fontSize:'70px'}}>{foundProduct.title} ${foundProduct.price}</h2><br/>
                        <h2>WHAT'S INSIDE</h2>
                        <p>{foundProduct.ingredient}</p>
                        <h2>WHY WE LOVE IT</h2>
                        <p>{foundProduct.point}</p>
                        <button>
                        {/* ==> 수량 - 버튼  */}
                        <span className="minus-btn" onClick={()=>{
                            // 현재 수량이 1 미만이라면 - 버튼 동작하지 않도록 해라
                            if(productCount <= 1){
                                return false;
                            } 
                            setProductCount(productCount-1);
                            setProductPrice(foundProduct.price * productCount)
                        }}>-</span>
                        {/* ==> 제품 수량 */}
                        {productCount}
                        {/* ==> 수량 + 버튼 */}
                        <span className="plus-btn" onClick={()=>{
                             setProductCount(productCount+1);               
                        }}>+</span>
                        </button><br/>
                        <button className="add-cart-btn" onClick={()=>{

                            // 만약 store.js 에 중복된 상품 있다면 중복 알림창 띄우라 
                            // 중복 안되었다면 store.js 에 데이터 저장해라
                            // 조건문으로 처리
                            // ==> some()메서드 이용
                            let result = cart.stock.some((x)=>{ return x.id == foundProduct.id});
                            if(result == true) 
                            {
                                alert('이미 장바구니에 있는 상품입니다. 장바구니 페이지로 이동하시겠습니까 ');
                                navigate('/cart');
                            }else{
                                navigate('/cart'); dispatch(addCart({id : foundProduct.id, title : foundProduct.title, price : foundProduct.price,totalPrice : productPrice, count : productCount, img : foundProduct.img  }));
                            }
   
                        }}>ADD TO CART &nbsp;&nbsp;
                         {/*==> 수량에 따른 제품 가격  */}
                        ${productPrice}</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DetailPage;