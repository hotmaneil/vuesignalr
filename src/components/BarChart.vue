<template>
  <div>
    <highcharts :options="chartOptions" :callback="myCallback"></highcharts>
  </div>
</template>

<script>
import axios from 'axios';

// eslint-disable-next-line no-console
export default {
  name: 'barChart',
  data() {
    return {
      choices: [],
      votes: [],
      chartOptions: {}
    };
  },

  mounted() {
    this.LoadResults(1);
  },

  methods: {
    myCallback() {},

    /** 呼叫 SignalR Hub */
    CallHub() {
      const hub = $.hubConnection('http://localhost:44369');
      const proxy = hub.createHubProxy('PollHub');

      console.log('proxy', proxy);

      proxy.on('GetVoteResults', () => {
        console.log('更新圖表');
        this.LoadResults(1);
      });

      hub.start().done(() => proxy.invoke('GetVoteResults'));
    },

    /** 載入圖表結果 */
    LoadResults(pollID) {
      const vm = this;

      vm.choices = [];
      vm.votes = [];
      vm.chartOptions = {};

      const url = `http://localhost:44369/api/Poll/GetVoteResults?Id=${pollID}`;
      axios
        .get(url)
        .then((response) => {
          console.log(response.data);

          const dataList = response.data;
          for (let num = 0; num < dataList.length; num += 1) {
            vm.choices.push(dataList[num].Choice);
            vm.votes.push(dataList[num].Vote);
          }

          vm.chartOptions = {
            chart: {
              type: 'bar'
            },
            title: {
              text: '年度風雲車投票結果'
            },
            subtitle: {
              text: '資料來源: Wikipedia.org'
            },
            xAxis: {
              categories: vm.choices,
              title: {
                text: null
              }
            },
            yAxis: {
              title: {
                text: 'Best DOTA Heroes'
              }
            },
            series: [
              {
                name: '票數',
                data: vm.votes
              }
            ]
          };
        })
        .catch((error) => {
          console.error(error);
        });
    }
  },
  created() {
    this.CallHub();
  }
};
</script>
