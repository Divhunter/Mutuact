import { ConfigService } from "@nestjs/config";
export declare class MailService {
    private readonly configService;
    private societeName;
    private managerName;
    constructor(configService: ConfigService);
    private transporter;
    sendRegisterConfirmation(email: string, fullName: string, token: string): Promise<import("nodemailer/lib/smtp-transport").SentMessageInfo>;
    sendCodeResetPassword(email: string, fullName: string, code: string): Promise<import("nodemailer/lib/smtp-transport").SentMessageInfo>;
}
