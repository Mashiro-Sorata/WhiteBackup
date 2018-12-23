<script src="/js/src/Aplayer-Controler.min.js"></script>
<div id="AP-controler"></div>
<script type="text/javascript">
var myapc=new APlayer_Controler({
		APC_dom:$('#AP-controler'),
		aplayer:ap,
		attach_right:true,
		position:{top:'150px',bottom:''},
		fixed:true,
		btn_width:100,
		btn_height:120,
		img_src:['http://mashirosorata.vicp.io/bukagirl.jpg',
				'http://mashirosorata.vicp.io/jumpgirl.jpg',
				'http://mashirosorata.vicp.io/pentigirl.jpg',
				'http://mashirosorata.vicp.io/%E8%90%8C1.gif'],
		img_style:{repeat:'no-repeat',position:'center',size:'contain'},
		ctrls_color:'rgba(173,255,47,0.8)',
		ctrls_hover_color:'rgba(255,140,0,0.7)',
		tips_on:true,
		tips_width:140,
		tips_height:25,
		tips_color:'rgba(255,255,255,0.6)',
		tips_content:{on_welcome:{audio:['http://mashirosorata.vicp.io/nekonin_loaded-0.m4a','http://mashirosorata.vicp.io/nekonin_loaded-1.m4a','http://mashirosorata.vicp.io/nekonin_loaded-2.m4a','http://mashirosorata.vicp.io/nekonin_loaded-3.m4a','http://mashirosorata.vicp.io/nekonin_loaded-4.m4a','http://mashirosorata.vicp.io/loaded-5.m4a']},
									on_timeout:{audio:['http://mashirosorata.vicp.io/timeout-0.m4a','http://mashirosorata.vicp.io/timeout-1.m4a','http://mashirosorata.vicp.io/timeout-3.m4a']},
									on_error:{audio:['http://mashirosorata.vicp.io/error.m4a']}
		},
		timeout:30
	});
</script>
