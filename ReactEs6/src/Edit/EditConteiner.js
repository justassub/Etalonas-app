import React from 'react';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { EditComponent } from './EditComponent';

export class EditConteiner extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            image: '',
            tipas: '',    
            kategorija:'',
            archyvoUzdarumas: '',
            kamSkirta: '',
            kokiuKnygu:'',          
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
            const outputInstitution = {
            name: this.state.name,
            image: this.state.image,
            tipas: this.state.tipas,         
            kategorija: this.state.kategorija,
            archyvoUzdarumas: this.state.archyvoUzdarumas,
            kamSkirta: this.state.kamSkirta, 
            kokiuKnygu:this.state.kokiuKnygu   
    };
    
    axios.put("http://localhost:8082/etalonas-app/institutions/edit/"+this.props.match.params.id, outputInstitution)
        .then((response) => {
            this.setState( {
                name:'',
                image: '',
                tipas: '',    
                kategorija:'',
                archyvoUzdarumas: '',
                kamSkirta: '',
                kokiuKnygu:'',  
                
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

render() {
    return (
        <div>
            
            <EditComponent
            name= {this.state.name}
            image= {this.state.image}
            tipas={this.state.tipas}      
            kategorija= {this.state.kategorija}
            archyvoUzdarumas= {this.state.archyvoUzdarumas}
            kamSkirta= {this.state.kamSkirta} 
            kokiuKnygu={this.state.kokiuKnygu}
            onChange={this.handleChange}
            onClick={this.handleClick}
            history={this.state.history}
            />
        </div>
    );
}
}