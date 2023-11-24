import nodemailer from 'nodemailer';

export const sendMeMail = async ({ name, email, message }) => {

    // Configurer le transporteur Nodemailer avec les détails de votre service de messagerie
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
        },
    });

    // Configuration de l'e-mail

    let mailOptions = {
        from: email,
        to: process.env.RECEIVER_ADRESS,
        subject: "Contact via 2br",
        text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `
            <html>
                <head>
                    <style>
                        /* Styles CSS en ligne */
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f4f4f4;
                            margin: 0;
                            padding: 0;
                        }
                        .container {
                            width: 80%;
                            margin: 0 auto;
                            background-color: #fff;
                            padding: 20px;
                            border-radius: 5px;
                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        }
                        h1 {
                            color: #333;
                        }
                        p {
                            color: #666;
                        }
                        .signature {
                            text-align: right;
                            font-style: italic;
                            color: #999;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h1>Bonjour Stéphane,</h1>
                        <p>Vous avez reçu un nouveau message de la part de ${name} :</p>
                        <p>Email: ${email}</p>
                        <p>"${message}"</p>
                        <p>Pour le consulter, veuillez cliquer sur le lien ci-dessous :</p>
                        <a href="${process.env.DASHBOARD_URL}" target="_blank">Accedez à votre messagerie professionnelle</a>
                       
                        
                        <div class="signature">
                            Cordialement,<br>
                            ${name}
                        </div>
                    </div>
                </body>
            </html>
        `
    };



    // Envoyer l'e-mail
    try {
        // Envoyer l'e-mail
        const info = await transporter.sendMail(mailOptions);
        console.log('E-mail envoyé : ' + info.response);
        return info;
    } catch (error) {
        console.error(error);

        return error;
    }
};


