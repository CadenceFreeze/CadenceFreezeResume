<script lang="ts">
  import ProjectCard from "$lib/components/projects/ProjectsCard.svelte";
  import Container from "$lib/components/ui/Container.svelte";
  import { projects } from "$lib/data/projects";

  const featuredProjects = projects.filter(
    (project) => project.featured
  );
</script>

<section class="featured-projects">
  <Container>
    <div class="section-header">
      <div>
        <h2>Featured Projects</h2>
        <p>
          A collection of software projects focused on real-world applications,
          system design, and user experience.
        </p>
      </div>

      <a class="view-link" href="/projects">
        View all projects →
      </a>
    </div>

    <div class="project-grid">
      {#each featuredProjects as project}
        <ProjectCard {project} />
      {/each}
    </div>
  </Container>
</section>

<style>

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  h2 {
    margin: 0;
    font-size: 2rem;
  }

  p {
    margin-top: 0.75rem;
    max-width: 600px;
    color: var(--text-muted);
    line-height: 1.6;
  }

  .view-link {
    color: var(--accent);
    text-decoration: none;
    white-space: nowrap;
    font-weight: 600;
    transition: transform 0.2s ease;
  }

  .view-link:hover {
    transform: translateX(4px);
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(280px, 1fr)
    );
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    .section-header {
      flex-direction: column;
      align-items: flex-start;
    }

    .featured-projects {
      padding: 3rem 0;
    }
  }
</style>