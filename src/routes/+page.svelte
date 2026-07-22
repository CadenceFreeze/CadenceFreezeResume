<script lang="ts">
	import Button from "$lib/components/ui/Button.svelte";
</script>

<div class="container section">
	<h1>Design System</h1>

	<div class="row">
		<Button>
			Solid
		</Button>

		<Button appearance="outline">
			Outline
		</Button>

		<Button disabled>
			Disabled
		</Button>

		<Button href="https://github.com">
			GitHub
		</Button>
	</div>
</div>

<style>
	h1 {
		margin-bottom: 2rem;
	}

	.row {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}
</style>