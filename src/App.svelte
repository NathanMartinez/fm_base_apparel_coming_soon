<script>
	let error = false

	function validateEmail(e) {
		let { value } = e.target[0]
		if (value === '') {
			error = true
			return
		}
		const emailRegex = new RegExp(
			/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
			'gm'
		)
		const isValidEmail = emailRegex.test(value)
		if (!isValidEmail) {
			error = true
			return
		} else {
			console.log(value)
		}
	}
</script>

<main>
	<img class="logo" src="./src/assets/logo.svg" alt="logo" />
	<div class="girl" />
	<div class="content">
		<h1>We're</h1>
		<h2>coming soon</h2>
		<p>
			Hello fellow shoppers! We're currently building our new fashion store. Add
			your email below to stay up-to-date with announcements and our launch
			deals.
		</p>
		<form class={error && 'error'} on:submit|preventDefault={validateEmail}>
			<input required type="email" placeholder="Email Address" />
			<img class="error_image" src="./src/assets/icon-error.svg" alt="error" />
			<p class="error_text">Please provide a valid email</p>
			<button type="submit">
				<img src="./src/assets/icon-arrow.svg" alt="submit" />
			</button>
		</form>
	</div>
</main>

<footer>
	<p class="attribution">
		Challenge by
		<a
			href="https://www.frontendmentor.io?ref=challenge"
			target="_blank"
			rel="noreferrer">Frontend Mentor</a
		>. Coded by
		<a href="https://github.com/NathanMartinez">Nathan Martinez</a>.
	</p>
</footer>

<style>
	main {
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 85px 250px auto;
		grid-template-areas:
			'logo'
			'girl'
			'content';
		width: 375px;
		padding-bottom: 2rem;
	}

	main .logo {
		width: 165px;
		padding: 2rem;
		grid-area: logo;
	}

	main .girl {
		background: url('./src/assets/hero-mobile.jpg') center no-repeat;
		width: 375px;
		grid-area: girl;
	}

	main .content {
		grid-area: content;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 0 2rem;
		padding-top: 4rem;
	}

	main .content h1,
	main .content h2 {
		font-size: 2.5rem;
		text-transform: uppercase;
		letter-spacing: 0.7rem;
		line-height: 2.6rem;
	}

	main .content h1,
	main .content p {
		color: var(--desaturated-red);
	}

	main .content h1 {
		font-weight: 300;
	}

	main .content h2 {
		color: var(--dark-grayish-red);
	}

	main .content p {
		line-height: 1.4rem;
		font-size: 0.85rem;
		margin-top: 1rem;
		margin-bottom: 2rem;
		padding: 0 0.2rem;
	}

	main .content form {
		position: relative;
		display: flex;
		align-items: center;
		width: 100%;
	}

	main .content form input {
		padding: 0.9rem 1.5rem;
		flex: 1;
		border-radius: 1.5rem;
		border: 1px solid var(--desaturated-red);
		background: transparent;
	}

	main .content form input::placeholder {
		color: var(--desaturated-red);
	}

	main .content form .error_text {
		display: block;
	}
	main .content form .error_image,
	main .content form .error_text {
		position: absolute;
		display: none;
	}

	main .content form .error_image {
		right: 0;
		transform: translateX(-4rem);
	}
	main .content form .error_text {
		bottom: 0;
		transform: translate(0.5rem, 3.5rem);
		color: #f00;
	}

	main .content form input:focus:invalid,
	main .content form.error input {
		border: 1px solid #f00;
	}
	main .content form input:focus:invalid ~ .error_image,
	main .content form.error > .error_image {
		display: block;
	}
	main .content form input:focus:invalid ~ .error_text,
	main .content form.error > .error_text {
		display: block;
	}
	main .content form button {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.8rem 1.5rem;
		border-radius: 1.5rem;
		position: absolute;
		right: 0;
		border: none;
		background: linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%));
	}

	main .content form button:hover {
		cursor: pointer;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	}

	.attribution {
		position: absolute;
		bottom: 1rem;
		left: 50%;
		font-size: 11px;
		text-align: center;
		transform: translateX(-50%);
	}

	.attribution a {
		color: hsl(228, 45%, 44%);
	}

	@media (min-width: 60em) {
		main {
			width: auto;
			height: 800px;
			grid-template-columns: minmax(450px, 610px) minmax(300px, 610px);
			grid-template-rows: 100px 700px;
			grid-template-areas:
				'logo girl'
				'content girl';
			background: url('./assets/bg-pattern-desktop.svg') no-repeat;
		}
		main .logo {
			padding: 2rem 0;
			padding-left: 5rem;
			width: 250px;
		}
		main .girl {
			background: url('./assets/hero-desktop.jpg') center no-repeat;
			width: 100%;
		}
		main .content {
			align-items: flex-start;
			justify-content: center;
			padding: 0 5rem;
			text-align: left;
		}
		main .content h1,
		main .content h2 {
			font-size: 4rem;
			line-height: 4.5rem;
		}
		main .content p {
			font-size: 1rem;
			line-height: 2rem;
		}
	}
</style>
