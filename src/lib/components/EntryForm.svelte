<script lang="ts">
  import { useBudgetStore } from '$lib/stores/budgetStore';
  import { v4 as uuid } from 'uuid';

  const addEntry = useBudgetStore(s => s.addEntry);
  let type:'income'|'expense'='expense';
  let date=new Date().toISOString().slice(0,10);
  let category='General';
  let description='';
  let amount=0;

  function submit(){
    if(!amount) return;
    addEntry({id:uuid(),type,date,category,description,amount:Number(amount)});
    amount=0;description='';
  }
</script>

<form on:submit|preventDefault={submit}>
  <select bind:value={type}>
    <option value="income">Income</option>
    <option value="expense">Expense</option>
  </select>
  <input type="date" bind:value={date} />
  <input placeholder="Category" bind:value={category} />
  <input placeholder="Description" bind:value={description} />
  <input type="number" min="0" step="0.01" bind:value={amount} />
  <button type="submit">Add</button>
</form>