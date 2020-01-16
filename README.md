# VueLearnCode

1. vue-cli

    `npm install -g @vue/cli 最新版本为 4.1.2`

2. 安装 vue-cli 2.x

    ```
    npm install -g npx

    安装桥接工具（工具）
    // 没有 yarn 
    // npm install -g yarn
    yarn global add @vue/cli-init

    vue init webpack vueProject
    ```


3. vue-router

    - ### 导入 router

        ```
        import Vue from 'vue'
        import VueRouter from 'vue-router'
        ```
    
    - ### 使用 router
    
        `Vue.use(VueRouter)`
    
    - ### 创建 router 对象
        
        ```
        const routes = [
            {
                path: "/home",
                component: Home
            }
        ];
        const router = new VueRouter({
            routes
        })
        ```
    
    - ### 导出( 将 router 传入到 Vue 实例中 )

        `export default router;`

    - ### 使用

        ```
        <router-link to="/home"></router-link>
        <router-link to="/home"></router-link>
        
        <!-- 占位显示 -->
        <router-view></router-view> 
        ```

    - ### 重定向

        ```
        {
            path: "/",
            component: "/home"
        }
        ```

    - ### url 显示方式 hash -> history

        ```
        const router = new Router({
            routes,
            mode: 'history'
        })
        ```
    - ### router-link 渲染
        
        渲染成 button 按钮
        
        `<router-link to="/home" tag="button"></router-link>` 
        
        history 不生效 添加 replace 属性
        `<router-link to="/home" tag="button" replace></router-link>`
        
    - ### 指定 active-class
            
        *第一种方法*
            
        ```
        <router-link to="/home" tag="button" replace active-class="active"></router-link>
        ```

        *第二种方法，在路由中设置*
        
        *指定 linkActiveClass*
            
        ```
        const router = new Router({
            routes,
            mode: 'history',
            linkActiveClass: "active"
        })
        ```
        
    - ### 通过 代码跳转路由
        
        `this.$router.push('/home')`
        `this.$router.replace('/home')`
        
        **Vue-router 报NavigationDuplicated的可能解决方案（vue-router version 3.0.7）**
        
        *第一种 -> 你需要为每个router.push增加回调函数*
        
        `router.push('/location').catch(err => {err})`

        *第二种 -> 禁止全局路由错误处理打印*
        ```
        import Router from 'vue-router'
        
        const originalPush = Router.prototype.push
        Router.prototype.push = function push(location, onResolve, onReject) {
          if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
          return originalPush.call(this, location).catch(err => err)
        }
        ```
        
    - ### 动态路由
        
        ```
        {
            path: '/user/:userid',
            component: User
        }
        
        // 动态路由需要 v-bind:to 去使用
        <router-link v-bind:to="/user/+userId">用户</router-link>
        <router-link v-bind:to="'/user/'+userId">用户</router-link>

        // 获取动态路由的参数列表
        this.$route.params
        ```
        
    - ### 路由的懒加载
        
        *方式一： 结合Vue的一部组件和Webpack*
        
        `const Home = resolve => {require.ensure(['@/components/Home.vue'], () => { resolve(require('@/components/Home.vue'))})}`
        
        *方式二： AMD写法*
        
        `const About = resolve => require(['@/components/About.vue'], resolve)`
        
        *方式三： ES6 Vue异步组件和Webpack代码分割*
        
        `const Home = () => import('@/components/Home.vaue')`
        
    - ### 嵌套路由
        
        */home/news and /home/message*
        
        **子路由配置**
        
        ```
        {
            // 子路由 path 前面不需要加 /
            path: '/home',
            component: Home,
            children: [
                // 默认子路由配置
                {
                    path: '',
                    redireact: 'news'
                },
                {
                    path: 'news',
                    component: News
                },
                {
                    path: 'message',
                    component: Message
                }
            ]
        },
        
        // 使用子路由时， 链接需要把链接写全
        <router-link to="/home/news">新闻</router-link>
        <router-link to="/home/message">消息</router-link>
        <router-view></router-view>
        ```
    - ### 参数传递
        
        **方式一：query**
            
        格式： `/router` 普通配置

        方式： 对象中使用 query 的 key 作为传递方式

        形成的路径： `/router?id=123, /router?id=abc`

        获取参数： `this.$route.query => Object`
            
        ```
        // 路由设置
        // 和普通的路由设置一样
        {
            path: '/profile',
            component: Profile
        }
        
        // 参数传递
        <router-link v-bind:to="{path: '/profile', query: {name: 'why', age:18, height:1.88}}">档案</router-link>
        
        // 获取参数
        // 返回值是 Object
        return this.$route.query;
        
        // 通过 代码的形式进行传递
        this.$router.push({
            path: '/profile',
            query: {
              name: 'why',
              age: 18,
              height: 1.88
            }
        })
        ```
        
        **方式二：params**
            
        格式： `/router/:id`

        方式： 在 path 后面跟上对应的值

        形成的路径： `/router/123, /router/abc`

        获取参数： `this.$route.params.xxx`
        
        ```
        // 通过 代码的形式进行传递
        this.$router.push('/user/' + this.userId).catch(err => {err});
        ```
        
    - ### 导航守卫
    
        
        ```
        // 设置 路由的 meta 元数据
        {
            path: "/",
            redirect: '/home',
            meta: {
              title: "首页"
            }
        },
          
        // 获取路由导航
        // 前置守卫(guard)
        router.beforeEach((to, from, next) => {
          // 从 from 到 to
          document.title = to.matched[0].meta.title;
          console.log(to)
          next()
        })
        
        // 后置钩子
        // 后置守卫(hook)
        router.afterEach( (to, from) =>{
          console.log("-----")
          console.log(to)
        })
        
        // 路由独享守卫
        // 写在 new Router
        {
            path: '/profile',
            component: Profile,
            meta: {
              title: "档案"
            },
            beforeEnter: (to, from, next) => {
              console.log( to )
            }
        }
        ```
        

    + ### keep-alive
        
        **kepp-alive 是内置组件，可以使包含的组件保留状态，或避免重新渲染**
        
        **router-view 也是一个组件，如果抱在 keep-alive 里面，所有路径匹配到的视图组件都会被缓存**
        
        *include 字符串或正则，只有匹配的组件才会被缓存*
        
        *exclude 排除组件(不写入缓存), 多个组件用逗号隔开，不要加空格*

    - ### 设置别名

        **在 webpack 中设置**

        ***设置别名后，在 html
         中 src 使用时 加载图片时 需要在 设置别名的路劲前加 ~ 符号***

        `<img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">`

        ```
        module.exports = {
            resolve: {
                extensions: ['.js', '.vue', '.json'],
                alias: {
                '@': resolve('src'),
                'assets': resolve('src/assets'),
                'components': resolve('src/components'),
                'views': resolve('src/views'),
                }
            }
        }
        ```
        
           
           
4. 生命周期函数
    
    - ### destroyed 组件销毁的时候
    
        使用 keep-alive 不调用此生命周期函数
        
    - ### activated deactivated 
        
        activated  ->   活跃状态
        deactivated ->  不活跃状态
        使用 keep-alive 保持状态的才调用

5. Promise

    - ### 异步编程解决方案
    
    ```
        // 什么情况不会用到 Promise
        // 有异步操作操作时，使用 promise 对这个异步操作进行封装
        // new -> 构造函数(11. 保存了一些状态信息，2. 执行传入的函数)
        // 在执行中传入的回调函数时，会传入两个参数，resolve,reject 本身也是函数
        new Promise( (resolve, reject) => {
            setTimeout( () => {
                // 成功的时候调用 resolve
                resolve('Hello, Promise');
    
                // 失败的时候调用 reject
                // reject('error message')
            }, 1000)
        }).then((data) => {
            console.log(data)
            console.log(data)
            console.log(data)
            console.log(data)
        }).catch( (err) => {
            console.log(err);
        })
    ```
     
    sync -> 同步
    
    async -> 异步
    
    - ### Promise 状态
        
        pending: 等待状态， 正在进行网络请求，或者定时器没有到时间
        
        fulfill: 满足状态。
        
        reject: 拒绝状态 
        
    - ### Promise 简写
    
        **不用 new Promise 直接用Promise.resolve 或 Promise.reject**
        
        `Promise.resolve(data)`
        `Promise.reject(data)`
        
    - ### Promise 抛出异常
    
        ```
            new Promise( (resolve, reject) => {
                setTimeout( () => {
                    resolve('aaa')
                }, 1000)
            }).then( res => {
                // 1. 自己处理
                console.log(res, '第一层的10处理代码')
        
                // 2.
                // return Promise.resolve(res + '111')
                return Promise.reject('error message');
                throw 'error message';
            }).catch( err => {
                console.log(err);
            })
        ```
    - ### Promise.all
        
        ```
            Promise.all([
                new Promise( (resolve, reject) => {
                    setTimeout( () => {
                        resolve('result1')
                    }, 2000)
                }),
                new Promise( (resolve, reject) => {
                    setTimeout( () => {
                        resolve('result2')
                    }, 2000)
                }),
            ]).then( res => {
                // res[0]
                // res[1]
                console.log(res);
            })
        ```
        
6. Vuex
    
    - ### 状态管理器
    
        集中式存储管理
    
    - ### 使用
        
        安装
        
            `npm install --save vuex@3.0.1`
        
        使用
        
        ```
            // store/index.js
            import Vue from 'vue'
            import Vuex from 'vuex'
            
            // 1. 装载插件
            Vue.use(Vuex)
            
            // 2. 创建对象
            const store = new Vuex.Store({
              state: {
                counter: 10,
              },
              mutations: {},
              actions: {},
              getters: {},
              modules: {}
            });
            
            
            // 3. 导出
            export default store;
            
            // 使用
            import store from './store'
            
            new Vue({
              el: '#app',
              store,
              render: h => h(App)
            })
        ```
    
    - ### State
        
        **访问 state 内的数据**
        
        `$store.state.xx`
    
    - ### Getters
        
        类似于 计算属性
        
        ```vue
            getters: {
              powerCount(state) {
                return state.counter * state.counter;
              },
              more20stu (state){
                return state.students.filter( s => s.age >= 20 )
              },
              more20stuLength(state, getters){
                // return state.students.filter( s => s.age >= 20 )
                return getters.more20stu.length;
              },
              moreAgestu (state){
                // 返回一个函数（getters 方法传递了参数）
                // 第一种写法
                return function (age){
                  return state.students.filter( s => s.age >= age )
                }
                // 第二种写法
                return age => { return state.students.filter( s => s.age >= age )}
              }
            },
        ```
        getters 访问
        
        `{{$store.getters.more20stuLength}}`
    
    - ### Mutations
        
        - 包括两个部分
            
            - 事件类型 type
            
            - 回调函数 handle, 该回调函数的第一个参数就是 state
            
            ```
                mutations: {
                    // 方法
                    increment(state){
                    state.counter ++;
                    },
                    decrement (state){
                    state.counter --;
                    }
                },
            ```
        - 参数传递
                    
            `this.$store.commit('incrementCount', number)`
            
            ```vue
            mutations: {
                incrementCount(state, number){
                    state.counter += number;
                },
            }
            ```
        
        - 第二种提交风格
            
            ```
                // 提交
                addcount2 (number){
                // 2. 特殊的提交封装
                this.$store.commit({
                    type: 'incrementCount2',
                    number
                })
                },
                
                // 使用
                incrementCount2(state, payload){
                // payload 负载
                // 2. 特殊的提交封装
                state.counter += payload.number;
            
                },
            ```

        - mutation 响应规则

            store 中的 state 是响应式的，当state中的数据发生改变时，Vue组件会自动更新

            规则:

            提前在 store 中初始化好所需的属性

            当给 state 中的对象添加新属性时，使用下面的方式

                a. `Vue.set(obj, 'newProp', 123)`

                b. 用新对象给就对象重新复制 `state.obj = { ...state.obj, newProp: 123 }`

                    ```
                    updateInfo (state){
                    // state.info.name = "mercury"

                    // 该方法做不到响应式
                    // state.info['address'] = '洛杉矶';
                    // 该方法做不到响应式
                    // delete state.info.age;


                    // 响应式操作
                    // 方式一：
                    // 响应式添加新的项
                    // Vue.set(state.info, "address", "洛杉矶")
                    // 删除
                    // Vue.delete(state.info, 'age')

                    // 方式二：
                    state.info = {...state.info, 'height': '123'};

                    }
                    ```
        
        - 类型常量

            ```
            // store/mutations-type.js
            export const INCREMENT = 'increment';
            export const DECREMENT = 'decrement';

            // store/index.js
            // 导入
            import {INCREMENT, DECREMENT} from './mutations-types'

            mutations: {
                // 方法
                [INCREMENT](state){
                state.counter ++;
                },
                [DECREMENT] (state){
                state.counter --;
                },
            }

            // app.vue
            methods: {
                subtraction (){
                this.$store.commit(DECREMENT)
                },
                addition (){
                this.$store.commit(INCREMENT)
                },
            }
            ```
                    
    
    - ### Actions

        异步操作

        ```
            // app.vue
            aUpdateInfo (){
                this.$store.dispatch('aUpdateInfo')
            },
            aUpdateInfo2 (){
                this.$store.dispatch('aUpdateInfo2', {
                    name: "ca",
                    usx: "male"
                })
            }

            // store/index.js
            actions: {
                aUpdateInfo (context){
                setTimeout( () => {
                    // state.info.name = "mercury"
                    context.commit('updateInfo')
                }, 1000)
                },
                aUpdateInfo2 (context, payload){
                    console.log(payload)
                }
            },


            // 带回调的信息
            // app.vue
            aCallback (){
                // this.$store.displatch('aCallback', "我是携带的信息")
                this.$store.dispatch('aCallback', '我是携带的信息').then(resolve => {
                    console.log("完成了提交")
                    console.log(resolve)
                })
            }

            // store/index.js
            actions: {
                aCallback (context, payload){
                    return new Promise((resolve, reject) => {
                        setTimeout( () => {
                        context.commit('updateInfo2');
                        console.log(payload)

                        resolve('1111')
                        }, 1000)
                    })
                }
            }
        ```
    
    - ### Modules

        ```
            const moduleA = {
                state: {
                    name: "张三"
                },
                mutations: {
                    updateName (state){
                    state.name = "李四"
                    },
                    updateName2 (state, payload){
                    state.name = payload
                    }
                },
                actions: {

                },
                getters: {
                    fullnameMuduleA(state){
                        return state.name+'1111';
                    },
                    fullnameMuduleA2(state, getters){
                        return getters.fullnameMuduleA+'1111';
                    },
                    // 第三个是 root 是根目录的 state
                    fullnameMuduleA3(state, getters, root){
                        return getters.fullnameMuduleA2+root.counter;
                    }
                }
            }

            modules: {
                a: moduleA,
                b: {
                    state: {},
                    mutations: {},
                    actions: {},
                    getters: {}
                },
            }
        ```

        a. 访问 modules 的数据
        
        `{{$store.state.moduleA.name}}`

        b. 提交数据

        `this.$store.commit('updateName2', "放肆")`

        c. getters 访问

        `<h4>{{$store.getters.fullnameMuduleA}}</h4>`

7. axios 

    - axios(config)

    - axios.request(config)

    - axios.get(url, [, config])

    - axios.delete(url, [, config])

    - axios.head(url, [, data[, config]])

    - axios.post(url, [, data[, config]])

    - axios.put(url, [, data[, config]])

    - axios.patch(url, [, data[, config]])

    // 并发请求
    
    - axios.all([axios(), axios()]).then(axios.spread(res1, res2))
    
    - 全局设置
        
        axios.defaults.baseURL
        
        axios.defaults.headers.post['Content-Type'] = "application/x-www-form-urlencoded"
        
    - 拦截
        
        ```
        instance.interceptors.request.use( config => {
            console.log("来到了 request 拦截 success 中");
            return config;
        }, err => {
            console.log("来到了 request 拦截 failure 中");
            return err;
        })
        
        instance.interceptors.response.use( res => {
            console.log("来到了 request 拦截 success 中");
            return res.data;
        }, err => {
            console.log("来到了 request 拦截 failure 中");
            return err;
        })
        ```
        
                 