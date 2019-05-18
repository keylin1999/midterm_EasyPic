import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import logo from './a.png'
class NavBar extends Component{
    render(){
        return(
            <header>
            <img src={logo}/>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/gallery'>Gallery</Link></li>
                        <li><Link to='/add'>Add</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
export default NavBar
