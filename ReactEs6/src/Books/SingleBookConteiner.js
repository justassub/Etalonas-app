import React from 'react';
import axios from '../../node_modules/axios';
import {SingleBookList} from './SingleBookList'


export class SingleBookConteiner extends React.Component {
    constructor(props) {
        super(props);
        this.state = { books: []};
    }
    componentWillMount = () => {
        axios.get('http://localhost:8082/etalonas-app/books/'+this.props.match.params.id)
            .then((response) => {
               
                
                this.setState({ books: response.data });
                
            })
            .catch((error) => {
                console.log(error);
            });

    }

    render() {
       
        return <SingleBookList books={this.state.books}  />
    }
}