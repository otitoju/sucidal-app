import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Header extends Component {
    constructor(props){
      super(props)
      this.state = {
        token: null
      }
      this.handleSignOut = this.handleSignOut.bind(this)
    }
  
    async componentWillMount(){
      const token = await window.localStorage.getItem('token')
      this.setState({ token })
    }
    
    async handleSignOut(e){
      e.preventDefault()
      await window.localStorage.clear()
    }
  
    render(){
      return (
        <div className="App">
        {this.state.token ? (
            <nav class="navbar navbar-expand-lg navbar">
            <Link to='/' className="nav-link" style={{color:'rgb(97, 5, 5)'}}>
            <img src={require('../images/logo.jpg')} alt="" style={{width:'40px', height:'40px'}}/>
            <h1 id="medic"  class="navbar-brand">Sucide System</h1>
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav"
                aria-expanded="false" aria-label="Toggle navigation" style={{background:'rgb(97, 5, 5)'}}>
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="basicExampleNav">
                <ul class="navbar-nav mr-auto">
                    
                    <li class="nav-item">
                        <Link to='/services' className="nav-link" style={{color:'rgb(97, 5, 5)'}}>Medical Services</Link>
                    </li>
                    

                </ul>

                <div>
                  <ul class="navbar-nav mr-auto">
                      <li class="nav-item">
                      <Link to='/login' className="nav-link text-white" style={{background:'rgb(97, 5, 5)'}}>
                        <i className="fa fa-sign-in" aria-hidden="true"></i> Sign In
                      </Link>
                      </li><br/>
                      <li class="nav-item">
                      <Link to='/register' className="nav-link" style={{color:'rgb(97, 5, 5)'}}>
                        <i className="fa fa-sign-in" aria-hidden="true"></i> Sign Up
                      </Link>
                      </li>
                  </ul>
                </div>
            </div>
            </nav>
        ) : (
            <nav class="navbar navbar-expand-lg navbar">
            <Link to='/' className="nav-link" style={{color:'rgb(97, 5, 5)'}}>
            <img src={require('../images/logo.jpg')} alt="" style={{width:'40px', height:'40px'}}/>
            <h1 id="medic"  class="navbar-brand">Sucide System</h1>
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav"
                aria-expanded="false" aria-label="Toggle navigation" style={{background:'rgb(97, 5, 5)'}}>
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="basicExampleNav">
                <ul class="navbar-nav mr-auto">
                    
                    <li class="nav-item">
                        <Link to='/services' className="nav-link" style={{color:'rgb(97, 5, 5)'}}>Medical Services</Link>
                    </li>
                   

                </ul>

                <div>
                  <ul class="navbar-nav mr-auto">
                      <li class="nav-item">
                      <Link to='/login' className="nav-link text-white" style={{background:'rgb(97, 5, 5)'}}>
                        <i className="fa fa-sign-in" aria-hidden="true"></i> Sign In
                      </Link>
                      </li><br/>
                      <li class="nav-item">
                      <Link to='/register' className="nav-link" style={{color:'rgb(97, 5, 5)'}}>
                        <i className="fa fa-sign-in" aria-hidden="true"></i> Sign Up
                      </Link>
                      </li>
                  </ul>
                </div>
            </div>
            </nav>
        )}

        </div>
      )
    }
  }