<script>
	import Saos from "saos";
	import CustomButton from "../customButton.svelte";
</script>

<div class="container margin w-100 text-center">
	<p class="info">
		Get ready to revolutionize the way you travel with the Waycay app. It's more
		than an app; it's your ultimate travel companion, empowering you to
		discover, connect, and experience the world like never before.
	</p>
	<div class="buttons">
		<CustomButton width="20rem" text="Coming to iOS" onClick />
		<CustomButton width="20rem" text="Coming to Android" onClick />
	</div>
</div>

<style>
	.container {
		margin-top: 10rem;
		margin-bottom: 10rem;
	}
	.info {
		font-size: 2em;
		font-family: "Libre Baskerville", serif;
		line-height: 2em;
		color: var(--gray-500);
	}
	.buttons {
		display: inline-flex;
		flex-wrap: wrap;
		gap: 2rem;
		justify-content: center;
	}
</style>
