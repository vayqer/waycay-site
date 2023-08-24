<script>
	import Saos from "saos";
	import ExampleTemplate from "../exampleTemplate/exampleTemplate.svelte";
	import Assistant from "../exampleTemplate/assistant.svelte";
	import User from "../exampleTemplate/user.svelte";
	import Destination from "../exampleTemplate/destination.svelte";
	import DestinationContainer from "../exampleTemplate/destinationContainer.svelte";
	import UspContainer from "../uspContainer.svelte";
	import Usp from "../usp.svelte";
	import Icon from "@iconify/svelte";
	import AssistantPromptInput from "../assistantPromptInput.svelte";
</script>

<div class="container margin w-100" id="segment2">
	<div class="planning-easy">
		<div class="column-full text-center">
			<h2>Designed to be simple, yet powerful</h2>
		</div>
		<div class="column-1">
			<Saos
				animation={"slide-right 400ms ease both"}
				top={350}
				bottom={-800}
				animation_out={"slide-right-out 400ms ease both"}
			>
				<ExampleTemplate example="Things to do in Gothenburg example">
					<User text="What can I do in Gothenburg?" />
					<Assistant
						text="Gothenburg, located on the west coast of Sweden, is a vibrant and dynamic city with plenty to offer visitors. Here are some things you can do in Gothenburg:"
					>
						<DestinationContainer>
							<Destination
								backgroundImageUrl="/assets/burger.jpg"
								title="Gundes Burgers"
								icon="fluent:food-24-filled"
								rating={4.2}
								distanceLabel="3.4 km from your location"
							/>
							<Destination
								backgroundImageUrl="/assets/amusement.jpg"
								title="Amusement Parksson"
								icon="maki:amusement-park"
								rating={4.2}
								distanceLabel="4 km from your location"
							/>
							<Destination
								backgroundImageUrl="/assets/museum.jpg"
								title="Gundes Borgeby"
								icon="mdi:museum"
								rating={4.2}
								distanceLabel="8 km from your location"
							/>
						</DestinationContainer>
					</Assistant>
					<AssistantPromptInput />
				</ExampleTemplate>
			</Saos>
		</div>
		<div class="column-2">
			<Saos
				animation={"slide-left 400ms ease both"}
				top={350}
				animation_out={"slide-left-out 400ms ease both"}
			>
				<h3>WaycAI, the AI forged for exploration</h3>
				<p>
					WaycAI, a groundbreaking AI designed exclusively for the modern-day
					travelers and adventurers. With its cutting-edge capabilities, WaycAI
					is your ultimate companion on journeys of discovery. Unleash the power
					of artificial intelligence and embark on extraordinary adventures with
					WaycAI by your side.
				</p>
				<UspContainer>
					<Usp text="Location based"
						><Icon
							color="var(--primary-100)"
							width="32"
							icon="material-symbols:distance"
						/></Usp
					>
					<Usp text="Real time"
						><Icon
							color="var(--primary-100)"
							width="32"
							icon="mdi:timer-refresh"
						/></Usp
					>
					<Usp text="Follows your preferences"
						><Icon
							color="var(--primary-100)"
							width="32"
							icon="pajamas:preferences"
						/></Usp
					>
				</UspContainer>
			</Saos>
		</div>
		<div class="column-1">
			<Saos
				animation={"slide-right 400ms ease both"}
				top={350}
				bottom={-800}
				animation_out={"slide-right-out 400ms ease both"}
			>
				<ExampleTemplate example="Suggestions to roadtrip">
					<User text="Are there any beautiful views around Amsterdam?" />

					<Assistant
						delay={2}
						text="Yes, Amsterdam and its surrounding areas offer several beautiful views and picturesque spots. Here are some places where you can enjoy stunning views:"
					>
						<DestinationContainer>
							<Destination
								expandAfter={4000}
								backgroundImageUrl="/assets/views/view1.jpg"
								title="Vondelpark"
								icon="ic:round-park"
								rating={4.7}
								distanceLabel="2 km from your location"
							/>
							<Destination
								backgroundImageUrl="/assets/views/view2.jpg"
								title="Amsterdam Houses"
								icon="ph:binoculars-fill"
								rating={4.1}
								distanceLabel="17 km from your location"
							/>
							<Destination
								backgroundImageUrl="/assets/views/view3.jpg"
								title="Raundaun View"
								icon="mdi:mountain"
								rating={4.2}
								distanceLabel="5 km from your location"
							/>
						</DestinationContainer>
					</Assistant>
				</ExampleTemplate>
			</Saos>
		</div>
		<div class="column-2">
			<Saos
				animation={"slide-left 400ms ease both"}
				top={350}
				animation_out={"slide-left-out 400ms ease both"}
			>
				<h3>A state of the art trip planner</h3>
				<p>
					Transform destinations into extraordinary journeys. Experience the art
					of crafting personalized roadtrips or adventures that reflect your
					interests and preferences. Let us turn your undiscovered dream
					destinations into unforgettable memories.
				</p>
				<UspContainer>
					<Usp text="Customizeable trips"
						><Icon
							color="var(--primary-100)"
							width="32"
							icon="raphael:split"
						/></Usp
					>
					<Usp text="Filters opening hours"
						><Icon
							color="var(--primary-100)"
							width="32"
							icon="mdi:filter"
						/></Usp
					>
					<Usp text="Gas calculations">
						<Icon
							color="var(--primary-100)"
							width="32"
							icon="fluent:gas-24-filled"
						/>
					</Usp>
					<Usp text="Multi day trip">
						<Icon
							color="var(--primary-100)"
							width="32"
							icon="ph:calendar-fill"
						/>
					</Usp>
				</UspContainer>
			</Saos>
		</div>
	</div>
</div>

<style>
	.planning-easy {
		flex-grow: 1;
		display: grid;
		grid-template-columns: 50% 50%;
		row-gap: 2rem;
	}
	.planning-easy > * {
		padding-left: 1rem;
		padding-right: 1rem;
	}
	.column-1 {
		grid-column: 1;
	}
	.column-2 {
		grid-column: 2;
	}
	.column-full {
		grid-column: 1 / 3;
	}
	@media (max-width: 1200px) {
		.planning-easy {
			overflow: hidden;
		}
	}
	@media (max-width: 768px) {
		.planning-easy {
			grid-template-columns: 100%;
		}
		.planning-easy > * {
			grid-column: 1;
			display: flex;
			justify-content: center;
			text-align: center;
		}
	}
</style>
