// src/components/Home.jsx
import Goods from "./Goods.jsx"; // 상품 카드 컴포넌트

// Home 컴포넌트: 메인 배경 + 상품 목록
export default function Home({ shoes }) {
  return (
    <>
      {/* 메인 배경 (CSS에서 이미지 적용 가능) */}
      <div className="main-bg"></div>

      {/* 타이틀 */}
      <h1 className="my-5">Nike shop</h1>

      {/* ✅ 상품 리스트: map으로 반복 렌더링 */}
      <div className="d-flex flex-column mb-3">
        {shoes.map((item, idx) => (
          <Goods key={item.id} shoes={item} i={idx + 1} />
        ))}
      </div>
    </>
  );
}
