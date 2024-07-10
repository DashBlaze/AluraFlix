import { dividerClasses } from '@mui/material'; // Importa dividerClasses de MUI (aunque no se usa en este código)
import React from 'react';
import { Outlet } from 'react-router-dom'; // Importa Outlet de react-router-dom para renderizar rutas hijas
import Header from '../componentes/Header'; // Importa el componente Header desde la ruta relativa '../componentes/Header'

function RootLayout() {
  return (
    <div className="root-layout">
      {/* Renderiza el componente Header */}
      <Header />

      {/* Contenedor principal para el contenido dinámico */}
      <main>
        {/* Outlet se utiliza para renderizar el contenido específico de cada ruta hija */}
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
