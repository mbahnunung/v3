<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>itunes Cover</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
.tes .artwork {
	width: 300px;
    height: 300px;
    border: 1px solid #111;
    margin: 5px;
    background-image: url("https://warningfm.github.io/v3/images/no-cover-large.png");;
    background-size: cover;
    box-shadow: 2px 2px 5px #000;
    
}
.tes .now-playing {
	font-size: 25px;
	color: #f46e27;
	margin-top: 26px;
}
.tes .songtitle {
	font-size: 18px;
	color: black;
	text-transform: capitalize;
	margin-top: 14px;margin: 5px;
}
.tes .artist-name {
	font-size: 20px;	
	color: black;
	text-transform: capitalize;
	margin-top: 25px;margin: 5px;
}
</style>
<link href="https://fonts.googleapis.com/css?family=Roboto:400" type="text/css" rel="stylesheet">
</head>
<body bgcolor="transparent" text="" topmargin="0" leftmargin="0" rightmargin="0">


<script src="https://cdn.jsdelivr.net/jquery/2.2.4/jquery.min.js"></script>
<script src="player.meta.js"></script>

<div class="tes" id="rbtfm">
<div class="wrapper">

<div class="bg-artwork"></div>
<div class="container">						
<div class="main-wrapper">
<div class="artwork animated"></div>
<div class="album-cover-wpr"></div>
<div class="album-cover animated"></div>
<div class="data-container">
<!-- BEGINS: AUTO-GENERATED MUSES RADIO PLAYER CODE -->
<script type="text/javascript" src="mrp.js"></script>
<script type="text/javascript">
MRP.insert({
'url':'https://cast2.mbahnunungonline.net/proxy/masnn?mp=/stream',
'codec':'aac',
'volume':100,
'autoplay':true,
'jsevents':true,
'buffering':0,
'title':'Warning FM',
'wmode':'transparent',
'skin':'faredirfare',
'width':269,
'height':52
});
</script>
<!-- ENDS: AUTO-GENERATED MUSES RADIO PLAYER CODE -->
<div class="artist-name animated"></div>	
<div class="songtitle animated"></div>

<script>
    $('#rbtfm').nng({
	    URL: 'https://shivyrubycors.herokuapp.com/http://cast4.servcast.net:8532',
		version: '2',
		streampath: '/rbtfm',
		logo: 'https://warningfm.github.io/v3/images/no-cover-large.png',
		autoplay: false,
    })
</script>								
</body>
</html>