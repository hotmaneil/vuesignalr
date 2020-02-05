<template>
  <div class="barChart">
    <!-- <LineChart/> -->
    <BarChart />
  </div>
</template>

<script>
// import LineChart from '@/components/LineChart.vue';
import BarChart from '@/components/BarChart.vue';

export default {
  name: 'highCharts',
  components: {
    /* eslint-disable vue/no-unused-components */
    // LineChart,
    BarChart
  }
};
</script>
