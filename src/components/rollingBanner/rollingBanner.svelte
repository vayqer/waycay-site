<script>
	import Typewriter from "svelte-typewriter";

	const infos = ["Based on your current location"];

	$: index = 0;
	$: opacity = 1;
	function onDone() {
		index++;

		setInfoText();

		if (index >= 5) index = 0;
	}

	$: setInfoText = () => {
		if (index == 2) set("Based on your current location");
		else if (index == 3) set("Automatically filters closed locations");
		else if (index == 4) set("Trip generation");
		else {
			set("");
		}

		function set(set) {
			setTimeout(() => {
				opacity = 0;
			}, 2000);
			setTimeout(() => {
				opacity = 1;
				text = set;
			}, 3000);
		}
	};
	$: text = "";
</script>

<div class="container">
	<p class="info" style:opacity>{text}</p>
	<Typewriter
		mode="loop"
		keepCursorOnFinish={true}
		--cursor-width="2px"
		on:done={onDone}
	>
		<p class="text">I want to eat sushi in London 🍣</p>
		<p class="text">What are some explorable ruins in Athen? 🏰</p>
		<p class="text">I want to go to a park with my family 👪</p>
		<p class="text">
			What Italian restaurants are open at 19 PM in Gothenburg? ⏰
		</p>
		<p class="text">
			I am driving to Berlin from Copenhagen, what can I do on the way? 🚗
		</p>
	</Typewriter>
</div>

<style>
	.container {
		border-radius: 1em;
		height: 6em;
	}
	.info {
		color: var(--primary-100);
		font-weight: bold;
		font-size: 0.8em;
		margin-bottom: 0;
		height: 2em;
		transition: opacity 400ms linear;
	}
	.text {
		padding: 0.3em 0.8em;
		border-radius: 0.6em;
		margin-top: 0;
		text-align: start;
		background: var(--primary-100);
		color: var(--gray-900);
		max-width: 80%;
		width: fit-content;
		margin-left: auto;
		margin-right: auto;
	}
</style>
