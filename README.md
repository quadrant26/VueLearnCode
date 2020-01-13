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
        
           
           
4. 生命周期函数
    
    - ### destroyed 组件销毁的时候
    
        使用 keep-alive 不调用此生命周期函数
        
    - ### activated deactivated 
        
        activated  ->   活跃状态
        deactivated ->  不活跃状态
        使用 keep-alive 保持状态的才调用
        
                 