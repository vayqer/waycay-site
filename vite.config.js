import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default async () => {
	const dev = process.argv.includes("dev");

	var ghpages = await import("gh-pages");

	ghpages.publish("static", { dotfiles: true, add: true });

	return defineConfig({
		plugins: [sveltekit()],
		base: dev ? "" : "/waycay-site",
	});
};
