import React from 'react';
import { useState, useEffect } from 'react';
import './css/contact/sidemenu.css';
import './css/contact/fixedmenu.css';


function Navbar() {

  let [isScrolled, setIsScrolled] = useState(false);
  let [isCollapsed, setIsCollapsed] = useState(false);
  const handleNavCollaped = () => {
    setIsCollapsed(!isCollapsed)
  }
  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY > 0;

      setIsScrolled(isTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  return (
    <>

      <nav style={{ backgroundColor: 'grey', position: 'fixed', top: '0' }} className={`navbar navbar-light sticky-top notbigs scrooling ${isScrolled ? 'scrooling' : ''}   `}>
        <div>
          <div className="top_details">
            <div style={{ left: '0', fontWeight: 'bold', fontSize: '10px', textAlign: 'justify' }}><img src="/img/map-locator-top.png" alt="" height='15px' /> 45/46, G. T. Road- East, Beside ICICI Bank, Durga Mandir, Asansol, West Bengal, PIN - 713303</div>
            <div className="dial-mail" style={{ textAlign: 'right', textDecoration: 'none', color: 'black', fontSize: '12px' }}><a href="https://wa.me/919933332263"><img src="/img/phone-call-top.png" alt="" height='15px' /> +919933332263</a><br /><a href="mailto:ranisatiply@yahoo.com" ><img src="/img/email-top.png" alt="" height='15px' /> ranisatiply@yahoo.com</a></div>
          </div>
          <button onClick={handleNavCollaped} className="navbar-toggler btn-expand-collapse navbar-toggler-left" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span> <i><img className="SimpleLogo" src={"/img/menuBlack.png"} alt="ranisati" /> </i></span>
            <span> <i><img className="ScrollLogo" src={"/img/menuBlack.png"} alt="ranisati" /> </i></span>
          </button>
          <a className="navbar-brand" href="/" style={{ marginLeft: '28px' }}>
            {!isScrolled ?
              <img href={'/'} className="SimpleLogo biglogo" src={"/img/Ranisati_logo_new.png"} style={{ display: 'block' }} height="40px" alt="Ranisati" /> :
              <img href={'/'} className="ScrollLogo smallimg" src={"/img/Ranisati_logo_new.png"} style={{ display: 'block' }} height="40px" alt="Ranisati" />}
          </a>

          <a className="pull-right opencontact" href="start-your-project">
            <span style={{ color: 'black' }} className="nav-label spl-blcak"> Get Started</span>
          </a>
        </div>

      </nav>
      <nav className={`navbar-primary notbigs ${isCollapsed ? 'collapsed' : ''}`} style={{ zIndex: '120' }} >
        <ul className="navbar-primary-menu">
          <li>
            <a href="/aboutus"><span className="nav-label">About us</span></a>
            <span style={{ position: 'absolute', width: '42px', height: '1px', backgroundColor: '#010100', marginLeft: '15px', marginTop: '-17px' }}></span>
            <a href="/products"><span className="nav-label">Products</span></a>
            <span style={{ position: 'absolute', width: '42px', height: '1px', backgroundColor: '#010100', marginLeft: '15px', marginTop: '-17px' }}></span>
            <a href="/interior-design">
              <span className="nav-label"> Our Designs</span></a>



            <span style={{ position: 'absolute', width: '42px', height: '1px', backgroundColor: '#010100', marginLeft: '15px', marginTop: '-17px' }}></span>
            <a href="/howitworks"><span className="nav-label"> How it Works</span></a>

            <span style={{ position: 'absolute', width: '42px', height: '1px', backgroundColor: '#010100', marginLeft: '15px', marginTop: '-17px' }}></span>
            <a href="/contact"><span className="nav-label">Contact</span></a>

            <span style={{ position: 'absolute', width: '42px', height: '1px', backgroundColor: '#010100', marginLeft: '15px', marginTop: '-18px' }}>
            </span>
            {/* <ul className="collpsemenusub">
              <a href={"/interior-design/hotel"} className="subsec">
                <img width="36px;" src={"/img/hotel_category.png"} alt="Hotel" /> &nbsp;&nbsp; Hotel
              </a>
              <a href={"/interior-design/restaurant"} className="subsec">
                <img width="36px;" src={"/img/restaurant_category.png"} alt="Restaurant" /> &nbsp;&nbsp; Restaurant
              </a>
              <a href={"/interior-design/office"} className="subsec">
                <img width="36px;" src={"/img/office_category.png"} alt="Office" /> &nbsp;&nbsp; Office
              </a>
              <a href={"/interior-design/"} className="subsec">
                <img width="36px;" src={'/img/home_category.png'} alt="Home" /> &nbsp;&nbsp; Home
              </a>
              <a href={"/interior-design/others"} className="subsec">
                <img width="36px;" src={"/img/showroom_category.png"} alt="Others" /> &nbsp;&nbsp; Others
              </a>
            </ul> */}
            {/* <a href="/contact"><span className="nav-label"> Contact</span></a> */}
          </li>
        </ul>
      </nav>



      <nav className=" sticky-top" style={{ position: 'fixed', width: '100%' }} >


        <div className={` custom_nav scrooling ${isScrolled ? 'scrooling' : ''} `}>

          <div id="menu_items">
            {/* <div><p>Hello</p></div> */}
            <div className="top_details">
              <div style={{ left: '0', fontWeight: 'bold' }}><img src="/img/map-locator-top.png" alt="" /> 45/46, G. T. Road- East, Beside ICICI Bank, <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Durga Mandir, Asansol, West Bengal, PIN - 713303</div>
              <div className="dial-mail" style={{ textAlign: 'right', textDecoration: 'none', color: 'black' }}><a href="tel:+919933332263"><img src="/img/phone-call-top.png" alt="" /> +919933332263</a><br /><a href="mailto:ranisatiply@yahoo.com" ><img src="/img/email-top.png" alt="" /> ranisatiply@yahoo.com</a></div>
            </div>

            <div className="logoimg">
              <div>
                <a className="navbar-brand" href={"/"}>
                  {!isScrolled ? <img className="SimpleLogo " src={"/img/Ranisati_logo_new.png"} alt="Ranisati" style={{ paddingLeft: '30px', marginTop: '-5px', height: '85px', display: 'block' }} /> :
                    <img className="ScrollLogo smallimg" src={"/img/Ranisati_logo_new.png"} alt="Ranisati" height="85px" style={{ marginTop: '-5px', paddingLeft: '20px', display: 'block' }} />}
                </a>
              </div>
              <div style={{ paddingTop: '10px' }}><a href={"/"} style={{ color: '#000' }}><strong style={{ fontSize: '30px', color: 'red' }}>Ranisati</strong><br /> <strong>Ply & Hardware</strong></a></div>
            </div>
            <ul>
              <li><a style={{ color: '#010100', fontWeight: '500', marginTop: '-5px' }} href={"/contact"}>Contact</a></li>

              <li className="notlist">
                <a style={{ color: '#010100', fontWeight: '500', marginTop: '-5px' }} target="_blank" href={"/start-your-project"}>Get Started</a>
              </li>
              <li><a style={{ color: '#010100', fontWeight: '500', marginTop: '-5px' }} href={"/howitworks"}>How it works</a></li>

              <li className="tootltypes">
                <a style={{ color: '#010100', fontWeight: '500', marginTop: '-5px' }} href={"/interior-design/"}>Our Design</a>
                {/* <ul className="row loca">
                  <h4 className="text-center"> Explore Our Designs </h4>
                  <li className="col-1"></li>
                  <li className="col-2">
                    <a href={"/interior-design/others"}>
                      <img className="dropimg" src="/img/showroom_category.png" alt="others" /><br />
                      <p style={{ border: 'none' }}>Others</p>
                    </a>
                  </li>
                  <li className="col-2">
                    <a href={"/interior-design/hotel"}>
                      <img className="dropimg" src={"/img/hotel_category.png"} alt="Hotel" /><br />
                      <p style={{ border: 'none' }} >Hotel</p>
                    </a>
                  </li>
                  <li className="col-2">
                    <a href={"/interior-design/restaurant"}>
                      <img className="dropimg" src={"/img/restaurant_category.png"} alt="Restaurant" /><br />
                      <p style={{ border: 'none' }}>Restaurant</p>
                    </a>
                  </li>
                  <li className="col-2">
                    <a href={"/interior-design/office"}>
                      <img className="dropimg" src={"/img/office_category.png"} alt="Office" /><br />
                      <p style={{ border: 'none' }}>Office</p>
                    </a>
                  </li>
                  <li className="col-2">
                    <a href={"/interior-design/"}>
                      <img className="dropimg" src={"/img/home_category.png"} alt="Home" /><br />
                      <p style={{ border: 'none' }}>Home</p>
                    </a>
                  </li>
                  <li className="col-1"></li>
                </ul> */}
              </li>
              <li> <a style={{ color: '#010100', fontWeight: '500', marginTop: '-5px' }} href={"/products"}>Products</a>             </li>

              <li> <a style={{ color: '#010100', fontWeight: '500', marginTop: '-5px' }} href={"/aboutus"}>About us</a>             </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
