import { createContext, useState } from 'react'
import { categorias as CategoriasDB} from "../data/categorias"

const ProductosContext = createContext();

const ProductosProvider = ({children}) =>{

    const [categorias, setCategorias] = useState(CategoriasDB);

    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);

    const handleClickCategoria = id => {
        const categoria = categorias.filter(categoria => categoria.id == id)[0]
        setCategoriaActual(categoria)
    } 

    return (
        <ProductosContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria
            }}
        >{children}</ProductosContext.Provider>
    )
}

export {
    ProductosProvider
}
 
export default ProductosContext

