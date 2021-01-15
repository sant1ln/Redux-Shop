import { useSelector } from "react-redux"

export const useData = () =>{

    const {products} = useSelector(state => state.ui)
    
    const getProductsById = (id) =>{
        const actualProduct = products.filter(item => 
                item.id === id
            )
        return actualProduct
    }


    return{
        getProductsById,
    }
}