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
              </Switch>
          </div>
      </BrowserRouter> ),
document.getElementById('root'));