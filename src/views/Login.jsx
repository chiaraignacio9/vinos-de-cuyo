import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
        <h1 className="text-4xl font-black">Iniciar Sesión</h1>
        <p>Para poder realizar compras debes iniciar sesión</p>

        <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
            <form>

                <div className="mb-4">
                    <label
                        className="text-slate-800"
                        htmlFor="email"
                    >Correo Electronico: </label>
                    <input 
                        type="email"
                        id="email"
                        className="mt-2 w-full p-3 bg-gray-50"
                        name="email"
                        placeholder="Tu correo electronico"
                    />
                </div>

                <div className="mb-4">
                    <label
                        className="text-slate-800"
                        htmlFor="password"
                    >Contraseña: </label>
                    <input 
                        type="password"
                        id="password"
                        className="mt-2 w-full p-3 bg-gray-50"
                        name="password"
                        placeholder="Tu contraseña"
                    />
                </div>

                <input
                    type="submit"
                    value="Iniciar Sesión"
                    className="bg-rose-700 hover:bg-rose-900 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                />

            </form>
        </div>

        <nav className="mt-5">
            <Link to="/auth/registro">
                ¿No tienes cuenta? Crea una!
            </Link>
        </nav>

    </>
  )
}
