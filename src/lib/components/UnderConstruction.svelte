<script lang="ts">
  let {
    title = "Coming Soon",
    description = "This section is currently being built. Check back soon!",
  } = $props<{
    title?: string;
    description?: string;
  }>();
</script>

<section class="construction">
  <div class="icon">
    🚧
  </div>

  <h1>{title}</h1>

  <p>{description}</p>

  <a href="/CadenceFreezeResume" class="button">
    Return Home
  </a>
</section>

<style>
  .construction {
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }

  .icon {
    font-size: 3rem;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    color: var(--text-muted);
    max-width: 500px;
  }

  .button {
    margin-top: 1rem;
    padding: 0.75rem 1.25rem;
    border-radius: var(--radius);
    background: var(--accent);
    color: var(--text);
  }
</style>