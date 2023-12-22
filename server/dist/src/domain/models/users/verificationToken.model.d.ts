import { $Enums, VerificationToken } from "@prisma/client";
export interface VerificationTokenModel extends VerificationToken {
    id: string;
    userId: string;
    token: string;
    isUsed: boolean;
    createdAt: Date;
    expiresAt: Date;
    type: $Enums.VerificationTokenType | null;
}
export declare enum VerificationTokenType {
    InitialVerification = "initial_verification",
    ResetEmail = "reset_email"
}
