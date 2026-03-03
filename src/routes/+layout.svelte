<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.ico';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="/fontawesome/fontawesome.min.css" />
	<link rel="stylesheet" href="/fontawesome/solid.min.css" />
	<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
	<meta name="theme-color" content="rgb(20,20,20)" media="(prefers-color-scheme: dark)" />
</svelte:head>

{@render children()}
