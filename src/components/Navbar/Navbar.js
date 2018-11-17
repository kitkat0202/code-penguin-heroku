import React, { Component } from 'react';
import './Navbar.css';

export default class Navbar extends Component {
  state = {
    slide: 0,
    lastScrollY: 0,
    color: 'transparent',
    avatar: 'https://via.placeholder.com/150'
  };

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { lastScrollY } = this.state;
    const currentScrollY = window.scrollY;

    // navbar color effect
    if (window.scrollY > 10) {
      this.setState({ color: 'rgba(32, 32, 32, 0.9)' });
    } else {
      this.setState({ color: 'transparent' });
    }

    // navbar slide effect
    if (currentScrollY > lastScrollY && window.scrollY > 200) {
      this.setState({ slide: '-80px' });
    } else {
      if (window.scrollY < 800) {
        this.setState({ slide: '0px' });
      }
    }
    this.setState({ lastScrollY: currentScrollY });
  };

  gotoMain = () => {
    this.props.handle("Main")
  }

  render() {
    return (
      <React.Fragment>
        <div id="navigation" className="navbar navbar-fixed-top" style={{ transform: `translate(0, ${this.state.slide})`, transition: 'all 150ms linear' }}>
          <div className="navbar-inner" style={{ backgroundColor: `${this.state.color}`, transition: 'all 300ms ease-in-out' }}>
            <div className="container">
              <nav>
                <ul className="nav">
                  <li key="1">
                    <h4 onClick={this.gotoMain} className="ui white"> Code Penguin</h4>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
