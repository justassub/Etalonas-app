import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from '../../node_modules/axios';

export var NavigationComponent=()=>{

    
    return(
        
        <nav className="navbar navbar-default">
        <div className="container">
        <ul>
        <li><NavLink to="/institucija">Institucijos</NavLink></li>
        <li><NavLink to="/addinstitucija/">Add Institution</NavLink></li>
        <li><NavLink to="/books">All Books</NavLink></li>
        <li><NavLink to="/addBook">Add Book</NavLink></li>
        
       
        </ul>
         
           
        
          
            </div>
        
            </nav>
    )
}