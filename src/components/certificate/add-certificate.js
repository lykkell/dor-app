import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AddCertificate = () => {
    const { t } = useTranslation();
    const [input, setInput] = useState({
        CrtName: '',
        CrtData: '',
        Platform: '',
        Points: '',
        CrtType: '',
        CrtStatus: '',
        Username: ''
    })

    const handleChange = (event) => {
        const {name, value} = event.target;
    
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log(input);
    }

    return (
            <div className="container">test
                <h1>{t('New certificate, input data...')}</h1>
                <div className="d-flex flex-row">
                    <div className="d-flex flex-column">
                        <h3>{t('CrtNum')}:</h3>
                        <h3>{t('CrtData')}:</h3>
                        <h3>{t('CrtStatus')}:</h3>
                        <h3>{t('CrtName')}:</h3>
                        <h3>{t('CrtType')}:</h3>
                        <h3>{t('Platform')}:</h3>
                        <h3>{t('Points')}:</h3>
                        <h3>{t('Username')}:</h3>
                    </div>
                    <form>
                        <h3 className="d-flex flex-column">
                        <input onChange={handleChange} name='crtnum' value={input.crtnum} autoComplete="off"/>
                        <input onChange={handleChange} name='CrtData' value={input.CrtData} autoComplete="off" placeholder="dd.mm.yy"/>
                        <input onChange={handleChange} name='CrtStatus' value={input.CrtStatus} autoComplete="off" placeholder="true/false"/>
                        <input onChange={handleChange} name='CrtName' value={input.CrtName} autoComplete="off"/>
                        <input onChange={handleChange} name='CrtType' value={input.CrtType} autoComplete="off"/>
                        <input onChange={handleChange} name='Platform' value={input.Platform} autoComplete="off"/>
                        <input onChange={handleChange} name='Points' value={input.Points} autoComplete="off" placeholder="1-30"/>
                        <input onChange={handleChange} name='Username' value={input.Username} autoComplete="off" placeholder="Petrenko P.P."/>
                        </h3>
                    </form>
                    
                </div>
                <div className="navbar navbar-dark bg-light">
                    <Link to='/' className="btn btn-primary">{t('Dashboard')}</Link>
                    <button onClick={handleClick} className="btn btn-success btn-lg" autoComplete="off">{t('Submit')}</button>
                </div>
                
            </div>
        )
    }
export default AddCertificate