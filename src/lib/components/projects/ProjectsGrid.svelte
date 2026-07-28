<script lang="ts">
  import ProjectCard from "./ProjectsCard.svelte";
  import type { Project } from "$lib/types/projects";

  let {
    projects,
  }: {
    projects: Project[];
  } = $props();
</script>

<section class="grid">
  {#each projects as project}
    <ProjectCard {project} />
  {/each}
</section>

<style>
  .grid {
    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

    gap: 1.5rem;
  }
</style>
