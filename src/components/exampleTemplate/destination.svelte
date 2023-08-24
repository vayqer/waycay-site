<script lang="js">
	import Icon from "@iconify/svelte";
	import Rating from "./rating.svelte";
	import { base } from "$app/paths";

	export let title;
	export let rating;
	export let icon;
	export let distanceLabel;
	export let backgroundImageUrl;
	export let expandAfter = undefined;
	$: expanded = false;

	if (expandAfter) {
		setTimeout(() => {
			expanded = true;
		}, expandAfter);
	}
</script>

<div
	class="destination"
	style:background-image={`url(${base + backgroundImageUrl})`}
>
	<div class="overlay" />

	<Rating {rating} />

	<div>
		<Icon color="var(--primary-100)" width="22" {icon} />
	</div>
	<h4>{title}</h4>
	<span class="distance">{distanceLabel}</span>

	<div class="buttons" style:max-height={!expanded ? "0em" : "3em"}>
		<button>Read more</button>
		<button>Add to route</button>
	</div>
</div>

<style>
	h4 {
		margin: 0;
		color: var(--primary-100);
		font-family: "open sans";
		font-size: 1.2em;
		font-weight: bolder;
		padding-bottom: 1em;
	}
	.destination {
		border-radius: 1em;
		overflow: hidden;
		text-align: start;
		padding: 1em 1em;
		background-image: url("/assets/img_REPLACE_ME.jpg");
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		margin-bottom: 0.1em;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: end;
	}
	.destination > *:not(.overlay) {
		z-index: 1;
		position: relative;
	}
	.distance {
		font-weight: bold;
	}
	.distance {
		font-size: 0.7em;
		color: white;
		font-family: "Open sans";
	}
	.overlay {
		position: absolute;
		z-index: 0;
		inset: 0;
		background: linear-gradient(to top, var(--gray-800), transparent);
		opacity: 0.8;
	}
	button {
		background-color: transparent;
		border: none;
		font-weight: bold;
		padding: 0;
		padding-right: 1em;
		padding-top: 1em;
	}
	.buttons {
		overflow: hidden;
		transition: max-height 1s ease;
	}
</style>
