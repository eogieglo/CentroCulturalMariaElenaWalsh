let db = require('../db/models');
let nodemailerFunction = require('../custom_functions/nodemailer')


let userFunctions = {

    create: async (req, res, next) => {
        await db.User.create({
            ...req.body,
            phone: Number(req.body.phone)
        })
        try {

            let emailContent = "<p> Gracias por suscribirte al Centro cultural Maria Elena Walsh, estamos muy contentos que te sumes a nuestro gran equipo. </p>"
            nodemailerFunction(emailContent, req.body.email, 'Hola, nos contactamos desde el centro cultural Maria Elena Walsh')
            res.send('creado con exito')
        }

        catch (err) {

            console.log(err)
            res.send('error al guardar usuario')
        }

    },

    sendEmail: (req, res, next) => {

        let emailContent = `
            <ul>
            <li>Nombre : ${req.body.name}</li>
            <li>Email del sujeto : <strong> ${req.body.email}</strong>
            </ul>
            <p>Mensaje : ${req.body.message}</p>
            `
        nodemailerFunction(emailContent, 'administracion@fundacionramseyer.org.ar', req.body.ref)
        res.send('email enviado con exito')
    },

}

module.exports = userFunctions;