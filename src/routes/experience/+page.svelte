<script lang="ts">
  import ExperienceTimeline from "$lib/components/experience/ExperienceTimeline.svelte";
</script>

<svelte:head>
  <title>Experience | Cadence Freeze</title>
</svelte:head>

<section class="page">
  <h1>Experience</h1>

  <p class="subtitle">
    Professional software engineering experience, leadership, and technical
    growth.
  </p>

  <ExperienceTimeline />
</section>

<style>
  .page {
    max-width: 1100px;

    margin: auto;

    padding: 7rem 2rem 4rem;
  }

  .subtitle {
    margin-bottom: 4rem;

    color: var(--text-muted);
  }
  h1 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 4rem;

    color: var(--text-muted);
  }
</style>
