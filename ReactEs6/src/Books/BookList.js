import React from 'react';
import {BookComponent} from './BookComponent';


export var BookList = (props) => {
    const books = props.books.map((book,index) => {
        
         var bookCom=   <BookComponent     
                key={index}   
                name={book.name}  
                id={book.id}
                image={book.image}   
                pages={book.pages}  
                author={book.author}
                   
                history={props.history}

            />;
            return (bookCom
            );
            
        
    });
    return (
        <div>
            {books}
        </div>
    );
};