axios使用方法：
  1.安装
    a.安装axios ===> npm install axios --save
    b.安装vue-axios ===> npm install vue-axios --save

  2.在main.js中引用
    a. import axios from 'axios'
    b. import vue-axios from 'vue-axios'
    c. 使用该插件   Vue.use('axios', ‘vue-axios’)

  3.在具体的组件中使用需要掌握的点
    a. axios.get('需要访问的网址', {params:{a:..., b:...}})
        注：需要配置参数时，才加入{params:{a:..., b:...}}
    b. axios.post('需要访问的网址', {data:{a:..., b:...}})
        注：需要配置参数时，才加入{data:{a:..., b:...}},这里的参数配置和get方法的配置还不一致
    c. 创建axios的实例 ===> var http = axios.create({
                              baseURL: '前面都一样的URL',
                              ...(还有其他配置不一一列举了)
                          })
    d. 一次发送多个请求
        1. 先定义N个请求   function http1(){axios.get('url1')}
                         function http2(){axios.get('url2')}
        2. 再用axios.all([http1(), http2()]).then(axios.spread((res1,res2)=>{console.log(res1);console.log(res2)}))来请求   