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

    padding: .35rem .8rem;

    border-radius: 999px;

    background: var(--accent-soft);

    color: var(--accent);

    font-size: .8rem;

    font-weight: 600;
}
</style>