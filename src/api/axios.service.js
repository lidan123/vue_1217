import axios from './axios';
class myAxios {
  getUrl(url) {
    return `${__ce.baseURL}${url}`; // 打包时用这个 __ce.baseURL
    // return `/api${url}`; // 防止跨域，开发环境用这个代理
  };
  //公共ajax;
  postServer(opt) {
    let data = {};
    if (opt.data) {
      data = opt.data;
    }
    axios.post(opt.url, data).then((response) => {
      console.log(response);
      if (!response.data.status) {
        return;
      }
      if (opt.onSuccess) {
        opt.onSuccess(response);
      }
    }).catch(error => {
      if (opt.onFailed) {
        opt.onFailed(error);
      }
    });
  }
  // get 请求
  getServer(opt) {
    let data = {};
    if (opt.data) {
      data = opt.data;
    }
    axios.get(opt.url, {
      params: data
    }).then((response) => {
      if (opt.onSuccess) {
        opt.onSuccess(response);
      }
    }).catch(error => {
      if (opt.onFailed) {
        opt.onFailed(error);
      }
    });
  }
  setData(opt) {
    let data = {};
    if (opt.data) {
      data = opt.data;
    }
    return data;
  }
}
export default myAxios;
