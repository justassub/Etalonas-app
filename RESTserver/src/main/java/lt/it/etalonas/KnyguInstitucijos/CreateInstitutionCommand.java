package lt.it.etalonas.KnyguInstitucijos;

public class CreateInstitutionCommand {
    private String name;
    private String image;
    private String tipas;
    private String kategorija;
    private String archyvoUzdarumas;
    private String kokiuKnygu;
    private String kamSkirta;

    public String getArchyvoUzdarumas() {
        return archyvoUzdarumas;
    }

    public void setArchyvoUzdarumas(String archyvoUzdarumas) {
        this.archyvoUzdarumas = archyvoUzdarumas;
    }

    public String getKokiuKnygu() {
        return kokiuKnygu;
    }

    public void setKokiuKnygu(String kokiuKnygu) {
        this.kokiuKnygu = kokiuKnygu;
    }

    public String getKamSkirta() {
        return kamSkirta;
    }

    public void setKamSkirta(String kamSkirta) {
        this.kamSkirta = kamSkirta;
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
