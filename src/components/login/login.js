import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import Modal from '../modal';

const Login=() => {

    const { t } = useTranslation();
    const [modalLogin, setModalLogin] = useState(false)

    return (
        <div className="Dashboard-main-btn d-flex justify-content-around">
            <button
                name='login'
                type="button"
                className="btn btn-success btn-lg" 
                onClick={() => setModalLogin(true)}
                >{t("Login")}
            </button>
            <div className='modal__button__short'>
                <button 
                    className="modal__forget__password btn btn-link"
                    onClick={() => setModalLogin(true)}>{t("Forget")}
                </button>
                <button 
                className="modal__registrate btn btn-link"
                onClick={() => setModalLogin(true)}>{t("Registrate")}
                </button>
            </div>
            <Modal active={modalLogin} setActive={setModalLogin}></Modal>
        </div>  
    )
}

export default Login