<script>
	import Saos from "saos";
	import CustomButton from "../customButton.svelte";
</script>

<div class="container margin w-100 text-center">
	<Saos
		animation={"slide-top 400ms ease both"}
		top={300}
		animation_out={"slide-top-out 400ms ease both"}
	>
		<h2>The Waycay app</h2>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
			convallis lacus vel finibus vulputate. Sed hendrerit, sem sit amet lacinia
			mattis, erat leo pharetra justo, ac suscipit arcu quam eu lorem. Phasellus
			ac orci quam. Vestibulum vestibulum ut purus eu suscipit.
		</p>
		<div class="buttons">
			<CustomButton width="20rem" text="Coming soon to iOS" />
			<CustomButton width="20rem" text="Coming soon to Android" />
		</div>
	</Saos>
</div>

<style>
	.buttons {
		display: inline-flex;
		flex-wrap: wrap;
		gap: 2rem;
		justify-content: center;
	}
</style>
