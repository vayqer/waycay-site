<script>
	import Icon from "@iconify/svelte";
</script>

<div class="footer">
	<div class="button" data-selected="true">
		<Icon color="var(--primary-100)" width="26" icon="tabler:brand-openai" />
		<span>WaycAI</span>
	</div>
	<div class="button">
		<Icon color="var(--primary-100)" width="26" icon="solar:map-bold" />
		<span>Map</span>
	</div>
	<div class="button">
		<Icon color="var(--primary-100)" width="26" icon="ph:house-fill" />
		<span>Home</span>
	</div>
</div>

<style>
	.footer {
		min-height: 3em;
		background-color: var(--gray-900);
		margin-top: 1em;
		display: flex;
		justify-content: space-around;
		padding: 0.4em;
	}

	.button {
		display: flex;
		flex-direction: column;
		align-items: center;
		opacity: 0.5;
	}
	.button[data-selected="true"] {
		opacity: 1;
	}
	span {
		font-family: "Open sans";
		color: var(--gray-200);
		font-size: 0.7em;
		font-weight: bold;
		padding-top: 0.1em;
	}
</style>
