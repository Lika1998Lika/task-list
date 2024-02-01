/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import "./app-filter.css";
import cn from 'classnames'

export const AppFilter  = ({filter, onFilterSelect}) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'moreThen1000', label: 'З/П больше 1000$'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = filter === name;
        const classBtn = cn('btn', {
            'btn-light': active,
            'btn-outline-light': !active,
        })
        return (
            <button type="button"
            className={classBtn}
            key={name}
            onClick={() => onFilterSelect(name)}>
                {label}
    </button>
        )
    })
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }

