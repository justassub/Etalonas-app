import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {styles} from '../styles';

const colorStyle={
    color:styles.color
};
   


export class SingleBookComponent extends React.Component  {    
    removeBook=()=> {
        axios.delete('http://localhost:8082/etalonas-app/books/delete/'+this.props.id)                
    }
   
render(){
    
    return (
       <div className="col-xs-12 col-sm-4 text-center">       
                    <div className="thumbnail">    
                    <img src={this.props.image}/>                              
                    <p>{this.props.id}</p>
                    <p>{this.props.name}</p>  
                    <p>{this.props.author} </p>                              
                    <p>{this.props.pages} pages </p>                                         
                   <button style={colorStyle} className="btn btn-default" onClick={this.removeBook}  >
                   REMOVE Book</button>
                </div>
            </div>
        );
    }

};