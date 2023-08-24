<script>
	export let text;
</script>

<div class="container">
	<slot />
	<p>{text}</p>
</div>

<style>
	.container {
		display: flex;
		justify-content: start;
		align-items: center;
		width: 80px;
	}
	p {
		text-align: center;
		max-width: 10em;
		margin-top: 0.5em;
		color: var(--gray-200);
		font-size: 0.9em;
		line-height: normal;
	}
</style>
