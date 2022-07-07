import { useState } from "react";
import useValidation from "../validation";

    const useInput = (initialValue, validations) => {
        const [value, setValue] = useState(initialValue)
        const [isDirty, SetDirty] = useState(false)
        const valid = useValidation(value,validations)
        const onChange = (e) => {
          setValue(e.target.value)
        }
        const onBlur =(e) => {
          SetDirty(true)
        }
        return {
          value,
          onChange,
          onBlur,
          isDirty,
          ...valid
        }
    }

export default useInput