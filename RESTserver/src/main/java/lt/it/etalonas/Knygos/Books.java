package lt.it.etalonas.Knygos;

import lt.it.etalonas.KnyguInstitucijos.Institucija;

import javax.persistence.*;
import java.util.List;

@Entity
public class Books {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private  long id;

    @Column(unique = true)
    private String name;

    @Column
    private String author;

    @Column
    private int pages;

    @Column
    private  String image;

    @ManyToMany
    @JoinTable(name = "Institucija_Books",joinColumns = @JoinColumn(name = "Books_ID"),
    inverseJoinColumns = @JoinColumn(name = "Institucija_ID"))
    public List<Institucija> institucija;

    public Books() {
    }

    public Books(String name, String author, int pages, String image) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.image = image;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public int getPages() {
        return pages;
    }

    public void setPages(int pages) {
        this.pages = pages;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
