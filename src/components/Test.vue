/* eslint-disable */
<template>
  <div>
    <p>訊息內容：</p>
    <ul>
      <li v-for="(item,key) in messages" :key="key">{{item.Message}}</li>
      <!-- <li v-for="item in messages" :key="item">{{item.Message}}</li> -->
    </ul>
    <p>{{ReveiveData}}</p>
  </div>
</template>

<script>

window.jQuery = $;
require('signalr');

export default {
  name: 'Test',
  data() {
    return {
      messages: [],
      ReveiveData: null,
    };
  },
  methods: {
    get() {
      const vm = this;

      // 下面對應到網址的部份
      const hub = $.hubConnection('http://localhost:44369');

      // 下面對應了.net的DefaultHub
      const proxy = hub.createHubProxy('BroadcastHub');

      // console.log('proxy', proxy);

      // proxy.on('ReceiveMsg', function ReceiveData(data) {
      //   console.log('data', data);
      //   vm.messages = data;
      // });

      proxy.on('ReceiveMsg', (data) => {
        console.log('data', data);
        vm.messages = data;
      });

      // proxy.on('ReceiveMsg', data => vm.messages = data);

      // 一開始就先去呼叫Get，以確保畫面一開始就有預設的資料
      hub.start().done(() => proxy.invoke('ReceiveMsg'));
    },

    // ReceiveData(data){
    //     console.log('data', data);
    //     vm.messages = data;
    // },
  },

  created() {
    this.get();
  },
};
</script>

<style>
</style>
