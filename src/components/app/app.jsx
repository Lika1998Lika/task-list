import { AppInfo } from '../app-info/app-info'
import { SearchPanel } from '../search-panel/search-panel';
import { AppFilter } from '../app-filter/app-filter';
import EmployeesList from '/src/components/employees-list/employees-list/';
import { EmployeesAddForm } from '../employees-add-form/employees-add-form'

import { Container, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Panel } from '../ui';
import { getUsers, addUser, deleteUser, updateUser } from '../../services/userService';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('all'); 
  const [search, setSearch] = useState('');
  const [louding, setLoading] = useState(false);

  const handleChangeFilter = (filterValue) => {
    setFilter(filterValue)
  }
   
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
  
      try {
        const users = await getUsers(filter);
        setData(users);
      } catch (error) {
        console.error('Ошибка загрузки данных', error);
      } finally {
        setLoading(false);
      }
    }
  
    fetchUsers();
  }, [filter]);

  const updateState = async () => {
    getUsers(filter)
      .then((users) => setData(users));
  };

  const addUserForm = async (user) => {
    await addUser(user)
    updateState();
  }

  const toggleIncrease = async (id) => {
    const user = data.find(item => item.id === id)
    user.increased = user.increased === 'approved' ? 'not-approved' : 'approved';
    await updateUser(id, user)
    updateState();
  };

  const onDelete = async (id) => {
    await deleteUser(id)
    updateState();
  }

  const userCount = {
    total: data.length,
    inc: data.filter(item => item.increased === "approved").length
  }

  const filteredData = data.filter((employee) =>
  employee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className="w-75">
      <div className='mt-5'>
        <AppInfo userCount={userCount} />
      </div>
      <div className="mt-3">
        <Panel>
          <SearchPanel
            search={search}
            setSearch={setSearch}
          />
          <div className='mt-2'>
            <AppFilter setFilter={handleChangeFilter} filter={filter} />
          </div>
        </Panel>
      </div>
      {
        louding ? (
          <Panel> 
            <Spinner animation="border" variant="light" />
          </Panel>
        ) : data.length > 0 ? (
          <div className='mt-3'>
            <EmployeesList 
              data={search.length === 0 ? data 
              : filteredData } 
              toggleIncrease={toggleIncrease} 
              onDelete={onDelete} 
              updateState={updateState}
              />
          </div>
        ) : <p className='lead text-center mt-3'>Сотрудников нет</p>
      }
      <div className='mt-3'>
        <EmployeesAddForm addUser={addUserForm} />
      </div>
      <ToastContainer 
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="dark"
      />
    </Container>
  );
}