<template>
  <div class="relative isolate overflow-hidden bg-gray-900">
    <svg class="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
      <defs>
        <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="-1" class="overflow-visible fill-gray-800/20">
        <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
      </svg>
      <rect width="100%" height="100%" stroke-width="0" fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
    </svg>
    <div class="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]" aria-hidden="true">
      <div class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20" style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)" />
    </div>
    <div class="relative mx-auto max-w-7xl px-6 pt-40 lg:flex lg:px-8 lg:pt-40">
      <div class="absolute w-full top-0 my-6 pr-10 grid grid-cols-2">
        <div class="flex-1">
          <div class="flex space-x-4">
            <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
          </div>
        </div>
        <a :href="signUp" class="justify-self-end">
          <button type="button" class="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            Login
          </button>
        </a>
      </div>

      <div class="max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl">
        <img class="h-11" src="@/assets/images/cloudproud-icon-dark.svg" alt="Cloud Proud" />
        <h1 class="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          A single access point for all your data
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-300">
          No copies, no ETL pipelines simply connect and query your data!
        </p>
        <div class="mt-10 flex items-center gap-x-6">
          <a :href="signUp" class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">Sign-up</a>
          <a :href="slack" class="text-sm font-semibold leading-6 text-white">Join our Slack! <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div class="w-full mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
        <div class="grid gap-5">
          <div class="w-screen overflow-hidden rounded-tl-xl bg-gray-900 ring-1 ring-white/10">
            <div class="flex bg-gray-800/40 ring-1 ring-white/5">
              <div class="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                <div class="border-r border-gray-600/10 px-4 py-2">Shell</div>
              </div>
            </div>
            <div class="px-6 pb-14 pt-6">
              <x-placeholder message="Running kit">
                <pre class="text-[0.8125rem] leading-6 text-gray-300" style="tab-size: 2"><code>$ <span class="text-gray-500"># 🚀 Run it locally on your own machine to experience it yourself!</span>
$ docker run -p 5432:5432 registry.cloudproud.nl/lab/kit
$ <span class="text-gray-500"># 🌍 Open your browser and go to <a target="_blank" href="http://localhost:5432" class="underline">http://localhost:5432</a></span>
$ <span class="text-gray-500"># 📔 Check out our documentation at <a target="_blank" href="https://cloudproud.dev/docs" class="underline">https://cloudproud.dev/docs</a></span>
$ <span class="text-gray-500"># 🧑‍💻 Join our <a class="underline" target="_blank" :href="signUp">Slack</a>!</span>
</code></pre>
              </x-placeholder>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const slack = import.meta.env.VITE_SLACK_INVITE_URI
const signUp = import.meta.env.VITE_SIGN_UP_URI

const navigation = [
  { name: 'The Product', href: '#feature' },
  { name: 'Contact', href: '#footer' },
  { name: 'Documentation', href: 'https://cloudproud.dev/docs' },
]
</script>