---
title: APlayer Controler——可自定义的ap控制器
copyright: true
date: 2017-08-14 20:34:01
categories: Javascript
tags: [javascript,个性化,Aplayer,控制器]
top:
password:
description:

---
<div align="center"><img alt="AP-preview" src="http://oty1v077k.bkt.clouddn.com/apctrler-instruction.png"></div>
# 前言(Introduction)
最近配置网站的时候，做了一个*Aplayer*的个性控制器（本站右端），在此基础上就把它做成了一个引用简单的对象，自定义配置更方便了。
**注**：此1.0.0版本与Aplayer的1.6.0版本相匹配。
[Demo](http://mashirosorata.vicp.io/others/Aplayer-Controler-demo/index.html)
<!-- more -->

---

# 安装(Install)
NPM:
```git
  $ npm install aplayer-controler --save
```

---

# 使用说明(Usage)
## Important
  Make sure that "jquery" and "velocity" are existed in your project environment!
  ```html
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.0/velocity.min.js"></script>
  ```
## HTML
  ```html
    <div id="myapcid"></div>
    <script src="scr/Aplayer-Controler.min.js"></script>
  ```
<h2 id="jump1">Javascript</h2>
  ```javascript
  var myap = new APlayer({......});  //Aplayer Part

  var myapc=new APlayer_Controler({  //Controler Part
        APC_dom:'#myapcid',														
        aplayer:myap,														
        attach_right:true,													
        position:{top:'300px',bottom:''},
        fixed:true,															
        btn_width:100,														
        btn_height:120,														
        img_src:[],															
        img_style:{repeat:'no-repeat',position:'center',size:'contain'},
        ctrls_color:'rgba(173,255,47,0.7)',			
        ctrls_hover_color:'rgba(255,140,0,0.8)',		
        tips_on:true,														
        tips_width:140,														
        tips_height:25,														
        tips_color:'rgba(255,255,255,0.5)',
        tips_content:{														
            on_loading:{top:'音乐加载中',bottom:'不如来卖萌'},			
            on_welcome:{top:'音乐加载完成',bottom:'请继续看我卖萌'},		
            on_timeout:{top:'播放器暂无响应',bottom:'那就看我卖萌'},		
            on_error:{top:'音乐播放出错',bottom:'那就看我卖萌'},			
            on_listend:{top:'歌单已到底部',bottom:'接着看我卖萌'},		
            on_nohistory:{top:'没有历史纪录',bottom:'快去听歌吧！'},		
            on_historyend:{top:'历史纪录已到头',bottom:'快去听新歌吧！'}
          },
        timeout:30,
        showOnPhone:false,
        songrecord_log:false
  };
  ```
## Details
  * `APC_dom`: Required, controler's id or className--'#id', '.class', $();
  * `aplayer`: Required, aplayer object;
  * `attach_right`: Optional, whether controler on the right, default: true;
  * `position`: Required, controler's position;
  * `fixed`: Optional, whether controler fixed on the page, default: true;
  * `btn_width`: Optional, button's width, default: 100;
  * `btn_height`: Optional, button's height, default: 120;
  * `img_src`: Optional, button's background-image 'url-array', default: [];
  * `img_style`: Optional, style of button's background-images, default: in [Javascript](#jump1);;
  * `ctrls_color`: Optional, controlers' color, default: 'rgba(173,255,47,0.7)';
  * `ctrls_hover_color`: Optional, controlers' color when the mouse hover, default:'rgba(255,140,0,0.8)';
  * `tips_on`: Optional, the message's switch, default: true;
  * `tips_width`: Optional, the message's width, default: 140;
  * `tips_height`: Optional, the message's height, default: 25;
  * `tips_color`: Optional, the message's background-color,default:'rgba(255,255,255,0.5)';
  * `tips_content`: Optional, the message's content, default: in [Javascript](#jump1);
  * `timeout`: Optional, the longest time to wait player's 'canplay' event when `tips_on` is true. And The button is disabled during this time. In addition, the `on_loading` of `tips_content` will close when `timeout` is '0', and the button is valid all the time. default: 30;
  * `showOnPhone`: Sets whether the 'Aplayer-Controler' is dispalyed, default: false;
  * `songrecord_log`: Sets whether the song history shows in the console, default: false.

## Details(Chinese Version)
  * `APC_dom`：必须，所绑定的APlayer_Controler,可以为'.className','#idName',或者$(),getElementById绑定；
  * `aplayer`：必须，所绑定的APlayer对象；
  * `attach_right`：APlayer_Controler附着在左边或者右边，默认为右边(true)；
  * `position`：必须，APlayer_Controler的位置,无默认值；
  * `fixed`：APlayer_Controler是否锁定在页面内,默认为开(true)；
  * `btn_width`：按钮宽度，默认为100px；
  * `btn_height`：按钮高度，默认值为120px；
  * `img_src`:按钮背景图链接数组，无默认值；
  * `img_style`：按钮背景图样式，分别对应background-repeat,background-position,background-size，默认值见[Javascript](#jump1)；
  * `ctrls_color`：控制按键背景色，默认值为'rgba(173,255,47,0.7)'；
  * `ctrls_hover_color`：控制按键鼠标停留时的背景色，默认值为'rgba(255,140,0,0.8)'；
  * `tips_on`：提示信息开关,默认为开(true)；
  * `tips_width`：提示信息宽度,默认为140px；
  * `tips_height`：提示信息高度,默认为25px；
  * `tips_color`：提示信息背景色，默认值为'rgba(255,255,255,0.5)'；
  * `tips_content`：提示信息，分为上下两个，默认值见[Javascript](#jump1)；
  * `timeout`：设置播放器canplay事件无响应的最长时间，该时间内按钮区域无效，超时后有效。若为0则关闭无响应提示，且按钮一直有效，默认值30s；
  * `showOnPhone`：手机端显示开关，默认(false)为不显示；
  * `songrecord_log`：控制台是否输出历史记录，默认(false)为关。

---

# 最后
附上[仓库链接](https://github.com/Mashiro-Sorata/APlayer-Controler)
最后如果有什么问题、bug、建议的话欢迎[issue](https://github.com/Mashiro-Sorata/APlayer-Controler/issues)，也非常欢迎大佬们指点！
