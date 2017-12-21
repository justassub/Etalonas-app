import {SingleList} from './SingleList'
import React from 'react';
import axios from '../../node_modules/axios';
import { SingleComponent } from './SingleComponent';


export class SingleConteiner extends React.Component {
    constructor(props) {
        super(props);
        this.state = { institutions: []};
    }
    componentWillMount = () => {
        axios.get('http://localhost:8082/etalonas-app/institutions/'+this.props.match.params.id)
            .then((response) => {
                this.setState({ institutions: response.data });
            })
            .catch((error) => {
                console.log(error);
            });

    }

    render() {
       
        return <SingleList institutions={this.state.institutions}  />
    }
}