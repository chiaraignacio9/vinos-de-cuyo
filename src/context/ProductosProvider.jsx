import { createContext, useState } from 'react'
import { categorias as CategoriasDB} from "../data/Categorias"

const ProductosContext = createContext();

const ProductosProvider = ({children}) =>{

    const [categorias, setCategorias] = useState(CategoriasDB)

    const [categoriaActual, setCategoriaActual] = useState(categorias[0])

    const [modal, setModal] = useState(false)

    const [producto, setProducto] = useState({})

    const [pedido, setPedido] = useState([])



    const handleClickCategoria = id => {
        const categoria = categorias.filter(categoria => categoria.id == id)[0]
        setCategoriaActual(categoria)
    } 

    const handleClickModal = () =>{
        setModal(!modal);
    }

    const handleSetProducto = producto => {
        setProducto(producto)
    }

    const handleAgregarPedido = ({categoria_id, imagen, ...producto}) => {
        setPedido([...pedido, producto])
    }

    return (
        <ProductosContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                handleClickModal,
                producto,  
                handleSetProducto,
                pedido,
                handleAgregarPedido
            }}
        >{children}</ProductosContext.Provider>
    )
}

export {
    ProductosProvider
}
 
export default ProductosContext

