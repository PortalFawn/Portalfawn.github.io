<script lang="ts">
	import '../routes/layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/component/Header.svelte';
	import Footer from '$lib/component/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Header />
<main class="h-screen">
	{@render children()}
</main>
<Footer />