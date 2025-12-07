<script lang="ts">
  import { useBudgetStore } from '$lib/stores/budgetStore';

  const entries = useBudgetStore(s => s.entries);
  const deleteEntry = useBudgetStore(s => s.deleteEntry);

  let editingId:string|null=null;
  let editAmount=0;

  function startEdit(id:string, current:number){
    editingId=id;
    editAmount=current;
  }

  function save(id:string){
    useBudgetStore.getState().updateEntry(id,{amount:Number(editAmount)});
    editingId=null;
  }
</script>

<table>
  <thead>
    <tr><th>Date</th><th>Type</th><th>Category</th><th>Description</th><th>Amount</th><th></th></tr>
  </thead>
  <tbody>
    {#each entries as e}
      <tr>
        <td>{e.date}</td>
        <td>{e.type}</td>
        <td>{e.category}</td>
        <td>{e.description}</td>
        <td>
          {#if editingId===e.id}
            <input type="number" bind:value={editAmount} />
          {:else}
            {e.amount.toFixed(2)}
          {/if}
        </td>
        <td>
          {#if editingId===e.id}
            <button on:click={()=>save(e.id)}>Save</button>
          {:else}
            <button on:click={()=>startEdit(e.id,e.amount)}>Edit</button>
          {/if}
          <button on:click={()=>deleteEntry(e.id)}>Delete</button>
        </td>
      </tr>
    {/each}
  </tbody>
</table>