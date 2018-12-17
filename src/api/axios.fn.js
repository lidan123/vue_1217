import myAxios from './axios.service'
const myAxiosMethods = new myAxios();
class RecordServer {
  // 查询订单 -- post方法
  sendMiceIndentSearchServer(opt) {
    const data = myAxiosMethods.setData(opt);
    const url = myAxiosMethods.getUrl('/search'); // 这里的/search是后端给的接口地址
    myAxiosMethods.postServer({
      url,
      data,
      onSuccess: opt.onSuccess,
      onFailed: opt.onFailed
    });
  }
  export default RecordServer;

  // 页面中使用：
  // const recordSever = new RecordServer()

  // methods: {
  //   _sendSearchServer() { // 在需要的地方调用这个方法
  //     recordServer.sendSearchServer({
  //       data: this.params, //  params是这个接口需要传递给后台的参数
  //       onSuccess: (res) => {
  //         console.log(res)
  //       },
  //       onFailed: (err) => {
  //         console.log(err)
  //       }
  //     })
  //   }
  // }
