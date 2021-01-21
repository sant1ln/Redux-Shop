import { useState } from "react"
import validate from "validate.js"



export const useCheckForm = () => {

    const initialState = {
        nameOk: "",
        lastNameOk: "",
        emailOk: "",
        phoneOk: "",
        idOk: "",
        addresOk: "",
    }
    const [check, setCheck] = useState(initialState)

    const checkInput = ({ target }) => {
        switch (target.name) {
            case 'name':
                (target.value.length >= 2)
                    ? setCheck({ ...check, nameOk: 'good' })
                    : setCheck({ ...check, nameOk: 'bad' })
                break;
            case 'lastName':
                (target.value.length >= 2)
                    ? setCheck({ ...check, lastNameOk: 'good' })
                    : setCheck({ ...check, lastNameOk: 'bad' })
                break;
            case 'email':
                let constraints = {
                    from: {
                        email: true
                    }
                };
                let isOk = validate({ from: target.value }, constraints);

                (!isOk)
                    ? setCheck({ ...check, emailOk: 'good' })
                    : setCheck({ ...check, emailOk: 'bad' })
                break;
            case 'phone':
                (target.value.length >= 5)
                    ? setCheck({ ...check, phoneOk: 'good' })
                    : setCheck({ ...check, phoneOk: 'bad' })
                break;
            case 'ID':
                (target.value.length >= 8)
                    ? setCheck({ ...check, phoneOk: 'good' })
                    : setCheck({ ...check, phoneOk: 'bad' })
                break;
            case 'addres':
                (target.value.length >= 5 )
                    ? setCheck({ ...check, phoneOk: 'good' })
                    : setCheck({ ...check, phoneOk: 'bad' })
                break;
            default: return check

        }
    }




    return [check, checkInput]

}