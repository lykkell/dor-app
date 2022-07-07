import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import addCertificate from "./add-certificate";

const Certificate = () =>  {
    const { t } = useTranslation();

    return (
        <div className="container">
            <h1>{t('Certificate')}</h1>
            <div className="d-flex flex-row">
                <div class="d-flex flex-column">
                    <h3>{t('CrtNum')}:</h3>
                    <h3>{t('CrtData')}:</h3>
                    <h3>{t('CrtStatus')}:</h3>
                    <h3>{t('CrtName')}:</h3>
                    <h3>{t('CrtType')}:</h3>
                    <h3>{t('Platform')}:</h3>
                    <h3>{t('Points')}:</h3>
                    <h3>{t('Username')}:</h3>
                </div>
                <h3 className="d-flex flex-column">
                {/* <input onChange={handleChange} name='crtnum' value='input.crtnum' autoComplete="off"/>
                <input onChange={handleChange} name='CrtData' value='input.CrtData' autoComplete="off"/>
                <input onChange={handleChange} name='CrtStatus' value='input.CrtStatus' autoComplete="off"/>
                <input onChange={handleChange} name='CrtName' value='input.CrtName' autoComplete="off"/>
                <input onChange={handleChange} name='CrtType' value='input.CrtType' autoComplete="off"/>
                <input onChange={handleChange} name='Platform' value='input.Platform' autoComplete="off"/>
                <input onChange={handleChange} name='Points' value='input.Points' autoComplete="off"/>
                <input onChange={handleChange} name='Username' value='input.Username' autoComplete="off"/> */}
                </h3>
            </div>
            <div className="navbar navbar-dark bg-light">
                <Link to='/' className="btn btn-primary">{t('Dashboard')}</Link>
                <button onClick={addCertificate} className="btn btn-success btn-lg" autoComplete="off">{t('Submit')}</button>
            </div>
            
        </div>
    )
}

export default Certificate