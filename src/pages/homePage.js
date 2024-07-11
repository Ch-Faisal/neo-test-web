import React, {useState} from 'react';
import '../css/homePage.css'

const HomePage = () => {
    const [activeLink, setActiveLink] = useState('home');

    const handleClick = (linkName) => {
      setActiveLink(linkName);
    };
    
  return (
    <div>
        <div className='background-img'>
            <div className='container'>
               <nav className="navbar navbar-expand-lg">
  <div className="container-fluid px-0">
    <a className="navbar-brand" href="#"><img src='assets/logo.png'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#F70B79" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="6" x2="20" y2="6" />
  <line x1="4" y1="12" x2="20" y2="12" />
  <line x1="4" y1="18" x2="20" y2="18" />
</svg>
</span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
    <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll me-lg-5 me-0 gap-lg-4 gap-0">
        <li className="nav-item mx-auto">
          <a
            className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
            onClick={() => handleClick('home')}
          >
            Home
          </a>
        </li>
        <li className="nav-item mx-auto">
          <a
            className={`nav-link ${activeLink === 'how-it-works' ? 'active' : ''}`}
            onClick={() => handleClick('how-it-works')}
          >
            How it works
          </a>
        </li>
        <li className="nav-item mx-auto">
          <a
            className={`nav-link ${activeLink === 'faqs' ? 'active' : ''}`}
            onClick={() => handleClick('faqs')}
          >
            FAQ’s
          </a>
        </li>
        <li className="nav-item mx-auto">
          <a
            className={`nav-link ${activeLink === 'features' ? 'active' : ''}`}
            onClick={() => handleClick('features')}
          >
            Features
          </a>
        </li>
        <li className="nav-item mx-auto">
          <a
            className={`nav-link ${activeLink === 'reviews' ? 'active' : ''}`}
            onClick={() => handleClick('reviews')}
          >
            Reviews
          </a>
        </li>
      </ul>
      <form className="d-flex justify-content-center" role="search">
        <button className="btn btn-custom" type="submit">Contact us</button>
      </form>
    </div>
  </div>
               </nav>
            </div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-6 col-12 mt-lg-4 mt-0'>
                        <h2 className='hero-section-heading'>Track Your Daily Cycles & Stats...</h2>
                        <p className='hero-section-text mt-2'>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        <div className='mt-lg-5 mt-2 d-flex gap-4 img-container'>
                            <a href='#'><img src='assets/hero1-img1.png' className='img-fluid'/></a>
                            <a href='#'><img src='assets/hero1-img.png' className='img-fluid'/></a>
                            
                            
                        </div>
                    </div>
                    <div className='col-lg-6 col-12 mt-lg-3 mt-5'>
                        <img src='assets/hero-main.png' className='img-fluid'/>
                    </div>
                </div>
            </div>
        </div>
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <h3 className='section2-heading'>How it works</h3>
                    <p className='section2-text'>Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                </div>
            </div>
        </div>
        <div className='container position-relative'>
<section id="conference-timeline">
  <div>
    <div className="conference-center-line"></div>
    <div className="conference-timeline-content">
      <div className="timeline-article">
        <div className="content-left-container mt-5">
          <div className="content-left content1-s2 d-flex flex-row-reverse">
<img src='assets/Capture1.png' className='img-fluid'/>
          </div>
        </div>
        <div className="content-right-container mt-5">
          <div className="content-right content2-s2">
<p className='timeline-section-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
          </div>
        </div>
        <img src='assets/Ellipse176.svg' className='timeline-section-1-custom'/>
        <div className="meta-date d-flex justify-content-center align-items-center">
          <span className="date">01</span>
        </div>
      </div>
      <div className="timeline-article mt-5">
        <div className="content-left-container d-flex justify-content-end">
          <div className="content-left content3-s2 text-end">
          <p className='timeline-section-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
          </div>
        </div>
        <div className="content-right-container">
          <div className="content-right content3-s3">
          <img src='assets/Capture1.png' className='img-fluid ps-4'/>
          </div>
        </div>
        <div className="meta-date d-flex justify-content-center align-items-center">
          <span className="date">02</span>
        </div>
      </div>
      <div className="timeline-article mt-5">
        <div className="content-left-container">
          <div className="content-left content4-s3 d-flex flex-row-reverse">
          <img src='assets/Capture1.png' className='img-fluid'/>
          </div>
        </div>
        <div className="content-right-container">
          <div className="content-right content6-s3">
          <p className='timeline-section-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
          </div>
        </div>
        <div className="meta-date d-flex justify-content-center align-items-center">
          <span className="date">03</span>
        </div>
      </div>
    </div>
    </div>
  </section>
  </div>
  <div className="container conference-timeline2">
  <div className="row mt-5">
    <div className="col-12">
      <div className="text-center d-flex justify-content-center">
      <div className="meta-date1 d-flex justify-content-center align-items-center">
          <span className="date">01</span>
        </div>
      </div>
    </div>
  </div>
  <div className="row mt-5 d-flex text-center justify-content-center text-align-center">
    <div className="col-12">
    <p className='timeline-section-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
    </div>
  </div>
  <div className="row d-flex justify-content-center">
    <div className="content1-s7 d-flex justify-content-center">
    <img src='assets/Capture1.png' className='img-fluid ps-4'/>
    </div>
  </div>
  <div className="row mt-5">
    <div className="col-12">
      <div className="text-center d-flex justify-content-center">
      <div className="meta-date1 d-flex justify-content-center align-items-center">
          <span className="date">02</span>
        </div>
      </div>
    </div>
  </div>
  <div className="row mt-5 d-flex text-center justify-content-center text-align-center">
    <div className="col-12">
    <p className='timeline-section-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
    </div>
  </div>
  <div className="row d-flex justify-content-center">
    <div className="content1-s7 d-flex justify-content-center">
    <img src='assets/Capture1.png' className='img-fluid ps-4'/>
    </div>
  </div>
  <div className="row mt-5">
    <div className="col-12">
      <div className="text-center d-flex justify-content-center">
      <div className="meta-date1 d-flex justify-content-center align-items-center">
          <span className="date">03</span>
        </div>
      </div>
    </div>
  </div>
  <div className="row mt-5 d-flex text-center justify-content-center text-align-center">
    <div className="col-12">
    <p className='timeline-section-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
    </div>
  </div>
  <div className="row d-flex justify-content-center">
    <div className="content1-s7 d-flex justify-content-center">
    <img src='assets/Capture1.png' className='img-fluid ps-4'/>
    </div>
  </div>
</div>
<div className='container mt-5'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <h3 className='section2-heading'>Features</h3>
                    <p className='section2-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry..</p>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-lg-4 col-12 order-lg-1 order-2 mt-lg-0 mt-3 d-lg-block d-flex justify-content-center'>
                    <img src='assets/iPhone 12 _ 12 Pro.png' className='img-fluid'/>
                </div>
                <div className='col-lg-8 col-12 order-lg-2 order-1 text-lg-start text-center'>
                    <div className='mt-4'>
                        <h4 className='s3-heading'>Lorem Ipsum is simply dummy text</h4>
                        <p className='s3-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                    </div>
                    <div className='mt-5'>
                        <h4 className='s3-heading'>Lorem Ipsum is simply dummy text</h4>
                        <p className='s3-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                    </div>
                    <div className='mt-5'>
                        <h4 className='s3-heading'>Lorem Ipsum is simply dummy text</h4>
                        <p className='s3-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                    </div>
                    <div className='mt-5'>
                        <h4 className='s3-heading'>Lorem Ipsum is simply dummy text</h4>
                        <p className='s3-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <h3 className='section2-heading'>Our Products</h3>
                    <p className='section2-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry..</p>
                </div>
            </div>
            <div className='row mt-3 d-flex justify-content-center'>
                <div className='col-lg-4 col-md-6 col-12 mt-md-0 mt-4'>
                    <div className='card1'>
                        <div className='d-flex justify-content-center pt-5'>
                            <img src='assets/NEOTEST P+ Pouch 1.png'/>
                        </div>
                        <div className='text-center p-4'>
                        <h3 className='pt-3 card-heading'>Lorem Ipsum is simply...</h3>
                        <p className='card-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-12 mt-lg-0 mt-md-0 mt-4'>
                    <div className='card1'>
                        <div className='d-flex justify-content-center pt-5'>
                            <img src='assets/NEOTEST P+ BOX Backside 1.png'/>
                        </div>
                        <div className='text-center p-4'>
                        <h3 className='pt-3 card-heading'>Lorem Ipsum is simply...</h3>
                        <p className='card-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-12 mt-lg-0 mt-4'>
                    <div className='card1'>
                        <div className='d-flex justify-content-center pt-5'>
                            <img src='assets/NEOTEST P+ Device 1.png'/>
                        </div>
                        <div className='text-center p-4'>
                        <h3 className='pt-3 card-heading'>Lorem Ipsum is simply...</h3>
                        <p className='card-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <h3 className='section2-heading'>Some Reviews</h3>
                    <p className='section4-text'>Of our patients</p>
                </div>
            </div>
        </div>
        <div className='container position-relative d-md-block d-none'>
<section id="conference-timeline3">
  <div>
    <div className="conference-center-line2"></div>
    <div className="conference-timeline-content">
      <div className="timeline-article2">
        <div className="content-left-container mt-5">
          <div className="content-left content1-s2">
            <div className='d-flex align-items-center'>
            <img src='assets/Mask group.png' className='img-fluid'/>
            <div className='ms-3 mt-2'>
                <h5 className='timeline3-heading-left'>Jack Sparrow</h5>
                <p className='timeline3-text-left'>California, USA</p>
            </div>
            </div>
          </div>
        </div>
        <div className="content-right-container mt-5">
          <div className="content-right">
          </div>
        </div>
        <div className="meta-date2 d-flex justify-content-center align-items-center">
          <img src='assets/Ellipse 3.svg'/>
        </div>
      </div>
      <div className="timeline-article2 d-flex justify-content-between align-items-center">
        <div className="content-left-container d-flex justify-content-end ">
          <div className="content-left">
          <div className='d-flex align-items-center timeline-box-shadow-custom'>
            <img src='assets/Mask group (2).png' className='img-fluid'/>
            <div className='ms-3 mt-2 pe-4'>
                <h5 className='timeline3-heading-left'>Harmyini cringer</h5>
                <p className='timeline3-text-left'>New York, USA</p>
            </div>
            </div>
          </div>
        </div>
        <div className="content-right-container">
          <div className="content-right">
            <div>
                <img src='assets/Vector.png'/>
                <p className='timeline-section2-right-text ps-3 pt-3'>I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.</p>
                <div className='ps-3 pt-2'>
                    <img src='assets/Star1.png'/>
                    <img src='assets/Star1.png' className='ms-2'/>
                    <img src='assets/Star1.png' className='ms-2'/>
                    <img src='assets/Star1.png' className='ms-2'/>
                </div>
            </div>
          </div>
        </div>
        <div className="meta-date3 d-flex justify-content-center align-items-center">
        <img src='assets/Ellipse 1.svg'/>
        </div>
      </div>
      <div className="timeline-article2">
        <div className="content-left-container">
          <div className="content-left content4-s3">
          <div className='d-flex align-items-center'>
            <img src='assets/Mask group (1).png' className='img-fluid'/>
            <div className='ms-3 mt-2'>
                <h5 className='timeline3-heading-left'>William heck</h5>
                <p className='timeline3-text-left'>Apolo, Hawaii</p>
            </div>
            </div>
          </div>
        </div>
        <div className="content-right-container">
          <div className="content-right">
          </div>
        </div>
        <div className="meta-date2 d-flex justify-content-center align-items-center">
        <img src='assets/Ellipse 3.svg'/>
        </div>
      </div>
      <div className="timeline-article2">
        <div className="content-left-container d-flex justify-content-end custom-botom-margin">
          <div className="content-left content4-s3">
          <div className='d-flex align-items-center timeline-box-shadow-custom1'>
            <img src='assets/Mask group (2).png' className='img-fluid'/>
            <div className='ms-3 mt-2 pe-4'>
            <h5 className='timeline3-heading-left'>Harmyini cringer</h5>
            <p className='timeline3-text-left'>New York, USA</p>
            </div>
            </div>
          </div>
        </div>
        <div className="content-right-container">
          <div className="content-right">
          </div>
        </div>
        <div className="meta-date2 d-flex justify-content-center align-items-center">
        <img src='assets/Ellipse 3.svg'/>
        </div>
      </div>
    </div>
    </div>
  </section>
  </div>
  <div className='container mt-3 d-md-none d-block'>
    <div className='row'>
        <div className='col-12'>
        <div>
                <img src='assets/Vector.png'/>
                <div className='d-flex align-items-center ps-3 pt-3'>
            <img src='assets/Mask group (2).png' className='img-fluid'/>
            <div className='ms-3 mt-2 pe-4'>
                <h5 className='timeline3-heading-left'>Harmyini cringer</h5>
                <p className='timeline3-text-left'>New York, USA</p>
            </div>
            </div>
                <p className='timeline-section2-right-text ps-3 pt-3'>I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.</p>
                <div className='ps-3 pt-2'>
                    <img src='assets/Star1.png'/>
                    <img src='assets/Star1.png' className='ms-2'/>
                    <img src='assets/Star1.png' className='ms-2'/>
                    <img src='assets/Star1.png' className='ms-2'/>
                </div>
            </div>
        </div>
    </div>
  </div>
  <div className='container mt-5'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <h3 className='section2-heading'>Frequently Asked</h3>
                    <p className='section4-text'>Questions</p>
                </div>
            </div>
        </div>
  <div className="container">
    <div className="row gy-5 gy-lg-0 align-items-lg-center">
    <div className="accordion accordion-flush" id="accordionExample">
              <div className="accordion-item mt-3">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  How do i schedule an appointment?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>To change your billing information, please follow these steps:</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item mt-3">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  How do i schedule an appointment?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>A payment system is a way to transfer money from one person or organization to another. It is a complex process that involves many different parties, including banks, credit card companies, and merchants.
                    </p></div>
                </div>
              </div>
              <div className="accordion-item mt-3">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Do you accept insurance?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident...</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item mt-3">
                <h2 className="accordion-header" id="headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  How do i schedule an appointment?
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident...</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item mt-3">
                <h2 className="accordion-header" id="headingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident...</p>
                  </div>
                </div>
              </div>
            </div>
    </div>
  </div>
<footer className="mt-5">
  <section className="py-4">
    <div className="container">
      <div className="row gy-3">
        <div className=" col-lg-4 col-md-6 col-12">
          <div class="link-wrapper">
            <h4 class="mb-3">Description</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <div className="link-wrapper">
            <h4 className="mb-3">Company</h4>
            <ul className="m-0 list-unstyled">
              <li className="mb-3">
                <a href="#!">
                Emergency Dental Care .AI
                </a>
              </li>
              <li className="mb-3">
                <a href="#!">
                New York, USA
                </a>
              </li>
              <li className="mb-3">
                <a href="#!">
                <img src='assets/Vector5.png' className='me-2'/> +1 234 567 8910
                </a>
              </li>
              <li className="mb-3">
                <a href="#!">
                <img src='assets/Vector (1).png' className='me-2'/> Info@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-12">
          <div className="link-wrapper">
            <h4 className="mb-3">Quick links</h4>
            <ul className="m-0 list-unstyled">
              <li className="mb-3">
                <a href="#!" >
                About us
                </a>
              </li>
              <li className="mb-3">
                <a href="#!">
                Contact us                </a>
              </li>
              <li className="mb-3">
                <a href="#!">
                FAQ’s
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <div className="link-wrapper">
            <h4 className="mb-3">Social media</h4>
            <ul className="m-0 list-unstyled">
              <li className="mb-3">
                <a href="#!">
                <img src='assets/fb.png' className='me-2'/> Facebook
                </a>
              </li>
              <li className="mb-3">
                <a href="#!">
                <img src='assets/insta.png' className='me-2'/> Instagram
                </a>
              </li>
              <li className="mb-3">
                <a href="#!">
                <img src='assets/tw.png' className='me-2'/> X
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div>
    <div className="container-fluid border-top pt-3 pt-md-4">
      <div className="row">
        <div className="col-12">
          <div className="mb-1 text-center">
            <p className='footer-text'>Copyright © 2024 <span className='footer-text-inner'>NEOTEST P+</span> All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</footer>
    </div>
  );
};

export default HomePage;
