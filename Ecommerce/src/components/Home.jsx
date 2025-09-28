// src/components/Home.jsx
import Goods from "./Goods.jsx"; // 상품 카드 컴포넌트
import axios from "axios";

// Home 컴포넌트: 메인 배경 + 상품 목록
export default function Home({ shoes, setShoes }) {
  // 👉 더보기 클릭 핸들러
  const viewMore = () => {
    axios
      .get(
        "https://cdn.jsdelivr.net/gh/Heo-Yoon-5025/CDN_IMG@main/Jsondata/Jsondata.json"
      )
      .then((res) => {
        // ✅ 가장 안전한 방식: 현재 상태(prev) 기준으로 합치기
        setShoes((prev) => [...prev, ...res.data]);
      })
      .catch((err) => {
        console.log("Axios Error : ", err);
      });
  };
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

      {/* VIEW MORE 버튼 */}
      <button onClick={viewMore}>VIEW MORE</button>
    </>
  );
}
