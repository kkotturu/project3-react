import React, { Component } from 'react';
import './App.css';
import Logo from './Assets/Images/Logo.png';
import Footer from './Footer/Footer';
import Search from './Search/Search';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
    this.setState(localStorage.setItem('searchZip', ''))
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
    this.setState(localStorage.removeItem('searchZip'))
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <AppBar fluid className="bnb-nav">
          <Toolbar>
            <div>
              <img className="Logo" src={Logo} alt="Logo" />
            </div>

            <span className="btnLoc">
              <Button
                bsStyle="primary"
                className="btn-margin"
                onClick={this.goTo.bind(this, 'SavedSearch')}
              >
                Saved Searches
            </Button>
              {
                !isAuthenticated() && (
                  <Button
                    id="qsLoginBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
              }
              {
                isAuthenticated() && (
                  <Button
                    id="qsLogoutBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
              }
            </span>
          </Toolbar>
        </AppBar>
        <Footer />
        <Search />
      </div >
    );
  }
}

export default App;

