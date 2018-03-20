import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react';

export default class Header extends Component {
  
  render() {

    return (
      <Menu attached inverted stackable className='header-edges'>
        <Container>
        <Menu.Menu position='right' className='header-font'>
        <Menu.Item 
          href='#about'>
          About
        </Menu.Item>
        <Menu.Item href='#portfolio'>
          Portfolio
        </Menu.Item>
        <Menu.Item href='#contact'>
          Contact
        </Menu.Item>
        </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}


