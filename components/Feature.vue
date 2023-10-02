<template>
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <h2 class="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need to deploy your app</p>
          <p class="mt-6 text-lg leading-8 text-gray-600">Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.</p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div v-for="feature in features" :key="feature.name" class="relative pl-16">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {{ feature.name }}
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">{{ feature.description }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/vue/24/outline'
  
  const features = [
    {
      name: 'Connect with your Systems',
      description:
        'We have developed a collection of connectors allowing our platform to connect with your existing data sources.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Integrates with Your Tools',
      description:
        'SConnect with your data through the PostgreSQL wire protocol allowing your existing tools to work right out of the box.',
      icon: LockClosedIcon,
    },
    {
      name: 'Query Your Data Using SQL',
      description:
        'Our database engine allows engineers to interact with the underlying data sources using SQL.',
      icon: ArrowPathIcon,
    },
    {
      name: 'Fine Grained Access Control',
      description:
        'Set-up fine grained access control rules ensuring that your data stays secure. Be able to see who has access to which system in one overview.',
      icon: FingerPrintIcon,
    },
    {
      name: 'Fetch Data in Real Time',
      description:
        'Fetch data in real time, no more waiting for pipelines to complete or batch jobs to be triggered.',
      icon: FingerPrintIcon,
    },
    {
      name: 'Data as a Product',
      description:
        'Discover new data sources through the data explorer. Get in touch with data owners to create new integrations in minutes.',
      icon: FingerPrintIcon,
    },
  ]
  </script>