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
		img_src:['./images/VhsfTw.gif',
				'./images/VhzVBs.gif',
				'./images/VhzJAe.gif'],
		img_style:{repeat:'no-repeat',position:'center',size:'contain'},
		ctrls_color:'rgba(173,255,47,0.8)',
		ctrls_hover_color:'rgba(255,140,0,0.7)',
		tips_on:true,
		tips_width:140,
		tips_height:25,
		tips_color:'rgba(255,255,255,0.6)',
		timeout:30
	});
</script>
