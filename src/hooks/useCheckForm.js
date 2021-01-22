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
    }
    const [check, setCheck] = useState(initialState)
    const checkInput = ({ target }) => {
        let {completed} = check
        
        

        switch (target.name) {
            case 'name':
                (target.value.length >= 2)
                    ? setCheck({ ...check, nameOk: 'good', completed : completed + 1 })
                    : setCheck({ ...check, nameOk: 'bad',  } )
                break;
            case 'lastName':
                (target.value.length >= 2)
                    ? setCheck({ ...check, lastNameOk: 'good', completed : completed + 1 })
                    : setCheck({ ...check, lastNameOk: 'bad',  })
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
                    : setCheck({ ...check, emailOk: 'bad',  })
                break;
            case 'phone':
                (target.value.length >= 2)
                    ? setCheck({ ...check, phoneOk: 'good', completed : completed + 1 })
                    : setCheck({ ...check, phoneOk: 'bad',  })
                break;
            case 'ID':
                (target.value.length >= 2)
                    ? setCheck({ ...check, IdOk: 'good', completed : completed + 1 })
                    : setCheck({ ...check, IdOk: 'bad',  })
                break;
            case 'addres':
                (target.value.length >= 2 )
                    ? setCheck({ ...check, addresOk: 'good', completed : completed + 1 })
                    : setCheck({ ...check, addresOk: 'bad',  })
                break;
            default: return check

        }

        /* (completed >= 5)
            ? setCheck({...check,isCorrect:true})
            : setCheck({...check,isCorrect:false} */
        

    }




    return [check, checkInput]

}