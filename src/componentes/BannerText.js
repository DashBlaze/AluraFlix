import React from 'react'; // Importa la biblioteca de React

import styled, { css } from "styled-components"; // Importa styled-components y css para el uso de estilos

// Definición de un componente estilizado llamado Title
const Title = styled.h1`
  background-color: #6BD1FF; // Establece el color de fondo
  color: red; // Establece el color del texto
`;

// Definición del componente funcional BannerText
const BannerText = () => {
  return (
    <div>
      {/* Utiliza el componente estilizado Title */}
      <Title>BannerText</Title>
    </div>
  );
}

export default BannerText; // Exporta el componente BannerText para que pueda ser usado en otros archivos
