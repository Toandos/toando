import { requiredEnv } from "../env";
import OidcClient from "./OidcClient";

let oidcClient : OidcClient | null = null;
export const getOidcClient = () => {
    if(oidcClient == null) {
        const serverUrl = requiredEnv("OIDC_SERVER_URL")
        const clientId = requiredEnv("OIDC_CLIENT_ID");
        const clientSecret = requiredEnv("OIDC_CLIENT_SECRET");
        oidcClient = new OidcClient({
            serverUrl: new URL(serverUrl),
            clientId,
            clientSecret
        })
    }
    return oidcClient;
}