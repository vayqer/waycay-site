<script>
	import CustomButton from "../customButton.svelte";
	import RollingBanner from "../rollingBanner/rollingBanner.svelte";
</script>

<div class="segment1">
	<div class="content">
		<h1 class="main">Explore the World</h1>
		<h1 class="sub">
			Artificial Intelligense Unleashing New Horizons in World Exploration
		</h1>
		<RollingBanner />

		<div class="mt-3">
			<CustomButton
				text="Explore Waycay"
				onClick={() => {
					document
						.querySelector("#segment2")
						.scrollIntoView({ behavior: "smooth" });
				}}
			/>
		</div>
	</div>

	<p class="container subtext">
		Combining AI and locations in real time, Waycay unveils new frontiers in
		regards of exploration, roadtrips and trip generation. Right in the palm of
		your hands.
	</p>
</div>

<style>
	.content {
		padding-top: 10rem;
		padding-bottom: 5rem;
		min-height: 30vh;
	}
	.segment1 {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
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
	.subtext {
		margin-top: 10rem;
		margin-bottom: 10rem;
		font-size: 2em;
		font-family: "Libre Baskerville", serif;
		line-height: 2em;
		color: var(--gray-500);
		border-image: linear-gradient(
				to left,
				transparent,
				var(--primary-100),
				transparent
			)
			1;
		border-style: solid;
		border-width: 1px;
		padding: 4rem;
	}
</style>
