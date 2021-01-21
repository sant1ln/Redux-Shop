import {useState} from 'react'

export const useFrom = () => {
    const initialState ={
        name: "",
        lastName: "",
        email: "",
        phone: "",
        ID: "",
        addres: "",
    }
    const [formState, setFormState] = useState(initialState)
    
    
    const handleInputChange = ({target}) =>{
      
        setFormState({
            ...formState,
           [ target.name ]: target.value,
        })
    }

    return [formState,handleInputChange]
}