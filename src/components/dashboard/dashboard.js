import React from 'react';
import { useTranslation } from "react-i18next";
import '../translations/i18n';
import { Link } from "react-router-dom";



const Dashboard = () => {
    const { t } = useTranslation();
    
    return (
        <div className='container'>
            <div className="Dashboard-main d-flex flex-column justify-content-center" alt="Main dashboard">
                <div className="Dashboard-main-btn d-flex justify-content-around">
                <Link to='/userslist' className="btn btn-primary btn-lg"
                    name="likar" type="button"
                    >{t("Likars")}
                </Link>
                <Link to='/plflist'
                    name='platforms'
                    type="button"
                    className="btn btn-primary btn-lg" 
                    >{t("Platforms")}
                </Link>
                </div>  	
                <div className="Dashboard-main-btn d-flex justify-content-around">
                    <Link to='/crcomlist' 
                        type="button"
                        className="Certifying-commission-Dash-board btn btn-primary btn-lg "
                        >{t("CrCommissions")}
                    </Link>
                    <Link to='/courseslist' 
                        name='courses'
                        type="button"
                        className="Seminars-Dash-board btn btn-primary btn-lg"
                        >{t("Courses")}
                    </Link>
                    <Link to='/crtlist' 
                        name='crtlist'
                        type="button"
                        className=" btn btn-primary btn-lg"
                        >{t("Certificates")}
                    </Link>
                    {/* <Link to={'/crtlist/crt-user-list'}
                        name='crtuserlist'
                        type="button"
                        
                        className=" btn btn-primary btn-lg"
                        >{t("UserCertificates")}
                    </Link> */}
                </div>
            </div>
        </div>
    )
}
export default Dashboard