import { Message } from 'element-ui';
const HUBNAME = 'BroadcastHub';

/*客戶端呼叫伺服器端方法*/
//更新訂單列印次數
const updateOrderPrint = {
  name: 'updateOrderPrint',
  method: function (data) {
    console.log(data)
  }
}

/*伺服器呼叫客戶端方法*/
// 列印新訂單
const printNewOrder = {
  name: 'printNewOrder',
  method: function (data) {
    console.log(data)
  }
}

const get = {
  name: 'Get',
  method: function (data) {
    console.log(data)
  }
}

//伺服器端的方法
const serverMethodSets = [updateOrderPrint];

//客戶端的方法
const clientMethodSets = [printNewOrder, get]; //將需要註冊的方法放進集合

// 建立連線
export function startConnection() {
  let hub = $.hubConnection(process.env.HUB_API)
  let proxy = createHubProxy(hub) //需要先註冊方法再連線
  hub.start().done((connection) => {
    console.log('Now connected, connection ID=',   connection.id)
  }).fail(() => {
    Message('連線失敗' ,  error);
    console.log('Could not connect');
  })
  hub.error(function (error) {
    Message('SignalR error: ' ,  error);
    console.log('SignalR error: ' ,  error)
  })
  hub.connectionSlow(function () {
    console.log('We are currently experiencing difficulties with the connection.')
  });
  hub.disconnected(function () {
    console.log('disconnected')
  });
  return proxy
}

// 手動建立proxy
export function createHubProxy(hub) {
  let proxy = hub.createHubProxy(HUBNAME)
  // 註冊客戶端方法
  clientMethodSets.map((item) => {
    proxy.on(item.name, item.method)
  })
  return proxy
}
