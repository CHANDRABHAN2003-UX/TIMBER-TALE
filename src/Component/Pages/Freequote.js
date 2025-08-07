export default function Freequote(){
    return(
        <>
       
      <div>
        {/* Page Header Start */}
        <div className="container-fluid page-header py-5 mb-5">
          <div className="container py-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Free Quote</h1>
            <nav aria-label="breadcrumb animated slideInDown">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Free Quote</li>
              </ol>
            </nav>
          </div>
        </div>
        {/* Page Header End */}
        {/* Quote Start */}
        <div className="container-fluid bg-light overflow-hidden px-lg-0" style={{margin: '6rem 0'}}>
          <div className="container quote px-lg-0">
            <div className="row g-0 mx-lg-0">
              <div className="col-lg-6 ps-lg-0" style={{minHeight: '400px'}}>
                <div className="position-relative h-100">
                  <img className="img-fluid w-100 h-100" src="/assets/img/quote.jpg" style={{objectFit: 'cover'}} alt="" />
                </div>
              </div>
              <div className="col-lg-6 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
                <div className="p-lg-5 pe-lg-0">
                  <div className="section-title text-start">
                    <h1 className="display-5 mb-4">Free Quote</h1>
                  </div>
                  <p className="mb-4 pb-2">Write here anything without hesitation!!!</p>
                  <form>
                    <div className="row g-3">
                      <div className="col-12 col-sm-6">
                        <input type="text" className="form-control border-0" placeholder="Your Name" style={{height: '55px'}} />
                      </div>
                      <div className="col-12 col-sm-6">
                        <input type="email" className="form-control border-0" placeholder="Your Email" style={{height: '55px'}} />
                      </div>
                      <div className="col-12 col-sm-6">
                        <input type="text" className="form-control border-0" placeholder="Your Mobile" style={{height: '55px'}} />
                      </div>
                      <div className="col-12 col-sm-6">
                        <select className="form-select border-0" style={{height: '55px'}}>
                          <option selected>Select A Service</option>
                          <option value={1}>Service 1</option>
                          <option value={2}>Service 2</option>
                          <option value={3}>Service 3</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <textarea className="form-control border-0" placeholder="Special Note" defaultValue={""} />
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Quote End */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top"><i className="bi bi-arrow-up" /></a>
      </div>
  
        </>
    )
}