import { DeviconBootstrap, DeviconExpress, DeviconHtml5, DeviconVercel, LogosJavascript, LogosMysql, LogosNpm, MaterialIconThemeReact, MaterialIconThemeVscode, MdiGithub, SimpleIconsRender, SkillIconsCss, SkillIconsMongodb } from "../../components/icon/icon.jsx";

const Skill = () => {
    return (
        <div className="container my-5 text-whitei" id="skills-tools">
            <h2 className="text-center mb-5">Skills & Tools</h2>
            <div className="row justify-content-center gap-4">

                {/* Lenguajes de Programación */}
                <div className="card bg-dark col-md-5 shadow-sm">
                    <div className="card-body text-center">
                        <h5 className="fw-bold mb-4">Lenguajes de Programación</h5>
                        <div className="d-flex flex-wrap justify-content-center">
                            {/* JavaScript */}
                            <div className="text-center mx-3 my-2">
                                <span className="display-6"><LogosJavascript /></span>
                                <p className="mt-2">JavaScript</p>
                            </div>
                            {/* HTML */}
                            <div className="text-center mx-3 my-2">
                                <span className="display-6"><DeviconHtml5 /></span>
                                <p className="mt-2">HTML</p>
                            </div>
                            {/* CSS */}
                            <div className="text-center mx-3 my-2">
                                <span className="display-6"><SkillIconsCss /></span>
                                <p className="mt-2">CSS</p>
                            </div>
                            {/* MySQL */}
                            <div className="text-center mx-3 my-2">
                                <span className="display-6"><LogosMysql /></span>
                                <p className="mt-2">MySQL</p>
                            </div>
                            {/* MongoDB */}
                            <div className="text-center mx-3 my-2">
                                <span className="display-6"><SkillIconsMongodb /></span>
                                <p className="mt-2">MongoDB</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tecnologías */}
                <div className="card bg-dark col-md-5 shadow-sm">
                    <div className="card-body text-center">
                        <h5 className="fw-bold mb-4">Tecnologías</h5>
                        <div className="d-flex flex-wrap justify-content-center">
                            {/* React */}
                            <div className="text-center mx-3 my-2">
                                <span className="display-6"><MaterialIconThemeReact /></span>
                                <p className="mt-2">React</p>
                            </div>
                            {/* Bootstrap */}
                            <div className="text-center mx-3 my-2">
                                <span className="display-6"><DeviconBootstrap /> </span>
                                <p className="mt-2">Bootstrap</p>
                            </div>
                            {/* Express */}
                            <div className="text-center mx-3 my-2">
                                <span className="display-6 text-white"> <DeviconExpress /></span>
                                <p className="mt-2">Express</p>
                            </div>
                            {/* GitHub */}
                            <div className="text-center mx-3 my-2">
                                <span className="display-6 text-white"> <MdiGithub /></span>
                                <p className="mt-2">GitHub</p>
                            </div>
                            {/* VSCode */}
                            <div className="text-center mx-3 my-2">
                                <span className="display-6"> <MaterialIconThemeVscode /></span>
                                <p className="mt-2">VSCode</p>
                            </div>
                            {/* npm */}
                            <div className="text-center mx-3 my-2">
                                <span className="display-6 text-white "> <LogosNpm /></span>
                                <p className="mt-2">npm</p>
                            </div>
                            {/* Vercel */}
                            <div className="text-center mx-3 my-2">
                                <span className="display-6"><DeviconVercel /></span>
                                <p className="mt-2">Vercel</p>
                            </div>
                            {/* Render */}
                            <div className="text-center mx-3 my-2">
                                <span className="display-6 text-white"> <SimpleIconsRender /></span>
                                <p className="mt-2">Render</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skill;
