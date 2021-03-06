var ap1 = new APlayer({
	    element: document.getElementById('player1'),                       // Optional, player element
	    narrow: false,                                                     // Optional, narrow style
	    autoplay: false,                                                    // Optional, autoplay song(s), not supported by mobile browsers
	    showlrc: 0,                                                        // Optional, show lrc, can be 0, 1, 2, see: ###With lrc
	    mutex: true,                                                       // Optional, pause other players when this player playing
	    theme: '#8B008B',                                                  // Optional, theme color, default: #b7daff
	    mode: 'random',                                                    // Optional, play mode, can be `random` `single` `circulation`(loop) `order`(no loop), default: `circulation`
	    preload: 'metadata',                                               // Optional, the way to load music, can be 'none' 'metadata' 'auto', default: 'auto'
	    listmaxheight: '250px',                                             // Optional, max height of play list
			music: [
	    {
	    	title: 'Intro - intro',                                          // Required, music title
	        author: '西原健一郎',                          // Required, music author
	        url: 'https://mashirosorata-1254084432.cos.ap-chengdu.myqcloud.com/AP_Demo/%E8%A5%BF%E5%8E%9F%E5%81%A5%E4%B8%80%E9%83%8E%20-%20Intro.mp3',  // Required, music url
	        pic: 'https://mashirosorata-1254084432.cos.ap-chengdu.myqcloud.com/AP_Demo/cover.jpg'
	    },
	    {
	    	title: 'Natural Relax',
	    	author: '西原健一郎',
	    	url: 'https://mashirosorata-1254084432.cos.ap-chengdu.myqcloud.com/AP_Demo/%E8%A5%BF%E5%8E%9F%E5%81%A5%E4%B8%80%E9%83%8E%20-%20Natural%20Relax.mp3',
	    	pic: 'https://mashirosorata-1254084432.cos.ap-chengdu.myqcloud.com/AP_Demo/cover.jpg'
	    },
	    {
	    	title: 'Get Inside Your Heart feat. Pismo',
	    	author: '西原健一郎',
	    	url: 'https://mashirosorata-1254084432.cos.ap-chengdu.myqcloud.com/AP_Demo/%E8%A5%BF%E5%8E%9F%E5%81%A5%E4%B8%80%E9%83%8E%20-%20Get%20Inside%20Your%20Heart%20feat.%20Pismo.mp3',
	    	pic: 'https://mashirosorata-1254084432.cos.ap-chengdu.myqcloud.com/AP_Demo/cover.jpg'
	    },
	    {
	    	title: 'Beautiful Things Remix feat. Amanda Diva - remix',
	    	author: '西原健一郎',
	    	url: 'https://mashirosorata-1254084432.cos.ap-chengdu.myqcloud.com/AP_Demo/%E8%A5%BF%E5%8E%9F%E5%81%A5%E4%B8%80%E9%83%8E%20-%20Beautiful%20Things%20Remix%20feat.%20Amanda%20Diva.mp3',
	    	pic: 'https://mashirosorata-1254084432.cos.ap-chengdu.myqcloud.com/AP_Demo/cover.jpg'
	    },
	    {
	    	title: 'Heartbeat',
	    	author: '西原健一郎',
	    	url: 'https://mashirosorata-1254084432.cos.ap-chengdu.myqcloud.com/AP_Demo/%E8%A5%BF%E5%8E%9F%E5%81%A5%E4%B8%80%E9%83%8E%20-%20Heartbeat.mp3',
	    	pic: 'https://mashirosorata-1254084432.cos.ap-chengdu.myqcloud.com/AP_Demo/cover.jpg'
	    },
			{
	    	title: 'Silent Motorway',                                          // Required, music title
	        author: '西原健一郎',                          // Required, music author
	        url: 'https://mashirosorata-1254084432.cos.ap-chengdu.myqcloud.com/AP_Demo/%E8%A5%BF%E5%8E%9F%E5%81%A5%E4%B8%80%E9%83%8E%20-%20Silent%20Motorway.mp3',  // Required, music url
	        pic: 'https://mashirosorata-1254084432.cos.ap-chengdu.myqcloud.com/AP_Demo/cover.jpg'
	    },
			{
				title: 'Heart Remix feat. Substantial - remix',
				author: '西原健一郎',
				url: 'https://mashirosorata-1254084432.cos.ap-chengdu.myqcloud.com/AP_Demo/%E8%A5%BF%E5%8E%9F%E5%81%A5%E4%B8%80%E9%83%8E%20-%20Heart%20Remix%20feat.%20Substantial.mp3',
				pic: 'https://mashirosorata-1254084432.cos.ap-chengdu.myqcloud.com/AP_Demo/cover.jpg'
			}]
});

var ap2 = new APlayer({
	    element: document.getElementById('player2'),                       // Optional, player element
	    narrow: true,                                                     // Optional, narrow style
	    autoplay: false,                                                    // Optional, autoplay song(s), not supported by mobile browsers
	    showlrc: 0,                                                        // Optional, show lrc, can be 0, 1, 2, see: ###With lrc
	    mutex: true,                                                       // Optional, pause other players when this player playing
	    theme: '#8B008B',                                                  // Optional, theme color, default: #b7daff
	    mode: 'order',                                                    // Optional, play mode, can be `random` `single` `circulation`(loop) `order`(no loop), default: `circulation`
	    preload: 'metadata',                                               // Optional, the way to load music, can be 'none' 'metadata' 'auto', default: 'auto'
	    listmaxheight: '250px',                                             // Optional, max height of play list
	    music: [
		    {
		    	title: 'Folklove (Inst.) - instrumental',
		    	author: '西原健一郎',
		    	url: 'https://mashirosorata-1254084432.cos.ap-chengdu.myqcloud.com/AP_Demo/%E8%A5%BF%E5%8E%9F%E5%81%A5%E4%B8%80%E9%83%8E%20-%20Folklove%20(Inst.).mp3',
		    	pic: 'https://mashirosorata-1254084432.cos.ap-chengdu.myqcloud.com/AP_Demo/cover.jpg'
		    },
		    {
		    	title: 'Sign feat. Jun',
		    	author: '西原健一郎',
		    	url: 'https://mashirosorata-1254084432.cos.ap-chengdu.myqcloud.com/AP_Demo/%E8%A5%BF%E5%8E%9F%E5%81%A5%E4%B8%80%E9%83%8E%20-%20Sign%20feat.%20Jun.mp3',
		    	pic: 'https://mashirosorata-1254084432.cos.ap-chengdu.myqcloud.com/AP_Demo/cover.jpg'
		    },
		    {
		    	title: 'Montana',
		    	author: '西原健一郎',
		    	url: 'https://mashirosorata-1254084432.cos.ap-chengdu.myqcloud.com/AP_Demo/%E8%A5%BF%E5%8E%9F%E5%81%A5%E4%B8%80%E9%83%8E%20-%20Montana.mp3',
		    	pic: 'https://mashirosorata-1254084432.cos.ap-chengdu.myqcloud.com/AP_Demo/cover.jpg'
		    },
				{
					title: 'Mature Opinion (Inst.) - instrumental',
					author: '西原健一郎',
					url: 'https://mashirosorata-1254084432.cos.ap-chengdu.myqcloud.com/AP_Demo/%E8%A5%BF%E5%8E%9F%E5%81%A5%E4%B8%80%E9%83%8E%20-%20Mature%20Opinion%20(Inst.).mp3',
					pic: 'https://mashirosorata-1254084432.cos.ap-chengdu.myqcloud.com/AP_Demo/cover.jpg'
				},
				{
					title: 'Individual Carnival',
					author: '西原健一郎',
					url: 'https://mashirosorata-1254084432.cos.ap-chengdu.myqcloud.com/AP_Demo/%E8%A5%BF%E5%8E%9F%E5%81%A5%E4%B8%80%E9%83%8E%20-%20Individual%20Carnival.mp3',
					pic: 'https://mashirosorata-1254084432.cos.ap-chengdu.myqcloud.com/AP_Demo/cover.jpg'
				},
				{
					title: 'Say You Love Me feat. Tamala',
					author: '西原健一郎',
					url: 'https://mashirosorata-1254084432.cos.ap-chengdu.myqcloud.com/AP_Demo/%E8%A5%BF%E5%8E%9F%E5%81%A5%E4%B8%80%E9%83%8E%20-%20Say%20You%20Love%20Me%20feat.%20Tamala.mp3',
					pic: 'https://mashirosorata-1254084432.cos.ap-chengdu.myqcloud.com/AP_Demo/cover.jpg'
				},
				{
					title: 'Outro - intro',
					author: '西原健一郎',
					url: 'https://mashirosorata-1254084432.cos.ap-chengdu.myqcloud.com/AP_Demo/%E8%A5%BF%E5%8E%9F%E5%81%A5%E4%B8%80%E9%83%8E%20-%20Outro.mp3',
					pic: 'https://mashirosorata-1254084432.cos.ap-chengdu.myqcloud.com/AP_Demo/cover.jpg'
				}]
});

var myapc1=new APlayer_Controler({
		APC_dom:$('#apc1'),
		aplayer:ap1,
		attach_right:true,
		position:{top:'300px',bottom:''},
		fixed:false,
		btn_width:170,
		btn_height:200,
		img_src:['https://t1.picb.cc/uploads/2019/02/18/VhzVBs.gif',
				'https://t1.picb.cc/uploads/2019/02/18/VhzJAe.gif',
				'https://t1.picb.cc/uploads/2019/02/18/VhsfTw.gif'],
		img_style:{repeat:'no-repeat',position:'center',size:'contain'},
		ctrls_color:'rgba(173,255,47,0.7)',
		ctrls_hover_color:'rgba(255,140,0,0.8)',
		tips_on:true,
		tips_width:140,
		tips_height:25,
		tips_color:'rgba(255,255,255,0.8)',
		tips_content:{on_loading:{top:'音乐加载中',bottom:'自定义提示1'},
					  on_welcome:{top:'音乐加载完成',bottom:'自定义提示2'},
					  on_timeout:{top:'播放器暂无响应',bottom:'自定义提示3'}},
		timeout:30,
		songrecord_log:true
	});

var myapc2=new APlayer_Controler({
		APC_dom:$('#apc2'),
		aplayer:ap2,
		attach_right:false,
		position:{top:'300px',bottom:''},
		fixed:true,
		btn_width:170,
		btn_height:200,
		img_src:['https://t1.picb.cc/uploads/2019/02/18/VhzVBs.gif',
				'https://t1.picb.cc/uploads/2019/02/18/VhzJAe.gif',
				'https://t1.picb.cc/uploads/2019/02/18/VhsfTw.gif'],
		img_style:{repeat:'no-repeat',position:'center',size:'contain'},
		ctrls_color:'rgba(255,140,0,0.7)',
		ctrls_hover_color:'rgba(173,255,47,0.8)',
		tips_on:true,
		tips_width:140,
		tips_height:25,
		tips_color:'rgba(255,255,255,0.8)',
		tips_content:{},
		timeout:30
	});
