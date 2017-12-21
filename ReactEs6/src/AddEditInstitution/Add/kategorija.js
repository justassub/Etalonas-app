import React from 'react';
import {NavLink} from 'react-router-dom';
export class kategorija extends React.Component  {    
    render(){
        return(
            <div>
            <h3>Koka kategorija  noretumete prideti? </h3>
            <NavLink to={"/valstybine/"} >
            <button>valstybine</button></NavLink>
            <NavLink to= {"/privati"}>
            <button>privati</button></NavLink>            
            </div>            
           
        );
    }



}