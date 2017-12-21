package lt.it.etalonas.Controllers;

import lt.it.etalonas.KnyguInstitucijos.CreateInstitutionCommand;
import lt.it.etalonas.KnyguInstitucijos.Institucija;
import lt.it.etalonas.Services.InstitutionServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/institutions")
@CrossOrigin(origins = "http://localhost:3000")
public class InstitutionController {

    @Autowired
    private final InstitutionServices institutionServices;

    @Autowired
    public InstitutionController(InstitutionServices institutionServices) {
        this.institutionServices = institutionServices;
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Institucija> getInstitutions() {
        return institutionServices.getInstitutions();
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.GET)
    public List<Institucija> getOneInstitution(@PathVariable long id) {
        return institutionServices.getOneInstitution(id);

    }

    @RequestMapping(path = "/addinstitution/biblioteka/{kategorija}/{kamSkirta}", method = RequestMethod.POST)
    public void addInstitutionBiblioteka(@PathVariable String kategorija ,@PathVariable String kamSkirta ,@RequestBody  CreateInstitutionCommand cic) {
        institutionServices.addInstitutionBiblioteka(kategorija,kamSkirta,cic);
    }

    @RequestMapping(path = "/addinstitution/knygynas/{kategorija}/{kamSkirta}", method = RequestMethod.POST)
    public void addInstitutionKnygynas( @PathVariable String kategorija,@PathVariable String kamSkirta,@RequestBody CreateInstitutionCommand cic) {
        institutionServices.addInstitutionKnygynas( kategorija,kamSkirta ,cic);
    }
    @RequestMapping(path = "/addinstitution/nuoma/{kategorija}/{kokiuKnygu}", method = RequestMethod.POST)
    public void addInstitutionNuoma(@PathVariable String kategorija ,@PathVariable String kokiuKnygu,@RequestBody CreateInstitutionCommand cic) {
        institutionServices.addInstitutionNuoma(kategorija ,kokiuKnygu,cic);
    }
    @RequestMapping(path = "/addinstitution/archyvas/{kategorija}/{archyvoUzdarumas}", method = RequestMethod.POST)
    public void addInstitutionArchyvas(@PathVariable String kategorija ,@PathVariable String archyvoUzdarumas,@RequestBody CreateInstitutionCommand cic) {
        institutionServices.addInstitutionArchyvas(kategorija ,archyvoUzdarumas,cic);
    }
    @RequestMapping(path = "/edit/{id}",method = RequestMethod.PUT)
    public void editInstitution(@PathVariable Long id, @RequestBody CreateInstitutionCommand cic){
        institutionServices.editInstitution(id , cic);
    }
    @RequestMapping(path = "/remove/{id}",method = RequestMethod.DELETE)
    public  void removeInstitution(@PathVariable Long id){
        institutionServices.delete(id);
    }

    @RequestMapping(path = "/find/{name}",method = RequestMethod.GET)
    public List<Institucija> findByName(@PathVariable String name){
        return institutionServices.findbyName(name);
    }

}