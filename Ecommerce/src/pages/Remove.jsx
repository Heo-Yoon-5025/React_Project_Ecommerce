// src/routes/Remove.jsx
import { useState, useEffect } from "react";

// ✅ 회원 탈퇴 화면 컴포넌트
export default function Remove() {
  // true = 경고 모달 표시 / false = 타임아웃 화면 표시
  let [modals, setModals] = useState(true);

  useEffect(() => {
    // 2초 뒤 모달 닫고 타임아웃 화면으로 전환
    let a = setTimeout(() => {
      setModals(false);
    }, 2000);
    // 언마운트 시 타이머 정리 (메모리 누수 방지)
    return () => clearTimeout(a);
  }, []);

  return (
    <div className="container">
      {modals ? (
        // --- (A) 처음 2초 동안 보여줄 경고 모달 ---
        <div className="bg-warning p-4">
          <h2 style={{ marginBottom: "400px" }}>
            If you want remove your account please tap button
          </h2>
          <button>remove</button>
        </div>
      ) : (
        // --- (B) 2초 후에만 보여줄 타임아웃 화면 ---
        <div>
          <h2 className="my-2">Sorry time out</h2>
          <img
            src="https://cdn.jsdelivr.net/gh/Heo-Yoon-5025/CDN_IMG@main/Img/hahaha.png"
            alt="timeout"
            width="100%"
          />
        </div>
      )}
    </div>
  );
}
