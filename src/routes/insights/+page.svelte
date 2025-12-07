<script lang="ts">
  import SpendingChart from '$lib/components/SpendingChart.svelte';
  import IncomeExpenseSummary from '$lib/components/IncomeExpenseSummary.svelte';
</script>

<section>
  <h2>Spending Insights</h2>
  <IncomeExpenseSummary />
  <SpendingChart />
</section>