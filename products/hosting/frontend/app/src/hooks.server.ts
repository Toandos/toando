import ConnectClients from '$lib/server/connect';
import { AsyncLocalStorage } from 'node:async_hooks';

const identityContext = new AsyncLocalStorage<string>();

export async function handle({ event, resolve }) {
	const sessionToken = event.cookies.get('session_token');

	if(!sessionToken) {
		event.locals.session = await ConnectClients.sessionService.createSession({});
		return resolve(event);
	}
	event.locals.session = await ConnectClients.sessionService.getSession({
		token: sessionToken
	})
}