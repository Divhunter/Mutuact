"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nodemailer = require("nodemailer");
let MailService = class MailService {
    constructor(configService) {
        this.configService = configService;
        this.societeName = this.configService.get('SOCIETY_NAME');
        this.managerName = this.configService.get('MANAGER_NAME');
    }
    async transporter() {
        const transport = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: this.configService.get('SMTP_USER'),
                pass: this.configService.get('SMTP_PASSWORD'),
            },
        });
        return transport;
    }
    async sendRegisterConfirmation(email, fullName, token) {
        const verificationLink = `${this.configService.get('ORIGIN_URL')}/auth/confirm?token=${token}`;
        const mailOptions = {
            from: process.env.SMTP_USER,
            to: email,
            subject: 'Vérification de votre adresse e-mail',
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
                    <span>Bonjour <h1> ${fullName},</h1></span>
                        <p>Merci d'avoir rejoint ${this.societeName} ! Vous avez 7h pour activer votre compte et commencer à explorer, veuillez cliquer sur le lien de vérification ci-dessous :</p>
                        <a href="${verificationLink}" target="_blank">${verificationLink}</a>
                        <div class="signature">
                            Cordialement,<br>
                            ${this.managerName}
                        </div>
                    </div>
                </body>
            </html>
        `
        };
        try {
            const info = await (await this.transporter()).sendMail(mailOptions);
            console.log('E-mail ConfirmatEmail envoyé : ' + info.response);
            return info;
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException("Error lors de l'envoie de l'email de confirmation");
        }
    }
    async sendCodeResetPassword(email, fullName, code) {
        const mailOptions = {
            from: process.env.SMTP_USER,
            to: email,
            subject: 'Reinisialisation du mot de passe.',
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
                    <span>Bonjour <h3> ${fullName},</h3></span>
                        <p>Vous avez fait une demande de réinisialisation de votre mot de pass? :</p>
                        <p>Utilise le code suivant dans votre processus pour changer votre mot de passe.</p>
                        <h2>${code}</h2>
                        <p>Le code est valable en 15 minutes.</p>
                        <div class="signature">
                            Cordialement,<br>
                            ${this.managerName}
                        </div>
                    </div>
                </body>
            </html>
        `
        };
        try {
            const info = await (await this.transporter()).sendMail(mailOptions);
            console.log('E-mail ResetPassword envoyé : ' + info.response);
            return info;
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException("Error lors de l'envoie de l'email de reset password");
        }
    }
};
exports.MailService = MailService;
exports.MailService = MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], MailService);
//# sourceMappingURL=mail.service.js.map