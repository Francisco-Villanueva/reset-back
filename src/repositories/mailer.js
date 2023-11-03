const nodemailer = require("nodemailer");
require("dotenv").config();
const { MAIL_PW, MAIL } = process.env;

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: MAIL,
    pass: MAIL_PW,
  },
});

function sendMail(data) {
  const mailOptions = {
    from: MAIL,
    to: data.email,
    subject: "Detalles del turno",
    html: `<!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border: 1px solid #333;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          h2 {
            color: #333;
          }
          p {
            font-size: 16px;
            line-height: 1.6;
          }
          .button {
            display: inline-block;
            padding: 10px 20px;
            margin: 0 auto;
            font-size: 16px;
            font-weight: bold;
            text-align: center;
            text-decoration: none;
            background-color: #347469;
            color: #fff !important;
            border-radius: 5px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div style="display: flex; justify-content: center">
            <h1 style="font-weight: 400">~ RESET HAIR STUDIO ~</h1>
          </div>
          <h2>Detalles del turno</h2>
          <p>Hola <strong>${data.name}</strong>,</p>
          <p>
            Has agendado un turno con para el <strong>${data.date}</strong> a las
            <strong>${data.time}</strong>, con  <strong>${data.barber}</strong> 
          </p>
          <p>Para cancelar el turno, haz click en el siguiente boton</p>
          <a class="button" href="http://localhost:5173/turnos/${data.id}"
            >Cancelar turno</a
          >
        </div>
      </body>
    </html>
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error("Error al enviar el correo:", error);
      return { message: "Error al enviar el correo:" + error };
    } else {
      console.log("Correo electrónico enviado:", info.response);

      return { message: "Mail enviado!" };
    }
  });
}

module.exports = {
  sendMail,
};
