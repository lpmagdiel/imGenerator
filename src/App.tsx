import React, { useState } from 'react';
import './fonts/IBMPlexMono-Bold.ttf';
import './fonts/IBMPlexMono-Regular.ttf';
import './App.css';
import { ImageBox, VideoBox } from './Components';

function App() {
  return (
    <>
      <div className="gid1 h-50">
        <div className="center h-100p">
          <div className="grid1">
            <h1 className="big-text">imGenerator <img src="./icon.png" style={{ marginTop: '15px' }} /></h1>
            <div className="center">
              <div className="tj w-50">
                <p>Crea imágenes <b className="orange">PNG</b> fácilmente para tus proyectos y pruebas...</p>
                <p>
                  Para generar una imagen solo debes de seleccionar un alto en píxeles, ancho en píxeles y un color de fondo. puedes acceder a la imagen desde el enlace generado automáticamente.
                </p><p>
                  La imagen está disponible para descarga o consumir directamente desde la url.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid2 h-50 p-20">
        <ImageBox bg='#f7f7f7' />
        <VideoBox bg="#f7f7f7" />
        <div className="space"></div>
      </div>

    </>
  );
}

export default App;
