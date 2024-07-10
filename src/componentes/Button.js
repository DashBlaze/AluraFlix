import React from 'react'; // Importa la biblioteca de React
import styled, { css } from "styled-components"; // Importa styled-components y css para el uso de estilos

// Definición de un componente estilizado llamado Button
const Button = styled.button`
  display: inline-block; // Configura la visualización en línea del botón
  color: ${props => props.inputColor}; // Establece el color del texto según la propiedad inputColor
  background-color: ${props => props.backgroundColor || "transparent"}; // Establece el color de fondo o transparente si no se especifica
  width: ${props => props.btnwidth || 'auto'}; // Establece el ancho del botón
  height: ${props => props.height || 'auto'}; // Establece la altura del botón

  font-size: ${props => props.fontSize}; // Establece el tamaño de la fuente según la propiedad fontSize
  // font-size: 1rem; // Comentado: tamaño de fuente predeterminado
  font-family: 'Source Sans Pro', sans-serif; // Establece la familia de la fuente

  margin-right: ${props => props.marginR || '0'}; // Establece el margen derecho
  margin-left: ${props => props.ml || '0'}; // Establece el margen izquierdo
  // padding: 0.7rem 2.3rem; // Comentado: relleno del botón
  border: 2px solid ${props => props.bordercolor}; // Establece el borde con un color específico
  border-radius: 3px; // Redondea las esquinas del botón
  display: block; // Configura la visualización del botón como bloque

  // Estilos responsivos para pantallas pequeñas
  ${props => css`
    @media (max-width: ${props.theme.breakpoints.laptop}) {
      display: ${props => props.display}; // Configura la visualización en función de las propiedades de los props
    `}
  }
`;

export default Button; // Exporta el componente Button para que pueda ser utilizado en otros archivos

// Código comentado para exportar un componente que envuelve a Button con children
// export default ({children}) => {
//   return (
//     <ButtonStyles>{children}</ButtonStyles>
//   )
// }
