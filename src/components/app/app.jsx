//import {  useState } from 'react';
//import { v4 as uniqId } from 'uuid'
import {AppInfo} from '../app-info/app-info'
import { SearchPanel } from '../search-panel/search-panel';
import { AppFilter } from '../app-filter/app-filter';
import  EmployeesList  from '/src/components/employees-list/employees-list/';
import {EmployeesAddForm} from '../employees-add-form/employees-add-form'

import './app.css';
import { Container } from 'react-bootstrap';

export const App = () => {
  return (
    <Container className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList/>
        <EmployeesAddForm/>
    </Container>
  );
}