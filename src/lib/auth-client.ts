import { createAuthClient } from 'better-auth/react';

const authBaseUrl = 
    typeof window !== 'undefined' ? window.location.origin : process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';


export const authClient = createAuthClient({
    baseURL: authBaseUrl,
});

export const { signIn, signUp, signOut, useSession, getSession, linkSocial } = authClient;