package lt.it.etalonas.Repositories;

import lt.it.etalonas.KnyguInstitucijos.Institucija;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InstitutionRepository extends JpaRepository<Institucija,Long> {
    List<Institucija> findAllByName(String name);

}
