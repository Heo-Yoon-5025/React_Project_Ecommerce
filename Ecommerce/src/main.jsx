// src/main.jsx
// ✅ React의 엄격 모드: 개발 중 불필요한 렌더링이나 잠재적 문제를 찾아줌
import { StrictMode } from "react";
// ✅ React 18 이상에서 사용하는 새로운 root API
import { createRoot } from "react-dom/client";
// ✅ 전역 스타일(CSS)
import "./index.css";
// ✅ 메인 App 컴포넌트
import App from "./App.jsx";
// ✅ 라우팅을 위한 BrowserRouter
import { BrowserRouter } from "react-router-dom";
// ✅ Redux 전역 상태 제공자
import { Provider } from "react-redux";
// ✅ 우리가 만든 Redux 스토어
import Store from "./store/Store.jsx";

// ✅ React 앱을 실제 DOM에 렌더링
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Redux 전역 상태를 앱에 공급 */}
    <Provider store={Store}>
      {/* 라우팅 기능 활성화 (주소에 따라 다른 컴포넌트 보여주기) */}
      <BrowserRouter>
        {/* 실제 애플리케이션 */}
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
