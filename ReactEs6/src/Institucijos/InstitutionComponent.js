import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {styles} from '../styles';

const colorStyle={
    color:styles.color
};
   


export class InstitutionComponent extends React.Component  {    
    removeInstitution=()=> {
        axios.delete('http://localhost:8082/etalonas-app/institutions/remove/'+this.props.id)                
    }
    
   
render(){
    
    return (
       <div className="col-xs-12 col-sm-4 text-center">       
                    <div className="thumbnail">                                  
                    <p>{this.props.id}</p>
                    <p>{this.props.name}</p>  
                    <p>{this.props.tipas}</p>                                       
                    <p>{this.props.kategorija} </p>  
                    <p>{this.props.kamSkirta}</p> 
                    <p>{this.props.kokiuKnygu}</p> 
                    <p>{this.props.archyvoUzdarumas}</p>                  

                   
                       
                    <NavLink to={"/institutions/"+this.props.id}>  
                    <button  className="btn btn-default" onClick={this.getInstitution}  >
                    institution INFO</button></NavLink>
                    <NavLink to={"/institutions/edit/"+this.props.id}>  
                    <button  className="btn btn-default"  >
                   EDIT institution</button></NavLink>                                  
                   <button style={colorStyle} className="btn btn-default" onClick={this.removeInstitution}  >
                   REMOVE institution</button>
                </div>
            </div>
        );
    }

};