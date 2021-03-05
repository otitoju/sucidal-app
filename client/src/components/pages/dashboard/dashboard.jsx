import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class dashboard extends Component {
    // constructor() {
    //     super()
    //     //depressed, gender, education, age, income, pay4sex, relationship, stigma
    //     this.state = {
            
    //     }
    // }
    constructor() {
        super()
        this.state = {
            redirect: false,
            depressed: '',
            gender: '',
            education: '',
            age: '',
            income: '', 
            pay4sex: '', 
            relationship: '', 
            stigma: '',
            result:'',
            name: '',
            email: '',
            id: ''
        }
    }
    async componentDidMount() {
        // SULE COPY THIS
        const token = await window.localStorage.getItem('token')
        const name = await window.localStorage.getItem('name')
        const email = await window.localStorage.getItem('email')
        const id = await window.localStorage.getItem('id')
        this.setState({name: name, email: email, id: id })
        if(!token) {
            this.setState({ redirect: true })
        }
    }

    handleVerify(e) {
        //e.preventDefault()
        fetch('http://localhost:5000/prediction', {
            method: "POST",
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                depressed: this.state.depressed, 
                gender: this.state.gender, 
                education: this.state.education, 
                age: this.state.age, 
                income: this.state.income, 
                pay4sex: this.state.pay4sex, 
                relationship: this.state.relationship, 
                stigma: this.state.stigma 
            })
        })
        .then( res => res.json())
        .then( res => {
            console.log(res)
            this.setState({result: res.message})
           // alert(res.message)
        })
        .catch(err => console.log(err.message))
    }

    handleDepressed(e) { this.setState({ depressed: e.target.value })}
    handleGender(e) { this.setState({ gender: e.target.value })}
    handleEducation(e) { this.setState({ education: e.target.value })}
    handleAge(e) { this.setState({ age: e.target.value })}
    handleIncome(e) { this.setState({ income: e.target.value })}
    handlePay4sex(e) { this.setState({ pay4sex: e.target.value })}
    handleRelationship(e) { this.setState({ relationship: e.target.value })}
    handleStigma(e) { this.setState({ stigma: e.target.value })}
    

    Modal() {
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");
    
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
    
        // When the user clicks on the button, open the modal
        btn.onclick = function() {
          modal.style.display = "block";
        }
    
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
          modal.style.display = "none";
        }
    
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
        this.handleVerify()
    }
    render() {
        if(!this.state.redirect) {
            return (
                <div>
                    <div class="container my-5">
        
        <div class="row justify-content-center">
          <div class="col-lg-10 col-md-10">
          <div class="card">
          <div class="row justify-content-center">
        <p class="h4 mb-4"><strong>Answer the following Questions: </strong></p>
        </div>
        <hr class="hr-class"/>
            <div class="card-body">
                <label>Are you depressed?</label>
                <select class="form-control" id="sel1" value={this.state.depressed} onChange={this.handleDepressed.bind(this)}>
                    <option>--Select your option--</option>
                    <option >Yes</option>
                    <option >No</option>
                </select>

                <label>Education Level?</label>
                <select class="form-control" id="sel1" value={this.state.education} onChange={this.handleEducation.bind(this)}>
                    <option>--Select your option--</option>
                    <option >Ond</option>
                    <option >Bsc</option>
                    <option >Msc</option>
                    <option >PhD</option>
                    <option >None</option>
                </select>
                
                <label>Age group?</label>
                <select class="form-control" id="sel1" value={this.state.age} onChange={this.handleAge.bind(this)}>
                    <option>--Select your option--</option>
                    <option >Teen</option>
                    <option >Adult</option>
                    <option >Young</option>
                </select>
                
                <label>Income Earned?</label>
                <select class="form-control" id="sel1" value={this.state.income} onChange={this.handleIncome.bind(this)}>
                    <option>--Select your option--</option>
                    <option >Low</option>
                    <option >Medium</option>
                    <option >High</option>
                </select>

                <label>Pay for Sex?</label>
                <select class="form-control" id="sel1" value={this.state.pay4sex} onChange={this.handlePay4sex.bind(this)}>
                    <option>--Select your option--</option>
                    <option >Yes</option>
                    <option >No</option>
                </select>

                <label>Relationship with others?</label>
                <select class="form-control" id="sel1" value={this.state.relationship} onChange={this.handleRelationship.bind(this)}>
                    <option>--Select your option--</option>
                    <option >Yes</option>
                    <option >No</option>
                </select>

                <label>Stigmatized?</label>
                <select class="form-control" id="sel1" value={this.state.stigma} onChange={this.handleStigma.bind(this)}>
                    <option>--Select your option--</option>
                    <option >Yes</option>
                    <option >No</option>
                </select>
            <hr/>
            <div class="text-center">
            <button id="myBtn" class="btn btn-danger btn-block my-4" onClick={this.Modal.bind(this)}>Result</button>

            <div id="myModal" class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>
            <h1>Dear {this.state.name} with id {this.state.id} and email: {this.state.email}, your test result is...</h1>
                    <h3>{this.state.result}</h3>
                </div>
            </div>
            {/* <button class="btn btn-danger btn-block my-4" type="submit" onClick={this.handleVerify.bind(this)}>Result </button> */}
            </div>
            </div>
          </div>
          </div>
        </div>
      </div>
                </div>
            )
        }
        else {
            return <Redirect to="/login" />
        }
        
    }
}
