import React from 'react'; // Importa la biblioteca de React
import styled, { css } from "styled-components"; // Importa styled-components y css para el uso de estilos
import logo from '../assets/LogoMain.png'; // Importa el archivo de imagen del logo

// Definición de un contenedor estilizado para el pie de página
const FooterContainer = styled.div`
    background-color: #000000; // Establece el color de fondo del pie de página
    font-size: 32px; // Establece el tamaño de fuente
    color: white; // Establece el color del texto
    height: 15vh; // Establece la altura del pie de página
    display: flex; // Usa flexbox para el diseño
    align-items: top; // Alinea los elementos al principio (top)
    justify-content: center; // Centra los elementos horizontalmente
    min-width: 320px; // Establece el ancho mínimo
    border-top: 2px solid #2A7AE4; // Añade un borde superior
    padding-top: 1rem; // Añade un relleno superior
    
`;

// Definición de un componente estilizado para la imagen del logo
const Logo = styled.img`
    height: 3rem; // Establece la altura del logo
    margin-left: 2%; // Añade un margen a la izquierda
    width: 10%; /* Ancho del logo al 100% del contenedor */
    height: 40%; /* Altura automática basada en la proporción */
    // Estilos responsivos para pantallas pequeñas
    ${props => css`
    @media (max-width: ${props.theme.breakpoints.laptop}) {
      margin: 0 auto; // Centra el logo horizontalmente en pantallas pequeñas
    `}
`;

// Definición del componente funcional Footer
function Footer() {
  return (
    <FooterContainer>
      <Logo src={logo} alt="Aluraflix Logo" /> {/* Muestra el logo */}
    </FooterContainer>
  );
}

export default Footer; // Exporta el componente Footer para que pueda ser utilizado en otros archivos
