import React, {useState} from 'react';
import './Sidebar.css';
import Modal from './Modal';
import styled from 'styled-components';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/ReactToastify.css'
const Sidebar = () => {
    const [estadoModal2, cambiarEstadoModal2] = useState(false);
    const notify = () => (
        toast.success('🦄 Wow so easy!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            })
    )
    return (
        <div>
            <Nav>
                <ul>
                    <li>Dashboard</li>
                    {/* Agrega más elementos de la barra lateral aquí */}
                    <li onClick={() => cambiarEstadoModal2(!estadoModal2)}>Inicio</li>
                    <li onClick={notify}>Navegacion</li>
                    <li>Configuraciones</li>
                    <li>Ayuda</li>
                </ul>
                <ToastContainer />
            </Nav>
        
            <Modal estado={estadoModal2} cambiarEstado={cambiarEstadoModal2} titulo='Modal2'
                viewHeader={true}
                >
                <Contenido>
                    <h1>Ventana Modal</h1>
                    <p>
                    lorem ipsum
                    </p>
                    <Boton>Aceptar</Boton>
                </Contenido>
            </Modal>
        </div>
    );
};

export default Sidebar;

const Boton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #333;
  cursor: pointer;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 500;
  dysplay: block;
  transition: .3s ease all;
  
  &hover {
    background-color: #444;
  }
`;

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p{
    font-size: 18px;
    margin-bottom: 20px;
  }

  img{
    width: 100%;
    vertical-align: top;
    border-radius: 3px;
  }

`;

const Nav = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh; /* Ocupa toda la altura de la ventana */
    width: 200px; /* Ancho de la barra lateral */
    background-color: #333; /* Color de fondo */
    color: #fff; /* Color del texto */
    padding: 20px; /* Espaciado interno */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    ul {
        list-style: none;
        padding: 0;
        cursor: pointer;
    }
    
    ul li {
        margin-bottom: 10px;
        cursor: pointer;
    }
    
`;