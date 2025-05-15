import "./projects.css";
const Proyectos = () => {
    return (
        <div className="container py-4" id="proyectos">
            <h2 className="text-center mb-5">Mis Proyectos Web</h2>

            <div className="row g-4">
                {/* Proyecto 1 */}
                <div className="col-md-6">
                    <div className="card-container">
                        <div className="card h-100 bg-transparent border-0">
                            <img
                                src="/sb.png"
                                className="card-img-top rounded"
                                alt="Samabta Balario Fotografía"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Samabta Balario Fotografía</h5>
                                <p className="card-text">
                                    Sitio informativo para una fotógrafa, con secciones de servicios, contacto y galería.
                                </p>
                                <a
                                    href="https://sb-web-tau.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    Ver Proyecto
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Proyecto 2 */}
                <div className="col-md-6">
                    <div className="card-container">
                        <div className="card h-100 bg-transparent border-0">
                            <img
                                src="/MQ.png"
                                className="card-img-top rounded"
                                alt="Web de Psicología Mayra Quinteros"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Web de Psicología Mayra Quinteros</h5>
                                <p className="card-text">
                                    Plataforma para una psicóloga con información pública y un panel privado para gestión de pacientes y turnos.
                                </p>
                                <a
                                    href="https://web-mayra-q.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    Ver Proyecto
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proyectos
