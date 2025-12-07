<script lang="ts">
  export let data;
</script>

<svelte:head>
  <title>Simple Budget & Expenses Dashboard</title>
</svelte:head>

<div class="app-shell">
  <header>
    <h1>Budget Dashboard</h1>
  </header>
  <main>
    <slot />
  </main>
</div>

<style>
  .app-shell{max-width:960px;margin:0 auto;padding:1.5rem;font-family:sans-serif}
  header{margin-bottom:1rem}
</style>