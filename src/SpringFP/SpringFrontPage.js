import React from 'react'
import ReactDOM from 'react-dom'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import './FrontPage.css'
import { Container } from '@material-ui/core';
import Footer from '../FrontPage/Footer'
import photo1 from '../Photo/photo1_trans.gif'
import photo2 from '../Photo/photo2.gif'
import photo3 from '../Photo/photo3.gif'
import photo4 from '../Photo/photo4.jpg'
import photo5 from '../Photo/photo5.gif'
import logo from '../Photo/logo.png'
import './Button/styles2.scss'
import Typography from '@material-ui/core/Typography';
import './Text/styles3.scss'

// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
const Pink = ({ children }) => <span style={{ color: '#FF6AC1' }}>{children}</span>
const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>
const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>
const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>
const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span>
const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>

class SpringFrontPage extends React.Component {
  render() {
    return (
      <div >
        <Parallax style={{ backgroundColor: '#cbeaed' }} ref={ref => (this.parallax = ref)} pages={6}>

          <ParallaxLayer offset={0} speed={1} style={{ backgroundColor: '#eceff1' }} />

          <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#77989b' }} />



          {/*<ParallaxLayer offset={1.99999} speed={1} style={{ backgroundColor: '#cbeaed' }} /> */}



          <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#3b6978' }} />


          {/*<ParallaxLayer offset={1.99999} speed={1} style={{ backgroundColor: '#cbeaed' }} /> */}



          <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: '#726a95' }} />



          <ParallaxLayer offset={4} speed={1} style={{ backgroundColor: '#9fa8da' }} />

          <ParallaxLayer offset={5} speed={1} style={{ backgroundColor: '#b0bec5' }} />




          <ParallaxLayer offset={0} speed={0} factor={6} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />

          <ParallaxLayer offset={1.1} speed={-0.1} style={{ pointerEvents: 'none' }}>
            <img src={url('satellite4')} style={{ width: '12%', marginLeft: '82%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
          </ParallaxLayer>


          <ParallaxLayer offset={3} speed={0.8} style={{ opacity: 0.1 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={3.75} speed={0.5} style={{ opacity: 0.1 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={3} speed={0.2} style={{ opacity: 0.2 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={3.6} speed={-0.1} style={{ opacity: 0.4 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={4.6} speed={0.4} style={{ opacity: 0.6 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
          </ParallaxLayer>



          {/* PARALLAX PAGES STARTING FROM HERE ! */}

          <ParallaxLayer
            offset={0}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(1)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>

            <div style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url(${photo1})`, backgroundSize: 'contain', width: '45%', height: '55%', marginTop: '10%' }} ></div>

            <img style={{ marginLeft: '0%',marginBottom:'22%', width: '10%', }} src={logo}></img>

            <div style={{}}>
              <div class="animated-title">
                <div class="text-top">
                  <div>
                    <span>one Stop platform for</span>
                    <span> startups, mentors, investors</span>
                  </div>
                </div>
                <div class="text-bottom">
                  <div>and stakeholders !</div>
                </div>
              </div>
            </div>

            <div style={{ marginLeft: 'auto', marginTop: '35%' }}>
              <Container>
                <h3 style={{ color: "#757575", fontFamily: "serif", fontStyle: "italic" }}>
                  "Success is not final,<br />
                            failure is not fatal,<br />
                            it's the courage to continue that counts."<br /> </h3>
                <h2 style={{ fontWeight: "bold", color: "#705d72", fontFamily: "serif" }}> ...Winston Churchill</h2>
              </Container>
            </div>
          </ParallaxLayer>



          <div style={{ color: 'white' }}>

            <ParallaxLayer
              offset={1}
              speed={0.1}
              onClick={() => this.parallax.scrollTo(2)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/*<img src={url('bash')} style={{ width: '40%' }} />*/}


              <div style={{ marginLeft: '-4%', backgroundRepeat: 'no-repeat', backgroundPositionX: '50%', backgroundColor: 'white', backgroundImage: `url(${photo2})`, backgroundSize: 'contain', width: '43%', height: '55%', borderRadius: 25 }} ></div>

              <div style={{ marginLeft: '7%', marginBottom: '0%', width: '30%' }}>
                <div>
                  <Typography style={{ fontFamily: 'Special Elite' }} variant="h3" gutterBottom>
                    Don't think out of the box
               </Typography>
                </div>
                <div>
                  <Typography style={{ fontFamily: 'Special Elite' }} variant="h4" gutterBottom>
                    leave the box,<br />
                  break the box,<br />
                  build your own.
            </Typography>
                  <div style={{ marginTop: 50 }}>
                    <Typography style={{ fontFamily: 'Special Elite' }} variant="h5" gutterBottom>
                      Register today to get connected to mentors and investors and kickstart your startup
               </Typography>
                  </div>
                  <div style={{ marginLeft: '30%', marginTop: '5%' }} onClick={() => { window.location = "registrationPg" }}>
                    <a href="/registrationPg" class="buttonH">
                      get started
                  </a>
                  </div>
                </div>
              </div>
            </ParallaxLayer>






            <ParallaxLayer
              offset={2}
              speed={-0}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              onClick={() => this.parallax.scrollTo(3)}>
              {/* <img src={url('clients-main')} style={{ width: '40%' }} />*/}
              <div style={{ marginLeft: '3%', marginBottom: '0%', width: '30%' }}>
                <div>
                  <Typography style={{ fontFamily: 'Special Elite' }} variant="h4" gutterBottom>
                    In learning, you will teach, and in teaching, you will learn.
            </Typography>
                </div>
                <div style={{ marginTop: '8%' }}>
                  <Typography style={{ fontFamily: 'Special Elite' }} variant="h5" gutterBottom>
                    Get in touch with startups and help each other achieve your collective dreams
            </Typography>
                </div>
              </div>

              <div style={{ marginLeft: '8%', backgroundRepeat: 'no-repeat', backgroundPositionX: '50%', backgroundSize: 'contain', backgroundColor: 'white', backgroundImage: `url(${photo3})`, width: '43%', height: '55%', borderRadius: 25 }} ></div>
            </ParallaxLayer>






            <ParallaxLayer
              offset={3}
              speed={-0}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              onClick={() => this.parallax.scrollTo(4)}>
              {/* <img src={url('clients-main')} style={{ width: '40%' }} />*/}
              <div  >
                <img style={{ marginLeft: '5%', width: '65%', height: '55%', borderRadius: 25, }} src='assets/photo4.jpg'></img>
              </div>
              <div style={{ width: '35%', marginLeft: '-10%', marginBottom: '5%' }}>
                <div>
                  <Typography style={{ fontFamily: 'Special Elite' }} variant="h4" gutterBottom>
                    An investor without investment objective is a traveller without a destination
            </Typography>
                </div>
                <div style={{ marginTop: '10%' }}>
                  <Typography style={{ fontFamily: 'Special Elite' }} variant="h5" gutterBottom>
                    Explore exciting investment opportunities in startups
            </Typography>
                </div>
              </div>
            </ParallaxLayer>






            <ParallaxLayer
              offset={4}
              speed={-0}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              onClick={() => this.parallax.scrollTo(5)}>
              {/* <img src={url('clients-main')} style={{ width: '40%' }} />*/}
              <div style={{ marginLeft: '3%', marginBottom: '0%', width: '30%' }}>
                <div>
                  <Typography style={{ fontFamily: 'Special Elite' }} variant="h4" gutterBottom>
                    Sometimes you have to create what you want to be a part of
            </Typography>
                </div>
                <div style={{ marginTop: '8%' }}>
                  <Typography style={{ fontFamily: 'Special Elite' }} variant="h5" gutterBottom>
                    Get acquainted with like minded people and help evolve the community
            </Typography>
                </div>
              </div>
              <div style={{ marginLeft: '8%', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundColor: 'white', backgroundPositionX: '50%', backgroundImage: `url(${photo5})`, width: '43%', height: '55%', borderRadius: 25 }} ></div>
            </ParallaxLayer>

            <ParallaxLayer
              offset={5}
              speed={-0}
              onClick={() => this.parallax.scrollTo(0)}>
              {/* <img src={url('clients-main')} style={{ width: '40%' }} />*/}
              {/* <div style={{ backgroundSize: 'contain', backgroundColor: 'white', backgroundImage: `url(${photo1})`, width: '43%', height: '55%', borderRadius: 25 }} ></div>*/}
              <div style={{ position: 'absolute', bottom: 0, width: '100%', height: 300, backgroundColor: 'white' }}>
                <img style={{ width: '100%', height: '100%', }} src='assets/foot.png'></img>
              </div>
              <div style={{ marginLeft: '13%', marginBottom: '18%' }}>
                <div>
                  <Typography style={{ fontFamily: 'Special Elite' }} variant="h3" gutterBottom>

                  </Typography>
                </div>
                <div>
                  <Typography style={{ fontFamily: 'Special Elite' }} variant="h4" gutterBottom>

                  </Typography>
                </div>
              </div>
            </ParallaxLayer>

          </div>
        </Parallax>

      </div >
    )
  }
}

export default SpringFrontPage;