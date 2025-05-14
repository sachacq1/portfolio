import "./Home.css";
import Skill from "../skill/skill.jsx";
import Proyectos from "../Projects/projects.jsx";
import Education from "../education/education.jsx";
import Contacto from "../Contact/Contacto.jsx";

const Home = () => {
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center min-vh-100" id="sobre-mi">
                <div className="row w-100 align-items-center">
                    <div className="col-lg-6 col-md-12 text-start text-white">
                        <h1 className="display-1 fw-bold">Hola, soy Sacha</h1>
                        <h2 className="display-3 fw-semibold">Full Stack Developer</h2>
                        <p className="fw-semibold">
                            Me apasiona la tecnología y disfruto crear soluciones web completas,
                            desde el frontend hasta el backend. Actualmente sigo formándome de manera constante,
                            investigando nuevas herramientas, frameworks y buenas prácticas para seguir creciendo en este camino.
                            Siempre estoy en busca de nuevos desafíos donde pueda aprender,
                            aportar y evolucionar como profesional.
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-12 text-center">
                        <img className="avatar img-fluid" src="/avatar2.png" alt="Avatar de Sacha" />
                    </div>
                </div>
            </div>
            <section id="/section"> <Skill /></section>
            <section id="/section"> <Proyectos /></section>
            <section id="/section"> <Education /></section>
            <section id="/section"> <Contacto /></section>
        </>
    );
};

export default Home;
