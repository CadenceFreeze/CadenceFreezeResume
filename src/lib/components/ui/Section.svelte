<script lang="ts">
	interface Props {
		id?: string;
		compact?: boolean;
		children: import("svelte").Snippet;
	}

	let {
		id,
		compact = false,
		children
	}: Props = $props();
</script>

<section
	{id}
	class="section"
	class:section--compact={compact}
    >
    {@render children()}
</section>

<style>
    .section {
	padding: 8rem 0;
    }


    .section--compact {
	    padding: 4rem 0;
    }
</style>