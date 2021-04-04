export const rests = {
    login: {
        post_create: '/api/login'
    },
    logout: {
        api_logout: '/api/logout',
        // post_logout: '/api/logout'
    },
    password: {
        post_change: '/api/password/change',
        post_reset: '/api/password/reset',
        post_reset_confirm: '/api/password/reset/confirm'
    },
    registration: {
        post_create: '/api/registration',
        post_verify: '/api/registration/verify-email'
    },
    user: {
        api_user: '/api/user',
        // put_update: '/api/user',
        // patch_update: '/api/user'
    },
    users: {
        get_brigadiers: '/api/users/brigadiers',
        // post_brigadiers: '/api/users/brigadiers',
        // get_brigadier: '/api/users/brigadiers/{id}',
        // put_brigadiers: '/api/users/brigadiers/{id}',
        // patch_brigadiers: '/api/users/brigadiers/{id}',
        // delete_brigadiers: '/api/users/brigadiers/{id}'
        api_workers: '/api/users/workers'
    }
};
