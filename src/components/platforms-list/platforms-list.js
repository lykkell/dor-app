import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PlfList = () =>  {
    const { t } = useTranslation();

    return (
        <div className="container">
             <div className="d-flex flex-row justify-content-between">
                <h2>List of platmorms</h2>
                <h2>{t('Username')}:{"user"}</h2>
            </div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">{t('#')}</th>
                    <th scope="col">{t('Platform')}ID</th>
                    <th scope="col">{t('Platform')}</th>
                    <th scope="col">Email</th>
                    <th scope="col">{t('Telefon')}</th>
                    <th scope="col">{t('Adress')}</th>
                    <th scope="col">{t('Status')}</th>
                    <th scope="col">{t('Liсense')}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>235657N</td>
                    <td>Traning platform</td>
                    <td>Platform@pl.gov</td>
                    <td>+38067 123 45 67</td>
                    <td>Kiyv</td>
                    <td>true</td>
                    <td>s2oWER5m</td>
                    </tr>
                </tbody>
                <div className="navbar navbar-dark bg-light justify-content-between">
                    <Link to='/' className="btn btn-primary">{t('Dashboard')}</Link>
                    <Link to='/platform' type='button' className="btn btn-success btn-lg">{t('Add new')}</Link>
                </div>
            </table>
        </div>
    )
}

export default PlfList