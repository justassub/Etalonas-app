import React from 'react';
import {SingleBookComponent} from './SingleBookComponent';


export var SingleBookList = (props) => {
    const books = props.books.map((book,index) => {
        
         var bookCom=   <SingleBookComponent     
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