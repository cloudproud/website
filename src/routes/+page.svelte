<script lang="ts">
	import { darkMode } from '$lib/stores/theme';
	import Footer from '../components/footer.svelte';
</script>

<div class="relative bg-white dark:bg-[rgb(20,20,20)] min-h-screen">
	<div
		class="mx-auto max-w-12xl flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-8 px-6 lg:px-8 min-[90vh] pt-[env(safe-area-inset-top)]"
	>
		<div
			class="pt-10 pb-0 lg:py-20 lg:col-span-5 lg:px-0 flex items-center justify-center order-1 lg:order-none pl-[env(safe-area-inset-left)]"
		>
			<div class="w-full lg:max-w-lg">
				<img src="/logos/cloudproud/icon-light.svg" alt="CloudProud" class="h-11 dark:hidden" />
				<img
					src="/logos/cloudproud/icon-dark.svg"
					alt="CloudProud"
					class="hidden h-11 dark:block"
				/>
				<div class="hidden mt-12 sm:flex lg:mt-16">
					<div
						class="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 dark:text-gray-400 ring-1 ring-gray-900/10 dark:ring-white/10 hover:ring-gray-900/20 dark:hover:ring-white/20"
					>
						Dynamic tech start-up with a team spanning across Europe 🇳🇱🇪🇺
						<!-- <a
							href="https://cloudproud.example.com/about"
							class="whitespace-nowrap font-semibold text-gray-900 dark:text-white"
						> -->
						<span aria-hidden="true" class="absolute inset-0"></span>
						<!-- Learn more <span aria-hidden="true">&rarr;</span> -->
						<!-- </a> -->
					</div>
				</div>
				<h1
					class="mt-12 text-pretty text-5xl font-semibold tracking-tight text-gray-900 dark:text-white sm:mt-10 sm:text-7xl"
				>
					<span class="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
						Boosting businesses
					</span>
					with innovative solutions
				</h1>
				<p
					class="mt-8 text-pretty text-lg font-medium text-gray-600 dark:text-gray-400 sm:text-xl/8"
				>
					We combine talent, passion, and technology to deliver flexible cloud environments, smart
					software, and fast solutions that keep your business ahead in the digital world.
				</p>
				<div class="mt-8 lg:mt-10 flex items-center gap-x-6">
					<a
						href="https://cal.com/jeroenrinzema/introduction"
						class="rounded-md bg-gray-900 dark:bg-white px-3.5 py-2.5 text-sm font-semibold text-white dark:text-gray-900 shadow-sm hover:bg-gray-700 dark:hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 dark:focus-visible:outline-white"
					>
						Ready to connect?
					</a>
					<!-- <a
						href="https://cloudproud.example.com/services"
						class="text-sm/6 font-semibold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
					>
						Our services <span aria-hidden="true">→</span>
					</a> -->
				</div>
			</div>
		</div>
		<div
			class="relative lg:col-span-7 min-h-[50vh] lg:min-h-full py-10 lg:px-6 lg:p-10 order-2 lg:order-none flex items-center pr-[env(safe-area-inset-right)]"
		>
			<div class="relative w-full min-h-[50vh] lg:h-full overflow-hidden rounded-2xl shadow-1xl">
				<!-- Video for desktop/tablet -->
				<video
					src="/promo.mp4"
					autoplay
					muted
					loop
					playsinline
					poster="/promo-poster.jpg"
					class="hidden sm:block w-full h-full min-h-[50vh] object-cover"
				>
					<track kind="captions" />
				</video>
				<!-- Fallback image for mobile -->
				<img
					src="/promo-poster.jpg"
					alt="CloudProud - Boosting businesses with innovative solutions"
					class="sm:hidden w-full h-full min-h-[50vh] object-cover"
				/>
				<div class="absolute inset-0 bg-black/60 pointer-events-none"></div>

				<button
					class="absolute top-6 right-6 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors cursor-pointer"
					aria-label="Toggle dark mode"
					on:click={() => darkMode.update((n) => !n)}
				>
					{#if $darkMode}
						<i class="fas fa-brightness text-xl"></i>
					{:else}
						<i class="fas fa-moon text-xl"></i>
					{/if}
				</button>

				<div class="absolute bottom-6 right-6 left-6 z-10">
					<div
						class="relative overflow-hidden rounded-lg p-6 shadow-2xl max-w-sm bg-white/10 backdrop-blur-md border border-white/20"
					>
						<div class="relative z-10">
							<h3 class="text-lg font-semibold text-white mb-2">Join DevPulse Meetup</h3>
							<p class="text-sm text-gray-300 mb-4">
								Connect with developers and tech enthusiasts in our community
							</p>
							<a
								href="https://www.meetup.com/dev-pulse/"
								class="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 transition-colors"
							>
								Learn More
								<svg
									class="h-4 w-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<Footer />
