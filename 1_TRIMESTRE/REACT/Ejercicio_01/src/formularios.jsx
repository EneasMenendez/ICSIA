function Formularios() {
  return (
    <>
      <section class="py-5">
        <div class="container">
          <h2 class="text-success mb-4">Solicita más información</h2>
          <form>
            <div class="mb-3">
              <label for="nombre" class="form-label">Nombre completo</label>
              <input type="text" class="form-control" id="nombre" placeholder="Tu nombre"/>
            </div>
            <div class="mb-3">
              <label for="correo" class="form-label">Correo electrónico</label>
              <input type="email" class="form-control" id="correo" placeholder="nombre@ejemplo.com"/>
            </div>
            <div class="mb-3">
              <label for="mensaje" class="form-label">Mensaje</label>
              <textarea class="form-control" id="mensaje" rows="4" placeholder="Escribe tu consulta aquí..."></textarea>
            </div>
            <button type="submit" class="btn btn-success">Enviar solicitud</button>
          </form>
        </div>
      </section>

    </>
  )
}

export default Formularios;