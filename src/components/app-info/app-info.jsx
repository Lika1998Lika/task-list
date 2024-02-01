import "./app-info.css";
/* eslint-disable react/prop-types */

export const AppInfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников:{employees}</h2>
            <h2>Премию получат:{increased}</h2>
        </div>
    )
}

