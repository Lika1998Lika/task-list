// import './search-panel.css';

import { Form } from "react-bootstrap"

export const SearchPanel = () => {
    return (
            <Form.Control type="text"
                className="form-control"
                placeholder="Найти сотрудника" />
    )
}