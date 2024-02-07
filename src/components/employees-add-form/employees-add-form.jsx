/* eslint-disable react/prop-types */
import { useState } from 'react';
import { v4 as uniqId } from 'uuid'
import { Panel } from '../ui';
import { Button, Form } from 'react-bootstrap';
import { useToast } from '../../hooks/useToast';

export const EmployeesAddForm = ({ addUser }) => {
    const [userName, setUserName] = useState('');
    const [salary, setSalary] = useState('');
    const { success, error } = useToast();

    const validateName = () => {
        const nameRegex = /^[а-яА-Яa-zA-Z\s]+$/;
        if (!nameRegex.test(userName)) {
            error('Имя должно содержать только буквы и пробелы');
            return false;
        }
        return true;
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (userName === '' || salary === '') {
            error('Ошибка')
            return
        }
        if (!validateName()) {
            return;
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
        success('Сотрудник добавлен')
    }
    return (
        <Panel>
            <h3>Добавьте нового сотрудника</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Control type="text"
                    value={userName}
                    onChange={(evt) => setUserName(evt.target.value)}
                    placeholder="ФИО" />
                <br/>
                <Form.Control type="number"
                    value={salary}
                    onChange={(evt) => setSalary(evt.target.value)}
                    placeholder="З/П в $?" />
                <Button className='mt-2 ' type="submit" variant='dark' size="lg">Добавить</Button>
            </Form>
        </Panel>
    )
}
