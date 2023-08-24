<script>
	import Icon from "@iconify/svelte";
	import CustomButton from "../customButton.svelte";
	import RollingBanner from "../rollingBanner/rollingBanner.svelte";
</script>

<div class="segment1">
	<div class="content">
		<h1 class="main color-white">Explore the World</h1>
		<h1 class="sub color-white">Discover the Hidden Gems of the World</h1>
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
</div>

<style>
	.content {
		padding-left: 1rem;
		padding-right: 1rem;
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
	@media (max-width: 768px) {
		.content {
			padding-top: 5rem;
		}
		h1.main {
			font-size: 3rem;
		}
	}
</style>
