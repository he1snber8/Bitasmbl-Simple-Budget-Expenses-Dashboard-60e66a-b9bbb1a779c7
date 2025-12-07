<script lang="ts">
  import { useBudgetStore } from '$lib/stores/budgetStore';
  import { derived } from 'svelte/store';

  const entriesStore = { subscribe: useBudgetStore.subscribe };
  let month = new Date().getMonth();
  let year = new Date().getFullYear();

  const data = derived(entriesStore, ($s) => {
    const map = new Map<string,number>();
    $s.entries
      .filter(e=>e.type==='expense')
      .forEach(e=>{
        const d=new Date(e.date);
        if(d.getMonth()===month && d.getFullYear()===year){
          map.set(e.category,(map.get(e.category)||0)+e.amount);
        }
      });
    return Array.from(map.entries());
  });
</script>

<svg width="400" height="200">
  {#await data then rows}
    {#if rows.length===0}
      <text x="10" y="20">No data for selected month</text>
    {:else}
      {#each rows as [cat,val],i}
        <rect x={i*40} y={200-val} width="30" height={val} fill="teal" />
        <text x={i*40} y={195} font-size="10">{cat}</text>
      {/each}
    {/if}
  {/await}
</svg>