import { redirect } from '@sveltejs/kit';

// Old URL; the article now lives at /projects/skater-data
export const prerender = true;
export const load = () => redirect(308, '/projects/skater-data');
