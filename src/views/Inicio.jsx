import { productos as data} from '../data/productos'
import useProductos from '../hooks/useProductos'
import Producto from '../components/Producto'
export default function Inicio() {

  const { categoriaActual } = useProductos()

  const productos = data.filter(producto => producto.categoria_id == categoriaActual.id)

  return (
    <>
      <h1 className='text-4xl font-black'>{ categoriaActual.nombre }</h1>
      <p className='text-2xl my-10'>
        Elige los productos para tu pedido
      </p>

      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {productos.map(producto => (
            <Producto 
              key={producto.id}
              producto={producto}
            />
        ))}
      </div>
    </>
  )
}
