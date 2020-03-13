jQuery(function() {

			jQuery("#lbg_audio6_html5_shoutcast_2").audio6_html5({
				radio_stream:"http://45.32.103.238:8047/raungfm",
				radio_name:"90.5 RAUNG FM",
				playerWidth:296,
				imageHeight:296,
				skin:"blackControllers",
				responsive:true,
				grabLastFmPhoto:true,
				autoPlay:true,
				
				songTitleColor:"#000000",
				authorTitleColor:"#000000",
				lineSeparatorColor:"#800080",
				radioStationColor:"#ffffff",
				frameBehindTextColor:"#ffffff",
				frameBehindButtonsColor:"#800080",
				
				sticky:false,
				startMinified:false,
				showOnlyPlayButton:false,
				centerPlayer:true,
				playerBorderSize:0,
				playerBorderColor:"#000000",
				
				showFacebookBut:false,
				facebookAppID:"1362312347152239",
				facebookShareTitle:"Radio Raung FM Genteng Banyuwangi - Shoutcast and Icecast",
				facebookShareDescription:"Radio Raung FM Genteng.",

				
				facebookShareImage:"https://assets.warningfm.net/images/logo-raungfm.png",
				showTwitterBut:true,
				showVolume:true,
				showRadioStation:true,
				showTitle:true,
				showHistoryBut:false,
				showHistory:false,
				showHistoryOnInit:true,
				translateReadingData:"reading data...",
				
				historyTranslate:"HISTORY - latest played songs",
				historyTitleColor:"#858585",
				historyBgColor:"#ebebeb",
				historyRecordBgColor:"transparent",
				historyRecordBottomBorderColor:"transparent",
				historyRecordSongColor:"#000000",
							
				historyRecordSongBottomBorderColor:"#d0d0d0",
				historyRecordAuthorColor:"#6d6d6d",
				numberOfThumbsPerScreen:2,
				historyPadding:16,
				historyRecordTitleLimit:25,
				historyRecordAuthorLimit:36,
				pathToAjaxFiles:"/lbg-audio6-html5-shoutcast_history/audio6_html5_radio_history/",
				nowPlayingInterval:25,
				noImageAvailable:"https://www.raungfm.com/clouds/uploads/2017/01/16387406.jpg"	
				
				
			});		
			
			
		});