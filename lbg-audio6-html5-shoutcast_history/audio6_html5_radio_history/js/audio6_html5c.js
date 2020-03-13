/*
 * Hero - Shoutcast and Icecast Radio Player With History - v1.6.9
 * Copyright 2017-2018, LambertGroup
 *
 */

 (function(g){function J(a,b,d,e){g(a.thumbsHolder_Thumbs[a.current_img_no]).css({background:b.playlistRecordBgOnColor,"border-bottom-color":b.playlistRecordBottomBorderOnColor,color:b.playlistRecordTextOnColor});a.is_very_first||L(-1,a,b,d);if(""!=b.radio_stream)var h=b.radio_stream;return h}function M(a,b){var d=new XMLHttpRequest;d.open(a.method,"https://zet.pluginsandthemes.ro/"+a.url);d.onload=d.onerror=function(){b(a.method+" "+a.url+"\n"+d.status+" "+d.statusText+"\n\n"+(d.responseText||""))};
 /^POST/i.test(a.method)&&(d.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),d.setRequestHeader("X-Requested-With","XMLHttpRequest"));d.send(a.data)}function O(a,b,d,e,g,k,v,n,l,q,p,w,t,A,x,z){""!=a.curTitle&&a.isHistoryGenerated&&a.prevTitle!=a.curTitle&&(""!=a.prevTitle&&(30<=a.gen_total_images&&(a.gen_total_images--,a.playlist_arr.pop(),a.playlist_images_arr.pop()),a.gen_total_images++,a.playlist_arr.unshift(a.prevTitle),a.playlist_images_arr.unshift(a.prev_song_image),K(a,
 b,d,e,g,k,v,n,l,q,p,w,t,A,x,z)),a.prevTitle=a.curTitle)}function E(a,b,d,e,g,k,v,n,l,q,p,w,t,A,x,z){if(b.showOnlyPlayButton||a.isRadiojar)a.isRadiojar&&M({method:"GET",url:"http://www.radiojar.com/api/stations/"+a.mount_point+"/now_playing/?my_rand="+Math.random()},function(f){startPoint=f.indexOf("{");-1!==startPoint&&(lengthPoint=f.length,f=f.substr(startPoint,lengthPoint),f=JSON.parse(f),a.curTitle=f.artist+" - "+f.title,F(a,b,d,k,v,n,l,q,p,w,t),O(a,b,k,d,e,g,A,v,n,l,q,p,w,t,x,z))});else{!1===
 a.now_playing_found&&a.now_playing_current_k<a.now_playing_arr_lenght&&a.now_playing_current_k++;var h=a.http_or_https+"://"+a.ip+":"+a.port+"/"+a.now_playing_arr[a.now_playing_current_k]+("7.html"!=a.now_playing_arr[a.now_playing_current_k]?"?my_rand="+Math.random():"");0===a.now_playing_current_k&&(h=a.http_or_https+"://"+a.ip+":"+a.port+"/"+a.now_playing_arr[a.now_playing_current_k]+("7.html"!=a.now_playing_arr[a.now_playing_current_k]?"&my_rand="+Math.random():""));""!=a.ip&&a.now_playing_current_k<
 a.now_playing_arr_lenght?(M({method:"GET",url:h},function(f){var h="";switch(a.now_playing_current_k){case 0:if(-1!=f.indexOf("<SONGTITLE>")){a.now_playing_found=!0;var m=f.indexOf("<SONGTITLE>")+11;var r=f.indexOf("</SONGTITLE>")-m;h=f.substr(m,r);a.curTitle=h;F(a,b,d,k,v,n,l,q,p,w,t)}else E(a,b,d,e,g,k,v,n,l,q,p,w,t,A,x,z);break;case 1:m=f.indexOf("<body>")+6;r=f.length;f=f.substr(m,r);f=f.replace("</body></html>","");h=f.split(",");""!=h[6]&&void 0!=h[6]&&"oracle:0"!=h[6]?(a.now_playing_found=
 !0,h=h[6],a.curTitle=h,F(a,b,d,k,v,n,l,q,p,w,t)):E(a,b,d,e,g,k,v,n,l,q,p,w,t,A,x,z);break;case 2:m=f.indexOf('{"icestats":');if(-1!==m){r=f.length;f=f.substr(m,r);f=JSON.parse(f);m=!1;for(var y=0;y<Object.keys(f.icestats.source).length&&!m;)r=f.icestats.source[y].listenurl,0<r.indexOf(a.mount_point)&&(m=!0,y--),y++;m&&""!=f.icestats.source[y].title&&void 0!=f.icestats.source[y].title&&(a.now_playing_found=!0,h=f.icestats.source[y].title,a.curTitle=h,F(a,b,d,k,v,n,l,q,p,w,t))}""==h&&(a.now_playing_found=
 !1,E(a,b,d,e,g,k,v,n,l,q,p,w,t,A,x,z));break;case 3:""!=a.mount_point&&(m=f.indexOf(a.mount_point));0<m&&(r=f.length,f=f.substr(m,r));r=f.indexOf("Currently playing:");-1==r&&(r=f.indexOf("Current Song:"));0<r&&(a.now_playing_found=!0,m=f.indexOf('<td class="streamstats">',r),m=0<m?m+24:f.indexOf('<td class="streamdata">',r)+23,r=f.indexOf("</td>",m),h=f.substr(m,r-m),a.curTitle=h,F(a,b,d,k,v,n,l,q,p,w,t));""==h&&(a.now_playing_found=!1,E(a,b,d,e,g,k,v,n,l,q,p,w,t,A,x,z));break;default:a.now_playing_found=
 !0,a.curTitle="Not available...",F(a,b,d,k,v,n,l,q,p,w,t)}}),O(a,b,k,d,e,g,A,v,n,l,q,p,w,t,x,z)):(curSong="Data not available...",a.curTitle=curSong,F(a,b,d,k,v,n,l,q,p,w,t))}}function P(a,b,d,e,g,k,v,n,l,q,p,w,t,A,x,z,B){var f=a.playlist_arr[B].split("-");f[0]=f[0].trim();b.grabLastFmPhoto&&a.lastfm.artist.getInfo({artist:f[0]},{success:function(f){""!=f.artist.image[2]["#text"].trim()&&(a.playlist_images_arr[B]=f.artist.image[2]["#text"]);B==a.playlist_arr.length-1&&setTimeout(function(){K(a,b,
 e,d,t,w,A,g,k,v,n,l,q,p,x,z)},1E3)},error:function(f,h){B==a.playlist_arr.length-1&&setTimeout(function(){K(a,b,e,d,t,w,A,g,k,v,n,l,q,p,x,z)},1E3)}})}function T(a,b,d,e,g,k,v,n,l,q,p,w,t,A,x,z,B){clearInterval(a.radioReaderAjaxInterval);if(-1!==b.radio_stream.indexOf("radiojar.com")){a.isRadiojar=!0;var f=b.radio_stream.match(a.myregexp_radiojar);null!=f&&(a.http_or_https=f[1],a.ip=f[2],a.mount_point=f[3],a.port="")}else-1==b.radio_stream.indexOf("/",9)&&(b.radio_stream+="/;"),"/"==b.radio_stream.charAt(b.radio_stream.length-
 1)&&(b.radio_stream+=";"),f=b.radio_stream.match(a.myregexp),null!=f&&(a.http_or_https=f[1],a.ip=f[2],a.port=f[3],a.mount_point=f[4],";"==a.mount_point.trim()&&(a.mount_point=""));p.css({width:b.playerWidth+"px",height:b.imageHeight+"px",background:"url("+b.noImageAvailable+") #000000","background-repeat":"no-repeat","background-position":"top center","background-size":"cover"});if(!b.showOnlyPlayButton){E(a,b,d,t,w,e,g,k,v,n,l,q,p,A,x,z);a.radioReaderAjaxInterval=setInterval(function(){E(a,b,d,t,
 w,e,g,k,v,n,l,q,p,A,x,z)},1E3*b.nowPlayingInterval);a.playlist_arr=[];a.playlist_images_arr=[];var h=-1,m,r,y,c=0;a.isRadiojar?M({method:"GET",url:"http://www.radiojar.com/api/stations/"+a.mount_point+"/tracks/?my_rand="+Math.random()},function(f){m=f.indexOf("[{");if(-1!==m){r=f.length;f=f.substr(m,r);var u=JSON.parse(f);u.reverse()}for(c=0;c<Object.keys(u).length;c++)""!=u[c].track&&"Empty Title"!=u[c].track&&(h++,a.playlist_arr[h]=u[c].artist+" - "+u[c].track,a.playlist_images_arr[h]=b.noImageAvailable,
 P(a,b,d,e,g,k,v,n,l,q,p,w,t,A,x,z,h));a.playlist_arr.length?K(a,b,e,d,t,w,A,g,k,v,n,l,q,p,x,z):a.isHistoryGenerated=!0;b.sticky&&b.startMinified&&B.click()}):M({method:"GET",url:a.http_or_https+"://"+a.ip+":"+a.port+"/"+a.history_arr[a.history_current_k]},function(c){if(-1!=c.indexOf("Current Song"))for(m=c.indexOf("Current Song")+12,r=c.length,c=c.substr(m,r),y=c.split("</td><td>"),y.shift(),c=0;c<y.length;c++)m=y[c].indexOf("</"),-1!=m&&(r=m,y[c]=y[c].substr(0,r),y[c]=y[c].replace(/<\/?[^>]+(>|$)/g,
 ""),""!=y[c]&&"Empty Title"!=y[c]&&(h++,a.playlist_arr[h]=y[c],a.playlist_images_arr[h]=b.noImageAvailable,P(a,b,d,e,g,k,v,n,l,q,p,w,t,A,x,z,h)));a.playlist_arr.length?K(a,b,e,d,t,w,A,g,k,v,n,l,q,p,x,z):a.isHistoryGenerated=!0;b.sticky&&b.startMinified&&B.click()})}a.isFlashNeeded?""!=a.myFlashObject&&a.myFlashObject.myAS3function(J(a,b,d,e),b.initialVolume):(document.getElementById(a.audioID).src=J(a,b,d,e),document.getElementById(a.audioID).load(),b.autoPlay&&g.click())}function F(a,b,d,e,g,k,v,
 n,l,q,p){a.curSongText="";b.showTitle&&null!=a.curTitle&&""!=a.curTitle&&(a.curSongText+=a.curTitle);b.showRadioStation&&null!=b.radio_name&&""!=b.radio_name&&l.html(b.radio_name);d=a.curTitle.split("-");var h=b.noImageAvailable;d[0]=d[0].trim();3<=d.length&&(d[0]=d[0].trim()+"-"+d[1].trim());b.grabLastFmPhoto?a.lastfm.artist.getInfo({artist:d[0]},{success:function(b){""!=b.artist.image[3]["#text"].trim()&&(h=b.artist.image[3]["#text"]);p.css({background:"url("+h+") #000000","background-repeat":"no-repeat",
 "background-position":"top center","background-size":"cover"});a.prev_song_image=a.cur_song_image;a.cur_song_image=h},error:function(b,d){a.prev_song_image=a.cur_song_image;a.cur_song_image=h;p.css({background:"url("+h+") #000000","background-repeat":"no-repeat","background-position":"top center","background-size":"cover"})}}):(a.prev_song_image=a.cur_song_image,a.cur_song_image=h,p.css({background:"url("+h+") #000000","background-repeat":"no-repeat","background-position":"top center","background-size":"cover"}));
 a.curSongText&&(d=a.curSongText.split("-"),a.curSongAuthorText=d[0].trim(),2<=d.length&&(a.curSongText=d[1].trim()),3<=d.length&&(a.curSongAuthorText=d[0].trim()+"-"+d[1].trim(),a.curSongText=d[2].trim()),k.html(Q(a.curSongAuthorText,b)),n.css({width:"auto"}),a.isStationTitleInsideScrolling=!1,a.stationTitleInsideWait=0,n.stop(),n.css({"margin-left":0}),n.html(a.curSongText),clearInterval(a.timeupdateInterval),n.width()>a.titleWidth?a.timeupdateInterval=setInterval(function(){!a.isStationTitleInsideScrolling&&
 5<=a.stationTitleInsideWait&&n.width()>a.titleWidth?(a.isStationTitleInsideScrolling=!0,a.stationTitleInsideWait=0,n.html(a.curSongText+" **** "+a.curSongText+" **** "+a.curSongText+" **** "+a.curSongText+" **** "+a.curSongText+" **** "),n.css({"margin-left":0}),n.stop().animate({"margin-left":b.playerWidth-n.width()+"px"},parseInt(1E4*(n.width()-b.playerWidth)/150,10),"linear",function(){a.isStationTitleInsideScrolling=!1})):!a.isStationTitleInsideScrolling&&n.width()>a.titleWidth&&a.stationTitleInsideWait++},
 300):n.css({width:"100%"}))}function L(a,b,d,e){if(b.gen_total_images>d.numberOfThumbsPerScreen){var h=(b.thumbsHolder_ThumbHeight+1)*(b.gen_total_images-d.numberOfThumbsPerScreen),k=0;e.stop(!0,!0);g("html, body").off("touchstart touchmove").on("touchstart touchmove",function(a){a.preventDefault()});-1==a||b.isCarouselScrolling?!b.isCarouselScrolling&&b.gen_total_images>d.numberOfThumbsPerScreen&&(b.isCarouselScrolling=!0,k=-1*parseInt((b.thumbsHolder_ThumbHeight+1)*b.current_img_no,10),Math.abs(k)>
 h&&(k=-1*h),b.gen_total_images>d.numberOfThumbsPerScreen&&d.showPlaylist&&b.audio6_html5_sliderVertical.slider("value",100+parseInt(100*k/h)),e.animate({top:k+"px"},500,"easeOutCubic",function(){b.isCarouselScrolling=!1;g("html, body").off("touchstart touchmove").on("touchstart touchmove",function(a){})})):(b.isCarouselScrolling=!0,k=2>=a?-1*h:parseInt(h*(a-100)/100,10),0<k&&(k=0),e.animate({top:k+"px"},1100,"easeOutQuad",function(){b.isCarouselScrolling=!1;g("html, body").off("touchstart touchmove").on("touchstart touchmove",
 function(a){})}))}}function N(a,b,d,e,g,k,v,n,l,q,p,w,t,A,x,z,B,f,G,m,r,y,c,u,D,C){e.width(d.playerWidth);if(d.showOnlyPlayButton||b.isMinified)a="none";"none"==a?x.css({width:"0px",height:"0px"}):x.css({width:d.playerWidth+"px",height:parseInt(d.playerWidth/d.origWidth*d.imageHeight,10)+"px"});d.sticky&&d.startMinified?x.css({display:"none",top:"0px",left:"0px"}):x.css({display:a,top:"0px",left:"0px"});b.imageTopPos=0;b.imageLeftPos=0;b.frameBehindTextTopPos=x.height();b.frameBehindTextLeftPos=0;
 d.showOnlyPlayButton?f.css({top:b.frameBehindTextTopPos+"px",left:b.frameBehindTextLeftPos+"px",background:d.frameBehindTextColor,width:0,height:0}):f.css({top:b.frameBehindTextTopPos+"px",left:b.frameBehindTextLeftPos+"px",background:d.frameBehindTextColor,height:l.height()+2*b.playVerticalPadding+"px"});b.playTopPos=b.frameBehindTextTopPos+b.playVerticalPadding;b.playLeftPos=b.frameBehindTextLeftPos+b.playHorizontalPadding;l.css({top:b.playTopPos+"px",left:b.playLeftPos+"px"});b.titleWidth=d.playerWidth-
 4*b.playHorizontalPadding-l.width();b.titleTopPos=b.playTopPos+3;b.titleLeftPos=l.width()+2*b.playHorizontalPadding;p.css({color:d.songTitleColor,top:b.titleTopPos+"px",left:b.titleLeftPos+"px",width:b.titleWidth+"px"});b.lineSeparatorTopPos=b.titleTopPos+p.height()+2;b.lineSeparatorLeftPos=b.titleLeftPos;G.css({background:d.lineSeparatorColor,top:b.lineSeparatorTopPos+"px",left:b.lineSeparatorLeftPos+"px",width:b.titleWidth+"px"});b.authorTopPos=b.lineSeparatorTopPos+8;b.authorLeftPos=b.titleLeftPos;
 q.css({color:d.authorTitleColor,top:b.authorTopPos+"px",left:b.authorLeftPos+"px",width:b.titleWidth+"px"});b.minimizeTopPos=b.playTopPos;!d.sticky||d.showOnlyPlayButton?(b.minimizeRightPos=0,r.css({display:"none",padding:0,margin:0})):d.sticky&&(b.minimizeRightPos=b.smallButtonDistance,r.css({top:b.minimizeTopPos+"px",right:b.minimizeRightPos+"px"}));b.frameBehindButtonsTopPos=b.frameBehindTextTopPos+f.height();b.frameBehindButtonsLeftPos=0;d.showOnlyPlayButton?m.css({background:d.frameBehindButtonsColor,
 height:0,top:b.frameBehindButtonsTopPos+"px",left:b.frameBehindButtonsLeftPos+"px"}):m.css({background:d.frameBehindButtonsColor,top:b.frameBehindButtonsTopPos+"px",left:b.frameBehindButtonsLeftPos+"px"});b.radioStationTopPos=b.frameBehindButtonsTopPos+Math.floor(m.height()-t.height())/2;b.radioStationLeftPos=b.playHorizontalPadding;t.css({color:d.radioStationColor,top:b.radioStationTopPos+"px",left:b.radioStationLeftPos+"px",width:b.titleWidth+"px"});0==b.historyButWidth&&(b.historyButWidth=y.width());
 b.showhidehistoryTopPos=b.frameBehindButtonsTopPos+Math.floor((m.height()-y.height())/2);b.temp_showHistoryBut?(b.showhideplaylistRightPos=2*b.smallButtonDistance,y.css({display:"block",width:b.historyButWidth+"px",top:b.showhidehistoryTopPos+"px",right:b.showhideplaylistRightPos+"px"})):(b.showhideplaylistRightPos=0,y.css({display:"none",width:0,padding:0,margin:0}));c.css({display:"none",width:0,padding:0,margin:0});b.volumeTopPos=b.frameBehindButtonsTopPos+Math.floor((m.height()-u.height())/2);
 d.showVolume?(b.volumeRightPos=b.showhideplaylistRightPos+y.width()+b.smallButtonDistance,u.css({top:b.volumeTopPos+"px",right:b.volumeRightPos+"px"})):(b.volumeRightPos=b.showhideplaylistRightPos+y.width(),u.css({display:"none",width:0,padding:0,margin:0}));b.twitterTopPos=b.frameBehindButtonsTopPos+Math.floor((m.height()-D.height())/2);d.showTwitterBut?(b.twitterRightPos=b.volumeRightPos+u.width()+b.smallButtonDistance,D.css({top:b.twitterTopPos+"px",right:b.twitterRightPos+"px"})):(b.twitterRightPos=
 b.volumeRightPos+u.width(),D.css({display:"none",width:0,padding:0,margin:0}));b.facebookTopPos=b.frameBehindButtonsTopPos+Math.floor((m.height()-C.height())/2);d.showFacebookBut?(b.facebookRightPos=b.twitterRightPos+D.width()+b.smallButtonDistance,C.css({top:b.facebookTopPos+"px",right:b.facebookRightPos+"px"})):(b.facebookRightPos=b.twitterRightPos,C.css({display:"none",width:0,padding:0,margin:0}))}function K(a,b,d,e,h,k,v,n,l,q,p,w,t,A,x,z){if(!b.showOnlyPlayButton){e.stop(!0,!0);a.isCarouselScrolling=
 !1;g(".readingData",k).css({display:"none"});n=parseInt(b.playerWidth/b.origWidth*b.historyRecordTitleLimit,10);l=parseInt(b.playerWidth/b.origWidth*b.historyRecordAuthorLimit,10);q=[];a.isHistoryGenerated=!0;e.html("");for(p=a.gen_total_images=0;p<a.playlist_arr.length;p++)a.gen_total_images++,q=a.playlist_arr[p].split("-"),1>q.length?a.gen_total_images--:(a.thumbsHolder_Thumb=g('<div class="thumbsHolder_ThumbOFF" rel="'+(a.gen_total_images-1)+'" data-origID="'+p+'"><div class="padding"><img src="'+
 a.playlist_images_arr[p]+'"><span class="titlex">'+R(q[1],n,b)+'</span><span class="authorx">'+R(q[0],l,b)+"</span></div></div>"),e.append(a.thumbsHolder_Thumb),0==a.thumbsHolder_ThumbHeight&&(a.thumbsHolder_ThumbHeight=a.thumbsHolder_Thumb.height()),a.thumbsHolder_Thumb.css({top:(a.thumbsHolder_ThumbHeight+1)*a.gen_total_images+"px",background:b.historyRecordBgColor,"border-bottom-color":b.historyRecordBottomBorderColor,color:b.historyRecordTextColor}),g(".titlex",a.thumbsHolder_Thumb).css({color:b.historyRecordSongColor,
 "border-bottom-color":b.historyRecordSongBottomBorderColor}),g(".authorx",a.thumbsHolder_Thumb).css({color:b.historyRecordAuthorColor}),a.current_img_no=0);h.height(2*b.historyPadding+(a.thumbsHolder_ThumbHeight+1)*b.numberOfThumbsPerScreen+z.height()+b.historyPadding);k.height((a.thumbsHolder_ThumbHeight+1)*b.numberOfThumbsPerScreen);k.css({"margin-top":z.height()+b.historyPadding+"px"});v.css({padding:b.historyPadding+"px"});a.thumbsHolder_Thumbs=g(".thumbsHolder_ThumbOFF",d);a.wrapperHeight=a.audioPlayerHeight+
 h.height()+b.historyTopPos;if(!b.showHistory||!b.showHistoryOnInit||0>h.css("margin-top").substring(0,h.css("margin-top").length-2))a.wrapperHeight=a.audioPlayerHeight;a.isMinified||x.css({height:a.wrapperHeight+"px"});a.gen_total_images>b.numberOfThumbsPerScreen&&b.showHistory?(b.isPlaylistSliderInitialized&&a.audio6_html5_sliderVertical.slider("destroy"),a.audio6_html5_sliderVertical.slider({orientation:"vertical",range:"min",min:1,max:100,step:1,value:100,slide:function(d,f){L(f.value,a,b,e)}}),
 b.isPlaylistSliderInitialized=!0,a.audio6_html5_sliderVertical.css({display:"inline",position:"absolute",height:h.height()-20-3*b.historyPadding-z.height()+"px",left:d.width()-a.audio6_html5_sliderVertical.width()-b.historyPadding+"px",top:a.audioPlayerHeight+b.historyTopPos+2*b.historyPadding+2+z.height()+"px"}),b.showHistoryOnInit||a.audio6_html5_sliderVertical.css({opacity:0,display:"none"}),g(".thumbsHolder_ThumbOFF",d).css({width:d.width()-a.audio6_html5_sliderVertical.width()-2*b.historyPadding-
 3+"px"})):(b.isPlaylistSliderInitialized&&(a.audio6_html5_sliderVertical.slider("destroy"),b.isPlaylistSliderInitialized=!1),g(".thumbsHolder_ThumbOFF",d).css({width:d.width()-2*b.historyPadding+"px"}));k.mousewheel(function(d,f,g,h){d.preventDefault();d=a.audio6_html5_sliderVertical.slider("value");if(1<parseInt(d)&&-1==parseInt(f)||100>parseInt(d)&&1==parseInt(f))d+=3*f,a.audio6_html5_sliderVertical.slider("value",d),L(d,a,b,e)});e.css({top:"0px"})}}function Q(a,b){b.preserveOriginalUpperLowerCase||
 (a=a.toLowerCase(),a=a.replace(/\b[a-z]/g,function(a){return a.toUpperCase()}),a=a.replace(/&Apos;/gi,"'"),a=a.replace(/&Amp;/gi,"&"),a=a.replace(/'[A-Z]/g,function(a){return a.toLowerCase()}));return a}function R(a,b,d){a=String(a);var e="";if(a.length>b){a=a.substring(0,b);var g=a.split(" ");a=a.substring(b-2,b-1);""!=a&&(g.pop(),e="...");a=g.join(" ")}a=Q(a,d);return a+e}function U(){g("audio").each(function(){g(".AudioPlay").removeClass("AudioPause");g(this)[0].pause()})}function S(){var a=-1;
 if("Microsoft Internet Explorer"==navigator.appName){var b=navigator.userAgent,d=/MSIE ([0-9]{1,}[.0-9]{0,})/;null!=d.exec(b)&&(a=parseFloat(RegExp.$1))}else"Netscape"==navigator.appName&&(b=navigator.userAgent,d=/Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/,null!=d.exec(b)&&(a=parseFloat(RegExp.$1)));return parseInt(a,10)}function V(a){var b=!1;document.getElementById(a.audioID).canPlayType&&"no"!=document.getElementById(a.audioID).canPlayType("audio/mpeg")&&""!=document.getElementById(a.audioID).canPlayType("audio/mpeg")||
 (b=!0);return b}var I=navigator.userAgent.toLowerCase();g.fn.audio6_html5=function(a){a=g.extend({},g.fn.audio6_html5.defaults,a);S();return this.each(function(){var b=g(this),d=g('<div class="frameBehindText"></div><div class="frameBehindButtons"></div> <div class="ximage"></div> <div class="AudioControls"> <a class="AudioCloseBut" title="Minimize"></a><a class="AudioFacebook" title="Facebook"></a><a class="AudioTwitter" title="Twitter"></a><a class="AudioPlay" title="Play/Pause"></a><a class="AudioShowHidePlaylist" title="Show/Hide Playlist"></a><a class="VolumeButton" title="Mute/Unmute"></a><div class="VolumeSlider"></div>   </div>   <div class="songTitle"><div class="songTitleInside"></div></div>  <div class="songAuthorLineSeparator"></div>  <div class="songAuthor"></div>  <div class="radioStation"></div>     <div class="thumbsHolderWrapper"><div class="historyPadding">  <div class="historyTitle"></div> <div class="thumbsHolderVisibleWrapper"><div class="thumbsHolder"></div></div></div></div>  <div class="slider-vertical"></div>'),
 e=b.parent(".audio6_html5");e.addClass(a.skin);e.append(d);var h=g(".frameBehindText",e),k=g(".frameBehindButtons",e);g(".AudioControls",e);var v=g(".AudioFacebook",e),n=g(".AudioTwitter",e),l=g(".AudioPlay",e),q=g(".AudioShowHidePlaylist",e),p=g(".VolumeButton",e),w=g(".VolumeSlider",e),t=g(".AudioCloseBut",e),A=g(".songTitle",e),x=g(".songTitleInside",e),z=g(".songAuthor",e),B=g(".songAuthorLineSeparator",e),f=g(".radioStation",e),G=g(".ximage",e),m=g(".historyTitle",e);e.wrap("<div class='the_wrapper'></div>");
 var r=e.parent(),y=S();if(-1!=I.indexOf("ipad")||-1!=I.indexOf("iphone")||-1!=I.indexOf("ipod")||-1!=I.indexOf("webos")||-1!=navigator.userAgent.indexOf("Android"))a.autoPlay=!1;e.css({background:"transparent"});var c={current_img_no:0,origID:0,is_very_first:!0,total_images:0,gen_total_images:0,is_changeSrc:!1,timeupdateInterval:"",totalTime:"",playlist_arr:"",playlist_images_arr:"",isCarouselScrolling:!1,isHistoryGenerated:!1,isStationTitleInsideScrolling:!1,curTitle:"",prevTitle:"",cur_song_image:"",
 prev_song_image:"",curSongText:"",curSongAuthorText:"",stationTitleInsideWait:0,audioPlayerWidth:0,audioPlayerHeight:0,wrapperHeight:0,temp_showHistoryBut:!0,historyButWidth:0,isRadiojar:!1,historyInitialHeight:90,thumbsHolder_Thumb:g('<div class="thumbsHolder_ThumbOFF" rel="0"><div class="padding">test</div></div>'),thumbsHolder_ThumbHeight:0,thumbsHolder_Thumbs:"",constantDistance:0,titleWidth:0,radioStationTopPos:0,radioStationLeftPos:0,titleTopPos:0,titleLeftPos:0,lineSeparatorTopPos:0,lineSeparatorLeftPos:0,
 authorTopPos:0,authorLeftPos:0,minimizeTopPos:0,minimizeRightPos:0,isMinified:!1,imageTopPos:0,imageLeftPos:0,frameBehindButtonsTopPos:0,frameBehindButtonsLeftPos:0,frameBehindTextTopPos:0,frameBehindTextLeftPos:0,playTopPos:0,playLeftPos:0,volumeTopPos:0,volumeRightPos:0,volumesliderTopPos:0,volumesliderLeftPos:0,showhidehistoryTopPos:0,showhideplaylistRightPos:0,smallButtonDistance:4,playVerticalPadding:10,playHorizontalPadding:16,facebookTopPos:0,facebookRightPos:0,twitterTopPos:0,twitterRightPos:0,
 origParentFloat:"",origParentPaddingTop:"",origParentPaddingRight:"",origParentPaddingBottom:"",origParentPaddingLeft:"",windowWidth:0,audioID:"",audioObj:"",radioReaderAjaxInterval:"",totalRadioStationsNo:0,ajaxReturnedRadioStationsNo:0,lastfm:"",isFlashNeeded:!0,myFlashObject:"",rndNum:0,prevVolumeVal:1,myregexp:/^(http|https):\/\/(.*):(.*)\/(.*)$/,myregexp_radiojar:/^(http|https):\/\/(.*)\/(.*)$/,http_or_https:"http",ip:"",port:"",mount_point:"",now_playing_current_k:-1,now_playing_found:!1,now_playing_arr_lenght:0,
 now_playing_arr:["stats?sid=1","7.html","status-json.xsl","status.xsl"],history_current_k:0,history_arr:["played.html"]};a.preserveOriginalUpperLowerCase||(x.css({"text-transform":"uppercase"}),z.css({"text-transform":"capitalize"}));a.sticky||(a.startMinified=!1);30>a.nowPlayingInterval&&(a.nowPlayingInterval=44);a.showOnlyPlayButton&&(a.startMinified=!1,a.showFacebookBut=!1,a.showVolume=!1,a.showTwitterBut=!1,a.showRadioStation=!1,a.showTitle=!1,a.showHistoryBut=!1,a.showHistory=!1,a.playerWidth=
 l.width()+2*c.playHorizontalPadding,a.historyPadding=0);a.origWidth=a.playerWidth;c.temp_showHistoryBut=a.showHistoryBut;a.grabLastFmPhoto&&(d=new LastFMCache,c.lastfm=new LastFM({apiKey:a.lastFMApiKey,apiSecret:a.lastFMSecret,cache:d}));c.now_playing_arr_lenght=Object.keys(c.now_playing_arr).length;c.audioID=b.attr("id");-1==(-1==navigator.userAgent.indexOf("Opera")&&navigator.userAgent.indexOf("OPR"))&&(-1!=navigator.userAgent.indexOf("Chrome")&&-1!=navigator.vendor.indexOf("Google")&&(a.autoPlay=
 !1),-1!=navigator.userAgent.indexOf("Safari")&&-1!=navigator.vendor.indexOf("Apple")&&-1==navigator.platform.indexOf("Win")&&(a.autoPlay=!1));c.isFlashNeeded=V(c);-1!=y&&(c.isFlashNeeded=!0);a.showFacebookBut&&(window.fbAsyncInit=function(){FB.init({appId:a.facebookAppID,version:"v3.1",status:!0,cookie:!0,xfbml:!0})},function(a,b,c){var d=a.getElementsByTagName(b)[0];a.getElementById(c)||(a=a.createElement(b),a.id=c,a.src="//connect.facebook.com/en_US/sdk.js",d.parentNode.insertBefore(a,d))}(document,
 "script","facebook-jssdk"),v.click(function(){FB.ui({method:"share_open_graph",action_type:"og.likes",action_properties:JSON.stringify({object:{"og:url":document.URL,"og:title":a.facebookShareTitle,"og:description":a.facebookShareDescription,"og:image":a.facebookShareImage}})},function(a){})}));a.showTwitterBut&&n.click(function(){window.open("https://twitter.com/intent/tweet?url="+document.URL+"&text="+a.radio_name,"Twitter","status = 1, left = 430, top = 270, height = 550, width = 420, resizable = 0")});
 N("block",c,a,e,H,u,C,D,l,z,A,x,f,b,G,r,m,h,B,k,t,q,w,p,n,v);c.audioPlayerHeight=G.height()+h.height()+k.height();a.showOnlyPlayButton&&(c.audioPlayerHeight=l.height()+2*c.playVerticalPadding);e.height(c.audioPlayerHeight);if(a.startMinified||a.showOnlyPlayButton)c.historyInitialHeight=0;c.wrapperHeight=c.audioPlayerHeight+c.historyInitialHeight+a.historyTopPos;a.showHistory&&a.showHistoryOnInit||(c.wrapperHeight=c.audioPlayerHeight);r.css({border:a.playerBorderSize+"px solid "+a.playerBorderColor,
 width:e.width()+"px",height:c.wrapperHeight+"px"});a.centerPlayer&&r.css({margin:"0 auto"});var u=g(".thumbsHolderWrapper",e),D=g(".historyPadding",e),C=g(".thumbsHolderVisibleWrapper",e),H=g(".thumbsHolder",e);c.audio6_html5_sliderVertical=g(".slider-vertical",e);D.css({padding:a.historyPadding+"px"});C.append('<div class="readingData">'+a.translateReadingData+"</div>");m.width(a.playerWidth-2*a.historyPadding);m.html(a.historyTranslate);m.css({color:a.historyTitleColor});a.showHistory||u.css({opacity:0});
 a.showHistoryOnInit||u.css({opacity:0,"margin-top":"-20px"});u.css({width:e.width()+"px",top:c.audioPlayerHeight+a.historyTopPos+"px",left:"0px",background:a.historyBgColor});C.width(e.width());a.sticky&&(r.addClass("audio6_html5_sticky_div"),t.click(function(){var d=500;if(c.isMinified){c.isMinified=!1;t.removeClass("AudioOpenBut");var g="block";c.temp_showHistoryBut=a.showHistoryBut;c.audioPlayerHeight=parseInt(a.playerWidth/a.origWidth*a.imageHeight,10)+h.height()+k.height();var y=0>u.css("margin-top").substring(0,
 u.css("margin-top").length-2)?c.audioPlayerHeight:c.audioPlayerHeight+u.height()+a.historyTopPos}else c.isMinified=!0,t.addClass("AudioOpenBut"),g="none",c.audioPlayerHeight=h.height()+k.height(),y=c.audioPlayerHeight,c.temp_showHistoryBut=!1;N(g,c,a,e,H,u,C,D,l,z,A,x,f,b,G,r,m,h,B,k,t,q,w,p,n,v);G.css({display:g});a.startMinified?(d=0,a.startMinified=!1):d=500;u.css({display:g,top:c.audioPlayerHeight+a.historyTopPos+"px"});c.gen_total_images>a.numberOfThumbsPerScreen&&c.audio6_html5_sliderVertical.css({display:g,
 top:c.audioPlayerHeight+a.historyTopPos+2*a.historyPadding+2+m.height()+"px"});r.animate({height:y},d,"easeOutQuad",function(){})}));w.slider({value:a.initialVolume,step:.05,orientation:"horizontal",range:"min",max:1,animate:!0,slide:function(b,d){a.initialVolume=d.value;c.isFlashNeeded?c.myFlashObject.myAS3function(J(c,a,H,e),a.initialVolume):document.getElementById(c.audioID).volume=d.value},stop:function(a,b){}});document.getElementById(c.audioID).volume=a.initialVolume;w.css({background:a.volumeOffColor});
 g(".ui-slider-range",w).css({background:a.volumeOnColor});l.click(function(){var b=c.isFlashNeeded?!l.hasClass("AudioPause"):document.getElementById(c.audioID).paused;U();0==b?(c.isFlashNeeded?c.myFlashObject.myAS3function("_pause_radio_stream_",a.initialVolume):document.getElementById(c.audioID).pause(),l.removeClass("AudioPause")):(c.isFlashNeeded?c.myFlashObject.myAS3function("_play_radio_stream_",a.initialVolume):(document.getElementById(c.audioID).src=J(c,a,H,e),document.getElementById(c.audioID).load(),
 document.getElementById(c.audioID).play()),l.addClass("AudioPause"))});q.click(function(){0>u.css("margin-top").substring(0,u.css("margin-top").length-2)?(aux_opacity=1,aux_display="block",aux_margin_top="0px",aux_height=c.audioPlayerHeight+u.height()+a.historyTopPos,u.css({display:aux_display}),c.gen_total_images>a.numberOfThumbsPerScreen&&c.audio6_html5_sliderVertical.css({opacity:1,display:"block"})):(aux_opacity=0,aux_display="none",aux_margin_top="-20px",c.gen_total_images>a.numberOfThumbsPerScreen&&
 c.audio6_html5_sliderVertical.css({opacity:0,display:"none"}),aux_height=c.audioPlayerHeight);u.css({"z-index":-1});u.animate({opacity:aux_opacity,"margin-top":aux_margin_top},500,"easeOutQuad",function(){u.css({display:aux_display,"z-index":"auto"})});r.animate({height:aux_height},500,"easeOutQuad",function(){})});p.click(function(){document.getElementById(c.audioID).muted?(document.getElementById(c.audioID).muted=!1,p.removeClass("VolumeButtonMuted"),c.isFlashNeeded&&(a.initialVolume=c.prevVolumeVal,
 c.myFlashObject.myAS3function(J(c,a,H,e),a.initialVolume))):(document.getElementById(c.audioID).muted=!0,p.addClass("VolumeButtonMuted"),c.isFlashNeeded&&(c.prevVolumeVal=a.initialVolume,a.initialVolume=0,c.myFlashObject.myAS3function(J(c,a,H,e),a.initialVolume)))});u.swipe({swipeStatus:function(b,d,e,f,h,k){"up"!=e&&"down"!=e||0==f||(currentScrollVal=c.audio6_html5_sliderVertical.slider("value"),currentScrollVal="up"==e?currentScrollVal-1.5:currentScrollVal+1.5,c.audio6_html5_sliderVertical.slider("value",
 currentScrollVal),g("html, body").off("touchstart touchmove").on("touchstart touchmove",function(a){a.preventDefault()}),L(currentScrollVal,c,a,H))},threshold:100,maxTimeThreshold:500,fingers:"all",allowPageScroll:"none",preventDefaultEvents:!1});c.isFlashNeeded&&(c.rndNum=parseInt(998999*Math.random()+1E3),e.append("<div id='swfHolder"+c.rndNum+"'></div>"),swfobject.addDomLoadEvent(function(){c.myFlashObject=swfobject.createSWF({data:a.pathToAjaxFiles+"flash_player.swf",width:"0",height:"0"},{flashvars:"streamUrl="+
 a.radio_stream+"&autoPlay="+a.autoPlay+"&initialVolume="+a.initialVolume},"swfHolder"+c.rndNum)}),a.autoPlay&&l.addClass("AudioPause"));T(c,a,H,e,l,z,A,x,f,b,G,C,u,D,r,m,t);-1==I.indexOf("ipad")&&-1==I.indexOf("iphone")&&-1==I.indexOf("ipod")&&-1==I.indexOf("webos")||l.removeClass("AudioPause");var F=function(){""==c.origParentFloat&&(c.origParentFloat=e.parent().css("float"),c.origParentPaddingTop=e.parent().css("padding-top"),c.origParentPaddingRight=e.parent().css("padding-right"),c.origParentPaddingBottom=
 e.parent().css("padding-bottom"),c.origParentPaddingLeft=e.parent().css("padding-left"));a.playerWidth!=a.origWidth||a.playerWidth>g(window).width()?e.parent().css({"float":"none","padding-top":0,"padding-right":0,"padding-bottom":0,"padding-left":0}):e.parent().css({"float":c.origParentFloat,"padding-top":c.origParentPaddingTop,"padding-right":c.origParentPaddingRight,"padding-bottom":c.origParentPaddingBottom,"padding-left":c.origParentPaddingLeft});var d=e.parent().parent().width();if(e.width()!=
 d){a.playerWidth=a.origWidth>d?d:a.origWidth;if(e.width()!=a.playerWidth){N("block",c,a,e,H,u,C,D,l,z,A,x,f,b,G,r,m,h,B,k,t,q,w,p,n,v);c.audioPlayerHeight=G.height()+h.height()+k.height();c.isMinified&&(c.audioPlayerHeight=h.height()+k.height());e.height(c.audioPlayerHeight);c.wrapperHeight=c.audioPlayerHeight+u.height()+a.historyTopPos;if(!a.showHistory||!a.showHistoryOnInit||c.isMinified||0>u.css("margin-top").substring(0,u.css("margin-top").length-2))c.wrapperHeight=c.audioPlayerHeight;r.css({width:e.width()+
 "px",height:c.wrapperHeight+"px"});m.width(a.playerWidth-2*a.historyPadding);u.css({width:e.width()+"px",top:c.audioPlayerHeight+a.historyTopPos+"px"});C.width(e.width());K(c,a,e,H,u,C,D,l,z,A,x,f,b,G,r,m)}a.playerWidth<g(window).width()&&e.parent().css({"float":c.origParentFloat,"padding-top":c.origParentPaddingTop,"padding-right":c.origParentPaddingRight,"padding-bottom":c.origParentPaddingBottom,"padding-left":c.origParentPaddingLeft})}},E=!1;g(window).resize(function(){doResizeNow=!0;-1!=y&&9==
 y&&0==c.windowWidth&&(doResizeNow=!1);c.windowWidth==g(window).width()?(doResizeNow=!1,a.windowCurOrientation!=window.orientation&&-1!=navigator.userAgent.indexOf("Android")&&(a.windowCurOrientation=window.orientation,doResizeNow=!0)):c.windowWidth=g(window).width();a.responsive&&doResizeNow&&(!1!==E&&clearTimeout(E),E=setTimeout(function(){F()},300))});a.responsive&&F()})};g.fn.audio6_html5.defaults={radio_stream:"https://corsradio.herokuapp.com/?q=http://live.radiobintangtenggara.com:8000/;",radio_name:"Bintang Tenggara",playerWidth:296,imageHeight:296,
 skin:"whiteControllers",initialVolume:1,autoPlay:!0,loop:!0,playerBg:"#000000",volumeOffColor:"#454545",volumeOnColor:"#ffffff",timerColor:"#ffffff",songTitleColor:"#ffffff",authorTitleColor:"#ffffff",lineSeparatorColor:"#636363",radioStationColor:"#ffffff",frameBehindTextColor:"#000000",frameBehindButtonsColor:"#454545",playerBorderSize:0,playerBorderColor:"#000000",sticky:!1,startMinified:!1,showOnlyPlayButton:!1,centerPlayer:!1,showFacebookBut:!0,facebookAppID:"",facebookShareTitle:"HTML5 Radio Player With History - Shoutcast and Icecast",
 facebookShareDescription:"A top-notch responsive HTML5 Radio Player compatible with all major browsers and mobile devices.",facebookShareImage:"",showVolume:!0,showTwitterBut:!0,showRadioStation:!0,showTitle:!0,showHistoryBut:!0,showHistory:!0,showHistoryOnInit:!0,translateReadingData:"reading history...",historyTranslate:"HISTORY - latest played songs",historyTitleColor:"#858585",historyTopPos:0,historyBgColor:"#ebebeb",historyRecordBgColor:"transparent",historyRecordBottomBorderColor:"transparent",
 historyRecordSongColor:"#000000",historyRecordSongBottomBorderColor:"#d0d0d0",historyRecordAuthorColor:"#6d6d6d",numberOfThumbsPerScreen:3,historyPadding:16,preserveOriginalUpperLowerCase:!1,responsive:!0,historyRecordTitleLimit:25,historyRecordAuthorLimit:36,nowPlayingInterval:35,grabLastFmPhoto:!0,pathToAjaxFiles:"",noImageAvailable:"noimageavailable.jpg",lastFMApiKey:"d5a9dcefffa07f8a0ca04994d7f97c76",lastFMSecret:"b04599a4c7fdbc807b8265bd5357999b",origWidth:0,isSliderInitialized:!1,isProgressInitialized:!1,
 isPlaylistSliderInitialized:!1}})(jQuery);
