import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

   


export class SingleComponent extends React.Component  {    
    
   
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
                  
                   
                </div>
            </div>
        );
    }

};