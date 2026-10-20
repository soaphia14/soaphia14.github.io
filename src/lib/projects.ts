// Every project lives in src/lib/projects/<slug>.md (see _template.md there).
// This file reads them all and hands out typed lists, so nothing else needs editing
// when a project is added.
import type { Component } from 'svelte';

export interface Link {
	type: 'ext' | 'github' | 'youtube';
	url: string;
	target?: '_blank' | '_self'; // defaults to a new tab for external links
	name?: string;
}

export type TagColor = 'red' | 'orange' | 'amber' | 'green' | 'blue' | 'purple' | 'pink';

/** In frontmatter a tag is a plain word, or { name, color, url } for a colored and/or linked pill. */
export interface Tag {
	name: string;
	color?: TagColor;
	url?: string;
}

export interface Project {
	slug: string;
	title: string;
	status: 'done' | 'wip';
	summary: string;
	years: number[];
	date?: string;
	pinned: boolean;
	banner?: string;
	bannerVideo?: string; // looping muted video shown instead of the banner image
	bannerPosition?: string; // which part of the banner stays in view when cropped, e.g. "80% 40%"
	bannerFit?: 'cover' | 'contain'; // contain = show the whole banner on cards (bannerBg fills the gaps)
	bannerBg?: string;
	tags: Tag[];
	links: Link[];
	hasArticle: boolean;
}

type MdModule = { default: Component; metadata?: Record<string, unknown> };

// (import.meta.glob needs literal patterns, hence the repetition)
const modules = import.meta.glob<MdModule>(['./projects/*.md', '!./projects/_*.md'], { eager: true });
const sources = import.meta.glob<string>(['./projects/*.md', '!./projects/_*.md'], {
	query: '?raw',
	import: 'default',
	eager: true
});

const slugOf = (path: string) => path.split('/').pop()!.replace(/\.md$/, '');

// An article exists when there's anything written below the frontmatter.
const bodyOf = (raw: string) => raw.replace(/^---[\s\S]*?\n---/, '').trim();

const all: Project[] = Object.entries(modules).map(([path, mod]) => {
	const meta = (mod.metadata ?? {}) as Partial<Project>;
	const slug = slugOf(path);
	const hasArticle = bodyOf(sources[path] ?? '').length > 0;
	const links = [...(meta.links ?? [])];
	if (hasArticle) links.unshift({ type: 'ext', name: 'Article', url: `/projects/${slug}`, target: '_self' });

	return {
		slug,
		title: meta.title ?? slug,
		status: meta.status ?? 'done',
		summary: meta.summary ?? '',
		years: meta.years ?? [],
		date: meta.date,
		pinned: meta.pinned ?? false,
		banner: meta.banner,
		bannerVideo: meta.bannerVideo,
		bannerPosition: meta.bannerPosition,
		bannerFit: meta.bannerFit,
		bannerBg: meta.bannerBg,
		tags: ((meta.tags ?? []) as (string | Tag)[]).map((t) => (typeof t === 'string' ? { name: t } : t)),
		links,
		hasArticle
	};
});

const newest = (p: Project) => Math.max(0, ...p.years);

/** Finished projects, newest first. */
export const projects = all
	.filter((p) => p.status === 'done')
	.sort((a, b) => newest(b) - newest(a) || a.title.localeCompare(b.title));

/** Shown in "Pinned" at the top of Projects (and not repeated in their year). */
export const pinned = projects.filter((p) => p.pinned);

/** Unpinned projects grouped into year sections, newest first (multi-year ones go under their latest year). */
export const yearSections = (() => {
	const byYear = new Map<number, Project[]>();
	for (const p of projects.filter((p) => !p.pinned)) byYear.set(newest(p), [...(byYear.get(newest(p)) ?? []), p]);
	return [...byYear].map(([year, projects]) => ({ year, projects }));
})();

/** "In the Works" projects. */
export const wipProjects = all.filter((p) => p.status === 'wip');

/** Every year that appears on a finished project, newest first. */
export const years = [...new Set(projects.flatMap((p) => p.years))].sort((a, b) => b - a);

/** Label shown on cards: the custom date, or the years ("2023–2024"). */
export const dateLabel = (p: Project) =>
	p.date ?? (p.years.length > 1 ? `${Math.min(...p.years)}–${newest(p)}` : String(p.years[0] ?? ''));

export function getProject(slug: string) {
	const path = `./projects/${slug}.md`;
	const project = all.find((p) => p.slug === slug && p.hasArticle);
	return project ? { project, Content: modules[path].default } : undefined;
}

export const articleSlugs = all.filter((p) => p.hasArticle).map((p) => p.slug);
