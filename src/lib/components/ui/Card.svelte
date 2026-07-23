<script lang="ts">
  interface Props {
    interactive?: boolean;
  }

  let {
    interactive = false,
    children,
  }: Props & {
    children: import("svelte").Snippet;
  } = $props();
</script>

<div class="card" class:card--interactive={interactive}>
  {@render children()}
</div>

<style>
  .card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.5rem;
    box-shadow: var(--shadow-soft);
    transition:
      border-color 180ms ease,
      transform 180ms ease,
      background-color 180ms ease;
  }

  .card--interactive {
    cursor: pointer;
  }

  .card--interactive:hover {
    background: var(--surface-hover);
    border-color: var(--card-border);
    transform: translateY(-4px);
    box-shadow: 0 0 30px var(--accent-glow);
  }
</style>
