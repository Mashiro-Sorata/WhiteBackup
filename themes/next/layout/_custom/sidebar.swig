<script src="/js/src/APlayer.min.js"></script>
<div id="player1" class="aplayer" style="width: 300px;height: 66px;background:rgba(0,0,0,0.5) none repeat scroll !important"></div>
	<script type="text/javascript">
	var ap = new APlayer({
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
	    	title: '楽園PROJECT',                                          // Required, music title
	        author: 'Ray',                          // Required, music author
	        url: 'http://ou68gv0zg.bkt.clouddn.com/Ray%20-%20%E6%A5%BD%E5%9C%92PROJECT.mp3',  // Required, music url
	        pic: 'http://ou68gv0zg.bkt.clouddn.com/Ray%20-%20%E6%A5%BD%E5%9C%92PROJECT.jpg'
	    },
	    {
	    	title: '恋人を射ち堕とした日',
	    	author: 'Sound Horizon',
	    	url: 'http://ou68gv0zg.bkt.clouddn.com/Sound%20Horizon%20-%20%E6%81%8B%E4%BA%BA%E3%82%92%E5%B0%84%E3%81%A1%E5%A0%95%E3%81%A8%E3%81%97%E3%81%9F%E6%97%A5%20_%20Koibito%20wo%20Uchiotoshia%20Hi.mp3',
	    	pic: 'http://ou68gv0zg.bkt.clouddn.com/Sound%20Horizon%20-%20%E6%81%8B%E4%BA%BA%E3%82%92%E5%B0%84%E3%81%A1%E5%A0%95%E3%81%A8%E3%81%97%E3%81%9F%E6%97%A5.jpg'
	    },
	    {
	    	title: 'cat\'s dance',
	    	author: 'すーぱーそに子',
	    	url: 'http://ou68gv0zg.bkt.clouddn.com/%E3%81%99%E3%83%BC%E3%81%B1%E3%83%BC%E3%81%9D%E3%81%AB%E5%AD%90%20-%20cat%27s%20dance.mp3',
	    	pic: 'http://ou68gv0zg.bkt.clouddn.com/%E3%81%99%E3%83%BC%E3%81%B1%E3%83%BC%E3%81%9D%E3%81%AB%E5%AD%90%20-%20cat%27s%20dance.jpg'
	    },
	    {
	    	title: '夏令时记录(piano.ver)',
	    	author: 'ゆめこ',
	    	url: 'http://ou68gv0zg.bkt.clouddn.com/%E3%82%86%E3%82%81%E3%81%93%20-%20%E5%A4%8F%E4%BB%A4%E6%97%B6%E8%AE%B0%E5%BD%95%28piano.ver%29.mp3',
	    	pic: 'http://ou68gv0zg.bkt.clouddn.com/%E3%82%86%E3%82%81%E3%81%93%20-%20%E5%A4%8F%E4%BB%A4%E6%97%B6%E8%AE%B0%E5%BD%95%28piano.ver%29.jpg'
	    },
	    {
	    	title: '月光',
	    	author: '鬼束千寻',
	    	url: 'http://ou68gv0zg.bkt.clouddn.com/%E9%AC%BC%E6%9D%9F%E5%8D%83%E5%AF%BB%20-%20%E6%9C%88%E5%85%89.mp3',
	    	pic: 'http://ou68gv0zg.bkt.clouddn.com/%E9%AC%BC%E6%9D%9F%E5%8D%83%E5%AF%BB%20-%20%E6%9C%88%E5%85%89.jpg'
	    }]
});

  $('.aplayer-icon-menu')[0].click();   //initial height
  var myflag=true;
	$('.aplayer-icon-menu svg').click(function(){
    var temp=$('#player1').css('height');
		if(temp=='250px' && !myflag){
      $('#mydivshow').animate({height: 250});
			$('#player1').delay(100).animate({height: 66});
    }
		else if(temp=='66px' && myflag){
      $('#mydivshow').animate({height: 420});
			$('#player1').delay(50).animate({height: 250});
    }
    myflag=!myflag;
	});
	</script>
