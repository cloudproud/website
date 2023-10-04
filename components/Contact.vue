<template>
  <div class="relative isolate bg-gray-900">
    <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      <div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
        <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <div class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
            <svg class="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
              <defs>
                <pattern id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2" width="200" height="200" x="100%" y="-1" patternUnits="userSpaceOnUse">
                  <path d="M130 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="100%" y="-1" class="overflow-visible fill-gray-800/20">
                <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
              </svg>
              <rect width="100%" height="100%" stroke-width="0" fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)" />
            </svg>
            <div class="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]" aria-hidden="true">
              <div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20" style="clip-path: polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)" />
            </div>
          </div>
          <h2 class="text-3xl font-bold tracking-tight text-white">Get in touch</h2>
          <p class="mt-6 text-lg leading-8 text-gray-300">Let's get in touch and book a demo today! See how our solution could allow your organization to create a truly scalable data architecture.</p>
          <dl class="mt-10 space-y-4 text-base leading-7 text-gray-300">
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Address</span>
                <BuildingOffice2Icon class="h-7 w-6 text-gray-400" aria-hidden="true" />
              </dt>
              <dd>Ceintuurbaan 15<br />8022 AW, Zwolle</dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Email</span>
                <EnvelopeIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
              </dt>
              <dd><a class="hover:text-white" href="mailto:hello@cloudproud.nl">hello@cloudproud.nl</a></dd>
            </div>
            <div class="flex">
              <dd class="mt-2">
                <a :href="slack" target="_blank">
                  <button type="button" class="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                    Join our Slack!
                  </button>
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div class="relative pl-12 pb-20 pt-24 sm:pt-32 lg:static lg:pl-16 lg:py-48">
        <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          <li v-for="person in people" :key="person.name">
            <div class="flex items-center gap-x-6">
              <img class="h-16 w-16 rounded-full" :src="person.profile" :alt="person.name" />
              <div>
                <h3 class="text-base font-semibold leading-7 tracking-tight text-white">{{ person.name }}</h3>
                <p class="text-sm font-semibold leading-6 text-white">{{ person.role }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { BuildingOffice2Icon, EnvelopeIcon } from '@heroicons/vue/24/outline'
const slack = import.meta.env.VITE_SLACK_INVITE_URI

const people = [
  {
    name: 'Oxana Bulanova',
    role: 'Co-Founder / CFO',
    profile: '/team/oxana.jpeg',
  },
  {
    name: 'Jeroen Rinzema',
    role: 'Co-Founder / CTO',
    profile: '/team/jeroen.jpeg',
  },
  {
    name: 'Sarath S. Pillai',
    role: 'Senior Back-end developer',
    profile: '/team/sarath.jpeg',
  },
  {
    name: 'Yuriy T.',
    role: 'Senior Back-end developer',
    profile: '/team/yuriy.jpeg',
  },
  {
    name: 'Christian Hilgenkamp',
    role: 'Back-end developer',
    profile: '/team/christian.jpeg',
  },
  {
    name: 'Kippa',
    role: 'CCO *Tock*',
    profile: '/team/kippa.jpeg',
  },
]
</script>