import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CrtList = () =>  {
    const { t } = useTranslation();

    return (
        <div className="container">
            <div className="d-flex flex-row justify-content-between">
                <h2>List of certificates</h2>
                <h2>{t('Username')}:{"user"}</h2>
            </div>
            <table class="table d-flex flex-row justify-content-center">
                <div>
                <div class="table text-center ">
                    <thead>
                        <tr>
                            <th scope="col">{t('#')}</th>
                            <th scope="col">{t('Certificate')}ID</th>
                            <th scope="col">{t('CrtNum')}</th>
                            <th scope="col">{t('CrtData')}</th>
                            <th scope="col">{t('CrtStatus')}</th>
                            <th scope="col">{t('CrtName')}</th>
                            <th scope="col">{t('CrtType')}</th>
                            <th scope="col">{t('Platform')}</th>
                            <th scope="col">{t('Points')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>235657N</td>
                            <td>234-F</td>
                            <td>01/01/2021</td>
                            <td>true</td>
                            <td>11-13 weeks</td>
                            <td>ultrasound</td>
                            <td>Traning platform</td>
                            <td>10</td>
                        </tr>
                    </tbody>
                    <div className="navbar navbar-dark bg-light justify-content-between">
                        <Link to='/' className="btn btn-primary">{t('Dashboard')}</Link>
                        <Link to='/certificate/add' type='button' className="btn btn-success btn-lg">{t('Add new')}</Link>
                    </div>
                </div>
                </div>
            </table>
        </div>
    )
}

export default CrtList