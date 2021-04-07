import { User } from "./user.dto";

export interface Login {
    username?: string;
    email?: string;
    password: string;
}

export interface LoginDTO {
    token: string;
    user: User;
}