import React, { Component } from 'react'
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><button className="active" href="#home">Home</button></li>
          <li><button href="#about">About</button></li>
          <li><button href="#course">Course</button></li>
          <li><button href="#Event">Event</button></li>
          <li className="sign"><a href="/SignIn"><button>Sign In</button></a></li>
        </ul>
      </div>
    )
  }
}
