<script lang="js">
	export let text;
	export let width = "auto";
	export let onClick;
</script>

<button style:width on:click={onClick}>{text}</button>

<style>
	button {
		border: 1px solid var(--primary-100);
		background-color: transparent;
		padding: 0.8rem 2rem;
		color: var(--primary-100);
		cursor: pointer;
		transition: border-radius 200ms ease;
	}
	button:hover {
		background-color: var(--primary-100);
		color: var(--gray-800);
	}
</style>
