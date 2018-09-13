import React, { Component } from 'react';
import ryan from '../images/ryan.jpg'
import larry from '../images/larry.jpg'
import muneeb from '../images/muneeb.jpg'
import placeholder from '../images/avatar-placeholder.png'
import Modal from 'react-responsive-modal'

export default class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      newStatus: "",
      statuses: [
        {
          id: 1,
          text: "Hello world!",
          name: 'Ryan Shea',
          handle: '@ryan.id',
          avatar: ryan
        },
        {
          id: 2,
          text: "Hello world!",
          name: 'Muneeb Ali',
          handle: '@muneeb.id',
          avatar: muneeb
        },
        {
          id: 3,
          text: "Hello world!",
          name: 'Larry Salibra',
          handle: '@larry.id',
          avatar: larry
        },
        {
          id: 4,
          text: "Hello world!",
          name: 'Ryan Shea',
          handle: '@ryan.id',
          avatar: ryan
        },
        {
          id: 5,
          text: "Hello world!",
          name: 'Muneeb Ali',
          handle: '@muneeb.id',
          avatar: muneeb
        },
        {
          id: 6,
          text: "Hello world!",
          name: 'Larry Salibra',
          handle: '@larry.id',
          avatar: larry
        },
      ],
      modalOpen: false,
      warningModalOpen: false,
    };
  }

  handleNewStatusChange = (event) => {
    this.setState({
      newStatus: event.target.value
    })
  }

  handleNewStatusSubmit = (event) => {
    event.preventDefault()
    this.openModal()
  }

  openModal = () => {
    this.setState({
      modalOpen: true
    })
  }

  onCloseModal = () => {
    this.setState({
      modalOpen: false
    })
  }

  openWarningModal = () => {
    this.setState({
      warningModalOpen: true
    })
  }

  onCloseWarningModal = () => {
    this.setState({
      warningModalOpen: false
    })
  }

  closeAllModals = () => {
    this.onCloseModal()
    this.onCloseWarningModal()
  }

  render() {

    const authenticatorURL = 'https://deploy-preview-1667--reporter-beaver-73821.netlify.com/complete'

    return (
      <div className="container">
        <Modal open={this.state.warningModalOpen} onClose={this.onCloseWarningModal} center>
          <div className="backup-modal">
            <h2>Warning</h2>
            <p>Your ID will automatically expire in 3 hours if you do not save to an authenticator.</p>
            <a 
              className="btn-blockstack"
              href={authenticatorURL}>
              Save my ID 
            </a>
            <button 
              className="btn-blockstack-secondary"
              onClick={this.closeAllModals}>
              Continue
            </button>
          </div>
        </Modal>
        <Modal open={this.state.modalOpen} onClose={this.onCloseModal} center>
          <div className="backup-modal">
            <h2>Complete your Blockstack ID to continue</h2>
            <p>
              Blockstack IDs are user owned, and secured by the blockchain, so there are a few extra security steps.
              Before you can continue using Publik, you should complete the account creation process by saving your ID to a Blockstack authenticator.
              <br/>
            </p>
            <a 
              className="btn-blockstack"
              href={authenticatorURL}>
              Complete your ID &rarr;
            </a>
            <div className="text-center">
              <a 
                className="modal-link"
                onClick={this.openWarningModal}>
                Do this later
              </a>
            </div>
          </div>
        </Modal>
        <div className="row">
          <div className="col-md-offset-3 col-md-6">
            <div className="col-md-12">
              <div className="header">
                <div>
                  <h1 className="heading">Your Feed</h1>
                </div>
                <div className="header-avatar-container" onClick={this.openModal}>
                  <img className="header-avatar" src={placeholder} />
                  <div className="red-dot"></div>
                </div>
              </div>
            </div>
            <div className="new-status">
              <div className="col-md-12">
                <textarea className="input-status"
                  value={this.state.newStatus}
                  onChange={e => this.handleNewStatusChange(e)}
                  placeholder="What's on your mind?"
                />
              </div>
              <div className="col-md-12 text-right">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={e => this.handleNewStatusSubmit(e)}
                >
                  Submit
                </button>
              </div>
            </div>

            <div className="col-md-12 statuses">
            {this.state.statuses.map((status) => (
                <div className="status" key={status.id}>
                  <img className="status-avatar" src={status.avatar} />
                  <div className="status-content">
                    <div className="status-username">
                      {status.name}
                      <span className="status-handle">{status.handle}</span>
                    </div>
                    <div className="status-text">{status.text}</div>
                  </div>
                </div>
                )
            )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
