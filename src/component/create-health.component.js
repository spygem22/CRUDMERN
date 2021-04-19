import React, { Component } from 'react';
import axios from 'axios';

export default class CreateHealth extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
            fullname:'',
            temperature:'',
            email:'',
            phonenumber:''
        
        }
        // this.onFullNameChange = this.onFullNameChange.bind(this)
       
        this.onSubmit = this.onSubmit.bind(this);
        this.onValueChange = this.onValueChange.bind(this);

    }
    // onFullNameChange(e){
    //     this.setState({
    //         fullname: e.target.value
    //     })
    // }
    onValueChange(e){
        this.setState({
        [e.target.dataset.name]: e.target.value
        })
    }




    onSubmit(e){
    e.preventDefault();

    const health ={
    fullname: this.state.fullname,
    temperature: this.state.temperature,  
    email: this.state.email,
    phonenumber: this.state.phonenumber
    }
    axios.post('http://localhost:5000/health/add', health)
    // .then(res => console.log(res.data))
    .then(res => window.location = "/")
    .catch(err => console.log('Error:' + err));
    console.log(this.state)
    }
    
    render() {
        return (
        <div className= "container">
        <h1>Create List</h1>
        <form onSubmit={this.onSubmit}>
            <div className ="form-group">
             <label>Fullname</label>
             <input type="text" className="form-control" data-name = "fullname" required onChange={this.onValueChange}/>
            </div>

            <div className ="form-group">
             <label>Temperature</label>
             <input type="number" step ="0.1" className="form-control" data-name = "temperature" required onChange={this.onValueChange}/>
            </div>

            <div className ="form-group">
             <label>Email</label>
             <input type="email" className="form-control" data-name = "email" required onChange={this.onValueChange}/>
            </div>

            <div className ="form-group">
             <label>Phonenumber</label>
             <input type="tel" className="form-control" data-name = "phonenumber" required onChange={this.onValueChange}/>
            </div>

            <button type = "submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
     
        )
    }
}
