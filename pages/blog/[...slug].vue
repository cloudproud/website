<template>
    <div>
        <Navigation />
        <div class="px-6 py-32 lg:px-8 bg-gray-500">
            <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                <ContentDoc>
                    <template v-slot="{doc}">    
                        <Section id="main">
                            <ContentRenderer :value="doc" class="blog-content" />
                        </Section>
                    </template>
                </ContentDoc>
            </div>
        </div>
        <Footer />
    </div>
</template>

<style>
.blog-content h1 {
    @apply mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ;
}

.blog-content h2 {
    @apply mt-16 text-2xl font-bold tracking-tight text-gray-900;
}

.blog-content p {
    @apply mt-6;
}

.blog-content img {
    @apply aspect-video rounded-xl bg-gray-50 object-cover;
}
</style>