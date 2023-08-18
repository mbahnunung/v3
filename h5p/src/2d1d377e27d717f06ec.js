
        // This script will call Kast player
        // please add your options (host, port, version, etc..)
        // read the docs for more available options
        $.kast({
        host: 'ssg.streamingmurah.com',
        port: 9560,
        protocol: 'https',
        version: 2, // SHOUTcast Version @integer
        sid: 1, // Server stream ID (If you have multiple SHOUTcast V2 stations) @integer
        statsPath: 'stats', // Path to stats @string
        autoUpdate: true, // Autoupdate (Boolean or string: 'all') (current info / Played info / album artwork) @boolean @string
        autoPlay: true, // Autoplay radio on load @boolean
        betaProxies: true, // Use Beta Proxies to fetch SHOUTcast metadata
        mobileCare: false, // low (aka true), medium, high, very high, ultra @boolean @array
        irrelevantWords: ["false"], // irrelvant words in SHOUTcast full song title @false or @array
        defaultArtwork: ['https://warningfm.github.io/v3/images/1d205655ef29e14a8255c89fe2383a41.jpg'],
        statusBar: false,
        minimizeMaximize: false,
        startTemplate: 'maximized',
        serverInfo: ['currentlisteners', 'servertitle'],
        language: {
            offlineText: 'Temporarily Offline', // On offline: status bar text @string
            playedText: '<font face="Georgia" color="Deep Pink">Wes Mari Diputer :</font>', // Played title (player bottom) @string
            unknownTrackText: 'Unknown Track - c^o^d^e^l^i^s^t^.^c^c', // Set unknown track text when error
            unknownArtistText: 'Unknown Artist' // Set unknown artist text when error
        }, // Set text (Multi language support) @object
        position: 'right', // Player position (Bottom right or left) @string
        container: 'body', // Player container element, class or ID. everything other than 'body' isn't fixed @string
        overHTTPS: true,
        colors: 'dynamic',
        ui: 'colored', // Transparent or colored and kast-nowplaying @string
        theme: 'dynamic', // Dark, light or dynamic: based on the current album artwork @string
        played: true
    })
    
