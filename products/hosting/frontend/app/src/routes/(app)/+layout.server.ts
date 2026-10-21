import ConnectClients from '$lib/server/connect.js'

export const load = async () => {
    const apps = await ConnectClients.appService.listApps({});
    return { apps };
}