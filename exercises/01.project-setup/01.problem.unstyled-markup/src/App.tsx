import { EpicStackLogo } from "./logos/epic-stack";
import { logos } from "./logos/logos";

export default function App() {
	return (
		<>
			<p>Let's build something epic!</p>
			{/*
				 🐨 1. Import the { EpicStackLogo } from the './logos/logos.tsx' file. Render it with a width and height of level 20
			*/}
			<a href="#">
				<EpicStackLogo className="size-20" />
			</a>
			{/* 
				💰 You can use the 'size-*' utilities to set an 
				equal width and height in a single class! 
			*/}

			{/* 🐨 2. Add an `h1` tag that says "The Epic Stack" */}
			<h1>The Epic Stack</h1>
			{/* 
				🐨 3. Add a paragraph that says: 
				"Check the Getting Started guide file for how to get your project off the ground!"
				The "Getting Started" should be a link. Set the href to "#".
			*/}
			<p>Check the <a href="#">Getting Started</a> guide file for how to get your project off the ground!</p>
			<ul>
				{logos.map((logo) => (
					<li key={logo.href}>
						<a href={logo.href}>
							<img src={logo.src} alt={logo.alt} className="w-16" />
						</a>
					</li>
				))}
			</ul>
			{/* 
				🐨 4. Import the { logos } from the './logos/logos.tsx' file.

					1. Add an `ul` for the logos list.
					2. Iterate over the `logos` array and render an `li` for each logo.
					3. Each `li` should have an `a` with an `href` attribute set to the logo's `href`.
					4. Inside the `a`, render an `img` with a `src` attribute set to the logo's `src`.

				To avoid the images being GIANT, let's add a `className` of "w-16" to the `img`.
			*/}
		</>
	)
}
