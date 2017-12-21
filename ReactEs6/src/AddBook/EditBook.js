import React from 'react';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import {AddBookComponent} from './AddBookComponent'

export class EditBook extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            image: '',           
            author: '',
           
            pages:0,          
            history: props.history
        }
    }
    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.id; // iš input tag'o gaunam būsenos objekto raktą reikšmei nustatyti
        this.setState({
                [name]: value
            }
        );
};

        handleClick = (event) => {
            const outputBook = {
            name: this.state.name,
            image: this.state.image,
            author: this.state.author,         
            pages: this.state.pages
             
    };
    
    axios.put("http://localhost:8082/etalonas-app/books/edit/"+this.props.match.params.id, outputBook)
        .then((response) => {
            this.setState( {
                name:'',
                image: '',           
                author: '',               
                pages:0,   
                
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

render() {
    return (
        <div>
            
            <AddBookComponent
            name= {this.state.name}
            image= {this.state.image}
            author={this.state.author}      
            pages= {this.state.pages}           
            onChange={this.handleChange}
            onClick={this.handleClick}
            history={this.state.history}
            />
        </div>
    );
}
}