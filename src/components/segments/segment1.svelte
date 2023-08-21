<script>
	import CustomButton from "../customButton.svelte";
</script>

<div class="segment1">
	<h1 class="main">Explore the World</h1>
	<h1 class="sub">
		Artificial Intelligense Unleashing New Horizons in World Exploration
	</h1>
	<CustomButton text="Explore Waycay" />
</div>

<style>
	.segment1 {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		height: 75vh;
	}
	h1.main {
		font-size: 3.4rem;
		margin-bottom: 1rem;
	}
	h1.sub {
		font-size: 1.1rem;
		margin-bottom: 3rem;
	}
	h1 span {
		font-family: "Dancing Script", cursive;
		color: var(--primary-100);
	}
</style>
