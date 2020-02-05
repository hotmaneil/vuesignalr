<template>
  <div>
    <highcharts :options="chartOptions" :callback="myCallback"></highcharts>
  </div>
</template>

<script>
export default {
  name: 'lineChart',
  data() {
    return {
      chartOptions: {
        title: {
          text: '2010 ~ 2016 年太陽能行業就業人員發展情況',
        },
        subtitle: {
          text: '資料來源：thesolarfoundation.com',
        },
        yAxis: {
          title: {
            text: '就業人數',
          },
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
        },
        plotOptions: {
          series: {
            label: {
              connectorAllowed: false,
            },
            pointStart: 2010,
          },
        },
        series: [
          {
            name: '安裝，實施人員',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
          },
          {
            name: '工人',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
          },
          {
            name: '銷售',
            data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
          },
          {
            name: '專案開發',
            data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
          },
          {
            name: '其他',
            data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
          },
        ],
        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500,
              },
              chartOptions: {
                legend: {
                  layout: 'horizontal',
                  align: 'center',
                  verticalAlign: 'bottom',
                },
              },
            },
          ],
        },
      },
    };
  },

  mounted() {},

  methods: {
    myCallback() {

    },
  },
};
</script>

<style>
  .highcharts-container {
    width: 600px;
    height: 400px;
    border: 1px solid #ddd;
    margin: auto;
  }
</style>
