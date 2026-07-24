<script lang="ts">
  import "../app.css";
  import Navbar from "$lib/components/layout/Navbar.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href="/CadenceFreezeResume/src/static/assets/favicon.svg" />
</svelte:head>

<Navbar />

{@render children()}
