import { configureStore, createSlice } from '@reduxjs/toolkit'

// 'user' 라는 이름의 state 생성
let stock = createSlice({
    name : 'stock',
    initialState : [

    ],
    reducers : {
      // ==> detail 페이지에서 장바구니 추가 시 실행될 함수
       addCart(state, action){
          state.push(action.payload);
       },
      //  ==> 장바구니 페이지에서 상품 삭제 시 실행될 함수
       removeCart(state, action){
          let foundIndex = state.find((a)=>{
            return a.id === action.payload;
          })
          state.splice(foundIndex,1);

        },//==> 장바구니 내에서 수량 추가 함수
        changeCountPlus(state, action) {
            // cart.js 에서 수량버튼 클릭 시 넘겨받은 제품 id받음.
            // 넘겨받은 id 와 일치하는 장바구니 state 제품을 찾음  
            let foundIndex = state.findIndex((a) => { return a.id === action.payload });
            state[foundIndex].count += 1;
        },
        // ==> 장바구니에서 수량 추가 시 반영될 제품당 총금액 변경 함수
        changeTotalPlus(state, action) {
            let foundIndex = state.findIndex((a) => { return a.id === action.payload })
            state[foundIndex].totalPrice += state[foundIndex].price;
        },
        // ==> 장바구니 내에서 수량 감소 함수
        changeCountMinus(state, action) {
            // cart.js 에서 수량버튼 클릭 시 넘겨받은 제품 id받음.
            // 넘겨받은 id 와 일치하는 장바구니 state 제품을 찾음  
            let foundIndex = state.findIndex((a) => { return a.id === action.payload });
            state[foundIndex].count -= 1;
        },
        // ==> 장바구니에서 수량 감소 시 반영될 제품당 총금액 변경 함수
        changeTotalMinus(state, action) {
            let foundIndex = state.findIndex((a) => { return a.id === action.payload })
            state[foundIndex].totalPrice -= state[foundIndex].price;
        }
    }
})

//변경 함수 export하기
export let {  addCart, removeCart, changeCountPlus, changeTotalPlus, changeCountMinus,changeTotalMinus } = stock.actions;

// 만든 state 등록하는 곳
// 여기 등록한 state는 모든 컴포넌트가 자유롭게 사용가능
export default configureStore({
  reducer: { 
    stock : stock.reducer 
  }
}) 