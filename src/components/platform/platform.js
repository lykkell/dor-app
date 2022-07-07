import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Platform = () =>  {
    const { t } = useTranslation();

    return (
        <div className="container">
            <h1>{t('Platform')}</h1>
            <div className="d-flex flex-row">
                <div class="d-flex flex-column">
                        {/* <h2 >{t('#')}</h2>
                            <input>1</input>
                        <h2 >{t('Certificate')}ID</h2>
                            <input>@mdoHG657N</input> */}
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
                <input/>
                <input/>
                <input/>
                <input/>
                <input/>
                <input/>
                <input/>
                <input/>
                </h3>
            </div>
            <div className="navbar navbar-dark bg-light">
                <Link to='/' className="btn btn-primary">{t('Dashboard')}</Link>
                <button className="btn btn-success btn-lg">{t('Submit')}</button>
            </div>
            
        </div>
    )
}

export default Platform