// src/components/Goods.jsx
// props: shoes(상품 객체), i(이미지 번호)
// ✅ Goods 컴포넌트: 상품 1개 카드
export default function Goods({ shoes, i }) {
  // 이미지 경로를 인덱스로 동적으로 생성
  // CDN에서 이미지 불러오기 (jsDelivr)
  const imgSrc = `https://cdn.jsdelivr.net/gh/Heo-Yoon-5025/CDN_IMG@main/Img/shoe${i}.jpg`;
  return (
    <div className="p-2">
      {/* 상품 이미지 */}
      <img src={imgSrc} width="80%" alt={shoes.title} />
      {/* 상품명 */}
      <h4 className="my-3">{shoes.title}</h4>
      {/* 가격 (세자리 콤마 추가) */}
      <p>{shoes.price.toLocaleString()}원</p>
      {/* 필요하면 부가 설명도 노출 가능 */}
      {/* <small className="text-muted">{shoes.content}</small> */}
    </div>
  );
}
