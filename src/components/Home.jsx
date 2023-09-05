import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import './css/stylehome.css';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import { useRef, useState, useEffect } from 'react';
import './css/stylehome2.css';
function Home() {

  const containerRef = useRef(null);
  const brandRef = useRef(null);
  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -500,
      behavior: 'smooth'
    });
  };
  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: 500,
      behavior: 'smooth'
    });
  };
  const scrollLeft1 = () => {
    brandRef.current.scrollBy({
      left: -500,
      behavior: 'smooth'
    });
  };
  const scrollRight1 = () => {
    brandRef.current.scrollBy({
      left: 500,
      behavior: 'smooth'
    });
  };
  const importAll = (r) => {
    const images = {};
    r.keys().forEach((key) => {
      images[key] = r(key);
    });
    return images;
  };

  const [currentImageKey, setCurrentImageKey] = useState('./front1.jpg');


  const images_banner = importAll(require.context("../../public/img/frontpage", false, /\.(png|jpe?g|svg)$/));
  const images = importAll(require.context("../../public/img/sample_photos/others", false, /\.(png|jpe?g|svg)$/));
  console.log(images)
  const images_brand = importAll(require.context("../../public/img/brands", false, /\.(png|jpe?g|svg)$/));


  useEffect(() => {
    const interval = setInterval(() => {
      const imageKeys = Object.keys(images_banner);
      const currentIndex = imageKeys.indexOf(currentImageKey);
      const nextIndex = (currentIndex + 1) % imageKeys.length;
      setCurrentImageKey(imageKeys[nextIndex]);
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImageKey]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: '0',
  };


  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Check if the viewport width is below a certain threshold (e.g., 768px for mobile)
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);
  const mobileMarginStyle = isMobile ? { marginTop: '130px' } : {};


  return (
    <>
      <Navbar />




      <div id='sectiontop' style={mobileMarginStyle}    >
        <div >
          <Slider {...sliderSettings}>
            {Object.keys(images_banner).map((key) => (
              <img style={{ objectFit: 'cover' }} src={images_banner[key]} />
            ))}
          </Slider>
        </div>
        <div className="text-center newly">
          <h3 className style={{ paddingBottom: '10px !important', fontWeight: '300' }}>
            <div className="typed_wrap">
              <span className="typed"></span>
            </div>
          </h3>
          {//<h1 className="text-center maintexts headon">
            //      <span style={{ color: 'red' }}>Ranisati</span> Ply & Hardware
            //  </h1>
          }
        </div>

      </div>


      <div className="cover" >

        <div className="horScroll2" ref={containerRef}>
          {Object.keys(images).map((key) => (
            <img style={{ borderRadius: '4rem', objectFit: 'fill', width: '25rem' }} src={images[key]} />
          ))}
        </div>

        <button className="left" onClick={scrollLeft}>&lt;&lt;</button>
        <button className="right" onClick={scrollRight}>&gt;&gt;</button>
      </div>


      <div className="chat-popup" id="myForm">
        <a href="tel:+919933332263"><img src="../../img/phone-call.png" style={{ height: '4rem', width: '4rem' }} /></a>
      </div>

      <div id="sectionresi" className="first-spacing-home">
        <a target="_blank" href="/interior-design/" className="text-left" style={{ backgroundColor: '' }}>
          <h2><strong>Our Products Used In</strong></h2>
        </a>
        <p className="verybig"> Home</p>
        <div className="container-fluid">
          <div className="row no-gutters">

            <div className="col-sm-3 col-6">
              <a className="grid" data-toggle="modal" href="#myModal">
                <img alt="Lavish living room interiors duplex with Italian marble" className="imggrids1"
                  src="../../img/sample_photos/home/restaurant49.jpg"
                  style={{ width: '100%' }}
                />
              </a>
            </div>
            <div className="col-sm-3 col-6">
              <a className="grid" data-toggle="modal" href="#myModal">
                <img alt="Modern bedroom interiors with wardrobe, bed, headboard, side tables and false ceiling. Blue colour interior design ideal for bachelors"
                  className="imggrids1"
                  src="../../img/sample_photos/home/restaurant30.jpg"

                  width="100%;" />
              </a>
            </div>
            <div className="col-sm-3 col-6">
              <a className="grid" data-toggle="modal" href="#myModal">
                <img alt="Modern living area cum private lounge interior design with sofa, exclusive chairs and decoratives"
                  className="imggrids1"
                  src="../../img/sample_photos/home/restaurant76.jpg"
                  width="100%;" />
              </a>
            </div>
            <div className="col-sm-3 col-6">
              <a className="grid" data-toggle="modal" href="#myModal">
                <img alt="Bar and living for modern indian home interiors with natural light and window seating"
                  className="imggrids1" src="/img/sample_photos/home/restaurant58.jpg"
                  width="100%;" />
              </a>
            </div>

            <div className="col-sm-6 col-12">
              <a className="grid" data-toggle="modal" href="#myModal">
                <img alt="Bungalow terrace design with landscaping, grass, wood walls and swing. Perfect for villa, cottage exterior design"
                  className="imggrids1"
                  src="/img/sample_photos/home/restaurant4.jpg"
                  width="100%;" />
              </a>
            </div>
            <div className="col-sm-6 col-12">
              <a className="grid" data-toggle="modal" href="#myModal">
                <img alt="Elegant home design with sofa, centre table, leather chairs and windows"
                  className="imggrids1"
                  src="/img/sample_photos/home/restaurant11.jpg"
                  width="100%;" />
              </a>
            </div>
          </div>
        </div>

        <div className="modal fade" id="myModal" role="dialog" ariaLabelledby="myLargeModalLabel" ariaHidden="true"
          tabIndex="-1">
          <div className="modal-dialog modal-lg">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <img className="specialcross" src="/img/cross.png" />
            </button>
            <div className="modal-content">

              <div className="col-12">
                <div className="image_post">
                  <ul className align="center">

                    <li className="row" id="blue" style={{ margin: 'auto' }}>

                      <span className>
                        <a className="buttons_prev" href="javascript:void(0)">
                          <i>
                            <img className="n_evimg"
                              src="../../img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Lavish living room interiors duplex with Italian marble"
                          className="img-fluid mx-auto d-block"
                          src="../../img/sample_photos/home/restaurant14.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_next" href="javascript:void(0)">
                          <i> <img className="n_evimg"
                            src="../../img/right_arrow.png" /></i>
                        </a>
                      </span>

                      <div className="col-12 col-lg-12" align="center">



                        <h3 className="text-center">Home | Modern Bedroom</h3>

                      </div>
                      <div className="col-lg-8 offset-lg-2">

                      </div>
                    </li>
                    <li className="row" id="blue" style={{ margin: 'auto' }}>

                      <span className>
                        <a className="buttons_prev" href="javascript:void(0)">
                          <i>
                            <img className="n_evimg"
                              src="../../img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Modern bedroom interiors with wardrobe, bed, headboard, side tables and false ceiling. Blue colour interior design ideal for bachelors"
                          className="img-fluid mx-auto d-block"
                          src="../../img/sample_photos/hotel/restaurant17.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_next" href="javascript:void(0)">
                          <i> <img className="n_evimg"
                            src="../../img/right_arrow.png" /></i>
                        </a>
                      </span>

                      <div className="col-12 col-lg-12" align="center">



                        <h3 className="text-center">Home | Premium Bedroom</h3>

                      </div>
                      <div className="col-lg-8 offset-lg-2">

                      </div>
                    </li>
                    <li className="row" id="blue" style={{ margin: 'auto' }}>

                      <span className>
                        <a className="buttons_prev" href="javascript:void(0)">
                          <i>
                            <img className="n_evimg"
                              src="../../img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Modern living area cum private lounge interior design with sofa, exclusive chairs and decoratives"
                          className="img-fluid mx-auto d-block"
                          src="../../img/sample_photos/hotel/restaurant3.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_next" href="javascript:void(0)">
                          <i> <img className="n_evimg"
                            src="../../img/right_arrow.png" /></i>
                        </a>
                      </span>

                      <div className="col-12 col-lg-12" align="center">



                        <h3 className="text-center">Home | European Style Living Room</h3>

                      </div>
                      <div className="col-lg-8 offset-lg-2">

                      </div>
                    </li>
                    <li className="row" id="blue" style={{ margin: 'auto' }}>

                      <span className>
                        <a className="buttons_prev" href="javascript:void(0)">
                          <i>
                            <img className="n_evimg"
                              src="../../img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Bar and living for modern indian home interiors with natural light and window seating"
                          className="img-fluid mx-auto d-block"
                          src="../../img/sample_photos/home/restaurant6.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_next" href="javascript:void(0)">
                          <i> <img className="n_evimg"
                            src="../../img/right_arrow.png" /></i>
                        </a>
                      </span>

                      <div className="col-12 col-lg-12" align="center">



                        <h3 className="text-center">Home | Kids Room</h3>

                      </div>
                      <div className="col-lg-8 offset-lg-2">

                      </div>
                    </li>
                    <li className="row" id="blue" style={{ margin: 'auto' }}>

                      <span className>
                        <a className="buttons_prev" href="javascript:void(0)">
                          <i>
                            <img className="n_evimg"
                              src="../../img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Bungalow terrace design with landscaping, grass, wood walls and swing.
                             Perfect for villa, cottage exterior design" className="img-fluid mx-auto d-block"
                          src="../../img/sample_photos/home/restaurant4.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_next" href="javascript:void(0)">
                          <i> <img className="n_evimg"
                            src="../../img/right_arrow.png" /></i>
                        </a>
                      </span>

                      <div className="col-12 col-lg-12" align="center">



                        <h3 className="text-center">Home | Modern Luxurious Bedroom</h3>

                      </div>
                      <div className="col-lg-8 offset-lg-2">

                      </div>
                    </li>
                    <li className="row" id="blue" style={{ margin: 'auto' }}>

                      <span className>
                        <a className="buttons_prev" href="javascript:void(0)">
                          <i>
                            <img className="n_evimg"
                              src="../../img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Elegant home design with sofa, centre table, leather chairs and windows"
                          className="img-fluid mx-auto d-block"
                          src="../../img/sample_photos/home/restaurant11.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_next" href="javascript:void(0)">
                          <i> <img className="n_evimg"
                            src="../../img/right_arrow.png" /></i>
                        </a>
                      </span>

                      <div className="col-12 col-lg-12" align="center">



                        <h3 className="text-center">Home | Pink Kids Room</h3>

                      </div>
                      <div className="col-lg-8 offset-lg-2">

                      </div>
                    </li>

                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      <div className="container last" id="lastText">
        <h2 className="text-center">
          <a target="_blank" href="/interior-design/">
            Explore Our Designs
            <i style={{ marginTop: '1.5px', marginLeft: '4px' }} className="fa fa-caret-right"></i>
          </a>
        </h2>
      </div>



      <div className="container-fluid" id="big__quote">
        <div className="row">
          <div className="col-12 text-center">
            <img className="img-fluid mx-auto d-block icoconimg" src="/img/door.png" />
            <h2 className="super__big">IF OPPORTUNITY DOESN'T KNOCK,<br />
              <b><a target="_blank" className="linkoflink"
                href="/start-your-project">BUILD</a> </b>A DOOR.
            </h2>
          </div>
        </div>
      </div>

      <div id="sectionresi">
        <a href="/interior-design/hotel">
          <h2>Hotel <span>Design</span></h2>
        </a>
        <p className="verybigfive">
          Hotel
        </p>
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="col-sm-3 col-6">
              <a className="hotlgrid" data-toggle="modal" href="#modalhotl">
                <img alt="Semi luxury 3 star hotel  guest house room interior design" className="imggrids1"
                  src="../../img/sample_photos/hotel/restaurant15.jpg"
                  width="100%;" />
              </a>
            </div>
            <div className="col-sm-3 col-6">
              <a className="hotlgrid" data-toggle="modal" href="#modalhotl">
                <img alt="4 star hotel reception and lobby interior design" className="imggrids1"
                  src="../../img/sample_photos/hotel/restaurant16.jpg"
                  width="100%;" />
              </a>
            </div>
            <div className="col-sm-3 col-6">
              <a className="hotlgrid" data-toggle="modal" href="#modalhotl">
                <img alt="Suite hotel room interior design with flooring, furniture and false ceiling"
                  className="imggrids1"
                  src="../../img/sample_photos/hotel/restaurant12.jpg"
                  width="100%;" />
              </a>
            </div>
            <div className="col-sm-3 col-6">
              <a className="hotlgrid" data-toggle="modal" href="#modalhotl">
                <img alt="Five star hotel spa interiors with separate massage and jacuzzi room"
                  className="imggrids1"
                  src="../../img/sample_photos/hotel/restaurant13.jpg"
                  width="100%;" />
              </a>
            </div>
            <div className="col-sm-6 col-12">
              <a className="hotlgrid" data-toggle="modal" href="#modalhotl">
                <img alt="Luxury hotel restaurant interior with designer ceiling and seating" className="imggrids1"
                  src="../../img/sample_photos/hotel/restaurant6.jpg"
                  width="100%;" />
              </a>
            </div>
            <div className="col-sm-6 col-12">
              <a className="hotlgrid" data-toggle="modal" href="#modalhotl">
                <img alt="Hotel lobby with high ceiling, reception and waiting area" className="imggrids1"
                  src="../../img/sample_photos/hotel/restaurant7.jpg"
                  width="100%;" />
              </a>
            </div>
          </div>
        </div>
        <div className="modal fade" id="modalhotl" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"
          tabindex="-1">
          <div className="modal-dialog modal-lg">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <img className="specialcross" src="../../img/cross.png" />
            </button>
            <div className="modal-content">
              <div className="col-12">
                <div className="image_post_hotl">
                  <ul className align="center">
                    <li className="row" id="blue" style={{ margin: 'auto' }}>
                      <span className>
                        <a className="buttons_prevhotl" href="#">
                          <i>
                            <img className="n_evimg"
                              src="../../img/left_arrow.png" />
                          </i>
                        </a>
                      </span>
                      <span className align="center">
                        <img alt="Semi luxury 3 star hotel  guest house room interior design"
                          className="img-fluid mx-auto d-block"
                          src="../../img/sample_photos/hotel/restaurant15.jpg" />
                      </span>
                      <span className>
                        <a className="buttons_nexthotl" href="#">
                          <i> <img className="n_evimg"
                            src="../../img/right_arrow.png" /></i>
                        </a>
                      </span>
                      <div className="col-12 col-lg-12" align="center">
                        <h3 className="text-center">
                          Hotel | Hotel Reception Area
                        </h3>
                      </div>
                      <div className="col-lg-8 offset-lg-2">
                      </div>
                    </li>
                    <li className="row" id="blue" style={{ margin: 'auto' }}>
                      <span className>
                        <a className="buttons_prevhotl" href="#">
                          <i>
                            <img className="n_evimg"
                              src="../../img/left_arrow.png" />
                          </i>
                        </a>
                      </span>
                      <span className align="center">
                        <img alt="4 star hotel reception and lobby interior design"
                          className="img-fluid mx-auto d-block"
                          src="../../img/sample_photos/hotel/restaurant16.jpg" />
                      </span>
                      <span className>
                        <a className="buttons_nexthotl" href="#">
                          <i> <img className="n_evimg"
                            src="../../img/right_arrow.png" /></i>
                        </a>
                      </span>
                      <div className="col-12 col-lg-12" align="center">
                        <h3 className="text-center">
                          Hotel | Hotel Bed And Side Table
                        </h3>
                      </div>
                      <div className="col-lg-8 offset-lg-2">
                      </div>
                    </li>
                    <li className="row" id="blue" style={{ margin: 'auto' }}>
                      <span className>
                        <a className="buttons_prevhotl" href="#">
                          <i>
                            <img className="n_evimg"
                              src="../../img/left_arrow.png" />
                          </i>
                        </a>
                      </span>
                      <span className align="center">
                        <img alt="Suite hotel room interior design with flooring, furniture and false ceiling"
                          className="img-fluid mx-auto d-block"
                          src="../../img/sample_photos/hotel/restaurant12.jpg" />
                      </span>
                      <span className>
                        <a className="buttons_nexthotl" href="#">
                          <i> <img className="n_evimg"
                            src="../../img/right_arrow.png" /></i>
                        </a>
                      </span>
                      <div className="col-12 col-lg-12" align="center">
                        <h3 className="text-center">
                          Hotel | Premium Delux Room
                        </h3>
                      </div>
                      <div className="col-lg-8 offset-lg-2">
                      </div>
                    </li>
                    <li className="row" id="blue" style={{ margin: 'auto' }}>
                      <span className>
                        <a className="buttons_prevhotl" href="#">
                          <i>
                            <img className="n_evimg"
                              src="../../img/left_arrow.png" />
                          </i>
                        </a>
                      </span>
                      <span className align="center">
                        <img alt="Five star hotel spa interiors with separate massage and jacuzzi room"
                          className="img-fluid mx-auto d-block"
                          src="../../img/sample_photos/hotel/restaurant13.jpg" />
                      </span>
                      <span className>
                        <a className="buttons_nexthotl" href="#">
                          <i> <img className="n_evimg"
                            src="../../img/right_arrow.png" /></i>
                        </a>
                      </span>
                      <div className="col-12 col-lg-12" align="center">
                        <h3 className="text-center">
                          Hotel | Hotel Waiting Area
                        </h3>
                      </div>
                      <div className="col-lg-8 offset-lg-2">
                      </div>
                    </li>
                    <li className="row" id="blue" style={{ margin: 'auto' }}>
                      <span className>
                        <a className="buttons_prevhotl" href="#">
                          <i>
                            <img className="n_evimg"
                              src="../../img/left_arrow.png" />
                          </i>
                        </a>
                      </span>
                      <span className align="center">
                        <img alt="Luxury hotel restaurant interior with designer ceiling and seating"
                          className="img-fluid mx-auto d-block"
                          src="../../img/sample_photos/hotel/restaurant6.jpg" />
                      </span>
                      <span className>
                        <a className="buttons_nexthotl" href="#">
                          <i> <img className="n_evimg"
                            src="../../img/right_arrow.png" /></i>
                        </a>
                      </span>
                      <div className="col-12 col-lg-12" align="center">
                        <h3 className="text-center">
                          Hotel | Premium Suite Room Interiors
                        </h3>
                      </div>
                      <div className="col-lg-8 offset-lg-2">
                      </div>
                    </li>
                    <li className="row" id="blue" style={{ margin: 'auto' }}>
                      <span className>
                        <a className="buttons_prevhotl" href="#">
                          <i>
                            <img className="n_evimg"
                              src="../../img/left_arrow.png" />
                          </i>
                        </a>
                      </span>
                      <span className align="center">
                        <img alt="Hotel lobby with high ceiling, reception and waiting area"
                          className="img-fluid mx-auto d-block"
                          src="../../img/sample_photos/hotel/restaurant7.jpg" />
                      </span>
                      <span className>
                        <a className="buttons_nexthotl" href="#">
                          <i> <img className="n_evimg"
                            src="../../img/right_arrow.png" /></i>
                        </a>
                      </span>
                      <div className="col-12 col-lg-12" align="center">
                        <h3 className="text-center">
                          Hotel | Boutique Hotel Interiors
                        </h3>
                      </div>
                      <div className="col-lg-8 offset-lg-2">
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container last" id="lastText">
        <h2 className="text-center">
          <a target="_blank" href="/interior-design/hotel">
            Explore Our Designs
            <i style={{ marginTop: '1.5px', marginLeft: '4px' }} className="fa fa-caret-right"></i>
          </a>
        </h2>
      </div>


      <div className="container-fluid" id="big__quote">
        <div className="row">
          <div className="col-12 text-center">
            <img className="img-fluid mx-auto d-block icoconimg"
              src="../../img/hotelmenu.png" />
            <h2 className="super__big"><b><a className="linkoflink" target="_blank"
              href="/start-your-project">HOTEL ROOMS</a></b> INHABIT <br /> A
              SEPARATE MORAL UNIVERSE.
            </h2>

          </div>
        </div>
      </div>



      <div id="sectionresi">
        <a href="/interior-design/restaurant">
          <h2>Restaurant <span>Design</span></h2>
        </a>
        <p className="verybigthree"> Restaurant </p>

        <div className="container-fluid">
          <div className="row no-gutters">

            <div className="col-sm-3 col-6">
              <a className="resgrid" data-toggle="modal" href="#modalres">
                <img alt="Industrial interior design for restaurant cum bar with open ceiling and hanging lights"
                  className="imggrids1"
                  src="../../img/sample_photos/restaurant/restaurant5.jpg"
                  width="100%;" />
              </a>
            </div>
            <div className="col-sm-3 col-6">
              <a className="resgrid" data-toggle="modal" href="#modalres">
                <img alt="Theme Cafe interior design with customised furniture" className="imggrids1"
                  src="../../img/sample_photos/restaurant/restaurant8.jpg"
                  width="100%;" />
              </a>
            </div>
            <div className="col-sm-3 col-6">
              <a className="resgrid" data-toggle="modal" href="#modalres">
                <img alt="Multi-storied restaurant architecture and decor with wall art and modern designs"
                  className="imggrids1"
                  src="../../img/sample_photos/restaurant/restaurant2.jpg"
                  width="100%;" />
              </a>
            </div>
            <div className="col-sm-3 col-6">
              <a className="resgrid" data-toggle="modal" href="#modalres">
                <img alt="Cafe interior with wall art and furniture with open ceiling for modern industrial look"
                  className="imggrids1"
                  src="../../img/sample_photos/restaurant/restaurant7.jpg" />
              </a>
            </div>

            <div className="col-sm-6 col-12">
              <a className="resgrid" data-toggle="modal" href="#modalres">
                <img alt="Night club and disco interiors with bar and dance floor and apt lighting"
                  className="imggrids1"
                  src="../../img/sample_photos/restaurant/restaurant9.jpg"
                  width="100%;" />
              </a>
            </div>
            <div className="col-sm-6 col-12">
              <a className="resgrid" data-toggle="modal" href="#modalres">
                <img alt="Luxury restaurant with high ceiling and beautiful decor" className="imggrids1"
                  src="../../img/sample_photos/restaurant/restaurant14.jpg"
                  width="100%;" />
              </a>
            </div>
          </div>
        </div>

        <div className="modal fade" id="modalres" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"
          tabindex="-1">
          <div className="modal-dialog modal-lg">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <img className="specialcross" src="../../img/cross.png" />
            </button>
            <div className="modal-content">

              <div className="col-12">
                <div className="image_post_res">
                  <ul className align="center">

                    <li className="row" id="blue" style={{ margin: 'auto' }}>

                      <span className>
                        <a className="buttons_prevres" href="#">
                          <i>
                            <img className="n_evimg"
                              src="../../img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Industrial interior design for restaurant cum bar with open ceiling and hanging lights"
                          className="img-fluid mx-auto d-block"
                          src="../../img/sample_photos/restaurant/restaurant5.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_nextres" href="#">
                          <i> <img className="n_evimg"
                            src="../../img/right_arrow.png" /></i>
                        </a>
                      </span>

                      <div className="col-12 col-lg-12" align="center">

                        <h3 className="text-center">
                          Restaurant | Conveyor Belt Restaurant
                        </h3>
                      </div>
                      <div className="col-lg-8 offset-lg-2">

                      </div>
                    </li>

                    <li className="row" id="blue" style={{ margin: 'auto' }}>

                      <span className>
                        <a className="buttons_prevres" href="#">
                          <i>
                            <img className="n_evimg"
                              src="../../img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Theme Cafe interior design with customised furniture"
                          className="img-fluid mx-auto d-block"
                          src="../../img/sample_photos/restaurant/restaurant8.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_nextres" href="#">
                          <i> <img className="n_evimg"
                            src="../../img/right_arrow.png" /></i>
                        </a>
                      </span>

                      <div className="col-12 col-lg-12" align="center">

                        <h3 className="text-center">
                          Restaurant | Premium Cafe Restaurant Interiors
                        </h3>
                      </div>
                      <div className="col-lg-8 offset-lg-2">

                      </div>
                    </li>

                    <li className="row" id="blue" style={{ margin: 'auto' }}>

                      <span className>
                        <a className="buttons_prevres" href="#">
                          <i>
                            <img className="n_evimg"
                              src="../../img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Multi-storied restaurant architecture and decor with wall art and modern designs"
                          className="img-fluid mx-auto d-block"
                          src="../../img/sample_photos/restaurant/restaurant2.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_nextres" href="#">
                          <i> <img className="n_evimg"
                            src="../../img/right_arrow.png" /></i>
                        </a>
                      </span>

                      <div className="col-12 col-lg-12" align="center">

                        <h3 className="text-center">
                          Restaurant | Reception And Waiting Area Of Restaurant
                        </h3>
                      </div>
                      <div className="col-lg-8 offset-lg-2">

                      </div>
                    </li>

                    <li className="row" id="blue" style={{ margin: 'auto' }}>

                      <span className>
                        <a className="buttons_prevres" href="#">
                          <i>
                            <img className="n_evimg"
                              src="../../img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Cafe interior with wall art and furniture with open ceiling for modern industrial look"
                          className="img-fluid mx-auto d-block"
                          src="../../img/sample_photos/restaurant/restaurant7.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_nextres" href="#">
                          <i> <img className="n_evimg"
                            src="../../img/right_arrow.png" /></i>
                        </a>
                      </span>

                      <div className="col-12 col-lg-12" align="center">

                        <h3 className="text-center">
                          Restaurant | Premium Fine Dine Interiors
                        </h3>
                      </div>
                      <div className="col-lg-8 offset-lg-2">

                      </div>
                    </li>

                    <li className="row" id="blue" style={{ margin: 'auto' }}>

                      <span className>
                        <a className="buttons_prevres" href="#">
                          <i>
                            <img className="n_evimg"
                              src="../../img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Night club and disco interiors with bar and dance floor and apt lighting"
                          className="img-fluid mx-auto d-block"
                          src="../../img/sample_photos/restaurant/restaurant9.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_nextres" href="#">
                          <i> <img className="n_evimg"
                            src="../../img/right_arrow.png" /></i>
                        </a>
                      </span>

                      <div className="col-12 col-lg-12" align="center">

                        <h3 className="text-center">
                          Restaurant | Restro Pub Industrial Design
                        </h3>
                      </div>
                      <div className="col-lg-8 offset-lg-2">

                      </div>
                    </li>

                    <li className="row" id="blue" style={{ margin: 'auto' }}>

                      <span className>
                        <a className="buttons_prevres" href="#">
                          <i>
                            <img className="n_evimg"
                              src="../../img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Luxury restaurant with high ceiling and beautiful decor"
                          className="img-fluid mx-auto d-block"
                          src="../../img/sample_photos/restaurant/restaurant14.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_nextres" href="#">
                          <i> <img className="n_evimg"
                            src="../../img/right_arrow.png" /></i>
                        </a>
                      </span>

                      <div className="col-12 col-lg-12" align="center">

                        <h3 className="text-center">
                          Restaurant | Industrial Design Interiors Of Cafe
                        </h3>
                      </div>
                      <div className="col-lg-8 offset-lg-2">

                      </div>
                    </li>

                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>


      <div className="container last" id="lastText">
        <h2 className="text-center">
          <a target="_blank" href="/interior-design/restaurant">
            Explore Our Designs
            <i style={{ marginTop: '1.5px', marginLeft: '4px' }} className="fa fa-caret-right"></i>
          </a>
        </h2>
      </div>








      <div id="sectionresi">
        <a href="">
          <h2 style={{ fontSize: '3rem' }}>Our Showroom</h2>
        </a>
        <p className="verybigtwo">
          Office
        </p>
        <div className="container-fluid">
          <div className="row no-gutters">

            <div className="col-sm-6 col-12">
              <a className="ofgrid" data-toggle="modal" href="#officel">
                <img alt="Office cabin with round table, chairs, carpet flooring, blinds and an amazing view"
                  className="imggrids1"
                  src="../../img/showroom/IMG_8744.JPG"
                  width="100%;" />
              </a>
            </div>
            <div className="col-sm-6 col-12">
              <a className="ofgrid" data-toggle="modal" href="#officel">
                <img alt="Premium office reception and waiting area interior with use of Italian marble"
                  className="imggrids1"
                  src="../../img/showroom/IMG_8746.JPG"
                  width="100%;" />
              </a>
            </div>
            <div className="col-sm-6 col-12">
              <a className="ofgrid" data-toggle="modal" href="#officel">
                <img alt="Corner office interior design with amazing view perfect for the company CEO"
                  className="imggrids1"
                  src="../../img/showroom/IMG_8756.JPG"
                  width="100%;" />
              </a>
            </div>
            <div className="col-sm-6 col-12">
              <a className="ofgrid" data-toggle="modal" href="#officel">
                <img alt="Office conference room interior design with table and chairs for meetings"
                  className="imggrids1"
                  src="../../img/showroom/IMG_8751.JPG"
                  width="100%;" />
              </a>
            </div>

            <div className="col-sm-6 col-12">
              <a className="ofgrid" data-toggle="modal" href="#officel">
                <img alt="Modern industrial interior design look office work place with open ceiling, colourful furniture and work stations"
                  className="imggrids1"
                  src="../../img/showroom/IMG_8760.JPG"
                  width="100%;" />
              </a>
            </div>
            <div className="col-sm-6 col-12">
              <a className="ofgrid" data-toggle="modal" href="#officel">
                <img alt="Commercial reception and waiting area design for multi-storied work place"
                  className="imggrids1"
                  src="../../img/showroom/IMG_8753.JPG"
                  width="100%;" />
              </a>
            </div>
          </div>
        </div>

        <div className="modal fade" id="officel" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"
          tabindex="-1">
          <div className="modal-dialog modal-lg">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <img className="specialcross" src="../../img/cross.png" />
            </button>
            <div className="modal-content">

              <div className="col-12">
                <div className="image_post_office">
                  <ul className align="center">

                    <li className="row" id="blue" style={{ margin: 'auto' }}>

                      <span className>
                        <a className="buttons_prevoff" href="#">
                          <i>
                            <img className="n_evimg"
                              src="../../img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Office cabin with round table, chairs, carpet flooring, blinds and an amazing view"
                          className="img-fluid mx-auto d-block"
                          src="../../img/sample_photos/office/restaurant7.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_nextoff" href="#">
                          <i> <img className="n_evimg"
                            src="../../img/right_arrow.png" /></i>
                        </a>
                      </span>

                      <div className="col-12 col-lg-12" align="center">

                        <h3 className="text-center">
                          Office | Modern White Office
                        </h3>
                      </div>
                      <div className="col-lg-8 offset-lg-2">

                      </div>
                    </li>

                    <li className="row" id="blue" style={{ margin: 'auto' }}>

                      <span className>
                        <a className="buttons_prevoff" href="#">
                          <i>
                            <img className="n_evimg"
                              src="../../assets/img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Premium office reception and waiting area interior with use of Italian marble"
                          className="img-fluid mx-auto d-block"
                          src="../../img/sample_photos/office/restaurant10.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_nextoff" href="#">
                          <i> <img className="n_evimg"
                            src="../../img/right_arrow.png" /></i>
                        </a>
                      </span>

                      <div className="col-12 col-lg-12" align="center">

                        <h3 className="text-center">
                          Office | Premium Reception Desk
                        </h3>
                      </div>
                      <div className="col-lg-8 offset-lg-2">

                      </div>
                    </li>

                    <li className="row" id="blue" style={{ margin: 'auto' }}>

                      <span className>
                        <a className="buttons_prevoff" href="#">
                          <i>
                            <img className="n_evimg"
                              src="../../img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Corner office interior design with amazing view perfect for the company CEO"
                          className="img-fluid mx-auto d-block"
                          src="../../img/sample_photos/office/restaurant13.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_nextoff" href="#">
                          <i> <img className="n_evimg"
                            src="../../img/right_arrow.png" /></i>
                        </a>
                      </span>

                      <div className="col-12 col-lg-12" align="center">

                        <h3 className="text-center">
                          Office | Elegant Executive Office
                        </h3>
                      </div>
                      <div className="col-lg-8 offset-lg-2">

                      </div>
                    </li>

                    <li className="row" id="blue" style={{ margin: 'auto' }}>

                      <span className>
                        <a className="buttons_prevoff" href="#">
                          <i>
                            <img className="n_evimg"
                              src="../../img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Office conference room interior design with table and chairs for meetings"
                          className="img-fluid mx-auto d-block"
                          src="../../img/sample_photos/office/restaurant9.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_nextoff" href="#">
                          <i> <img className="n_evimg"
                            src="../../img/right_arrow.png" /></i>
                        </a>
                      </span>

                      <div className="col-12 col-lg-12" align="center">

                        <h3 className="text-center">
                          Office | White Modular Office Interiors
                        </h3>
                      </div>
                      <div className="col-lg-8 offset-lg-2">

                      </div>
                    </li>

                    <li className="row" id="blue" style={{ margin: 'auto' }}>

                      <span className>
                        <a className="buttons_prevoff" href="#">
                          <i>
                            <img className="n_evimg"
                              src="../../img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Modern industrial interior design look office work place with open ceiling, colourful furniture and work stations"
                          className="img-fluid mx-auto d-block"
                          src="../../img/sample_photos/office/restaurant12.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_nextoff" href="#">
                          <i> <img className="n_evimg"
                            src="../../img/right_arrow.png" /></i>
                        </a>
                      </span>

                      <div className="col-12 col-lg-12" align="center">

                        <h3 className="text-center">
                          Office | Premium Waiting Area
                        </h3>
                      </div>
                      <div className="col-lg-8 offset-lg-2">

                      </div>
                    </li>

                    <li className="row" id="blue" style={{ margin: 'auto' }}>

                      <span className>
                        <a className="buttons_prevoff" href="#">
                          <i>
                            <img className="n_evimg"
                              src="../../img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Commercial reception and waiting area design for multi-storied work place"
                          className="img-fluid mx-auto d-block"
                          src="../../img/sample_photos/office/restaurant17.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_nextoff" href="#">
                          <i> <img className="n_evimg"
                            src="../../img/right_arrow.png" /></i>
                        </a>
                      </span>

                      <div className="col-12 col-lg-12" align="center">

                        <h3 className="text-center">
                          Office | Traditional And Ethnic Office
                        </h3>
                      </div>
                      <div className="col-lg-8 offset-lg-2">

                      </div>
                    </li>

                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      <div className="servicesPr">
        <div className="col-12 col-lg-12" align="center">

          <h2 className="text-center" style={{ fontSize: '3rem' }}>
            Services
          </h2>
        </div>

        <img src="/img/Services.jpg" style={{ height: '20%', width: '100%', boxShadow: '5px 5px 5px ' }} />
      </div>

      <div className="cover" >
        <div style={{ textAlign: 'center' }}>
          <p>
            <h2 style={{ fontSize: '3rem' }}>Our Brands</h2>
          </p>
        </div>
        <div className="horScroll" ref={brandRef}>
          {Object.keys(images_brand).map((key) => (
            <img style={{ borderRadius: '3rem' }} src={images_brand[key]} />
          ))}
        </div>

        <button className="left" onClick={scrollLeft1}>&lt;&lt;</button>
        <button className="right" onClick={scrollRight1}>&gt;&gt;</button>
      </div>


      <div style={{ background: '#201A1E' }}>
        <br />

        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d17531.719193821427!2d86.97139992015657!3d23.690199301746617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sranisati%20ply%20%26%20hardware!5e0!3m2!1sen!2sin!4v1690038618495!5m2!1sen!2sin" width="70%" height="350" style={{ border: '0', display: 'block', margin: 'auto'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d29228.521747543422!2d86.96807515220941!3d23.691501607915683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sranisati%20ply%20%26%20hardware!5e0!3m2!1sen!2sin!4v1690039378439!5m2!1sen!2sin" width="90%" height="450" style={{ border: '0', display: 'block', margin: 'auto' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        {/* <br /> */}
        <hr />
      </div>

      <Footer />
    </>
  );
}
export default Home;
