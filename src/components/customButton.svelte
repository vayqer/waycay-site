<script lang="js">
	export let text;
	export let width = "auto";
</script>

<button style:width>{text}</button>

<style>
	button {
		border: 1px solid var(--primary-100);
		background-color: transparent;
		padding: 0.8rem 2rem;
		color: var(--primary-100);
		cursor: pointer;
	}
</style>
