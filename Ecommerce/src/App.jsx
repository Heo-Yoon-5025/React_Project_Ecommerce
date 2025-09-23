// src/App.jsx
import { useState } from "react"; // React의 상태 관리 훅
import "./App.css";
// Bootstrap (스타일 프레임워크)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// 데이터 & 컴포넌트
import data from "./data.jsx"; // 상품 데이터 배열
import Navbar from "./components/Navbar.jsx"; // 상단 메뉴
import Home from "./components/Home.jsx"; // 홈 페이지
import Footer from "./components/Footer.jsx"; // 하단 카드
import { Route, Routes } from "react-router-dom"; // 라우터 (페이지 이동)
import Detail from "./Router/Detail.jsx"; // 상세 페이지
import { Link } from "react-router-dom";

export default function App() {
  // ✅ 상품 데이터를 상태로 보관 (나중에 수정/추가할 수 있도록)
  let [shoes] = useState(data);

  return (
    <>
      <div className="App">
        {/* 상단 네비게이션 */}
        <Navbar />

        {/* 라우팅: URL 주소에 따라 다른 컴포넌트 보여주기 */}
        <Routes>
          {/* "/" 주소 → Home 컴포넌트 보여주기 */}
          <Route path="/" element={<Home shoes={shoes}></Home>} />
          {/* "/detail" 주소 → Detail 컴포넌트 보여주기 */}
          <Route path="/detail" element={<Detail shoes={shoes} />} />
        </Routes>

        {/* 하단 카드 */}
        <Footer />
      </div>
    </>
  );
}
