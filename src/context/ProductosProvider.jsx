import { createContext, useState } from 'react'
import { toast } from 'react-toastify';
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
        

        if(pedido.some( pedidoState => pedidoState.id === producto.id )){
            const pedidoActualizado = pedido.map(pedidoState => 
                pedidoState.id === producto.id ? producto : pedidoState)
                setPedido(pedidoActualizado)
                toast.success('Pedido actualizado')
        }else{
            setPedido([...pedido, producto])
            toast.success('Agregado al pedido')
        }
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

