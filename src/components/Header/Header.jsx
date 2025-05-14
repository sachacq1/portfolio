const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
            <div className="container">
                {/* Logo / Marca */}
                <a href="#" className="navbar-brand fw-bold">sacha.dev</a>

                {/* Botón para mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Enlaces */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#sobre-mi" className="nav-link">Sobre mí</a>
                        </li>
                        <li className="nav-item">
                            <a href="#skills-tools" className="nav-link">Skills y Tools</a>
                        </li>
                        <li className="nav-item">
                            <a href="#proyectos" className="nav-link">Proyectos</a>
                        </li>
                        <li className="nav-item">
                            <a href="#educacion" className="nav-link">Educación</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
