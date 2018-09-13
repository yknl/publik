import React, { Component } from 'react';

export default class Username extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      username: e.target.value
    })
  }

  render() {
    return (
      <div className="panel-landing" id="section-1">
        <h1 className="landing-heading">Create a Blockstack ID</h1>
        <div className="landing-content">
          <input className="username-input" name="" value={this.state.username} onChange={this.handleChange} />
          <p className="lead">
            <a
              className="btn btn-primary btn-lg btn-fixed"
              id="signin-button"
              href="/feed"
            >
              Continue
            </a>
          </p>
        </div>
      </div>
    );
  }
}
