import { configureStore, createSlice } from "@reduxjs/toolkit";

// user 슬라이스: 간단한 문자열 상태를 예시로 둠
// 실제로는 로그인 사용자 정보(이름/이메일/토큰 등)를 둘 수 있음
let user = createSlice({
  name: "user",
  initialState: "Kim",
});

// cart 슬라이스: 장바구니 배열 상태와 관련 액션들
let cart = createSlice({
  name: "cart",
  // 초기 장바구니에 샘플 데이터 두 개
  initialState: [
    { id: 0, name: "Nike01", count: 2 },
    { id: 2, name: "Nike03", count: 1 },
  ],
  reducers: {
    // count 증가: payload로 전달된 id를 가진 항목을 찾아 +1
    addCount(state, action) {
      // action.payload 는 보통 {id} 또는 id값 자체를 전달받게 설계
      // 여기선 id 숫자 자체를 받는 전제
      const idx = state.findIndex((item) => item.id === action.payload);
      // 주의: 못 찾으면 -1 반환 → 실서비스라면 방어코드 필요
      if (idx !== -1) state[idx].count++;
    },
    // 새 아이템 추가: { id, name, count } 형태의 객체를 push
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

// Redux Store 생성: 여러 슬라이스를 하나로 합침
export default configureStore({
  reducer: {
    user: user.reducer, // 문자열 상태
    cart: cart.reducer, // 장바구니 배열 상태
  },
});

// 컴포넌트에서 바로 import 하여 dispatch에 넘길 수 있도록 액션 export
export const { addCount, addItem } = cart.actions;
