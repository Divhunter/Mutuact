import { Projet } from "@prisma/client";
export declare class ProjetModel implements Projet {
    isRead: boolean;
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    createdDate: Date;
    updatedDate: Date;
}