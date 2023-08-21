<script>
	import Saos from "saos";
	import MultipleDays from "./segment2/exampels/multipleDays.svelte";
</script>

<div class="container margin w-100">
	<h2 class="text-center">We want to make exploring easy and accessible</h2>
	<div class="planning-easy">
		<div class="column-1" />
		<div class="column-2">
			<Saos
				animation={"slide-left 400ms ease both"}
				top={0}
				animation_out={"slide-left-out 400ms ease both"}
			>
				<h3>Introducing WaycAI, the AI made for exploration</h3>
				<p>
					We at Waycay are proud to announce WaycAI, an AI made for exploring
					and finding unique places around the globe. WaycAI has been trained to
					suggest destinations and locations for exactly what you want to
					explore and experience.
				</p>
			</Saos>
			<div class="walkthrough-container">
				<div class="walkthrough"><MultipleDays /></div>
			</div>
			<Saos
				animation={"slide-left 400ms ease both"}
				top={350}
				animation_out={"slide-left-out 400ms ease both"}
			>
				<h3>Convert destinations into unique trips</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
					convallis lacus vel finibus vulputate. Sed hendrerit, sem sit amet
					lacinia mattis, erat leo pharetra justo, ac suscipit arcu quam eu
					lorem. Phasellus ac orci quam. Vestibulum vestibulum ut purus eu
					suscipit.
				</p>
			</Saos>
			<div class="walkthrough-container">
				<div class="walkthrough" />
			</div>
			<Saos
				top={350}
				animation={"slide-left 400ms ease both"}
				animation_out={"slide-left-out 400ms ease both"}
			>
				<h3>Car, bicycling or walking. Whatever you choose</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
					convallis lacus vel finibus vulputate. Sed hendrerit, sem sit amet
					lacinia mattis, erat leo pharetra justo, ac suscipit arcu quam eu
					lorem. Phasellus ac orci quam. Vestibulum vestibulum ut purus eu
					suscipit.
				</p>
			</Saos>
		</div>
	</div>
</div>

<style>
	.planning-easy {
		flex-grow: 1;
		display: grid;
		grid-template-columns: 50% 50%;
	}
	.column-1 {
		grid-column: 1;
	}
	.column-2 {
		grid-column: 2;
	}
	.walkthrough-container {
		padding-top: 2rem;
		padding-bottom: 2rem;
		float: right;
		margin-right: 10rem;
		width: 35rem;
		height: 250px;
		display: flex;
	}
	.walkthrough {
		flex-grow: 1;
		background-color: var(--gray-800);
	}
</style>
