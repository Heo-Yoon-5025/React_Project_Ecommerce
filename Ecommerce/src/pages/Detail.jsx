// src/Router/Detail.jsx
import { useParams } from "react-router-dom";
import { addItem } from "../store/Store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // ✅ 페이지 이동용 훅 추가

export default function Detail({ shoes }) {
  let { id } = useParams();
  let dataId = shoes.find((x) => x.id == id);
  let dispatch = useDispatch();
  let navigate = useNavigate(); // ✅ navigate 생성

  // ✅ 방어 코드: 데이터가 없을 때
  if (!dataId) {
    return (
      <div className="container my-4">
        <h4 className="text-danger">상품 정보가 없습니다.</h4>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <h2 className="mb-4">상품 상세 목록</h2>

      <div className="row g-4 align-items-start mb-5">
        {/* 왼쪽: 상품 이미지 */}
        <div className="col-md-6">
          <img
            src={`https://cdn.jsdelivr.net/gh/Heo-Yoon-5025/CDN_IMG@main/Img/shoe${
              dataId.id + 1
            }.jpg`}
            alt={dataId.title}
            className="img-fluid rounded"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-2">{dataId.title}</h4>
          <p className="text-muted">{dataId.content}</p>
          <p className="fw-bold mb-3">{dataId.price.toLocaleString()}원</p>
          {/* ORDER 버튼 */}
          <button
            className="btn btn-danger"
            onClick={() => {
              // ✅ Redux store에 아이템 추가
              dispatch(
                addItem({ id: dataId.id, name: dataId.title, count: 1 })
              );

              // ✅ 카트 페이지로 이동
              navigate("/cart");
            }}
          >
            ORDER
          </button>
        </div>
      </div>
    </div>
  );
}

/* 모든 상품을 상세 카드 형식으로 출력 */
// {shoes.map((item, idx) => (
//   <div className="row g-4 align-items-start mb-5" key={item.id}>
//     {/* 왼쪽: 상품 이미지 */}
//     <div className="col-md-6">
//       <img
//         src={`https://cdn.jsdelivr.net/gh/Heo-Yoon-5025/CDN_IMG@main/Img/shoe${
//           idx + 1
//         }.jpg`}
//         alt={item.title}
//         className="img-fluid rounded"
//         width="100%"
//       />
//     </div>
//     {/* 오른쪽: 상품 설명 */}
//     <div className="col-md-6">
//       <h4 className="pt-2">{item.title}</h4>
//       <p className="text-muted">{item.content}</p>
//       <p className="fw-bold mb-3">{item.price.toLocaleString()}원</p>
//       <button className="btn btn-danger">order</button>
//     </div>
//   </div>
// ))}
