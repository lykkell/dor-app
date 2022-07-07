import {useState} from "react";
import {useEffect} from 'react';


const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [maxLengthError, setMaxLengthError] = useState(false)
    const [emailError, setEmailError] = useState (true)
    // const [inputValid, setInputValid] = useState (false)
  useEffect( () => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
        break
        case 'maxLenght':
          value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
        break
        case 'isEmpty' :
          value ? setEmpty(false) : setEmpty(true)
        break
        case 'isEmail' :
          // eslint-disable-next-line no-useless-escape
          const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          res.test(String(value).toLowerCase()) ? setEmailError (false) : setEmailError (true)
        break
        default:
        /* code */
        break
      }
    }
  },[validations, value])
  // useEffect( () => {
  //     if (isEmpty || maxLengthError || minLengthError || emailError) {
  //       setInputValid (false)
  //     } else {
  //       setInputValid(true)
  //   }
  // }, [isEmpty, maxLengthError, minLengthError, emailError])
  return {
    isEmpty,
    minLengthError, 
    maxLengthError,
    emailError,
    // inputValid
  }
}
export default useValidation