import { NavLink } from "react-router-dom"; // 라우팅용 링크 컴포넌트

// props: shoes(상품 객체), i(이미지 번호: 1,2,3...)
// 예: shoes = {id: 0, title: "Nike01", price: 100000, ...}
export default function Goods({ shoes, i }) {
  // CDN의 파일 네이밍 규칙에 맞춰 이미지 경로를 동적으로 생성
  // i 값은 Home에서 idx+1로 전달받음 (1부터 시작)
  const imgSrc = `https://cdn.jsdelivr.net/gh/Heo-Yoon-5025/CDN_IMG@main/Img/shoe${i}.jpg`;

  return (
    <div className="p-2">
      {/* 상품 이미지 (alt는 접근성 향상을 위해 제목 사용) */}
      <img src={imgSrc} width="80%" alt={shoes.title} />
      {/* 상품명 */}
      <h4 className="my-3">{shoes.title}</h4>
      {/* 가격(원화, 세 자리 콤마) */}
      <p>{shoes.price.toLocaleString()}원</p>

      {/* 상세 페이지로 이동: /detail/:id  */}
      {/* 예: 현재 shoes.id가 3이면 /detail/3 으로 이동 */}
      <NavLink to={"/detail/" + shoes.id} className="nav-link">
        Detail
      </NavLink>
    </div>
  );
}
