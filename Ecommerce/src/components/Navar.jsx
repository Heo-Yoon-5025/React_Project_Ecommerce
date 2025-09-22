// src/components/Navbar.jsx
import { Link } from "react-router-dom";

/* 상단 네비게이션 바 */
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* 좌측 로고/브랜드 */}
          <a className="navbar-brand" href="#">
            NIKE
          </a>
          {/* 모바일 토글 버튼 */}
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
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
              <Link to="/" className="nav-link" aria-current="page">
                Detail
              </Link>
              <Link to="/" className="nav-link" aria-current="page">
                about
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
