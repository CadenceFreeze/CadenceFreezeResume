<script>
  import Button from "$lib/components/ui/Button.svelte";

</script>
<svelte:head>
  <title>Resume | Cadence Freeze</title>
</svelte:head>

<section class="resume-page">
  <header class="hero">
    <h1>Resume</h1>

    <p>Download my latest resume or view it directly below.</p>

    <Button appearance="outline" href="/assets/resume/cadence-resume.pdf">
      Download PDF
    </Button>
  </header>

  <div class="resume-container">
    <iframe src="/assets/resume/cadence-resume.pdf" title="Resume"></iframe>
  </div>
</section>

<style>
  .resume-page {
    max-width: 1100px;
    margin: 0 auto;
    padding: 7rem 1.5rem 3rem; /* keeps it below navbar */
  }

  .resume-page header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 2rem;
  }

  .resume-page h1 {
    margin-bottom: 0.5rem;
  }

  .resume-page p {
    color: var(--text-muted);
    margin-bottom: 1.5rem;
  }

  .resume-container {
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
    background: var(--surface);
    box-shadow: var(--shadow-soft);
  }

  .resume-container iframe {
    width: 100%;
    height: 90vh;
    border: none;
  }
</style>
