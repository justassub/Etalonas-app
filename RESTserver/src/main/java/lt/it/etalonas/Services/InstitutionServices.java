package lt.it.etalonas.Services;

import lt.it.etalonas.KnyguInstitucijos.CreateInstitutionCommand;
import lt.it.etalonas.KnyguInstitucijos.Institucija;
import lt.it.etalonas.Repositories.InstitutionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;

@Service
public class InstitutionServices {

    @Autowired
    InstitutionRepository institutionRepository;

    @Transactional
    public List<Institucija> getInstitutions(){
        return institutionRepository.findAll();
    }

    @Transactional
    public  List<Institucija> getOneInstitution(Long id){
        Institucija institucija= institutionRepository.findOne(id);
        List<Institucija> singleInstitution = new ArrayList<>();
        singleInstitution.add(institucija);
        return  singleInstitution;
    }

    @Transactional
    public void addInstitutionBiblioteka(String kategorija , String kamSkirta ,@RequestBody CreateInstitutionCommand cic){

        Institucija newInstitucija=new Institucija(cic.getName(),cic.getImage(),"biblioteka",kategorija,kamSkirta,"visu knygu","-");
        institutionRepository.save(newInstitucija);
    }

    @Transactional
    public void addInstitutionKnygynas(String kategorija ,String kamSkirta, @RequestBody CreateInstitutionCommand cic){
        Institucija newInstitucija = new Institucija(cic.getName(),cic.getImage(),"knygynas",kategorija,kamSkirta,"visu knygu","-");
        institutionRepository.save(newInstitucija);
    }
    @Transactional
    public void addInstitutionNuoma(String kategorija ,String kokiuKnygu, @RequestBody CreateInstitutionCommand cic){
        Institucija newInstitucija = new Institucija(cic.getName(),cic.getImage(),"knygu nuoma",kategorija,"visiems",kokiuKnygu,"-");
        institutionRepository.save(newInstitucija);
    }
    @Transactional
    public void addInstitutionArchyvas(String kategorija ,String archyvoUzdarumas, @RequestBody CreateInstitutionCommand cic){
        Institucija newInstitucija = new Institucija(cic.getName(),cic.getImage(),"archyvas",kategorija,"visiems","visu",archyvoUzdarumas);
        institutionRepository.save(newInstitucija);
    }

    @Transactional
    public void editInstitution(Long id , @RequestBody CreateInstitutionCommand cic){
        Institucija editInstitucija = institutionRepository.findOne(id);
        editInstitucija.setImage(cic.getImage());
        editInstitucija.setName(cic.getName());
        editInstitucija.setTipas(cic.getTipas());
        editInstitucija.setKategorija(cic.getKategorija());
        institutionRepository.save(editInstitucija);
    }
    @Transactional
    public  void delete(long id){
        institutionRepository.delete(id);
    }
}
