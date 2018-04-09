import React, { Component } from 'react';
import { Container, Menu, Segment } from 'semantic-ui-react';
import Typing from 'react-typing-animation';

export default class Header extends Component {
  
  render() {

    return (
      <Segment inverted attached >
        <Menu stackable inverted pointing secondary>
          <Container>
            <Menu.Item header position='left' className='header-font'>
              <Typing loop>
                <Typing.Speed ms={70} />
                SHINSUKE "MIKE" YAMATO
                <Typing.Reset count={1} delay={1000} />
                SOFTWARE ENGINEER
                <Typing.Reset count={1} delay={1000} />
                やまと　しんすけ　マイク
                <Typing.Reset count={1} delay={1000} />
                ソフトウェア　エンジニア
                <Typing.Delay ms={1000} /> 
              </Typing>
            </Menu.Item>
            <Menu.Menu position='right' className='header-font'>
              <Menu.Item 
                href='#about'>
                ABOUT
              </Menu.Item>
              <Menu.Item href='#portfolio'>
                PORTFOLIO
              </Menu.Item>
              <Menu.Item href='#contact'>
                CONTACT
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </Segment>
    );
  }
}


