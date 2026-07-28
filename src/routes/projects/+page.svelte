<script lang="ts">
  import ProjectsGrid from "$lib/components/projects/ProjectsGrid.svelte";
  import { projects } from "$lib/data/projects";

  const featured = projects.filter((project) => project.featured);
</script>

<svelte:head>
  <title>Projects | Cadence Freeze</title>
</svelte:head>

<section class="container">
  <h1>Projects</h1>

  <p>
    Selected software engineering projects, professional work, and technical
    explorations.
  </p>

  <ProjectsGrid projects={featured} />
</section>

<style
>
  .container {
    max-width: 1100px;

    margin: auto;

    padding: 7rem 2rem 4rem;
  }

  h1 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 4rem;

    color: var(--text-muted);
  } 
</style>