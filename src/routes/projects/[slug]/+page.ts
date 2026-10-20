import { error } from '@sveltejs/kit';
import { articleSlugs, getProject } from '$lib/projects';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

// Tell the prerenderer about every project that has an article.
export const entries: EntryGenerator = () => articleSlugs.map((slug) => ({ slug }));

export const load: PageLoad = ({ params }) => {
	const found = getProject(params.slug);
	if (!found) error(404, 'Project not found');
	return found;
};
