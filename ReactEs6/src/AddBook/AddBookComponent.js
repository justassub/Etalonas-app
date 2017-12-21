import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

export var AddBookComponent =(props)=>{
   
    return(
      <div>             
         
        <form >
            <div>
             
                <p>name of the book</p>
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
                <p>Author of the book</p>
                <div>
                <input type="text" className="form-control" id="author" placeholder="Author" value={props.Author}
                           onChange={props.onChange}/>
                </div>
            </div>
            <div>
                <p>pages</p>
                <div>
                <input type="text" className="form-control" id="pages" placeholder="pages" value={props.pages}
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