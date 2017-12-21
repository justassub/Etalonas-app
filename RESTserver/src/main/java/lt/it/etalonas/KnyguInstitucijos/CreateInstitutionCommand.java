package lt.it.etalonas.KnyguInstitucijos;

public class CreateInstitutionCommand {
    private String name;
    private String image;
    private String tipas;
    private String kategorija;

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
