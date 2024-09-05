const form = document.getElementById('form');
const sendEmail = document.getElementById('emailA');

function handleSendEmail(event) {
    event.preventDefault();
    const fd = new FormData(form); // Cambié 'this' por 'form' para evitar problemas con el contexto

    const subject = `Presupuesto ${fd.get('NombreCompleto')}`;
    const body = `
        Nombre Completo: ${fd.get('NombreCompleto')}
        Teléfono: ${fd.get('Telefono')}
        Tipo de Evento: ${fd.get('TipoEvento')}
        Cantidad de Personas: ${fd.get('CantidadPersonas')}
        Fecha: ${fd.get('Fecha')}
        Horario: ${fd.get('Horario')}
    `;

    sendEmail.setAttribute(
        'href',
        `mailto:ja.vergarac96@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    );

    sendEmail.click();
}

form.addEventListener('submit', handleSendEmail);