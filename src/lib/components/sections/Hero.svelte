<script lang="ts">
  import { Button, Container, Section } from "$lib/components/ui";
</script>

<Section>
  <Container>
    <div class="hero">
      <div class="content">
        <p class="eyebrow">SOFTWARE ENGINEER • PRODUCTION SYSTEMS • AI/ML</p>

        <h1>
          Building reliable software systems that turn complex problems into
          real-world products.
        </h1>

        <p class="description">
          Software Engineer focused on production applications, automation, and
          AI-driven systems.
        </p>

        <div class="actions">
          <Button href="#projects">Explore Projects →</Button>

          <Button href="/resume" appearance="outline">View Resume</Button>
        </div>
      </div>
      <div class="visual">
        <div class="proof">
          <div>
            <strong>Currently:</strong>
            <span>Software Engineering Intern @ SRAM</span>
          </div>

          <div>
            <strong>Building:</strong>
            <span>Product tools and customer-facing applications</span>
          </div>

          <div>
            <strong>Specializing:</strong>
            <span>Full-stack development + AI/ML systems</span>
          </div>

          <div>
            <strong>Exploring:</strong>
            <span>Intelligent systems and scalable software solutions</span>
          </div>
        </div>
        <div class="system-card">
          <p class="system-title">WHAT I BUILD</p>

          <div class="system-item">
            <div>
              <strong>Product Development</strong>
              <p>Building software from concept to deployment.</p>
            </div>
          </div>

          <div class="system-item">
            <div>
              <strong>Automation</strong>
              <p>Creating tools that improve engineering workflows.</p>
            </div>
          </div>

          <div class="system-item">
            <div>
              <strong>Intelligent Systems</strong>
              <p>Applying AI/ML to solve complex problems.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
</Section>

<style>
  .hero {
    display: grid;
    grid-template-columns:
      minmax(0, 1.1fr)
      minmax(320px, 0.9fr);
    gap: 5rem;
    align-items: center;
    min-height: calc(100vh - 72px);
    padding: 4rem 0;
  }

  .content {
    max-width: 700px;
  }

  .eyebrow {
    margin-bottom: 1.5rem;
    font-size: 0.85rem;
    letter-spacing: 0.12em;
    color: var(--accent);
    font-weight: 600;
  }

  h1 {
    font-size: clamp(2.8rem, 5vw, 4.5rem);
    line-height: 1.05;
    margin-bottom: 1.75rem;
  }

  .description {
    font-size: 1.15rem;
    max-width: 600px;
    margin-bottom: 2.5rem;
  }

  .actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 4rem;
  }

  .proof {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .proof div {
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 1rem;
    align-items: baseline;
  }

  .proof strong {
    color: var(--text);
    font-size: 1rem;
  }

  .proof span {
    color: var(--text-muted);
    font-size: 0.85rem;
  }

  .visual {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .system-card {
    width: 100%;
    max-width: 420px;
    padding: 2rem;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    box-shadow: var(--shadow-soft);
  }

  .system-title {
    font-size: 0.8rem;

    letter-spacing: 0.12em;

    margin-bottom: 1.5rem;

    color: var(--text-muted);
  }

  .system-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid var(--border);
  }

  .system-item:last-child {
    border-bottom: none;
  }

  @media (max-width: 900px) {
    .hero {
      grid-template-columns: 1fr;
      gap: 3rem;
      min-height: auto;
      padding-top: 3rem;
    }

    .visual {
      justify-content: flex-start;
    }
  }

  @media (max-width: 600px) {
    .proof {
      flex-direction: column;
      gap: 1rem;
    }
  }
</style>
