import React,{Fragment} from 'react'

const NavBar =() => {
    return(
        <Fragment>
        <nav className="menu">
          <ul>
          <li className="List-nav">
            Proyectos
          <a
          className="App-link"
          href="Proyectos"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
          </li>
          <li className="List-nav">
            Skills
          <a
          className="App-link"
          href="Skills"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
          </li>
          <li className="List-nav">
            Contacto
          <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
          </li>
          </ul>
        </nav>
        </Fragment>
    );
}

export  default NavBar;