<svelte:head>
    <title>Experience | Cadence Freeze</title>
</svelte:head>

<script lang="ts">
import ExperienceTimeline from "$lib/components/experience/ExperienceTimeline.svelte";
</script>

<section class="page">

    <h1>Experience</h1>

    <p class="subtitle">
        Professional software engineering experience, leadership, and technical growth.
    </p>

    <ExperienceTimeline/>

</section>

<style>

.page{

max-width:1100px;

margin:auto;

padding:7rem 2rem 4rem;

}

.subtitle{

margin-bottom:4rem;

color:var(--text-muted);

}

</style>