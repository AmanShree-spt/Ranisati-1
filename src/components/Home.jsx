import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import './css/stylehome.css';

function Home() {
  return (
    <>
      <Navbar />
      <div id='sectiontop' style={{}}>
        <div className="text-center newly">
          <h3 className style={{ paddingBottom: '10px !important', fontWeight: '300' }}>
            <div className="typed_wrap">
              <span className="typed"></span>
            </div>
          </h3>
          <h1 style={{ color: '#fff', fontWeight: '300', paddingBottom: '100px' }} className="text-center maintexts">
            Interior Designer &amp; Decorators
          </h1>

        </div>
        <div className="text-center">
          <a className="quote" target="_blank" href="/start-your-project">
            Get Free Quote
          </a>
        </div>

        <a className="text-center downArrow">
          <div className="arrow arrow-first"></div>
          <div className="arrow arrow-second"></div>
          <div className="arrow arrow-third"></div>
        </a>
        <div className="linklink"></div>
      </div>
      <div id="sectionresi" className="first-spacing-home">
        <a target="_blank" href="interior-designers/home" className="text-left">
          <h2>Home <span>Design</span></h2>
        </a>
        <p className="verybig"> Home</p>
        <div className="container-fluid">
          <div className="row no-gutters">

            <div className="col-sm-3 col-6">
              <a className="grid" data-toggle="modal" href="#myModal">
                <img alt="Lavish living room interiors duplex with Italian marble" className="imggrids1"
                  src="../../img/sample_photos/home/restaurant14.jpg"
                  style={{ width: '100%' }}
                />
              </a>
            </div>
            <div className="col-sm-3 col-6">
              <a className="grid" data-toggle="modal" href="#myModal">
                <img alt="Modern bedroom interiors with wardrobe, bed, headboard, side tables and false ceiling. Blue colour interior design ideal for bachelors"
                  className="imggrids1"
                  src="../../img/sample_photos/hotel/restaurant17.jpg"

                  width="100%;" />
              </a>
            </div>
            <div className="col-sm-3 col-6">
              <a className="grid" data-toggle="modal" href="#myModal">
                <img alt="Modern living area cum private lounge interior design with sofa, exclusive chairs and decoratives"
                  className="imggrids1"
                  src="../../img/sample_photos/hotel/restaurant3.jpg"
                  width="100%;" />
              </a>
            </div>
            <div className="col-sm-3 col-6">
              <a className="grid" data-toggle="modal" href="#myModal">
                <img alt="Bar and living for modern indian home interiors with natural light and window seating"
                  className="imggrids1" src="/img/sample_photos/home/restaurant6.jpg"
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
                              src="/img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Lavish living room interiors duplex with Italian marble"
                          className="img-fluid mx-auto d-block"
                          src="Orignal/1-Modern-Bedroom.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_next" href="javascript:void(0)">
                          <i> <img className="n_evimg"
                            src="https://www.bluemasons.com/assets/img/right_arrow.png" /></i>
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
                              src="https://www.bluemasons.com/assets/img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Modern bedroom interiors with wardrobe, bed, headboard, side tables and false ceiling. Blue colour interior design ideal for bachelors"
                          className="img-fluid mx-auto d-block"
                          src="https://www.bluemasons.com/assets/img/home/Orignal/2-Premium-Bedroom.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_next" href="javascript:void(0)">
                          <i> <img className="n_evimg"
                            src="https://www.bluemasons.com/assets/img/right_arrow.png" /></i>
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
                              src="https://www.bluemasons.com/assets/img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Modern living area cum private lounge interior design with sofa, exclusive chairs and decoratives"
                          className="img-fluid mx-auto d-block"
                          src="https://www.bluemasons.com/assets/img/home/Orignal/3-European-Living-Room.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_next" href="javascript:void(0)">
                          <i> <img className="n_evimg"
                            src="https://www.bluemasons.com/assets/img/right_arrow.png" /></i>
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
                              src="https://www.bluemasons.com/assets/img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Bar and living for modern indian home interiors with natural light and window seating"
                          className="img-fluid mx-auto d-block"
                          src="https://www.bluemasons.com/assets/img/home/Orignal/4-Kids-Room.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_next" href="javascript:void(0)">
                          <i> <img className="n_evimg"
                            src="https://www.bluemasons.com/assets/img/right_arrow.png" /></i>
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
                              src="https://www.bluemasons.com/assets/img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Bungalow terrace design with landscaping, grass, wood walls and swing.
                             Perfect for villa, cottage exterior design" className="img-fluid mx-auto d-block"
                          src="https://www.bluemasons.com/assets/img/home/Orignal/5-Luxurious-Bedroom.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_next" href="javascript:void(0)">
                          <i> <img className="n_evimg"
                            src="https://www.bluemasons.com/assets/img/right_arrow.png" /></i>
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
                              src="https://www.bluemasons.com/assets/img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Elegant home design with sofa, centre table, leather chairs and windows"
                          className="img-fluid mx-auto d-block"
                          src="https://www.bluemasons.com/assets/img/home/Orignal/6-Pink-Kids-Room.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_next" href="javascript:void(0)">
                          <i> <img className="n_evimg"
                            src="https://www.bluemasons.com/assets/img/right_arrow.png" /></i>
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
          <a target="_blank" href="https://www.bluemasons.com/interior-designers/home">
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
        <a href="interior-designers/hotel">
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
                  src="https://www.bluemasons.com/assets/img/hotel/Thumbnail/1-Hotel-Reception-Area.jpg"
                  width="100%;" />
              </a>
            </div>
            <div className="col-sm-3 col-6">
              <a className="hotlgrid" data-toggle="modal" href="#modalhotl">
                <img alt="4 star hotel reception and lobby interior design" className="imggrids1"
                  src="https://www.bluemasons.com/assets/img/hotel/Thumbnail/2-Hotel-Bed-and-Side-table.jpg"
                  width="100%;" />
              </a>
            </div>
            <div className="col-sm-3 col-6">
              <a className="hotlgrid" data-toggle="modal" href="#modalhotl">
                <img alt="Suite hotel room interior design with flooring, furniture and false ceiling"
                  className="imggrids1"
                  src="https://www.bluemasons.com/assets/img/hotel/Thumbnail/3-Premium-Delux-Room.jpg"
                  width="100%;" />
              </a>
            </div>
            <div className="col-sm-3 col-6">
              <a className="hotlgrid" data-toggle="modal" href="#modalhotl">
                <img alt="Five star hotel spa interiors with separate massage and jacuzzi room"
                  className="imggrids1"
                  src="https://www.bluemasons.com/assets/img/hotel/Thumbnail/4-Hotel-Waiting-Area.jpg"
                  width="100%;" />
              </a>
            </div>
            <div className="col-sm-6 col-12">
              <a className="hotlgrid" data-toggle="modal" href="#modalhotl">
                <img alt="Luxury hotel restaurant interior with designer ceiling and seating" className="imggrids1"
                  src="https://www.bluemasons.com/assets/img/hotel/Thumbnail/5-Premium-Suite-Room-Interiors.jpg"
                  width="100%;" />
              </a>
            </div>
            <div className="col-sm-6 col-12">
              <a className="hotlgrid" data-toggle="modal" href="#modalhotl">
                <img alt="Hotel lobby with high ceiling, reception and waiting area" className="imggrids1"
                  src="https://www.bluemasons.com/assets/img/hotel/Thumbnail/6-Botique-Hotel-Interiors.jpg"
                  width="100%;" />
              </a>
            </div>
          </div>
        </div>
        <div className="modal fade" id="modalhotl" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"
          tabindex="-1">
          <div className="modal-dialog modal-lg">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <img className="specialcross" src="/img/cross.png" />
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
                              src="/img/left_arrow.png" />
                          </i>
                        </a>
                      </span>
                      <span className align="center">
                        <img alt="Semi luxury 3 star hotel  guest house room interior design"
                          className="img-fluid mx-auto d-block"
                          src="https://www.bluemasons.com/assets/img/hotel/Orignal/1-Hotel-Reception-Area.jpg" />
                      </span>
                      <span className>
                        <a className="buttons_nexthotl" href="#">
                          <i> <img className="n_evimg"
                            src="/img/right_arrow.png" /></i>
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
                              src="/img/left_arrow.png" />
                          </i>
                        </a>
                      </span>
                      <span className align="center">
                        <img alt="4 star hotel reception and lobby interior design"
                          className="img-fluid mx-auto d-block"
                          src="https://www.bluemasons.com/assets/img/hotel/Orignal/2-Hotel-Bed-and-Side-table.jpg" />
                      </span>
                      <span className>
                        <a className="buttons_nexthotl" href="#">
                          <i> <img className="n_evimg"
                            src="https://www.bluemasons.com/assets/img/right_arrow.png" /></i>
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
                              src="https://www.bluemasons.com/assets/img/left_arrow.png" />
                          </i>
                        </a>
                      </span>
                      <span className align="center">
                        <img alt="Suite hotel room interior design with flooring, furniture and false ceiling"
                          className="img-fluid mx-auto d-block"
                          src="https://www.bluemasons.com/assets/img/hotel/Thumbnail/3-Premium-Delux-Room.jpg" />
                      </span>
                      <span className>
                        <a className="buttons_nexthotl" href="#">
                          <i> <img className="n_evimg"
                            src="https://www.bluemasons.com/assets/img/right_arrow.png" /></i>
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
                              src="https://www.bluemasons.com/assets/img/left_arrow.png" />
                          </i>
                        </a>
                      </span>
                      <span className align="center">
                        <img alt="Five star hotel spa interiors with separate massage and jacuzzi room"
                          className="img-fluid mx-auto d-block"
                          src="https://www.bluemasons.com/assets/img/hotel/Orignal/4-Hotel-Waiting-Area.jpg" />
                      </span>
                      <span className>
                        <a className="buttons_nexthotl" href="#">
                          <i> <img className="n_evimg"
                            src="https://www.bluemasons.com/assets/img/right_arrow.png" /></i>
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
                              src="https://www.bluemasons.com/assets/img/left_arrow.png" />
                          </i>
                        </a>
                      </span>
                      <span className align="center">
                        <img alt="Luxury hotel restaurant interior with designer ceiling and seating"
                          className="img-fluid mx-auto d-block"
                          src="https://www.bluemasons.com/assets/img/hotel/Orignal/5-Premium-Suite-Room-Interiors.jpg" />
                      </span>
                      <span className>
                        <a className="buttons_nexthotl" href="#">
                          <i> <img className="n_evimg"
                            src="https://www.bluemasons.com/assets/img/right_arrow.png" /></i>
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
                              src="https://www.bluemasons.com/assets/img/left_arrow.png" />
                          </i>
                        </a>
                      </span>
                      <span className align="center">
                        <img alt="Hotel lobby with high ceiling, reception and waiting area"
                          className="img-fluid mx-auto d-block"
                          src="https://www.bluemasons.com/assets/img/hotel/Orignal/6-Botique-Hotel-Interiors.jpg" />
                      </span>
                      <span className>
                        <a className="buttons_nexthotl" href="#">
                          <i> <img className="n_evimg"
                            src="https://www.bluemasons.com/assets/img/right_arrow.png" /></i>
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
          <a target="_blank" href="https://www.bluemasons.com/interior-designers/hotel">
            Explore Our Designs
            <i style={{ marginTop: '1.5px', marginLeft: '4px' }} className="fa fa-caret-right"></i>
          </a>
        </h2>
      </div>


      <div className="container-fluid" id="big__quote">
        <div className="row">
          <div className="col-12 text-center">
            <img className="img-fluid mx-auto d-block icoconimg"
              src="https://www.bluemasons.com/assets/img/hotelmenu.png" />
            <h2 className="super__big"><b><a className="linkoflink" target="_blank"
              href="https://www.bluemasons.com/start-your-project">HOTEL ROOMS</a></b> INHABIT <br /> A
              SEPARATE MORAL UNIVERSE.
            </h2>

          </div>
        </div>
      </div>



      <div id="sectionresi">
        <a href="https://www.bluemasons.com/interior-designers/restaurant">
          <h2>Restaurant <span>Design</span></h2>
        </a>
        <p className="verybigthree"> Restaurant </p>

        <div className="container-fluid">
          <div className="row no-gutters">

            <div className="col-sm-3 col-6">
              <a className="resgrid" data-toggle="modal" href="#modalres">
                <img alt="Industrial interior design for restaurant cum bar with open ceiling and hanging lights"
                  className="imggrids1"
                  src="https://www.bluemasons.com/assets/img/restaurant/Thumbnail/1-Conveyor-Belt-Restaurant.jpg"
                  width="100%;" />
              </a>
            </div>
            <div className="col-sm-3 col-6">
              <a className="resgrid" data-toggle="modal" href="#modalres">
                <img alt="Theme Cafe interior design with customised furniture" className="imggrids1"
                  src="https://www.bluemasons.com/assets/img/restaurant/Thumbnail/2-Premium-Cafe-Restaurant-Interiors.jpg"
                  width="100%;" />
              </a>
            </div>
            <div className="col-sm-3 col-6">
              <a className="resgrid" data-toggle="modal" href="#modalres">
                <img alt="Multi-storied restaurant architecture and decor with wall art and modern designs"
                  className="imggrids1"
                  src="https://www.bluemasons.com/assets/img/restaurant/Thumbnail/3-Reception-Waiting-Area-of-Restaurant.jpg"
                  width="100%;" />
              </a>
            </div>
            <div className="col-sm-3 col-6">
              <a className="resgrid" data-toggle="modal" href="#modalres">
                <img alt="Cafe interior with wall art and furniture with open ceiling for modern industrial look"
                  className="imggrids1"
                  src="https://www.bluemasons.com/assets/img/restaurant/Thumbnail/4-Premium-Fine-Dine-Interiors.jpg" />
              </a>
            </div>

            <div className="col-sm-6 col-12">
              <a className="resgrid" data-toggle="modal" href="#modalres">
                <img alt="Night club and disco interiors with bar and dance floor and apt lighting"
                  className="imggrids1"
                  src="https://www.bluemasons.com/assets/img/restaurant/Thumbnail/5-Modern-Restro-Pub-Industrial-Design.jpg"
                  width="100%;" />
              </a>
            </div>
            <div className="col-sm-6 col-12">
              <a className="resgrid" data-toggle="modal" href="#modalres">
                <img alt="Luxury restaurant with high ceiling and beautiful decor" className="imggrids1"
                  src="https://www.bluemasons.com/assets/img/restaurant/Thumbnail/6-Industrial-Design-Interiors-of-Cafe.jpg"
                  width="100%;" />
              </a>
            </div>
          </div>
        </div>

        <div className="modal fade" id="modalres" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"
          tabindex="-1">
          <div className="modal-dialog modal-lg">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <img className="specialcross" src="https://www.bluemasons.com/assets/img/cross.png" />
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
                              src="https://www.bluemasons.com/assets/img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Industrial interior design for restaurant cum bar with open ceiling and hanging lights"
                          className="img-fluid mx-auto d-block"
                          src="https://www.bluemasons.com/assets/img/restaurant/Orignal/1-Conveyor-Belt-Restaurant.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_nextres" href="#">
                          <i> <img className="n_evimg"
                            src="https://www.bluemasons.com/assets/img/right_arrow.png" /></i>
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
                              src="https://www.bluemasons.com/assets/img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Theme Cafe interior design with customised furniture"
                          className="img-fluid mx-auto d-block"
                          src="https://www.bluemasons.com/assets/img/restaurant/Orignal/2-Premium-Cafe-Restaurant-Interiors.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_nextres" href="#">
                          <i> <img className="n_evimg"
                            src="https://www.bluemasons.com/assets/img/right_arrow.png" /></i>
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
                              src="https://www.bluemasons.com/assets/img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Multi-storied restaurant architecture and decor with wall art and modern designs"
                          className="img-fluid mx-auto d-block"
                          src="https://www.bluemasons.com/assets/img/restaurant/Orignal/3-Reception-Waiting-Area-of-Restaurant.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_nextres" href="#">
                          <i> <img className="n_evimg"
                            src="https://www.bluemasons.com/assets/img/right_arrow.png" /></i>
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
                              src="https://www.bluemasons.com/assets/img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Cafe interior with wall art and furniture with open ceiling for modern industrial look"
                          className="img-fluid mx-auto d-block"
                          src="https://www.bluemasons.com/assets/img/restaurant/Orignal/4-Premium-Fine-Dine-Interiors.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_nextres" href="#">
                          <i> <img className="n_evimg"
                            src="https://www.bluemasons.com/assets/img/right_arrow.png" /></i>
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
                              src="https://www.bluemasons.com/assets/img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Night club and disco interiors with bar and dance floor and apt lighting"
                          className="img-fluid mx-auto d-block"
                          src="https://www.bluemasons.com/assets/img/restaurant/Orignal/5-Modern-Restro-Pub-Industrial-Design.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_nextres" href="#">
                          <i> <img className="n_evimg"
                            src="https://www.bluemasons.com/assets/img/right_arrow.png" /></i>
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
                              src="https://www.bluemasons.com/assets/img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Luxury restaurant with high ceiling and beautiful decor"
                          className="img-fluid mx-auto d-block"
                          src="https://www.bluemasons.com/assets/img/restaurant/Orignal/6-Industrial-Design-Interiors-of-Cafe.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_nextres" href="#">
                          <i> <img className="n_evimg"
                            src="https://www.bluemasons.com/assets/img/right_arrow.png" /></i>
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
          <a target="_blank" href="https://www.bluemasons.com/interior-designers/restaurant">
            Explore Our Designs
            <i style={{ marginTop: '1.5px', marginLeft: '4px' }} className="fa fa-caret-right"></i>
          </a>
        </h2>
      </div>


      <div className="container-fluid" id="big__quote">
        <div className="row">
          <div className="col-12 text-center">
            <img className="img-fluid mx-auto d-block icoconimg"
              src="https://www.bluemasons.com/assets/img/restromenu.png" />
            <h2 className="super__big">GOOD FOOD, GOOD PEOPLE,<br /> GOOD <b><a target="_blank" className="linkoflink"
              href="https://www.bluemasons.com/start-your-project">INTERIORS</a></b>, GOOD MEMORIES.
            </h2>

          </div>
        </div>
      </div>






      <div id="sectionresi">
        <a href="https://www.bluemasons.com/interior-designers/office">
          <h2>Office <span>Design</span></h2>
        </a>
        <p className="verybigtwo">
          Office
        </p>
        <div className="container-fluid">
          <div className="row no-gutters">

            <div className="col-sm-3 col-6">
              <a className="ofgrid" data-toggle="modal" href="#officel">
                <img alt="Office cabin with round table, chairs, carpet flooring, blinds and an amazing view"
                  className="imggrids1"
                  src="https://www.bluemasons.com/assets/img/office/Thumbnail/1-White-Modern-Office.jpg"
                  width="100%;" />
              </a>
            </div>
            <div className="col-sm-3 col-6">
              <a className="ofgrid" data-toggle="modal" href="#officel">
                <img alt="Premium office reception and waiting area interior with use of Italian marble"
                  className="imggrids1"
                  src="https://www.bluemasons.com/assets/img/office/Thumbnail/2-Premium-Reception-Desk.jpg"
                  width="100%;" />
              </a>
            </div>
            <div className="col-sm-3 col-6">
              <a className="ofgrid" data-toggle="modal" href="#officel">
                <img alt="Corner office interior design with amazing view perfect for the company CEO"
                  className="imggrids1"
                  src="https://www.bluemasons.com/assets/img/office/Thumbnail/3-Elegant-Executive-Office.jpg"
                  width="100%;" />
              </a>
            </div>
            <div className="col-sm-3 col-6">
              <a className="ofgrid" data-toggle="modal" href="#officel">
                <img alt="Office conference room interior design with table and chairs for meetings"
                  className="imggrids1"
                  src="https://www.bluemasons.com/assets/img/office/Thumbnail/4-Modular-Office-Interiors.jpg"
                  width="100%;" />
              </a>
            </div>

            <div className="col-sm-6 col-12">
              <a className="ofgrid" data-toggle="modal" href="#officel">
                <img alt="Modern industrial interior design look office work place with open ceiling, colourful furniture and work stations"
                  className="imggrids1"
                  src="https://www.bluemasons.com/assets/img/office/Thumbnail/5-Waiting-Area-Interiors.jpg"
                  width="100%;" />
              </a>
            </div>
            <div className="col-sm-6 col-12">
              <a className="ofgrid" data-toggle="modal" href="#officel">
                <img alt="Commercial reception and waiting area design for multi-storied work place"
                  className="imggrids1"
                  src="https://www.bluemasons.com/assets/img/office/Thumbnail/6-Ethnic-Traditional-Office.jpg"
                  width="100%;" />
              </a>
            </div>
          </div>
        </div>

        <div className="modal fade" id="officel" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"
          tabindex="-1">
          <div className="modal-dialog modal-lg">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <img className="specialcross" src="https://www.bluemasons.com/assets/img/cross.png" />
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
                              src="https://www.bluemasons.com/assets/img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Office cabin with round table, chairs, carpet flooring, blinds and an amazing view"
                          className="img-fluid mx-auto d-block"
                          src="https://www.bluemasons.com/assets/img/office/Orignal/1-White-Modern-Office.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_nextoff" href="#">
                          <i> <img className="n_evimg"
                            src="https://www.bluemasons.com/assets/img/right_arrow.png" /></i>
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
                              src="https://www.bluemasons.com/assets/img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Premium office reception and waiting area interior with use of Italian marble"
                          className="img-fluid mx-auto d-block"
                          src="https://www.bluemasons.com/assets/img/office/Orignal/2-Premium-Reception-Desk.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_nextoff" href="#">
                          <i> <img className="n_evimg"
                            src="https://www.bluemasons.com/assets/img/right_arrow.png" /></i>
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
                              src="https://www.bluemasons.com/assets/img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Corner office interior design with amazing view perfect for the company CEO"
                          className="img-fluid mx-auto d-block"
                          src="https://www.bluemasons.com/assets/img/office/Orignal/3-Elegant-Executive-Office.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_nextoff" href="#">
                          <i> <img className="n_evimg"
                            src="https://www.bluemasons.com/assets/img/right_arrow.png" /></i>
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
                              src="https://www.bluemasons.com/assets/img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Office conference room interior design with table and chairs for meetings"
                          className="img-fluid mx-auto d-block"
                          src="https://www.bluemasons.com/assets/img/office/Orignal/4-Modular-Office-Interiors.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_nextoff" href="#">
                          <i> <img className="n_evimg"
                            src="https://www.bluemasons.com/assets/img/right_arrow.png" /></i>
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
                              src="https://www.bluemasons.com/assets/img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Modern industrial interior design look office work place with open ceiling, colourful furniture and work stations"
                          className="img-fluid mx-auto d-block"
                          src="https://www.bluemasons.com/assets/img/office/Orignal/5-Waiting-Area-Interiors.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_nextoff" href="#">
                          <i> <img className="n_evimg"
                            src="https://www.bluemasons.com/assets/img/right_arrow.png" /></i>
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
                              src="https://www.bluemasons.com/assets/img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Commercial reception and waiting area design for multi-storied work place"
                          className="img-fluid mx-auto d-block"
                          src="https://www.bluemasons.com/assets/img/office/Orignal/6-Ethnic-Traditional-Office.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_nextoff" href="#">
                          <i> <img className="n_evimg"
                            src="https://www.bluemasons.com/assets/img/right_arrow.png" /></i>
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


      <div className="container last" id="lastText">
        <h2 className="text-center">
          <a target="_blank" href="https://www.bluemasons.com/interior-designers/office">
            Explore Our Designs
            <i style={{ marginTop: '1.5px', marginLeft: '4px' }} className="fa fa-caret-right"></i>
          </a>
        </h2>
      </div>



      <div className="container-fluid" id="big__quote">
        <div className="row">
          <div className="col-12 text-center">
            <img className="img-fluid mx-auto d-block icoconimg"
              src="https://www.bluemasons.com/assets/img/officemenu.png" />
            <h2 className="super__big">OFFICE [aw-fis] noun:<br /> A place to <b><a target="_blank" className="linkoflink"
              href="https://www.bluemasons.com/start-your-project">relax</a></b> after a<br /> stressful
              night at home.
            </h2>
          </div>
        </div>
      </div>






      <div id="sectionresi">
        <a target="_blank" href="https://www.bluemasons.com/interior-designers/showroom">
          <h2>Showroom <span>Design</span></h2>
        </a>
        <p className="verybigfour"> Showroom</p>

        <div className="container-fluid">
          <div className="row no-gutters">

            <div className="col-sm-3 col-6">
              <a className="shogrid" data-toggle="modal" href="#modalsho">
                <img alt="Saree shop and showroom interior design with designer ceiling and exclusive retail display"
                  className="imggrids1"
                  src="https://www.bluemasons.com/assets/img/showroom/Thumbnail/1-Ethnic-Style-Showroom.jpeg"
                  width="100%;" />
              </a>
            </div>
            <div className="col-sm-3 col-6">
              <a className="shogrid" data-toggle="modal" href="#modalsho">
                <img alt="Jewellery showroom and shop interior design with elegant display and hanging chandelier"
                  className="imggrids1"
                  src="https://www.bluemasons.com/assets/img/showroom/Thumbnail/2-Moroccon-Theme-Shwroom.jpg"
                  width="100%;" />
              </a>
            </div>
            <div className="col-sm-3 col-6">
              <a className="shogrid" data-toggle="modal" href="#modalsho">
                <img alt="Designer boutique interiors with special display for lehengas, suits, and other merchandise"
                  className="imggrids1"
                  src="https://www.bluemasons.com/assets/img/showroom/Thumbnail/3-Premium-Showroom-interiors.jpg"
                  width="100%;" />
              </a>
            </div>
            <div className="col-sm-3 col-6">
              <a className="shogrid" data-toggle="modal" href="#modalsho">
                <img alt="Modern car showroom with minimalistic interior designing" className="imggrids1"
                  src="https://www.bluemasons.com/assets/img/showroom/Thumbnail/4-Modern-Showroom.jpg"
                  width="100%;" />
              </a>
            </div>

            <div className="col-sm-6 col-12">
              <a className="shogrid" data-toggle="modal" href="#modalsho">
                <img alt="Lavish luxury jewellery shop with Italian marble and fancy ceiling" className="imggrids1"
                  src="https://www.bluemasons.com/assets/img/showroom/Thumbnail/5-Spacious-Sheleves-Interiors.jpg"
                  width="100%;" />
              </a>
            </div>
            <div className="col-sm-6 col-12">
              <a className="shogrid" data-toggle="modal" href="#modalsho">
                <img alt="Modern boutique interiors with designer floor inlay and fancy display"
                  className="imggrids1"
                  src="https://www.bluemasons.com/assets/img/showroom/Thumbnail/6-classNameic-Showroom-Interiors.jpeg"
                  width="100%;" />
              </a>
            </div>
          </div>
        </div>

        <div className="modal fade" id="modalsho" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"
          tabindex="-1">
          <div className="modal-dialog modal-lg">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <img className="specialcross" src="https://www.bluemasons.com/assets/img/cross.png" />
            </button>
            <div className="modal-content">

              <div className="col-12">
                <div className="image_post_sho">
                  <ul className align="center">

                    <li className="row" id="blue" style={{ margin: 'auto' }}>

                      <span className>
                        <a className="buttons_prevsho" href="#">
                          <i>
                            <img className="n_evimg"
                              src="https://www.bluemasons.com/assets/img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Saree shop and showroom interior design with designer 
                            ceiling and exclusive retail display" className="img-fluid mx-auto d-block"
                          src="https://www.bluemasons.com/assets/img/showroom/Original/1-Ethnic-Style-Showroom.jpeg" />
                      </span>

                      <span className>
                        <a className="buttons_nextsho" href="#">
                          <i> <img className="n_evimg"
                            src="https://www.bluemasons.com/assets/img/right_arrow.png" /></i>
                        </a>
                      </span>

                      <div className="col-12 col-lg-12" align="center">

                        <h3 className="text-center">
                          Showroom | Ethnic Style Showroom
                        </h3>
                      </div>
                      <div className="col-lg-8 offset-lg-2">

                      </div>
                    </li>

                    <li className="row" id="blue" style={{ margin: 'auto' }}>

                      <span className>
                        <a className="buttons_prevsho" href="#">
                          <i>
                            <img className="n_evimg"
                              src="https://www.bluemasons.com/assets/img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Jewellery showroom and shop interior design with elegant display and hanging chandelier"
                          className="img-fluid mx-auto d-block"
                          src="https://www.bluemasons.com/assets/img/showroom/Original/2-Moroccon-Theme-Shwroom.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_nextsho" href="#">
                          <i> <img className="n_evimg"
                            src="https://www.bluemasons.com/assets/img/right_arrow.png" /></i>
                        </a>
                      </span>

                      <div className="col-12 col-lg-12" align="center">

                        <h3 className="text-center">
                          Showroom | Moroccon Theme Showroom
                        </h3>
                      </div>
                      <div className="col-lg-8 offset-lg-2">

                      </div>
                    </li>

                    <li className="row" id="blue" style={{ margin: 'auto' }}>

                      <span className>
                        <a className="buttons_prevsho" href="#">
                          <i>
                            <img className="n_evimg"
                              src="https://www.bluemasons.com/assets/img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Designer boutique interiors with special display for lehengas, suits, and other merchandise"
                          className="img-fluid mx-auto d-block"
                          src="https://www.bluemasons.com/assets/img/showroom/Original/3-Premium-Showroom-interiors.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_nextsho" href="#">
                          <i> <img className="n_evimg"
                            src="https://www.bluemasons.com/assets/img/right_arrow.png" /></i>
                        </a>
                      </span>

                      <div className="col-12 col-lg-12" align="center">

                        <h3 className="text-center">
                          Showroom | Premium Showroom Interiors
                        </h3>
                      </div>
                      <div className="col-lg-8 offset-lg-2">

                      </div>
                    </li>

                    <li className="row" id="blue" style={{ margin: 'auto' }}>

                      <span className>
                        <a className="buttons_prevsho" href="#">
                          <i>
                            <img className="n_evimg"
                              src="https://www.bluemasons.com/assets/img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Modern car showroom with minimalistic interior designing"
                          className="img-fluid mx-auto d-block"
                          src="https://www.bluemasons.com/assets/img/showroom/Original/4-Modern-Showroom.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_nextsho" href="#">
                          <i> <img className="n_evimg"
                            src="https://www.bluemasons.com/assets/img/right_arrow.png" /></i>
                        </a>
                      </span>

                      <div className="col-12 col-lg-12" align="center">

                        <h3 className="text-center">
                          Showroom | Modern Apparel Showroom Interiors
                        </h3>
                      </div>
                      <div className="col-lg-8 offset-lg-2">

                      </div>
                    </li>

                    <li className="row" id="blue" style={{ margin: 'auto' }}>

                      <span className>
                        <a className="buttons_prevsho" href="#">
                          <i>
                            <img className="n_evimg"
                              src="https://www.bluemasons.com/assets/img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Lavish luxury jewellery shop with Italian marble and fancy ceiling"
                          className="img-fluid mx-auto d-block"
                          src="https://www.bluemasons.com/assets/img/showroom/Original/5-Spacious-Sheleves-Interiors.jpg" />
                      </span>

                      <span className>
                        <a className="buttons_nextsho" href="#">
                          <i> <img className="n_evimg"
                            src="https://www.bluemasons.com/assets/img/right_arrow.png" /></i>
                        </a>
                      </span>

                      <div className="col-12 col-lg-12" align="center">

                        <h3 className="text-center">
                          Showroom | Premium Boutique Display Area
                        </h3>
                      </div>
                      <div className="col-lg-8 offset-lg-2">

                      </div>
                    </li>

                    <li className="row" id="blue" style={{ margin: 'auto' }}>

                      <span className>
                        <a className="buttons_prevsho" href="#">
                          <i>
                            <img className="n_evimg"
                              src="https://www.bluemasons.com/assets/img/left_arrow.png" />
                          </i>
                        </a>
                      </span>

                      <span className align="center">
                        <img alt="Modern boutique interiors with designer floor inlay and fancy display"
                          className="img-fluid mx-auto d-block"
                          src="https://www.bluemasons.com/assets/img/showroom/Original/6-classNameic-Showroom-Interiors.jpeg" />
                      </span>

                      <span className>
                        <a className="buttons_nextsho" href="#">
                          <i> <img className="n_evimg"
                            src="https://www.bluemasons.com/assets/img/right_arrow.png" /></i>
                        </a>
                      </span>

                      <div className="col-12 col-lg-12" align="center">

                        <h3 className="text-center">
                          Showroom | Traditional Apparel Showroom
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
          <a target="_blank" href="https://www.bluemasons.com/interior-designers/showroom>">
            Explore Our Designs
            <i style={{ marginTop: '1.5px', marginLeft: '4px' }} className="fa fa-caret-right"></i>
          </a>
        </h2>
      </div>


      <div className="container-fluid" id="big__quote">
        <div className="row">
          <div className="col-12 text-center">
            <img className="img-fluid mx-auto d-block icoconimg"
              src="https://www.bluemasons.com/assets/img/showroommenu.png" />
            <h2 className="super__big">THE <b><a target="_blank" className="linkoflink"
              href="https://www.bluemasons.com/start-your-project">CUSTOMER</a></b> IS KING/QUEEN.<br />
              WHY DO WE FORGET THAT?
            </h2>

          </div>
        </div>
      </div>



      <Footer />
    </>
  );
}
export default Home;
