<template>
    <div class="bg-white py-20">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-7xl">
                <div class="space-y-16">
                    <ContentQuery path="/blog" :sort="{ date: -1 }">
                        <template #default="{ data }">
                            <article v-for="post in data" :key="post._path"
                                class="flex max-w-xl flex-col items-start justify-between pb-4 border-b-2">
                                <div class="flex items-center gap-x-4 text-xs">
                                    <time :datetime="post.date" class="text-gray-500">{{ post.date }}</time>
                                    <a :href="post.category.href"
                                        class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{
                                            post.category }}</a>
                                </div>
                                <div class="group relative">
                                    <h3
                                        class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <a :href="post._path">
                                            <span class="absolute inset-0" />
                                            {{ post.title }}
                                        </a>
                                    </h3>
                                    <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ post.description }}</p>
                                </div>
                                <div class="relative mt-8 flex items-center gap-x-4">
                                    <img :src="authors[post.author].profileUrl" alt="" class="h-12 rounded-3xl" />
                                    <div class="text-sm leading-6">
                                        <p class="font-semibold text-gray-900">
                                            <a :href="post.author.href">
                                                <span class="absolute inset-0" />
                                                {{ authors[post.author].fullName }}
                                            </a>
                                        </p>
                                        <p class="text-gray-600">{{ authors[post.author].role }}</p>
                                    </div>
                                </div>
                            </article>
                        </template>
                    </ContentQuery>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import authors from '../authors.json'
</script>