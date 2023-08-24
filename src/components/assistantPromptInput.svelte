<script>
	import Icon from "@iconify/svelte";
</script>

<div class="prompt">
	<span>Send a message</span><Icon
		color="var(--primary-100)"
		height="32"
		icon="mingcute:square-arrow-right-fill"
	/>
</div>

<style>
	.prompt {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: absolute;
		left: 1rem;
		right: 1rem;
		bottom: 0;
		background-color: var(--gray-900);
		border-radius: 0.5em;
		padding: 0.5rem 0.7rem;
		-webkit-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.3);
		-moz-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.3);
		box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.3);
		text-align: left;
		color: var(--gray-500);
		font-family: "Open sans";
		font-size: 0.8em;
	}
</style>
