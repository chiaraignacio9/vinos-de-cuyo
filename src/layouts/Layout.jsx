import { Outlet } from 'react-router-dom'
import Modal from 'react-modal'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Sidebar from '../components/Sidebar'
import Resumen from '../components/Resumen'
import useProductos from '../hooks/useProductos'
import ModalProducto from '../components/ModalProducto'


const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };


Modal.setAppElement('#root')

export default function Layout(){

    const { modal } = useProductos();
    const { handleClickModal } = useProductos();

    console.log(modal);

    return (
        <>
            <div className='md:flex '>
                <Sidebar />

                <main id='productos' className='flex-1 h-screen overflow-y-scroll bg-gray-50 p-3'>
                    <Outlet />
                </main>
            
                <div id="resumen">
                    <Resumen/>
                </div>
                

            </div>

            
            <Modal isOpen={modal} style={customStyles}>
                <ModalProducto />
            </Modal>

            <ToastContainer />
        </>
    )
}