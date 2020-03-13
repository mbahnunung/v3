jQuery(function() {

			jQuery("#lbg_audio6_html5_shoutcast_1").audio6_html5({
				radio_stream:"http://live.sg.mcfmbwi.com:9720/mcfm",
				radio_name:"RADIO MCFM",
				playerWidth:300,
				imageHeight:300,
				skin:"whiteControllers",
				responsive:true,
				grabLastFmPhoto:true,
				autoPlay:true,
				
				songTitleColor:"#ffffff",
				authorTitleColor:"#ffffff",
				lineSeparatorColor:"#00FFFF",
				radioStationColor:"#ffffff",
				frameBehindTextColor:"#000000",
				frameBehindButtonsColor:"#454545",
				
				sticky:false,
				startMinified:false,
				showOnlyPlayButton:false,
				centerPlayer:true,
				playerBorderSize:0,
				playerBorderColor:"#000000",
				
				showFacebookBut:false,
				facebookAppID:"1362312347152239",
				facebookShareTitle:"HTML5 Radio Player With History - Shoutcast and Icecast",
				facebookShareDescription:"A top-notch responsive HTML5 Radio Player compatible with all major browsers and mobile devices.",

				
				facebookShareImage:"https://1.bp.blogspot.com/-ICiPZfl3aBQ/VtXCSDPuLKI/AAAAAAAAFPg/1THrDCGG9iI/s1600/03.jpg",
				showTwitterBut:true,
				showVolume:true,
				showRadioStation:true,
				showTitle:true,
				showHistoryBut:true,
				showHistory:true,
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
				pathToAjaxFiles:"http://myhouseradio.fm/wp-content/plugins/lbg-audio6-html5-shoutcast_history/",
				nowPlayingInterval:25,
				noImageAvailable:"lbg-audio6-html5-shoutcast_history/audio6_html5_radio_history/1d205655ef29e14a8255c89fe2383a41.jpg"	
				
				
			});		
			
			
		});