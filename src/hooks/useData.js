import { useSelector } from "react-redux"

export const useData = () =>{

    const {products} = useSelector(state => state.ui)
    
    const getProductsById = (id) =>{
        const actualProduct = products.filter(item => 
                item.id === id
            )
        console.log(typeof(actualProduct))
        return actualProduct
    }


    return{
        getProductsById,
    }
}