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
        <div className="container py-4" id="educacion">
            <h1 className="text-center mb-5">Educación</h1>

            <div className="row g-4">
                {educations.map((item, index) => (
                    <div className="col-md-6" key={index}>
                        <div className={`card h-100 border-${item.border}`}>
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <h6 className="card-subtitle text-white">{item.subtitle}</h6>
                                <p className="mb-2">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Education
