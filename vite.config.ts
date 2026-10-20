import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { execSync } from 'node:child_process';

// Date of the latest commit, shown in the footer (falls back to build time).
function lastUpdated() {
	try {
		return execSync('git log -1 --format=%cI', { encoding: 'utf8' }).trim();
	} catch {
		return new Date().toISOString();
	}
}

export default defineConfig({
	plugins: [sveltekit(), tailwindcss()],
	define: {
		__LAST_UPDATED__: JSON.stringify(lastUpdated())
	}
});
