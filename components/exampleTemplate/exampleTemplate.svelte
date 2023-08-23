<script lang="js">
	import Footer from "./footer.svelte";

	export let example;
</script>

<div class="walkthrough-container">
	<div class="header">
		<span>{example}</span>
	</div>
	<div class="walkthrough">
		<slot />
	</div>
	<Footer />
</div>

<style>
	.header {
		background-color: var(--gray-900);
		padding: 0.4em 0.6em;
		color: var(--gray-500);
		font-family: "Open sans";
		font-size: 0.8em;
	}
	.walkthrough-container {
		border: 1px solid var(--gray-500);
		overflow: hidden;
		display: flex;
		flex-direction: column;
		float: right;
		width: 23rem;
		display: flex;
		border-radius: 1em;
		box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
		-webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
		-moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
		background-color: var(--primary-50);
	}
	.walkthrough {
		flex-grow: 1;
		padding-top: 1em;
	}
	h2 {
		font-size: 1.4em;
		padding-left: 1em;
		opacity: 0.6;
		color: var(--gray-800);
	}
</style>
