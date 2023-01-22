# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![Mobile](./images/Screen%20Shot%202023-01-21%20at%206.39.21%20PM.png)
![Desktop](./images/Screen%20Shot%202023-01-21%20at%206.35.48%20PM.png)

### Links

- Solution URL: [Github Repo](https://github.com/NathanMartinez/fm_base_apparel_coming_soon)
- Live Site URL: [Github Pages Site](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Svelte](https://svelte.dev/) - JS library

### What I learned

I used the following CSS Grid layout for my desktop layout solution.

```css
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
}
```

```js
const proudOfThisFunc = () => {
	console.log('🎉')
}
```

### Continued development

- React
- Svelte
- Nextjs
- Vue
- Semantic HTML
- CSS

### Useful resources

- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/minmax) - This is a great resource that I used to fix an issue with the desktop layout.
- [Digital Ocean](https://www.digitalocean.com/community/tutorials/css-styling-form-input-validity) - This is an amazing article which helped me understand how to update inputs by their :invalid pseudo selector. I'd recommend it to anyone still learning this concept.

## Author

- Github - [Github](https://github.com/NathanMartinez)
- Frontend Mentor - [@NathanMartinez](https://www.frontendmentor.io/profile/NathanMartinez)
