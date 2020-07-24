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

          <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#84a9ac' }} />



          {/*<ParallaxLayer offset={1.99999} speed={1} style={{ backgroundColor: '#cbeaed' }} /> */}



          <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#3b6978' }} />


          {/*<ParallaxLayer offset={1.99999} speed={1} style={{ backgroundColor: '#cbeaed' }} /> */}



          <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: '#726a95' }} />



          <ParallaxLayer offset={4} speed={1} style={{ backgroundColor: '#9fa8da' }} />

          <ParallaxLayer offset={5} speed={1} style={{ backgroundColor: '#b0bec5' }} />




          <ParallaxLayer offset={0} speed={0} factor={6} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />

          <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
            <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
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

            <div style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url(${photo1})`, backgroundSize: 'contain', width: '45%', height: '55%', marginTop: '10%' }} >
            </div>
            <div>
              <Container>
                <h3 style={{ color: "#757575", fontFamily: "serif", fontStyle: "italic" }}>
                  "Success is not final,<br />
                            failure is not fatal,<br />
                            it's the courage to continue that counts."<br /> </h3>
                <h2 style={{ fontWeight: "bold", color: "#705d72", fontFamily: "serif" }}> ...Winston Churchill</h2>
              </Container>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(2)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/*<img src={url('bash')} style={{ width: '40%' }} />*/}

            <div style={{ backgroundRepeat: 'no-repeat', backgroundColor: 'white', backgroundImage: `url(${photo2})`, backgroundSize: 'contain', width: '43%', height: '55%', borderRadius: 25 }} ></div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={-0}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => this.parallax.scrollTo(3)}>
            {/* <img src={url('clients-main')} style={{ width: '40%' }} />*/}
            <div style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundColor: 'white', backgroundImage: `url(${photo3})`, width: '43%', height: '55%', borderRadius: 25 }} ></div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={3}
            speed={-0}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => this.parallax.scrollTo(4)}>
            {/* <img src={url('clients-main')} style={{ width: '40%' }} />*/}
            <div  >
              <img style={{ width: '43%', height: '55%', borderRadius: 25 }} src='assets/photo4.jpg'></img>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={4}
            speed={-0}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => this.parallax.scrollTo(5)}>
            {/* <img src={url('clients-main')} style={{ width: '40%' }} />*/}
            <div style={{ backgroundSize: 'contain', backgroundColor: 'white', backgroundImage: `url(${photo1})`, width: '43%', height: '55%', borderRadius: 25 }} ></div>
          </ParallaxLayer>
          {
            <ParallaxLayer
              offset={5}
              speed={-0}

              onClick={() => this.parallax.scrollTo(0)}>
              {/* <img src={url('clients-main')} style={{ width: '40%' }} />*/}
              {/* <div style={{ backgroundSize: 'contain', backgroundColor: 'white', backgroundImage: `url(${photo1})`, width: '43%', height: '55%', borderRadius: 25 }} ></div>*/}
              <div style={{ position: 'absolute', bottom: 0, width: '100%', height: 300, backgroundColor: 'white' }}>
                <img style={{ width: '100%', height: '100%', }} src='assets/foot.png'></img>
              </div>
            </ParallaxLayer>


          }

        </Parallax>

      </div>
    )
  }
}

export default SpringFrontPage;