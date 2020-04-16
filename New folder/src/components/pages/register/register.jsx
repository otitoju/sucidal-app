import React, { Component } from 'react'

export default class register extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            name: '',
            phone: '',
            address: '',
            gender: '',
            marital: ''
        }
    }

    async handleRegister(e) {
        e.preventDefault()
        fetch('http://localhost:5000/register', {
            method: "POST",
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name,
                phone: this.state.phone,
                address: this.state.address,
                gender: this.state.gender,
                marital: this.state.marital
            })
        })
        .then( res => res.json())
        .then( res => {
            alert(res.message)
            console.log(res)
        })
        .catch(err => console.log(err.message))
    }

    handleAddress(e) {
        this.setState({address: e.target.value})
    }
    handleMarital(e) {
        this.setState({marital: e.target.value})
    }
    handleGender(e) {
        this.setState({gender: e.target.value})
    }
    handlePhone(e) {
        this.setState({phone: e.target.value})
    }
    handleEmail(e) {
        this.setState({ email: e.target.value })
    }
    handlePassword(e) {
        this.setState({ password: e.target.value })
    }
    handleName(e) {
        this.setState({ name: e.target.valuee })
    }
    render() {
        return (
            <div>
                <div class="container my-5">
                    <div class="row justify-content-center">
                        <div class="col-md-9 col-lg-9 col-xs-9">
                            <h2 class="text-center font-bold pt-4 pb-5 mb-5"><strong>Patient Registration form</strong></h2>
                            <h4 style={{textAlign:'center'}}> {this.state.response}</h4>
                            <hr/>
                            <form id="contact-form" method="POST">
                        
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="md-form mb-0">
                                                    <input type="text" id="name" name="name" class="form-control" value={this.state.name} onChange={this.handleName.bind(this)}/>
                                                    <label for="name" class="">Name</label>
                                                </div>
                                            </div>
                        
                                        </div>
                                        <div class="row">
                                                <div class="col-md-4">
                                                    <div class="md-form mb-0">
                                                        <input type="email" id="email" name="email" class="form-control" value={this.state.email}onChange={this.handleEmail.bind(this)}/>
                                                        <label for="subject" class="">Email address <i class="fa fa-message ml-1"></i></label>
                                                    </div>
                                                </div>
                                                
                                                <div class="col-md-4">
                                                    <div class="md-form mb-0">
                                                        <input type="text" id="name" name="name" class="form-control" value={this.state.address} onChange={this.handleAddress.bind(this)}/>
                                                        <label for="subject" class="">Home Address</label>
                                                    </div>
                                                </div>
                                                
                                        </div>
                                        <div class="row">
                                                <div class="col-md-4">
                                                        <div class="md-form mb-0">
                                                            <input type="text" id="subject" name="subject" class="form-control" value={this.state.gender} onChange={this.handleGender.bind(this)}/>
                                                            <label class="">Gender</label>
                                                        </div>
                                                </div>
                                                <div class="col-md-4">
                                                        <div class="md-form mb-0">
                                                            <input type="text" id="phone" name="phone" class="form-control" value={this.state.phone} onChange={this.handlePhone.bind(this)}/>
                                                            <label class="">Phone Number</label>
                                                        </div>
                                                </div>
                                    
                                        </div>
                                        <div class="row">
                                                
                                                <div class="col-md-4">
                                                        <div class="md-form mb-0">
                                                            <input type="text" id="marital" name="" class="form-control" value={this.state.marital} onChange={this.handleMarital.bind(this)}/>
                                                            <label class="">Marital Status</label>
                                                        </div>
                                                </div>
                                        </div>
                                        <div class="text-center text-md-left">
                                            <button class="btn btn-primary" onClick={this.handleRegister.bind(this)}>signup <i class="fa fa-sign-in ml-1"></i></button>
                                        </div>
                                    </form>
                        
                        
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}
