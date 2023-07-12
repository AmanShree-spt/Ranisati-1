import React, { useRef, useState, useEffect } from 'react';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import './css/contact/StartProject.css';
function StartProject() {

  const myDivRef = useRef(null);
  const myDivRef2 = useRef(null);

  const scrollDown = () => {
    myDivRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  /*  const scrollDown2 = () => {
      myDivRef2.current.scrollIntoView({ behavior: 'smooth' });
    }
    const scrollDown3 = () => {
      myDivRef3.current.scrollIntoView({ behavior: 'smooth' });
    }
    const scrollDown4 = () => {
      myDivRef4.current.scrollIntoView({ behavior: 'smooth' });
    }
    const scrollDown5 = () => {
      myDivRef5.current.scrollIntoView({ behavior: 'smooth' });
    }
    const scrollDown6 = () => {
      myDivRef6.current.scrollIntoView({ behavior: 'smooth' });
    }
    const scrollDown7 = () => {
      myDivRef7.current.scrollIntoView({ behavior: 'smooth' });
    }
  */







  return (
    <>
      <Navbar />



      <div id="sectionaccess">
        <div className="starttext">
          <h1 className="text-center">Let's make something great together</h1>
        </div>
        <div className="row">
          <div className="col-lg-6 offset-3 text-center startsection">
            <a type='button' onClick={scrollDown} className="firstSecNext" style={{ cursor: 'pointer' }}>Get Started</a>
          </div>
        </div>
      </div>

      <div className="padding-0">
        <div id="mainframe">

          <div className="progress fixed-top ul">
            <div className="progress-bar mybar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
          </div>


          <form method="post" className="form" id="form" action="https://www.bluemasons.com/start-your-project">
            <input type="hidden" name="_token" value="7x7QaSkv06hR80tzWvi0sP2E06FxOhzcW9u533ZE" />
            <div id="section5" ref={myDivRef}>
              <h2 className="text-center">Help us know your design style better</h2>
              <div className="row no-gutters">


                <div className="col-lg-12 col-md-12 col-12">

                  <div className="container">
                    <div className="row">
                      <div className="col-2">

                        <div className="pull-right fivethprogress nextme tabview notmobile stop dislikess" style={{ marginTop: '100%' }}>
                          <i style={{ marginLeft: '-150px' }} className="fa fa-thumbs-down fa-5x"></i> <br />
                          <span style={{ marginLeft: '-148px', fontWeight: '500', fontSize: '20px' }}>Dislike</span>
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-12 col-sm-12 col-12" align="center">

                        <div className="menu_card">
                          <div align="center" className="number text-center">
                            <a style={{ color: '#616161' }} className="MyButtons"></a>
                          </div>
                          <ul id="allimg" className="sdf" align="center">
                            {
                              <li>
                                <img name="Get Free Quote Image One" description="Get Free Quote Image One" src="https://www.bluemasons.com/assets/freequote/1.jpeg" />
                              </li>
                            }
                          </ul>
                          <div align="center" className="skipable notmobile">
                            <p className="text-center">I've seen enough</p>
                          </div>
                        </div>

                      </div>
                      <div className="col-2">

                        <div className="pull-left fivethprogress clickme tabview notmobile  likess" style={{ marginTop: '100%' }}>
                          <i style={{ marginLeft: '90px' }} className="fa fa-thumbs-up fa-5x"></i>
                          <br />
                          <span style={{ marginLeft: '97px', fontWeight: '500', fontSize: '20px' }}>Like</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container">

                    <div className="row notcomp">
                      <div className="col-12">
                        <div align="center" className="skipable">
                          <a className="text-center">I've seen enough</a>
                        </div>
                      </div>
                      <div className="col-12" style={{ marginTop: '-20px' }}>
                        <div className="pull-left fivethprogress nextme  dislikess">
                          <i style={{ paddingLeft: '90px' }} className="fa fa-thumbs-down fa-3x"></i><br />
                          <span style={{ paddingLeft: '80px' }}>Dislike</span>
                        </div>
                        <div className="pull-right fivethprogress clickme likess">
                          <i style={{ marginLeft: '-130px' }} className="fa fa-thumbs-up fa-3x"></i>
                          <br />
                          <span style={{ marginLeft: '-130px' }}>Like</span>
                        </div >
                      </div >
                    </div >

                    <div className="row">
                      <div className="col-12 text-center" id="resultdiv">

                        <input name="getimages" id="imgnames" type="hidden" />
                        <input name="getdesc" id="imgdesc" type="hidden" />

                      </div>
                      <div className="col-12 text-center" id="dislikediv">

                        <input name="getdislikeimages" id="dislkeimg" type="hidden" />
                        <input name="getdisdesc" id="imgdisdesc" type="hidden" />

                      </div>
                    </div>
                  </div >
                </div >
              </div >
            </div >

            <div id="section1" ref={myDivRef2} className="padding-2">

              <h2 className="text-center">I am looking for an</h2>

              <div className="row justify-content-center" align="center">
                <div className="col-lg-4 offset-lg-2 col-md-5 offset-md-0 col-sm-5 col-8">
                  <a className="sec2 firstprogress">
                    <input className="check-with-label" id="designer" type="radio" name="firstradio" value="Interior Designer" required />
                    <label className="myradio" for="designer">
                      <p>Interior Designer</p>
                    </label>
                  </a>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-5 col-8">
                  <a className="sec2 firstprogress">
                    <input className="check-with-label" type="radio" id="architect" name="firstradio" value="Architect" required />
                    <label className="myradio" for="architect">
                      <p>Architect</p>
                    </label>
                  </a>
                </div>
                <div className="col-2 notmobile"></div>
              </div>

            </div>


            <div className="container" id="section2">

              <h2 className="text-center">The designer would work on my</h2>

              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                  <a className="sec3 secprogress">
                    <input className="check-with-label" type="radio" id="home" name="sectradio" value="Home" disabled />
                    <label className="myradio" for="home">
                      <p>Home</p>
                    </label>
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                  <a className="sec3 secprogress">
                    <input className="check-with-label" type="radio" id="office" name="sectradio" value="Office" disabled />
                    <label className="myradio" for="office">
                      <p>Office</p>
                    </label>
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                  <a className="sec3 secprogress">
                    <input className="check-with-label" type="radio" id="hotel" name="sectradio" value="Hotel" disabled required />
                    <label className="myradio" for="hotel">
                      <p>Hotel</p>
                    </label>
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                  <a className="sec3 secprogress">
                    <input className="check-with-label" type="radio" id="showroom" name="sectradio" value="Showroom" disabled required />
                    <label className="myradio" for="showroom">
                      <p>Showroom</p>
                    </label>
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                  <a className="sec3 secprogress">
                    <input className="check-with-label" type="radio" id="restaurant" name="sectradio" value="Restaurant" disabled required />
                    <label className="myradio" for="restaurant">
                      <p>Restaurant</p>
                    </label>
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                  <a className="sec3 secprogress">
                    <input className="check-with-label" type="radio" id="shop" name="sectradio" value="Shop" disabled required />
                    <label className="myradio" for="shop">
                      <p>Shop</p>
                    </label>
                  </a>
                </div>
              </div>

            </div>


            <div className="container" id="section3">

              <h2 className="text-center">My project area is</h2>

              <div className="row justify-content-center" align="center">
                <div className="col-lg-4 offset-lg-2 col-md-5 offset-md-0 col-sm-6 col-10">
                  <a className="sec4 thirdprogress">
                    <input className="check-with-label" type="radio" id="500sqft" name="thirdtradio" value="500 sq ft" disabled required />
                    <label className="myradio" for="500sqft">
                      <p>500 - 1000 Sqft</p>
                    </label>
                  </a>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-6 col-10">
                  <a className="sec4 thirdprogress">
                    <input className="check-with-label" type="radio" id="1000sqft" name="thirdtradio" value="1500-1000 sq ft" disabled required />
                    <label className="myradio" for="1000sqft">
                      <p>1000 - 1500 Sqft</p>
                    </label>
                  </a>
                </div>
                <div className="col-2 notmobile"></div>

                <div className="col-lg-4 offset-lg-2 col-md-5 offset-md-0 col-sm-6 col-10">
                  <a className="sec4 thirdprogress">
                    <input className="check-with-label" type="radio" id="3000sqft" name="thirdtradio" value="1000 - 3000 sq ft" disabled required />
                    <label className="myradio" for="3000sqft">
                      <p>1500 - 2000 Sqft</p>
                    </label>
                  </a>
                </div>
                <div className="col-lg-4 offset-lg-0 col-md-5 col-sm-6 col-10">
                  <a className="sec4 thirdprogress">
                    <input className="check-with-label" type="radio" id="more3000sqft" name="thirdtradio" value="More than 3000 sq ft" disabled required />
                    <label className="myradio" for="more3000sqft">
                      <p>More than 2000 Sqft</p>
                    </label>
                  </a>
                </div>
                <div className="col-2 notmobile"></div>
              </div>

            </div>


            <div className="container" id="section4">

              <h2 className="text-center">I am willing to spend</h2>

              <div className="row justify-content-center" align="center">
                <div className="col-lg-4 offset-lg-2 col-md-5 offset-md-0 col-sm-6 col-10">
                  <a className="sec5 fourthprogress">
                    <input className="check-with-label" type="radio" id="lacs" name="fourthradio" value="Upto 10 lacs" disabled required />
                    <label className="myradio" for="lacs">
                      <p>Upto Rs 15 lakhs</p>
                    </label>
                  </a>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-6 col-10">
                  <a className="sec5 fourthprogress">
                    <input className="check-with-label" type="radio" id="10lacs" name="fourthradio" value="10-25 lacs" disabled required />
                    <label className="myradio" for="10lacs">
                      <p>15 lakhs - 30 lakhs</p>
                    </label>
                  </a>
                </div>
                <div className="col-2 notmobile"></div>
                <div className="col-lg-4 offset-lg-2 col-md-5 offset-md-0 col-sm-6 col-10">
                  <a className="sec5 fourthprogress">
                    <input className="check-with-label" type="radio" id="25lacs" name="fourthradio" value="25-50 lacs" disabled required />
                    <label className="myradio" for="25lacs">
                      <p>30 lakhs - 50 lakhs</p>
                    </label>
                  </a>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-6 col-10">
                  <a className="sec5 fourthprogress">
                    <input className="check-with-label" type="radio" id="50lacs" name="fourthradio" value="More than 50 lacs" disabled required />
                    <label className="myradio" for="50lacs">
                      <p>More than 50 lakhs</p>
                    </label>
                  </a>
                </div>
                <div className="col-2 notmobile"></div>
              </div>

            </div>

            <div className="clearfix"></div>

            <div className="container" id="section6">
              <h2 className="text-center">Contact me at</h2>
              <div className="row justify-content-center">
                <div className="col-3 mobileview"></div>
                <div className="col-lg-6 col-md-8 col-12">

                  <div className="input-group">
                    <span className="input-group-addon first">Name </span>
                    <input type="text" className="form-control" id="names" aria-describedby="basic-addon3" value name="name" required />
                  </div><br />

                  <div className="input-group">
                    <span className="input-group-addon secfirst">Mobile </span>
                    <input type="number" className="form-control" id="mobile" aria-describedby="basic-addon3" value name="mobile" minlength="10" required />
                  </div><br />

                  <div className="input-group">
                    <span className="input-group-addon seclast">E-mail ID </span>
                    <input type="email" className="form-control" aria-describedby="basic-addon3" name="email" id="email" value required />
                  </div><br />

                  <div className="input-group">
                    <span className="input-group-addon last">City </span>
                    <input type="text" className="form-control" aria-describedby="basic-addon3" name="city" id="city" value required />
                  </div><br />
                  <div className="input-group">
                    <span className="input-group-addon last">Pincode </span>
                    <input type="text" className="form-control" aria-describedby="basic-addon3" name="pincode" id="pincode" minlength="6" value required />
                  </div><br />
                  <div className="row justify-content-center">
                    <div className="col-4 mobileview"></div>

                    <div className="col-lg-4 col-md-4 col-sm-4 col-5" align="center">
                      <input type="submit" className="customkey sixththprogress" name="submit" value="Submit" id="submit" />
                    </div>
                    <div className="col-4 mobileview"></div>
                  </div>
                </div>
                <div className="col-3 mobileview"></div>

              </div>
            </div>

          </form >

        </div >
      </div >

      <Footer />
    </>
  );
}
export default StartProject;
