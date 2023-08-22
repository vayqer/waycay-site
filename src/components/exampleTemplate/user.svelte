<script lang="js">
	import Typewriter from "svelte-typewriter/Typewriter.svelte";

	export let text;
</script>

<div>
	<p class="info">User</p>
	<Typewriter cursor={false}>
		<p class="text">{text}</p>
	</Typewriter>
</div>

<style>
	.info {
		margin: 0;
		font-size: 0.8em;
		font-style: italic;
		margin-left: auto;
		margin-right: 1em;
		color: var(--gray-300);
	}
	div {
		min-height: 2em;
		display: flex;
		flex-direction: column;
		margin-left: auto;
		width: fit-content;
		max-width: 80%;
		margin-right: 1em;
	}
	.text {
		padding: 0.3em 0.8em;
		border-radius: 0.6em;
		margin-top: 0;
		text-align: start;
		background: var(--primary-100);
		color: var(--gray-900);
	}
</style>
