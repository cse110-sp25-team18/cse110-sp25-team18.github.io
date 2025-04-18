// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://cse110-sp25-group18.github.io',
	integrations: [
		starlight({
			title: 'SpongeScript SquarePants',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/cse110-sp25-team18' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
