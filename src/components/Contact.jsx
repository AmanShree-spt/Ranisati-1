import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import './css/Contact.css';
import './css/contact/contact.css';
import './css/contact/formstyle.css';
import './css/contact/hover-min.css';
//import './css/contact/contactstyle.css';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function Contact() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <Navbar />
      <Slider {...sliderSettings}>
        <img src={'/img/contact_1.JPG'} />
        <img src={'/img/contact_3.jpg'} />
      </Slider>
      

      <div className="row">
        <div className="col-12" id="form--were">

          <div className="row">
            <div className="col-lg-4 col-md-4 col-12 text-center boxes">
              <img className="hvr-float" src="/img/call-icon.png" />
              <p>CALL US</p>
              <p>+91-9800144511</p>
              <p>+91-9932442966</p>
            </div>
            <div className="col-lg-4 col-md-4 col-12 text-center boxes">
              <a className="down" href="mailto:ranisatiply@yahoo.com">
                <img className="hvr-float" src="/img/email-icon.png" />
                <p>WRITE TO US</p>
                {/* <p><span className="__cf_email__"
                  data-cfemail="b9f0f7fff6f9fbf5ecfcf4f8eaf6f7ea97faf6f4"></span>
                </p> */}
                <p>ranisatiply@yahoo.com
                </p>
              </a>
            </div>
            <div className="col-lg-4 col-md-4 col-12 text-center boxes">
              <a href="https://wa.me/c/919933332263" target="_blank">
                <img className="hvr-float" src="/img/chat-icon.png"
                  alt="Ranisati-chat" />
                <p>LIVE CHAT</p>
                <p>WITH US</p>
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="row">
        <div className="col-12 mx-auto" id="cont-form">
          <h2 className="text-center head--write">Write to us</h2>
          <form method="post" action="">
            <input type="hidden" name="_token" value="7x7QaSkv06hR80tzWvi0sP2E06FxOhzcW9u533ZE" />
            <div className="row">

              <div className="col-lg-4 col-12">
                <div className="form-group row">
                  <div className="col-lg-3 col-12  label--form">
                    <label for="name">Name</label>
                  </div>
                  <div className="col-lg-9 col-12">
                    <input className="form-control filled" type="text" id="contname" name="name" required />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-12">
                <div className="form-group row focused ">
                  <div className="col-lg-3 col-12  label--form">
                    <label for="Phone">Phone</label>
                  </div>
                  <div className="col-lg-9 col-12">
                    <input className="form-control filled" type="text" name="phone" id="contphone" required />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-12">
                <div className="form-group row focused">
                  <div className="col-lg-3 col-12  label--form">
                    <label for="email">Email</label>
                  </div>
                  <div className="col-lg-9 col-12">
                    <input className="form-control filled" type="email " name="email" id="contemail" required />
                  </div>
                </div>
              </div>
              <input type="text" id="website" name="website" />

              <div className="col-12">
                <div className="form-group row">
                  <div className="col-lg-1 col-12  label--form">
                    <label for="msg">Message</label>
                  </div>
                  <div className="col-lg-11 col-12">
                    <textarea className="form-control filled" id="msg" rows="5" name="message"
                      required></textarea>
                  </div>
                </div>
              </div>
              <br />
              <div id="loginMessage123" className="col-12 text-center"></div>

              <div className="col-12">
                <div className="form-group row">
                  <div className="col-1 text-center mx-auto">
                    <input type="button" className="bigger-btns" value="SUBMIT" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />

    </>
  );
}
export default Contact;
