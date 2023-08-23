<script>
	import Saos from "saos";
	import CustomButton from "../customButton.svelte";
</script>

<div class="container margin w-100 text-center">
	<p class="info">
		Exclusivity meets excellence with Waycay. Discover a world where luxury and
		beauty converge – because only the best locations are fit for Waycay
		travelers. Your journey, elevated.
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
