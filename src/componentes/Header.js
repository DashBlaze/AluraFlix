import React from 'react'; // Importa la biblioteca de React
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate de react-router-dom para navegación
import styled, { css } from "styled-components"; // Importa styled-components y css para el uso de estilos
import logo from '../assets/LogoMain.png'; // Importa el archivo de imagen del logo
import Button from '../componentes/Button'; // Importa el componente Button

// Definición de un contenedor estilizado para el encabezado
const HeaderContainer = styled.div`
    background-color: #000000; // Establece el color de fondo del encabezado
    font-size: 32px; // Establece el tamaño de fuente
    color: white; // Establece el color del texto
    height: 5rem; // Establece la altura del encabezado
    display: flex; // Usa flexbox para el diseño
    align-items: center; // Alinea los elementos al centro verticalmente
    justify-content: space-between; // Espacia los elementos equitativamente
    min-width: 320px; // Establece el ancho mínimo
    border-bottom: 2px solid #2A7AE4; // Añade un borde inferior
    box-shadow: 0 0 10px #2271D1; /* Efecto de brillo */
`;

// Definición de un componente estilizado para la imagen del logo
const Logo = styled.img`
    max-height: 40%; // Establece la altura máxima del logo
    margin-left: 45%; // Añade un margen a la izquierda
    

    // Estilos responsivos para pantallas pequeñas
    ${props => css`
    @media (max-width: ${props.theme.breakpoints.laptop}) {
      margin: 0 auto; // Centra el logo horizontalmente en pantallas pequeñas
    `}
`;

// Definición del componente funcional Header
const Header = () => {
  const navigate = useNavigate(); // Inicializa el hook useNavigate

  // Función para navegar a la página principal
  const volverMain = () => {
    navigate('/');
  };

  // Función para manejar el click del botón
  function handleClick() {
    console.log("nada");
    navigate('/formulariovideos');
  }

  return (
    <HeaderContainer>
      <Logo src={logo} onClick={volverMain} alt="Aluraflix Logo" /> {/* Muestra el logo y agrega un manejador de click */}
      <Button 
        onClick={handleClick} 
        inputColor="white" 
        bordercolor='blue' 
        marginR="2%" 
        display='none' 
        fontSize="1rem" 
        btnwidth="8rem" 
        height="3rem"
      >
        Agregar Video
      </Button> {/* Muestra el botón y agrega propiedades personalizadas */}
    </HeaderContainer>
  );
}

export default Header; // Exporta el componente Header para que pueda ser utilizado en otros archivos
