export default function Contact(){
    return(
        <>
     
   <div>
      
        {/* Page Header Start */}
        <div className="container-fluid page-header py-5 mb-5">
          <div className="container py-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Contact</h1>
            <nav aria-label="breadcrumb animated slideInDown">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
              </ol>
            </nav>
          </div>
        </div>
        {/* Page Header End */}
        {/* Contact Start */}
        <div className="container-fluid bg-light overflow-hidden px-lg-0" style={{margin: '6rem 0'}}>
          <div className="container contact px-lg-0">
            <div className="row g-0 mx-lg-0">
              <div className="col-lg-6 contact-text py-5 wow fadeIn" data-wow-delay="0.5s">
                <div className="p-lg-5 ps-lg-0">
                  <div className="section-title text-start">
                    <h1 className="display-5 mb-4">Contact Us</h1>
                  </div>
                
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input type="text" className="form-control" id="name" placeholder="Your Name" />
                          <label htmlFor="name">Your Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input type="email" className="form-control" id="email" placeholder="Your Email" />
                          <label htmlFor="email">Your Email</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input type="text" className="form-control" id="subject" placeholder="Subject" />
                          <label htmlFor="subject">Subject</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: '100px'}} defaultValue={""} />
                          <label htmlFor="message">Message</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 pe-lg-0" style={{minHeight: '400px'}}>
                <div className="position-relative h-100">
                  <iframe className=" w-100 h-100" style={{objectFit: 'cover'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30765978.00238801!2d61.00083698256397!3d19.729113061269324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1721104764381!5m2!1sen!2sin" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact End */}
       
        {/* Back to Top */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top"><i className="bi bi-arrow-up" /></a>
      </div>
  
        </>
    )
}