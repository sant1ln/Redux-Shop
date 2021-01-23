import {useState} from 'react'

export const useFrom = (data) => {
    const initialState ={
        name: "",
        lastName: "",
        email: "",
        ID: "",
        addres: "",
    }
    const [formState, setFormState] = useState(data = initialState)
        
    const handleInputChange = ({target}) =>{
      
        setFormState({
            ...formState,
           [ target.name ]: target.value,
        })
    }

    return [formState,handleInputChange,setFormState]
}