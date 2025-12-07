<script lang="ts">
  import { useSummaryStore } from '$lib/stores/summaryStore';

  const period = useSummaryStore(s=>s.period);
  const setPeriod = useSummaryStore(s=>s.setPeriod);
</script>

<div>
  <button on:click={()=>setPeriod('month')} aria-pressed={period==='month'}>Month</button>
  <button on:click={()=>setPeriod('year')} aria-pressed={period==='year'}>Year</button>
</div>