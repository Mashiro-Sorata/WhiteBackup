---
title: HEXO+NEXT主题个性化配置
copyright: true
date: 2017-08-07 23:08:40
categories: Html
tags: [hexo,next,个性化设置,javascript,网站]
top:
password:
description:

---
![github](http://oty1v077k.bkt.clouddn.com/hexo-github.png)
# 前言

此文章用来记录本网站个性化的设置更改，以便备用，或者供人参考。<br>提醒一下：**博主next主题风格用的是Mist，若主题风格不一样，有些地方需酌情修改**。<br>在其他地方能找到的教程这里就不重复赘述，文章结尾会给出一些更为详尽的其他参考链接。
<!-- more -->
---

# 基本样式配置

## 给页面添加背景图片
在`theme/next/source/css/_custom`文件夹下打开`custom.styl`文件，往里面添加以下代码：
```css
body{   
        background:url(图片链接);
        background-size:cover;
        background-repeat:no-repeat;
        background-attachment:fixed;
        background-position:center;
     }
```
其中的css样式属性都可以根据你的自定义图片来更改，以达到最佳的效果。

## 文字背景色以及半透明的设置
在`theme/next/source/css/_custom`文件夹下打开`custom.styl`文件，往里面添加以下代码：
```css
.content {
            border-radius: 10px;
            margin-top: 60px;
            background:rgba(颜色rgb,透明度) none repeat scroll !important;
         }
```
其中`border-radius`是给文章背景设置圆角，`margin-top`是设置文章到顶部的距离，其中属性可根据自己的需要进行调整。<br>
在修改完文章背景色之后，文字颜色可能和背景色不能很好的搭配，这时候我们就需要修改文章字体的颜色了。打开`theme/next/source/css/_common/scaffolding`文件夹下的`base.styl`文件，找到`body{}`，将其中的`color:$text-color`更改为你想要的颜色即可。代码如下：
```css
body {
  position: relative; // Required by scrollspy
  font-family: $font-family-base;
  font-size: $font-size-base;
  line-height: $line-height-base;
  color: 颜色代码;
  background: $body-bg-color;

  +mobile() { padding-right: 0 !important; }
  +tablet() { padding-right: 0 !important; }
  +desktop-large() { font-size: $font-size-large; }
}
```

## 文章页面宽度设置
在`theme/next/source/css/_custom`文件夹下打开`custom.styl`文件，往里面添加以下代码：
```css
.main-inner {width: 页面宽度;}
```

## 文章内单行代码的样式设置
在上面的设置中如果更改了网页底色，单行代码的颜色可能与背景色不搭配，这时就需要我们自己设置了。具体步骤：<br>在`theme/next/source/css/_custom`文件夹下打开`custom.styl`文件，向里面添加以下代码：
```css
#posts code {color: 颜色代码;background-color:颜色代码;}
```
其中为code的字体颜色，后者为背景颜色。<br>
其他文章内的颜色可以看一下`theme/next/source/css/_common/scaffolding`文件夹下的`base.styl`文件，有需要直接更改即可。

## 页面头部和底部栏的背景色修改
在`theme/next/source/css/_custom`文件夹下打开`custom.styl`文件，往里面添加以下代码：
```css
.header {
          background:rgba(颜色rgb,透明度) none repeat scroll !important;
        }

.footer {
          background:rgba(颜色rgb,透明度) none repeat scroll !important;
        }
```
头部和底部也可以加入自定义的背景图。只需要在其中加入`background:url(图片的链接);`即可。

## 评论(来必力)添加背景色
在`theme/next/source/css/_custom`文件夹下打开`custom.styl`文件，往里面添加以下代码：
```css
#lv-container {
       border-radius: 10px;
       background:rgba(颜色rgb,透明度) none repeat scroll !important;
    }
```
和上面一样，背景色和圆角可自己调整更改。

## 网页顶部和底部的文字颜色修改
在`theme/next/source/css/_custom`文件夹下打开`custom.styl`文件，往里面添加以下代码：
* 头部文字颜色
  * 更改头部site-title的字体颜色
  在`theme/next/source/css/_common/components/header`文件夹下打开`site-meta.styl`文件，找到`.brand{}`向里面添加以下代码：
    ```css
    color: 颜色代码 !important;
    ```
  * 更改头部menu的字体颜色
  在相同的文件夹下打开`menu.styl`文件，找到`a{}`，向里面添加以下代码：
    ```css
    color: 颜色代码 !important;
    ```
* 底部文字颜色<br>
底部文字颜色的修改就显得很简单了，还是在`theme/next/source/css/_custom`文件夹下打开`custom.styl`文件，往里面添加以下代码：
```css
.footer-inner {color: 颜色代码;}
```

## 侧栏背景图以及内部文字颜色的修改
在`theme/next/source/css/_custom`文件夹下打开`custom.styl`文件，往里面添加以下代码：
```css
#sidebar {
            background:url(图片链接);
            background-size: cover;
            background-position:center;
            background-repeat:no-repeat;
            p,span,a {color: 颜色代码;}
}
```
其中设置`p,span,a{color:颜色代码}`，即可修改侧边栏内部文字的颜色。

# 主题风格样式配置

## 修改Mist风格下的侧边栏位置为左边
此设置为修改next主题Mist风格下侧边栏的位置为左边（默认为右边）以及侧边栏变化后页面变化的方向，具体操作如下：
1. 更改页面变化方向：<br>
首先，打开`next/source/js/src`文件夹下的`motion.js`文件`Ctrl+F`查找`paddingRight`；把所有（2个）`PaddingRight`更改为`paddingLeft`即可。<br>
代码样式如下：
```javascript
{paddingLeft: SIDEBAR_WIDTH},
NexT.utils.isDesktop() && $('body').velocity('stop').velocity({paddingLeft: 0});
```
2. 更改所有和sidebar相关的元素：<br>
  1. 更改sidebar：<br>
  打开`next/source/css/_common/components/sidebar`文件夹下的`sidebar.styl`文件，将`.sidebar{}`内的`right: 0;`改为`left: 0;`，形式如下：
    ```css
    .sidebar {
                  position: fixed;
                  left: 0;

    ```
  2. 打开相同路径下的`sidebar-toggle.styl`文件，将`.sidebar-toggle{}`内的`right: $b2t-position-right;`改为`left: $b2t-position-right;`，形式如下：
    ```css
    .sidebar-toggle {
                          position: fixed;
                          left: $b2t-position-right;
    ```
  3. 返回上一个文件夹，打开`back-to-top.styl`文件，将`.back-to-top {}`内的`right: $b2t-position-right;`改为`left: $b2t-position-right;`，形式如下：
    ```css
    .back-to-top {
                      box-sizing: border-box;
                      position: fixed;
                      bottom: $b2t-position-bottom;
                      left: $b2t-position-right;
    ```

<h2 id='jump1'>修正侧边栏在左边时的小BUG</h2>
**（前提：在Mist风格下侧边栏按本文设置为左边显示时）**
***BUG描述：***在更改浏览器大小的时候，顶部栏和底部栏未和侧边栏同步。<br>
***解决方法：***在`themes/next/layout/source/js/src`文件夹下打开`motion.js`文件，在`$(document).ready(function (){}`顶部其中添加代码：
```javascript
window.onload=function(){
    var bwol=document.body.offsetWidth;
    if(bwol < 975){
        $('aside#sidebar').css("display","none");
        $('body').css("paddingLeft","0px");
    }
}

window.onresize = function(){
    var bwos=document.body.offsetWidth;
    bwos < 975 && $('body').velocity('stop').velocity({paddingLeft: 0},0);
    if($('aside#sidebar').css('display') != 'none' && $('aside#sidebar').css('width')!='0px')
        $('body').velocity('stop').velocity({paddingLeft: 350},0);
}
```


## 更改侧边栏控制按钮的样式
在`themes/next/layout/source/js/src`文件夹下打开`motion.js`文件，在顶部其中更改代码。找到以下代码的位置：
```javascript
var sidebarToggleLine1st = new SidebarToggleLine();
var sidebarToggleLine2st = new SidebarToggleLine();
var sidebarToggleLine3st = new SidebarToggleLine();
```
将其内部内容更改为以下内容：
```javascript
var sidebarToggleLine1st = new SidebarToggleLine({
    el: '.sidebar-toggle-line-first',
    status: {
      arrow: {width: '50%', rotateZ: '45deg', top: '2px', left: '6px'},
      // close: {width: '100%', rotateZ: '-45deg', top: '5px', left: '0px'} //叉字形
      close: {width: '50%', rotateZ: '-45deg', top: '2px', left: '0px'} //箭头形
    }
  });
  var sidebarToggleLine2nd = new SidebarToggleLine({
    el: '.sidebar-toggle-line-middle',
    status: {
      arrow: {width: '90%'},
      // close: {opacity: 0}  //箭头形
      close: {width: '90%'}
    }
  });
  var sidebarToggleLine3rd = new SidebarToggleLine({
    el: '.sidebar-toggle-line-last',
    status: {
      arrow: {width: '50%', rotateZ: '-45deg', top: '-2px', left: '6px'},
      // close: {width: '100%', rotateZ: '45deg', top: '-5px', left: '0px'} //叉字形
      close: {width: '50%', rotateZ: '45deg', top: '-2px', left: '0px'} //箭头形
    }
  });
```
若要更改开启sidebar后toggle的显示样式为叉字形，将注释有箭头形的代码行删去或者注释掉，并取消有叉字形的代码注释即可。

## 添加侧边栏头像的链接
描述：当把鼠标移到侧边栏里的头像上时，鼠标样式变为pointer，点击头像将把页面转向指定链接。
1. 修改鼠标样式：<br>在`themes/next/layout/source/css/_common/componets/sidebar`文件夹下打开`sidebar-author.styl`文件，在`.site-author-image{}`内添加`cursor: pointer;`形如：
  ```css
.site-author-image {
                            display: block;
                            margin: 0 auto;
                            padding: $site-author-image-padding;
                            max-width: $site-author-image-width;
                            height: $site-author-image-height;
                            border: $site-author-image-border-width solid $site-author-image-border-color;
                            cursor: pointer;
}
  ```
2. 添加链接：<br>
在`themes/next/layout/source/js/src`文件夹下打开`motion.js`文件，在顶部其中添加代码：
  ```javascript
$('.site-author-image').click(function(){
      window.location.href="自定义链接";
});
  ```

## 设置鼠标划入侧边栏才显示站点信息：
1. 设置自定义div<br>
  在`theme/next/layout/_macro`文件夹下打开`sidebar.swig`文件，找到以下代码行的位置：
  ```Html
  <nav class="site-state motion-element">
  ```
  在其上添加以下代码：
  ```Html
  <!--my custom code begin-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
        <script type="text/javascript">
        $("section.site-overview").hover(function () {
            if (!$("#mydivshow").is(":animated"))
                $("#mydivshow").animate({opacity: 1});
         },function () {
            if (!$("#mydivshow").is(":animated"))
                $("#mydivshow").animate({opacity: 0});
         });
        </script>

        <div id="mydivshow" class="mydivshow">
  <!--my custom code end-->
  ```
  然后找到代码行：
  ```Html
        </section>

        {% if display_toc and toc(page.content).length > 1 %}
        <!--noindex-->
        <section class="post-toc-wrap motion-element sidebar-panel sidebar-panel-active">
  ```
  在此`</section>`的上方添加一个`</div>`，如下所示：
  ```Html
      <!--my custom code begin-->
      </div>
      <!--my custom code end-->
      </section>

      {% if display_toc and toc(page.content).length > 1 %}
      <!--noindex-->
        <section class="post-toc-wrap motion-element sidebar-panel sidebar-panel-active">
          <div class="post-toc">

  ```

2. 自定义区域的初始化设置<br>
  在`theme/next/source/css/_custom`文件夹下打开`custom.styl`文件，向里面增添下列代码：
  ```css
    #mydivshow{opacity: 0;}
  ```

**注**：具体代码添加位置以及代码里的`section.site-overview`可以自己修改，`<div id="mydivshow" class="mydivshow">`和末尾的`</div>`是控制显示区域，`section.site-overview`则是用户鼠标滑入划出时的触发事件区域。

# 进阶个性化配置

## 自定义音乐播放器
描述：本站所用的音乐播放器是由[DIYgod](https://github.com/DIYgod)所制作的[APlayer](https://github.com/MoePlayer/APlayer)，其详细资料可参见[这里](https://aplayer.js.org/docs/#/)。
### 安装APlayer插件
```git
$ npm install aplayer --save
```
安装完后在`node_modules`目录下找到`APlayer.min.js`文件，将其复制到`theme/next/source/js/src/`目录下。
### 生成音乐播放器
***在你想要加入音乐播放器的地方插入以下代码，***
本站把他放在了侧边栏里，具体操作如下。
打开`theme/next/layout/_custom/`文件夹下的`sidebar.swig`文件，向其中添加以下代码：
```Html
<div id="player1" class="aplayer"></div>
<script src="/js/src/APlayer.min.js"></script>
<script type="text/javascript">
var ap = new APlayer({
    element: document.getElementById('player1'),                       // Optional, player element
    narrow: false,                                                     // Optional, narrow style
    autoplay: true,                                                    // Optional, autoplay song(s), not supported by mobile browsers
    showlrc: 0,                                                        // Optional, show lrc, can be 0, 1, 2, see: ###With lrc
    mutex: true,                                                       // Optional, pause other players when this player playing
    theme: '#e6d0b2',                                                  // Optional, theme color, default: #b7daff
    mode: 'random',                                                    // Optional, play mode, can be `random` `single` `circulation`(loop) `order`(no loop), default: `circulation`
    preload: 'metadata',                                               // Optional, the way to load music, can be 'none' 'metadata' 'auto', default: 'auto'
    listmaxheight: '513px',                                             // Optional, max height of play list
    music: {                                                           // Required, music info, see: ###With playlist
        title: 'Preparation',                                          // Required, music title
        author: 'Hans Zimmer/Richard Harvey',                          // Required, music author
        url: 'http://7xifn9.com1.z0.glb.clouddn.com/Preparation.mp3',  // Required, music url
        pic: 'http://7xifn9.com1.z0.glb.clouddn.com/Preparation.jpg',  // Optional, music picture
        lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'                   // Optional, lrc, see: ###With lrc
    }
});
</script>
```
### 自定义播放器样式
包含颜色更改，列表歌曲信息的排版修改。
在`theme/next/source/css/_custom`文件夹下打开`custom.styl`文件，往里面添加以下代码：
```css
.aplayer-list ol li:hover {   //列表悬停颜色
                  background:rgba(颜色代码,透明度) none repeat scroll !important;}

.aplayer-list ol li {   //列表底色
                        background:rgba(颜色代码,透明度);}

.aplayer-list-light {   //列表播放歌曲颜色
                      background:rgba(颜色代码,透明度) none repeat scroll !important;}

#player1 {//边框样式
          border-radius: 6px;
          div,ol {border-radius: 6px;}
        }

#player1 *{color: 颜色代码;} //字体颜色

//列表歌曲信息的排版
.aplayer-list-index{float:left;}
.aplayer-list-title{float:left;}
.aplayer-list-author{float:right;}
```

### 自定义萌萌哒音乐播放控制边栏
描述：效果见本博客右方。<br>
*播放器状态提示方面*：当播放器加载数据到能够播放后点击其会出现控制选项，若音乐不能播放点击其会出现提示信息；若自加载页面30s后仍不能播放，则提示播放器无响应；若播放器出错，则提示播放器错误；当音乐能够播放时提示加载完成。<br>
*播放器控制方面*：播放模式控制，上一首，暂停/播放，下一首四个按钮。此自定义的模块会记录下你所有播放过的歌曲，所以上一首歌返回的是绝对的上一首歌，不管播放模式如何。当处于上一首歌的状态下（按下了上一首歌按钮一次或者多次），当点击下一首按钮时，还是会按照历史记录的顺序播放；一旦退出此状态，则会按照播放模式进行播放。<br>
*注*：此自定义过程可能有些麻烦，请读者斟酌修改。

#### 创建按钮区域
在`theme/next/layout/_custom/`文件夹下新建一个`myapcontroler.swig`的文件。向其中添加以下代码：
```Html
<div class="fixed_side" style="right: 0px">
		<span style="display: inline-block;float: left">
      <div class="waitingwordtop"><p><i class="iconfont">&#xe636;</i>音乐加载中<i class="iconfont">&#xe636;</i></p></div>
			<div class="mybtn" style="display: inline-block"></div>
      <div class="waitingwordbuttom"><p><i class="iconfont">&#xe636;</i>不如来卖萌<i class="iconfont">&#xe636;</i></p></div>
		</span>
		<scpan style="display: inline-block;float: left">
			<aside id="mysidebar" class="mysidebar">
				<div class="apmode-single"></div>
				<div class="apmode-loop"></div>
				<div class="apmode-order"></div>
				<div class="apmode-random"></div>
				<div class="lastsong"></div>
				<div class="pause"></div>
				<div class="playsong"></div>
				<div class="nextsong"></div>
			</aside>
		</span>
</div>
```

#### 添加js代码
因为代码太长就不粘在这里了，做成外链了，可右键下载。
[apcontroler.js](http://oucqozot0.bkt.clouddn.com/apcontroler.js)
将其放入`theme/next/source/js/src`下。然后在`theme/next/layout/_custom/`文件夹下打开`myapcontroler.swig`的文件，向末尾添加以下代码：
```Html
<script src="js/src/apcontroler.js"></script>
```

#### 初始化控制按钮样式
在`theme/next/source/css/_custom`文件夹下打开`custom.styl`文件，往里面添加以下代码：
```css
//mysidebar controler style

.fixed_side{position:fixed;top:250px;width:130px;height:120px;right:-30px;}

.mybtn{position:fixed;width:100px;height:120px;background-color:rgba(220,20,60,0);right:0px;}
.mybtn:hover{cursor:pointer;}

.waitingwordtop{background-color:rgba(255,255,255,0.5);width:140px;height:30px;position:absolute;top:-30px;right:-110px;color:#9400D3;opacity:0;border-radius:8px;p{height:30px;display:block;text-align:center;line-hight:30px;margin-bottom:0px;}}
.waitingwordbuttom{background-color:rgba(255,255,255,0.5);width:140px;height:30px;position:absolute;top:120px;right:-110px;color:#FF4500;opacity:0;border-radius:8px;p{height:30px;display:block;text-align:center;line-hight:30px;margin-bottom:0px;}}

#mysidebar{width:30px;height:120px;right:-30px;opacity:0;}

.mysidebar div{position:absolute;width:28px;height:28px;background-size:100%;background-color:rgba(173,255,47,0.7);border-radius:80px;border: 1px solid black;}
.mysidebar div:hover{background-color:rgba(255,140,0,0.8);border: 2px solid black;}

.apmode-loop{background:url('http://ou68gv0zg.bkt.clouddn.com/newloop.png');top:0px;right:-30px;opacity:0;}

.apmode-single{background:url('http://ou68gv0zg.bkt.clouddn.com/newsingle.png') no-repeat center;top:0px;right:-30px;opacity:0;}

.apmode-order{background:url('http://ou68gv0zg.bkt.clouddn.com/neworder.png');top:0px;right:-30px;opacity:0;}

.apmode-random{background:url('http://ou68gv0zg.bkt.clouddn.com/newrandom.png');top:0px;right:0px;}

.lastsong{background:url('http://ou68gv0zg.bkt.clouddn.com/lastsong.png');top:30px;right:0px;}

.pause{background:url('http://ou68gv0zg.bkt.clouddn.com/pause.png');top:60px;right:-30px;}

.nextsong{background:url('http://ou68gv0zg.bkt.clouddn.com/nextsong.png');top:90px;right:0px;}

.playsong{background:url('http://ou68gv0zg.bkt.clouddn.com/playsong.png');top:60px;right:0px;}
```
其中的颜色，链接，边框可以自定义修改，其他属性最好不要随意修改。其中的颜色链接都是本站的样式，链接可以直接应用。

#### 将控制按钮加入body页面
在`theme/next/layout`文件夹下打开`_layout.swig`文件，在`</body>`前添加以下代码：
```Html
{% include '_custom/myapcontroler.swig' %}
```

#### 给控制按钮添加背景图
背景图可以静态图片，也可以是gif动态图。这里用的是一个数组存放动态图片地址链接，每次加载都是随机从中加载一张背景图。
考虑到有可能是手机等设备访问，在此时将控制按钮的显示隐藏。
在`theme/next/source/js/src`文件夹下打开`motion.js`文件，在`window.onload=function(){};`（若没有则创建，参见本文[3.2](#jump1)）内添加以下代码：
```javascript
var bwol=document.body.offsetWidth;
//创建背景图链接数组
var btn_image=['http://oty1v077k.bkt.clouddn.com/bukagirl.jpg',
               'http://oty1v077k.bkt.clouddn.com/jumpgirl.jpg',
               'http://oty1v077k.bkt.clouddn.com/%E8%90%8C1.gif'];
var btn_index =Math.round(Math.random()*(btn_image.length-1));
if(bwol < 750)
    $('.fixed_side').css('display','none');
else
    $('.fixed_side').css('display','block');
if(ap.isMobile){
  $('.fixed_side').css('display','none');
}
else {
  $('.mybtn').css('background','url(' + btn_image[btn_index] + ') no-repeat center');
  $('.mybtn').css('background-size','contain');
}
```
上面的链接可以直接用，也可以自己更换。
同时考虑到页面变小的情况，做法相似。
在`theme/next/source/js/src`文件夹下打开`motion.js`文件，在`window.onresize = function(){};`（若没有则创建，参见本文[3.2](#jump1)）内添加以下代码：
```javascript
var bwos=document.body.offsetWidth;
if(bwos < 750)
    $('.fixed_side').css('display','none');
else
    $('.fixed_side').css('display','block');
```
到此，自定义音乐播放控制边栏就基本完成，完成整个配置需要根据自己的主题背景进一步修改完善。

## DOS风格的404页面
本站所用的404页面是博主无意间发现的，dos风格的404，逼格满满啊233
不多说了，该放链接了：
[DOS风格404页面](https://codepen.io/team/nclud/pen/GJpdVo)<br>
使用说明：
进入页面后代码全部都展示出来了，注意CSS部分是SCSS。选择到右边选择栏找到选项：View Compiled CSS，这样它就将代码转换为CSS了。然后新建`404.html`，将代码复制粘贴（可以适当自定义修改一下）过来后保存到`themes\next\source`文件夹下即可。

# 网站的备份
源自知乎：
[使用hexo，如果换了电脑怎么更新博客？](https://www.zhihu.com/question/21193762)
相信不少人都有这个问题，我的博客采用的是[Hexo的版本控制与持续集成](https://formulahendry.github.io/2016/12/04/hexo-ci/)这个方式。
只需要将最新的网站文件`git push`到Github你的备份仓库里，AppVeyor在几分钟内就会自动更新你托管静态网站的仓库。

# 总结
从开始一直折腾了将近一周，到处查资料，自定义修改，找bug修bug，不过也学到了很多东西，这里要感谢感谢很多很多的大神们的文章的指导。
接下来就是分享其他博主的个性化教程了：
>https://segmentfault.com/a/1190000009544924#articleHeader21
>http://blog.csdn.net/MasterAnt_D/article/details/56839222#t50
>https://thief.one/2017/03/03/Hexo%E6%90%AD%E5%BB%BA%E5%8D%9A%E5%AE%A2%E6%95%99%E7%A8%8B/

版权声明：版权所有权属于Mashiro_Sorata，转载请注明出处，谢谢！
![post](http://oty1v077k.bkt.clouddn.com/jianc_jump.gif)
