<script lang="js">
	import Icon from "@iconify/svelte";

	export let rating;
</script>

<span class="container">
	<Icon color="var(--primary-100)" width="22" icon="ic:round-star" /><span
		>{rating}</span
	></span
>

<style>
	.container {
		display: flex;
		flex-direction: row;
		align-items: center;
		color: var(--primary-100);
		position: relative;
		opacity: 0.6;
	}
	span:not(.container) {
		padding-left: 0.2em;
		margin-top: 0.1em;
		font-weight: bold;
		font-size: 0.8em;
		font-family: "Open sans";
	}
</style>
