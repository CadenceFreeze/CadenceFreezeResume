<script lang="ts">
import { experiences } from "$lib/data/experience";

import TimelineItem from "./TimelineItem.svelte";
</script>

<div class="timeline">

    {#each experiences as experience}

        <TimelineItem {experience}/>

    {/each}

</div>

<style>

.timeline{

display:flex;

flex-direction:column;

gap:3rem;

max-width:900px;

margin:auto;

}

</style>