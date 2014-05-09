peento-blog-comment-duoshuo
===========================

给peento-blog的文章页面增加 [多说评论框](http://duoshuo.com/)


使用方法
========

```JavaScript
app.use('blog');

// 在blog插件后执行
app.use('blog-comment-duoshuo');
```


配置
====

```JavaScript
config.duoshuo = {
  name: '在多说网站上注册的short_name'
};
```


授权协议
========

**The MIT License**
