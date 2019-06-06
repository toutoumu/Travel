### [去哪网地址](http://piao.qunar.com/touch/)
### [iView Admin 后台管理模板GItHub](https://github.com/iview/iview-admin)
### [iView Admin 后台管理模板](https://gitee.com/icarusion/iview-admin)
####[Flex布局详解](https://www.cnblogs.com/qcloud1001/p/9848619.html)
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
     [强烈推荐优秀的Vue UI组件库](https://www.jianshu.com/p/398a3b2e535f)
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

```javascript
获取屏幕宽高

      window.screen.width / window.screen.height //总区域
      window.screen.availWidth / window.screen.availHeight//可用区域
      //有些手机存在底部任务栏，一般直接用第一个就ok
获取浏览器宽高

      width = window.outerWidth
      height = window.outerHeight
获取浏览器位置

      left = window.screenX || window.screenLeft
      top = window.screenY || window.screenTop
获取页面宽高

      (方法1)
      width = window.innerWidth 
             || document.documentElement.clientWidth 
             || document.body.clientWidth
      height = window.innerHeight 
              || document.documentElement.clientHeight 
              || document.body.clientHeight
      (方法2)
      function getPageSize(){
         var page = document.documentElement
                   ?document.documentElement
                   :document.body,
             gcr = page.getbBoundingClientRect()
         return {
            width:Math.abs(gcr.right-gcr.left)
            height:Math.abs(gcr.bottom-gcr.top)
         }
      }
      (移动端，一般用inner就ok了)
      width = window.innerWidth
      height =  window.innerHeight
获取element宽高

      1、内部宽高client(padding+content，不包滚动条和border)
          width = elment.clientWidth
          height = elment.clientHeight
      2、整体宽高offset(padding+content+border+滚动条)
          width = elment.offsetWidth
          height = elment.offsetHeight
      3、含被overflow隐藏的内部宽高scroll（无滚动条时同1、client）
          width = elment.scrollWidth
          height = elment.scrollHeight
      4、内容宽高getBoundingClientRect(只包含content)
          size = element.getBoundingClientRect().width / height
          ie8-不支持width / height可运用right-left/bottom-top解决
获取element位置

      offsetParent:设有position值为absolute或relative的最近的上级元素

      1、相对父元素(offsetParent)左上角定位
          left = element.offsetLeft
          top =  element.offsetTop

      2、相对视口左上角定位 
          position=element.getBoundingClientRect().left/right/top/bottom
          //在ie下调试时，加上onscroll动态监听scrollTop数据才会正常刷新
获取滚动条位置

      1、获取element对象滚动条位置
         scrollTop = element.scrollTop

      2、获取window滚动条位置兼容性方法
         scrollTop = window.scrollY 
                      || window.pageYOffset 
                      || (document.documentElement.scrollTop===0
                          ?document.body.scrollTop
                          :document.documentElement.scrollTop
                          );    
         //在ie下调试时，加上onscroll动态监听scrollTop数据才会正常刷新  
```


