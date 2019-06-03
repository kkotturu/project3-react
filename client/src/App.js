import React, { Component } from 'react';
import './App.css';
import Logo from './Assets/Images/Logo.png';
import Footer from './Footer/Footer';
import Search from './Search/Search';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import API from "./API";
import SavedSearch from './Pages/SavedSearch';

class App extends Component {
  state = {
    results: [],
    saved_state: false
  }

  _handleClick = (e, obj) => {
    e.preventDefault();
    const user_obj = {
      userId: localStorage.getItem('userid')
    };
    API.getAll(user_obj).then(res => {
      this.setState({
        saved_state: !this.state.saved_state,
        results: res.data
      })
      console.log(res)
    }).catch(err => {
      return err
    })
  }

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
        <AppBar fluid className="bnb-nav" xs="12" sm="6" md="8" >
          <Toolbar>
            <div>
              <img className="Logo" src={Logo} alt="Logo" />
            </div>

            <span className="btnLoc">
              {
                isAuthenticated() && (
                  <Button
                    id="savedBut"
                    bsStyle="primary"
                    className="btn-margin"
                    data-toggle="collapse"
                    onClick={(e) => this._handleClick(e)}
                >
                   {!this.state.saved_state ? "Saved Searches" : "Otherrr"}
            </Button>
                )}
              {
                !isAuthenticated() && (
                  <Button
                    id="qsLoginBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    data-toggle="collapse"
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
        {!this.state.saved_state ? <Search /> : <SavedSearch results={this.state.results} />}
      </div >
    )
  }
}

export default App;

