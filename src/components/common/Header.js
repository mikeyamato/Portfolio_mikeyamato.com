import React, { Component } from 'react';
import { Menu, Rail, Segment } from 'semantic-ui-react';

export default class Header extends Component {
  // state = {}

	// handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  

  render() {
    // const { activeItem } = this.state

    return (
      


            <Menu stackable secondary floated='right'>
                <Menu.Item href='#about'>
                  About
                </Menu.Item>
                <Menu.Item href='#portfolio'>
                  Portfolio
                </Menu.Item>
                <Menu.Item href='#contact'>
                  Contact
                </Menu.Item>
            </Menu>
            
    );
  }
}


