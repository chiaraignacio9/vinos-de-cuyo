import { formatearDinero } from "../helpers"

export default function Producto({producto}) {

    const {nombre, imagen, precio, id} = producto

  return (
    <div className="border p-3 shadow bg-white">
        <img
            alt={`imagen ${nombre}`}
            className="w-full"
            src={`/img/${imagen}.jpg`}
        />

        <div className="p-5">
            <h3 className="text-2xl font-bold">{nombre}</h3>
            <p className="mt-5 font-black text-3xl text-amber-500">
                { formatearDinero(precio) }
            </p>

            <button
                type="button"
                className="bg-rose-600 hover:bg-rose-800 w-full mt-5 p-3 uppercase font-bold
                        text-white transition delay-150 duration-300 ease-in-out hover:scale-110"
            >Agregar

            </button>
        </div>
    </div>
  )
}
