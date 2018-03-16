import React from 'react';
import { Parallax, Background } from 'react-parallax';
import './landing.css';


const ParallaxImg = () => (
  <div>
    <Parallax
      blur={3}
      bgImage={require('/Users/Yamato/Documents/Portfolio/portfolio_mikeyamato.com/src/assets/IMG_0338.JPG')}
      bgImageAlt="the cat"
      strength={200}
    >
      Put some text content here
      or even an empty div with fixed dimensions
      to have a height for the parallax.
      <div style={{ height: '400px' }} />
    </Parallax>
    <Parallax strength={300}>
      <div style={{ height: '400px' }} >Use the background component for custom elements</div>
      <Background>
        <img src="//i.imgur.com/4o9FSOP.jpg" alt="ramen" className='parallax-image'/>
      </Background>
    </Parallax>
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={require('/Users/Yamato/Documents/Portfolio/portfolio_mikeyamato.com/src/assets/IMG_1767.JPG')}
      bgImageAlt="the dog"
      strength={200}
    >
      Blur transition from min to max. yes!
      <div style={{ height: '400px' }} />
    </Parallax>
  </div>
);
export default ParallaxImg;