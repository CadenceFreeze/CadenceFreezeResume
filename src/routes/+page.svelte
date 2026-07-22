<script lang="ts">
  import Navbar from "$lib/components/layout/Navbar.svelte";
  import { Section, Container, Card, Button } from "$lib/components/ui";
</script>

<Navbar />

<Section>
  <Container>
    <Card>
      <h1>Cadence Freeze</h1>

      <p>
        Software Engineer specializing in AI, embedded systems, and full-stack
        development.
      </p>
    </Card>
  </Container>
</Section>

<Container>
  <br />

  <h1>Design System</h1>

  <div class="row">
    <Button>Solid</Button>

    <Button appearance="outline">Outline</Button>

    <Button disabled>Disabled</Button>

    <Button href="https://github.com">GitHub</Button>
  </div>

  <br />

  <h1>Component Test</h1>

  <Card>
    <h2>SRAM Internship</h2>

    <p>Building production software for connected bicycle systems.</p>
  </Card>

  <br />

  <Card interactive>
    <h2>Project Card</h2>

    <p>Hover me.</p>
  </Card>
</Container>

<Section id="test">
  <Container>
    <Card>
      <h1>Section Test</h1>

      <p>This section controls spacing.</p>
    </Card>
  </Container>
</Section>

<Section compact>
  <Container>
    <Card>
      <h2>Compact Section</h2>
    </Card>
  </Container>
</Section>

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
