<script lang="ts">
  import { onMount } from "svelte";

  let menu: HTMLDivElement;
  let menuButton: HTMLButtonElement;

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

  onMount(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as Node;

      if (menuOpen && !menu.contains(target) && !menuButton.contains(target)) {
        menuOpen = false;
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
</script>

<nav class="navbar">
  <div class="nav-container">
    <a class="brand" href="/"> Cadence Freeze </a>

    <div bind:this={menu} class="links" class:open={menuOpen}>
      {#each links as link}
        <a href={link.href} onclick={() => (menuOpen = false)}>
          {link.label}
        </a>
      {/each}
    </div>
    <a href="/about" class="profile-link" aria-label="About Cadence">
      <img src="$lib/assets/profile.png" alt="Cadence Freeze" class="profile-image" />
    </a>

    <button
      class="menu-button"
      bind:this={menuButton}
      class:open={menuOpen}
      onclick={() => (menuOpen = !menuOpen)}
      aria-label="Toggle navigation"
    >
      <svg class="menu-icon" viewBox="0 0 24 24" aria-hidden="true">
        <line class="top" x1="4" y1="7" x2="20" y2="7" />
        <line class="middle" x1="4" y1="12" x2="20" y2="12" />
        <line class="bottom" x1="4" y1="17" x2="20" y2="17" />
      </svg>
    </button>
  </div>
</nav>

<style>
  .menu-button {
    display: none;

    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;

    padding: 0;

    border: none;
    border-radius: 10px;

    background: transparent;

    color: var(--text);

    cursor: pointer;

    transition:
      background 0.2s ease,
      color 0.2s ease;
  }

  .menu-button:hover {
    background: var(--accent-soft);
  }

  .menu-button.open {
    color: var(--accent);
  }

  .menu-icon {
    width: 22px;
    height: 22px;

    overflow: visible;
  }

  .menu-icon line {
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;

    transform-box: fill-box;
    transform-origin: center;

    transition:
      transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      opacity 0.2s ease;
  }

  .menu-button.open .top {
    transform: translateY(5px) rotate(45deg);
  }

  .menu-button.open .middle {
    opacity: 0;
  }

  .menu-button.open .bottom {
    transform: translateY(-5px) rotate(-45deg);
  }

  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: var(--navbar-background);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--navbar-border);
    height: 64px;
    align-content: center;
  }

  .brand {
    font-weight: 700;
    letter-spacing: -0.03em;
  }

  .nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 0 1.5rem;
    position: relative;
  }

  .links {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-left: auto;
    width: max-content;
    min-width: 180px;
    right: 1.5rem;
  }

  .profile-link {
    display: flex;
    align-items: center;
    margin-left: 0.75rem;
  }

  .profile-image {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--border);
    transition:
      transform 0.2s ease,
      border-color 0.2s ease;
  }

  .profile-link:hover .profile-image {
    transform: scale(1.05);
    border-color: var(--accent);
  }

  .links a {
    padding: 0.75rem 1rem;
    width: 100%;
    border-radius: 10px;
    text-align: center;
    color: var(--text-muted);
    transition:
      background 0.2s ease,
      color 0.2s ease;
  }

  .links a:hover {
    background: var(--accent-soft);
    border-left: 3px solid var(--accent);
    padding-left: calc(1rem - 3px);
  }

  @media (max-width: 768px) {
    .menu-button {
      display: block;
    }

    .links {
      display: none;
      position: absolute;
      top: calc(100% + 0.75rem);
      right: 1.5rem;
      width: max-content;
      min-width: 160px;
      flex-direction: column;
      padding: 0.5rem;
      background: var(--bg-secondary);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      box-shadow: var(--shadow-soft);
      z-index: 100;
    }

    .links.open {
      display: flex;
    }
  }
</style>
