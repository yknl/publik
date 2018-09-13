import React, { Component, Link } from 'react';
import Profile from './Profile.jsx';
import Signin from './Signin.jsx';
import Username from './username.js';
import Feed from './feed.js';

import {
  isSignInPending,
  isUserSignedIn,
  redirectToSignIn,
  handlePendingSignIn,
  signUserOut,
} from 'blockstack';

import { Switch, Route } from 'react-router-dom'

export default class App extends Component {

  constructor(props) {
  	super(props);
  }

  handleSignIn(e) {
    e.preventDefault();
    const origin = window.location.origin
    redirectToSignIn(origin, origin + '/manifest.json', ['store_write', 'publish_data'])
  }

  handleSignOut(e) {
    e.preventDefault();
    signUserOut(window.location.origin);
  }

  render() {
    return (
      <div className="site-wrapper">
        <div className="site-wrapper-inner">
          <Switch>
            <Route
              path='/username'
              component={Username}
            />
            <Route
              path='/feed'
              component={Feed}
            />
            <Route
              path='/'
              component={Signin}
            />
{/*            <Route 
              path='/:username?' 
              render={
                routeProps => <Profile handleSignOut={ this.handleSignOut } {...routeProps} />
              } 
            />*/}

          </Switch>
{/*          { !isUserSignedIn() ?
            <Signin handleSignIn={ this.handleSignIn } />
            : 
            <Switch>
              <Route 
                path='/:username?' 
                render={
                  routeProps => <Profile handleSignOut={ this.handleSignOut } {...routeProps} />
                } 
              />
            </Switch>
          }*/}
        </div>
      </div>
    );
  }

  componentWillMount() {
    if (isSignInPending()) {
      handlePendingSignIn().then((userData) => {
        window.location = window.location.origin;
      });
    }
  }
}
