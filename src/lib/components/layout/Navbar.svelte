<script lang="ts">
  const links = [
    {
      label: "Experience",
      href: "#experience",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Resume",
      href: "/resume",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  let menuOpen = $state(false);
</script>

<nav class="navbar">
  <div class="nav-container">
    <a class="brand" href="/"> Cadence Freeze </a>

    <button
      class="menu-button"
      onclick={() => (menuOpen = !menuOpen)}
      aria-label="Toggle navigation"
    >
      ☰
    </button>

    <div class="links" class:open={menuOpen}>
      {#each links as link}
        <a href={link.href} onclick={() => (menuOpen = false)}>
          {link.label}
        </a>
      {/each}
    </div>
  </div>
</nav>

<style>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    z-index: 100;

    background: rgba(9, 9, 11, 0.65);

    backdrop-filter: blur(16px);

    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .nav-container {
    width: min(var(--max-width), calc(100% - 3rem));

    margin-inline: auto;

    height: 72px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .brand {
    font-weight: 700;
    letter-spacing: -0.03em;
  }

  .links {
    display: flex;
    gap: 2rem;
  }

  .links a {
    color: var(--text-muted);

    font-size: 0.95rem;

    transition: color 150ms ease;
  }

  .links a:hover {
    color: var(--text);
  }

  .menu-button {
    display: none;

    background: transparent;
    border: none;

    color: var(--text);

    font-size: 1.5rem;

    cursor: pointer;
  }

  @media (max-width: 700px) {
    .menu-button {
      display: block;
    }

    .links {
      position: absolute;

      top: 72px;
      left: 0;
      right: 0;

      display: none;

      flex-direction: column;

      padding: 1.5rem;

      background: var(--bg-secondary);

      border-bottom: 1px solid var(--border);
    }

    .links.open {
      display: flex;
    }
  }
</style>
