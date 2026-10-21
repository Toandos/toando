import ConnectClients from "$lib/server/connect.js"
import { redirect } from '@sveltejs/kit'

export async function load({ url, cookies }) {
    const code = url.searchParams.get('code');
  
    if (!code) throw redirect(303, '/login?error=missing_code');
    const sessionToken = cookies.get("session_token");

    ConnectClients.sessionService.authenticate({
        token: sessionToken,
        oidcAuthorizationCode: code
    })

    throw redirect(303, "/")
}