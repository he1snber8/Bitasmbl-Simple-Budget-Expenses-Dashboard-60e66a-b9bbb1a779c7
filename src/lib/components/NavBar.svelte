<script lang="ts">
  import { page } from '$app/stores';
</script>

<nav>
  <a href="/dashboard" class:selected={$page.url.pathname==='/dashboard'}>Dashboard</a>
  <a href="/insights" class:selected={$page.url.pathname==='/insights'}>Insights</a>
</nav>

<style>
  nav{display:flex;gap:1rem;margin-bottom:1rem}
  a{text-decoration:none;color:#0366d6}
  .selected{font-weight:bold}
</style>