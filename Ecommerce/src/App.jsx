// src/App.jsx
import { useState } from "react";
import "./App.css";
// Bootstrap (NPM방식)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// 데이터 & 컴포넌트
import data from "./data.jsx";
import Navbar from "./components/Navar.jsx";
import Goods from "./components/Goods.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  // 상품 데이터를 상태로 보관 (나중에 정렬/필터/추가 대비)
  let [shoes] = useState(data);
  return (
    <>
      <div className="App">
        {/* 상단 네비 */}
        <Navbar />

        {/* 메인 배경 */}
        <div className="main-bg"></div>

        {/* 타이틀 */}
        <h1 className="my-5">Nike shop</h1>

        {/* ✅ 상품 리스트: map으로 반복 렌더링 */}
        <div className="d-flex flex-column mb-3">
          {shoes.map((item, idx) => (
            <Goods key={item.id} shoes={item} i={idx + 1} />
          ))}
        </div>

        {/* 하단 카드 */}
        <Footer />
      </div>
    </>
  );
}
