// Form.jsx
// Author: Link Jones
// Last modified: 15/09/2021
// Version: 1.0
// Component containing Contact Us page content. Contains a contact form.

import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        email: "", //email input text box value
        message: "" //message input text box value
    }

    //enables updates to text boxes so the user can type
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value //target of event that triggered the change - which text box to update
        })
    }

    //submit button
    //in future it will send the form information for processing
    //currently sends the user back to home page
    handleSubmit = e => {
        e.preventDefault();
        this.props.history.push('/'); //redirect to home page
    }

    render() {
        return (
            <div className="container py-4">
                <h1>Contact us</h1>
                {/* input email */}
                <label HTMLfor="email" className = "mx-2">
                    Email:</label>
                <input 
                    name="email" 
                    type="text" 
                    className="form-control"
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                {/* input message */}
                <label HTMLfor="message" className = "mx-2">
                    Message:</label>
                <input 
                    name="message" 
                    type="textarea" 
                    cols="400" 
                    rows="5" 
                    className="form-control"
                    value={this.state.message}
                    onChange={this.handleChange}
                    />
                    {/* submit */}
                <button className="btn btn-gold d-block mt-2" onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}
