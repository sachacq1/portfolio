import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contacto = () => {
    const form = useRef();

    const enviarEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_f34sypj', 'template_30plmw8', form.current, 'o62RkxvJDpimMS48k')
            .then(() => {
                alert('Mensaje enviado correctamente!');
                form.current.reset();
            }, (error) => {
                alert('Error al enviar el mensaje, intenta de nuevo.');
                console.error(error);
            });
    };

    return (
        <div className="py-5">
            <div className="container">
                <h1 className="text-center text-white mb-4">Contacto</h1>
                <form ref={form} onSubmit={enviarEmail} className="mx-auto bg-white p-4 rounded shadow" style={{ maxWidth: '600px' }}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" name="user_name" id="nombre" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Correo electrónico</label>
                        <input type="email" className="form-control" name="user_email" id="email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="asunto" className="form-label">Asunto</label>
                        <input type="text" className="form-control" name="user_subject" id="asunto" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mensaje" className="form-label">Mensaje</label>
                        <textarea className="form-control" name="message" id="mensaje" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default Contacto;
