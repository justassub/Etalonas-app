import {InstitutionList} from './InstitutionList'
import React from 'react';
import axios from '../../node_modules/axios';


export class InstitutionConteiner extends React.Component {
    constructor(props) {
        super(props);
        this.state = { institutions: []};
    }
    componentWillMount = () => {
        axios.get('http://localhost:8082/etalonas-app/institutions')
            .then((response) => {
                if (response.data.length<3){
                    alert("Pridekite daugiau instituciju prasau")
                }else{
                this.setState({ institutions: response.data });
                }
            })
            .catch((error) => {
                console.log(error);
            });

    }

    render() {
       
        return <InstitutionList institutions={this.state.institutions}  />
    }
}