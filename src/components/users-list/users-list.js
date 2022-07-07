import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const UsersList = () =>  {
    const { t } = useTranslation();

    return (
        <div className="container">
            <div className="d-flex flex-row justify-content-between">
                <h2>List of users</h2>
                <h2>{t('Username')}:{"user"}</h2>
            </div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">{t('#')}</th>
                    <th scope="col">{t('User')}ID</th>
                    <th scope="col">{t('SecondName')}</th>
                    <th scope="col">{t('FirstName')}</th>
                    <th scope="col">{t('SurName')}</th>
                    <th scope="col">{t('UserName')}</th>
                    <th scope="col">{t('Login')}</th>
                    <th scope="col">{t('Password')}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>@mdoHG657N</td>
                    <td>Petrenko</td>
                    <td>Petro</td>
                    <td>Petrovich</td>
                    <td>Petrenko P.P.</td>
                    <td>szfdf23f@g.com</td>
                    <td>s2om</td>
                    </tr>
                </tbody>
                <div className="navbar navbar-dark bg-light justify-content-between">
                    <Link to='/' className="btn btn-primary">{t('Dashboard')}</Link>
                    <Link to='/usercard' type='button' className="btn btn-success btn-lg">{t('Add new')}</Link>
                </div>
            </table>
        </div>
    )
}

export default UsersList