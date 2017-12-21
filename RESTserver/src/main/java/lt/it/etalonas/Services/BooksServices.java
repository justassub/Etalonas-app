package lt.it.etalonas.Services;

import lt.it.etalonas.Controllers.BooksController;
import lt.it.etalonas.Knygos.Books;
import lt.it.etalonas.Knygos.CreateBookCommand;
import lt.it.etalonas.Repositories.BooksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;

@Service
public class BooksServices {
    @Autowired
    BooksRepository booksRepository;

    @Transactional
    public List<Books> getBooks(){
        return  booksRepository.findAll();
    }
    @Transactional
    public  List<Books> getBook(Long id){
        Books book = booksRepository.findOne(id);
        List<Books> ListForOneBook = new ArrayList<>();
        ListForOneBook.add(book);
        return  ListForOneBook;
    }
    @Transactional
    public void delete(Long id){
        booksRepository.delete(id);
    }
    @Transactional
    public  void addBook(@RequestBody CreateBookCommand cbc){
        Books newBook = new Books(cbc.getName(),cbc.getAuthor(),cbc.getPages(),cbc.getImage());
        booksRepository.save(newBook);
    }

    @Transactional
    public  void editBook(Long id, @RequestBody CreateBookCommand cbc){
        Books findBook = booksRepository.findOne(id);
        findBook.setAuthor(cbc.getAuthor());
        findBook.setImage(cbc.getImage());
        findBook.setName(cbc.getName());
        findBook.setPages(cbc.getPages());
        booksRepository.save(findBook);
    }


}
