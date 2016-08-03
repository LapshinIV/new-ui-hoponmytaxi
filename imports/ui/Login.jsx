import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router'
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import SignIn from './googlemaps/AccountsUIWrapper.jsx';



export default class Login extends Component {
  render() {
    return (
      <div id="map">
      	<Link to="/" className="btn btn-default" role="button">back</Link>
      	<SignIn />
      </div>
    )
  }
}
