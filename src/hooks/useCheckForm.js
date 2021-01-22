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
        completed:0,
        isCorrect: true,
    }
    const [check, setCheck] = useState(initialState)
    const checkInput = ({ target }) => {
        let {completed} = check
        
        if(completed >= 5){
            setCheck({...check},check.isCorrect=true)
        }else{
            setCheck({...check},check.isCorrect=false)
        }

        switch (target.name) {
            case 'name':
                (target.value.length >= 2)
                    ? setCheck({ ...check, nameOk: 'good', completed : completed + 1 })
                    : setCheck({ ...check, nameOk: 'bad', completed : completed - 1 } )
                break;
            case 'lastName':
                (target.value.length >= 2)
                    ? setCheck({ ...check, lastNameOk: 'good', completed : completed + 1 })
                    : setCheck({ ...check, lastNameOk: 'bad', completed : completed - 1 })
                break;
            case 'email':
                let constraints = {
                    from: {
                        email: true
                    }
                };
                let isOk = validate({ from: target.value }, constraints);

                (!isOk)
                    ? setCheck({ ...check, emailOk: 'good', completed : completed + 1 })
                    : setCheck({ ...check, emailOk: 'bad', completed : completed - 1 })
                break;
            case 'phone':
                (target.value.length >= 2)
                    ? setCheck({ ...check, phoneOk: 'good', completed : completed + 1 })
                    : setCheck({ ...check, phoneOk: 'bad', completed : completed - 1 })
                break;
            case 'ID':
                (target.value.length >= 2)
                    ? setCheck({ ...check, IdOk: 'good', completed : completed + 1 })
                    : setCheck({ ...check, IdOk: 'bad', completed : completed - 1 })
                break;
            case 'addres':
                (target.value.length >= 2 )
                    ? setCheck({ ...check, addresOk: 'good', completed : completed + 1 })
                    : setCheck({ ...check, IdOk: 'bad', completed : completed - 1 })
                break;
            default: return check

        }

        /* (completed >= 5)
            ? setCheck({...check,isCorrect:true})
            : setCheck({...check,isCorrect:false} */
        

    }




    return [check, checkInput]

}