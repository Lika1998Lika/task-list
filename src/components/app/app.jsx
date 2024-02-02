//import {  useState } from 'react';
import { v4 as uniqId } from 'uuid'
import { AppInfo } from '../app-info/app-info'
import { SearchPanel } from '../search-panel/search-panel';
import { AppFilter } from '../app-filter/app-filter';
import EmployeesList from '/src/components/employees-list/employees-list/';
import { EmployeesAddForm } from '../employees-add-form/employees-add-form'

import { Container } from 'react-bootstrap';
import { useState } from 'react';
import { Panel } from '../ui';

export const App = () => {
  const [data, setData] = useState([{
    id: uniqId(),
    name: 'Anzhelika Vanuyto',
    salary: '3000',
    increased: false,
    term: false,
  },
  {
    id: uniqId(),
    name: 'Anzhelika Vanuyto',
    salary: '3000',
    increased: true,
    term: true,
  }
  ]);

  const toggleIncrease = (id) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        return { ...item, increased: !item.increased }
      }
      return item
    })
    setData(newData)
  };

  const onDelete = (id) => {
    const newData = data.filter((item) => item.id !== id)
    setData(newData)
  }
  const toggleTerm = (id) => {
    const newData = data.map(item => {
      if (item.id === id) {
        return { ...item, term: !item.term }
      }
      return item;
    })
    setData(newData);
  }

  const userCount = {
    total: data.length,
    inc: data.filter(item => item.increased).length
  }

  return (
    <Container className="app">
      <div className='mt-3'>

        <AppInfo userCount={userCount}/>
      </div>

      <div className="mt-3">
        <Panel>
          <SearchPanel />
          <div className='mt-1'>
            <AppFilter />
          </div>
        </Panel>
      </div>
      {
        data.length > 0 ? (
          <div className='mt-3'>
          <EmployeesList data={data} toggleIncrease={toggleIncrease} onDelete={onDelete} toggleTerm={toggleTerm} />
        </div>
        ) : <p className='lead text-center mt-3'>Сотрудников нет</p>
      }

      <div className='mt-3'>
        <EmployeesAddForm />
      </div>

    </Container>
  );
}