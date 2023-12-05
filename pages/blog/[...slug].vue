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

const { path } = useRoute();
const { data: page } = await useAsyncData(`content-${path}`, async () => {
    // fetch document where the document path matches with the cuurent route
    let article = queryContent().where({ _path: path }).findOne();
    // get the surround information,
    // which is an array of documeents that come before and after the current document
    let surround = queryContent().only(["_path", "title", "description"]).sort({ date: 1 }).findSurround(path);

    return {
        article: await article,
        surround: await surround,
    };
});

const author = authors[page.value.article.author]
const { title, description, date, headline, socialImage } = page.value.article
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