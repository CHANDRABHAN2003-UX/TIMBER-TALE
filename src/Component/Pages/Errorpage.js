import { Link } from "react-router-dom"
export default function Errorpage(){
    return(
        <>
    
      <div>
        {/* Page Header Start */}
        <div className="container-fluid page-header py-5 mb-5">
          <div className="container py-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">404 Error</h1>
            <nav aria-label="breadcrumb animated slideInDown">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">404 Error</li>
              </ol>
            </nav>
          </div>
        </div>
        {/* Page Header End */}
        {/* 404 Start */}
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container text-center">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <i className="bi bi-exclamation-triangle display-1 text-primary" />
                <h1 className="display-1">404</h1>
                <h1 className="mb-4">Page Not Found</h1>
                <p className="mb-4">"We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?"</p>
                <Link className="btn btn-primary py-3 px-5" to="/">Go Back To Home</Link>
              </div>
            </div>
          </div>
        </div>
        {/* 404 End */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top"><i className="bi bi-arrow-up" /></a>
      </div>
   
        </>
    )
}