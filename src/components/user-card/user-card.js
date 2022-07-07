import React from "react";
import { useTranslation } from "react-i18next";
import userpicture from '../user-card/userpicture.jpg'

const UserCard = () =>  {
    const { t } = useTranslation();

    return <div className="container">
                <h1>User card</h1>
                <div className="d-flex flex-row justify-content-start">
                    <div>
                        <img src={userpicture} alt='userpicture'></img>
                    </div>
                    <div className="flex-column">
                        <h2>{t('#')}</h2>
                        <h2>{t('User')}ID</h2>
                        <h2>{t('SecondName')}</h2>
                        <h2>{t('FirstName')}</h2>
                        <h2>{t('SurName')}</h2>
                        <h2>{t('UserName')}</h2>
                        <h2>{t('UserEmail')}</h2>
                        <h2>{t('UserTel')}</h2>
                        <h2>{t('UserType')}</h2>
                        <h2>{t('Login')}</h2>
                        <h2>{t('Password')}</h2>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
}
export default UserCard