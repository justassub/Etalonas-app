import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {NavigationComponent} from './Navigation/NavigationComponent';
import { InstitutionConteiner } from './Institucijos/InstitutionConteiner';
import {InstitutionComponent} from './Institucijos/InstitutionComponent'
import {InstituionList} from './Institucijos/InstitutionList';
import { SingleConteiner } from './Institucijos/SingleConteiner';
import { InstitutionType } from './AddEditInstitution/Add/InstitutionType';
import { kategorija } from './AddEditInstitution/Add/kategorija'
import { EditConteiner } from './Edit/EditConteiner';
import {BookConteiner} from './Books/BookConteiner';
import { AddBookConteiner } from './AddBook/AddBookConteiner';
import { EditBook } from './AddBook/EditBook';
import {SingleBookConteiner} from './Books/SingleBookConteiner'


ReactDOM.render((

      <BrowserRouter>
          <div className="container">
              <NavigationComponent />
              <Switch>
              <Route exact path="/" component={InstitutionConteiner} />
              <Route exact path="/institutions/edit/:id" component={EditConteiner} />
              <Route exact path="/institucija" component={InstitutionConteiner} />
              <Route exact path="/institutions/:id" component={SingleConteiner} />
              <Route exact path="/addinstitucija/" component={kategorija} />
              <Route exact path="/privati/" component={InstitutionType} />
              <Route exact path="/valstybine/" component={InstitutionType} />
              <Route exact path="/books/" component={BookConteiner} />
              <Route exact path="/addBook" component={AddBookConteiner}/>
              <Route exact path="/books/edit/:id" component={EditBook}/>
              <Route exact path="/books/:id" component={SingleBookConteiner}/>

              </Switch>
          </div>
      </BrowserRouter> ),
document.getElementById('root'));