import useProductos from "../hooks/useProductos"
import Categoria from "./Categoria"


export default function Sidebar() {

    const { categorias } = useProductos()

  return (
    <aside className='md:w-72'>
        <div className='p-4 sm:items-center sm:flex'>
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
                className="text-center bg-red-500 w-full p-3 font-bold text-white truncate"
            >
                Cancelar Orden
            </button>
        </div>

    </aside>
  )
}