<script>
	import Segment1 from "../components/segments/segment1.svelte";
	import Segment2 from "../components/segments/segment2.svelte";
	import Segment3 from "../components/segments/segment3.svelte";
	import Segment4 from "../components/segments/segment4.svelte";
</script>

<div>
	<div class="top-backgrounds">
		<div class="top-overlay-radius" />
		<div class="top-overlay-linear" />
		<div class="top-page-background" />
	</div>
	<div>
		<Segment1 />
		<div class="container">
			<Segment2 />
			<Segment3 />
			<Segment4 />
		</div>
	</div>
</div>

<style>
	.top-backgrounds {
		width: 100vw;
		height: 100vh;
		position: absolute;
		inset: 0;
		z-index: -1;
	}
	.top-backgrounds > div {
		position: absolute;
		inset: 0;
	}
	.top-page-background {
		background-image: url("/assets/img_REPLACE_ME.jpg");
		background-repeat: no-repeat;
		background-size: cover;
		background-position: 0% 90%;
		z-index: -1;
	}
	.top-overlay-radius {
		background-image: radial-gradient(transparent 70%, var(--gray-900));
		opacity: 1;
	}
	.top-overlay-linear {
		background-image: linear-gradient(transparent, var(--gray-900));
	}
</style>
