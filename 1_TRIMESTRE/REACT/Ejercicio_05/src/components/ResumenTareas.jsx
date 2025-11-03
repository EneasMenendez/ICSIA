import React from "react";

export default function ResumenTareas({ tareasVisibles, totalTareas }) {
  const totalVisibles = tareasVisibles.length;
  const completadas = tareasVisibles.filter((t) => t.completada).length;

  if (totalVisibles === 0)
    return (
      <div className="alert alert-info text-center">
        No hay tareas para este filtro.
      </div>
    );

  if (completadas === totalVisibles)
    return (
      <div className="alert alert-success text-center">
        🎉 ¡Felicidades! Has completado todas las tareas de esta sección.
      </div>
    );

  return (
    <div className="alert alert-secondary text-center">
      Mostrando {totalVisibles} de {totalTareas} tareas.
    </div>
  );
}
