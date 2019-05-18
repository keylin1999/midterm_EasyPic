import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Add extends Component{
    constructor(props){
        super(props)
        this.state = {
            source: null,
            tag: null,
            password: null
        }
    }
    sourceHandle = (e)=>{
        this.setState({source: e.target.value})
    }
    tagHandle =(e)=>{
        this.setState({tag: e.target.value})
    }
    passwordHandle=(e)=>{
        this.setState({password: e.target.value})
    }
    handleSubmit = (e)=>{
        console.log(this.state)
        fetch('api/imgSrc',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
    }
    render(){
        return(
            <div class="addSrc">
                <div class="leftcol">
                    <form onSubmit={this.handleSubmit}>

                        <h1>Picture</h1>
                        
                        <fieldset>
                            <legend><span class="number">1</span> Basic info</legend>
                            <label for="source">Source:</label>
                            <input type="text" id="source" onChange={this.sourceHandle}/>
                        
                            <label for="tag">Tag:</label>
                            <input type="text" id="tag" onChange={this.tagHandle}/>
                        
                            <label for="password">Password:</label>
                            <input type="password" id="password" onChange={this.passwordHandle}/>
                        </fieldset>
                        
                        <button type="submit">Add Picture</button>
                    </form>
                </div>
                <div class="rightcol">
                    <h1>Preview</h1>
                    <img id="preview" src={this.state.source} alt="Your Picture"/>
                </div>
            </div>
        )
    }
}

export default Add