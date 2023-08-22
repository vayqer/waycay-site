<script lang="js">
	import Rating from "./rating.svelte";

	export let title;
	export let rating;
	export let categories;
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

<div class="destination" style:background-image={`url(${backgroundImageUrl})`}>
	<div class="overlay" />
	<h4>{title}</h4>
	<Rating {rating} />
	<div class="categories">
		{#each categories as category, i}
			<span>
				{#if i < categories.length - 1}
					{category},
				{:else}
					{category}
				{/if}
			</span>
		{/each}
	</div>
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
		font-family: "Libre Baskerville", serif;
	}
	.destination {
		text-align: start;
		padding: 1em 1em;
		background-image: url("/assets/img_REPLACE_ME.jpg");
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		margin-bottom: 0.1em;
		position: relative;
	}
	.destination > *:not(.overlay) {
		z-index: 1;
		position: relative;
	}
	.categories {
		padding-top: 0.6em;
		font-style: italic;
	}
	.distance {
		font-weight: bold;
	}
	.distance,
	.categories > span {
		font-size: 0.9em;
		color: white;
	}
	.overlay {
		position: absolute;
		z-index: 0;
		inset: 0;
		background: linear-gradient(to right, var(--gray-800), transparent);
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
