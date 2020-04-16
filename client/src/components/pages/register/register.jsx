import React, { Component } from 'react'
import axios from 'axios'
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
        // await axios.post('http://localhost:5000/register', this.state)
        // .then( res => {
        //     alert(res.data.message)
        // })
        // .catch( err => console.log(err.message))
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
            if(res.message === "Registration was successful") {
                this.props.history.push('/login')
            }
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
        this.setState({ name: e.target.value })
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
                            <form>
                                    <div class="md-form">
                                        <input type="text" id="Form-email4" class="form-control" value={this.state.email} onChange={this.handleEmail.bind(this)}/>
                                        <label for="Form-email4"> <i class="fa fa-mail ml-1"></i> Email</label>
                                    </div>

                                    <div class="md-form">
                                        <input type="text" id="Form-email4" class="form-control" value={this.state.name} onChange={this.handleName.bind(this)}/>
                                        <label for="Form-email4"> <i class="fa fa-mail ml-1"></i> Name</label>
                                    </div>

                                    <div class="md-form">
                                        <input type="text" id="Form-email4" class="form-control" value={this.state.phone} onChange={this.handlePhone.bind(this)}/>
                                        <label for="Form-email4"> <i class="fa fa-mail ml-1"></i> Phone</label>
                                    </div>
                                    <div class="md-form pb-3">
                                                <input type="password" id="Form-pass4" class="form-control" value={this.state.password} onChange={this.handlePassword.bind(this)}/>
                                                <label for="Form-pass4">Password</label>
                                                
                                            </div>
                                    <div class="text-center mb-4">
                                                <button type="button" class="btn btn-danger btn-block z-depth-2" onClick={this.handleRegister.bind(this)}>SignUp <i class="fa fa-sign-in ml-1"></i></button>
                                    </div>
                                    <hr/> 
                                            {/* <p class="font-small grey-text d-flex justify-content-center">Don't have an account? <Link to='/register' style={{color:'rgb(97, 5, 5)'}}> Sign up</Link></p> */}
                                </form>
                            
                        
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}
