import { EpicStackLogo, logos } from './logos/logos'

function clsx(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

const columnClasses: Record<(typeof logos)[number]['column'], string> = {
	1: 'xl:col-start-1',
	2: 'xl:col-start-2',
	3: 'xl:col-start-3',
	4: 'xl:col-start-4',
	5: 'xl:col-start-5',
}
const rowClasses: Record<(typeof logos)[number]['row'], string> = {
	1: 'xl:row-start-1',
	2: 'xl:row-start-2',
	3: 'xl:row-start-3',
	4: 'xl:row-start-4',
	5: 'xl:row-start-5',
	6: 'xl:row-start-6',
}

export default function App() {
	return (
		<div className="grid min-h-screen place-items-center">
			<div className="grid place-items-center gap-12 px-4 py-16 sm:gap-16 xl:grid-cols-[auto,1fr] xl:gap-24">
				<div className="flex max-w-md flex-col items-center text-center xl:order-2 xl:items-start xl:text-left">
					<EpicStackLogo
						className={clsx(
							'size-20',
							// Animation
							'animate-slide-top [animation-fill-mode:backwards]',
							'xl:animate-slide-left xl:[animation-fill-mode:backwards]',
						)}
					/>
					<h1
						className={clsx(
							'sm:text-4.5xl lg:text-5.5xl mt-6 text-4xl font-medium md:mt-8 md:text-5xl',
							// Animation
							'animate-slide-top [animation-fill-mode:backwards] [animation-delay:0.3s]',
							'xl:animate-slide-left xl:[animation-fill-mode:backwards] xl:[animation-delay:0.3s]',
						)}
					>
						The <span className="text-highlight">Epic</span> Stack
					</h1>
					<p
						className={clsx(
							'mt-4 text-slate-600 sm:text-lg md:mt-6 lg:text-xl',
							// Animation
							'animate-slide-top [animation-fill-mode:backwards] [animation-delay:0.8s]',
							'xl:animate-slide-left xl:[animation-fill-mode:backwards] xl:[animation-delay:0.8s]',
						)}
					>
						Check the{' '}
						<a
							className="focus:ring-highlight text-black underline hover:no-underline focus:outline-none focus:ring-2"
							href="#"
						>
							Getting Started guide
						</a>{' '}
						file for how to get your project off the ground!
					</p>
				</div>
				<ul className="flex max-w-3xl flex-wrap justify-center gap-2 sm:gap-4 xl:grid xl:grid-flow-col xl:grid-cols-5 xl:grid-rows-6">
					{logos.map((logo, i) => (
						<li
							key={logo.href}
							style={{ '--loop-index': i } as React.CSSProperties}
							className={clsx(
								columnClasses[logo.column],
								rowClasses[logo.row],
								'animate-roll-reveal [animation-fill-mode:backwards]',
								'[animation-delay:calc(0.07s*var(--loop-index))]',
							)}
						>
							<a
								href={logo.href}
								className="bg-highlight/[7%] hover:bg-highlight/10 focus:ring-highlight grid size-20 place-items-center rounded-2xl p-4 transition hover:-rotate-6 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:size-24"
							>
								<img src={logo.src} alt="" />
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}