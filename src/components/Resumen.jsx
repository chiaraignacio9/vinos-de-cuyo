import useProducto from "../hooks/useProductos"
import ResumenProducto from "./ResumenProducto";


export default function Resumen() {

  const {pedido} = useProducto();

  return (
    <aside className='w-72 h-screen overflow-y-scroll p-5' >
      <h1 className='text-4xl font-black'>Mi pedido</h1>
      <p className='text-lg my-5'>Aquí podrás ver el resumen y total de tu pedido</p>

      <div className="py-10">
        {pedido.length == 0 ? (
          <p className="text-center text-2xl">No hay elementos en tu pedido</p>
        ) : (
          pedido.map(producto => (
              <ResumenProducto 
                key={producto.id}
                producto={producto}
              />
          ))
        )}
      </div>

      <p className="text-xl mt-10 ">
        Total: {' '}
      </p>

      <form className="w-full">
          <div className="mt-5">
            <input 
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-800 py-2 px-5 rounded uppercase font-bold text-white text-center w-full cursor-pointer"
              value="Confirmar Pedido"
            />
          </div>

      </form>

    </aside>
  )
}
