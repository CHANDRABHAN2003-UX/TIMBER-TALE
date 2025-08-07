import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../Firebase";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import "react-toastify/dist/ReactToastify.css"; // Ensure this is imported

export default function Admineader() {
  const user_id = sessionStorage.getItem("email");
  console.log(user_id);
  
  const [loading, setLoading] = useState(false); // Add a state for loading spinner
  const nav = useNavigate();

  const logout = () => {
    if (window.confirm("Do you really want to logout?")) {
      setLoading(true); // Show spinner

      auth.signOut()
        .then(() => {
          sessionStorage.clear();
          toast.success("Logout successfully");
          nav("/login");
        })
        .catch((error) => {
          toast.error("Logout failed: " + error.message);
        })
        .finally(() => {
          setLoading(false); // Hide spinner after logout completes
        });
    }
  };

  return (
    <>
      <div className="container-fluid bg-light p-0">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="fa fa-map-marker-alt text-primary me-2" />
              <small>Street No 09 Phagwara, PUNJAB, INDIA</small>
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
            <Link to="/admin" className="nav-item nav-link">Home</Link>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Art Pieces</a>
              <div className="dropdown-menu fade-up m-0">
                <Link to="/admin/addpieces" className="dropdown-item">Add Pieces</Link>
                <Link to="/admin/managepiece" className="dropdown-item">Manage Pieces</Link>
              </div>
            </div>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Designs</a>
              <div className="dropdown-menu fade-up m-0">
                <Link to="/admin/adddesigns" className="dropdown-item">Add Designs</Link>
                <Link to="/admin/managedesign" className="dropdown-item">Manage Designs</Link>
              </div>
            </div>
            {loading && ( // Conditionally render spinner when loading is true
              <div
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 9999, // Ensure it's on top of other elements
                }}
              >
                <ClipLoader
                  size={50}
                  color="#A97142" // Spinner color
                  loading={loading}
                />
              </div>
            )}
            <div>
              <Link to="/admin/bookings" className="nav-item nav-link">Booking</Link>
            </div>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Post</a>
              <div className="dropdown-menu fade-up m-0">
                <Link to="#" className="dropdown-item">Manage Post</Link>
                <Link to="#" className="dropdown-item">Add Post</Link>
              </div>
            </div>
          </div>
          <a onClick={logout} className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Logout<i className="fa fa-arrow-right ms-3" /></a>
        </div>
      </nav>
      {/* Navbar End */}
    </>
  );
}
