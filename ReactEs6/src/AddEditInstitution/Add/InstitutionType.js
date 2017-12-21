import React from 'react';
import {NavLink} from 'react-router-dom';
export class InstitutionType extends React.Component  {    
    render(){
        return(
            <div>
            <h3>Koki punkta noretumete prideti? </h3>
            <NavLink to={"/add/biblioteka"} >
            <button>Biblioteka</button></NavLink>
            <NavLink to= {"add/archyvas"}>
            <button>Knygynas</button></NavLink>
            <NavLink to ={"add/nuoma"}>
            <button> Knygu Nuoma</button></NavLink>
            <NavLink to ={"add//Archyvas"}>
            <button> Knygu Archyvas</button></NavLink>
            </div>            
           
        );
    }



}