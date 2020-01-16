import axios from 'axios';

export function request(config){
  // 1. 创建一个 axios 的实例
  const instance = axios.create({
    baseURL: "http://123.207.32.32",
    timeout: 5000,
  })

  // 2. axios 的拦截器
  // 2.1 请求拦截
  instance.interceptors.request.use(config => {
    console.log(config)

    // 1. config 中的信息不符合服务器的要求

    // 2. 比如在发送网络请求的时，在界面中显示一个请求的图标(loading)

    // 3. 某些网络请求需要登录(token), 必须携带一些特殊的信息



    return config;
  }, err => {
    console.log(err);
  });
  // 2.1 响应拦截
  // instance.interceptors.response;

  // 发送真正的请求
  return instance(config)
}

// 第四种封装
/*
export function request(config){
  // 1. 创建一个 axios 的实例
  const instance = axios.create({
    baseURL: "http://123.207.32.32",
    timeout: 5000,
  })

  // 发送真正的请求
  return instance(config)
}
*/


// 第三种封装
/*
export function request (config){
  return new Promise( (resolve, reject) => {

    // 1. 创建一个 axios 的实例
    const instance = axios.create({
      baseURL: "http://123.207.32.32",
      timeout: 5000,
    })

    // 发送真正的请求
    instance(config.baseConfig)
      .then( res => {
        resolve(res)
      })
      .catch( err => {
        reject(err)
      })
  })
}
*/

// 第二种封装
/*
export function request (config){

  // 1. 创建一个 axios 的实例
  const instance = axios.create({
    baseURL: "http://123.207.32.32",
    timeout: 5000,
  })

  // 发送真正的请求
  instance(config.baseConfig)
    .then( res => {
      config.success(res)
    })
    .catch( err => {
      config.failure(err)
    })
}
*/

// 第一种的封装
/*
export function request (config, success, failure){

  // 1. 创建一个 axios 的实例
  const instance = axios.create({
    baseURL: "http://123.207.32.32",
    timeout: 5000,
  })

  // 发送真正的请求
  instance(config)
    .then( res => {
      success(res)
    })
    .catch( err => {
      failure(err)
    })
}
*/
