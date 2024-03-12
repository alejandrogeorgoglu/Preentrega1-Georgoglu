import { CardWidge } from "./CardWidge";

export const NavBar = () => (
  <>
    <div className="div1">CanvasExpress</div>
    <ul className="nav-links">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="/src/components/Secciones/Cuadros.jsx">Cuadros</a>
      </li>
      <li>
        <a href="/src/components/Secciones/Artistas.jsx">Artistas</a>
      </li>
      <li>
        <a href="/src/components/Secciones/Contacto.jsx">Contacto</a>
      </li>
    </ul>
    <CardWidge />
  </>
);
