import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function App() {
  return (
    <>
      <div>
        <Button variant="primary">클릭하세요</Button>
      </div>
    </>
  );
}
