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

      <nav className={`navbar navbar-light sticky-top notbigs ${isScrolled ? 'scrooling' : ''}   `}>
        <button onClick={handleNavCollaped} className="navbar-toggler btn-expand-collapse navbar-toggler-left" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span> <i><img className="SimpleLogo" src={"/img/menuBlack.png"} alt="ranisati" /> </i></span>
          <span> <i><img className="ScrollLogo" src={"/img/menuBlack.png"} alt="ranisati" /> </i></span>
        </button>
        <a className="navbar-brand" href="#" style={{ marginLeft: '28px' }}>
          {!isScrolled ?
            <img href={'/'} className="SimpleLogo biglogo" src={"/img/Ranisati_logo.png"} height="40px;" alt="BlueMasons" /> :
            <img href={'/'} className="ScrollLogo smallimg" src={"/img/Ranisati_logo_small.png"} style={{ display: 'block' }} height="40px;" alt="BlueMasons" />}
        </a>
        <a className="pull-right opencontact" href="start-your-project">
          <span className="nav-label spl-blcak"> Get Started</span>
        </a>
      </nav>
      <nav className={`navbar-primary notbigs ${isCollapsed ? 'collapsed' : ''}`} style={{ zIndex: '120' }} >
        <ul className="navbar-primary-menu">
          <li>
            <a href="/contact"><span className="nav-label"> Contact</span></a>
            <span style={{ position: 'absolute', width: '42px', height: '1px', backgroundColor: '#616161', marginLeft: '15px', marginTop: '-17px' }}></span>
            <a href="/howitworks"><span className="nav-label"> How it Works</span></a>
            <span style={{ position: 'absolute', width: '42px', height: '1px', backgroundColor: '#616161', marginLeft: '15px', marginTop: '-17px' }}></span>

            <a href="javascript:void(0);">
              <span className="nav-label"> Our Designs</span></a>
            <span style={{ position: 'absolute', width: '42px', height: '1px', backgroundColor: '#616161', marginLeft: '15px', marginTop: '-18px' }}>
            </span>
            <ul className="collpsemenusub">
              <a href={"http://bluemasons.com/interior-designers/hotel"} className="subsec">
                <img width="36px;" src={"/img/hotel_category.png"} alt="Hotel" /> &nbsp;&nbsp; Hotel
              </a>
              <a href={"http://bluemasons.com/interior-designers/showroom"} className="subsec">
                <img width="36px;" src={"/img/showroom_category.png"} alt="Showroom" /> &nbsp;&nbsp; Showroom
              </a>
              <a href={"http://bluemasons.com/interior-designers/restaurant"} className="subsec">
                <img width="36px;" src={"/img/restaurant_category.png"} alt="Restaurant" /> &nbsp;&nbsp; Restaurant
              </a>
              <a href={"http://bluemasons.com/interior-designers/office"} className="subsec">
                <img width="36px;" src={"/img/office_category.png"} alt="Office" /> &nbsp;&nbsp; Office
              </a>
              <a href={"http://bluemasons.com/interior-designers/home"} className="subsec">
                <img width="36px;" src={'/img/home_category.png'} alt="Home" /> &nbsp;&nbsp; Home
              </a>
            </ul>
          </li>
        </ul>
      </nav>

      <nav className=" sticky-top" style={{ position: 'fixed', width: '100%' }} >
        <div className={` custom_nav ${isScrolled ? 'scrooling' : ''} `}>
          <div id="menu_items">
            <div className="logoimg">
              <a className="navbar-brand" href={"http://ranisati.com"}>
                {!isScrolled ? <img className="SimpleLogo " src={"/img/Ranisati_logo.png"} alt="BlueMasons" style={{ paddingLeft: '30px', marginTop: '-0px', height: '60px', display: 'block' }} /> : <img className="ScrollLogo smallimg" src={"/img/Ranisati_logo_small.png"} alt="BlueMasons" height="50px" style={{ marginTop: '-14px', paddingLeft: '20px', display: 'block' }} />}
              </a>
            </div>
            <ul>
              <li className="notlist">
                <a style={{ color: '#616161', fontWeight: '500' }} target="_blank" href={"start-your-project"}>Get Started</a>
              </li>
              <li><a style={{ color: '#616161', fontWeight: '500' }} href={"contact"}>Contact</a></li>
              <li><a style={{ color: '#616161', fontWeight: '500' }} href={"howitworks"}>How it works</a></li>
              <li className="tootltypes">
                <a style={{ color: '#616161', fontWeight: '500' }} href={"interior-design"}>Our Design</a>
                <ul className="row loca">
                  <h4 className="text-center"> Explore Our Designs </h4>
                  <li className="col-1"></li>
                  <li className="col-2">
                    <a href={"http://bluemasons.com/interior-designers/hotel"}>
                      <img className="dropimg" src={"/img/hotel_category.png"} alt="Hotel" /><br />
                      <p style={{ border: 'none' }} >Hotel</p>
                    </a>
                  </li>
                  <li className="col-2">
                    <a href={"http://bluemasons.com/interior-designers/showroom"}>
                      <img className="dropimg" src="/img/showroom_category.png" alt="Showroom" /><br />
                      <p style={{ border: 'none' }}>Showroom</p>
                    </a>
                  </li>
                  <li className="col-2">
                    <a href={"http://bluemasons.com/interior-designers/restaurant"}>
                      <img className="dropimg" src={"/img/restaurant_category.png"} alt="Restaurant" /><br />
                      <p style={{ border: 'none' }}>Restaurant</p>
                    </a>
                  </li>
                  <li className="col-2">
                    <a href={"http://bluemasons.com/interior-designers/office"}>
                      <img className="dropimg" src={"/img/office_category.png"} alt="Office" /><br />
                      <p style={{ border: 'none' }}>Office</p>
                    </a>
                  </li>
                  <li className="col-2">
                    <a href={"http://bluemasons.com/interior-designers/home"}>
                      <img className="dropimg" src={"/img/home_category.png"} alt="Home" /><br />
                      <p style={{ border: 'none' }}>Home</p>
                    </a>
                  </li>
                  <li className="col-1"></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
