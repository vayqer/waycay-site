<script>
	import Icon from "@iconify/svelte";
	import CustomButton from "../customButton.svelte";
	import RollingBanner from "../rollingBanner/rollingBanner.svelte";
	import Usp from "../usp.svelte";
	import UspContainer from "../uspContainer.svelte";
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

	<p class="container subtext">
		Embark on a journey of discovery with Waycay – ingeniously simple, yet
		infinitely powerful. Seamlessly navigate through unique destinations, guided
		by a user-friendly interface.
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
