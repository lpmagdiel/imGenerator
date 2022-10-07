import React, { useState } from 'react';
import './fonts/IBMPlexMono-Bold.ttf';
import './fonts/enhanced_dot.ttf';
import './fonts/IBMPlexMono-Regular.ttf';
import gitHubIcon from './images/github-sign.png';
import './App.css';
import { ContentBox, ImageBox, VideoBox } from './Components';
import { RandomBox } from './Components/RandomBox';

function App() {
  return (
    <>
      <nav>
        <h1 className="big-text">imGenerator </h1>
        <a href="https://github.com/lpmagdiel" target="_blank">
          <img src={gitHubIcon} title="github.com/lpmagdiel" />
        </a>
      </nav>
      <div className="grid1 h-50">
        <div className="center">
          <div className="tj w-50">
            <p>Crea imágenes <b className="orange">PNG</b> fácilmente para tus proyectos y pruebas...</p>
            <p>
              Para generar una imagen solo debes de seleccionar un alto en píxeles, ancho en píxeles y un color de fondo. puedes acceder a la imagen desde el enlace generado automáticamente.
            </p><p>
              La imagen está disponible para descarga o consumir directamente desde la url.</p>
          </div>
        </div>
      </div>
      <div className="min-space-visible-mobile"></div>
      <div className="d-grid col-auto">
        <ContentBox title={'Imagen'} color="#cb4335" icon="🌅">
          <div className="w-100 center">
          <p>Alto <b>/</b> Ancho <b>/</b> Color</p>
          </div>
          <ImageBox />
        </ContentBox>
        <ContentBox title={'Formato video'} color="#7d3c98" icon="📺">
        <div className="w-100 center">
          <p>Imagen con resolucion estandar de video</p>
          </div>
          <VideoBox />
        </ContentBox>
        <ContentBox title={'Aleatorio'} color=" #00796b" icon="⚡">
        <div className="w-100 center">
          <p>Imagen cuadrada. Tamaño y color aleatorio</p>
          </div>
          <RandomBox />
        </ContentBox>
      </div>

      <div className="space"></div>
    </>
  );
}

export default App;
