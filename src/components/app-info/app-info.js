import './app-info.css';

const AppInfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании Hamlet</h1>
            <h2>Общее Число сотрудников: {employees}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    );
}

export default AppInfo;