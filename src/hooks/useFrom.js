import {useState} from 'react'

export const useFrom = (data) => {
    const initialState ={
        name: "Stave J",
        lastName: "Jhonson",
        email: "stave.204@gmail.com",
        ID: "2571035",
        addres: "Av 505 st 40 - 34 Los Angeles C.A",
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