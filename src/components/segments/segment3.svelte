<script>
	import Saos from "saos";
</script>

<div class="container margin w-100 text-center">
	<Saos
		animation={"slide-top 400ms ease both"}
		top={150}
		animation_out={"slide-top-out 400ms ease both"}
	>
		<h2>Be ready for the next generation</h2>
	</Saos>
	<Saos
		animation={"slide-top 400ms ease both"}
		top={250}
		animation_out={"slide-top-out 400ms ease both"}
	>
		<h3>Notify me when it's ready</h3>
		<form>
			<div class="input-group">
				<input
					type="email"
					placeholder="Enter emailadress"
					class="text-center"
				/>
				<div class="line" />
			</div>
			<div>
				<p class="info">
					The first <b style:color="var(--primary-100)">1000 sign ups</b> will recieve
					early access to Waycay and WaycAI, dont miss out!
				</p>
			</div>
			<input type="submit" value="Sign me up!" />
		</form>
	</Saos>
</div>

<style>
	.input-group {
		position: relative;
	}
	input:not([type="submit"]) {
		background-color: var(--gray-900);
		border: none;
		padding: 1rem 1rem;
		width: 20rem;
		max-width: 60vw;
		border-image: linear-gradient(
				to left top,
				var(--primary-100),
				var(--gray-600)
			)
			1;
		border-width: 1px;
		border-style: solid;
		color: var(--primary-100);
	}
	input::placeholder {
		color: var(--gray-300);
	}
	.line {
		position: absolute;
		z-index: -1;
		border-image: linear-gradient(
				to left,
				transparent,
				var(--primary-100),
				transparent
			)
			1;
		border-width: 2px;
		border-top-width: 0;
		border-style: solid;
		transform: translateY(-50%);
		top: 50%;
		left: 0;
		right: 0;
		height: 1px;
		animation: line-fade 800ms ease-out;
		animation-delay: 400ms;
		opacity: 0;
		animation-fill-mode: forwards;
	}
	.info {
		font-size: 0.7rem;
		color: var(--gray-200);
	}
	input[type="submit"] {
		margin-top: 2rem;
		border: none;
		background-color: var(--primary-100);
		padding: 1rem 6rem;
		color: var(--gray-800);
		cursor: pointer;
	}

	@keyframes line-fade {
		0% {
			border-image: linear-gradient(to left, transparent, transparent) 1;
			left: 100%;
			right: 100%;
			opacity: 1;
		}
		100% {
			border-image: linear-gradient(
					to left,
					transparent,
					var(--primary-100),
					transparent
				)
				1;
			left: 0;
			right: 0;
			opacity: 1;
		}
	}
</style>
