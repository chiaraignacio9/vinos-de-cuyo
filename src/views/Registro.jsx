import { Link } from 'react-router-dom'

export default function Registro() {
  return (
    <>
        <h1 className="text-4xl font-black">Crea tu Cuenta</h1>
        <p>Crea tu cuenta completando el formulario</p>

        <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
            <form>

                <div className="mb-4">
                    <label
                        className="text-slate-800"
                        htmlFor="name"
                    >Nombre: </label>
                    <input 
                        type="text"
                        id="name"
                        className="mt-2 w-full p-3 bg-gray-50"
                        name="name"
                        placeholder="Tu nombre"
                    />
                </div>

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

                <div className="mb-4">
                    <label
                        className="text-slate-800"
                        htmlFor="password_confirmation"
                    >Repetir Contraseña: </label>
                    <input 
                        type="password"
                        id="password"
                        className="mt-2 w-full p-3 bg-gray-50"
                        name="password"
                        placeholder="Repetir contraseña"
                    />
                </div>

                <input
                    type="submit"
                    value="Crear Cuenta"
                    className="bg-rose-700 hover:bg-rose-900 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                />

            </form>
        </div>

        <nav className="mt-5">
            <Link to="/auth/login">
                ¿Ya tienes cuenta? Inicia sesión!
            </Link>
        </nav>
    </>
  )
}
