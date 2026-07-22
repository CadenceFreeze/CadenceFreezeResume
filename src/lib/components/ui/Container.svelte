<script lang="ts">
	interface Props {
		children: import("svelte").Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="container">
	{@render children()}
</div>

<style>
    .container {
		width: min(
			var(--max-width),
			calc(100% - 3rem)
			);
		margin-inline: auto;
	}
</style>