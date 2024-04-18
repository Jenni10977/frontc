import React, {useState} from 'react';
import './App.css';
import Modal from './components/Modal';
import styled from 'styled-components';

const App = () => {
  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  return (
    <div>
      <ContenedorBotones>
        <Boton onClick={() => cambiarEstadoModal1(!estadoModal1)}> Modal 1</Boton>
      </ContenedorBotones>

      <Modal estado={estadoModal1} cambiarEstado={cambiarEstadoModal1} titulo='Modal'
          viewHeader={false}
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
}

export default App;

const ContenedorBotones = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-wrap: wrap;
  gap: 20px;
`;

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
  
  &:hover {
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