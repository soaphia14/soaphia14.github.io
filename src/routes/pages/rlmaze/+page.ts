import { redirect } from '@sveltejs/kit';

// Old URL; the article now lives at /projects/rl-maze
export const prerender = true;
export const load = () => redirect(308, '/projects/rl-maze');
