# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./public/images/Advice%20Generator%20Dark.png)

![](./public/images/Advice%20Generator%20Light.png)

### Links

- Solution URL: [GitHub Solution](https://github.com/dawkey95/advice-generator-fem)
- Live Site URL: [DK Live Site](https://dk-advice-generator.vercel.app/)

## My process

### Built with

- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind](https://tailwindcss.com/) - For styles
- [RadixUI](https://www.radix-ui.com/) - Unstyled, accessible components
- [DaisyUI](https://daisyui.com/) - Component Library

### What I learned

This project was quite fun as a small revisory project about concepts relating to APIs especially. I also used this opportunity to create a dark mode and light mode for the project to reinforce my knowledge of TailwindCSS and how to use it to create a dark mode. I also used this project to learn how to use RadixUI and DaisyUI to create a more accessible and responsive project.

One new thing I learnt in this project was how to render a component based on a condition. I used this to render the mobile and desktop image based on the state of the breakpoints.

To accomplish this I used the following code:

```js
import { useMediaQuery } from '@react-hook/media-query';
```

I then set a breakpoint for desktop since the mobile version will be used as the else statement:

```js
const lg = useMediaQuery('(min-width: 1024px)');
```

Finally in order to render the correct image I used the following code:

```js
{
	lg ? (
		<Image
			className='mb-8'
			src={'/images/pattern-divider-desktop.svg'}
			width={444}
			height={16}
			alt=''
		/>
	) : (
		<Image
			className='mb-8'
			src={'/images/pattern-divider-mobile.svg'}
			width={295}
			height={16}
			alt=''
		/>
	);
}
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

## Author

- Website - [Dawid Keyser](dk-personal.netlify.app)
- Frontend Mentor - [@dawkey95](https://www.frontendmentor.io/profile/dawkey95)
- Twitter - [@dawidkeyser95](https://twitter.com/dawidkeyser95)
