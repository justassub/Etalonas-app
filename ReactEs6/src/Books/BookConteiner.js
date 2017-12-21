import React from 'react';
import axios from '../../node_modules/axios';
import {BookList} from './BookList'


export class BookConteiner extends React.Component {
    constructor(props) {
        super(props);
        this.state = { books: []};
    }
    componentWillMount = () => {
        axios.get('http://localhost:8082/etalonas-app/books')
            .then((response) => {
                if (response.data.length<2){
                    alert("Pridekite daugiau knygu ,prasau")
                }else{
                this.setState({ books: response.data });
                }
            })
            .catch((error) => {
                console.log(error);
            });

    }

    render() {
       
        return <BookList books={this.state.books}  />
    }
}