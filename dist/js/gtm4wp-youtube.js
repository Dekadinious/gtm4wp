"use strict";var tag,firstScriptTag,gtm4wp_err,gtm4wp_youtube_percentage_tracking=10,gtm4wp_youtube_percentage_tracking_timeouts={},gtm4wp_youtube_percentage_tracking_marks={};if("undefined"!=typeof onYouTubeIframeAPIReady)throw gtm4wp_err=new Error("Another code is already utilizing YouTube API, GTM4WP plugin can not load YouTube tracking!");function gtm4wp_onYouTubePlayerReady(e){var t=e.target.getVideoData();window[gtm4wp_datalayer_name].push({event:"gtm4wp.mediaPlayerReady",mediaType:"youtube",mediaData:{id:t.video_id,author:t.author,title:t.title,url:e.target.getVideoUrl(),duration:e.target.getDuration()},mediaCurrentTime:e.target.getCurrentTime()})}function gtm4wp_onYouTubePlayerStateChange(e){var t="unknown";switch(e.data){case-1:t="unstarted";break;case YT.PlayerState.ENDED:t="ended";break;case YT.PlayerState.PLAYING:t="play";break;case YT.PlayerState.PAUSED:t="pause";break;case YT.PlayerState.BUFFERING:t="buffering";break;case YT.PlayerState.CUED:t="cued"}var a=e.target.getVideoData().video_id,a=(YT.PlayerState.PLAYING==e.data&&0<gtm4wp_youtube_percentage_tracking?gtm4wp_youtube_percentage_tracking_timeouts[a]=setInterval(function(){gtm4wp_onYouTubePercentageChange(e)},1e3):gtm4wp_youtube_percentage_tracking_timeouts[a]&&clearInterval(gtm4wp_youtube_percentage_tracking_timeouts[a]),e.target.getVideoData());window[gtm4wp_datalayer_name].push({event:"gtm4wp.mediaPlayerStateChange",mediaType:"youtube",mediaData:{id:a.video_id,author:a.author,title:a.title,url:e.target.getVideoUrl(),duration:e.target.getDuration()},mediaPlayerState:t,mediaCurrentTime:e.target.getCurrentTime()})}function gtm4wp_onYouTubePlaybackQualityChange(e){var t=e.target.getVideoData();window[gtm4wp_datalayer_name].push({event:"gtm4wp.mediaPlayerEvent",mediaType:"youtube",mediaData:{id:t.video_id,author:t.author,title:t.title,url:e.target.getVideoUrl(),duration:e.target.getDuration()},mediaCurrentTime:e.target.getCurrentTime(),mediaPlayerEvent:"quality-change",mediaPlayerEventParam:e.data})}function gtm4wp_onYouTubePlaybackRateChange(e){var t=e.target.getVideoData();window[gtm4wp_datalayer_name].push({event:"gtm4wp.mediaPlayerEvent",mediaType:"youtube",mediaData:{id:t.video_id,author:t.author,title:t.title,url:e.target.getVideoUrl(),duration:e.target.getDuration()},mediaCurrentTime:e.target.getCurrentTime(),mediaPlayerEvent:"ratechange",mediaPlayerEventParam:e.data})}function gtm4wp_onYouTubeError(e){var t=e.target.getVideoData();window[gtm4wp_datalayer_name].push({event:"gtm4wp.mediaPlayerEvent",mediaType:"youtube",mediaData:{id:t.video_id,author:t.author,title:t.title,url:e.target.getVideoUrl(),duration:e.target.getDuration()},mediaCurrentTime:e.target.getCurrentTime(),mediaPlayerEvent:"error",mediaPlayerEventParam:e.data})}function gtm4wp_onYouTubeApiChange(e){var t=e.target.getVideoData();window[gtm4wp_datalayer_name].push({event:"gtm4wp.mediaPlayerEvent",mediaType:"youtube",mediaData:{id:t.video_id,author:t.author,title:t.title,url:e.target.getVideoUrl(),duration:e.target.getDuration()},mediaCurrentTime:e.target.getCurrentTime(),mediaPlayerEvent:"api-change",mediaPlayerEventParam:e.data})}function gtm4wp_onYouTubePercentageChange(e){for(var t=e.target.getVideoData().video_id,a=e.target.getCurrentTime(),r=e.target.getDuration(),i=Math.floor(a/r*100),n=(void 0===gtm4wp_youtube_percentage_tracking_marks[t]&&(gtm4wp_youtube_percentage_tracking_marks[t]=[]),e.target.getVideoData()),u=0;u<100;u+=gtm4wp_youtube_percentage_tracking)u<i&&-1==gtm4wp_youtube_percentage_tracking_marks[t].indexOf(u)&&(gtm4wp_youtube_percentage_tracking_marks[t].push(u),window[gtm4wp_datalayer_name].push({event:"gtm4wp.mediaPlaybackPercentage",mediaType:"youtube",mediaData:{id:n.video_id,author:n.author,title:n.title,url:e.target.getVideoUrl(),duration:e.target.getDuration()},mediaCurrentTime:e.target.getCurrentTime(),mediaPercentage:u}))}window.onYouTubeIframeAPIReady=function(){window[gtm4wp_datalayer_name].push({event:"gtm4wp.mediaApiReady",mediaType:"youtube"});var e=document.querySelectorAll("iframe[src^='https://www.youtube.com/embed']");e&&0!=e.length&&e.forEach(function(e){var t=e.getAttribute("id"),a=(null!=t&&""!==t||(t="youtubeplayer_"+(a=e.getAttribute("src").split("?")[0].split("/"))[a.length-1],e.setAttribute("id",t)),e.getAttribute("src"));-1==a.indexOf("enablejsapi=1")&&(-1==a.indexOf("?")&&(a+="?"),a+="&enablejsapi=1&origin="+document.location.protocol+"//"+document.location.hostname,e.setAttribute("src",a)),player=new YT.Player(t,{events:{onReady:gtm4wp_onYouTubePlayerReady,onStateChange:gtm4wp_onYouTubePlayerStateChange,onPlaybackQualityChange:gtm4wp_onYouTubePlaybackQualityChange,onPlaybackRateChange:gtm4wp_onYouTubePlaybackRateChange,onError:gtm4wp_onYouTubeError,onApiChange:gtm4wp_onYouTubeApiChange}})})},(tag=document.createElement("script")).src="//www.youtube.com/iframe_api",(firstScriptTag=document.getElementsByTagName("script")[0]).parentNode.insertBefore(tag,firstScriptTag);