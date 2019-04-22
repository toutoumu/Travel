#### [vue组件name的作用小结](https://www.jb51.net/article/140702.htm)

#### 1. 第三方库
 0.  [一个凑合的 Vue.js 移动端 UI 组件库](https://vux.li/)
 1.  [css动画 animate.css](https://daneden.github.io/animate.css/)
 2.  [一像素边框 border.css]()
 3.  [重置默认样式 reset.css](https://cssreset.com/)
 3.  [重置默认样式 Normalize.css](http://necolas.github.io/normalize.css/)
 4.  [velocityjs动画库](http://velocityjs.org/)
 5.  [velocityjs动画库GitHub](https://github.com/julianshapiro/velocity)
 6.  [swiper图片轮播](https://www.swiper.com.cn/)
 7.  [fastclick](https://github.com/ftlabs/fastclick) `npm install fastclick -S`
 8.  [better-scroll](https://github.com/ustbhuangyi/better-scroll)                  
 9.  [vue下拉刷新](https://www.npmjs.com/package/vue-scroller) 
     [文档](https://www.jianshu.com/p/31ad32e7ec13)
 10. [VUE 插件最全集](https://blog.csdn.net/hjh15827475896/article/details/78207066)
     



#### 2. 完美解决 vscode 在 style 中没有代码提示的问题
`设置中把 Snippets Prevent Quick Suggestions 勾掉即可`


#### 3. sass,less,stylus
    ``` 
    ### 引用外部样式文件路径问题
    CSS loader 会把把非根路径的url解释为相对路径， 加~前缀才会解释成模块路径。
    <style  lang="stylus">
        //使用 ../来匹配路径可以正确导入
        @import '../assets/css/main.styl'; //正确
        // 加~前缀
        @import '~@/assets/scss/helpers/_mixin'; //正确
        //使用 alias 中 配的 @ 就不能用了
        @import '@/assets/css/main.styl';  //错误
    </style>
    
    ```

#### 4. [IE9兼容问题](https://www.cnblogs.com/chenguiya/p/9255202.html)


