export default function Service(){
    return(
        <>
      
      <div>
        {/* Page Header Start */}
        <div className="container-fluid page-header py-5 mb-5">
          <div className="container py-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Service</h1>
            <nav aria-label="breadcrumb animated slideInDown">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Service</li>
              </ol>
            </nav>
          </div>
        </div>
        {/* Page Header End */}
        {/* Service Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="section-title text-center">
              <h1 className="display-5 mb-5">Our Services</h1>
            </div>
            <div className="row g-4">
              <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src="/assets/img/service-1.jpg" alt="" />
                  </div>
                  <div className="p-4 text-center border border-5 border-light border-top-0">
                    <h4 className="mb-3">General Carpentry</h4>
                    <p>Timber Tales project explores the art of carpentry through storytelling, showcasing craftsmanship, history, and cultural significance of timber in construction.</p>
                    <a className="fw-medium" href>Read More<i className="fa fa-arrow-right ms-2" /></a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src="/assets/img/service-2.jpg" alt="" />
                  </div>
                  <div className="p-4 text-center border border-5 border-light border-top-0">
                    <h4 className="mb-3">Furniture Manufacturing</h4>
                    <p>Timber Tales project highlights furniture manufacturing, focusing on craftsmanship, design, sustainability, and cultural narratives embedded in each piece created.</p>
                    <a className="fw-medium" href>Read More<i className="fa fa-arrow-right ms-2" /></a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src="/assets/img/service-3.jpg" alt="" />
                  </div>
                  <div className="p-4 text-center border border-5 border-light border-top-0">
                    <h4 className="mb-3">Furniture Remodeling</h4>
                    <p>Timber Tales project revitalizes furniture through creative remodeling, preserving stories and memories while transforming old pieces into functional and beautiful designs.</p>
                    <a className="fw-medium" href>Read More<i className="fa fa-arrow-right ms-2" /></a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src="/assets/img/service-4.jpg" alt="" />
                  </div>
                  <div className="p-4 text-center border border-5 border-light border-top-0">
                    <h4 className="mb-3">Wooden Floor</h4>
                    <p>Timber Tales celebrates the elegance of wooden floors, exploring their durability, natural beauty, and timeless appeal in architectural and interior design.</p>
                    <a className="fw-medium" href>Read More<i className="fa fa-arrow-right ms-2" /></a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src="/assets/img/service-5.jpg" alt="" />
                  </div>
                  <div className="p-4 text-center border border-5 border-light border-top-0">
                    <h4 className="mb-3">Wooden Furniture</h4>
                    <p>Timber Tales project honors wooden furniture, revealing its craftsmanship, sustainability, and cultural significance through stories that enrich living spaces and histories.</p>
                    <a className="fw-medium" href>Read More<i className="fa fa-arrow-right ms-2" /></a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src="/assets/img/service-6.jpg" alt="" />
                  </div>
                  <div className="p-4 text-center border border-5 border-light border-top-0">
                    <h4 className="mb-3">Custom Work</h4>
                    <p>Timber Tales project specializes in custom woodwork, blending craftsmanship with personal narratives to create unique, meaningful pieces that enhance spaces.</p>
                    <a className="fw-medium" href>Read More<i className="fa fa-arrow-right ms-2" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Service End */}
       
      </div>
     

      <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div className="container quote px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 ps-lg-0" style={{minHeight: '400px'}}>
              <div className="position-relative h-100">
                <img className=" img-fluid w-100 h-100" src="/assets/img/quote.jpg" style={{objectFit: 'cover'}} alt="" />
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
        <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top"><i className="bi bi-arrow-up" /></a>
      </div>
      {/* Quote End */}
  
   
   
        </>
    )
}