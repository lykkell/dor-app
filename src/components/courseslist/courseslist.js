import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CoursesList = () =>  {
    const { t } = useTranslation();

    return (
        <div className="container">
            <div className="d-flex flex-row justify-content-between">
                <h2>List of courses</h2>
                <h2>{t('Username')}:{"user"}</h2>
            </div>
            <table class="d-flex flex-row">
            <div class="table">
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
                    <Link to='/course' type='button' className="btn btn-success btn-lg">{t('Add new')}</Link>
                </div>
            </div>
        </table>
        </div>
    )
}

export default CoursesList