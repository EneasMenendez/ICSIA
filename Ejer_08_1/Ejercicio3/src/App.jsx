import { ThemeProvider } from './components/ThemeContext.jsx';
import { ControlesTema } from './components/ControlesTema.jsx';
import { BotonPreview } from './components/BotonPreview.jsx';
import { TextoPreview } from './components/TextoPreview.jsx';
import { CardPreview } from './components/CardPreview.jsx';
import "./css/style.css";

export default function App() {
  return (
    <ThemeProvider>
      <div className="layout">

        <ControlesTema />

        <main className="panel-preview">
          <h2>Vista Previa de Componentes</h2>

          <section>
            <h3>Botón de Ejemplo</h3>
            <BotonPreview />
          </section>

          <section>
            <h3>Texto de Ejemplo</h3>
            <TextoPreview />
          </section>

          <section>
            <h3>Tarjeta de Ejemplo</h3>
            <CardPreview />
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}
