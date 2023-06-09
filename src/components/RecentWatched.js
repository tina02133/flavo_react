import { useState, useEffect } from "react";
// React router import 
import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom'
// product.js 파일 import
import productData from "../productData";

let RecentWatched = function RecentWatched() {
    // localStorage 에 저장하기
    // localStorage  에는 array / object 자료형을 저장불가.
    // 따라서 JSON 형태로 바꿔주어 저장해야 함
    // useEffect(() => {
    //     localStorage.setItem('watched', JSON.stringify([]))
    // }, [])

    // localStorage 에 있는 상품 가져오기 
    // 여기서 recentWatched은 data.js 에 들어있는 제품의  id 값 배열임
    let recentWatched = JSON.parse(localStorage.getItem('watched'));
    console.log(recentWatched);
    let navigate = useNavigate();
     // 현재 스크롤 위치 구하여 스크롤 위치에 따른 
    // 최근 본 상품 목록 div 투명도 조절 
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            const scrollTop = document.documentElement.scrollTop;
            console.log(scrollTop);  
            // scroll 0 ~ 190 까지 투명도 0
            // 200 ~ 투명도 1로 서서히 변화시키기. 
            // opacity
            // 190 에서 0 200에서 1
            // 0=a*700+b, 1=a*1400+b
            // ==> a = 1/10,b = -19
            // var y = 1/10 * scrollTop -19;
            // var watchedBox = document.getElementById('watched-box');
            // watchedBox.style.opacity = y;
    })
    })

    return (
        <>
            <div className='watched-box' id="watched-box">
                <div className='cart-count'>
                    cart
                </div>
                <div className='watched-text'>
                    최근 본 상품
                </div>
                <div className='watched-item'>
                {
                    productData.map((a, i) => {
                        // recentWatched 이라는 배열에 a.id 값이 포함되어 있다면
                        if (recentWatched.includes(a.id)) {
                            // a.img 내놔라 
                            return <div className='watched-img' onClick={() => { navigate('/detail/' + a.id) }}>
                                <img src={a.img}></img>
                            </div>
                        }
                    })
                }
                </div>
                <div className='down-btn'>
                </div>
            </div>
        </>
    )
               

}

export default RecentWatched;