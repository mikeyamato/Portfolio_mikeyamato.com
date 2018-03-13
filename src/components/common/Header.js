import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Header extends Component {
  state = {}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })
	

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable secondary floated='right'>
        {/* <Menu.Item>
          <img src='/logo.png' />
        </Menu.Item> */}

        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
					<a href='#home'>
          Home
					</a>
        </Menu.Item>

        <Menu.Item
          name='portfolio'
          active={activeItem === 'portfolio'}
          onClick={this.handleItemClick}
        >
					<a href='#portfolio'>
          Portfolio
					</a>
        </Menu.Item>

        <Menu.Item
          name='contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
        >
					<a href='#contact'>
          Contact
					</a>
        </Menu.Item>
      </Menu>
    )
  }
}