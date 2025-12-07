<script lang="ts">
  import { useBudgetStore } from '$lib/stores/budgetStore';
  import { getMonthlyTotals } from '$lib/stores/summaryStore';

  const entries = useBudgetStore(s=>s.entries);
  let now=new Date();
  let month=now.getMonth();
  let year=now.getFullYear();

  $: totals=getMonthlyTotals(entries,month,year);
</script>

<section>
  <h3>Monthly Summary</h3>
  <p>Income: {totals.income.toFixed(2)}</p>
  <p>Expenses: {totals.expense.toFixed(2)}</p>
  <p>Net: {(totals.income-totals.expense).toFixed(2)}</p>
</section>