import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
// push to github
export default class login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            redirect: false
        }
    }

    async handleLogin(e) {
        e.preventDefault()
        fetch('http://localhost:5000/login', {
            method: "POST",
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then( res => res.json())
        .then( res => {
            console.log(res)
            if(res.message == 'successful'){
                // SULE COPY THIS
                window.localStorage.setItem('name', res.name)
                window.localStorage.setItem('email', res.email)
                window.localStorage.setItem('id', res.id)
                // stop here 
                this.setState({redirect: true})
            }
            else{
                alert(res.message)
            }

        })
        .catch(err => console.log(err.message))
    }
    handleEmail(e) {
        this.setState({ email: e.target.value })
    }
    handlePassword(e) {
        this.setState({ password: e.target.value })
    }
    render() {
        if(!this.state.redirect) {
            return (
                <div>
                    <div class="container my-5">
                        <div class="row justify-content-center">
                            <div class="col-md-6 col-lg-6 col-xs-6">
                            <div class="card  text-center card-form">
                                <div class="header pt-3 grey lighten-2">
                                    <h3 class="text">Log in <i class="fa fa-sign-in ml-1"></i></h3>
                                    <h6 class="font-weight-light ">Enter your login details</h6>
                                </div>
                                <div class="card-body">
                                
                                <form>
                                    <div class="md-form">
                                        <input type="text" id="Form-email4" class="form-control" value={this.state.email} onChange={this.handleEmail.bind(this)}/>
                                        <label for="Form-email4"> <i class="fa fa-mail ml-1"></i> Email</label>
                                    </div>
                                    <div class="md-form pb-3">
                                                <input type="password" id="Form-pass4" class="form-control" value={this.state.password} onChange={this.handlePassword.bind(this)}/>
                                                <label for="Form-pass4">Password</label>
                                                <p class="font-small grey-text d-flex justify-content-end">Forgot <a href="#" class="dark-grey-text font-weight-bold ml-1"> Password?</a></p>
                                            </div>
                                    <div class="text-center mb-4">
                                                <button type="button" class="btn btn-danger btn-block z-depth-2" onClick={this.handleLogin.bind(this)}>Log in <i class="fa fa-sign-in ml-1"></i></button>
                                    </div>
                                    <hr/> 
                                            <p class="font-small grey-text d-flex justify-content-center">Don't have an account? <Link to='/register' style={{color:'rgb(97, 5, 5)'}}> Sign up</Link></p>
                                </form>
                                <hr/>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return <Redirect to="/dashboard" />
        }
    }
}
