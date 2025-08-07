import { useState } from "react";
import { db } from "../../Firebase";
import { addDoc, collection } from "firebase/firestore";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


  
export default function Home(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation check
    if (!name || !email || !mobile || !note) {
      toast.error("Please fill all the fields");
      return;
    }

    try {
      // Add data to the "quote" collection in Firestore
      await addDoc(collection(db, "quote"), {
        name,
        email,
        mobile,
        note,
        timestamp: new Date(), // Add timestamp for record keeping
      });

      // Reset form fields
      setName("");
      setEmail("");
      setMobile("");
      setNote("");

      toast.success("Quote submitted successfully!");
    } catch (error) {
      toast.error("Failed to submit the quote. Please try again.");
      console.error("Error submitting quote:", error);
    }
  };
    return(
        <>
        
      <div>
      <div className="container-fluid page-header py-5 mb-5">
          <div className="container py-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Home</h1>
            <nav aria-label="breadcrumb animated slideInDown">
              
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Service</li>
              </ol>
            </nav>
          </div>
        </div>
        {/* Carousel Start */}
        <div className="container-fluid p-0 pb-5">
          <div className="owl-carousel header-carousel position-relative">
            <div className="owl-carousel-item position-relative">
              <img className="img-fluid" src="/assets/img/carousel-1.jpg" alt="" />
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: 'rgba(53, 53, 53, .7)'}}>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-12 col-lg-8 text-center">
                      <h5 className="text-white text-uppercase mb-3 animated slideInDown">Welcome To WooDY</h5>
                      <h1 className="display-3 text-white animated slideInDown mb-4">Best Carpenter &amp; Craftsman Services</h1>
                      <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                      <a href className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                      <a href className="btn btn-light py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-carousel-item position-relative">
              <img className="img-fluid" src="/assets/img/carousel-2.jpg" alt="" />
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: 'rgba(53, 53, 53, .7)'}}>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-12 col-lg-8 text-center">
                      <h5 className="text-white text-uppercase mb-3 animated slideInDown">Welcome To WooDY</h5>
                      <h1 className="display-3 text-white animated slideInDown mb-4">Best Carpenter &amp; Craftsman Services</h1>
                      <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                      <a href className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                      <a href className="btn btn-light py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-carousel-item position-relative">
              <img className="img-fluid" src="/assets/img/carousel-3.jpg" alt="" />
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: 'rgba(53, 53, 53, .7)'}}>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-12 col-lg-8 text-center">
                      <h5 className="text-white text-uppercase mb-3 animated slideInDown">Welcome To WooDY</h5>
                      <h1 className="display-3 text-white animated slideInDown mb-4">Best Carpenter &amp; Craftsman Services</h1>
                      <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                      <a href className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                      <a href className="btn btn-light py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Carousel End */}
        {/* Feature Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="d-flex align-items-center justify-content-center bg-light" style={{width: '60px', height: '60px'}}>
                    <i className="fa fa-user-check fa-2x text-primary" />
                  </div>
                  <h1 className="display-1 text-light mb-0">01</h1>
                </div>
                <h5>Creative Designers</h5>
              </div>
              <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="d-flex align-items-center justify-content-center bg-light" style={{width: '60px', height: '60px'}}>
                    <i className="fa fa-check fa-2x text-primary" />
                  </div>
                  <h1 className="display-1 text-light mb-0">02</h1>
                </div>
                <h5>Quality Products</h5>
              </div>
              <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="d-flex align-items-center justify-content-center bg-light" style={{width: '60px', height: '60px'}}>
                    <i className="fa fa-drafting-compass fa-2x text-primary" />
                  </div>
                  <h1 className="display-1 text-light mb-0">03</h1>
                </div>
                <h5>Free Consultation</h5>
              </div>
              <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="d-flex align-items-center justify-content-center bg-light" style={{width: '60px', height: '60px'}}>
                    <i className="fa fa-headphones fa-2x text-primary" />
                  </div>
                  <h1 className="display-1 text-light mb-0">04</h1>
                </div>
                <h5>Customer Support</h5>
              </div>
            </div>
          </div>
        </div>
        {/* Feature Start */}
        {/* About Start */}
        <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
          <div className="container about px-lg-0">
            <div className="row g-0 mx-lg-0">
              <div className="col-lg-6 ps-lg-0" style={{minHeight: '400px'}}>
                <div className="position-relative h-100">
                  <img className="img-fluid w-100 h-100" src="/assets/img/art1.jpg" style={{objectFit: 'cover'}} alt="" />
                </div>
              </div>
              <div className="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
                <div className="p-lg-5 pe-lg-0">
                  <div className="section-title text-start">
                    <h1 className="display-5 mb-4">About Us</h1>
                  </div>
                  <p className="mb-4 pb-2">Timber Tales showcases online wooden works, offering bespoke craftsmanship, sustainability, and storytelling to connect clients with distinctive, meaningful furniture pieces.</p>
                  <div className="row g-4 mb-4 pb-2">
                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                      <div className="d-flex align-items-center">
                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{width: '60px', height: '60px'}}>
                          <i className="fa fa-users fa-2x text-primary" />
                        </div>
                        <div className="ms-3">
                          <h2 className="text-primary mb-1" data-toggle="counter-up">1234</h2>
                          <p className="fw-medium mb-0">Happy Clients</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                      <div className="d-flex align-items-center">
                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{width: '60px', height: '60px'}}>
                          <i className="fa fa-check fa-2x text-primary" />
                        </div>
                        <div className="ms-3">
                          <h2 className="text-primary mb-1" data-toggle="counter-up">1234</h2>
                          <p className="fw-medium mb-0">Projects Done</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href className="btn btn-primary py-3 px-5">Explore More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
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
                    <img className="img-fluid" src="/assets/img/p.jpg" alt="" />
                  </div>
                  <div className="p-4 text-center border border-5 border-light border-top-0">
                    <h4 className="mb-3">Wooden Artpieces</h4>
                    <p>Timber Tales project explores the art of carpentry through storytelling, showcasing craftsmanship, history, and cultural significance of timber in construction.</p>
                    <a className="fw-medium" href>Read More<i className="fa fa-arrow-right ms-2" /></a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src="/assets/img/p1.jpg" alt="" style={{height:"273px"}} />
                  </div>
                  <div className="p-4 text-center border border-5 border-light border-top-0">
                    <h4 className="mb-3">Wooden Artpieces</h4>
                    <p>Timber Tales project highlights furniture manufacturing, focusing on craftsmanship, design, sustainability, and cultural narratives embedded in each piece created.</p>
                    <a className="fw-medium" href>Read More<i className="fa fa-arrow-right ms-2" /></a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src="/assets/img/p3.jpg" alt=""  style={{height:"273px"}}/>
                  </div>
                  <div className="p-4 text-center border border-5 border-light border-top-0">
                    <h4 className="mb-3">Wooden Artpieces</h4>
                    <p>Timber Tales project revitalizes furniture through creative remodeling, preserving stories and memories while transforming old pieces into functional and beautiful designs.</p>
                    <a className="fw-medium" href>Read More<i className="fa fa-arrow-right ms-2" /></a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src="/assets/img/pi4.jpg" alt="" style={{height:"273px"}} />
                  </div>
                  <div className="p-4 text-center border border-5 border-light border-top-0">
                    <h4 className="mb-3">Wooden Artpieces</h4>
                    <p>Timber Tales celebrates the elegance of wooden floors, exploring their durability, natural beauty, and timeless appeal in architectural and interior design.</p>
                    <a className="fw-medium" href>Read More<i className="fa fa-arrow-right ms-2" /></a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src="/assets/img/p5.jpg" alt="" style={{height:"273px"}} />
                  </div>
                  <div className="p-4 text-center border border-5 border-light border-top-0">
                    <h4 className="mb-3">Wooden Artpieces</h4>
                    <p>Timber Tales project honors wooden furniture, revealing its craftsmanship, sustainability, and cultural significance through stories that enrich living spaces and histories.</p>
                    <a className="fw-medium" href>Read More<i className="fa fa-arrow-right ms-2" /></a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src="/assets/img/p6.jpg" alt="" style={{height:"273px"}} />
                  </div>
                  <div className="p-4 text-center border border-5 border-light border-top-0">
                    <h4 className="mb-3">Wooden Artpieces</h4>
                    <p>Timber Tales project specializes in custom woodwork, blending craftsmanship with personal narratives to create unique, meaningful pieces that enhance spaces.</p>
                    <a className="fw-medium" href>Read More<i className="fa fa-arrow-right ms-2" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Service End */}
        {/* Feature Start */}
        <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
          <div className="container feature px-lg-0">
            <div className="row g-0 mx-lg-0">
              <div className="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.5s">
                <div className="p-lg-5 ps-lg-0">
                  <div className="section-title text-start">
                    <h1 className="display-5 mb-4">Why Choose Us</h1>
                  </div>
                  <p className="mb-4 pb-2">"Timber Tales offers sustainable, custom-crafted woodwork that marries functionality with timeless beauty, perfect for distinctive living spaces."</p>
                  <div className="row g-4">
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{width: '60px', height: '60px'}}>
                          <i className="fa fa-check fa-2x text-primary" />
                        </div>
                        <div className="ms-4">
                          <p className="mb-2">Quality</p>
                          <h5 className="mb-0">Services</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{width: '60px', height: '60px'}}>
                          <i className="fa fa-user-check fa-2x text-primary" />
                        </div>
                        <div className="ms-4">
                          <p className="mb-2">Creative</p>
                          <h5 className="mb-0">Designers</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{width: '60px', height: '60px'}}>
                          <i className="fa fa-drafting-compass fa-2x text-primary" />
                        </div>
                        <div className="ms-4">
                          <p className="mb-2">Free</p>
                          <h5 className="mb-0">Consultation</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{width: '60px', height: '60px'}}>
                          <i className="fa fa-headphones fa-2x text-primary" />
                        </div>
                        <div className="ms-4">
                          <p className="mb-2">Customer</p>
                          <h5 className="mb-0">Support</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 pe-lg-0" style={{minHeight: '400px'}}>
                <div className="position-relative h-100">
                  <img className=" img-fluid w-100 h-100" src="/assets/img/choose1.jpg" style={{objectFit: 'cover'}} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Feature End */}
        {/* Projects Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="section-title text-center">
              <h1 className="display-5 mb-5">Our Projects</h1>
            </div>
            <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
              <div className="col-12 text-center">
                <ul className="list-inline mb-5" id="portfolio-flters">
                  <li className="mx-2 active" data-filter="*">All</li>
                  <li className="mx-2" data-filter=".first">General Carpentry</li>
                  <li className="mx-2" data-filter=".second">Custom Carpentry</li>
                </ul>
              </div>
            </div>
            <div className="row g-4 portfolio-container">
              <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
                <div className="rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid w-100" src="/assets/img/portfolio-1.jpg" alt="" />
                    <div className="portfolio-overlay">
                      <a className="btn btn-square btn-outline-light mx-1" href="img/portfolio-1.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                      <a className="btn btn-square btn-outline-light mx-1" href><i className="fa fa-link" /></a>
                    </div>
                  </div>
                  <div className="border border-5 border-light border-top-0 p-4">
                    <p className="text-primary fw-medium mb-2">General Carpentry</p>
                    <h5 className="lh-base mb-0">Wooden Furniture Manufacturing And Remodeling
                    </h5></div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.3s">
                <div className="rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid w-100" src="/assets/img/portfolio-2.jpg" alt="" />
                    <div className="portfolio-overlay">
                      <a className="btn btn-square btn-outline-light mx-1" href="img/portfolio-2.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                      <a className="btn btn-square btn-outline-light mx-1" href><i className="fa fa-link" /></a>
                    </div>
                  </div>
                  <div className="border border-5 border-light border-top-0 p-4">
                    <p className="text-primary fw-medium mb-2">Custom Carpentry</p>
                    <h5 className="lh-base mb-0">Wooden Furniture Manufacturing And Remodeling
                    </h5></div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.5s">
                <div className="rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid w-100" src="/assets/img/portfolio-3.jpg" alt="" />
                    <div className="portfolio-overlay">
                      <a className="btn btn-square btn-outline-light mx-1" href="img/portfolio-3.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                      <a className="btn btn-square btn-outline-light mx-1" href><i className="fa fa-link" /></a>
                    </div>
                  </div>
                  <div className="border border-5 border-light border-top-0 p-4">
                    <p className="text-primary fw-medium mb-2">General Carpentry</p>
                    <h5 className="lh-base mb-0">Wooden Furniture Manufacturing And Remodeling
                    </h5></div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.1s">
                <div className="rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid w-100" src="/assets/img/portfolio-4.jpg" alt="" />
                    <div className="portfolio-overlay">
                      <a className="btn btn-square btn-outline-light mx-1" href="img/portfolio-4.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                      <a className="btn btn-square btn-outline-light mx-1" href><i className="fa fa-link" /></a>
                    </div>
                  </div>
                  <div className="border border-5 border-light border-top-0 p-4">
                    <p className="text-primary fw-medium mb-2">Custom Carpentry</p>
                    <h5 className="lh-base mb-0">Wooden Furniture Manufacturing And Remodeling
                    </h5></div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.3s">
                <div className="rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid w-100" src="/assets/img/portfolio-5.jpg" alt="" />
                    <div className="portfolio-overlay">
                      <a className="btn btn-square btn-outline-light mx-1" href="img/portfolio-5.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                      <a className="btn btn-square btn-outline-light mx-1" href><i className="fa fa-link" /></a>
                    </div>
                  </div>
                  <div className="border border-5 border-light border-top-0 p-4">
                    <p className="text-primary fw-medium mb-2">General Carpentry</p>
                    <h5 className="lh-base mb-0">Wooden Furniture Manufacturing And Remodeling
                    </h5></div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.5s">
                <div className="rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid w-100" src="/assets/img/portfolio-6.jpg" alt="" />
                    <div className="portfolio-overlay">
                      <a className="btn btn-square btn-outline-light mx-1" href="img/portfolio-6.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                      <a className="btn btn-square btn-outline-light mx-1" href><i className="fa fa-link" /></a>
                    </div>
                  </div>
                  <div className="border border-5 border-light border-top-0 p-4">
                    <p className="text-primary fw-medium mb-2">Custom Carpentry</p>
                    <h5 className="lh-base mb-0">Wooden Furniture Manufacturing And Remodeling
                    </h5></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Projects End */}
              {/* Quote Start */}
      <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div className="container quote px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 ps-lg-0" style={{ minHeight: '400px' }}>
              <div className="position-relative h-100">
                <img
                  className="img-fluid w-100 h-100"
                  src="/assets/img/free"
                  style={{ objectFit: 'cover' }}
                  alt="Quote Image"
                />
              </div>
            </div>
            <div className="col-lg-6 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
              <div className="p-lg-5 pe-lg-0">
                <div className="section-title text-start">
                  <h1 className="display-5 mb-4">Free Quote</h1>
                </div>
                <p className="mb-4 pb-2">Write here anything without hesitation!!!</p>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Your Name"
                        style={{ height: '55px' }}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className="form-control border-0"
                        placeholder="Your Email"
                        style={{ height: '55px' }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Your Mobile"
                        style={{ height: '55px' }}
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control border-0"
                        placeholder="Special Note"
                        style={{ height: '100px' }}
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                      />
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Quote End */}

        {/* Team Start */}
        {/* <div className="container-xxl py-5">
          <div className="container">
            <div className="section-title text-center">
              <h1 className="display-5 mb-5">Team Members</h1>
            </div>
            <div className="row g-4">
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="team-item">
                  <div className="overflow-hidden position-relative">
                    <img className="img-fluid" src="/assets/img/team-1.jpg" alt="" />
                    <div className="team-social">
                      <a className="btn btn-square" href><i className="fab fa-facebook-f" /></a>
                      <a className="btn btn-square" href><i className="fab fa-twitter" /></a>
                      <a className="btn btn-square" href><i className="fab fa-instagram" /></a>
                    </div>
                  </div>
                  <div className="text-center border border-5 border-light border-top-0 p-4">
                    <h5 className="mb-0">Chandrabhan Singh</h5>
                    <small>Carpenter</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="team-item">
                  <div className="overflow-hidden position-relative">
                    <img className="img-fluid" src="/assets/img/team-2.jpg" alt="" />
                    <div className="team-social">
                      <a className="btn btn-square" href><i className="fab fa-facebook-f" /></a>
                      <a className="btn btn-square" href><i className="fab fa-twitter" /></a>
                      <a className="btn btn-square" href><i className="fab fa-instagram" /></a>
                    </div>
                  </div>
                  <div className="text-center border border-5 border-light border-top-0 p-4">
                    <h5 className="mb-0">Vivek</h5>
                    <small>Woodcraft</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="team-item">
                  <div className="overflow-hidden position-relative">
                    <img className="img-fluid" src="/assets/img/team-3.jpg" alt="" />
                    <div className="team-social">
                      <a className="btn btn-square" href><i className="fab fa-facebook-f" /></a>
                      <a className="btn btn-square" href><i className="fab fa-twitter" /></a>
                      <a className="btn btn-square" href><i className="fab fa-instagram" /></a>
                    </div>
                  </div>
                  <div className="text-center border border-5 border-light border-top-0 p-4">
                    <h5 className="mb-0">Arti Kumari</h5>
                    <small>WoodDesigner</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                <div className="team-item">
                  <div className="overflow-hidden position-relative">
                    <img className="img-fluid" src="/assets/img/team-4.jpg" alt="" />
                    <div className="team-social">
                      <a className="btn btn-square" href><i className="fab fa-facebook-f" /></a>
                      <a className="btn btn-square" href><i className="fab fa-twitter" /></a>
                      <a className="btn btn-square" href><i className="fab fa-instagram" /></a>
                    </div>
                  </div>
                  <div className="text-center border border-5 border-light border-top-0 p-4">
                    <h5 className="mb-0">Sumit Prajapati</h5>
                    <small>Manager</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* Team End */}
        {/* Testimonial Start */}
        {/* <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            <div className="section-title text-center">
              <h1 className="display-5 mb-5">Testimonial</h1>
            </div>
            <div className="owl-carousel testimonial-carousel">
              <div className="testimonial-item text-center">
                <img className="img-fluid bg-light p-2 mx-auto mb-3" src="/assets/img/testimonial-1.jpg" style={{width: '90px', height: '90px'}} />
                <div className="testimonial-text text-center p-4">
                  <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                  <h5 className="mb-1">Client Name</h5>
                  <span className="fst-italic">Profession</span>
                </div>
              </div>
              <div className="testimonial-item text-center">
                <img className="img-fluid bg-light p-2 mx-auto mb-3" src="/assets/img/testimonial-2.jpg" style={{width: '90px', height: '90px'}} />
                <div className="testimonial-text text-center p-4">
                  <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                  <h5 className="mb-1">Client Name</h5>
                  <span className="fst-italic">Profession</span>
                </div>
              </div>
              <div className="testimonial-item text-center">
                <img className="img-fluid bg-light p-2 mx-auto mb-3" src="/assets/img/testimonial-3.jpg" style={{width: '90px', height: '90px'}} />
                <div className="testimonial-text text-center p-4">
                  <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                  <h5 className="mb-1">Client Name</h5>
                  <span className="fst-italic">Profession</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* Testimonial End */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top"><i className="bi bi-arrow-up" /></a>
      </div>
   
        </>
    )
}