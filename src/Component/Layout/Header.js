
import { Link } from "react-router-dom"
export default function Header(){
    return(
        <>
      
        <div className="container-fluid bg-light p-0">
          <div className="row gx-0 d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
              <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                <small className="fa fa-map-marker-alt text-primary me-2" />
                <small>Street No 09 Phagwara,PUNJAB,INDIA</small>
              </div>
              <div className="h-100 d-inline-flex align-items-center py-3">
                <small className="far fa-clock text-primary me-2" />
                <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
              </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
              <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                <small className="fa fa-phone-alt text-primary me-2" />
                <small>+91 81464-49372</small>
              </div>
              <div className="h-100 d-inline-flex align-items-center">
                <a className="btn btn-sm-square bg-white text-primary me-1" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-sm-square bg-white text-primary me-1" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-sm-square bg-white text-primary me-1" href><i className="fab fa-linkedin-in" /></a>
                <a className="btn btn-sm-square bg-white text-primary me-0" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
        {/* Topbar End */}
        {/* Navbar Start */}
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
          <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h2 className="m-0 text-primary">Timber Tales</h2>
          </a>
          <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
              <Link to="/" className="nav-item nav-link">Home</Link>
              <Link to="/artpiece" className="nav-item nav-link">ArtPiece</Link>
              <Link to="/designs" className="nav-item nav-link">Design</Link>
              <Link to="/project" className="nav-item nav-link">Post</Link>
              {/* <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                <div className="dropdown-menu fade-up m-0">
                  <Link to="/feature" className="dropdown-item">Feature</Link>
                  <Link to="/freequote" className="dropdown-item">Free Quote</Link>
                  <Link to="/team" className="dropdown-item">Our Team</Link>
                  <Link to="/testimoni" className="dropdown-item">Testimonial</Link>
                  <Link to="/error" className="dropdown-item">404 Page</Link>
                </div>
              </div>
              <Link to="/contact" className="nav-item nav-link active">Contact</Link> */}
              <Link to="/login" className="nav-item nav-link active">Login</Link>
            </div>
            <Link to="/register" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Register<i className="fa fa-arrow-right ms-3" /></Link>
          </div>
        </nav>
        {/* Navbar End */}
        </>
    )
}