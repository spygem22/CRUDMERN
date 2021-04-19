import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


const Health = props =>{
    return(
        <tr>
            <td>{props.health.fullname}</td>
            <td>{props.health.temperature}</td>
            <td>{props.health.email}</td>
            <td>{props.health.phonenumber}</td>
            <td className ="text-center">
                <Link to ={'/edit/'+ props.health._id} className = "btn btn-sm btn-primary">Edit</Link>
                <a href = "#" onClick = {()=> {props.deleteHealth(props.health._id)}} className = "btn btn-sm btn-danger">Delete</a>
            </td>
        </tr>
    )
}

export default class HealthList extends Component {
    constructor(props){
        super(props)
        this.deleteHealth = this.deleteHealth.bind(this);
        this.state = {health: []}
    }
   
    componentDidMount(){
     axios.get('http://localhost:5000/health/')
     .then (res =>{
         this.setState({health: res.data})
     })
     .catch (error =>{
         console.log(error);
     })
    }


    deleteHealth(id){
        axios.delete('http://localhost:5000/health/'+id)
        .then(res =>console.log(res.data))
         this.setState({
             health: this.state.health.filter( el => el._id !== id )
         })

    }

  healthDeclaration(){
      return this.state.health.map(currentHealth =>{
          return <Health health = {currentHealth} deleteHealth ={this.deleteHealth} key={currentHealth._id}
          />
      })
  }

    render() {
        return (
            <div className= "container">
            <h1>Health List</h1>
            <table className= "table table-bordered table-hover">
            <thead className = "thead-dark">
               <tr>
                   <th className = "text-center">Fullname</th>
                   <th className = "text-center">Temperature</th>
                   <th className = "text-center">email</th>
                   <th className = "text-center">PhoneNumber</th>
                   <th className = "text-center">Actions</th>
               </tr>
            </thead>
            <tbody>
                {this.healthDeclaration()}
            </tbody>
            </table>
            </div>
        )
    }
}