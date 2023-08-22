<nav>
	<div class="container large">
		<div class="nav-container">
			<a class="waycay">Waycay</a>
		</div>
	</div>
</nav>

<slot />

<footer>
	<div class="footer">
		<h2 class="text-center">Waycay</h2>
		<div class="footer-container">
			<div class="footer-content">
				<div class="links">
					<h3>Company</h3>
					<a>About</a>
					<a>FAQ</a>
					<a>Contact</a>
				</div>
				<div class="links">
					<h3>Terms and Conditions</h3>
					<a>Cookie policy</a>
					<a>Terms and conditions</a>
					<a>Secrecy center</a>
				</div>
				<div class="links ml-auto">
					<h2 class="mt-0">Made in Sweden</h2>
					<p class="metadata">
						Waycay is being developed in Sweden by passionat roadtrippers
					</p>
				</div>
			</div>
		</div>
		<p class="metadata">
			Vayqer AB ℗ 2021. All rights reserved. Organization number: 559277-9085.
			Stora Brogatan 9, 50330 Borås. Contact: info@vayqer.se | Site created by
			Vayqer AB
		</p>
	</div>

	<div class="background" />
</footer>

<style>
	footer > .background {
		position: absolute;
		inset: 0;
		top: -20rem;
		bottom: -1rem;
		background: linear-gradient(to bottom, var(--gray-900), var(--gray-700));
		z-index: -1;
	}
	.metadata {
		text-align: center;
		font-size: 0.7rem;
		color: var(--gray-200);
	}
	footer {
		position: relative;
	}
	.footer {
		padding-top: 10rem;
		max-width: 1400px;
		margin: auto;
	}
	.footer-container {
		justify-content: space-around;
		align-items: center;
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
		justify-content: start;
		display: flex;
	}
	.footer-content {
		display: inline-flex;
		gap: 3rem;
		flex-grow: 1;
	}
	.links {
		display: inline-flex;
		gap: 0.4rem;
		flex-direction: column;
	}
	.links > h3 {
		font-size: 1.3rem;
		margin-top: 0;
	}
	.links > a {
		font-size: 1.1rem;
	}
	.waycay {
		font-family: "Dancing Script", cursive;
		color: var(--primary-100);
		font-size: 2em;
	}
	nav {
		display: flex;
		align-items: center;
		justify-content: center;
		top: 0;
	}
	nav > div {
		flex-grow: 1;
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-image: linear-gradient(
				to left,
				transparent,
				var(--primary-100),
				transparent
			)
			1;
		border-width: 1px;
		border-top-width: 0;
		border-style: solid;
		padding: 1rem;
	}
	.nav-container {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		max-width: 400px;
	}
</style>
