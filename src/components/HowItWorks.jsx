import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import { Helmet } from 'react-helmet';
import './css/contact/how.css';
import './css/contact/howitworks.css';
import './css/contact/animate.css';
import './css/contact/animationhow.css';
import './css/contact/styleimagepage.css';


function HowItWorks() {
  return (
    <>
      <Navbar />
      <div className="heading__hiw" style={{ color: '#000' }}>
        <h1>How it works</h1>
      </div>

      <div id="mainSection">

        <div className="containerClass">
          <div className="row">
            <div className="col-md-12">
              <div className="main-timeline">
                <div className="timeline one ">
                  <div className="timeline-content ianimator animated fadeIn">
                    <div className="circle "><span><i>
                      <img src="/img/Step1.png" alt="BlueMasons How it Works" />
                    </i></span></div>
                    <div className="content">
                      <span className="year">Step 1</span>
                      <h4 className="title">We listen, while you tell us about</h4>
                      <p className="description">
                        <i className="fa fa-check"></i> Your Project<br />
                        <i className="fa fa-check"></i> Your Budget<br />
                        <i className="fa fa-check"></i> Your Taste<br />
                        <i className="fa fa-check"></i> Your Aspirations<br />
                      </p>
                      <div className="icon"><span></span></div>
                    </div>
                  </div>
                </div>
                <div className="timeline rightclass two">
                  <div className="timeline-content animatortwo animated fadeIn">
                    <div className="circle "><span><i><img src="/img/Step2.png" alt="BlueMasons How it Works" />
                    </i></span></div>
                    <div className="content">
                      <span className="year">Step 2</span>
                      <h4 className="title">You listen, when we give you</h4>
                      <p className="description">
                        <i className="fa fa-check"></i> Free Design Consultation<br />
                        <i className="fa fa-check"></i> Site Measurement<br />
                        <i className="fa fa-check"></i> Floor Plans <br />
                        <i className="fa fa-check"></i> Quotations<br />
                      </p>
                      <div className="icon"><span></span></div>
                    </div>
                  </div>
                </div>
                <div className="timeline three">
                  <div className="timeline-content animatorthree animated fadeIn">
                    <div className="circle"><span><i><img src="/img/Step3.png" alt="BlueMasons How it Works" />
                    </i></span></div>
                    <div className="content">
                      <span className="year">Step 3</span>
                      <h4 className="title">We together</h4>
                      <p className="description">
                        <i className="fa fa-check"></i> Choose design teams<br />
                        <i className="fa fa-check"></i> Budget your project<br />
                        <i className="fa fa-check"></i> Plan a timeline<br />
                      </p>
                      <div className="icon"><span></span></div>
                    </div>
                  </div>
                </div>
                <div className="timeline rightclass four">
                  <div className="timeline-content animatorfour animated fadeIn">
                    <div className="circle"><span><i>
                      <img src="/img/Step4.png" alt="BlueMasons How it Works" /></i></span>
                    </div>
                    <div className="content">
                      <span className="year">Step 4</span>
                      <h4 className="title">You relax while we</h4>
                      <p className="description">
                        <i className="fa fa-check"></i> Execute them<br />
                        <i className="fa fa-check"></i> Handle all the stress<br />
                        <i className="fa fa-check"></i> Co-ordinate labour teams<br />
                        <i className="fa fa-check"></i> Handle products<br />
                      </p>
                      <div className="icon"><span></span></div>
                    </div>
                  </div>
                </div>
                <div className="timeline five">
                  <div className="timeline-content animatorfive animated fadeIn">
                    <div className="circle"><span><i>
                      <img src="/img/Step5.png" alt="BlueMasons How it Works" /></i></span>
                    </div>
                    <div className="content">
                      <span className="year">Step 5</span>
                      <h4 className="title">You move in</h4>
                      <p className="description">
                        <i className="fa fa-check"></i> All happy<br />
                        <i className="fa fa-check"></i> With our technical help<br />
                        <i className="fa fa-check"></i> Lifelong support<br />
                      </p>
                      <div className="icon"><span></span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="MobileTab__view" className="container-fluid">

        <div className="line"></div>

        <div className="row" id="steps onestep">

          <div className="col-3 col-md-2">
            <div className="roundcircle rounded-circle">
              <img className="img-fluid mx-auto d-block" src="/img/Step1.png" alt="BlueMasons How it Works" />
            </div>
          </div>

          <div className="col-9 col-md-10" id="step__Text">
            <h2>We listen, while you tell us about</h2>
            <p>
              <i className="fa fa-check"></i> Your Project<br />
              <i className="fa fa-check"></i> Your Budget<br />
              <i className="fa fa-check"></i> Your Taste<br />
              <i className="fa fa-check"></i> Your Aspirations<br />
            </p>
          </div>
        </div>


        <div className="row" id="steps">

          <div className="col-3 col-md-2">
            <div className="roundcircle rounded-circle">
              <img className="img-fluid mx-auto d-block" src="/img/Step2.png" alt="BlueMasons How it Works" />
            </div>
          </div>

          <div className="col-9 col-md-10" id="step__Text">
            <h2>You listen, when we give you</h2>
            <p>
              <i className="fa fa-check"></i> Free Design Consultation<br />
              <i className="fa fa-check"></i> Site Measurement<br />
              <i className="fa fa-check"></i> Floor Plans <br />
              <i className="fa fa-check"></i> Quotations<br />
            </p>
          </div>
        </div>


        <div className="row" id="steps">

          <div className="col-3 col-md-2">
            <div className="roundcircle rounded-circle">
              <img className="img-fluid mx-auto d-block" src="/img/Step3.png" alt="BlueMasons How it Works" />
            </div>
          </div>

          <div className="col-9 col-md-10" id="step__Text">
            <h2>We together</h2>
            <p>
              <i className="fa fa-check"></i> Choose design teams<br />
              <i className="fa fa-check"></i> Budget your project<br />
              <i className="fa fa-check"></i> Plan a timeline<br />
            </p>
          </div>
        </div>


        <div className="row" id="steps">

          <div className="col-3 col-md-2">
            <div className="roundcircle rounded-circle">
              <img className="img-fluid  mx-auto d-block" src="/img/Step4.png" alt="BlueMasons How it Works" />
            </div>
          </div>

          <div className="col-9 col-md-10" id="step__Text">
            <h2>You relax while we</h2>
            <p>
              <i className="fa fa-check"></i> Execute them<br />
              <i className="fa fa-check"></i> Handle all the stress<br />
              <i className="fa fa-check"></i> Co-ordinate labour teams<br />
              <i className="fa fa-check"></i> Handle products<br />
            </p>
          </div>
        </div>


        <div className="row" id="steps">

          <div className="col-3 col-md-2">
            <div className="roundcircle rounded-circle">
              <img className="img-fluid  mx-auto d-block" src="/img/Step5.png" alt="BlueMasons How it Works" />
            </div>
          </div>

          <div className="col-9 col-md-10" id="step__Text">
            <h2>You move in</h2>
            <p>
              <i className="fa fa-check"></i> All happy<br />
              <i className="fa fa-check"></i> With our technical help<br />
              <i className="fa fa-check"></i> Lifelong support<br />
            </p>
          </div>
        </div>

      </div>
      <div className="row" id="get__started">
        <div className="col-12 text-center">
          <a target="_blank" href="start-your-project">Get Started </a>
        </div>
      </div>
      <Footer />
      <Helmet>
        <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous" type="85ef9d95b2090057f48385f7-text/javascript" />
        <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous" type="85ef9d95b2090057f48385f7-text/javascript" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous" type="85ef9d95b2090057f48385f7-text/javascript" />
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous" type="85ef9d95b2090057f48385f7-text/javascript" />
        <script type="application/ld+json">
          {`
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "BlueMasons",
            "legalName": "BlueMasons Online Services LLP",
            "url": "https://www.bluemasons.com/",
            "sameAs": ["http://www.facebook.com/bluemasons",
              "http://www.twitter.com/bluemasons",
              "http://plus.google.com/+BlueMasonsKolkata",
              "http://www.instagram.com/bluemasons",
              "https://www.linkedin.com/company/bluemasons-online-services-llp",
              "https://bluemasons.tumblr.com/",
              "https://www.youtube.com/channel/UC5-bNnYoXi5dkYVgl4JGjpg",
              "https://in.pinterest.com/bluemasons/"
            ],
            "email": "enquiry@bluemasons.com",
            "logo": "https://www.bluemasons.com/bluemasonslogo",
            "description": "Amongst Interior Decorators in Kolkata, BlueMasons is a premium boutique interior design firm for home decoration, office, restaurant, showroom and hotel design",
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+91-9874870701",
              "contactType": "customer service"
            }],
            "address": [{
              "@type": "PostalAddress",
              "streetAddress": "7, Lyons Range",
              "addressRegion": "Kolkata, West Bengal",
              "postalCode": "700001",
              "addressCountry": "India"
            }],

            "founders": [{
              "@type": "Person",
              "name": "Yash Vardhan Agarwal"
            },
            {
              "@type": "Person",
              "name": "Harshvardhan Dewra"
            }
            ]
          `}
        </script>

        <script src="https://www.bluemasons.com/assets/js/how.js" type="85ef9d95b2090057f48385f7-text/javascript" />
        <script src="https://www.bluemasons.com/assets/js/jquery.waypoints.min.js" type="85ef9d95b2090057f48385f7-text/javascript" />
        <script src="https://www.bluemasons.com/assets/js/menuchanger.js" type="85ef9d95b2090057f48385f7-text/javascript" />
        <script src="https://www.bluemasons.com/assets/js/leftmenu.js" type="85ef9d95b2090057f48385f7-text/javascript" />
        <script type="85ef9d95b2090057f48385f7-text/javascript">
          {`  $(document).ready(function() {
            $(document).bind("contextmenu", function(e) {
              return false;
            })
          }) `}
        </script>
        <script type="85ef9d95b2090057f48385f7-text/javascript">
          {`
    ! function(t, e) {
                t.artibotApi = {
                    l: [],
                    t: [],
                    on: function() {
                        this.l.push(arguments)
                    },
                    trigger: function() {
                        this.t.push(arguments)
                    }
                };
                var a = !1,
                    i = e.createElement("script");
                i.async = !0, i.type = "text/javascript", i.src = "https://app.artibot.ai/loader.js", e.getElementsByTagName(
                    "head").item(0).appendChild(i), i.onreadystatechange = i.onload = function() {
                    if (!(a || this.readyState && "loaded" != this.readyState && "complete" != this.readyState)) {
                        new window.ArtiBot({
                            i: "38bb80ea-2eda-434e-96ea-420461e65872"
                        });
                        a = !0
                    }
                }
            }(window, document);          

    `
          }

        </script>
      </Helmet>
    </>
  );
}

export default HowItWorks;
