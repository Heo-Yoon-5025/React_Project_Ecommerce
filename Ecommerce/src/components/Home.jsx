import Goods from "./Goods.jsx"; // 상품 카드 컴포넌트 (단일 아이템 표시)
import axios from "axios";

// Home 컴포넌트: 메인 비주얼, 상품 리스트, '더보기' 버튼을 보여줌
export default function Home({ shoes, setShoes }) {
  // '더보기' 버튼 클릭 시 추가 상품을 불러오는 핸들러
  const viewMore = () => {
    axios
      .get(
        // 추가 상품 JSON (GitHub → jsDelivr CDN 경유)
        "https://cdn.jsdelivr.net/gh/Heo-Yoon-5025/CDN_IMG@main/Jsondata/Jsondata.json",
        {
          // 캐시버스터: 매번 다른 쿼리 파라미터(v=현재시각)를 붙여
          // CDN이 오래된 캐시를 주지 않도록 함
          params: { v: Date.now() },
        }
      )
      .then((res) => {
        // res.data : 실제 JSON 배열
        // 기존 상태(prev) 뒤에 새 데이터(res.data)를 이어붙임
        setShoes((prev) => [...prev, ...res.data]);

        // 참고: 아래 로그는 res 전체 객체를 찍음 (상태코드/헤더 등 포함)
        // 새 데이터만 보고 싶으면 console.log(res.data) 로 출력
        console.log("res.data", res);
      })
      .catch((err) => {
        // 네트워크/서버/ CORS 등 오류시
        console.log("Axios Error : ", err);
      });
  };

  return (
    <>
      {/* 히어로/메인 배경 (이미지는 CSS에서 설정 가능) */}
      <div className="main-bg"></div>

      {/* 메인 타이틀 */}
      <h1 className="my-5">Nike shop</h1>

      {/* 상품 리스트를 세로로 나열 */}
      {/* shoes 배열의 각 요소(item)를 Goods로 렌더링 */}
      <div className="d-flex flex-column mb-3">
        {shoes.map((item, idx) => (
          // key: React가 리스트를 효율적으로 업데이트하는 데 필요
          <Goods key={item.id} shoes={item} i={idx + 1} />
        ))}
      </div>

      {/* '더보기' 버튼: 추가 JSON을 불러와 리스트 뒤에 붙임 */}
      <button onClick={viewMore}>VIEW MORE</button>
    </>
  );
}
