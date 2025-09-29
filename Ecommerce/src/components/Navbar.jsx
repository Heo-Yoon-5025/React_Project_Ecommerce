// src/components/Navbar.jsx
import { NavLink } from "react-router-dom"; // 페이지 이동용 링크

/* 상단 네비게이션 바 */
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* 좌측 로고/브랜드 */}
        {/* a 태그가 아니라 NavLink를 써야 페이지 새로고침 없이 이동 가능 */}
        <NavLink className="navbar-brand" to="/">
          NIKE
        </NavLink>

        {/* 모바일 토글 버튼 (햄버거 메뉴) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 접히는 메뉴 영역 */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/* NavLink: 현재 페이지면 active 클래스 자동 추가 */}
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/detail" className="nav-link">
              Detail
            </NavLink>
            <NavLink to="/cart" className="nav-link">
              Cart
            </NavLink>
            <NavLink to="/company/manpower" className="nav-link">
              ManPower
            </NavLink>
            <NavLink to="/company/map" className="nav-link">
              Map
            </NavLink>
            <NavLink to="/" className="nav-link">
              About
            </NavLink>
            <NavLink to="/remove" className="nav-link">
              Account Remove
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
