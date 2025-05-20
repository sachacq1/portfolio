import "./education.css"
import React, { useRef } from "react";
import Draggable from 'react-draggable';


const Education = () => {
    const educations = [
        {
            title: 'Diplomatura Full Stack Developer',
            subtitle: 'UTN - 2024',
            description: 'Formación completa en desarrollo web con tecnologías como React, Node.js y bases de datos.',
            border: 'primary'
        },
        {
            title: 'Diseño Web Responsivo',
            subtitle: 'FreeCodeCamp - 2023–2024',
            description: 'Curso para crear sitios web adaptables usando HTML y CSS moderno.',
            border: 'success'
        },
        {
            title: 'JavaScript: Algoritmos y Estructuras de Datos',
            subtitle: 'FreeCodeCamp - 2023–2024',
            description: 'Resolución de problemas y lógica con JavaScript moderno.',
            border: 'warning'
        },
        {
            title: 'Bachillerato',
            subtitle: 'Instituto Mariano Moreno - 2006–2008',
            description: 'Formación secundaria con orientación en ciencias sociales.',
            border: 'secondary'
        }
    ]

    return (
        <>
            <div
                className="container py-4"
                id="educacion"
            >
                <h2 className="text-center mb-5" >Educación <br /> (las tarjetas se pueden arrastrar)</h2>

                < div className="row col-md-6 draggable-wrapper" style={{ marginTop: "80px" }}>
                    {educations.map((item, index) => {
                        const nodeRef = useRef(null);
                        return (
                            <Draggable
                                key={index}
                                nodeRef={nodeRef}
                                defaultPosition={{ x: 50, y: 20 + index * 80 }}
                            >
                                <div
                                    className="draggable-card"
                                    ref={nodeRef}
                                    style={{
                                        border: `2px solid var(--bs-${item.border})`,
                                        borderRadius: "5px",
                                        color: "white",
                                    }}
                                >
                                    <h5>{item.title}</h5>
                                    <h6>{item.subtitle}</h6>
                                    <p>{item.description}</p>
                                </div>
                            </Draggable>

                        );
                    })}
                </div>
            </div >

        </>
    );
};

export default Education
