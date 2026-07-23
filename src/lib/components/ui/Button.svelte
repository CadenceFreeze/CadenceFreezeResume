<script lang="ts">
  type Appearance = "solid" | "outline";
  type ButtonType = "button" | "submit" | "reset";

  interface Props {
    appearance?: Appearance;
    href?: string;
    disabled?: boolean;
    type?: ButtonType;
  }

  let {
    appearance = "solid",
    href,
    disabled = false,
    type = "button",
    children,
  }: Props & {
    children: import("svelte").Snippet;
  } = $props();
</script>

{#if href}
  <a
    class="button"
    class:button--solid={appearance === "solid"}
    class:button--outline={appearance === "outline"}
    aria-disabled={disabled}
    href={disabled ? undefined : href}
  >
    {@render children()}
  </a>
{:else}
  <button
    class="button"
    class:button--solid={appearance === "solid"}
    class:button--outline={appearance === "outline"}
    {type}
    {disabled}
  >
    {@render children()}
  </button>
{/if}

<style>
  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;

    padding: 0.85rem 1.5rem;

    border-radius: var(--radius);
    border: 1px solid transparent;

    font: inherit;
    font-weight: 600;

    cursor: pointer;
    user-select: none;

    text-decoration: none;

    transition:
      background-color 180ms ease,
      border-color 180ms ease,
      color 180ms ease,
      transform 180ms ease,
      box-shadow 180ms ease;
  }

  /* ---------- Variants ---------- */

  .button--solid {
    background: var(--accent);
    color: white;
  }

  .button--solid:hover:not(:disabled):not([aria-disabled="true"]) {
    background: var(--accent-soft);
    transform: translateY(-2px);
  }

  .button--outline {
    background: transparent;
    border-color: var(--button-outline);
    color: var(--text);
  }

  .button--outline:hover:not(:disabled):not([aria-disabled="true"]) {
    background: var(--button-outline-background);
    border-color: var(--button-outline-hover);
    transform: translateY(-2px);
  }

  /* ---------- Active ---------- */

  .button:active:not(:disabled):not([aria-disabled="true"]) {
    transform: translateY(0);
  }

  /* ---------- Focus ---------- */

  .button:focus-visible {
    outline: none;
    box-shadow: 0 0 0 4px var(--accent-soft);
  }

  /* ---------- Disabled ---------- */

  .button:disabled,
  .button[aria-disabled="true"] {
    opacity: 0.45;
    cursor: not-allowed;
    pointer-events: none;
  }
</style>
