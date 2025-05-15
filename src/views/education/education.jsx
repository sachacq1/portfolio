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
        <div
            className="container py-4"
            id="educacion"
            style={{ position: "relative", height: "100vh" }}
        >
            <h2 className="text-center mb-5">Educación <br /> (las tarjetas se pueden arrastrar)</h2>


            {educations.map((item, index) => {
                const nodeRef = useRef(null); // ref para cada card
                return (
                    <Draggable key={index} nodeRef={nodeRef}>
                        <div
                            ref={nodeRef}
                            style={{
                                position: "absolute",
                                width: "400px",
                                height: "200px",
                                border: `2px solid var(--bs-${item.border})`,
                                borderRadius: "5px",
                                background: "#222",
                                padding: "2rem",
                                color: "white",
                                cursor: "grab",
                                userSelect: "none",
                                top: 20 + index * 120,
                                left: 20 + index * 120,
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
    );
};

export default Education
