import React from 'react';
import './App.css';
import NavBar from '../src/Components/NavBar';
import Proyectos from '../src/Components/Proyectos';
import Skills from './Components/Skills';
import Contacto from '../src/Components/Contacto';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <h1>Hola Soy Nicole Muñoz Desarrolladora Web</h1>
           <p className="Parraf">Soy una amante del deporte y nuevos aprendizajes,
           enfrentando constantemente nuevos desafíos y 
           comenzando un nuevo camino en el área de la tecnología, con el desarrolloweb.</p>
           <Proyectos/>
           <Skills/>
           <Contacto/>
    </div>
  );
}

export default App;
