
const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4 mt-5">
            <div className="container">
                <div className="d-flex flex-wrap justify-content-around mb-3 text-center">
                    <a href="#sobre-mi" className="text-light text-decoration-none mx-2">
                        Sobre mí
                    </a>
                    <a href="#skills-tools" className="text-light text-decoration-none mx-2">
                        Skills y Tools
                    </a>
                    <a href="#educacion" className="text-light text-decoration-none mx-2">
                        Educación
                    </a>
                    <a href="#proyectos" className="text-light text-decoration-none mx-2">
                        Proyectos
                    </a>
                </div>

                <p className="text-center mb-0 small">
                    © {new Date().getFullYear()} Sacha Fotos. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    )
}

export default Footer
