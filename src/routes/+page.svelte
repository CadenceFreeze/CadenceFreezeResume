<script lang="ts">
	import Button from "$lib/components/ui/Button.svelte";
    import Card from "$lib/components/ui/Card.svelte";
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

    <br />

    <h1>Component Test</h1>

	<Card>
		<h2>
			SRAM Internship
		</h2>

		<p>
			Building production software for connected bicycle systems.
		</p>
	</Card>


	<br />


	<Card interactive>
		<h2>
			Project Card
		</h2>

		<p>
			Hover me.
		</p>
	</Card>
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