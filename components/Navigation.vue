<template>
    <div class="absolute w-full top-0 my-6 pr-10 grid grid-cols-2">
        <div class="flex-1">
            <div class="flex space-x-4">
                <NuxtLink v-for="item in navigation" :key="item.name" :href="item.href" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">{{ item.name }}</NuxtLink>
            </div>
        </div>
        <!-- <a :href="signUp" class="justify-self-end">
            <button type="button" class="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                Login
            </button>
        </a> -->
    </div>
</template>

<script lang="ts" setup>
const signUp = import.meta.env.VITE_SIGN_UP_URI

const navigation = [
    { name: 'Blogs', href: '/blogs' },
    // { name: 'The Product', href: '/#feature' },
    // { name: 'Documentation', href: 'https://cloudproud.dev/docs' },
    { name: 'Contact', href: '/#footer' },
]
</script>