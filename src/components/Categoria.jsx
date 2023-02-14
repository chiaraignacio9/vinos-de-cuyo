import useProductos from "../hooks/useProductos"

export default function Categoria({categoria}) {

    const { handleClickCategoria, categoriaActual } = useProductos();

    const {icono, id, nombre} = categoria

    const resaltarCategoriaActual = () => categoriaActual.id == id ? 'bg-amber-400' : 'bg-white'

    return (

        

        <div className={`${resaltarCategoriaActual()} flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}>
            <img
                alt="Imagen categoria"
                src={`/img/icono_${icono}.svg`}
                className="w-12 rotate-45"
            />

            <button 
                className="text-lg font-bold cursor-pointer truncate"
                type="button"
                onClick={ () => handleClickCategoria(id)}
            >
                {nombre}
            </button>
        </div>
  )
}
