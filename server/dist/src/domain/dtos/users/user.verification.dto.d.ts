import { VerificationTokenTypeDto } from "./auth.dto";
export declare class UserVerificationDto {
    userId: string;
    token: string;
    isUsed: boolean;
    createdAt: string;
    expiresAt: string;
    type: VerificationTokenTypeDto;
}
