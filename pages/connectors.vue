
<template>
    <PageHero title="connectors" description="Hier kan je alle connectors vinden die wij gebruiken of in de toekomst gaan gebruiken." />
    <div>
        <div class="relative mt-10">
            <input type="text" v-model="search" class="block m-auto w-80 rounded-md border-0 py-1.5 px-2 pl-10 mb-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400" placeholder="Search Tables" />
            <i class="fas fa-search absolute left-3 top-3 text-gray-500"></i>
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 py-4 px-40">

            <div v-for="(tables, index) in filtered" :key="index" class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                <div class="flex-shrink-0">
                    <img class="h-10 w-10" :src="tables.image" alt="" />
                </div>
                <div class="min-w-0 flex-1">
                    <span class="absolute inset-0" aria-hidden="true" />
                    <p class="text-sm font-medium text-gray-900">{{ tables.name }}</p>
                    <p class="truncate text-sm text-gray-500">{{ tables.secondname }}</p>
                </div>
            </div>

            <a target="blank" :href="slack" v-if="filtered.length === 0" class="mt-4 text-gray-900 col-span-2">
                <button type="button" class="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <svg class="mx-auto h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6" />
                    </svg>
                    <div class="mt-3">
                        Share your ideas for new data source connectors<br>and help us expand our data connectivity horizons!
                    </div>
                </button>
            </a>
        </div>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue';

const slack = import.meta.env.VITE_SLACK_INVITE_URI

const search = ref('');
const tables = [
    {
        name: 'Amazon Dynamo DB',
        secondname: 'Amazon Dynamo DB Connector',
        image: "/sources/amazondynamodb.svg",
    },
    {
        name: 'Amazon S3',
        secondname: 'Amazon S3 Connector',
        image: "/sources/amazons3.svg",
    },
    {
        name: 'Cassandra',
        secondname: 'cassandra Connector',
        image: "/sources/cassandra.svg",
    },
    {
        name: 'Cockroach DB',
        secondname: 'cockroachdb Connector',
        image: "/sources/cockroachdb.svg",
    },
    {
        name: 'Couch DB',
        secondname: 'Couch DB Connector',
        image: "/sources/couchdb.svg",
    },
    {
        name: 'Dropbox',
        secondname: 'Dropbox Connector',
        image: "/sources/dropbox.svg",
    },
    {
        name: 'Elestic Search',
        secondname: 'Elestic Search Connector',
        image: "/sources/elasticsearch.svg",
    },
    {
        name: 'Facebook',
        secondname: 'Facebook Connector',
        image: "/sources/facebook.svg",
    },
    {
        name: 'Firebase',
        secondname: 'Firebase Connector',
        image: "/sources/firebase.svg",
    },
    {
        name: 'Google Big Query',
        secondname: 'Google Big Query Connector',
        image: "/sources/googlebigquery.svg",
    },
    {
        name: 'Google Drive',
        secondname: 'Google Drive Connector',
        image: "/sources/googledrive.svg",
    },
    {
        name: 'Hubspot',
        secondname: 'Hubspot Connector',
        image: "/sources/hubspot.svg",
    },
    {
        name: 'Influx DB Serverless',
        secondname: 'Influx DB Serverless Connector',
        image: "/sources/influxdb_serverless.svg",
    },
    {
        name: 'Influx DB',
        secondname: 'Influx DB Connector',
        image: "/sources/influxdb.svg",
    },
    {
        name: 'Maria DB',
        secondname: 'Maria DB Connector',
        image: "/sources/mariadb.svg",
    },
    {
        name: 'Mongo DB',
        secondname: 'Mongo DB Connector',
        image: "/sources/mongo.svg",
    },
    {
        name: 'Mysql DB',
        secondname: 'Mysql DB Connector',
        image: "/sources/mysql.svg",
    },
    {
        name: 'Oracle Database',
        secondname: 'Oracle Database Connector',
        image: "/sources/oracledatabase.svg",
    },
    {
        name: 'Postgress',
        secondname: 'Postgress Connector',
        image: "/sources/postgres.svg",
    },
    {
        name: 'Salesforce',
        secondname: 'Salesforce Connector',
        image: "/sources/salesforce.svg",
    },
    {
        name: 'Scyllab DB',
        secondname: 'Scyllab DB Connector',
        image: "/sources/scylladb.svg",
    },
    {
        name: 'Sharepoint',
        secondname: 'Sharepoint Connector',
        image: "/sources/sharepoint.svg",
    },
    {
        name: 'Visma',
        secondname: 'Visma Connector',
        image: "/sources/visma.svg",
    },
];

const filtered = computed(() => {
    const searchTerm = search.value.toLowerCase();
    return tables.filter((tables) =>
        tables.name.toLowerCase().includes(searchTerm)
    );
});
</script>