var videoID;
var playingID = "";
var player;

 
// 引用長按滑鼠左鍵事件
(function($) {
	$.extend($.fn, {
		longPress: function(callback, time) {
			time = time || 1000;  // 此處設定長按時間
			var timer = null;
			$(this).mousedown(function() {
				var i = 0;
				timer = setInterval(function() {
					i += 10;
					if (i >= time) {
						clearInterval(timer);
						typeof callback == 'function' && callback.call();
					}
				}, 10)
			}).mouseup(function() {
				clearInterval(timer);
			})
		}
	});
})(jQuery);

// 設定 youtube 播放器
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '500',
    width: '500',
    videoId: videoID
  });
}

 $(document).ready(function(){

     /* 點選播放按鈕  */
     $(".play_button").click(function(){
		//取得youtube ID
		videoID = $(this).children("#y2bID").val();
		if(playingID == ""){
			playingID = videoID;
		}
		
        //取得player 狀態
        var state = player.getPlayerState();
    
        //判斷狀態 stop -> pause   play -> pause
        if( (state == -1) || (state == 0) || (state==5) ){
            //未開始 or 已結束
			player.loadVideoById({videoId: playingID});
			player.playVideo();
			$(this).css({background: "url(css/pause.png)"});
			
        }else if(state == 1){
            //正在播放
			
			
			//是同一首歌 -> 暫停
			if(playingID == videoID){
				player.pauseVideo();
				$(this).css({background: "url(css/play.png)"});
			}else{
			//不是同一首歌 -> 重新載入並播放
				playingID = videoID;
				player.loadVideoById({videoId: playingID});
				player.playVideo();
				$(".play_button").css({background: "url(css/play.png)"});
				$(this).css({background: "url(css/pause.png)"});
			}
			
        }else if(state == 2){
            //暫停中
			
			//是同一首歌 -> 播放
			if(playingID == videoID){
				player.playVideo();
				$(this).css({background: "url(css/pause.png)"});
			}else{
			//不是同一首歌 -> 重新載入並播放
				playingID = videoID;
				player.loadVideoById({videoId: playingID});
				player.playVideo();
				$(".play_button").css({background: "url(css/play.png)"});
				$(this).css({background: "url(css/pause.png)"});
			}
        
        }else{
			alert("other situation!");
        }
        
     });

     /* 長按播放鈕2秒 -> 停止 */
     $(".play_button").longPress(function(){
        //取得player 狀態
    	var state = player.getPlayerState();
		
		//判斷是同一首歌才有作用
		if(playingID == videoID){
		
			//判斷狀態 pause -> stop   play -> stop
			if( (state == 1) || (state==2) ){
				//只有在播放中與暫停中,長按才有效
				player.stopVideo();
				player.clearVideo();
				$(this).css({background: "url(css/play.png)"});
			}
		}
		
     });
     
});