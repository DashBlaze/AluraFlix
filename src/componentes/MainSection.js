import React, { useState, useEffect } from 'react';
import Deslizador from './menuVideo/Deslizador/Deslizador'; // Importa el componente Deslizador desde la ruta relativa

import Banner from '../componentes/Banner'; // Importa el componente Banner desde la ruta relativa
import styled, { css } from 'styled-components'; // Importa styled-components y css para estilos

// Estilo para el contenedor principal de la sección principal
const MainSectionContainer = styled.div`
    background-color: #191919; // Fondo negro
    padding: 2rem; // Relleno de 2rem en todos los lados

    ${props => css`
        @media (max-width: ${props.theme.breakpoints.laptop}) {
            padding-top: 1.5rem; // Ajuste de relleno superior en dispositivos laptop o menores
        }
    `}
`;

// Componente funcional MainSection que recibe categorias y videos como props
function MainSection({ categorias, videos }) {

    return (
        <>
            {/* Componente Banner para mostrar el banner */}
            <Banner />

            {/* Contenedor principal de la sección principal */}
            <MainSectionContainer>
                {/* Componente Deslizador para mostrar el carrusel de categorías y vídeos */}
                <Deslizador categorias={categorias} videos={videos} />
            </MainSectionContainer>
        </>
    );
}

export default MainSection; // Exporta el componente MainSection
