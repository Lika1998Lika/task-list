/* eslint-disable react/prop-types */
import './search-panel.css';
import { Component } from 'react';
export class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }            
    }
    onUpdateSearch2 = (evt) => {
        const term = evt.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term) //приходит из другого компонента app
    }
    render () {
        return (
            <input type="text"
                    className="form-control search-input"
                    placeholder="Найти сотрудника"
                    value={this.state.term}
                    onChange={this.onUpdateSearch2}/>
        )
    }
}
