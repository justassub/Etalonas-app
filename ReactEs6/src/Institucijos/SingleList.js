import React from 'react';
import {SingleComponent} from './SingleComponent';


export var SingleList = (props) => {
    const institutions = props.institutions.map((institution,index) => {
        
         var institutionCom=   <SingleComponent     
                key={index}   
                name={institution.name}  
                id={institution.id}
                image={institution.image}   
                tipas={institution.tipas}   
                 kategorija={institution.kategorija}  
                 kamSkirta={institution.kamSkirta} 
                 kokiuKnygu={institution.kokiuKnygu} 
                 archyvoUzdarumas=  {institution.archyvoUzdarumas}            
                
                
                history={props.history}

            />;
            return (institutionCom
            );
            
        
    });
    return (
        <div>
            {institutions}
        </div>
    );
};