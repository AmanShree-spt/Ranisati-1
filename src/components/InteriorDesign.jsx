import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import './css/interior/modalhome.css';
import './css/interior/swiper.min.css';
import './css/interior/animate.css';
import './css/interior/styleimagepage.css';
import classnames from 'classnames';

function InteriorDesign() {


  const setBody = () => {
    document.body.classList.add('modal-open');
  }


  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '10px',
    height: '100%'
  };
  return (
    <>
      <Navbar />

      <div id="sectiontops">
        <h1 className="text-center">
          Spectacular Home Interior Designer Ideas for You!
        </h1>

        <div className="row" id="comp-only">
          <div className="col-md-1"></div>

          <div className="col-md-2 col-sm-4 col-6" align="center">
            <a className="menuofcat " href="https://www.bluemasons.com/interior-designers/home">

              <span className="activecat">
                <img src="/img/home_category.png" />
                <br />
                <p className="text-center">Home</p>
              </span>

            </a>
          </div>

          <div className="col-md-2 col-sm-4 col-6" align="center">
            <a className="menuofcat" href="https://www.bluemasons.com/interior-designers/office">
              <span className=" ">
                <img src="/img/office_category.png" /><br />
                <p className="text-center">Office</p>
              </span>
            </a>
          </div>
          <div className="col-md-2 col-sm-4 col-6" align="center">
            <a className="menuofcat " href="https://www.bluemasons.com/interior-designers/restaurant">
              <span className=" ">
                <img src="/img/restaurant_category.png" /><br />
                <p className="text-center">Restaurant</p>
              </span>
            </a>
          </div>
          <div className="col-md-2 col-sm-4 col-6" align="center">
            <a className="menuofcat" href="https://www.bluemasons.com/interior-designers/showroom">
              <span className=" ">
                <img src="/img/showroom_category.png" /><br />
                <p className="text-center">Showroom</p>
              </span>
            </a>
          </div>
          <div className="col-md-2 col-sm-4 col-6" align="center">
            <a className="menuofcat" href="https://www.bluemasons.com/interior-designers/hotel">
              <span className=" ">
                <img src="/img/hotel_category.png" /><br />
                <p className="text-center">Hotel</p>
              </span>
            </a>
          </div>


          <div className="col-md-1"></div>
        </div>

        <div className="swiper-container" id="mob-only">

          <div className="swiper-wrapper">


            <div className="menuscrow swiper-slide">
              <a className="menuofcat " href="https://www.bluemasons.com/interior-designers/home">

                <span className="activecat">
                  <img src="/img/home_category.png" /><br />
                  <p className>Home</p>
                </span>

              </a>
            </div>

            <div className="menuscrow swiper-slide">
              <a className="menuofcat" href="https://www.bluemasons.com/interior-designers/office">
                <span className>
                  <img src="/img/office_category.png" /><br />
                  <p className>Office</p>
                </span>
              </a>
            </div>

            <div className="menuscrow swiper-slide">
              <a className="menuofcat " href="https://www.bluemasons.com/interior-designers/restaurant">
                <span className>
                  <img src="/img/restaurant_category.png" /><br />
                  <p className>Restaurant</p>
                </span>
              </a>
            </div>

            <div className="menuscrow swiper-slide">
              <a className="menuofcat" href="https://www.bluemasons.com/interior-designers/showroom">
                <span className>
                  <img src="/img/showroom_category.png " /><br />
                  <p>Showroom</p>
                </span>
              </a>
            </div>

            <div className="menuscrow swiper-slide">
              <a className="menuofcat" href="https://www.bluemasons.com/interior-designers/hotel">
                <span className>
                  <img src="/img/hotel_category.png" /><br />
                  <p>Hotel</p>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12" style={{ margin: 'auto' }}>
            <div className="load" style={{ display: 'none', height: '0px' }} ></div>
            <div className id="tainer" align="center" style={{}} >

              <div className='grid-container' style={gridStyle} >


                <div className="grid">
                  <div className="imgholder">
                    <a data-toggle="modal" data-target=".bd-example-modal-lg">
                      <img onClick={setBody} className="zoom img-fluid"
                        src="/img/demo.jpg"
                        alt="Home" width="100%" />
                    </a>
                  </div>
                </div>

                <div className="grid">
                  <div className="imgholder">
                    <a data-toggle="modal" data-target=".bd-example-modal-lg">
                      <img className="zoom img-fluid"
                        src="/img/demo1.jpg"
                        alt="Home" width="100%" />
                    </a>
                  </div>
                </div>


                <div className="grid">
                  <div className="imgholder">
                    <a data-toggle="modal" data-target=".bd-example-modal-lg">
                      <img className="zoom img-fluid"
                        src="/img/demo2.jpg"
                        alt="Home" width="100%" />
                    </a>
                  </div>
                </div>






              </div>

              <div className="modal fade bd-example-modal-lg show" role="dialog" aria-labelledby="myLargeModalLabel"
                tabindex="-1" style={{ display: 'block' }}>
                <div className="modal-dialog modal-lg">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <img className="specialcross" src="/img/cross.png" />
                  </button>
                  <div className="modal-content">


                    <div className="col-12">
                      <div className="image_post">
                        <ul align="center">




                          <li className="row activepostimg" style={{ margin: 'auto' }}>

                            <span className>
                              <a className="buttons_prev" href="#">
                                <i>
                                  <img className="n_evimg"
                                    src="/img/left_arrow.png" />
                                </i>
                              </a>
                            </span>

                            <span className>
                              <img className="img-fluid mx-auto d-block"
                                src="/img/demo.jpg" />
                            </span>

                            <span className>
                              <a className="buttons_next" href="#">
                                <i><img className="n_evimg"
                                  src="/img/right_arrow.png" />
                                </i>
                              </a>
                            </span>

                            <div className="col-12 col-lg-12" align="center">

                              <div align="center" className="slide_image_counter text-center">
                                <a> </a>
                              </div>

                              <h3 className="text-center">
                                Interior |
                                <span>FileName</span>
                              </h3>
                            </div>

                            <div className="col-lg-8 offset-lg-2">
                              <p className="text-center">
                                <span className="more modalsmalltext">
                                  Description of the Image
                                </span>
                              </p>
                            </div>
                          </li>






                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>



      <Footer />
    </>
  );
}
export default InteriorDesign;
