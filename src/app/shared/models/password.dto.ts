export interface PasswordChange {
    new_password1: string;
    new_password2: string;
}

export interface PasswordReset {
    email: string;
}

export interface PasswordResetConfirm {
    new_password1: string;
    new_password2: string;
    uid: string;
    token: string;
}