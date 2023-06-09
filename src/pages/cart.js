// ==> navBar import
import NavBar from '../components/nav';
import { useEffect, useState } from 'react';
// ==> React router import 
import { useNavigate } from 'react-router-dom'
// ==> React redux import
import { useDispatch, useSelector } from 'react-redux';
// ==> redux 변경 함수 가져오기
import { removeCart, changeCountPlus, changeTotalPlus, changeCountMinus, changeTotalMinus } from '../store';

let CartPage = function CartPage() {
    // ==> redux state 가져오기
    let cart = useSelector((state) => { return state });
    // ==> 제품 삭제 시 해당 제품 id를 redux 변경 함수에 보내기 위함
    let dispatch = useDispatch();
    // ==> 장바구니에 담긴 모든 제품의 총 금액 담을 state 
    let [totalPrice, setTotalPrice] = useState(0);
    // ==> 장바구니 상품 유뮤 확인을 위한 state
    let [cartCount, setCartCount] = useState(0);
    useEffect(() => {
        // 장바구니에 담긴 모든 제품의 총 금액을 담을 변수
        let allItemTotal = 0;
        cart.stock.map((a, i) => {
            allItemTotal += cart.stock[i].totalPrice;
            setTotalPrice(allItemTotal);
        })
        // ==> 장바구니 상품 유무 확인을 위해 cart.stock 배열 요소 갯수 구하기
        setCartCount(cart.stock.length);
        console.log(cartCount);
    })
    // ==> page 이동을 위함
    let navigate = useNavigate();
    // ====================================================> body 시작
    return (
        <>
            <div className="cart-bg">
                <NavBar />
                {/* food-cart div */}
                <div className='food-cart-box'>
                    <h1>YOUR FOOD CART</h1>
                    {/* 장바구니 상품 정렬 box */}
                    <div className='food-cart-box2'>
                        {/* ==> JSX 삼항연상자를 이용하여  */}
                        {/* 장바구니 state 가 비어있다면 '장바구니가 비어있습니다' 문구 띄우고  */}
                        {/* 아니라면 제품 사진들 띄워라  */}
                        {
                            cartCount == 0 ? <CartNo/> : <CartYes cart={cart} dispatch={dispatch} />
                        }
                    </div>
                    {/* ==> 주문 총 금액 div */}
                    {/* ==> 장바구니 비어있다면 주문버튼 숨기고, 차 있다면 버튼 보여줘라 */}
                    {
                        cartCount == 0 ? null : <OrderBtn totalPrice={totalPrice} navigate={navigate}/>
                    }
                </div>
            </div>
        </>
    )
}
// ==========================================================> body 끝.
// ==========================================================> Component 시작.
// ==> 장바구니가 차 있을 시 보여줄 컴포넌트
function CartYes(props) {
    return (
        <>
            {
                props.cart.stock && props.cart.stock.map((a, i) => {
                    return (
                        <div className='food-cart-box3'>
                            {/* ==> 제품 수량 div */}
                            <button className='count-btn'>
                                {/* ==> 제품 수량 - 버튼  */}
                                <span className="count-minus-btn" onClick={() => {
                                    // 수량이 0밑으로 내려가지 못하도록
                                    {
                                        if (props.cart.stock[i].count <= 1)
                                            return false;
                                    }
                                    // state 변경 함수 사용 시  dispatch 로 감싸야함 
                                    props.dispatch(changeCountMinus(props.cart.stock[i].id))
                                    props.dispatch(changeTotalMinus(props.cart.stock[i].id))
                                }}>-</span>
                                {/* ==> 제품 수량 */}
                                {props.cart.stock[i].count}
                                {/* ==> 제품 수량 + 버튼 */}
                                <span className="count-plus-btn" onClick={() => {
                                    // state 변경 함수 사용 시  dispatch 로 감싸야함 
                                    props.dispatch(changeCountPlus(props.cart.stock[i].id))
                                    props.dispatch(changeTotalPlus(props.cart.stock[i].id))
                                }}>+</span>
                            </button>
                            {/* ==> 이미지 박스 */}
                            <div className='food-box'>
                                <img src={props.cart.stock[i].img}></img>
                            </div>
                            <div className='title-price-box'>
                                {/* ==> 제품 이름 */}
                                <h2>{props.cart.stock[i].title}</h2>
                                {/* ==> 가격 */}
                                <h4>${props.cart.stock[i].totalPrice}</h4>
                            </div>
                            <div className='delete-btn-box'>
                                <button className='delete-btn' onClick={() => { props.dispatch(removeCart(props.cart.stock[i].id)) }}>X</button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

// ==> 장바구니가 비었을 시 보여줄 컴포넌트
function CartNo() {
    return (
        <>
            <div className='cartNo' style={{textAlign : "center"}}>
                장바구니가 비었습니다. 
            </div>
        </>
    )
}

function OrderBtn(props){
    return (
        <div className='order-box'>
            <h2> TOTAL : <span className='total-price'>${props.totalPrice}</span></h2>
            <button className='order-btn' onClick={() => {
                alert('주문이 완료되었습니다!');
                props.navigate('/');
            }}>ORDER</button>
        </div>
    )
}

export default CartPage;