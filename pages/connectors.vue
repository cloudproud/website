
<template>
    <PageHero title="connectors"
        description="Hier kan je alle connectors vinden die wij gebruiken of in de toekomst gaan gebruiken." />
    <div>
        <div class="relative mt-10">
            <input type="text" v-model="search"
                class="block m-auto w-80 rounded-md border-0 py-1.5 px-2 pl-10 mb-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                placeholder="Search Tables" />
            <i class="fa-solid fa-magnifying-glass absolute left-3 top-3 text-gray-500"></i>
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 py-4 px-40">

            <div v-for="(tables, index) in filteredTables" :key="index"
                class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                <div class="flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" :src="tables.image" alt="" />
                </div>
                <div class="min-w-0 flex-1">
                    <span class="absolute inset-0" aria-hidden="true" />
                    <p class="text-sm font-medium text-gray-900">{{ tables.name }}</p>
                    <p class="truncate text-sm text-gray-500">{{ tables.secondname }}</p>
                </div>
            </div>

            <a target="black" href="https://slack.com/help/articles/212681477-Sign-in-to-Slack"
                v-if="filteredTables.length === 0" class="mt-4 text-gray-900 col-span-2">
                <button type="button"
                    class="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48"
                        aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6" />
                    </svg>Join my Slack<span aria-hidden="true">→</span>
                </button>
            </a>
            <!-- <div
                class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                <div class="flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" src="/sources/cassandra.svg" alt="" />
                </div>
                <div class="min-w-0 flex-1">
                    <span class="absolute inset-0" aria-hidden="true" />
                    <p class="text-sm font-medium text-gray-900">Cassandra DB</p>
                    <p class="truncate text-sm text-gray-500">Cassandra DB</p>
                </div>
            </div>

            <div
                class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                <div class="flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" src="/sources/cockroachdb.svg" alt="" />
                </div>
                <div class="min-w-0 flex-1">
                    <span class="absolute inset-0" aria-hidden="true" />
                    <p class="text-sm font-medium text-gray-900">Cockrach DB</p>
                    <p class="truncate text-sm text-gray-500">Cockrachdb DB</p>
                </div>
            </div>
            <div
                class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                <div class="flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" src="/sources/couchdb.svg" alt="" />
                </div>
                <div class="min-w-0 flex-1">
                    <span class="absolute inset-0" aria-hidden="true" />
                    <p class="text-sm font-medium text-gray-900">Couchdb DB</p>
                    <p class="truncate text-sm text-gray-500">Couchdb DB</p>
                </div>
            </div>

            <div
                class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                <div class="flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" src="/sources/dropbox.svg" alt="" />
                </div>
                <div class="min-w-0 flex-1">
                    <span class="absolute inset-0" aria-hidden="true" />
                    <p class="text-sm font-medium text-gray-900">Dropbox</p>
                    <p class="truncate text-sm text-gray-500">Dropbox</p>
                </div>
            </div>
            <div
                class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                <div class="flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" src="/sources/elasticsearch.svg" alt="" />
                </div>
                <div class="min-w-0 flex-1">
                    <span class="absolute inset-0" aria-hidden="true" />
                    <p class="text-sm font-medium text-gray-900">Elasticsearch</p>
                    <p class="truncate text-sm text-gray-500">Elasticsearch</p>
                </div>
            </div>

            <div
                class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                <div class="flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" src="/sources/facebook.svg" alt="" />
                </div>
                <div class="min-w-0 flex-1">
                    <span class="absolute inset-0" aria-hidden="true" />
                    <p class="text-sm font-medium text-gray-900">Facebook</p>
                    <p class="truncate text-sm text-gray-500">Facebook</p>
                </div>
            </div>

            <div
                class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                <div class="flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" src="/sources/firebase.svg" alt="" />
                </div>
                <div class="min-w-0 flex-1">
                    <span class="absolute inset-0" aria-hidden="true" />
                    <p class="text-sm font-medium text-gray-900">Firebase</p>
                    <p class="truncate text-sm text-gray-500">Firebase</p>
                </div>
            </div>

            <div
                class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                <div class="flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" src="/sources/googlebiggquery.svg" alt="" />
                </div>
                <div class="min-w-0 flex-1">
                    <span class="absolute inset-0" aria-hidden="true" />
                    <p class="text-sm font-medium text-gray-900">Google Bigg Query</p>
                    <p class="truncate text-sm text-gray-500">Google Bigg Query</p>
                </div>
            </div>
            <div
                class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                <div class="flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" src="/sources/googledrive.svg" alt="" />
                </div>
                <div class="min-w-0 flex-1">
                    <span class="absolute inset-0" aria-hidden="true" />
                    <p class="text-sm font-medium text-gray-900">Googele Drive</p>
                    <p class="truncate text-sm text-gray-500">Googele Drive</p>
                </div>
            </div>

            <div
                class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                <div class="flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" src="/sources/hubspot.svg" alt="" />
                </div>
                <div class="min-w-0 flex-1">
                    <span class="absolute inset-0" aria-hidden="true" />
                    <p class="text-sm font-medium text-gray-900">Hubspot</p>
                    <p class="truncate text-sm text-gray-500">Hubspot</p>
                </div>
            </div>
            <div
                class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                <div class="flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" src="/sources/influxdb_serverless.svg" alt="" />
                </div>
                <div class="min-w-0 flex-1">
                    <span class="absolute inset-0" aria-hidden="true" />
                    <p class="text-sm font-medium text-gray-900">Influx DB Serverless</p>
                    <p class="truncate text-sm text-gray-500">Influx DB Serverless</p>
                </div>
            </div>

            <div
                class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                <div class="flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" src="/sources/influxdb.svg" alt="" />
                </div>
                <div class="min-w-0 flex-1">
                    <span class="absolute inset-0" aria-hidden="true" />
                    <p class="text-sm font-medium text-gray-900">Influx DB</p>
                    <p class="truncate text-sm text-gray-500">Influx DB</p>
                </div>
            </div>
            <div
                class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                <div class="flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" src="/sources/mariadb.svg" alt="" />
                </div>
                <div class="min-w-0 flex-1">
                    <span class="absolute inset-0" aria-hidden="true" />
                    <p class="text-sm font-medium text-gray-900">Maria DB</p>
                    <p class="truncate text-sm text-gray-500">Maria DB</p>
                </div>
            </div>

            <div
                class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                <div class="flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" src="/sources/mysql.svg" alt="" />
                </div>
                <div class="min-w-0 flex-1">
                    <span class="absolute inset-0" aria-hidden="true" />
                    <p class="text-sm font-medium text-gray-900">Mysql DB</p>
                    <p class="truncate text-sm text-gray-500">Mysql DB</p>
                </div>
            </div>

            <div
                class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                <div class="flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" src="/sources/oracledatabase.svg" alt="" />
                </div>
                <div class="min-w-0 flex-1">
                    <span class="absolute inset-0" aria-hidden="true" />
                    <p class="text-sm font-medium text-gray-900">Oracle Database</p>
                    <p class="truncate text-sm text-gray-500">Oracle Database</p>
                </div>
            </div>

            <div
                class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                <div class="flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" src="/sources/postgres.svg" alt="" />
                </div>
                <div class="min-w-0 flex-1">
                    <span class="absolute inset-0" aria-hidden="true" />
                    <p class="text-sm font-medium text-gray-900">Postgress</p>
                    <p class="truncate text-sm text-gray-500">Postgress</p>
                </div>
            </div>

            <div
                class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                <div class="flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" src="/sources/salesforce.svg" alt="" />
                </div>
                <div class="min-w-0 flex-1">
                    <span class="absolute inset-0" aria-hidden="true" />
                    <p class="text-sm font-medium text-gray-900">Salesforce</p>
                    <p class="truncate text-sm text-gray-500">Salesforce</p>
                </div>
            </div>

            <div
                class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                <div class="flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" src="/sources/scylladb.svg" alt="" />
                </div>
                <div class="min-w-0 flex-1">
                    <span class="absolute inset-0" aria-hidden="true" />
                    <p class="text-sm font-medium text-gray-900">Scyllab DB</p>
                    <p class="truncate text-sm text-gray-500">Scyllab DB</p>
                </div>
            </div>

            <div
                class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                <div class="flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" src="/sources/sharepoint.svg" alt="" />
                </div>
                <div class="min-w-0 flex-1">
                    <span class="absolute inset-0" aria-hidden="true" />
                    <p class="text-sm font-medium text-gray-900">Sharepoint</p>
                    <p class="truncate text-sm text-gray-500">Sharepoint</p>
                </div>
            </div>

            <div
                class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                <div class="flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" src="/sources/visma.svg" alt="" />
                </div>
                <div class="min-w-0 flex-1">
                    <span class="absolute inset-0" aria-hidden="true" />
                    <p class="text-sm font-medium text-gray-900">Visma</p>
                    <p class="truncate text-sm text-gray-500">Visma</p>
                </div>
            </div> -->

        </div>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue';

const search = ref('');

const tables = ref([
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
        image: "/sources/postgress.svg",
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
]);

const filteredTables = computed(() => {
    const searchTerm = search.value.toLowerCase();
    return tables.value.filter((tables) =>
        tables.name.toLowerCase().includes(searchTerm)
    );
});
</script>