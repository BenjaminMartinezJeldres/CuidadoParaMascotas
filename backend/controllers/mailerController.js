const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const sendmail = (req, res) => {
    const { message } = req.body
    const token = process.env.PW
    const mail = 'benjamin.martinez1801@alumnos.ubiobio.cl'
    if (!token) {
        return res.status(400).send({ message: "No se ha entregado la contraseña de aplicación para el correo" })
    }
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'benjamin.martinez1801@alumnos.ubiobio.cl',
            pass: token
        }
    })
    let directory = [
        'benjamincito1998@hotmail.com',
        'ben.martinez@gmail.com'
    ]
    const mailOptions = {
        from: `Encargado <Sistema de Cuidados para Mascotas del Condominio>`,
        to: directory,
        subject: 'Prueba de correos',
        text: `"new Date() ${message}`
        // html: `
        //     <h1>Felicitaciones, has enviado un correo</h1>
        //     <p>${message}</p>
        // `
    }
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return res.status(400).send({ message: 'Error al enviar el correo' })
        }
        return res.status(200).send({ message: 'Mensaje enviado' })
    })

    transporter.verify().then(() => {
        console.log('Servidor de correos habilitado')
    }).catch(err => {
        console.log('Error al utilizar servidor de correos')
    })
}






module.exports = sendmail