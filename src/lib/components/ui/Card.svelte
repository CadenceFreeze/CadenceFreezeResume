<script lang="ts">
	interface Props {
		interactive?: boolean;
	}

	let {
		interactive = false,
		children
	}: Props & {
		children: import("svelte").Snippet;
	} = $props();
</script>

<div
	class="card"
	class:card--interactive={interactive}
>
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

	border-color: rgba(255,255,255,0.18);

	transform: translateY(-4px);
}
</style>