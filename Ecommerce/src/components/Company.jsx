// src/components/Company.jsx
import { Outlet } from "react-router-dom";

export default function Company() {
  return (
    <div>
      <h4>Company</h4>
      It's a company
      <Outlet />
    </div>
  );
}
