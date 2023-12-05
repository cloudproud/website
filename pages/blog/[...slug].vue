<template>
    <div>
        <ContentDoc>
            <template v-slot="{ doc }">
                <BlogHero :category="doc.category" :date="doc.date" :author="doc.author" :title="doc.headline" />
                <div class="mx-auto py-20 max-w-7xl px-6 lg:px-8 text-base leading-7 text-gray-700">
                    <section>
                        <ContentRenderer :value="doc" class="blog-content" />
                    </section>
                </div>
            </template>
        </ContentDoc>
        <Footer />
    </div>
</template>

<script setup>
import authors from '@/authors.json'

const { page } = useContent()

const author = authors[page.value.author]
const { title, description, date, headline, socialImage } = page.value
const defaultImage = '/og-image.jpg'

useSeoMeta({
    title: title,
    date: date,
    author: author?.fullName,
    description: description,
    ogTitle: headline,
    ogDescription: description,
    ogImage: socialImage || defaultImage,
    ogUrl: 'https://cloudproud.nl',
    twitterTitle: headline,
    twitterDescription: description,
    twitterImage: socialImage || defaultImage,
    twitterCard: 'summary'
})
</script>

<style>
.blog-content h1 {
    @apply text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl;
}

.blog-content h2 {
    @apply text-2xl font-bold tracking-tight text-gray-900 mt-6;
}

.blog-content p {
    @apply mt-3;
}

.blog-content img {
    @apply aspect-video rounded-xl bg-gray-50 object-cover;
}

.blog-content p>a {
    @apply underline;
}

#test {
    background-color: red;
}
</style>