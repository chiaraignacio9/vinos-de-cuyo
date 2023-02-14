import useProductos from "../hooks/useProductos"
import Categoria from "./Categoria"


export default function Sidebar() {

    const { categorias } = useProductos()

  return (
    <aside className='md:w-72 content-center'>
        <div className='p-4 content-center'>
            <img
                className='w-40'
                src='img/logo.svg'
            />
        </div>

        <div className="mt-10">
            {categorias.map(categoria => (
                <Categoria
                    key={categoria.id}
                    categoria={categoria}
                />
            ))}
        </div>

        <div className="my-5 px-5">
            <button
                type="button"
                className="text-center bg-blue-500 w-full p-3 font-bold text-white truncate"
            >
                <a href="#resumen">Ver Pedido</a>
            </button>
        </div>

    </aside>
  )
}