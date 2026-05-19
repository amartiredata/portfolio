import './App.css'

function App() {
  return (
    <div className="app">
      <section className="hero">
        <h1>Ana </h1>

        <h2>
          HR Analytics • BI • Data Automation
        </h2>

        <p>
          Portfolio de proyectos de analytics,
          dashboards y automatización de procesos.
        </p>
      </section>

      <section className="projects">
        <h3>Proyectos</h3>

        <div className="project-card">
          <h4>Tourism Analytics Dashboard</h4>

          <p>
            Dashboard analítico sobre turismo
            en Argentina utilizando datos abiertos.
          </p>
        </div>

        <div className="project-card">
          <h4>HR Analytics Platform</h4>

          <p>
            Plataforma conceptual de métricas
            y análisis de RRHH.
          </p>
        </div>
      </section>
    </div>
  )
}

export default App