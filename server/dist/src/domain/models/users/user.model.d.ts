import { $Enums, User } from "@prisma/client";
export interface UserModel extends User {
    id: string;
    name: string;
    email: string;
    image: string | null;
    password: string;
    role: $Enums.RoleEnumType;
    emailVerifiedDate: Date | null;
    emailVerified: boolean | null;
}
