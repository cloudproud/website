<template>
    <div>
        <BlogsHero />
        <BlogsOverview />
        <Footer />
    </div>
</template>
  
<script setup>
useSeoMeta({
    title: 'Cloud Proud, a single access point for all your data!',
    description: 'Simply connect your data sources, no copies or ETL pipelines required. Query your data in real-time.',
    ogTitle: 'Cloud Proud, a single access point for all your data!',
    ogDescription: 'Simply connect your data sources, no copies or ETL pipelines required. Query your data in real-time.',
    ogImage: '/og-image.jpg',
    ogUrl: 'https://cloudproud.nl',
    twitterTitle: 'Cloud Proud, a single access point for all your data!',
    twitterDescription: 'Simply connect your data sources, no copies or ETL pipelines required. Query your data in real-time.',
    twitterImage: '/twitter-image.jpg',
    twitterCard: 'summary'
})

useHead({
    htmlAttrs: {
        lang: 'en'
    },
    link: [
        {
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }
    ]
})
</script>