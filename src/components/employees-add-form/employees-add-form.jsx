/* eslint-disable react/prop-types */
import { useState } from 'react';
import { v4 as uniqId } from 'uuid'
import { Panel } from '../ui';
import { Button, Form } from 'react-bootstrap';

export const EmployeesAddForm = ({ addUser }) => {
    const [userName, setUserName] = useState('');
    const [salary, setSalary] = useState('');
    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (userName === '' || salary === '') {
            return
        }
        const user = {
            id: uniqId(),
            name: userName,
            salary: Number(salary),
            increased: "not-approved",
            term: false,
        }

        addUser(user)
        setUserName('')
        setSalary('')
    }
    return (
        <Panel>
            <h3>Добавьте нового сотрудника</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Control type="text"
                    value={userName}
                    onChange={(evt) => setUserName(evt.target.value)}
                    placeholder="Как его зовут?" />
                <Form.Control type="number"
                    value={salary}
                    onChange={(evt) => setSalary(evt.target.value)}
                    placeholder="З/П в $?" />

                <Button className='mt-2 ' type="submit" variant='dark' size="lg">Добавить</Button>
            </Form>
        </Panel>
    )
}
