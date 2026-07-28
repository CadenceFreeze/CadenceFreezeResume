<script lang="ts">
import type { Experience } from "$lib/types/experience";
import TimelineDot from "./TimelineDot.svelte";
import CompanyBadge from "./CompanyBadge.svelte";

let { experience } = $props<{
    experience: Experience;
}>();

</script>

<div class="item">

    <div class="left">

        <TimelineDot/>

        <div class="line"></div>

    </div>

    <div class="content">

        <div class="header">

            <div>

                <h3>{experience.position}</h3>

                <h4>{experience.company}</h4>

            </div>

            <CompanyBadge {experience}/>

        </div>

        <p class="date">
            {experience.start} — {experience.end}
        </p>

        <p class="description">
            {experience.description}
        </p>

        <ul>

            {#each experience.bullets as bullet}
                <li>{bullet}</li>
            {/each}

        </ul>

        <div class="tech">

            {#each experience.technologies as tech}
                <span>{tech}</span>
            {/each}

        </div>

    </div>

</div>

<style>

.item{

display:grid;

grid-template-columns:40px 1fr;

gap:1rem;

}

.left{

display:flex;

flex-direction:column;

align-items:center;

}

.line{

width:2px;

flex:1;

background:var(--border);

margin-top:.4rem;

}

.header{

display:flex;

justify-content:space-between;

align-items:flex-start;

gap:1rem;

}

.date{

color:var(--text-muted);

margin:.35rem 0;

}

.description{

margin-bottom:.8rem;

}

ul{

padding-left:1.2rem;

}

.tech{

display:flex;

flex-wrap:wrap;

gap:.5rem;

margin-top:1rem;

}

.tech span{

padding:.35rem .7rem;

background:var(--bg-secondary);

border-radius:999px;

font-size:.8rem;

}

</style>