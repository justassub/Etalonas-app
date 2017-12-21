import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

export var EditComponent =(props)=>{
   
    return(
      <div>             
         
        <form >
            <div>
             
                <p>name?</p>
                <div>
                <input type="text" className="form-control" id="name" placeholder="Name" value={props.name}
                           onChange={props.onChange}/>
                </div>
            </div>
            

            <div>
                <p>Image</p>
                <div>
                <input type="text" className="form-control" id="image" placeholder="Image" value={props.image}
                           onChange={props.onChange}/>
                </div>
            </div>
            
            
            <div>
                <p>tipas(biblioteka , knigynas ,nuoma ,archyvas) </p>
                <div>
                <input type="text" className="form-control" id="tipas" placeholder="tipas" value={props.tipas}
                           onChange={props.onChange}/>
                </div>
            </div>
            <div>
                <p>kategorija ? Valstybine ar privati</p>
                <div>
                <input type="text" className="form-control" id="kategorija" placeholder="kategorija" value={props.kategorija}
                           onChange={props.onChange}/>
                </div>
            </div>
            <div>
                <p>Jei archyvas - koks uzdarumas</p>
                <div>
                <input type="text" className="form-control" id="archyvoUzdarumas" placeholder="ArchyvoUzdarumas" value={props.archyvoUzdarumas}
                           onChange={props.onChange}/>
                </div>
            </div>
            <div>
                <p>Jei biblioteka ar knygynas  -vaiku ar suaugusiu</p>
                <div>
                <input type="text" className="form-control" id="kamSkirta" placeholder="kamSkirta" value={props.kamSkirta}
                           onChange={props.onChange}/>
                </div>
            </div>
            <div>
                <p>Jei knygu archyvas  -senu ar nauju?</p>
                <div>
                <input type="text" className="form-control" id="kokiuKnygu" placeholder="kokiuKnygu" value={props.kokiuKnygu}
                           onChange={props.onChange}/>
                </div>
            </div>

           

            <div >
                <div >
                  
                    <button type="submit"  onClick={props.onClick}>Save</button>
                    <button type="submit"  onClick={props.history.goBack}>Cancel</button>
                </div>
            </div>
</form>
</div>




    )
}