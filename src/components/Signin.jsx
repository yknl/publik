import React, { Component } from 'react';
import { isUserSignedIn } from 'blockstack';

export default class Signin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSignIn } = this.props;

    return (
      <div className="panel-landing" id="section-1">
        <h1 className="landing-heading">Publik</h1>
        <p>Welcome to the Decentralized Twitter</p>
        <p>
          Publik is powered by Blockstack, a decentralized app platform that gives you control over your identity and data. <br/>
        </p>
        <p className="lead">
          <a
            className="btn btn-primary btn-lg btn-fixed"
            id="signin-button"
            href="/username"
          >
            Get Started
          </a>
          <br/>
          <button
            className="btn btn-primary btn-lg btn-fixed"
            id="signin-button"
            onClick={ this.handleSignIn }
          >
            Sign In with Existing Blockstack ID
          </button>
        </p>
      </div>
    );
  }
}
