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
                      <img src="/img/Step1.png" alt="Ranisati How it Works" />
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
                    <div className="circle "><span><i><img src="/img/Step2.png" alt="Ranisati How it Works" />
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
                    <div className="circle"><span><i><img src="/img/Step3.png" alt="Ranisati How it Works" />
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
                      <img src="/img/Step4.png" alt="Ranisati How it Works" /></i></span>
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
                      <img src="/img/Step5.png" alt="Ranisati How it Works" /></i></span>
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
              <img className="img-fluid mx-auto d-block" src="/img/Step1.png" alt="Ranisati How it Works" />
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
              <img className="img-fluid mx-auto d-block" src="/img/Step2.png" alt="Ranisati How it Works" />
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
              <img className="img-fluid mx-auto d-block" src="/img/Step3.png" alt="Ranisati How it Works" />
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
              <img className="img-fluid  mx-auto d-block" src="/img/Step4.png" alt="Ranisati How it Works" />
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
              <img className="img-fluid  mx-auto d-block" src="/img/Step5.png" alt="Ranisati How it Works" />
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
        

        
        <script type="85ef9d95b2090057f48385f7-text/javascript">
          {`  $(document).ready(function() {
            $(document).bind("contextmenu", function(e) {
              return false;
            })
          }) `}
        </script>

      </Helmet>
    </>
  );
}

export default HowItWorks;
