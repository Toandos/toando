import type { sessions } from "$lib/server/db/schema";

export type Session = typeof sessions.$inferSelect;

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Error {
			service: string
		}
		interface Locals {
			session: Session | undefined
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
