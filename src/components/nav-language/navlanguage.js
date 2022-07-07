import React from "react";
import i18n from "i18next";
import '../translations/i18n';

const NavLanguage = () => {

    // const [language, setLanguage] = useState('');
    const handleOnclick=(e)=>{
    e.preventDefault();
    // setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
}
    return (
            <div className="d-flex flex-row justify-content-end align-items-center btn-light btn-lg">
              <button value='en' onClick={handleOnclick}>
                English
              </button>
              <button value='ua' onClick={handleOnclick}>
                Українська
              </button>
              <button value='ru' onClick={handleOnclick}>
                Русский
              </button>
            </div>
    )
}
export default NavLanguage