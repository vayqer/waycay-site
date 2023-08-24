<script lang="js">
	import Icon from "@iconify/svelte";

	export let rating;
</script>

<span class="container">
	<Icon color="var(--gold-100)" width="18" icon="ic:round-star" /><span
		>{rating}</span
	></span
>

<style>
	.container {
		display: flex;
		flex-direction: row;
		align-items: center;
		color: var(--gold-100);
		position: absolute;
		top: 1em;
		left: 1em;
		background-color: var(--gray-800);
		border-radius: 0.7em;
		padding: 0.2em 0.5em;
		opacity: 0.7;
	}
	span:not(.container) {
		padding-left: 0.2em;
		font-weight: bold;
		font-size: 0.7em;
		font-family: "Open sans";
	}
</style>
