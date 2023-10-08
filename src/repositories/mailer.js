const nodemailer = require("nodemailer");

// Configura el transporte del correo electrónico
const transporter = nodemailer.createTransport({
  service: "Gmail", // Cambia esto al servicio de correo que estés utilizando
  auth: {
    user: "panchovillanueva99@gmail.com", // Cambia esto a tu dirección de correo electrónico
    pass: "zarivmfbiupnapes", // Cambia esto a tu contraseña
  },
});

// Función para enviar el correo electrónico
function sendMail(data) {
  const mailOptions = {
    from: "panchovillanuevaj99@gmail.com", // Cambia esto a tu dirección de correo electrónico
    to: data.email, // Usar la dirección de correo proporcionada en la data
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
            margin-top: 20px;
            font-size: 16px;
            font-weight: bold;
            text-align: center;
            text-decoration: none;
            background-color: #007bff;
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
            <strong>${data.time}</strong>.
          </p>
          <p>Para cancelar el turno, haz clic en el siguiente enlace:</p>
          <a class="button" href="http://localhost:5173/turnos/${data.id}"
            >Cancelar turno</a
          >
        </div>
      </body>
    </html>`,
    // text: `Has agendado un turno para el ${data.date} a las ${data.time}. /n Para cancelar el turno, ingresar a: http://localhost:5173/turnos/${data.id}  `,
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
