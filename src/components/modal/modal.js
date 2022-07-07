import React from 'react';
import './modal.css';
import { useTranslation } from "react-i18next";
import useInput from '../input';
// import Login from '../login'



const Modal = ({active, setActive, children}) => {
    
    const { t } = useTranslation();
    const email = useInput('', {isEmpty: true, minLength: 7, maxLenght: 40, isEmail: true })
    const password = useInput('', {isEmpty: true, minLength: 6, maxLenght: 16})

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <div className='modal__close' onClick={() => setActive(false)}>{t("Close")}</div>

                <h2 className="modal__header">{t("Login")}</h2>
                <hr></hr>
                <form>
                    <div> 
                        <h3>{t("YourUser")}:</h3>
                        {(email.isDirty && email.isEmpty) && <div style={{color:'yellow'}}>
                        {t("isEmpty")}</div>}
                        {(email.isDirty && email.minLengthError) && <div style={{color:'yellow'}}>
                        {t("minLengthError")}</div>}
                        {(email.isDirty && email.maxLengthError) && <div style={{color:'yellow'}}>
                        {t("maxLengthError")}</div>}
                        {(email.isDirty && email.emailError) && <div style={{color:'yellow'}}>
                        {t("emailError")}</div>}
                        <input onChange={e => email.onChange(e)} onBlur={e => email.onBlur(e)}value={email.value} className="modal__account" type="text" name="user" placeholder="A-Z.a-z@x.xx"
                        ></input>
                        <h3>{t("Password")}</h3>
                        {(password.isDirty && password.isEmpty) && <div style={{color:'yellow'}}>
                        {t("isEmpty")}</div>}
                        {(password.isDirty && password.minLengthError) && <div style={{color:'yellow'}}>
                        {t("minLengthError")}</div>}
                        {(password.isDirty && password.maxLengthError) && <div style={{color:'yellow'}}>
                        {t("maxLengthError")}</div>}
                        <input onChange={e => password.onChange(e)} onBlur={e => password.onBlur(e)}value={password.value} className="modal__account" type="password" name="password" placeholder="0123456789, A-Z, a-z">
                        </input>
                    </div>  
                    <div className='modal__footer'>
                        <div className='modal__button'>
                        {/* <button type="button" className="btn btn-warning">Clear</button> */}
                        <button type="submit" className="btn btn-primary" 
                        disabled={password.isEmpty || password.maxLengthError || password.minLengthError || email.isEmpty || email.emailError} >
                            {t("Submit")}
                        </button>
                    </div>
                    </div>
                </form>

                {children}
            </div>
        </div>
    );
};
  
export default Modal