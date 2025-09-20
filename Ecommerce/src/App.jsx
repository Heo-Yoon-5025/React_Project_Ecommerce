import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="App">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
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
        <div className="main-bg"></div>
        <h1 className="my-5">Nike shop</h1>
        <div className="d-flex flex-column mb-3">
          <div className="p-2">
            <img
              src="https://raw.githubusercontent.com/Heo-Yoon-5025/CDN_IMG/main/Img/shoe1.jpg"
              width="80%"
            />
            <h4 className="my-3">title</h4>
            <p>price</p>
          </div>
          <div className="p-2">
            <img
              src="https://raw.githubusercontent.com/Heo-Yoon-5025/CDN_IMG/main/Img/shoe2.jpg"
              width="80%"
            />
            <h4 className="my-3">title</h4>
            <p>price</p>
          </div>
          <div className="p-2">
            <img
              src="https://raw.githubusercontent.com/Heo-Yoon-5025/CDN_IMG/main/Img/shoe3.jpg"
              width="80%"
            />
            <h4 className="my-3">title</h4>
            <p>price</p>
          </div>
        </div>
        <div className="card m-5">
          <div className="card-Header">Featured</div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
