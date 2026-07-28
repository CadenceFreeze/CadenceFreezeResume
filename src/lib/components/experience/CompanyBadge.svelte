<script lang="ts">
  import type { Experience } from "$lib/types/experience";
  let { experience } = $props<{
    experience: Experience;
  }>();
</script>

<span class="badge">
  {experience.type}
</span>

<style>
  .badge {
    padding: 0.35rem 0.8rem;

    border-radius: 999px;

    background: var(--accent-soft);

    color: var(--accent);

    font-size: 0.8rem;

    font-weight: 600;
  }
</style>
