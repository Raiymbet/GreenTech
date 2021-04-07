export interface RegistrationCreate {
    username: string;
    email: string;
    password1: string;
    password2: string;
}

export interface RegistrationVerifyEmail {
    key: string;
}