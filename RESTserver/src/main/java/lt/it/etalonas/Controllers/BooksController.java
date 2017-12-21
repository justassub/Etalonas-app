package lt.it.etalonas.Controllers;


import lt.it.etalonas.Knygos.Books;
import lt.it.etalonas.Knygos.CreateBookCommand;
import lt.it.etalonas.Services.BooksServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.awt.print.Book;
import java.util.List;

@RestController
@RequestMapping(value = "/books")
@CrossOrigin(origins = "http://localhost:3000")
public class BooksController {
    @Autowired
    private final BooksServices booksServices;
    @Autowired
    public BooksController(BooksServices bookServices) {
        this.booksServices=bookServices;
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Books> getAllBooks(){
        return booksServices.getBooks();
    }

    @RequestMapping(path = "/{id}",method = RequestMethod.GET)
    public List<Books> getOneBookAsList(@PathVariable Long id){
        return booksServices.getBook(id);
    }
    @RequestMapping(path = "/delete/{id}",method = RequestMethod.DELETE)
    public void deleteBook(@PathVariable long id){
        booksServices.delete(id);
    }
    @RequestMapping(path = "/add",method = RequestMethod.POST)
    public  void addBook(@RequestBody CreateBookCommand cbc){
        booksServices.addBook(cbc);
    }
    @RequestMapping(path = "/edit/{id}",method = RequestMethod.PUT)
    public void editBook(@PathVariable Long id,@RequestBody CreateBookCommand cbc){
        booksServices.editBook(id,cbc);
    }



}
