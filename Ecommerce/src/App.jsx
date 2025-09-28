// src/App.jsx
import { useEffect, useState } from "react"; // React의 상태 관리 훅
import "./App.css";
// Bootstrap (스타일 프레임워크)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// 데이터 & 컴포넌트
import Navbar from "./components/Navbar.jsx"; // 상단 메뉴
import Home from "./components/Home.jsx"; // 홈 페이지
import Footer from "./components/Footer.jsx"; // 하단 카드
import { Route, Routes } from "react-router-dom"; // 라우터 (페이지 이동)
import Detail from "./pages/Detail.jsx"; // 상세 페이지
import Company from "./components/Company.jsx";
import { ManpowerPage, MapPage, NotFound } from "./components/Information.jsx";
import Remove from "./pages/Remove"; // ✅ 회원 탈퇴 컴포넌트 불러오기
import axios from "axios";

export default function App() {
  // ✅ 상품 데이터를 상태로 보관 (나중에 수정/추가할 수 있도록)
  let [shoes, setShoes] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://cdn.jsdelivr.net/gh/Heo-Yoon-5025/CDN_IMG@main/Jsondata/data.json"
      )
      .then((res) => {
        setShoes(res.data);
      })
      .catch((err) => {
        console.error("데이터를 불러오지 못했습니다.", err);
      });
  }, []);

  return (
    <>
      <div className="App">
        {/* 상단 네비게이션 */}
        <Navbar />

        {/* 라우팅: URL 주소에 따라 다른 컴포넌트 보여주기 */}
        <Routes>
          {/* "/" 주소 → Home 컴포넌트 보여주기 */}
          <Route
            path="/"
            element={<Home shoes={shoes} setShoes={setShoes}></Home>}
          />
          {/* "/detail" 주소 → Detail 컴포넌트 보여주기 */}
          <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
          {/* "/company" 주소 → Company 컴포넌트 보여주기 */}
          <Route path="/company" element={<Company />}>
            <Route path="manpower" element={<ManpowerPage />} />
            <Route path="map" element={<MapPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          {/* "/remove" 주소 → Remove 컴포넌트 보여주기 */}
          <Route path="/remove" element={<Remove />} />
        </Routes>

        {/* 하단 카드 */}
        <Footer />
      </div>
    </>
  );
}
