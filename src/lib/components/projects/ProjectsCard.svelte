<script lang="ts">
  import type { Project } from "$lib/types/projects";
  import Button from "$lib/components/ui/Button.svelte";

  let { project } = $props<{
    project: Project;
  }>();
</script>

<article class="card">
  <div class="header">
    <h3>{project.title}</h3>

    <span class="category">
      {project.category}
    </span>
  </div>

  <p>
    {project.description}
  </p>

  <div class="tech">
    {#each project.technologies as tech}
      <span>{tech}</span>
    {/each}
  </div>

  <div class="actions">
    <Button href={`/CadenceFreezeResume/projects/${project.slug}`}>View Project</Button>
  </div>
</article>

<style>
  .card {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1.5rem;

    background: var(--bg-secondary);

    border: 1px solid var(--border);

    border-radius: var(--radius);

    transition:
      transform 0.2s ease,
      border-color 0.2s ease;
  }

  .card:hover {
    transform: translateY(-4px);

    border-color: var(--accent);
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 1rem;
  }

  .category {
    font-size: 0.75rem;

    padding: 0.3rem 0.7rem;

    border-radius: 999px;

    background: var(--accent-soft);

    color: var(--accent);
  }

  .tech {
    display: flex;
    flex-wrap: wrap;

    gap: 0.5rem;
  }

  .tech span {
    font-size: 0.8rem;

    padding: 0.35rem 0.7rem;

    background: var(--bg);

    border-radius: 999px;
  }

  .actions {
    margin-top: auto;
  }
</style>
