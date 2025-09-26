function Menu() {
  return (
    <>

      <nav class="navbar navbar-expand-lg navbar-dark bg-success">
        <div class="container">

          <a class="navbar-brand fw-bold" href="#">Naturaleza Viva</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-3">
              <li class="nav-item">
                <a class="nav-link active" href="#">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Proyectos</a>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="recursosDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Recursos
                </a>
                <ul class="dropdown-menu" aria-labelledby="recursosDropdown">
                  <li><a class="dropdown-item" href="#">Artículos</a></li>
                  <li><a class="dropdown-item" href="#">Guías</a></li>
                  <li><a class="dropdown-item" href="#">Videos</a></li>
                </ul>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  );
}

export default Menu;