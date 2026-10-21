import { env } from '$env/dynamic/private';

export const requiredEnv = (name: string) => {
    const value = env[name];
    if(!value) throw new Error(`Missing required environment variable: ${name}`);
    return value;
}