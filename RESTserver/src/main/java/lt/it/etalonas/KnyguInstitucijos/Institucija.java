package lt.it.etalonas.KnyguInstitucijos;

import javax.persistence.*;

@Entity
public class Institucija {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column
    private String name;

    @Column
    private String image;

    @Column
    private String tipas;

    @Column
    private String kategorija;

    @Column
    private String kamSkirta;

    @Column
    private String kokiuKnygu;

    @Column
    private String archyvoUzdarumas;

    public void setKamSkirta(String kamSkirta) {
        this.kamSkirta = kamSkirta;
    }

    public void setKokiuKnygu(String kokiuKnygu) {
        this.kokiuKnygu = kokiuKnygu;
    }

    public void setArchyvoUzdarumas(String archyvoUzdarumas) {
        this.archyvoUzdarumas = archyvoUzdarumas;
    }

    public String getKamSkirta() {
        return kamSkirta;
    }

    public String getKokiuKnygu() {
        return kokiuKnygu;
    }

    public String getArchyvoUzdarumas() {
        return archyvoUzdarumas;
    }

    public Institucija() {
    }

    public Institucija(String name, String image, String tipas, String kategorija, String kamSkirta, String kokiuKnygu, String archyvoUzdarumas) {
        this.name = name;
        this.image = image;
        this.tipas = tipas;
        this.kategorija = kategorija;
        this.kamSkirta = kamSkirta;
        this.kokiuKnygu = kokiuKnygu;
        this.archyvoUzdarumas = archyvoUzdarumas;
    }

    public Institucija(String name, String image, String tipas, String kategorija) {
        this.name = name;
        this.image = image;
        this.tipas = tipas;
        this.kategorija = kategorija;
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

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getTipas() {
        return tipas;
    }

    public void setTipas(String tipas) {
        this.tipas = tipas;
    }

    public String getKategorija() {
        return kategorija;
    }

    public void setKategorija(String kategorija) {
        this.kategorija = kategorija;
    }
}
