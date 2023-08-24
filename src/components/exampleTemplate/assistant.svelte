<script lang="js">
	import Icon from "@iconify/svelte";
	export let text;
	export let delay = 1.5;
</script>

<p class="info" style:animation-delay={`${delay}s`}>WaycAI</p>
<div class="container" style:animation-delay={`${delay}s`}>
	<div class="answer">
		<Icon color="var(--gray-800)" width="26" icon="tabler:brand-openai" />
		<p>{text}</p>
	</div>

	<slot />
</div>

<style>
	.info {
		margin: 0;
		font-size: 0.8em;
		font-style: italic;
		margin-left: 1em;
		color: var(--gray-300);
		animation: slide-left 1s ease;
		animation-delay: 1.5s;
		opacity: 0;
		animation-fill-mode: forwards;
	}
	.answer {
		display: flex;
		padding: 1em;
		text-align: start;
	}
	.container {
		display: flex;
		flex-direction: column;
		width: 100%;
		background-color: var(--primary-0);
		animation: fade-in 1s ease;
		animation-delay: 1.5s;
		opacity: 0;
		animation-fill-mode: forwards;
		-webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
		-moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
		box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
	}
	p {
		width: fit-content;
		margin-right: auto;
		color: var(--gray-800);
		margin: 0;
		margin-left: 0.6em;
	}

	@keyframes fade-in {
		0% {
			opacity: 0;
			transform: translateY(1em);
		}
		50% {
			opacity: 0;
			transform: translateY(1em);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
