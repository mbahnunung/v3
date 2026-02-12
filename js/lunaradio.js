/*
 LUNA RADIO PLAYER V5.21.01.28
 https://www.luna-universe.com

 Copyright (C) SODAH | JOERG KRUEGER
 https://www.sodah.de

 lunaradio-cors (C) NNG.NET | 2024
 https://mbahnunungonline.net/live

*/
(function(d, G) {
    "function" === typeof define && define.amd ? define(["jquery"], G) : d.jQuery ? G(d.jQuery) : G(d.Zepto)
})(this, function(d, G) {
    d.fn.lunaradio = function(n) {
        var t = "string" === typeof n,
            I = Array.prototype.slice.call(arguments, 1),
            r = this;
        n = !t && I.length ? d.extend.apply(null, [!0, n].concat(I)) : n;
        if (t && "_" === n.charAt(0)) return r;
        t ? this.each(function() {
            var P = d(this).data("lunaradio"),
                H = P && d.isFunction(P[n]) ? P[n].apply(P, I) : P;
            if (H !== P && H !== G) return r = H, !1
        }) : this.each(function() {
            d(this).data("lunaradio", new d.lunaradio(this,
                n))
        });
        return r
    };
    d.lunaradio = function(n, t) {
        function I(b) {
            c = b;
            w("autoplay: " + oa);
            if (b = "real" == da) b = "safari" == pa.browser.name.toLowerCase() ? !0 : !1, b = b || ba();
            b && (da = "fake");
            try {
                var a = window.localStorage.getItem(c + "volume");
                null !== a && (Ra = parseInt(a))
            } catch (h) {
                w(h)
            }
            E = d("#" + c).width();
            x = d("#" + c).height();
            "small" == fa && 0 == x && (cb = !0, db());
            e("Roboto:400");
            "" != eb && e(eb);
            a = "@keyframes " + c + "pulse { ";
            a = a + "\t0% { \t  fill: rgba(" + f(A).r + ", " + f(A).g + ", " + f(A).b + ", 1.0);";
            a = a + "\t} \t50% { \t  fill: rgba(" + f(u).r + ", " +
                f(u).g + ", " + f(u).b + ", 1.0); ";
            a = a + "\t} \t100% { \t\tfill: rgba(" + f(A).r + ", " + f(A).g + ", " + f(A).b + ", 1.0); ";
            a += "\t} }";
            d("head").append('<style type="text/css">' + a + "</style>");
            a = window.location.href.toString().toLocaleLowerCase();
            b = Sa(fb).toString();
            "" != fb && -1 != a.indexOf(b) && 4 < b.length || -1 != a.indexOf(Sa("ZFNWW2FiXlNrV2QgXmdgUx9nYFtoV2RlVyBVYV8=").toString()) || (a = Sa("SURBQDkSRkE9N0ATExMSQj43M0U3Ejk3RhIzEkA3SRJGQT03QBJBQCwSWmZmYmUsISFkU1ZbYWJeU2tXZCBeZ2BTH2dgW2hXZGVXIFVhXyFkV1lbZWZXZA=="), gb = 0, document.getElementById(c).innerHTML =
                a);
            gb || (B(), Ta = !0)
        }

        function r(b, a) {
            if (b === G || "" == b.toString()) b = a;
            return b
        }

        function P(b) {
            var a = document.getElementsByTagName("script"),
                h, p;
            for (h = 0; p = a[h]; h++)
                if (p = p.src, 0 <= p.indexOf(b)) var v = p.substring(0, p.indexOf(b));
            return v
        }

        function H() {
            if (!ba()) {
                for (; F.lastElementChild;) F.removeChild(F.lastElementChild);
                F.load()
            }
        }

        function T() {
            if (ba()) Va || (F.src = Ua, F.load());
            else {
                var b = document.createElement("source");
                b.src = Ua;
                F.appendChild(b);
                F.load()
            }
            Va = !0
        }

        function X() {
            F = new Audio;
            F.id = c + "html5audio";
            F.preload =
                "auto";
            "true" == oa && (w("autoplay enabled"), F.autoplay = !0);
            F.addEventListener("timeupdate", function() {
                0 == F.paused && (d("#" + c + "audiopreloader").fadeOut(0), d("#" + c + "smallaudiopreloader").fadeOut(0))
            }, !1);
            F.addEventListener("loadedmetadata", function() {
                w("loadedmetadata")
            }, !1);
            F.addEventListener("ended", function() {
                H();
                T();
                Y && F.play()["catch"](function() {
                    w("error on html5 play")
                });
                w("ended")
            }, !1);
            F.addEventListener("play", function() {
                hb();
                w("play")
            }, !1);
            F.addEventListener("loadstart", function() {
                Y && (d("#" +
                    c + "audiopreloader").fadeIn(0), d("#" + c + "smallaudiopreloader").fadeIn(0));
                w("loadstart")
            }, !1);
            F.addEventListener("waiting", function() {
                d("#" + c + "audiopreloader").fadeIn(0);
                d("#" + c + "smallaudiopreloader").fadeIn(0);
                w("waiting")
            }, !1);
            F.addEventListener("seeked", function() {
                d("#" + c + "audiopreloader").fadeOut(0);
                d("#" + c + "smallaudiopreloader").fadeOut(0);
                w("seeked")
            }, !1);
            F.addEventListener("canplaythrough", function() {
                d("#" + c + "audiopreloader").fadeOut(0);
                d("#" + c + "smallaudiopreloader").fadeOut(0);
                d("#" + c + "iconlive, #" +
                    c + "smalliconlive").css({
                    opacity: "1.0"
                });
                w("canplaythrough")
            }, !1);
            F.addEventListener("pause", function() {
                F.currentTime.toFixed(1) < F.duration.toFixed(1) && ib();
                w("pause: currentTime: " + F.currentTime.toFixed(1) + " duration: " + F.duration.toFixed(1))
            }, !1);
            F.addEventListener("error", function(b) {
                w(F.readyState);
                setTimeout(function() {
                    H();
                    T();
                    Y && F.play()["catch"](function() {
                        w("error on html5 play")
                    })
                }, 1E3);
                d("#" + c + "iconlive, #" + c + "smalliconlive").css({
                    opacity: "0"
                })
            }, !0)
        }

        function e(b) {
            var a = document.createElement("link");
            a.type = "text/css";
            a.rel = "stylesheet";
            a.href = "https://fonts.googleapis.com/css?family=" + b;
            document.getElementsByTagName("head")[0].appendChild(a)
        }

        function B() {
            var b = document.getElementById(c);
            b.innerHTML = "";
            d("#" + c).addClass("lunaaudioplayer").css({
                overflow: "hidden",
                display: "block"
            });
            var a = document.createElement("div");
            a.id = c + "containerinside";
            b.appendChild(a);
            d("#" + c + "containerinside").css({
                position: "relative",
                left: "0px",
                top: "0px",
                height: "100%",
                width: "100%",
                background: ub
            });
            Ua = "true" == vb && "" != Ca ? Ca +
                Wa() : Wa();
            X();
            "big" == fa && wb(a);
            xb(a);
            "big" == fa ? yb(a) : zb(a);
            ba() && (d("#" + c + "buttonvolumeoff, #" + c + "buttonvolumeon, #" + c + "volumegrab, #" + c + "textvolumeend, #" + c + "volumewrapper").css({
                display: "none"
            }), d("#" + c + "smallvolumegrab, #" + c + "smalltextvolume, #" + c + "smalliconvolume").css({
                display: "none"
            }));
            b = "ie" == pa.browser.name.toLowerCase() && 12 > parseInt(pa.browser.version) ? !0 : !1;
            b && d("#" + c + "backgroundimage").css({
                display: "none"
            });
            jb();
            d(window).resize(function() {
                jb(!1)
            });
            va();
            "true" == qa ? (qa = "false", R(ra + "?" +
                Math.floor(99999 * Math.random()), ""), qa = "true") : R(ra, "");
            C();
            setInterval(function() {
                C()
            }, Ab);
            "true" == oa && (Y = !0, Ja())
        }

        function C() {
            switch (sa) {
                case "ownmetadataurl":
                    Q();
                    break;
                case "stream-icy-meta":
                    wa();
                    break;
                default:
                    switch (kb) {
                        case "icecast2":
                            Z();
                            break;
                        case "shoutcast2":
                            Ka();
                            break;
                        case "radionomy":
                            La();
                            break;
                        case "radiojar":
                            Bb();
                            break;
                        case "radioco":
                            Cb()
                    }
            }
        }

        function y(b, a) {
            xa != d("<div/>").html(b).text() && (xa = d("<div/>").html(b).text(), w("New Title: " + xa), d("." + c + "texttitlespan, ." + c + "smalltexttitlespan").html(xa),
                "" == a ? "true" == qa ? (qa = "false", R(ra + "?" + Math.floor(99999 * Math.random()), ""), qa = "true") : K() : R(a, ""), lb(!0))
        }

        function K() {
            if ("" != xa) {
                var b = xa.replace(/ *\([^)]*\) */g, ""),
                    a = b = "https://itunes.apple.com/search?term=" + encodeURIComponent(b) + "&media=music&limit=1&url=" + encodeURIComponent(ha),
                    h = a,
                    p = "GET";
                ba() && (p = "POST", h = ha + "fallback.php", a = b);
                w("ITUNES: " + h);
                d.ajax({
                    dataType: "text",
                    method: p,
                    crossDomain: !0,
                    url: h,
                    data: {
                        url: a
                    },
                    success: function(v) {
                        try {
                            v = JSON.parse(v);
                            var z = "",
                                m = "";
                            1 == v.results.length ? (z = v.results[0].artworkUrl100,
                                z = z.replace("100x100bb", "1200x1200bb"), w("COVER: " + z), "" != mb && (m = v.results[0].trackViewUrl + "&app=itunes&at=" + mb), R(z, m)) : R(ra, "")
                        } catch (l) {
                            R(ra, "")
                        }
                    },
                    error: function() {
                        R(ra, "")
                    }
                })
            } else R(ra, "")
        }

        function R(b, a) {
            "false" == qa && (ya = a, "" != ya ? d("#" + c + "coverwrapper, #" + c + "smallcoverwrapper").css({
                cursor: "pointer"
            }) : d("#" + c + "coverwrapper, #" + c + "smallcoverwrapper").css({
                cursor: "hand"
            }), ta++, 2 < ta && (ta = 1), d("<img/>").attr("src", b).on("load", function() {
                d(this).remove();
                d("#" + c + "backgroundimage" + ta + ", #" + c + "coverwrapper" +
                    ta + ", #" + c + "smallcoverwrapper" + ta).css({
                    background: "url(" + b + ")",
                    opacity: "1.0",
                    "background-repeat": "no-repeat",
                    "background-size": "cover"
                });
                1 == ta ? d("#" + c + "backgroundimage2, #" + c + "coverwrapper2, #" + c + "smallcoverwrapper2").css({
                    opacity: "0.0"
                }) : d("#" + c + "backgroundimage1, #" + c + "coverwrapper1, #" + c + "smallcoverwrapper1").css({
                    opacity: "0.0"
                })
            }))
        }

        function Q() {
            var b = "GET",
                a = Db,
                h = a,
                p = {};
            "corsproxy" == sa && (b = "GET", h = a = Ca + a, p = {});
            "fallback" == sa && (b = "POST", h = ha + "fallback.php", p = {
                url: a
            });
            d.ajax({
                dataType: "text",
                method: b,
                crossDomain: !0,
                url: h,
                data: p,
                success: function(v) {
                    y(v, "")
                },
                error: function(v, z, m) {
                    y("", "")
                }
            })
        }

        function wa() {
            var b = Wa();
            d.ajax({
                dataType: "text",
                url: ha + "stream-icy-meta.php",
                method: "POST",
                crossDomain: !0,
                data: {
                    url: b
                },
                success: function(a) {
                    y(a, "")
                },
                error: function(a, h, p) {
                    y("", "")
                }
            })
        }

        function Z() {
            var b = "GET",
                a = ia + "/status-json.xsl",
                h = a,
                p = {};
            "corsproxy" == sa && (b = "GET", h = a = Ca + a, p = {});
            "fallback" == sa && (b = "POST", h = ha + "fallback.php", p = {
                url: a
            });
            d.ajax({
                dataType: "text",
                method: b,
                crossDomain: !0,
                url: h,
                data: p,
                success: function(v) {
                    try {
                        v =
                            JSON.parse(v);
                        var z = {};
                        if (v.icestats.source.length === G) z = v.icestats.source;
                        else
                            for (var m = 0; m < v.icestats.source.length; m++) {
                                var l = v.icestats.source[m].listenurl;
                                Ma == l.substr(l.length - Ma.length, Ma.length) && (z = v.icestats.source[m])
                            }
                        m = v = "";
                        z.hasOwnProperty("title") && (m = z.title);
                        z.hasOwnProperty("artist") && (v = z.artist);
                        "" != v && "" != m ? y(v + " - " + m, "") : "" != v ? y(v, "") : y(m, "")
                    } catch (D) {
                        w("Error on JSON File: " + D), y("", "")
                    }
                },
                error: function(v, z, m) {
                    w("Error on JSON File: " + z);
                    y("", "")
                }
            })
        }


if (w.metadatatechnic === "corsproxy") {
        function Ka() {
            var b = "GET",
                a = ia + "/currentsong?sid=" + Eb,
                h = a,
                p = {};
            "corsproxy" == sa && (b = "GET", h = a = Ca + a, p = {});
            "fallback" == sa && (b = "POST", h = ha + "fallback.php", p = {
                url: a
            });
            d.ajax({
                dataType: "text",
                method: b,
                crossDomain: !0,
                url: h,
                data: p,
                success: function(v) {
                    y(v, "")
                },
                error: function(v, z, m) {
                    y("", "")
                }
            })
        }
		
	} else {	
		
		function Ka() {
            var b = "GET",
                a = ia + "/stats?json=1&sid=" + Eb,
                h = a,
                p = {};
            "corsproxy" == sa && (b = "GET", h = a = Ca + a, p = {});
            "fallback" == sa && (b = "POST", h = ha + "fallback.php", p = {
                url: a
            });
            d.ajax({
                dataType: "jsonp",
                method: b,
                crossDomain: !0,
                url: h,
                data: p,
                success: function(v) {
                    y(v.songtitle, "")
                },
                error: function(v, z, m) {
                    y("", "")
                }
            })
        }
        
}
	
        function La() {
            d.ajax({
                dataType: "xml",
                method: "GET",
                crossDomain: !0,
                url: "https://api.radionomy.com/currentsong.cfm?radiouid=" + Fb + "&apikey=" + Gb + "&callmeback=yes&type=xml&cover=yes&previous=yes",
                success: function(b) {
                    try {
                        var a = d(b).find("track").find("artists").text();
                        d(b).find("track").find("title").text() != d(b).find("track").find("artists").text() && (a += " - " + d(b).find("track").find("title").text());
                        var h = d(b).find("track").find("cover").text();
                        y(a, h)
                    } catch (p) {
                        y("", "")
                    }
                },
                error: function(b, a, h) {
                    y("", "")
                }
            })
        }

        function Bb() {
            d.ajax({
                dataType: "text",
                method: "GET",
                crossDomain: !0,
                url: "https://www.radiojar.com/api/stations/" + Hb + "/now_playing/?rand=" + Math.random(),
                success: function(b) {
                    try {
                        var a = JSON.parse(b);
                        y(a.artist + " - " + a.title, a.thumb)
                    } catch (h) {
                        y("", "")
                    }
                },
                error: function(b,
                    a, h) {
                    y("", "")
                }
            })
        }

        function Cb() {
            d.ajax({
                dataType: "text",
                method: "GET",
                crossDomain: !0,
                url: "https://public.radio.co/stations/" + Ib + "/status",
                success: function(b) {
                    try {
                        var a = JSON.parse(b);
                        y(a.current_track.title, a.current_track.artwork_url_large)
                    } catch (h) {
                        y("", "")
                    }
                },
                error: function(b, a, h) {
                    y("", "")
                }
            })
        }

        function xb(b) {
            k = document.createElement("canvas");
            k.id = c + "canvas";
            b.appendChild(k);
            d("#" + c + "canvas").css({
                display: "block",
                background: "none",
                position: "absolute",
                top: "0px",
                opacity: Jb
            });
            g = k.getContext("2d")
        }

        function yb(b) {
            var a =
                document.createElement("div");
            a.id = c + "playerwrapper";
            b.appendChild(a);
            d("#" + c + "playerwrapper").css({
                overflow: "hidden",
                display: "block",
                position: "absolute",
                left: "0px",
                top: "0px",
                height: "100%",
                width: "100%"
            });
            Kb(a);
            n = document.createElement("div");
            n.id = c + "iconlive";
            a.appendChild(n);
            d("#" + c + "iconlive").css({
                position: "absolute",
                fill: "rgba(" + f(A).r + ", " + f(A).g + ", " + f(A).b + ", 0.3)",
                animation: c + "pulse 2s infinite"
            }).html('<svg class="lunaradioliveicon" x="0px" y="0px" viewBox="-16 0 512 512.00113" ><path d="m262.84375 140.558594c-12.699219 12.671875-33.28125 12.671875-45.980469 0-12.695312-12.671875-12.695312-33.21875 0-45.890625 12.699219-12.671875 33.28125-12.671875 45.980469 0 12.695312 12.671875 12.695312 33.21875 0 45.890625zm0 0"/><path d="m307.257812 189.726562c-3.960937 0-7.921874-1.511718-10.9375-4.539062-6.03125-6.039062-6.019531-15.824219.019532-21.851562 12.238281-12.214844 18.976562-28.453126 18.976562-45.722657s-6.738281-33.507812-18.976562-45.722656c-6.039063-6.03125-6.050782-15.8125-.019532-21.855469 6.027344-6.039062 15.8125-6.050781 21.851563-.019531 18.089844 18.054687 28.050781 42.058594 28.050781 67.597656 0 25.535157-9.960937 49.542969-28.050781 67.597657-3.015625 3.011718-6.964844 4.515624-10.914063 4.515624zm0 0"/><path d="m342.210938 235.222656c-3.960938 0-7.921876-1.511718-10.9375-4.535156-6.03125-6.042969-6.019532-15.824219.019531-21.855469 24.414062-24.367187 37.863281-56.761719 37.863281-91.21875s-13.449219-66.851562-37.863281-91.21875c-6.039063-6.03125-6.050781-15.8125-.019531-21.855469 6.03125-6.039062 15.8125-6.050781 21.851562-.019531 30.265625 30.207031 46.9375 70.371094 46.933594 113.09375 0 42.722657-16.667969 82.890625-46.933594 113.097657-3.015625 3.007812-6.964844 4.511718-10.914062 4.511718zm0 0"/><path d="m172.371094 189.726562c-3.949219 0-7.898438-1.503906-10.917969-4.515624-18.089844-18.054688-28.050781-42.0625-28.050781-67.597657 0-25.539062 9.960937-49.542969 28.050781-67.597656 6.039063-6.03125 15.824219-6.023437 21.851563.019531 6.03125 6.039063 6.019531 15.824219-.019532 21.855469-12.238281 12.214844-18.976562 28.453125-18.976562 45.722656s6.738281 33.507813 18.976562 45.722657c6.039063 6.027343 6.050782 15.8125.019532 21.851562-3.015626 3.023438-6.976563 4.539062-10.933594 4.539062zm0 0"/><path d="m137.417969 235.222656c-3.953125 0-7.902344-1.503906-10.917969-4.515625-30.265625-30.207031-46.933594-70.371093-46.933594-113.09375 0-42.726562 16.667969-82.890625 46.933594-113.097656 6.039062-6.027344 15.824219-6.019531 21.851562.023437 6.03125 6.039063 6.019532 15.820313-.019531 21.851563-24.414062 24.367187-37.863281 56.761719-37.863281 91.21875s13.449219 66.855469 37.863281 91.222656c6.039063 6.03125 6.050781 15.8125.019531 21.855469-3.015624 3.023438-6.976562 4.535156-10.933593 4.535156zm0 0"/><path d="m443.480469 261.9375h-407.332031c-19.964844 0-36.148438 16.183594-36.148438 36.144531v177.769531c0 19.964844 16.183594 36.148438 36.148438 36.148438h407.328124c19.964844 0 36.148438-16.183594 36.148438-36.148438v-177.769531c0-19.960937-16.183594-36.144531-36.144531-36.144531zm-324.609375 203.683594h-56.933594c-8.53125 0-15.449219-6.917969-15.449219-15.453125v-126.398438c0-8.53125 6.917969-15.453125 15.449219-15.453125 8.535156 0 15.453125 6.917969 15.453125 15.453125v110.945313h41.480469c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.535156-6.917969 15.453125-15.453125 15.453125zm63.328125-15.453125c0 8.535156-6.917969 15.453125-15.453125 15.453125s-15.453125-6.917969-15.453125-15.453125v-126.398438c0-8.53125 6.917969-15.453125 15.453125-15.453125s15.453125 6.917969 15.453125 15.453125zm130.015625-121.929688-38.160156 126.394531c-.003907.011719-.007813.023438-.011719.035157-4.144531 14.144531-25.273438 13.796875-29.5625 0-.003907-.011719-.007813-.023438-.011719-.035157l-38.160156-126.394531c-2.464844-8.171875 2.15625-16.792969 10.328125-19.261719 8.164062-2.464843 16.792969 2.15625 19.257812 10.328126l23.367188 77.394531 23.367187-77.394531c2.46875-8.171876 11.089844-12.796876 19.261719-10.328126 8.167969 2.46875 12.792969 11.089844 10.324219 19.261719zm95.066406 35.320313c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.53125-6.917969 15.453125-15.453125 15.453125h-43.851562v40.25h52.175781c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.535156-6.917969 15.453125-15.453125 15.453125h-67.628907c-8.535156 0-15.453124-6.917969-15.453124-15.453125v-126.398438c0-8.53125 6.917968-15.453125 15.453124-15.453125h69.710938c8.53125 0 15.453125 6.917969 15.453125 15.453125 0 8.535157-6.921875 15.453125-15.453125 15.453125h-54.261719v24.335938zm0 0"/></svg>').lunaradiodisableSelection();
            "false" == nb && d("#" + c + "iconlive").css({
                display: "none"
            });
            n = document.createElement("div");
            n.id = c + "buttonvolumeoff";
            a.appendChild(n);
            d("#" + c + "buttonvolumeoff").css({
                position: "absolute",
                transition: "fill 0.5s",
                cursor: "pointer",
                fill: A
            }).html('<svg class="lunaradiovolumeofficon" x="0px" y="0px" viewBox="0 0 800 800" ><path d="M401.2,400c0,72.2,0,144.4,0,216.5c0,12-3.1,22.6-13.3,29.9c-13.4,9.6-31.1,8-42.8-3.7c-36.7-36.6-73.4-73.3-109.9-110.1\tc-4.5-4.6-9-6.3-15.3-6.2c-41.3,0.3-82.7,0.2-124,0.1c-15.7,0-27-8.6-31-23.8c-1.1-4-1.4-8.4-1.4-12.6c-0.1-60.2-0.1-120.4,0-180.6\tc0-11.1,2.3-21.5,11.7-28.9c6.5-5.1,13.8-7.3,22-7.3c41.6,0,83.3-0.1,124.9,0.1c4.7,0,8.1-1.2,11.5-4.7\tc37-37.2,74.1-74.3,111.2-111.3c16.1-16,41.4-12.8,52.5,6.9c3.5,6.1,3.9,13.1,3.9,20c0,69.5,0,139.1,0,208.6\tC401.2,395.3,401.2,397.7,401.2,400z"/><path d="M685.2,526.5c-7.3,0.4-12.8-2.6-17.5-7.4c-18-18-36-35.9-53.9-54c-3.1-3.1-4.6-2.8-7.5,0.1c-17.5,17.8-35.3,35.4-52.9,53.1\tc-5.2,5.2-11.2,8.5-19,8.3c-7-0.2-12.3-3.3-17-7.9c-8.9-8.7-17.6-17.5-26.4-26.3c-10.3-10.5-10.3-24.6,0.2-35.1\tc17.8-17.9,35.7-35.8,53.7-53.6c3-3,2.9-4.6,0-7.6c-17.7-17.4-35.2-35.1-52.8-52.6c-11-11-12.2-22.8-2-34.5\tc9.3-10.6,19.1-20.9,30.2-29.8c10.9-8.7,23.1-7.6,33,2.3c17.8,17.7,35.6,35.5,53.3,53.4c2.8,2.8,4.3,3,7.2,0.1\tc17.6-17.9,35.4-35.6,53.2-53.4c8.8-8.8,19.4-10.5,29.5-5c1.7,0.9,3.1,2.2,4.4,3.5c9.4,9.4,18.8,18.8,28.2,28.2\tc10,10,10.1,24.1,0,34.2c-17.8,17.9-35.7,35.8-53.7,53.6c-2.9,2.9-3.2,4.5-0.1,7.6c17.7,17.4,35.2,35.1,52.8,52.6\tc6.3,6.3,9.6,13.7,8.1,22.9c-0.9,5.6-3.9,10-7.7,13.9c-8.5,8.7-17,17.3-25.7,25.7C697.8,523.6,692.1,527,685.2,526.5z"/></svg>').on("mouseenter",
                function() {
                    d(this).css("fill", u)
                }).on("mouseleave", function() {
                d(this).css("fill", A)
            }).on("click", function() {
                Xa(0)
            }).lunaradiodisableSelection();
            n = document.createElement("div");
            n.id = c + "buttonvolumeon";
            a.appendChild(n);
            d("#" + c + "buttonvolumeon").css({
                position: "absolute",
                transition: "fill 0.5s",
                cursor: "pointer",
                fill: A
            }).html('<svg class="lunaradiovolumeonicon" x="0px" y="0px" viewBox="0 0 800 800"><path d="M359.2,397.1c0,71.7,0,143.3,0,215c0,9.1-1.2,17.7-7.7,24.8c-13.8,14.9-34.2,15.1-49.1,0.3c-32.2-32.1-64.3-64.3-96.4-96.4\tc-4.8-4.8-9.8-9.6-14.5-14.6c-2.6-2.8-5.3-3.9-9.1-3.9c-42.4,0.1-84.8,0.1-127.1,0.1c-15.4,0-27.1-8.9-31.2-23.6\tc-1.1-4.1-1.4-8.3-1.4-12.5c0-60,0-120,0-180c0-14.4,4.6-26.3,18.5-32.9c5.1-2.4,10.6-3.1,16.1-3.1c41.5,0,83,0,124.5,0.1\tc4.2,0,7.1-1.2,9.9-4.1c36.8-36.9,73.6-73.8,110.6-110.6c10.5-10.5,23.1-14.1,37.2-8.3c11.2,4.6,17.9,13.1,19.1,25.5\tc0.5,5.1,0.6,10.2,0.6,15.3C359.2,257.5,359.2,327.3,359.2,397.1z"/><path d="M777.4,394.2c-0.2,41.1-5.6,79-17.7,115.8c-14.5,44.1-36,84.5-65.7,120.4c-9.1,11-18.2,22-28.8,31.6\tc-18.1,16.5-36.4,32.7-57.7,44.9c-19.1,10.9-43.9-1.6-46.9-23.4c-2-14.2,3.3-25.2,14.9-32.9c20.8-13.9,39.6-30.1,56.6-48.4\tc14.9-16,27.8-33.6,38.9-52.5c18.2-31,30.2-64.2,36.7-99.4c3.8-20.4,5.4-41,4.8-61.7c-1.2-42.3-10.6-82.8-28.5-121.1\tc-11.2-23.9-25.5-46-42.4-66.4c-19.8-23.8-43.3-43.3-68.4-61.2c-12.4-8.9-16.3-23.7-10.8-38.1c5.1-13.3,17.6-20.8,32.5-19.9\tc6.1,0.4,11.3,2.4,16.3,5.6c21.2,13.8,40.9,29.5,58.5,47.5c34.5,35.1,61.6,75.3,80.2,121.1c13.4,33,22,67.1,25.4,102.5\tC776.7,371.4,776.9,384.1,777.4,394.2z"/><path d="M652.1,392.3c-0.7,56.6-15.7,104.9-47.2,147.9c-17.4,23.7-38.4,43.6-63.2,59.5c-14.3,9.1-29.1,8.5-41-2\tc-11.9-10.5-13.8-29.9-4.5-42.9c3.9-5.5,9.5-8.9,14.8-12.6c35.3-24.8,59.1-57.9,70.4-99.4c10.8-39.8,8-78.9-8.4-116.9\tc-9.9-22.8-24-42.5-41.9-59.5c-8.8-8.4-18.8-15.1-28.6-22.1c-11-7.9-15.3-24.6-9.9-37.3c6.2-14.7,19.2-22,34-20.1\tc11.1,1.5,19.2,8.3,27.5,14.4c10.7,7.8,20.8,16.3,29.9,26.1c19.7,21.3,36.2,44.6,47.8,71.4c9.2,21.3,15.2,43.4,18.3,66.3\tC651.3,375.2,651.6,385.5,652.1,392.3z"/><path d="M526.4,394.8c-0.1,30.3-9.9,54.9-27.8,76.5c-9,10.8-19.7,19.4-32.1,25.8c-21.2,11-44.2-0.7-47.6-24.3\tc-1.7-12.2,3.1-22.4,13.1-29.5c7.1-5.1,14.6-9.7,19.8-16.9c17.6-24.1,12-55.7-12.8-72.4c-3.4-2.3-7-4.3-9.9-7.1\tc-12.5-11.6-14.1-29.7-4.1-43.1c10-13.3,28-16.9,42.6-8.2c31.6,18.7,51,46.1,57.3,82.4C526.1,384.3,526.7,390.6,526.4,394.8z"/></svg>').on("mouseenter",
                function() {
                    d(this).css("fill", u)
                }).on("mouseleave", function() {
                d(this).css("fill", A)
            }).on("click", function() {
                Xa(100)
            }).lunaradiodisableSelection();
            n = document.createElement("div");
            n.id = c + "buttonanalyzer";
            a.appendChild(n);
            d("#" + c + "buttonanalyzer").css({
                position: "absolute",
                transition: "fill 0.5s",
                cursor: "pointer",
                fill: A
            }).html('<svg class="lunaradiovisualizericon" x="0px" y="0px" viewBox="0 0 24 24"><path d="M22 12L20 13L19 14L18 13L17 16L16 13L15 21L14 13L13 15L12 13L11 17L10 13L9 22L8 13L7 19L6 13L5 14L4 13L2 12L4 11L5 10L6 11L7 5L8 11L9 2L10 11L11 7L12 11L13 9L14 11L15 3L16 11L17 8L18 11L19 10L20 11L22 12Z"/></svg>').on("mouseenter",
                function() {
                    d(this).css("fill", u)
                }).on("mouseleave", function() {
                d(this).css("fill", A)
            }).on("click", function() {
                if ("none" != d("#" + c + "buttonshuffle").css("pointer-events")) {
                    ja = parseInt(ja) + 1;
                    9 < ja && (ja = 0);
                    try {
                        window.localStorage.removeItem(c + "visualizer"), window.localStorage.setItem(c + "visualizer", ja)
                    } catch (h) {
                        w(h)
                    }
                    w("changeanalyzer: " + ja)
                }
            }).lunaradiodisableSelection();
            "false" == Lb && d("#" + c + "buttonanalyzer").css({
                display: "none"
            });
            n = document.createElement("span");
            n.classList.add(c + "textradionamespan");
            a.appendChild(n);
            d("." + c + "textradionamespan").css({
                "padding-left": "10px",
                "padding-right": "10px",
                "text-transform": "Letter case",
                "font-weight": "900",
                "text-shadow": "2px 1px black",
                 margin: "0",
                "white-space": "nowrap",
                "font-family": ka,
              color: A
            }).html(ob);
            n = document.createElement("div");
            n.id = c + "textradioname";
            n.dataset.speed = .5;
            n.dataset.reverse = !0;
            a.appendChild(n);
            d("#" + c + "textradioname").css({
                position: "absolute",
                overflow: "hidden",
                padding: "0",
                margin: "0",
                "white-space": "nowrap",
                "text-align": "center",
                "font-family": ka,
                color: A
            }).addClass(c + "textradioname").html(d("." + c + "textradionamespan")).lunaradiodisableSelection();
            "true" != Da && d("#" + c + "textradioname").css({
                "text-overflow": "ellipsis"
            });
            n = document.createElement("span");
            n.classList.add(c + "texttitlespan");
            a.appendChild(n);
            d("." + c + "texttitlespan").css({
                "padding-left": "10px",
                "padding-right": "10px",
                "text-transform": "Letter case",
                "font-weight": "900",
                "text-shadow": "2px 1px black",
                 margin: "0",
                "white-space": "nowrap",
                "font-family": ka,
              color: A
            }).html("");
            n = document.createElement("div");
            n.id = c + "texttitle";
            n.dataset.speed = .9;
            a.appendChild(n);
            d("#" + c + "texttitle").css({
                position: "absolute",
                overflow: "hidden",
                padding: "0",
                margin: "0",
                "white-space": "nowrap",
                "text-align": "center",
                "font-family": ka,
                color: A
            }).addClass(c + "texttitle").html(d("." + c + "texttitlespan")).lunaradiodisableSelection();
            "true" != Da && d("#" + c + "texttitle").css({
                "text-overflow": "ellipsis"
            });
            n = document.createElement("div");
            n.id = c + "textvolumeend";
            a.appendChild(n);
            d("#" + c + "textvolumeend").css({
                position: "absolute",
                "text-align": "center",
                "font-family": "Roboto",
                color: A
            }).html("100").lunaradiodisableSelection();
            Mb(a);
            Nb(a);
            ba() ? (S = 100, za(100)) : Xa(Ra)
        }

        function lb(b) {
            if ("true" == Da) {
                var a = "";
                "small" == fa && (a = "small");
                b &&
                    d("#" + c + a + "texttitle").hasClass(c + "Marquee") && (d("#" + c + a + "texttitle").removeClass(c + "Marquee"), d("#" + c + a + "texttitle").html(d("." + c + a + "texttitlespan").first()), d("#" + c + a + "texttitle").data("lunaradioMarquee").pause());
                d("#" + c + a + "textradioname").width() > d("." + c + a + "textradionamespan").first().width() + 10 ? d("#" + c + a + "textradioname").hasClass(c + "Marquee") && (d("#" + c + a + "textradioname").removeClass(c + "Marquee"), d("#" + c + a + "textradioname").html(d("." + c + a + "textradionamespan").first()), d("#" + c + a + "textradioname").data("lunaradioMarquee").pause()) :
                    d("#" + c + a + "textradioname").hasClass(c + "Marquee") || (d("#" + c + a + "textradioname").addClass(c + "Marquee"), d("#" + c + a + "textradioname").html(d("." + c + a + "textradionamespan").first()), d("#" + c + a + "textradioname").lunaradioMarquee());
                d("#" + c + a + "texttitle").width() > d("." + c + a + "texttitlespan").first().width() + 10 ? d("#" + c + a + "texttitle").hasClass(c + "Marquee") && (d("#" + c + a + "texttitle").removeClass(c + "Marquee"), d("#" + c + a + "texttitle").html(d("." + c + a + "texttitlespan").first()), d("#" + c + a + "texttitle").data("lunaradioMarquee").pause()) :
                    d("#" + c + a + "texttitle").hasClass(c + "Marquee") || (d("#" + c + a + "texttitle").addClass(c + "Marquee"), d("#" + c + a + "texttitle").html(d("." + c + a + "texttitlespan").first()), d("#" + c + a + "texttitle").lunaradioMarquee())
            }
        }

       function Nb(b) {
            var a = document.createElement("div");
            a.id = c + "pauseplaywrapper";
            b.appendChild(a);
            d("#" + c + "pauseplaywrapper").css({
                position: "absolute",
                cursor: "pointer"
            }).on("click", function() {
                pb();
                Y ? Ya() : Ja()
            }).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "buttonplay";
            a.appendChild(b);
            d("#" + c + "buttonplay").css({
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                transition: "fill 0.5s",
                fill: A
            }).html('<svg class="lunaradioplayicon" x="0px" y="0px"\t viewBox="0 0 800 800" ><path d="M713.9,400.5c1.4,171.2-137.8,314.4-313.9,314.3c-175.6,0-314.2-143-314-315c0.2-171.3,140.6-313.9,315-313.4\tC574,87,715.4,228.9,713.9,400.5z M279.5,400.3c0,23.1,0,46.2,0,69.3c0,20.8-0.2,41.7,0.1,62.5c0.1,12.2,6,21.1,17,26.6\tc11,5.5,21.2,3,31.2-2.9c23.3-13.6,46.8-27,70.2-40.5c49.8-28.6,99.6-57.1,149.3-85.8c18.1-10.4,18.7-38.7,1.1-49.4\tc-74.5-45.4-149-90.8-223.5-136.1c-6-3.7-12.6-5.5-19.8-4.2c-15.7,2.9-25.5,14.4-25.5,30.5C279.4,313.6,279.5,357,279.5,400.3z"/></svg>').on("mouseenter",
                function() {
                    d(this).css("fill", u)
                }).on("mouseleave", function() {
                d(this).css("fill", A)
            }).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "buttonpause";
            a.appendChild(b);
            d("#" + c + "buttonpause").css({
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                transition: "fill 0.5s",
                fill: A
            }).html('<svg class="lunaradiopauseicon" x="0px" y="0px" viewBox="0 0 800 800" ><path d="M86.3,400.7C84.8,229.1,226.5,86.7,400.6,87c172.9,0.3,313.7,142.5,313.1,314.8c-0.6,170.5-138.2,313.3-314.4,313.1\tC224.3,714.7,84.9,572.1,86.3,400.7z M378.8,400.8C378.8,400.8,378.7,400.8,378.8,400.8c-0.1-32.6-0.5-65.3,0.2-97.9\tc0.3-13.7-10.3-23.4-22.7-22.8c-18.3,0.8-36.6,0.2-54.8,0.2c-13.9,0-22.1,8.1-22.1,21.9c0,65.7,0.2,131.4-0.2,197.1\tc-0.1,12.6,9.2,22.6,22.4,22.2c18.4-0.6,36.9-0.5,55.3,0c12.1,0.3,22.2-7.4,22-21.9C378.6,466.7,378.8,433.8,378.8,400.8z\t M420.9,400.8C420.9,400.8,420.9,400.8,420.9,400.8c0.1,33.1,0,66.1,0.1,99.2c0,13.8,7.7,21.4,21.5,21.4c18.8,0,37.7-0.3,56.5,0.1\tc12.3,0.3,21.6-9.6,21.5-21.4c-0.2-66.1-0.1-132.2-0.1-198.3c0-13.3-8.2-21.4-21.7-21.5c-18.6,0-37.2,0.5-55.7-0.2\tc-12-0.5-22.5,9.2-22.3,22C421.2,335,420.9,367.9,420.9,400.8z"/></svg>').on("mouseenter",
                function() {
                    d(this).css("fill", u)
                }).on("mouseleave", function() {
                d(this).css("fill", A)
            }).fadeOut(0).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "audiopreloader";
            a.appendChild(b);
            d("#" + c + "audiopreloader").css({
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                fill: A
            }).html('<svg x="0px" y="0px" viewBox="5 5 40 40"><path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" transform="rotate(39.9522 25 25)"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform></path></svg>').fadeOut(0).lunaradiodisableSelection()
        }

        function wb(b) {
            var a = document.createElement("div");//efecto blur OFICIAL
           a.id = c + "backgroundimage";
            b.appendChild(a);
            d("#" + c + "backgroundimage").css({
                position: "absolute",
                left: "0px !important",
                top: "0px",
                height: "100%",
                width: "100%",
                opacity: "1.0"                 
            }); 
            
            b = document.createElement("div");
            b.id = c + "backgroundimage1";
            a.appendChild(b);
            d("#" + c + "backgroundimage1").css({
                position: "absolute",
                left: "0px",
                top: "0px",
                height: "100%",
                width: "100%",
                transition: "opacity 1s",
                opacity: "0.0",
                "background-repeat": "no-repeat",
                "background-size": "cover"
            });
            b = document.createElement("div");
            b.id = c + "backgroundimage2";
            a.appendChild(b);
            d("#" + c + "backgroundimage2").css({
                position: "absolute",
                left: "0px",
                top: "0px",
                height: "100%",
                width: "100%",
                transition: "opacity 1s",
                opacity: "0.0",
                "background-repeat": "no-repeat",
                "background-size": "cover"
            })
        }

        function Kb(b) {
            var a = document.createElement("div");
            a.id = c + "coverwrapper";
            b.appendChild(a);
            d("#" + c + "coverwrapper").css({
                position: "absolute",
                overflow: "hidden",
                background: "rgba(" + f(A).r + ", " + f(A).g + ", " +
                    f(A).b + ", 0.1)",
                "-webkit-box-sizing": "border-box",
                "-moz-box-sizing": "border-box",
                "box-sizing": "border-box"
            }).on("click", function() {
                "" != ya && window.open(ya)
            }).lunaradiodisableSelection();
            n = document.createElement("div");
            n.id = c + "coverwrapper1";
            a.appendChild(n);
            d("#" + c + "coverwrapper1").css({
                position: "absolute",
                left: "0px",
                top: "0px",
                height: "100%",
                width: "100%",
                overflow: "hidden",
                transition: "opacity 1s",
                opacity: "0.0",
                "background-repeat": "no-repeat",
                "background-size": "cover"
            });
            n = document.createElement("div");
            n.id = c + "coverwrapper2";
            a.appendChild(n);
            d("#" + c + "coverwrapper2").css({
                position: "absolute",
                left: "0px",
                top: "0px",
                height: "100%",
                width: "100%",
                overflow: "hidden",
                transition: "opacity 1s",
                opacity: "0.0",
                "background-repeat": "no-repeat",
                "background-size": "cover"
            });
            "circle" == Na && (d("#" + c + "coverwrapper, #" + c + "coverwrapper1, #" + c + "coverwrapper2").css({
                "border-radius": "50%"
            }), d("#" + c + "backgroundimage, #" + c + "backgroundimage1, #" + c + "backgroundimage2").css({
                "border-radius": "50%"
            }))
        }

        function Mb(b) {
            var a = document.createElement("div");
            a.id = c + "volumewrapper";
            b.appendChild(a);
            d("#" + c + "volumewrapper").css({
                position: "absolute"
            }).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "volumebackground";
            a.appendChild(b);
            d("#" + c + "volumebackground").css({
                position: "absolute",
                width: "100%",
                background: A
            }).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "volumefill";
            a.appendChild(b);
            d("#" + c + "volumefill").css({
                position: "absolute",
                width: "0",
                background: u
            }).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "volumeicon";
            a.appendChild(b);
            d("#" + c + "volumeicon").css({
                position: "absolute",
                top: "0px",
                "border-radius": "50%",
                background: u
            }).lunaradiodisableSelection();
            b = document.createElement("img");
            b.id = c + "volumegrab";
            a.appendChild(b);
            b.src = "data:image/gif;base64,R0lGODlhAQABAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAABAAEAAAICVAEAOw%3D%3D";
            d("#" + c + "volumegrab").css({
                position: "absolute",
                top: "0px",
                left: "0px",
                cursor: "pointer",
                height: "100%",
                width: "100%",
                padding: "0",
                margin: "0"
            }).mouseover(function(h) {
                d(this).css("cursor",
                    "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAALlSURBVEiJxZe9bhNBEMd/5zsSkhjs0Fi0SYG7CAmltQUpeAGeISmTB6CFSOQFkoKOwqJAQAQNCCHyIUs0KYAiEmUaQ2GshORuPyhu196c95wLSHik0a3v7P3Nf2Zudx1orRmHlcZCHSc48t0MgqDIbwPjANr4SHPL6gWPsJIDe2k+PwAUIIwXaxqt9ZB7LAC2gTfANeCtNga8A24CVeAqEDrB5bKKgrctaHNzU5fLZe2Aj42/B2omsEkTQC64SHOVgMaI54GUcjqO47vAd+AFcB2YAq7kqS8K9ppSCiAQQiCEAAi63e494DkwC0yT9tEQvAjY7V7m5+cBkFJaGEmS9MFCCDqdTgN4Rlr3aTxpLwLWwMOtrS0Ams0mjUZjCGaDcMZ3gBvADJ6UFwU/XV5ePraTKqXIgbnjgLTWFnyOVeQ91qTvJ0mSoJSi1Wr1A7AwKWVfvRlD2t0TeFI9Cmxr238vLUwphZQSKSVHR0eTLiwDDo1Sd+GBrPyMvQa6wCvSBumn0dbXNpj1w8PDSaf2Nniv5SkuAY1er1dWSt2vVCotTBqtWt/VHRvLXT7zFAfAjlXU6XSaFmwV+dw+29vbA/hGuoYrPJtIbqqjKFqvVqsf7KRLS0tTPojPV1ZWDhg0pTTwQoq1EOJzGIYbtVrtU5IkrK6uemG+e8At4BEQG5dZxXk1VkAipWwDQghBvV4nW2Nfndvttp0jBk6BMzzb5aiuFsBJFEXrc3NzH0fV1PW1tbUD4Ou/gBUQCyH2wzB8Uq/Xdy5qKifNjw30FEi4RI1d+JmUcj8Mw42FhYVdC8mrt7EY+G089oEvWjJtZ55IKXfDMAwWFxdvk9mxMvbFAE/ISTNA4DtxeA57JdJ1d4Z0n50FyqTrsJs1TarwF/AD+El6OpHwd4c9ZaLXzthu8lmwIFXcM98bSjMUV2ytZGAT5jq06zA4ccYMFpA0Kod1WTAM6juqzjYz5ya/EPw/bGx/Yf4AHxykPX4eCXQAAAAASUVORK5CYII%3D), auto")
            }).lunaradiograb({
                onstart: function(h) {
                    d(this).css("cursor",
                        "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAAKmSURBVEiJ7ZbPaxNBFMc/m4lttYtNBem9F3MrgvRawR78C/wbemz/CS3Yf8OLXgQ9KAgi9gcBLz2oh0IOhfZSLdUkTZN9s+NhZtpNdrJZFeyhDgzz2GTn8977vnmzkTGGyxiVS6H+B18JcDX0MIqiMu9GbgKYoTU4sicoCC4BU8BLZz8CUkC7mToHis+pMSY3C6CvgRbwRkRMr9czwDugDbwFbgExMOmcG8kqC47iODbGGCMiJo5j0+12TafTMUDn5OTEHB8fG6DjHLntHLjGhRwDjLLFFbXb7baIICIAZOxKxo4ODg4eAC+AWeAGVs5c0ZQFK4AkSUJgRIQkSQAiEaHZbC4Bz4Cag+fSXlRcvpAq3msRIU1T9vf3ERG01hweHk552zvh7HtYzROgjy28cx2LIn4F/HBrnI3SR661Pn8mIuzt7U1lshIBN4FprNYDrFERV4ClVqsVp2n6cGZm5nk2Yq11cM3abkw6aC7VoyKOgE0f0dHR0X0P9hGFpv9te3sb4CuDTaYUmGq1ul6r1d77TZeXl6+HIKG5srKyi9VTGNJ2HNiIyCel1Mbc3NzHJElYXV0NwkLPgDvAY2xR5QoLRmucAonWugGIiFCv1xnWOKRzo9Hwe/SBM6DnIh8AF1W1AKfVanV9fn7+Q5Gm2bm2trYLfPkbcAr0RWRHKfW0Xq9vjiuqTJqfOOgZ9hynw5uP61wp0NNa7yilNhYWFrY8ZJTebvSBrpv9EHjctegr81RrvaWUihYXF+9ScEyAzw54yog0A0Sh2yjwIVDBNoNpbPOfxXazCQazZrAR/gS+Ad+xN5aGP/sQSJ33JmP7m2cYLNiIW+5/uTRD+Yj98BfGhFtzrdCBBBu5byDWqwzrd8FwoW+Rzj4zA5uPBf+LcfW+q38BmqVkrsNuDnIAAAAASUVORK5CYII%3D), auto");
                    la = S
                },
                onmove: function(h) {
                    h = 100 * h.offset.x / d("#" + c + "volumewrapper").width();
                    S = 100 > la + h ? la + h : 100;
                    0 > la + h && (S = 0);
                    za(S)
                },
                onfinish: function(h) {
                    d(this).css("cursor", "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAALlSURBVEiJxZe9bhNBEMd/5zsSkhjs0Fi0SYG7CAmltQUpeAGeISmTB6CFSOQFkoKOwqJAQAQNCCHyIUs0KYAiEmUaQ2GshORuPyhu196c95wLSHik0a3v7P3Nf2Zudx1orRmHlcZCHSc48t0MgqDIbwPjANr4SHPL6gWPsJIDe2k+PwAUIIwXaxqt9ZB7LAC2gTfANeCtNga8A24CVeAqEDrB5bKKgrctaHNzU5fLZe2Aj42/B2omsEkTQC64SHOVgMaI54GUcjqO47vAd+AFcB2YAq7kqS8K9ppSCiAQQiCEAAi63e494DkwC0yT9tEQvAjY7V7m5+cBkFJaGEmS9MFCCDqdTgN4Rlr3aTxpLwLWwMOtrS0Ams0mjUZjCGaDcMZ3gBvADJ6UFwU/XV5ePraTKqXIgbnjgLTWFnyOVeQ91qTvJ0mSoJSi1Wr1A7AwKWVfvRlD2t0TeFI9Cmxr238vLUwphZQSKSVHR0eTLiwDDo1Sd+GBrPyMvQa6wCvSBumn0dbXNpj1w8PDSaf2Nniv5SkuAY1er1dWSt2vVCotTBqtWt/VHRvLXT7zFAfAjlXU6XSaFmwV+dw+29vbA/hGuoYrPJtIbqqjKFqvVqsf7KRLS0tTPojPV1ZWDhg0pTTwQoq1EOJzGIYbtVrtU5IkrK6uemG+e8At4BEQG5dZxXk1VkAipWwDQghBvV4nW2Nfndvttp0jBk6BMzzb5aiuFsBJFEXrc3NzH0fV1PW1tbUD4Ou/gBUQCyH2wzB8Uq/Xdy5qKifNjw30FEi4RI1d+JmUcj8Mw42FhYVdC8mrt7EY+G089oEvWjJtZ55IKXfDMAwWFxdvk9mxMvbFAE/ISTNA4DtxeA57JdJ1d4Z0n50FyqTrsJs1TarwF/AD+El6OpHwd4c9ZaLXzthu8lmwIFXcM98bSjMUV2ytZGAT5jq06zA4ccYMFpA0Kod1WTAM6juqzjYz5ya/EPw/bGx/Yf4AHxykPX4eCXQAAAAASUVORK5CYII%3D), auto");
                    try {
                        window.localStorage.removeItem(c + "volume"), window.localStorage.setItem(c + "volume", S)
                    } catch (p) {
                        w(p)
                    }
                }
            })
        }

        function zb(b) {
            w("iniSmallPlayer");
            var a = document.createElement("div");
            a.id = c + "smallplayerwrapper";
            b.appendChild(a);
            d("#" + c + "smallplayerwrapper").css({
                overflow: "hidden",
                position: "absolute",
                left: "0px",
                top: "0px",
                height: "100%",
                width: "100%"
            });
            b = document.createElement("div");
            b.id = c + "smallvolumebackground";
            a.appendChild(b);
            d("#" + c + "smallvolumebackground").css({
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                background: "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.5)"
            }).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "smalliconlive";
            a.appendChild(b);
            d("#" + c + "smalliconlive").css({
                position: "absolute",
                fill: "rgba(" + f(A).r + ", " + f(A).g + ", " + f(A).b + ", 0.3)"
            }).html('<svg class="lunaradioliveicon" x="0px" y="0px" viewBox="-16 0 512 512.00113" ><path d="m262.84375 140.558594c-12.699219 12.671875-33.28125 12.671875-45.980469 0-12.695312-12.671875-12.695312-33.21875 0-45.890625 12.699219-12.671875 33.28125-12.671875 45.980469 0 12.695312 12.671875 12.695312 33.21875 0 45.890625zm0 0"/><path d="m307.257812 189.726562c-3.960937 0-7.921874-1.511718-10.9375-4.539062-6.03125-6.039062-6.019531-15.824219.019532-21.851562 12.238281-12.214844 18.976562-28.453126 18.976562-45.722657s-6.738281-33.507812-18.976562-45.722656c-6.039063-6.03125-6.050782-15.8125-.019532-21.855469 6.027344-6.039062 15.8125-6.050781 21.851563-.019531 18.089844 18.054687 28.050781 42.058594 28.050781 67.597656 0 25.535157-9.960937 49.542969-28.050781 67.597657-3.015625 3.011718-6.964844 4.515624-10.914063 4.515624zm0 0"/><path d="m342.210938 235.222656c-3.960938 0-7.921876-1.511718-10.9375-4.535156-6.03125-6.042969-6.019532-15.824219.019531-21.855469 24.414062-24.367187 37.863281-56.761719 37.863281-91.21875s-13.449219-66.851562-37.863281-91.21875c-6.039063-6.03125-6.050781-15.8125-.019531-21.855469 6.03125-6.039062 15.8125-6.050781 21.851562-.019531 30.265625 30.207031 46.9375 70.371094 46.933594 113.09375 0 42.722657-16.667969 82.890625-46.933594 113.097657-3.015625 3.007812-6.964844 4.511718-10.914062 4.511718zm0 0"/><path d="m172.371094 189.726562c-3.949219 0-7.898438-1.503906-10.917969-4.515624-18.089844-18.054688-28.050781-42.0625-28.050781-67.597657 0-25.539062 9.960937-49.542969 28.050781-67.597656 6.039063-6.03125 15.824219-6.023437 21.851563.019531 6.03125 6.039063 6.019531 15.824219-.019532 21.855469-12.238281 12.214844-18.976562 28.453125-18.976562 45.722656s6.738281 33.507813 18.976562 45.722657c6.039063 6.027343 6.050782 15.8125.019532 21.851562-3.015626 3.023438-6.976563 4.539062-10.933594 4.539062zm0 0"/><path d="m137.417969 235.222656c-3.953125 0-7.902344-1.503906-10.917969-4.515625-30.265625-30.207031-46.933594-70.371093-46.933594-113.09375 0-42.726562 16.667969-82.890625 46.933594-113.097656 6.039062-6.027344 15.824219-6.019531 21.851562.023437 6.03125 6.039063 6.019532 15.820313-.019531 21.851563-24.414062 24.367187-37.863281 56.761719-37.863281 91.21875s13.449219 66.855469 37.863281 91.222656c6.039063 6.03125 6.050781 15.8125.019531 21.855469-3.015624 3.023438-6.976562 4.535156-10.933593 4.535156zm0 0"/><path d="m443.480469 261.9375h-407.332031c-19.964844 0-36.148438 16.183594-36.148438 36.144531v177.769531c0 19.964844 16.183594 36.148438 36.148438 36.148438h407.328124c19.964844 0 36.148438-16.183594 36.148438-36.148438v-177.769531c0-19.960937-16.183594-36.144531-36.144531-36.144531zm-324.609375 203.683594h-56.933594c-8.53125 0-15.449219-6.917969-15.449219-15.453125v-126.398438c0-8.53125 6.917969-15.453125 15.449219-15.453125 8.535156 0 15.453125 6.917969 15.453125 15.453125v110.945313h41.480469c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.535156-6.917969 15.453125-15.453125 15.453125zm63.328125-15.453125c0 8.535156-6.917969 15.453125-15.453125 15.453125s-15.453125-6.917969-15.453125-15.453125v-126.398438c0-8.53125 6.917969-15.453125 15.453125-15.453125s15.453125 6.917969 15.453125 15.453125zm130.015625-121.929688-38.160156 126.394531c-.003907.011719-.007813.023438-.011719.035157-4.144531 14.144531-25.273438 13.796875-29.5625 0-.003907-.011719-.007813-.023438-.011719-.035157l-38.160156-126.394531c-2.464844-8.171875 2.15625-16.792969 10.328125-19.261719 8.164062-2.464843 16.792969 2.15625 19.257812 10.328126l23.367188 77.394531 23.367187-77.394531c2.46875-8.171876 11.089844-12.796876 19.261719-10.328126 8.167969 2.46875 12.792969 11.089844 10.324219 19.261719zm95.066406 35.320313c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.53125-6.917969 15.453125-15.453125 15.453125h-43.851562v40.25h52.175781c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.535156-6.917969 15.453125-15.453125 15.453125h-67.628907c-8.535156 0-15.453124-6.917969-15.453124-15.453125v-126.398438c0-8.53125 6.917968-15.453125 15.453124-15.453125h69.710938c8.53125 0 15.453125 6.917969 15.453125 15.453125 0 8.535157-6.921875 15.453125-15.453125 15.453125h-54.261719v24.335938zm0 0"/></svg>').lunaradiodisableSelection();
            "false" == nb && d("#" + c + "smalliconlive").css({
                display: "none"
            });
            b = document.createElement("div");
            b.id = c + "smalltextvolume";
            a.appendChild(b);
            d("#" + c + "smalltextvolume").css({
                position: "absolute",
                "text-align": "right",
                "font-family": "Roboto",
                color: "rgba(" + f(A).r + ", " + f(A).g + ", " + f(A).b + ", 0.3)"
            }).html("100").lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "smalliconvolume";
            a.appendChild(b);
            d("#" + c + "smalliconvolume").css({
                position: "absolute",
                fill: "rgba(" + f(A).r + ", " + f(A).g + ", " + f(A).b + ", 0.3)"
            }).html('<svg class="lunaradiovolumeonicon" x="0px" y="0px" viewBox="0 0 800 800"><path d="M359.2,397.1c0,71.7,0,143.3,0,215c0,9.1-1.2,17.7-7.7,24.8c-13.8,14.9-34.2,15.1-49.1,0.3c-32.2-32.1-64.3-64.3-96.4-96.4\tc-4.8-4.8-9.8-9.6-14.5-14.6c-2.6-2.8-5.3-3.9-9.1-3.9c-42.4,0.1-84.8,0.1-127.1,0.1c-15.4,0-27.1-8.9-31.2-23.6\tc-1.1-4.1-1.4-8.3-1.4-12.5c0-60,0-120,0-180c0-14.4,4.6-26.3,18.5-32.9c5.1-2.4,10.6-3.1,16.1-3.1c41.5,0,83,0,124.5,0.1\tc4.2,0,7.1-1.2,9.9-4.1c36.8-36.9,73.6-73.8,110.6-110.6c10.5-10.5,23.1-14.1,37.2-8.3c11.2,4.6,17.9,13.1,19.1,25.5\tc0.5,5.1,0.6,10.2,0.6,15.3C359.2,257.5,359.2,327.3,359.2,397.1z"/><path d="M777.4,394.2c-0.2,41.1-5.6,79-17.7,115.8c-14.5,44.1-36,84.5-65.7,120.4c-9.1,11-18.2,22-28.8,31.6\tc-18.1,16.5-36.4,32.7-57.7,44.9c-19.1,10.9-43.9-1.6-46.9-23.4c-2-14.2,3.3-25.2,14.9-32.9c20.8-13.9,39.6-30.1,56.6-48.4\tc14.9-16,27.8-33.6,38.9-52.5c18.2-31,30.2-64.2,36.7-99.4c3.8-20.4,5.4-41,4.8-61.7c-1.2-42.3-10.6-82.8-28.5-121.1\tc-11.2-23.9-25.5-46-42.4-66.4c-19.8-23.8-43.3-43.3-68.4-61.2c-12.4-8.9-16.3-23.7-10.8-38.1c5.1-13.3,17.6-20.8,32.5-19.9\tc6.1,0.4,11.3,2.4,16.3,5.6c21.2,13.8,40.9,29.5,58.5,47.5c34.5,35.1,61.6,75.3,80.2,121.1c13.4,33,22,67.1,25.4,102.5\tC776.7,371.4,776.9,384.1,777.4,394.2z"/><path d="M652.1,392.3c-0.7,56.6-15.7,104.9-47.2,147.9c-17.4,23.7-38.4,43.6-63.2,59.5c-14.3,9.1-29.1,8.5-41-2\tc-11.9-10.5-13.8-29.9-4.5-42.9c3.9-5.5,9.5-8.9,14.8-12.6c35.3-24.8,59.1-57.9,70.4-99.4c10.8-39.8,8-78.9-8.4-116.9\tc-9.9-22.8-24-42.5-41.9-59.5c-8.8-8.4-18.8-15.1-28.6-22.1c-11-7.9-15.3-24.6-9.9-37.3c6.2-14.7,19.2-22,34-20.1\tc11.1,1.5,19.2,8.3,27.5,14.4c10.7,7.8,20.8,16.3,29.9,26.1c19.7,21.3,36.2,44.6,47.8,71.4c9.2,21.3,15.2,43.4,18.3,66.3\tC651.3,375.2,651.6,385.5,652.1,392.3z"/><path d="M526.4,394.8c-0.1,30.3-9.9,54.9-27.8,76.5c-9,10.8-19.7,19.4-32.1,25.8c-21.2,11-44.2-0.7-47.6-24.3\tc-1.7-12.2,3.1-22.4,13.1-29.5c7.1-5.1,14.6-9.7,19.8-16.9c17.6-24.1,12-55.7-12.8-72.4c-3.4-2.3-7-4.3-9.9-7.1\tc-12.5-11.6-14.1-29.7-4.1-43.1c10-13.3,28-16.9,42.6-8.2c31.6,18.7,51,46.1,57.3,82.4C526.1,384.3,526.7,390.6,526.4,394.8z"/></svg>').lunaradiodisableSelection();
            b = document.createElement("span");
            b.classList.add(c + "smalltextradionamespan");
            a.appendChild(b);
            d("." + c + "smalltextradionamespan").css({
                "padding-right": "30px",
                margin: "0",
                "white-space": "nowrap",
                "font-family": ka,
                color: A
            }).html(ob);
            b = document.createElement("div");
            b.id = c + "smalltextradioname";
            b.dataset.speed = .5;
            b.dataset.reverse = !0;
            a.appendChild(b);
            d("#" + c + "smalltextradioname").css({
                position: "absolute",
                overflow: "hidden",
                padding: "0 0 10px 0",
                "white-space": "nowrap",
                "text-align": "left",
                "font-family": ka,
                color: A
            }).addClass(c +
                "smalltextradioname").html(d("." + c + "smalltextradionamespan")).lunaradiodisableSelection();
            "true" != Da && d("#" + c + "smalltextradioname").css({
                "text-overflow": "ellipsis"
            });
            b = document.createElement("span");
            b.classList.add(c + "smalltexttitlespan");
            a.appendChild(b);
            d("." + c + "smalltexttitlespan").css({
                "padding-right": "30px",
                margin: "0",
                "white-space": "nowrap",
                "font-family": ka,
                color: A
            }).html("");
            b = document.createElement("div");
            b.id = c + "smalltexttitle";
            b.dataset.speed = .7;
            a.appendChild(b);
            d("#" + c + "smalltexttitle").css({
                position: "absolute",
                overflow: "hidden",
                padding: "0 0 10px 0",
                "white-space": "nowrap",
                "text-align": "left",
                "font-family": ka,
                color: A
            }).addClass(c + "smalltexttitle").html(d("." + c + "smalltexttitlespan")).lunaradiodisableSelection();
            "true" != Da && d("#" + c + "smalltexttitle").css({
                "text-overflow": "ellipsis"
            });
            b = document.createElement("div");
            b.id = c + "smallvolumegrab";
            a.appendChild(b);
            d("#" + c + "smallvolumegrab").css({
                position: "absolute",
                top: "0px",
                left: "0px",
                cursor: "pointer",
                height: "100%",
                width: "100%",
                padding: "0",
                margin: "0"
            }).mouseover(function(h) {
                d(this).css("cursor",
                    "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAALlSURBVEiJxZe9bhNBEMd/5zsSkhjs0Fi0SYG7CAmltQUpeAGeISmTB6CFSOQFkoKOwqJAQAQNCCHyIUs0KYAiEmUaQ2GshORuPyhu196c95wLSHik0a3v7P3Nf2Zudx1orRmHlcZCHSc48t0MgqDIbwPjANr4SHPL6gWPsJIDe2k+PwAUIIwXaxqt9ZB7LAC2gTfANeCtNga8A24CVeAqEDrB5bKKgrctaHNzU5fLZe2Aj42/B2omsEkTQC64SHOVgMaI54GUcjqO47vAd+AFcB2YAq7kqS8K9ppSCiAQQiCEAAi63e494DkwC0yT9tEQvAjY7V7m5+cBkFJaGEmS9MFCCDqdTgN4Rlr3aTxpLwLWwMOtrS0Ams0mjUZjCGaDcMZ3gBvADJ6UFwU/XV5ePraTKqXIgbnjgLTWFnyOVeQ91qTvJ0mSoJSi1Wr1A7AwKWVfvRlD2t0TeFI9Cmxr238vLUwphZQSKSVHR0eTLiwDDo1Sd+GBrPyMvQa6wCvSBumn0dbXNpj1w8PDSaf2Nniv5SkuAY1er1dWSt2vVCotTBqtWt/VHRvLXT7zFAfAjlXU6XSaFmwV+dw+29vbA/hGuoYrPJtIbqqjKFqvVqsf7KRLS0tTPojPV1ZWDhg0pTTwQoq1EOJzGIYbtVrtU5IkrK6uemG+e8At4BEQG5dZxXk1VkAipWwDQghBvV4nW2Nfndvttp0jBk6BMzzb5aiuFsBJFEXrc3NzH0fV1PW1tbUD4Ou/gBUQCyH2wzB8Uq/Xdy5qKifNjw30FEi4RI1d+JmUcj8Mw42FhYVdC8mrt7EY+G089oEvWjJtZ55IKXfDMAwWFxdvk9mxMvbFAE/ISTNA4DtxeA57JdJ1d4Z0n50FyqTrsJs1TarwF/AD+El6OpHwd4c9ZaLXzthu8lmwIFXcM98bSjMUV2ytZGAT5jq06zA4ccYMFpA0Kod1WTAM6juqzjYz5ya/EPw/bGx/Yf4AHxykPX4eCXQAAAAASUVORK5CYII%3D), auto")
            }).lunaradiograb({
                onstart: function(h) {
                    d(this).css("cursor",
                        "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAAKmSURBVEiJ7ZbPaxNBFMc/m4lttYtNBem9F3MrgvRawR78C/wbemz/CS3Yf8OLXgQ9KAgi9gcBLz2oh0IOhfZSLdUkTZN9s+NhZtpNdrJZFeyhDgzz2GTn8977vnmzkTGGyxiVS6H+B18JcDX0MIqiMu9GbgKYoTU4sicoCC4BU8BLZz8CUkC7mToHis+pMSY3C6CvgRbwRkRMr9czwDugDbwFbgExMOmcG8kqC47iODbGGCMiJo5j0+12TafTMUDn5OTEHB8fG6DjHLntHLjGhRwDjLLFFbXb7baIICIAZOxKxo4ODg4eAC+AWeAGVs5c0ZQFK4AkSUJgRIQkSQAiEaHZbC4Bz4Cag+fSXlRcvpAq3msRIU1T9vf3ERG01hweHk552zvh7HtYzROgjy28cx2LIn4F/HBrnI3SR661Pn8mIuzt7U1lshIBN4FprNYDrFERV4ClVqsVp2n6cGZm5nk2Yq11cM3abkw6aC7VoyKOgE0f0dHR0X0P9hGFpv9te3sb4CuDTaYUmGq1ul6r1d77TZeXl6+HIKG5srKyi9VTGNJ2HNiIyCel1Mbc3NzHJElYXV0NwkLPgDvAY2xR5QoLRmucAonWugGIiFCv1xnWOKRzo9Hwe/SBM6DnIh8AF1W1AKfVanV9fn7+Q5Gm2bm2trYLfPkbcAr0RWRHKfW0Xq9vjiuqTJqfOOgZ9hynw5uP61wp0NNa7yilNhYWFrY8ZJTebvSBrpv9EHjctegr81RrvaWUihYXF+9ScEyAzw54yog0A0Sh2yjwIVDBNoNpbPOfxXazCQazZrAR/gS+Ad+xN5aGP/sQSJ33JmP7m2cYLNiIW+5/uTRD+Yj98BfGhFtzrdCBBBu5byDWqwzrd8FwoW+Rzj4zA5uPBf+LcfW+q38BmqVkrsNuDnIAAAAASUVORK5CYII%3D), auto");
                    la = S
                },
                onmove: function(h) {
                    h = 100 * h.offset.x / d("#" + c + "smallvolumegrab").width();
                    S = 100 > la + h ? la + h : 100;
                    0 > la + h && (S = 0);
                    Oa(S)
                },
                onfinish: function(h) {
                    d(this).css("cursor", "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAALlSURBVEiJxZe9bhNBEMd/5zsSkhjs0Fi0SYG7CAmltQUpeAGeISmTB6CFSOQFkoKOwqJAQAQNCCHyIUs0KYAiEmUaQ2GshORuPyhu196c95wLSHik0a3v7P3Nf2Zudx1orRmHlcZCHSc48t0MgqDIbwPjANr4SHPL6gWPsJIDe2k+PwAUIIwXaxqt9ZB7LAC2gTfANeCtNga8A24CVeAqEDrB5bKKgrctaHNzU5fLZe2Aj42/B2omsEkTQC64SHOVgMaI54GUcjqO47vAd+AFcB2YAq7kqS8K9ppSCiAQQiCEAAi63e494DkwC0yT9tEQvAjY7V7m5+cBkFJaGEmS9MFCCDqdTgN4Rlr3aTxpLwLWwMOtrS0Ams0mjUZjCGaDcMZ3gBvADJ6UFwU/XV5ePraTKqXIgbnjgLTWFnyOVeQ91qTvJ0mSoJSi1Wr1A7AwKWVfvRlD2t0TeFI9Cmxr238vLUwphZQSKSVHR0eTLiwDDo1Sd+GBrPyMvQa6wCvSBumn0dbXNpj1w8PDSaf2Nniv5SkuAY1er1dWSt2vVCotTBqtWt/VHRvLXT7zFAfAjlXU6XSaFmwV+dw+29vbA/hGuoYrPJtIbqqjKFqvVqsf7KRLS0tTPojPV1ZWDhg0pTTwQoq1EOJzGIYbtVrtU5IkrK6uemG+e8At4BEQG5dZxXk1VkAipWwDQghBvV4nW2Nfndvttp0jBk6BMzzb5aiuFsBJFEXrc3NzH0fV1PW1tbUD4Ou/gBUQCyH2wzB8Uq/Xdy5qKifNjw30FEi4RI1d+JmUcj8Mw42FhYVdC8mrt7EY+G089oEvWjJtZ55IKXfDMAwWFxdvk9mxMvbFAE/ISTNA4DtxeA57JdJ1d4Z0n50FyqTrsJs1TarwF/AD+El6OpHwd4c9ZaLXzthu8lmwIFXcM98bSjMUV2ytZGAT5jq06zA4ccYMFpA0Kod1WTAM6juqzjYz5ya/EPw/bGx/Yf4AHxykPX4eCXQAAAAASUVORK5CYII%3D), auto");
                    try {
                        window.localStorage.removeItem(c + "volume"), window.localStorage.setItem(c + "volume", S)
                    } catch (p) {
                        w(p)
                    }
                }
            }).lunaradiodisableSelection();
            Ob(a);
            Pb(a);
            ba() ? (S = 100, za(100)) : Qb(Ra)
        }

        function Pb(b) {
            var a = document.createElement("div");
            a.id = c + "smallcoverwrapper";
            b.appendChild(a);
            d("#" + c + "smallcoverwrapper").css({
                position: "absolute",
                overflow: "hidden",
                background: "rgba(" + f(A).r + ", " + f(A).g + ", " + f(A).b + ", 0.1)"
            }).on("click", function() {
                "" != ya && window.open(ya)
            }).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "smallcoverwrapper1";
            a.appendChild(b);
            d("#" + c + "smallcoverwrapper1").css({
                position: "absolute",
                left: "0px",
                top: "0px",
                height: "100%",
                width: "100%",
                transition: "opacity 1s",
                overflow: "hidden",
                opacity: "0.0",
                "background-repeat": "no-repeat",
                "background-size": "cover"
            });
            b = document.createElement("div");
            b.id = c + "smallcoverwrapper2";
            a.appendChild(b);
            d("#" + c + "smallcoverwrapper2").css({
                position: "absolute",
                left: "0px",
                top: "0px",
                height: "100%",
                width: "100%",
                overflow: "hidden",
                transition: "opacity 1s",
                opacity: "0.0",
                "background-repeat": "no-repeat",
                "background-size": "cover"
            });
            "circle" == Na && d("#" + c + "smallcoverwrapper, #" + c + "smallcoverwrapper1, #" + c + "smallcoverwrapper2").css({
                "border-radius": "50%"
            })
        }

        function Ob(b) {
            var a = document.createElement("div");
            a.id = c + "smallpauseplaywrapper";
            b.appendChild(a);
            d("#" + c + "smallpauseplaywrapper").css({
                position: "absolute",
                cursor: "pointer"
            }).on("click", function() {
                pb();
                Y ? Ya() : Ja()
            }).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "smallbuttonplay";
            a.appendChild(b);
            d("#" + c + "smallbuttonplay").css({
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                transition: "fill 0.5s",
                fill: A
            }).html('<svg class="lunaradioplayicon" x="0px" y="0px"\t viewBox="0 0 800 800" ><path d="M713.9,400.5c1.4,171.2-137.8,314.4-313.9,314.3c-175.6,0-314.2-143-314-315c0.2-171.3,140.6-313.9,315-313.4\tC574,87,715.4,228.9,713.9,400.5z M279.5,400.3c0,23.1,0,46.2,0,69.3c0,20.8-0.2,41.7,0.1,62.5c0.1,12.2,6,21.1,17,26.6\tc11,5.5,21.2,3,31.2-2.9c23.3-13.6,46.8-27,70.2-40.5c49.8-28.6,99.6-57.1,149.3-85.8c18.1-10.4,18.7-38.7,1.1-49.4\tc-74.5-45.4-149-90.8-223.5-136.1c-6-3.7-12.6-5.5-19.8-4.2c-15.7,2.9-25.5,14.4-25.5,30.5C279.4,313.6,279.5,357,279.5,400.3z"/></svg>').on("mouseenter",
                function() {
                    d(this).css("fill", u)
                }).on("mouseleave", function() {
                d(this).css("fill", A)
            }).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "smallbuttonpause";
            a.appendChild(b);
            d("#" + c + "smallbuttonpause").css({
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                transition: "fill 0.5s",
                fill: A
            }).html('<svg class="lunaradiopauseicon" x="0px" y="0px" viewBox="0 0 800 800" ><path d="M86.3,400.7C84.8,229.1,226.5,86.7,400.6,87c172.9,0.3,313.7,142.5,313.1,314.8c-0.6,170.5-138.2,313.3-314.4,313.1\tC224.3,714.7,84.9,572.1,86.3,400.7z M378.8,400.8C378.8,400.8,378.7,400.8,378.8,400.8c-0.1-32.6-0.5-65.3,0.2-97.9\tc0.3-13.7-10.3-23.4-22.7-22.8c-18.3,0.8-36.6,0.2-54.8,0.2c-13.9,0-22.1,8.1-22.1,21.9c0,65.7,0.2,131.4-0.2,197.1\tc-0.1,12.6,9.2,22.6,22.4,22.2c18.4-0.6,36.9-0.5,55.3,0c12.1,0.3,22.2-7.4,22-21.9C378.6,466.7,378.8,433.8,378.8,400.8z\t M420.9,400.8C420.9,400.8,420.9,400.8,420.9,400.8c0.1,33.1,0,66.1,0.1,99.2c0,13.8,7.7,21.4,21.5,21.4c18.8,0,37.7-0.3,56.5,0.1\tc12.3,0.3,21.6-9.6,21.5-21.4c-0.2-66.1-0.1-132.2-0.1-198.3c0-13.3-8.2-21.4-21.7-21.5c-18.6,0-37.2,0.5-55.7-0.2\tc-12-0.5-22.5,9.2-22.3,22C421.2,335,420.9,367.9,420.9,400.8z"/></svg>').on("mouseenter",
                function() {
                    d(this).css("fill", u)
                }).on("mouseleave", function() {
                d(this).css("fill", A)
            }).fadeOut(0).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "smallaudiopreloader";
            a.appendChild(b);
            d("#" + c + "smallaudiopreloader").css({
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                fill: A
            }).html('<svg x="0px" y="0px" viewBox="5 5 40 40"><path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" transform="rotate(39.9522 25 25)"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform></path></svg>').fadeOut(0).lunaradiodisableSelection()
        }

        function za(b) {
            0 > b && (b = 0);
            100 < b && (b = 100);
            ba() || (F.volume = b / 100);
            var a = d("#" + c + "volumewrapper").width() * b / 100;
            d("#" + c + "volumefill").css({
                width: a + "px"
            });
            d("#" + c + "volumeicon").css({
                left: a - d("#" + c + "volumeicon").width() / 2 + "px"
            });
            d("#" + c + "textvolumeend").html(Math.round(b) + "%")
        }

        function Oa(b) {
            0 > b && (b = 0);
            100 < b && (b = 100);
            0 == Math.round(b) ? d("#" + c + "smalliconvolume").html('<svg class="lunaradiovolumeofficon" x="0px" y="0px" viewBox="0 0 800 800" ><path d="M401.2,400c0,72.2,0,144.4,0,216.5c0,12-3.1,22.6-13.3,29.9c-13.4,9.6-31.1,8-42.8-3.7c-36.7-36.6-73.4-73.3-109.9-110.1\tc-4.5-4.6-9-6.3-15.3-6.2c-41.3,0.3-82.7,0.2-124,0.1c-15.7,0-27-8.6-31-23.8c-1.1-4-1.4-8.4-1.4-12.6c-0.1-60.2-0.1-120.4,0-180.6\tc0-11.1,2.3-21.5,11.7-28.9c6.5-5.1,13.8-7.3,22-7.3c41.6,0,83.3-0.1,124.9,0.1c4.7,0,8.1-1.2,11.5-4.7\tc37-37.2,74.1-74.3,111.2-111.3c16.1-16,41.4-12.8,52.5,6.9c3.5,6.1,3.9,13.1,3.9,20c0,69.5,0,139.1,0,208.6\tC401.2,395.3,401.2,397.7,401.2,400z"/><path d="M685.2,526.5c-7.3,0.4-12.8-2.6-17.5-7.4c-18-18-36-35.9-53.9-54c-3.1-3.1-4.6-2.8-7.5,0.1c-17.5,17.8-35.3,35.4-52.9,53.1\tc-5.2,5.2-11.2,8.5-19,8.3c-7-0.2-12.3-3.3-17-7.9c-8.9-8.7-17.6-17.5-26.4-26.3c-10.3-10.5-10.3-24.6,0.2-35.1\tc17.8-17.9,35.7-35.8,53.7-53.6c3-3,2.9-4.6,0-7.6c-17.7-17.4-35.2-35.1-52.8-52.6c-11-11-12.2-22.8-2-34.5\tc9.3-10.6,19.1-20.9,30.2-29.8c10.9-8.7,23.1-7.6,33,2.3c17.8,17.7,35.6,35.5,53.3,53.4c2.8,2.8,4.3,3,7.2,0.1\tc17.6-17.9,35.4-35.6,53.2-53.4c8.8-8.8,19.4-10.5,29.5-5c1.7,0.9,3.1,2.2,4.4,3.5c9.4,9.4,18.8,18.8,28.2,28.2\tc10,10,10.1,24.1,0,34.2c-17.8,17.9-35.7,35.8-53.7,53.6c-2.9,2.9-3.2,4.5-0.1,7.6c17.7,17.4,35.2,35.1,52.8,52.6\tc6.3,6.3,9.6,13.7,8.1,22.9c-0.9,5.6-3.9,10-7.7,13.9c-8.5,8.7-17,17.3-25.7,25.7C697.8,523.6,692.1,527,685.2,526.5z"/></svg>') :
                d("#" + c + "smalliconvolume").html('<svg class="lunaradiovolumeonicon" x="0px" y="0px" viewBox="0 0 800 800"><path d="M359.2,397.1c0,71.7,0,143.3,0,215c0,9.1-1.2,17.7-7.7,24.8c-13.8,14.9-34.2,15.1-49.1,0.3c-32.2-32.1-64.3-64.3-96.4-96.4\tc-4.8-4.8-9.8-9.6-14.5-14.6c-2.6-2.8-5.3-3.9-9.1-3.9c-42.4,0.1-84.8,0.1-127.1,0.1c-15.4,0-27.1-8.9-31.2-23.6\tc-1.1-4.1-1.4-8.3-1.4-12.5c0-60,0-120,0-180c0-14.4,4.6-26.3,18.5-32.9c5.1-2.4,10.6-3.1,16.1-3.1c41.5,0,83,0,124.5,0.1\tc4.2,0,7.1-1.2,9.9-4.1c36.8-36.9,73.6-73.8,110.6-110.6c10.5-10.5,23.1-14.1,37.2-8.3c11.2,4.6,17.9,13.1,19.1,25.5\tc0.5,5.1,0.6,10.2,0.6,15.3C359.2,257.5,359.2,327.3,359.2,397.1z"/><path d="M777.4,394.2c-0.2,41.1-5.6,79-17.7,115.8c-14.5,44.1-36,84.5-65.7,120.4c-9.1,11-18.2,22-28.8,31.6\tc-18.1,16.5-36.4,32.7-57.7,44.9c-19.1,10.9-43.9-1.6-46.9-23.4c-2-14.2,3.3-25.2,14.9-32.9c20.8-13.9,39.6-30.1,56.6-48.4\tc14.9-16,27.8-33.6,38.9-52.5c18.2-31,30.2-64.2,36.7-99.4c3.8-20.4,5.4-41,4.8-61.7c-1.2-42.3-10.6-82.8-28.5-121.1\tc-11.2-23.9-25.5-46-42.4-66.4c-19.8-23.8-43.3-43.3-68.4-61.2c-12.4-8.9-16.3-23.7-10.8-38.1c5.1-13.3,17.6-20.8,32.5-19.9\tc6.1,0.4,11.3,2.4,16.3,5.6c21.2,13.8,40.9,29.5,58.5,47.5c34.5,35.1,61.6,75.3,80.2,121.1c13.4,33,22,67.1,25.4,102.5\tC776.7,371.4,776.9,384.1,777.4,394.2z"/><path d="M652.1,392.3c-0.7,56.6-15.7,104.9-47.2,147.9c-17.4,23.7-38.4,43.6-63.2,59.5c-14.3,9.1-29.1,8.5-41-2\tc-11.9-10.5-13.8-29.9-4.5-42.9c3.9-5.5,9.5-8.9,14.8-12.6c35.3-24.8,59.1-57.9,70.4-99.4c10.8-39.8,8-78.9-8.4-116.9\tc-9.9-22.8-24-42.5-41.9-59.5c-8.8-8.4-18.8-15.1-28.6-22.1c-11-7.9-15.3-24.6-9.9-37.3c6.2-14.7,19.2-22,34-20.1\tc11.1,1.5,19.2,8.3,27.5,14.4c10.7,7.8,20.8,16.3,29.9,26.1c19.7,21.3,36.2,44.6,47.8,71.4c9.2,21.3,15.2,43.4,18.3,66.3\tC651.3,375.2,651.6,385.5,652.1,392.3z"/><path d="M526.4,394.8c-0.1,30.3-9.9,54.9-27.8,76.5c-9,10.8-19.7,19.4-32.1,25.8c-21.2,11-44.2-0.7-47.6-24.3\tc-1.7-12.2,3.1-22.4,13.1-29.5c7.1-5.1,14.6-9.7,19.8-16.9c17.6-24.1,12-55.7-12.8-72.4c-3.4-2.3-7-4.3-9.9-7.1\tc-12.5-11.6-14.1-29.7-4.1-43.1c10-13.3,28-16.9,42.6-8.2c31.6,18.7,51,46.1,57.3,82.4C526.1,384.3,526.7,390.6,526.4,394.8z"/></svg>');
            ba() || (F.volume = b / 100);
            d("#" + c + "smalltextvolume").html(Math.round(b) + "%");
            b = d("#" + c + "smallvolumegrab").width() * b / 100;
            d("#" + c + "smallvolumebackground").css({
                width: b + "px"
            });
            k.width = b;
            k.height = x
        }

        function db() {
            E = d("#" + c + "containerinside").width();
            x = d("#" + c + "containerinside").height();
            cb && "small" == fa && (x = 80, 959 > E && (x = 60), 599 > E && (x = 40), d("#" + c).css({
                height: x + "px"
            }))
        }

        function jb() {
            db();
            if ("big" == fa) {
                k.width = E;
                k.height = x;
                var b = 1 * x / 100,
                    a = x / 2 - 20 - b - 4 * b;
                d("#" + c + "coverwrapper").css({
                    border: "solid " + 2 * b + "px rgba(" +
                        f(A).r + ", " + f(A).g + ", " + f(A).b + ", 0.2)",
                    top: x / 4 - a / 2 - b + "px",
                    left: E / 2 - a / 2 + "px",
                    width: a + "px",
                    height: a + "px"
                });
                d("#" + c + "backgroundimage").css({
                    "-webkit-filter": "saturate(1.2)",
                    position: "absolute",
                    filter: "saturate(1.2)",
                    top: "0px",
                    left: "0px",
 "-webkit-filter": "blur(40px)", 
                filter: "blur(10px)", //efecto blur desenfoque
                    width: "100%",
                    height: "100%",
                });
                a = x / 8;
                var h = a / 2,
                    p = a * qb,
                    v = a - p,
                    z = x / 2 + b,
                    m = z + p + b,
                    l = m + v + 2 * b,
                    D = l + h,
                    aa = (x - (l + h)) / 2 + l + h - a / 1.25,
                    ea = aa + a / 1.25 - h / 2;
                d("#" + c + "textradioname").css({
                    top: z + "px",
                    left: "20px",
                    width: E - 40 + "px",
                    height: p + 2 * b + "px",
                    "font-size": p + "px",
                    "line-height": p + 2 * b + "px"
                });
                d("#" + c + "texttitle").css({
                    top: m + "px",
                    left: "20px",
                    width: E - 40 + "px",
                    height: v + 2 * b + "px",
                    "font-size": v + "px",
                    "line-height": v + 2 * b + "px"
                });
                d("#" + c + "volumewrapper").css({
                    top: l + "px",
                    left: "40px",
                    width: E - 80 + "px",
                    height: h + "px"
                });
                d("#" + c + "volumebackground, #" + c + "volumefill").css({
                    height: h / 4 / 2 + "px",
                    top: h / 2 - h / 4 / 2 + "px",
                    "border-radius": h / 2 / 2 + "px"
                });
                d("#" + c + "volumeicon").css({
                    top: h / 6 + "px",
                    height: h / 2 + "px",
                    width: h / 2 + "px"
                });
                d("#" + c + "buttonvolumeoff").css({
                    top: D + "px",
                    left: "40px",
                    width: h + "px",
                    height: h + "px"
                });
                d("#" + c + "buttonvolumeon").css({
                    top: D +
                        "px",
                    right: "40px",
                    width: h + "px",
                    height: h + "px"
                });
                d("#" + c + "textvolumeend").css({
                    top: D + "px",
                    right: h + 40 + "px",
                    width: 2 * h + "px",
                    height: h + "px",
                    "font-size": h / 2 + "px",
                    "line-height": h + "px"
                });
                d("#" + c + "pauseplaywrapper").css({
                    top: aa + "px",
                    left: E / 2 - a / 1.25 + "px",
                    width: 1.5 * a + "px",
                    height: 1.5 * a + "px"
                });
                d("#" + c + "iconlive").css({
                    top: ea + "px",
                    left: E / 2 + a / 1.25 + 20 + "px",
                    height: h + "px",
                    width: h + "px"
                });
                d("#" + c + "buttonanalyzer").css({
                    top: ea + "px",
                    left: E / 2 - a / 1.25 - 20 - h + "px",
                    height: h + "px",
                    width: h + "px"
                });
                za(S)
            } else b = 10 * x / 100, a = (x - 3 * b) * qb,
                h = x - 3 * b - a, d("#" + c + "smalltextradioname").css({
                    top: "0px",
                    left: x + b + "px",
                    width: E - 3 * x - 2 * b + "px",
                    height: a + 2 * b + "px",
                    "font-size": a + "px",
                    "line-height": a + 2 * b + "px"
                }), d("#" + c + "smalltexttitle").css({
                    top: a + b + "px",
                    left: x + b + "px",
                    width: E - 3 * x - 2 * b + "px",
                    height: h + 2 * b + "px",
                    "font-size": h + "px",
                    "line-height": h + 2 * b + "px"
                }), d("#" + c + "smallpauseplaywrapper").css({
                    top: "0px",
                    left: "0px",
                    width: x + "px",
                    height: x + "px"
                }), "circle" == Na ? d("#" + c + "smallcoverwrapper").css({
                    top: b + "px",
                    right: b + "px",
                    width: x - 2 * b + "px",
                    height: x - 2 * b + "px"
                }) : d("#" + c +
                    "smallcoverwrapper").css({
                    top: "0px",
                    right: "0px",
                    width: x + "px",
                    height: x + "px"
                }), d("#" + c + "smallvolumegrab").css({
                    top: "0px",
                    left: x + "px",
                    width: E - 2 * x + "px",
                    height: x + "px"
                }), d("#" + c + "smallvolumebackground").css({
                    left: x + "px",
                    height: x + "px"
                }), d("#" + c + "smalliconlive").css({
                    top: b + "px",
                    right: x + 2 * b + "px",
                    width: x / 2 + "px",
                    height: x / 2 + "px"
                }), d("#" + c + "smalltextvolume").css({
                    overflow: "hidden",
                    bottom: "0px",
                    right: x / 2.5 + x + 2 * b + "px",
                    width: E / 2 + "px",
                    height: x / 2.5 + "px",
                    "font-size": x / 2.5 - 2 * b + "px",
                    "line-height": x / 2.5 + "px"
                }), d("#" + c +
                    "smalliconvolume").css({
                    bottom: "0px",
                    right: x + 2 * b + "px",
                    width: x / 2.5 + "px",
                    height: x / 2.5 + "px",
                    "font-size": x / 2.5 - 2 * b + "px",
                    "line-height": x / 2.5 + "px"
                }), d("#" + c + "canvas").css({
                    left: x + "px"
                }), Oa(S);
            lb(!1)
        }

        function pb() {
            "none" != d("#" + c + "buttonplay").css("pointer-events") && (d("#" + c + "buttonpause").stop(), d("#" + c + "buttonplay").stop(), d("#" + c + "smallbuttonpause").stop(), d("#" + c + "smallbuttonplay").stop())
        }

        function hb() {
            Y = !0;
            d("#" + c + "buttonpause").fadeIn(200, function() {});
            d("#" + c + "buttonplay").fadeOut(200, function() {});
            d("#" + c + "smallbuttonpause").fadeIn(200, function() {});
            d("#" + c + "smallbuttonplay").fadeOut(200, function() {})
        }

        function ib() {
            Y = !1;
            d("#" + c + "buttonpause").fadeOut(200, function() {});
            d("#" + c + "buttonplay").fadeIn(200, function() {});
            d("#" + c + "smallbuttonpause").fadeOut(200, function() {});
            d("#" + c + "smallbuttonplay").fadeIn(200, function() {});
            d("#" + c + "audiopreloader").fadeOut(0);
            d("#" + c + "smallaudiopreloader").fadeOut(0)
        }

        function Ja() {
            w("playmode");
            try {
                d(".lunaaudioplayer").each(function() {
                    d(this).attr("id") != c && d(this).data("lunaradio").pause()
                })
            } catch (b) {
                w(b)
            }
            hb();
            if (!Va)
                if ("undefined" == typeof Aa) {
                    if ("real" == da) {
                        try {
                            Aa = new(window.AudioContext || window.webkitAudioContext), ua = Aa.createAnalyser(), rb = Rb(Aa), ua.smoothingTimeConstant = .9, ua.fftSize = 1024, w("analyzer is created")
                        } catch (b) {
                            w("error" + b), "real" == da && (da = "fake")
                        }
                        try {
                            "crossOrigin" in F ? (w("found crossOrigin"), F.crossOrigin = "anonymous", F.onerror = Sb, sb = F, Za = Aa.createMediaElementSource(sb), Za.connect(ua), Za.connect(rb), ua.connect(Aa.destination), w("analyzer is connected")) : w("no crossOrigin")
                        } catch (b) {
                            w("error" +
                                b)
                        }
                    }
                } else w("analyzer_audioContext is not undefined");
            T();
            ba() ? (F.muted = !1, F.play()) : F.play()["catch"](function() {
                w("error on html5 play")
            })
        }

        function Ya() {
            ib();
            if (ba()) F.muted = !0;
            else try {
                F.pause(), H()
            } catch (b) {}
        }

        function Rb(b) {
            var a = b.createScriptProcessor(512);
            a.onaudioprocess = Tb;
            a.averaging = .98;
            a.connect(b.destination);
            return a
        }

        function Tb(b) {
            var a = b.inputBuffer.getChannelData(0);
            b = b.inputBuffer.getChannelData(1);
            for (var h = a.length, p = b.length, v = 0, z, m = 0; m < h; m++) z = a[m], v += z * z;
            a = Math.sqrt(v / h);
            Ea =
                Math.max(a, Ea * this.averaging);
            for (m = v = 0; m < p; m++) z = b[m], v += z * z;
            a = Math.sqrt(v / p);
            Fa = Math.max(a, Fa * this.averaging)
        }

        function Sb(b) {
            b.target ? w("server not set correctly") : w("browser doesn't support crossOrigin requests")
        }

        function va() {
            if ("fake" == da || "real" == da) {
                try {
                    window.requestAnimationFrame(va) || window.mozRequestAnimationFrame(va) || window.webkitRequestAnimationFrame(va) || window.msRequestAnimationFrame(va) || window.oRequestAnimationFrame(va)
                } catch (tb) {}
                if ("fake" == da) {
                    q = [];
                    for (var b = 0; 511 > b; b += 1) Y ? q.push(Math.floor(254 /
                        (b / 100 + 1) * Math.random() + 1)) : q.push(0), Ga[b] += (q[b] - Ga[b]) / 9;
                    q = Ga
                }
                try {
                    "real" == da && (q = new Uint8Array(ua.frequencyBinCount), ua.getByteFrequencyData(q))
                } catch (tb) {}
                "animated" == Na && d("#" + c + "smallcoverwrapper, #" + c + "smallcoverwrapper1, #" + c + "smallcoverwrapper2, #" + c + "coverwrapper, #" + c + "coverwrapper1, #" + c + "coverwrapper2").css({
                    "border-top-left-radius": 50 - 50 * Ea + "%",
                    "border-top-right-radius": 50 - 50 * Fa + "%",
                    "border-bottom-left-radius": 50 - 50 * Ea + "%",
                    "border-bottom-right-radius": 50 - 50 * Fa + "%"
                });
                try {
                    switch (ja) {
                        case 0:
                            g.clearRect(0,
                                0, k.width, k.height);
                            break;
                        case 1:
                            g.clearRect(0, 0, k.width, k.height);
                            g.lineWidth = 2;
                            g.miterLimit = 1;
                            g.closePath();
                            g.beginPath();
                            for (var a = 0; a < q.length / 2; a += 1) g.lineTo(a * k.width / q.length * 2, k.height - q[a] * k.height / 255 + 2);
                            if ("true" == W) {
                                var h = g.createLinearGradient(0, 0, k.width, 0);
                                h.addColorStop(0, "rgba(" + f(L).r + ", " + f(L).g + ", " + f(L).b + ", 0.99)");
                                h.addColorStop(.33 - q[20] / 1E3, "rgba(" + f(M).r + ", " + f(M).g + ", " + f(M).b + ", 0.99)");
                                h.addColorStop(.66 + q[20] / 1E3, "rgba(" + f(N).r + ", " + f(N).g + ", " + f(N).b + ", 0.99)");
                                h.addColorStop(1,
                                    "rgba(" + f(O).r + ", " + f(O).g + ", " + f(O).b + ", 0.99)");
                                g.strokeStyle = h
                            } else g.strokeStyle = "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.99)";
                            g.stroke();
                            break;
                        case 2:
                            g.clearRect(0, 0, k.width, k.height);
                            g.lineWidth = 1;
                            g.miterLimit = 1;
                            g.beginPath();
                            for (a = 0; a < q.length / 2; a += 1) g.lineTo(a * k.width / q.length * 2, k.height - q[a] * k.height / 255 + 2);
                            g.lineTo(k.width, k.height);
                            g.lineTo(0, k.height);
                            g.closePath();
                            if ("true" == W) {
                                var p = g.createLinearGradient(0, 0, k.width, 0);
                                p.addColorStop(0, "rgba(" + f(L).r + ", " + f(L).g + ", " + f(L).b + ", 0.99)");
                                p.addColorStop(.33 - q[20] / 1E3, "rgba(" + f(M).r + ", " + f(M).g + ", " + f(M).b + ", 0.99)");
                                p.addColorStop(.66 + q[20] / 1E3, "rgba(" + f(N).r + ", " + f(N).g + ", " + f(N).b + ", 0.99)");
                                p.addColorStop(1, "rgba(" + f(O).r + ", " + f(O).g + ", " + f(O).b + ", 0.99)");
                                g.fillStyle = p
                            } else g.fillStyle = "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.99)";
                            g.fill();
                            break;
                        case 3:
                            g.clearRect(0, 0, k.width, k.height);
                            g.lineWidth = 2;
                            g.lineJoin = "round";
                            g.beginPath();
                            for (a = 0; a < k.width; a += 6) {
                                var v = Math.round(q.length / 2 * a / k.width);
                                g.moveTo(a, k.height);
                                g.lineTo(a,
                                    k.height - q[v] * k.height / 255 + 2)
                            }
                            if ("true" == W) {
                                var z = g.createLinearGradient(0, 0, k.width, 0);
                                z.addColorStop(0, "rgba(" + f(L).r + ", " + f(L).g + ", " + f(L).b + ", 0.99)");
                                z.addColorStop(.33 - q[20] / 1E3, "rgba(" + f(M).r + ", " + f(M).g + ", " + f(M).b + ", 0.99)");
                                z.addColorStop(.66 + q[20] / 1E3, "rgba(" + f(N).r + ", " + f(N).g + ", " + f(N).b + ", 0.99)");
                                z.addColorStop(1, "rgba(" + f(O).r + ", " + f(O).g + ", " + f(O).b + ", 0.99)");
                                g.strokeStyle = z
                            } else g.strokeStyle = "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.99)";
                            g.stroke();
                            break;
                        case 4:
                            g.clearRect(0,
                                0, k.width, k.height);
                            g.lineWidth = 0;
                            g.miterLimit = 1;
                            a = [];
                            g.beginPath();
                            g.moveTo(0, k.height);
                            for (var m = 0; m < E + 20; m += 20) {
                                var l = Math.round(q.length / 8 * m / E);
                                a.push(m);
                                a.push(k.height - q[l] * k.height / 255 + 2)
                            }
                            ma(g, a, .5);
                            g.lineTo(E, k.height);
                            g.lineTo(0, k.height);
                            g.fillStyle = "true" == W ? "rgba(" + f(L).r + ", " + f(L).g + ", " + f(L).b + ", 0.80)" : "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.20)";
                            g.fill();
                            g.closePath();
                            g.beginPath();
                            g.moveTo(0, k.height);
                            a = [];
                            for (m = 0; m < E + 20; m += 20) l = Math.round(q.length / 8 * m / E), a.push(m), a.push(k.height -
                                q[l + l] * k.height / 255 + 2);
                            ma(g, a, .5);
                            g.lineTo(E, k.height);
                            g.lineTo(0, k.height);
                            g.fillStyle = "true" == W ? "rgba(" + f(M).r + ", " + f(M).g + ", " + f(M).b + ", 0.80)" : "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.40)";
                            g.fill();
                            g.closePath();
                            g.beginPath();
                            g.moveTo(0, k.height);
                            a = [];
                            for (m = 0; m < E + 20; m += 20) l = Math.round(q.length / 8 * m / E), a.push(m), a.push(k.height - q[l + l + l] * k.height / 255 + 2);
                            ma(g, a, .5);
                            g.lineTo(E, k.height);
                            g.lineTo(0, k.height);
                            g.fillStyle = "true" == W ? "rgba(" + f(N).r + ", " + f(N).g + ", " + f(N).b + ", 0.80)" : "rgba(" + f(u).r + ", " +
                                f(u).g + ", " + f(u).b + ", 0.60)";
                            g.fill();
                            g.closePath();
                            g.beginPath();
                            g.moveTo(0, k.height);
                            a = [];
                            for (m = 0; m < E + 20; m += 20) l = Math.round(q.length / 8 * m / E), a.push(m), a.push(k.height - q[l + l + l + l] * k.height / 255 + 2);
                            ma(g, a, .5);
                            g.lineTo(E, k.height);
                            g.lineTo(0, k.height);
                            g.fillStyle = "true" == W ? "rgba(" + f(O).r + ", " + f(O).g + ", " + f(O).b + ", 0.80)" : "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.80)";
                            g.fill();
                            g.closePath();
                            break;
                        case 5:
                            g.clearRect(0, 0, k.width, k.height);
                            g.lineWidth = 3;
                            g.lineCap = "round";
                            g.miterLimit = 1;
                            g.strokeStyle = "true" ==
                                W ? "rgba(" + f(L).r + ", " + f(L).g + ", " + f(L).b + ", 0.80)" : "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.2)";
                            a = [];
                            g.beginPath();
                            g.moveTo(0, k.height);
                            for (l = 0; l < E + 20; l += 20) m = Math.round(q.length / 8 * l / E), a.push(l), a.push(k.height - q[m] * k.height / 255 + 2);
                            ma(g, a, .5);
                            g.stroke();
                            g.closePath();
                            g.lineWidth = 2;
                            g.lineCap = "round";
                            g.miterLimit = 1;
                            g.strokeStyle = "true" == W ? "rgba(" + f(M).r + ", " + f(M).g + ", " + f(M).b + ", 0.80)" : "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.4)";
                            g.beginPath();
                            g.moveTo(0, k.height);
                            a = [];
                            for (l = 0; l < E + 20; l += 20) m =
                                Math.round(q.length / 8 * l / E), a.push(l), a.push(k.height - q[m + m] * k.height / 255 + 2);
                            ma(g, a, .5);
                            g.stroke();
                            g.closePath();
                            g.lineWidth = 2;
                            g.lineCap = "round";
                            g.miterLimit = 1;
                            g.strokeStyle = "true" == W ? "rgba(" + f(N).r + ", " + f(N).g + ", " + f(N).b + ", 0.80)" : "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.6)";
                            g.beginPath();
                            g.moveTo(0, k.height);
                            a = [];
                            for (l = 0; l < E + 20; l += 20) m = Math.round(q.length / 8 * l / E), a.push(l), a.push(k.height - q[m + m + m] * k.height / 255 + 2);
                            ma(g, a, .5);
                            g.stroke();
                            g.closePath();
                            g.lineWidth = 2;
                            g.lineCap = "round";
                            g.miterLimit =
                                1;
                            g.strokeStyle = "true" == W ? "rgba(" + f(O).r + ", " + f(O).g + ", " + f(O).b + ", 0.80)" : "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.8)";
                            g.beginPath();
                            g.moveTo(0, k.height);
                            a = [];
                            for (l = 0; l < E + 20; l += 20) m = Math.round(q.length / 8 * l / E), a.push(l), a.push(k.height - q[m + m + m + m] * k.height / 255 + 2);
                            ma(g, a, .5);
                            g.stroke();
                            g.closePath();
                            break;
                        case 6:
                            var D = k.height;
                            a = D / 2;
                            "big" == fa && (a = x / 2 + x / 8 + 1 * x / 100 * 4 + x / 32, D = 2 * (k.height - a));
                            g.clearRect(0, 0, k.width, k.height);
                            g.lineWidth = 2;
                            g.lineJoin = "round";
                            g.beginPath();
                            for (l = 0; l < k.width; l += 6) {
                                var aa =
                                    Math.round(q.length / 2 * l / k.width);
                                g.moveTo(l, a);
                                g.lineTo(l, a - q[aa] * D / 2 / 255);
                                g.moveTo(l, a);
                                g.lineTo(l, a + q[aa] * D / 2 / 255)
                            }
                            for (l = 3; l < k.width; l += 6) aa = Math.round(q.length / 2 * l / k.width), g.moveTo(l, a), g.lineTo(l, a - q[aa] * D / 4 / 255), g.moveTo(l, a), g.lineTo(l, a + q[aa] * D / 4 / 255);
                            if ("true" == W) {
                                var ea = g.createLinearGradient(0, 0, k.width, 0);
                                ea.addColorStop(0, "rgba(" + f(L).r + ", " + f(L).g + ", " + f(L).b + ", 0.99)");
                                ea.addColorStop(.33 - q[20] / 1E3, "rgba(" + f(M).r + ", " + f(M).g + ", " + f(M).b + ", 0.99)");
                                ea.addColorStop(.66 + q[20] / 1E3, "rgba(" +
                                    f(N).r + ", " + f(N).g + ", " + f(N).b + ", 0.99)");
                                ea.addColorStop(1, "rgba(" + f(O).r + ", " + f(O).g + ", " + f(O).b + ", 0.99)");
                                g.strokeStyle = ea
                            } else g.strokeStyle = "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.99)";
                            g.stroke();
                            break;
                        case 7:
                            g.clearRect(0, 0, k.width, k.height);
                            Ha++;
                            if ("true" == W)
                                for (var J = 0; J < q.length / 2; J++) g.beginPath(), g.arc(Math.cos(Ha / V[J].speed) * V[J].radius + V[J].x, Math.sin(Ha / V[J].speed) * V[J].radius + V[J].y, V[J].radius * q[J] / 255, 0, 2 * Math.PI), g.closePath(), g.fillStyle = 0 == J % 2 ? "rgba(" + f(L).r + ", " + f(L).g + ", " +
                                    f(L).b + ", 0.2)" : 0 == J % 3 ? "rgba(" + f(M).r + ", " + f(M).g + ", " + f(M).b + ", 0.2)" : 0 == J % 5 ? "rgba(" + f(N).r + ", " + f(N).g + ", " + f(N).b + ", 0.2)" : "rgba(" + f(O).r + ", " + f(O).g + ", " + f(O).b + ", 0.2)", g.fill();
                            else
                                for (J = 0; J < q.length / 2; J++) g.beginPath(), g.arc(Math.cos(Ha / V[J].speed) * V[J].radius + V[J].x, Math.sin(Ha / V[J].speed) * V[J].radius + V[J].y, V[J].radius * q[J] / 255, 0, 2 * Math.PI), g.closePath(), g.fillStyle = "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.2)", g.fill();
                            break;
                        case 8:
                            g.clearRect(0, 0, k.width, k.height);
                            var Ia = k.height / 2,
                                U = k.height / 2;
                            a = 0;
                            "big" == fa && (U = x / 2 + x / 8 + 1 * x / 100 * 4 + x / 32 - x / 8 / 2 / 4 / 2 / 2, Ia = x / 32, a = 40);
                            g.lineWidth = 4;
                            g.lineJoin = "round";
                            g.beginPath();
                            var Pa = Math.round(200 * Ea * (k.width - 40) / 100);
                            for (l = a; l < Pa; l += 6) g.moveTo(l, U), g.lineTo(l, U - Ia);
                            var Qa = Math.round(200 * Fa * (k.width - 40) / 100);
                            for (l = a; l < Qa; l += 6) g.moveTo(l, U), g.lineTo(l, U + Ia);
                            if ("true" == W) {
                                var na = g.createLinearGradient(0, 0, k.width, 0);
                                na.addColorStop(0, "rgba(" + f(L).r + ", " + f(L).g + ", " + f(L).b + ", 0.99)");
                                na.addColorStop(.33 - q[20] / 1E3, "rgba(" + f(M).r + ", " + f(M).g + ", " + f(M).b +
                                    ", 0.99)");
                                na.addColorStop(.66 + q[20] / 1E3, "rgba(" + f(N).r + ", " + f(N).g + ", " + f(N).b + ", 0.99)");
                                na.addColorStop(1, "rgba(" + f(O).r + ", " + f(O).g + ", " + f(O).b + ", 0.99)");
                                g.strokeStyle = na
                            } else g.strokeStyle = "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.99)";
                            g.stroke();
                            break;
                        case 9:
                            g.clearRect(0, 0, k.width, k.height);
                            D = m = l = 0;
                            g.clearRect(0, 0, k.width, k.height);
                            g.miterLimit = 1;
                            for (m = 0; 10 > m; m += 1) {
                                g.beginPath();
                                g.lineWidth = 2 - m / 10;
                                g.moveTo(0, k.height - q[0] * k.height / 255 + 2 + 5 * m);
                                for (l = 0; l < q.length / 2; l += 1) D = Math.round(q.length /
                                    1 * l / E), g.lineTo(l * k.width / q.length * 2 + 5 * m, k.height - q[D] * k.height / 255 + 2 + 5 * m);
                                g.moveTo(0, k.height - q[0] * k.height / 255 + 2 + 5 * m);
                                for (l = 0; l < q.length / 2; l += 1) D = Math.round(q.length / 1 * l / E), g.lineTo(l * k.width / q.length * 2 + 5 * m, k.height - q[D + D] * k.height / 255 + 2 + 5 * m);
                                g.moveTo(0, k.height - q[0] * k.height / 255 + 2 + 5 * m);
                                for (l = 0; l < q.length / 2; l += 1) D = Math.round(q.length / 1 * l / E), g.lineTo(l * k.width / q.length * 2 + 5 * m, k.height - q[D + D + D] * k.height / 255 + 2 + 5 * m);
                                g.moveTo(0, k.height - q[0] * k.height / 255 + 2 + 5 * m);
                                for (l = 0; l < q.length / 2; l += 1) D = Math.round(q.length /
                                    1 * l / E), g.lineTo(l * k.width / q.length * 2 + 5 * m, k.height - q[D + D + D + D] * k.height / 255 + 2 + 5 * m);
                                "true" == W ? (a = g.createLinearGradient(0, 0, k.width, 0), a.addColorStop(0, "rgba(" + f(L).r + ", " + f(L).g + ", " + f(L).b + ", " + m / 10 + ")"), a.addColorStop(.33 - q[20] / 1E3, "rgba(" + f(M).r + ", " + f(M).g + ", " + f(M).b + ", " + m / 10 + ")"), a.addColorStop(.66 + q[20] / 1E3, "rgba(" + f(N).r + ", " + f(N).g + ", " + f(N).b + ", " + m / 10 + ")"), a.addColorStop(1, "rgba(" + f(O).r + ", " + f(O).g + ", " + f(O).b + ", " + m / 10 + ")"), g.strokeStyle = a) : g.strokeStyle = "rgba(" + f(u).r + ", " + f(u).g + ", " +
                                    f(u).b + ", " + m / 10 + ")";
                                g.stroke()
                            }
                            break;
                        default:
                            g.clearRect(0, 0, k.width, k.height)
                    }
                } catch (tb) {}
            }
        }

        function ma(b, a, h, p, v, z) {
            b.beginPath();
            var m = p;
            h = "undefined" != typeof h ? h : .5;
            m = m ? m : !1;
            v = v ? v : 16;
            var l = [],
                D;
            p = a.slice(0);
            m ? (p.unshift(a[a.length - 1]), p.unshift(a[a.length - 2]), p.unshift(a[a.length - 1]), p.unshift(a[a.length - 2]), p.push(a[0]), p.push(a[1])) : (p.unshift(a[1]), p.unshift(a[0]), p.push(a[a.length - 2]), p.push(a[a.length - 1]));
            for (D = 2; D < p.length - 4; D += 2)
                for (m = 0; m <= v; m++) {
                    var aa = (p[D + 2] - p[D - 2]) * h;
                    var ea = (p[D +
                        4] - p[D]) * h;
                    var J = (p[D + 3] - p[D - 1]) * h;
                    var Ia = (p[D + 5] - p[D + 1]) * h;
                    var U = m / v;
                    var Pa = 2 * Math.pow(U, 3) - 3 * Math.pow(U, 2) + 1;
                    var Qa = -(2 * Math.pow(U, 3)) + 3 * Math.pow(U, 2);
                    var na = Math.pow(U, 3) - 2 * Math.pow(U, 2) + U;
                    U = Math.pow(U, 3) - Math.pow(U, 2);
                    aa = Pa * p[D] + Qa * p[D + 2] + na * aa + U * ea;
                    J = Pa * p[D + 1] + Qa * p[D + 3] + na * J + U * Ia;
                    l.push(aa);
                    l.push(J)
                }
            b.moveTo(l[0], l[1]);
            for (ca = 2; ca < l.length - 1; ca += 2) b.lineTo(l[ca], l[ca + 1]);
            if (z)
                for (b.beginPath(), z = 0; z < a.length - 1; z += 2) b.rect(a[z] - 2, a[z + 1] - 2, 4, 4)
        }

        function Xa(b) {
            d({
                countNum: S
            }).animate({
                countNum: Math.floor(b)
            }, {
                duration: 800,
                easing: "linear",
                step: function() {
                    S = this.countNum;
                    za(this.countNum)
                },
                complete: function() {
                    S = b;
                    za(b)
                }
            })
        }

        function Qb(b) {
            d({
                countNum: S
            }).animate({
                countNum: Math.floor(b)
            }, {
                duration: 800,
                easing: "linear",
                step: function() {
                    S = this.countNum;
                    Oa(this.countNum)
                },
                complete: function() {
                    S = b;
                    Oa(b)
                }
            })
        }

        function Wa() {
            switch (kb) {
                case "icecast2":
                    var b = ia + Ma;
                    break;
                case "shoutcast2":
                    b = ia + Ub;
                    break;
                case "radionomy":
                    b = ia;
                    break;
                case "radiojar":
                    b = ia;
                    break;
                case "radioco":
                    b = ia;
                    break;
                default:
                    "#" == $a && ($a = ""), b = ia + $a
            }
            return b
        }

        function ba() {
            return "ios" == pa.os.name.toLowerCase() ? !0 : !1
        }

        function Sa(b) {
            b = ab.decode(b);
            var a = 0,
                h = "";
            do h += String.fromCharCode(b.charCodeAt(a++) - -14); while (a < b.length);
            return h
        }

        function w(b) {
            if ("true" == Vb) {
                var a = new Date;
                b = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds() + ": " + b;
                window.console && console.log(b);
                0 < d("#debug").length && d("#debug").html(d("#debug").html() + "<br>" + b)
            }
        }

        function f(b) {
            return (b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(b)) ? {
                r: parseInt(b[1], 16),
                g: parseInt(b[2], 16),
                b: parseInt(b[3],
                    16)
            } : null
        }
        var bb = n.id;
        if (arguments.length) {
            this.element = d(n);
            this.options = d.extend(!0, {}, this.options, t);
            var Wb = this;
            this.element.bind("remove.lunaradio", function() {
                Wb.destroy()
            })
        }
        for (var fb = r(t.token, ""), fa = r(t.userinterface, "small").toString().toLowerCase(), ub = r(t.backgroundcolor, "rgba(0,0,0,0)"), A = r(t.fontcolor, "#ffffff"), u = r(t.hightlightcolor, "#f86808"), ka = r(t.fontname, ""), eb = r(t.googlefont, ""), qb = r(t.fontratio, "0.4"), ob = r(t.radioname, ""), Da = r(t.scroll, "true").toString().toLowerCase(), ra = r(t.coverimage,
                    "data:image/png;base64,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odfV/UI50tCnQOgDnNDrGFkvzhFwBByBRYCAE/oiAD37lv37919lwoQJ9/D/2k7o9aBDvAqOgCPgCPwJEXBCrwedFnzof6cqeZetLYRqSkOfjIY+0DX0hYCuF+kIOAKOwB+MgBP6Hwx4rtsdeuihaxHlPomgt5ULzQBXB9UWobsPvQ6A9CIcAUfAEagPCDih14NeCJniROgr/dGETv74/o8//vjP9QAGr4Ij4Ag4Ao7AAiDghL4A4NXVpcoUd9ttt4nQV/yDCX0K9+5/xx13zKqrtvwZy9FeNWTLa0ROfW1a4zvP/Rk70etcLQLa0XHUqFFr3H333SugRHTo3LlzKy5q9NRTT8179dVX/9e0adPv2OvhrdatW3995JFHzq+2QD+h3iHghF4PumQREvpk7n34X5nQP/jgg02Y2A5v1apVa3LoN/nhhx8af//99w3ZJCdZ989WtA3mzZvXsFmzZg3at2/fcPHFFy9j45x533333U/z58//hmu+eOmll94fM2bM52ym881jjz02C6Gg4k46OcbYPffc05oyl9lggw1aaatbvX/55Rfdt1jb5mI1+fHpp5/+GEGjJL6c6xq/9tprq5x00kktfvzxxybUuyF1TO5HfUupUxm/S9kXIClTx37++ecyJvGvzjvvvK+qqxtltP7444978NmMCV7tV9lls2fPVvllSy655Jds7fttqFPDL7/8ckVIoM1bb71VcsUVV5Rx37J27do1+N///tfgzDPPbLjKKqs0ppyG/J+Za/Tb2hTqq+sy/6nebAPcWO1ZaqmlGvz6668zwf7zfHUHk064rLoTD9Jo9OjRZWDSQPVV/fXmHsm7U6dODejrsquvvroR18w54IAD3q0Ojxh76tNoyJAhS9FHSwwYMKAp9yhTuYyBEgiwTHUdOnRoAwhRWx830rH77ruv+O233/7uhhtu+LoQYRHSXXGvvfZabJNNNmkhHFQ22DR45plnStiR8QdWw3xakzpTXusVV1yx+xFHHLFl165dezNG16O/OrFRUzNttxx2dVQfF4P5PO73Ef+/Qb8+e+WVV87g+fiINvxak3vWgyn1L1sFJ/R60PX7779/T0j174tAQ//LEzqT5QAmqzGa4AIpJrn0tSudJjuRuiZU+65zdDzsXlfGeSUcm8ffX/Ge9s9//vOue++99x/XX399lRoO5W5FuWMgzC62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/sorr/TB9b7xBx98UE963GZ2bGvCWtcCfG0zqj3BmxnsNL/xxhvNrMPP+peCCNnWU7/qc/2vmb2+mwgs1Jajc95///0X8Xq8tqRw7Oh28flMwARMQAQs6O4HC00gz65XOo+FeaGR+gQmYAImEE3Agh6NzAVMwARMwARMID0CFvT02sQ1MgETMAETMIFoAhb0aGQuYAImYAImYALpEbCgp9cmrpEJmIAJmIAJRBOwoEcjcwETMAETMAETSI+ABT29NnGNTMAETMAETCCagAU9GpkLmIAJmIAJmEB6BCzo6bWJa2QCJmACJmAC0QQs6NHIXMAETMAETMAE0iNgQU+vTVwjEzABEzABE4gmYEGPRuYCJmACJmACJpAeAQt6em3iGpmACZiACZhANAELejQyFzABEzABEzCB9AhY0NNrE9fIBEzABEzABKIJWNCjkbmACZiACZiACaRHwIKeXpu4RiZgAiZgAiYQTcCCHo3MBUzABEzABEwgPQIW9PTaxDUyARMwARMwgWgCFvRoZC5gAiZgAiZgAukRsKCn1yaukQmYgAmYgAlEE7CgRyNzARMwARMwARNIj4AFPb02cY1MwARMwARMIJqABT0amQuYgAmYgAmYQHoELOjptYlrZAImYAImYALRBCzo0chcwARMwARMwATSI2BBT69NXCMTMAETMAETiCZgQY9G5gImYAImYAImkB4BC3p6beIamYAJmIAJmEA0AQt6NDIXMAETMAETMIH0CFjQ02sT18gETMAETMAEoglY0KORuYAJmIAJmIAJpEfAgp5em7hGJmACJmACJhBNwIIejcwFTMAETMAETCA9Ahb09NrENTIBEzABEzCBaAIW9GhkLmACJmACJmAC6RGwoKfXJq6RCZiACZiACUQTsKBHI3MBEzABEzABE0iPgAU9vTZxjUzABEzABEwgmoAFPRqZC5iACZiACZhAegQs6Om1iWtkAiZgAiZgAtEELOjRyFzABEzABEzABNIjYEFPr01cIxMwARMwAROIJmBBj0bmAiZgAiZgAiaQHgELenpt4hqZgAmYgAmYQDQBC3o0MhcwARMwARMwgfQIWNDTaxPXyARMwARMwASiCVjQo5G5gAmYgAmYgAmkR8CCnl6buEYmYAImYAImEE3Agh6NzAVMwARMwARMID0CFvT02sQ1MgETMAETMIFoAhb0aGQuYAImYAImYALpEbCgp9cmrpEJmIAJmIAJRBOwoEcjcwETMAETMAETSI+ABT29NnGNTMAETMAETCCagAU9GpkLmIAJmIAJmEB6BCzo6bWJa2QCJmACJmAC0QQs6NHIXMAETMAETMAE0iNgQU+vTVwjEzABEzABE4gmYEGPRuYCJmACJmACJpAeAQt6em3iGpmACZiACZhANAELejQyFzABEzABEzCB9AhY0NNrE9fIBEzABEzABKIJWNCjkbmACZiACZiACaRHwIKeXpu4RiZgAiZgAiYQTcCCHo3MBUzABEzABEwgPQIW9PTaxDUyARMwARMwgWgCFvRoZC5gAiZgAiZgAukRsKCn1yaukQmYgAmYgAlEE7CgRyNzARMwARMwARNIj4AFPb02cY1MwARMwARMIJqABT0amQuYgAmYgAmYQHoELOjptYlrZAImYAImYALRBCzo0chcwARMwARMwATSI2BBT69NXCMTMAETMAETiCZgQY9G5gImYAImYAImkB4BC3p6beIamYAJmIAJmEA0AQt6NDIXMAETMAETMIH0CFjQ02sT18gETMAETMAEoglY0KORuYAJmIAJmIAJpEfAgp5em7hGJmACJmACJhBNwIIejcwFTMAETMAETCA9Ahb09NrENTIBEzABEzCBaAIW9GhkLmACJmACJmAC6RGwoKfXJq6RCZiACZiACUQTsKBHI3MBEzABEzABE0iPgAU9vTZxjUzABEzABEwgmoAFPRqZC5iACZiACZhAegQs6Om1iWtkAiZgAiZgAtEELOjRyFzABEzABEzABNIjYEFPr01cIxMwARMwAROIJmBBj0bmAiZgAiZgAiaQHgELenpt4hqZgAmYgAmYQDQBC3o0MhcwARMwARMwgfQIWNDTaxPXyARMwARMwASiCVjQo5G5gAmYgAmYgAmkR8CCnl6buEYmYAImYAImEE3Agh6NzAVMwARMwARMID0CFvT02sQ1MgETMAETMIFoAhb0aGQuYAImYAImYALpEbCgp9cmrpEJmIAJmIAJRBOwoEcjcwETMAETMAETSI+ABT29NnGNTMAETMAETCCagAU9GpkLmIAJmIAJmEB6BCzo6bWJa2QCJmACJmAC0QQs6NHIXMAETMAETMAE0iNgQU+vTVwjEzABEzABE4gmYEGPRuYCJmACJmACJpAeAQt6em3iGpmACZiACZhANAELejQyFzABEzABEzCB9AhY0NNrE9fIBEzABEzABKIJWNCjkbmACZiACZiACaRHwIKeXpu4RiZgAiZgAiYQTcCCHo3MBUzABEzABEwgPQIW9PTaxDUyARMwARMwgWgCFvRoZC5gAiZgAiZgAukRsKCn1yaukQmYgAmYgAlEE7CgRyNzARMwARMwARNIj4AFPb02cY1MwARMwARMIJqABT0amQuYgAmYgAmYQHoELOjptYlrZAImYAImYALRBCzo0chcwARMwARMwATSI2BBT69NXCMTMAETMAETiCZgQY9G5gImYAImYAImkB4BC3p6beIamYAJmIAJmEA0AQt6NDIXMAETMAETMIH0CFjQ02sT18gETMAETMAEoglY0KORuYAJmIAJmIAJpEfAgp5em7hGJmACJmACJhBNwIIejcwFTMAETMAETCA9Ahb09NrENTIBEzABEzCBaAIW9GhkLmACJmACJmAC6RGwoKfXJq6RCZiACZiACUQTsKBHI3MBEzABEzABE0iPgAU9vTZxjUzABEzABEwgmoAFPRqZC5iACZiACZhAegQs6Om1iWtkAiZgAiZgAtEELOjRyFzABEzABEzABNIjYEFPr01cIxMwARMwAROIJmBBj0bmAiZgAiZgAiaQHgELenpt4hqZgAmYgAmYQDQBC3o0MhcwARMwARMwgfQIWNDTaxPXyARMwARMwASiCVjQo5G5gAmYgAmYgAmkR8CCnl6buEYmYAImYAImEE3Agh6NzAVMwARMwARMID0CFvT02sQ1MgETMAETMIFoAhb0aGQuYAImYAImYALpEbCgp9cmrpEJmIAJmIAJRBOwoEcjcwETMAETMAETSI+ABT29NnGNTMAETMAETCCagAU9GpkLmIAJmIAJmEB6BCzo6bWJa2QCJmACJmAC0QQs6NHIXMAETMAETMAE0iNgQU+vTVwjEzABEzABE4gmYEGPRuYCJmACJmACJpAeAQt6em3iGpmACZiACZhANAELejQyFzABEzABEzCB9AhY0NNrE9fIBEzABEzABKIJWNCjkbmACZiACZiACaRHwIKeXpu4RiZgAiZgAiYQTcCCHo3MBUzABEzABEwgPQIW9PTaxDUyARMwARMwgWgCFvRoZC5gAiZgAiZgAukRsKCn1yaukQmYgAmYgAlEE7CgRyNzARMwARMwARNIj4AFPb02cY1MwARMwARMIJqABT0amQuYgAmYgAmYQHoELOjptYlrZAImYAImYALRBCzo0chcwARMwARMwATSI2BBT69NXCMTMAETMAETiCZgQY9G5gImYAImYAImkB4BC3p6beIamYAJmIAJmEA0AQt6NDIXMAETMAETMIH0CFjQ02sT18gETMAETMAEoglY0KORuYAJmIAJmIAJpEfAgp5em7hGJmACJmACJhBNwIIejcwFTMAETMAETCA9Ahb09NrENTIBEzABEzCBaAIW9GhkLmACJmACJmAC6RGwoKfXJq6RCZiACZiACUQTsKBHI3MBEzABEzABE0iPgAU9vTZxjUzABEzABEwgmoAFPRqZC5iACZiACZhAegQs6Om1iWtkAiZgAiZgAtEELOjRyFzABEzABEzABNIj8H9zFZqzmnFMpwAAAABJRU5ErkJggg=="),
                qa = r(t.onlycoverimage, "false").toString().toLowerCase(), Na = r(t.coverstyle, "circle").toString().toLowerCase(), da = r(t.usevisualizer, "fake").toString().toLowerCase(), ja = parseInt(r(t.visualizertype, 4)), mb = r(t.itunestoken, ""), sa = r(t.metadatatechnic, "php").toString().toLowerCase(), Db = r(t.ownmetadataurl, ""), Ca = r(t.corsproxy, ""), vb = r(t.usestreamcorsproxy, "false").toString().toLowerCase(), ia = r(t.streamurl, ""), kb = r(t.streamtype, "other").toString().toLowerCase(), Ma = r(t.icecastmountpoint, ""), Fb = r(t.radionomyid,
                    ""), Gb = r(t.radionomyapikey, ""), Hb = r(t.radiojarid, ""), Ib = r(t.radiocoid, ""), Ub = r(t.shoutcastpath, ""), Eb = r(t.shoutcastid, ""), $a = r(t.streamsuffix, "/;type=mp3"), Ab = parseInt(r(t.metadatainterval, 2E4)), Ra = parseInt(r(t.volume, 90)), Vb = r(t.debug, "false").toString().toLowerCase(), oa = r(t.autoplay, "false").toString().toLowerCase(), nb = r(t.displayliveicon, "true").toString().toLowerCase(), Lb = r(t.displayvisualizericon, "true").toString().toLowerCase(), W = r(t.multicolorvisualizer, "false").toString().toLowerCase(), L =
                r(t.color1, "#e66c35").toString().toLowerCase(), M = r(t.color2, "#d04345").toString().toLowerCase(), N = r(t.color3, "#85a752").toString().toLowerCase(), O = r(t.color4, "#067dcc").toString().toLowerCase(), Jb = r(t.visualizeropacity, "0.4"), c, x = 0, E = 0, xa = "", S = 0, la = 0, Y = !1, gb = !1, sb, Aa, k, ua, rb, Ea = 0, Fa = 0, g, Za, F, Ua, q = [], V = [], Ha = 0, Ga = [], ta = 0, Va = !1, pa = (new LUNARADIOParser).getResult(), Ta = !1, ya = "", ca = 0; 511 > ca; ca += 1) Ga.push(Math.floor(254 / (ca / 100 + 1) * Math.random() + 1));
        V = [];
        for (ca = 0; 512 > ca; ca++) {
            var Ba = {};
            Ba.x = Math.floor(1920 *
                Math.random() + 1);
            Ba.y = Math.floor(1080 * Math.random() + 1);
            Ba.radius = Math.floor(1080 * Math.random() / 5 + 2);
            Ba.alpha = 1;
            Ba.speed = Math.floor(50 * Math.random() + 30);
            V.push(Ba)
        }
        var ha = "",
            cb = !1;
        d(document).ready(function() {
            ha = P("lunaradio.min.js");
            w("SCRIPT FOLDER: " + ha);
            w("USERAGENT: " + navigator.userAgent);
            w("BROWSER: " + pa.browser.name);
            w("OS: " + pa.os.name);
            w("usevisualizer: " + da);
            w("visualizertype: " + ja);
            var b = "mobile" == pa.device.type ? !0 : !1;
            w("ismobile: " + b);
            if ("true" == oa) {
                oa = "false";
                try {
                    var a = new Audio;
                    a.autoplay = !0;
                    a.addEventListener("error", function(h) {
                        w(a.readyState)
                    });
                    a.addEventListener("loadedmetadata", function() {
                        w("checkaudio loadedmetadata")
                    }, !1);
                    a.addEventListener("ended", function() {
                        w("checkaudio ended")
                    }, !1);
                    a.addEventListener("play", function() {
                        w("checkaudio play");
                        w("autoplay is allowed by browser");
                        oa = "true"
                    }, !1);
                    a.addEventListener("loadstart", function() {
                        w("checkaudio loadstart")
                    }, !1);
                    a.addEventListener("waiting", function() {
                        w("checkaudio waiting")
                    }, !1);
                    a.addEventListener("seeked", function() {
                            w("checkaudio seeked")
                        },
                        !1);
                    a.addEventListener("canplaythrough", function() {
                        w("checkaudio canplaythrough");
                        I(bb)
                    }, !1);
                    a.addEventListener("pause", function() {
                        w("checkaudio pause")
                    }, !1);
                    a.src = "data:audio/mpeg;base64,/+MYxAAAAANIAUAAAASEEB/jwOFM/0MM/90b/+RhST//w4NFwOjf///PZu////9lns5GFDv//l9GlUIEEIAAAgIg8Ir/JGq3/+MYxDsLIj5QMYcoAP0dv9HIjUcH//yYSg+CIbkGP//8w0bLVjUP///3Z0x5QCAv/yLjwtGKTEFNRTMuOTeqqqqqqqqqqqqq/+MYxEkNmdJkUYc4AKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"
                } catch (h) {
                    w("autoplay is not allowed by browser"),
                        w(h), oa = "false", I(bb)
                }
            } else I(bb)
        });
        var Xb = function(b) {
            if ("function" === typeof Promise) return new Promise(b);
            this._handler = b;
            this.then = function(a, h) {
                this._handler(a, h)
            };
            return this
        };
        this.Promise = function(b) {
            return new Xb(b)
        };
        var ab = {
            _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: function(b) {
                var a = "",
                    h = 0;
                for (b = ab._utf8_encode(b); h < b.length;) {
                    var p = b.charCodeAt(h++);
                    var v = b.charCodeAt(h++);
                    var z = b.charCodeAt(h++);
                    var m = p >> 2;
                    p = (p & 3) << 4 | v >> 4;
                    var l = (v & 15) << 2 | z >> 6;
                    var D =
                        z & 63;
                    isNaN(v) ? l = D = 64 : isNaN(z) && (D = 64);
                    a = a + this._keyStr.charAt(m) + this._keyStr.charAt(p) + this._keyStr.charAt(l) + this._keyStr.charAt(D)
                }
                return a
            },
            decode: function(b) {
                var a = "",
                    h = 0;
                for (b = b.replace(/[^A-Za-z0-9\+\/=]/g, ""); h < b.length;) {
                    var p = this._keyStr.indexOf(b.charAt(h++));
                    var v = this._keyStr.indexOf(b.charAt(h++));
                    var z = this._keyStr.indexOf(b.charAt(h++));
                    var m = this._keyStr.indexOf(b.charAt(h++));
                    p = p << 2 | v >> 4;
                    v = (v & 15) << 4 | z >> 2;
                    var l = (z & 3) << 6 | m;
                    a += String.fromCharCode(p);
                    64 != z && (a += String.fromCharCode(v));
                    64 != m && (a += String.fromCharCode(l))
                }
                return a = ab._utf8_decode(a)
            },
            _utf8_encode: function(b) {
                b = b.replace(/\r\n/g, "\n");
                for (var a = "", h = 0; h < b.length; h++) {
                    var p = b.charCodeAt(h);
                    128 > p ? a += String.fromCharCode(p) : (127 < p && 2048 > p ? a += String.fromCharCode(p >> 6 | 192) : (a += String.fromCharCode(p >> 12 | 224), a += String.fromCharCode(p >> 6 & 63 | 128)), a += String.fromCharCode(p & 63 | 128))
                }
                return a
            },
            _utf8_decode: function(b) {
                for (var a = "", h = 0, p, v, z; h < b.length;) z = b.charCodeAt(h), 128 > z ? (a += String.fromCharCode(z), h++) : 191 < z && 224 > z ? (p = b.charCodeAt(h +
                    1), a += String.fromCharCode((z & 31) << 6 | p & 63), h += 2) : (p = b.charCodeAt(h + 1), v = b.charCodeAt(h + 2), a += String.fromCharCode((z & 15) << 12 | (p & 63) << 6 | v & 63), h += 3);
                return a
            }
        };
        jQuery.fn.extend({
            lunaradiodisableSelection: function() {
                this.each(function() {
                    this.onselectstart = function() {
                        return !1
                    };
                    this.onmousedown = function(b) {
                        return !1
                    };
                    this.unselectable = "on";
                    jQuery(this).css("-moz-user-select", "none");
                    jQuery(this).css("-webkit-user-select", "none");
                    jQuery(this).css("-webkit-touch-callout", "none");
                    jQuery(this).css("-khtml-user-select",
                        "none");
                    jQuery(this).css("-ms-user-select", "none");
                    jQuery(this).css("user-select", "none");
                    jQuery(this).css("tap-highlight-color", "rgba(0, 0, 0, 0)");
                    jQuery(this).css("-o-tap-highlight-color", "rgba(0, 0, 0, 0)");
                    jQuery(this).css("-moz-tap-highlight-color", "rgba(0, 0, 0, 0)");
                    jQuery(this).css("-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)")
                })
            }
        });
        this.play = function() {
            Ta && (w("API CALL: play"), Y || (Y = !0, Ja()))
        };
        this.pause = function() {
            Ta && (w("API CALL: pause"), Y && (Y = !1, Ya()))
        }
    }
});
(function(d, G) {
    var n = {
            extend: function(e, B) {
                var C = {},
                    y;
                for (y in e) C[y] = B[y] && 0 === B[y].length % 2 ? B[y].concat(e[y]) : e[y];
                return C
            },
            has: function(e, B) {
                return "string" === typeof e ? -1 !== B.toLowerCase().indexOf(e.toLowerCase()) : !1
            },
            lowerize: function(e) {
                return e.toLowerCase()
            },
            major: function(e) {
                return "string" === typeof e ? e.replace(/[^\d\.]/g, "").split(".")[0] : G
            },
            trim: function(e) {
                return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }
        },
        t = function(e, B) {
            for (var C = 0, y, K, R, Q, wa, Z; C < B.length && !wa;) {
                var Ka = B[C],
                    La =
                    B[C + 1];
                for (y = K = 0; y < Ka.length && !wa;)
                    if (wa = Ka[y++].exec(e))
                        for (R = 0; R < La.length; R++) Z = wa[++K], Q = La[R], "object" === typeof Q && 0 < Q.length ? 2 == Q.length ? this[Q[0]] = "function" == typeof Q[1] ? Q[1].call(this, Z) : Q[1] : 3 == Q.length ? this[Q[0]] = "function" !== typeof Q[1] || Q[1].exec && Q[1].test ? Z ? Z.replace(Q[1], Q[2]) : G : Z ? Q[1].call(this, Z, Q[2]) : G : 4 == Q.length && (this[Q[0]] = Z ? Q[3].call(this, Z.replace(Q[1], Q[2])) : G) : this[Q] = Z ? Z : G;
                C += 2
            }
        },
        I = function(e, B) {
            for (var C in B)
                if ("object" === typeof B[C] && 0 < B[C].length)
                    for (var y = 0; y < B[C].length; y++) {
                        if (n.has(B[C][y],
                                e)) return "?" === C ? G : C
                    } else if (n.has(B[C], e)) return "?" === C ? G : C;
            return e
        },
        r = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2E3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            "8.1": "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM"
        },
        P = {
            browser: [
                [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                ["name", "version"],
                [/(opios)[\/\s]+([\w\.]+)/i],
                [
                    ["name", "Opera Mini"], "version"
                ],
                [/\s(opr)\/([\w\.]+)/i],
                [
                    ["name",
                        "Opera"
                    ], "version"
                ],
                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],
                ["name", "version"],
                [/(konqueror)\/([\w\.]+)/i],
                [
                    ["name", "Konqueror"], "version"
                ],
                [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                [
                    ["name", "IE"], "version"
                ],
                [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
                [
                    ["name", "Edge"], "version"
                ],
                [/(yabrowser)\/([\w\.]+)/i],
                [
                    ["name", "Yandex"], "version"
                ],
                [/(Avast)\/([\w\.]+)/i],
                [
                    ["name", "Avast Secure Browser"], "version"
                ],
                [/(AVG)\/([\w\.]+)/i],
                [
                    ["name", "AVG Secure Browser"], "version"
                ],
                [/(puffin)\/([\w\.]+)/i],
                [
                    ["name", "Puffin"], "version"
                ],
                [/(focus)\/([\w\.]+)/i],
                [
                    ["name", "Firefox Focus"], "version"
                ],
                [/(opt)\/([\w\.]+)/i],
                [
                    ["name", "Opera Touch"], "version"
                ],
                [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                [
                    ["name", "UCBrowser"], "version"
                ],
                [/(comodo_dragon)\/([\w\.]+)/i],
                [
                    ["name", /_/g, " "], "version"
                ],
                [/(windowswechat qbcore)\/([\w\.]+)/i],
                [
                    ["name", "WeChat(Win) Desktop"], "version"
                ],
                [/(micromessenger)\/([\w\.]+)/i],
                [
                    ["name", "WeChat"], "version"
                ],
                [/(brave)\/([\w\.]+)/i],
                [
                    ["name", "Brave"], "version"
                ],
                [/(qqbrowserlite)\/([\w\.]+)/i],
                ["name", "version"],
                [/(QQ)\/([\d\.]+)/i],
                ["name", "version"],
                [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                ["name", "version"],
                [/(baiduboxapp)[\/\s]?([\w\.]+)/i],
                ["name", "version"],
                [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                ["name", "version"],
                [/(MetaSr)[\/\s]?([\w\.]+)/i],
                ["name"],
                [/(LBBROWSER)/i],
                ["name"],
                [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                ["version", ["name", "MIUI Browser"]],
                [/;fbav\/([\w\.]+);/i],
                ["version", ["name", "Facebook"]],
                [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
                ["name", "version"],
                [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                ["version", ["name", "Chrome Headless"]],
                [/\swv\).+(chrome)\/([\w\.]+)/i],
                [
                    ["name", /(.+)/, "$1 WebView"], "version"
                ],
                [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                [
                    ["name", /(.+(?:g|us))(.+)/,
                        "$1 $2"
                    ], "version"
                ],
                [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                ["version", ["name", "Android Browser"]],
                [/(sailfishbrowser)\/([\w\.]+)/i],
                [
                    ["name", "Sailfish Browser"], "version"
                ],
                [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                ["name", "version"],
                [/(dolfin)\/([\w\.]+)/i],
                [
                    ["name", "Dolphin"], "version"
                ],
                [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
                [
                    ["name", "360 Browser"]
                ],
                [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                [
                    ["name", "Chrome"], "version"
                ],
                [/(coast)\/([\w\.]+)/i],
                [
                    ["name", "Opera Coast"], "version"
                ],
                [/fxios\/([\w\.-]+)/i],
                ["version", ["name", "Firefox"]],
                [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                ["version", ["name", "Mobile Safari"]],
                [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                ["version", "name"],
                [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                [
                    ["name", "GSA"], "version"
                ],
                [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                ["name", ["version", I, {
                    "1.0": "/8",
                    "1.2": "/1",
                    "1.3": "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/"
                }]],
                [/(webkit|khtml)\/([\w\.]+)/i],
                ["name", "version"],
                [/(navigator|netscape)\/([\w\.-]+)/i],
                [
                    ["name", "Netscape"], "version"
                ],
                [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i,
                    /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i
                ],
                ["name", "version"]
            ],
            cpu: [
                [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                [
                    ["architecture", "amd64"]
                ],
                [/(ia32(?=;))/i],
                [
                    ["architecture", n.lowerize]
                ],
                [/((?:i[346]|x)86)[;\)]/i],
                [
                    ["architecture", "ia32"]
                ],
                [/windows\s(ce|mobile);\sppc;/i],
                [
                    ["architecture", "arm"]
                ],
                [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                [
                    ["architecture", /ower/, "", n.lowerize]
                ],
                [/(sun4\w)[;\)]/i],
                [
                    ["architecture", "sparc"]
                ],
                [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                [
                    ["architecture", n.lowerize]
                ]
            ],
            device: [
                [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
                ["model", "vendor", ["type", "tablet"]],
                [/applecoremedia\/[\w\.]+ \((ipad)/],
                ["model", ["vendor", "Apple"],
                    ["type", "tablet"]
                ],
                [/(apple\s{0,1}tv)/i],
                [
                    ["model", "Apple TV"],
                    ["vendor", "Apple"],
                    ["type", "smarttv"]
                ],
                [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                ["vendor", "model", ["type", "tablet"]],
                [/(kf[A-z]+)\sbuild\/.+silk\//i],
                ["model", ["vendor", "Amazon"],
                    ["type", "tablet"]
                ],
                [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
                [
                    ["model", I, {
                        "Fire Phone": ["SD", "KF"]
                    }],
                    ["vendor", "Amazon"],
                    ["type", "mobile"]
                ],
                [/android.+aft([bms])\sbuild/i],
                ["model", ["vendor", "Amazon"],
                    ["type", "smarttv"]
                ],
                [/\((ip[honed|\s\w*]+);.+(apple)/i],
                ["model", "vendor", ["type", "mobile"]],
                [/\((ip[honed|\s\w*]+);/i],
                ["model", ["vendor", "Apple"],
                    ["type", "mobile"]
                ],
                [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
                    /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i
                ],
                ["vendor", "model", ["type", "mobile"]],
                [/\(bb10;\s(\w+)/i],
                ["model", ["vendor", "BlackBerry"],
                    ["type", "mobile"]
                ],
                [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],
                ["model", ["vendor", "Asus"],
                    ["type", "tablet"]
                ],
                [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                [
                    ["vendor", "Sony"],
                    ["model", "Xperia Tablet"],
                    ["type", "tablet"]
                ],
                [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                ["model", ["vendor",
                        "Sony"
                    ],
                    ["type", "mobile"]
                ],
                [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                ["vendor", "model", ["type", "console"]],
                [/android.+;\s(shield)\sbuild/i],
                ["model", ["vendor", "Nvidia"],
                    ["type", "console"]
                ],
                [/(playstation\s[34portablevi]+)/i],
                ["model", ["vendor", "Sony"],
                    ["type", "console"]
                ],
                [/(sprint\s(\w+))/i],
                [
                    ["vendor", I, {
                        HTC: "APA",
                        Sprint: "Sprint"
                    }],
                    ["model", I, {
                        "Evo Shift 4G": "7373KT"
                    }],
                    ["type", "mobile"]
                ],
                [/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                ["vendor", ["model", /_/g, " "],
                    ["type", "mobile"]
                ],
                [/(nexus\s9)/i],
                ["model", ["vendor", "HTC"],
                    ["type", "tablet"]
                ],
                [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i],
                ["model", ["vendor", "Huawei"],
                    ["type", "mobile"]
                ],
                [/android.+(bah2?-a?[lw]\d{2})/i],
                ["model", ["vendor", "Huawei"],
                    ["type", "tablet"]
                ],
                [/(microsoft);\s(lumia[\s\w]+)/i],
                ["vendor", "model", ["type", "mobile"]],
                [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                ["model", ["vendor", "Microsoft"],
                    ["type", "console"]
                ],
                [/(kin\.[onetw]{3})/i],
                [
                    ["model", /\./g,
                        " "
                    ],
                    ["vendor", "Microsoft"],
                    ["type", "mobile"]
                ],
                [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                ["model", ["vendor", "Motorola"],
                    ["type", "mobile"]
                ],
                [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                ["model", ["vendor", "Motorola"],
                    ["type", "tablet"]
                ],
                [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                [
                    ["vendor", n.trim],
                    ["model", n.trim],
                    ["type", "smarttv"]
                ],
                [/hbbtv.+maple;(\d+)/i],
                [
                    ["model", /^/, "SmartTV"],
                    ["vendor",
                        "Samsung"
                    ],
                    ["type", "smarttv"]
                ],
                [/\(dtv[\);].+(aquos)/i],
                ["model", ["vendor", "Sharp"],
                    ["type", "smarttv"]
                ],
                [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                [
                    ["vendor", "Samsung"], "model", ["type", "tablet"]
                ],
                [/smart-tv.+(samsung)/i],
                ["vendor", ["type", "smarttv"], "model"],
                [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
                [
                    ["vendor", "Samsung"], "model", ["type", "mobile"]
                ],
                [/sie-(\w*)/i],
                ["model", ["vendor",
                        "Siemens"
                    ],
                    ["type", "mobile"]
                ],
                [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
                [
                    ["vendor", "Nokia"], "model", ["type", "mobile"]
                ],
                [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                ["model", ["vendor", "Acer"],
                    ["type", "tablet"]
                ],
                [/android.+([vl]k\-?\d{3})\s+build/i],
                ["model", ["vendor", "LG"],
                    ["type", "tablet"]
                ],
                [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                [
                    ["vendor", "LG"], "model", ["type", "tablet"]
                ],
                [/(lg) netcast\.tv/i],
                ["vendor", "model", ["type", "smarttv"]],
                [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i,
                    /android.+lg(\-?[\d\w]+)\s+build/i
                ],
                ["model", ["vendor", "LG"],
                    ["type", "mobile"]
                ],
                [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
                ["vendor", "model", ["type", "tablet"]],
                [/android.+(ideatab[a-z0-9\-\s]+)/i],
                ["model", ["vendor", "Lenovo"],
                    ["type", "tablet"]
                ],
                [/(lenovo)[_\s-]?([\w-]+)/i],
                ["vendor", "model", ["type", "mobile"]],
                [/linux;.+((jolla));/i],
                ["vendor", "model", ["type", "mobile"]],
                [/((pebble))app\/[\d\.]+\s/i],
                ["vendor", "model", ["type", "wearable"]],
                [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                ["vendor",
                    "model", ["type", "mobile"]
                ],
                [/crkey/i],
                [
                    ["model", "Chromecast"],
                    ["vendor", "Google"],
                    ["type", "smarttv"]
                ],
                [/android.+;\s(glass)\s\d/i],
                ["model", ["vendor", "Google"],
                    ["type", "wearable"]
                ],
                [/android.+;\s(pixel c)[\s)]/i],
                ["model", ["vendor", "Google"],
                    ["type", "tablet"]
                ],
                [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],
                ["model", ["vendor", "Google"],
                    ["type", "mobile"]
                ],
                [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,
                    /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i
                ],
                [
                    ["model", /_/g, " "],
                    ["vendor", "Xiaomi"],
                    ["type", "mobile"]
                ],
                [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
                [
                    ["model", /_/g, " "],
                    ["vendor", "Xiaomi"],
                    ["type", "tablet"]
                ],
                [/android.+;\s(m[1-5]\snote)\sbuild/i],
                ["model", ["vendor", "Meizu"],
                    ["type", "mobile"]
                ],
                [/(mz)-([\w-]{2,})/i],
                [
                    ["vendor", "Meizu"], "model", ["type", "mobile"]
                ],
                [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})[\s)]/i],
                ["model", ["vendor", "OnePlus"],
                    ["type", "mobile"]
                ],
                [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                ["model", ["vendor", "RCA"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
                ["model", ["vendor", "Dell"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                ["model", ["vendor", "Verizon"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                [
                    ["vendor", "Barnes & Noble"], "model", ["type", "tablet"]
                ],
                [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                ["model", ["vendor", "NuVision"],
                    ["type", "tablet"]
                ],
                [/android.+;\s(k88)\sbuild/i],
                ["model", ["vendor", "ZTE"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                ["model", ["vendor", "Swiss"],
                    ["type", "mobile"]
                ],
                [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                ["model", ["vendor", "Swiss"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                ["model", ["vendor", "Zeki"],
                    ["type", "tablet"]
                ],
                [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
                [
                    ["vendor", "Dragon Touch"], "model", ["type", "tablet"]
                ],
                [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                ["model", ["vendor", "Insignia"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                ["model", ["vendor", "NextBook"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/]\s*(Xtreme_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                [
                    ["vendor", "Voice"], "model", ["type", "mobile"]
                ],
                [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                [
                    ["vendor", "LvTel"], "model", ["type", "mobile"]
                ],
                [/android.+;\s(PH-1)\s/i],
                ["model", ["vendor", "Essential"],
                    ["type", "mobile"]
                ],
                [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                ["model", ["vendor", "Envizen"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                ["vendor", "model", ["type", "tablet"]],
                [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                ["model", ["vendor", "MachSpeed"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                ["vendor", "model", ["type", "tablet"]],
                [/android.+[;\/]\s*TU_(1491)\s+build/i],
                ["model", ["vendor", "Rotor"],
                    ["type", "tablet"]
                ],
                [/android.+(KS(.+))\s+build/i],
                ["model", ["vendor", "Amazon"],
                    ["type", "tablet"]
                ],
                [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                ["vendor", "model", ["type", "tablet"]],
                [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                [
                    ["type", n.lowerize], "vendor", "model"
                ],
                [/[\s\/\(](smart-?tv)[;\)]/i],
                [
                    ["type", "smarttv"]
                ],
                [/(android[\w\.\s\-]{0,9});.+build/i],
                ["model", ["vendor", "Generic"]]
            ],
            engine: [
                [/windows.+\sedge\/([\w\.]+)/i],
                ["version", ["name", "EdgeHTML"]],
                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                ["version", ["name", "Blink"]],
                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                    /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i
                ],
                ["name", "version"],
                [/rv:([\w\.]{1,9}).+(gecko)/i],
                ["version", "name"]
            ],
            os: [
                [/microsoft\s(windows)\s(vista|xp)/i],
                ["name", "version"],
                [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                ["name", ["version", I, r]],
                [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                [
                    ["name", "Windows"],
                    ["version", I, r]
                ],
                [/\((bb)(10);/i],
                [
                    ["name", "BlackBerry"], "version"
                ],
                [/(blackberry)\w*\/?([\w\.]*)/i,
                    /(tizen|kaios)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i
                ],
                ["name", "version"],
                [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                [
                    ["name", "Symbian"], "version"
                ],
                [/\((series40);/i],
                ["name"],
                [/mozilla.+\(mobile;.+gecko.+firefox/i],
                [
                    ["name", "Firefox OS"], "version"
                ],
                [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
                    /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i
                ],
                ["name", "version"],
                [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                [
                    ["name", "Chromium OS"], "version"
                ],
                [/(sunos)\s?([\w\.\d]*)/i],
                [
                    ["name", "Solaris"], "version"
                ],
                [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                ["name", "version"],
                [/(haiku)\s(\w+)/i],
                ["name", "version"],
                [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
                [
                    ["version", /_/g, "."],
                    ["name", "iOS"]
                ],
                [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
                [
                    ["name", "Mac OS"],
                    ["version", /_/g, "."]
                ],
                [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
                ["name", "version"]
            ]
        },
        H = function(e, B) {
            "object" === typeof e && (B = e, e = G);
            if (!(this instanceof H)) return (new H(e, B)).getResult();
            var C = e || (d && d.navigator && d.navigator.userAgent ? d.navigator.userAgent : ""),
                y = B ? n.extend(P, B) : P;
            this.getBrowser = function() {
                var K = {
                    name: G,
                    version: G
                };
                t.call(K, C, y.browser);
                K.major = n.major(K.version);
                return K
            };
            this.getCPU = function() {
                var K = {
                    architecture: G
                };
                t.call(K, C, y.cpu);
                return K
            };
            this.getDevice = function() {
                var K = {
                    vendor: G,
                    model: G,
                    type: G
                };
                t.call(K, C, y.device);
                return K
            };
            this.getEngine = function() {
                var K = {
                    name: G,
                    version: G
                };
                t.call(K, C, y.engine);
                return K
            };
            this.getOS = function() {
                var K = {
                    name: G,
                    version: G
                };
                t.call(K, C, y.os);
                return K
            };
            this.getResult = function() {
                return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU()
                }
            };
            this.getUA = function() {
                return C
            };
            this.setUA = function(K) {
                C = K;
                return this
            };
            return this
        };
    H.VERSION = "0.7.21";
    H.BROWSER = {
        NAME: "name",
        MAJOR: "major",
        VERSION: "version"
    };
    H.CPU = {
        ARCHITECTURE: "architecture"
    };
    H.DEVICE = {
        MODEL: "model",
        VENDOR: "vendor",
        TYPE: "type",
        CONSOLE: "console",
        MOBILE: "mobile",
        SMARTTV: "smarttv",
        TABLET: "tablet",
        WEARABLE: "wearable",
        EMBEDDED: "embedded"
    };
    H.ENGINE = {
        NAME: "name",
        VERSION: "version"
    };
    H.OS = {
        NAME: "name",
        VERSION: "version"
    };
    "undefined" !== typeof exports ? ("undefined" !== typeof module && module.exports && (exports = module.exports =
        H), exports.LUNARADIOParser = H) : "function" === typeof define && define.amd ? define(function() {
        return H
    }) : d && (d.LUNARADIOParser = H);
    var T = d && (d.jQuery || d.Zepto);
    if (T && !T.ua) {
        var X = new H;
        T.ua = X.getResult();
        T.ua.get = function() {
            return X.getUA()
        };
        T.ua.set = function(e) {
            X.setUA(e);
            e = X.getResult();
            for (var B in e) T.ua[B] = e[B]
        }
    }
})("object" === typeof window ? window : this);
(function(d, G) {
    "function" === typeof define && define.amd ? define(["jquery"], G) : d.jQuery ? G(d.jQuery) : G(d.Zepto)
})(this, function(d, G) {
    d.fn.lunaradioMarquee = function(n) {
        var t = "string" === typeof n,
            I = Array.prototype.slice.call(arguments, 1),
            r = this;
        n = !t && I.length ? d.extend.apply(null, [!0, n].concat(I)) : n;
        if (t && "_" === n.charAt(0)) return r;
        t ? this.each(function() {
            var P = d(this).data("lunaradioMarquee"),
                H = P && d.isFunction(P[n]) ? P[n].apply(P, I) : P;
            if (H !== P && H !== G) return r = H, !1
        }) : this.each(function() {
            d(this).data("lunaradioMarquee",
                new d.lunaradioMarquee(this, n))
        });
        return r
    };
    d.lunaradioMarquee = function(n, t) {
        function I() {
            var B = T ? -1 : 1,
                C = T ? -1 * P : 0;
            r = (T ? 0 > r : r > -1 * P) ? r - H * B : C;
            e.style.whiteSpace = "nowrap";
            e.style.transform = "translate(" + r + "px, 0) translateZ(0)";
            window.requestAnimationFrame(I) || window.mozRequestAnimationFrame(I) || window.webkitRequestAnimationFrame(I) || window.msRequestAnimationFrame(I) || window.oRequestAnimationFrame(I)
        }
        var r = 0,
            P, H = n.dataset.speed || .25,
            T = n.dataset.reverse;
        n.parentElement.getBoundingClientRect();
        var X = n.children[0];
        var e = document.createElement("div");
        e.style.whiteSpace = "nowrap";
        (function() {
            X.style.display = "inline-block";
            P = X.offsetWidth;
            for (var B = 0; 20 > B; B++) {
                var C = X.cloneNode(!0);
                C.style.display = "inline-block";
                e.appendChild(C)
            }
            T && (r = -1 * P);
            n.classList.add("is-init")
        })();
        e.appendChild(X);
        n.appendChild(e);
        I();
        this.play = function() {
            I()
        };
        this.pause = function() {}
    }
});
(function(d) {
    function G(e, B, C) {
        if ("touch" !== B.substr(0, 5)) return d(e).unbind(B, C);
        var y;
        for (y = 0; y < n._binds.length; y++) n._binds[y].elem === e && n._binds[y].type === B && n._binds[y].func === C && (document.addEventListener ? e.removeEventListener(B, n._binds[y].fnc, !1) : e.detachEvent("on" + B, n._binds[y].fnc), n._binds.splice(y--, 1))
    }

    function n(e, B, C, y) {
        if ("touch" !== B.substr(0, 5)) return d(e).bind(B, y, C);
        if (n[B]) return n[B].bind(e, B, C, y);
        var K = function(R) {
            R || (R = window.event);
            R.stopPropagation || (R.stopPropagation = function() {
                this.cancelBubble = !0
            });
            R.data = y;
            C.call(e, R)
        };
        document.addEventListener ? e.addEventListener(B, K, !1) : e.attachEvent("on" + B, K);
        n._binds.push({
            elem: e,
            type: B,
            func: C,
            fnc: K
        })
    }

    function t(e) {
        e.data.position.x = e.pageX;
        e.data.position.y = e.pageY;
        e.data.start.x = e.pageX;
        e.data.start.y = e.pageY;
        e.data.event = e;
        e.data.onstart && e.data.onstart.call(e.data.element, e.data) || (e.preventDefault && e.data.preventDefault && e.preventDefault(), e.stopPropagation && e.data.stopPropagation && e.stopPropagation(), n(e.data.affects, "mousemove", I, e.data), n(e.data.affects,
            "mouseup", r, e.data))
    }

    function I(e) {
        e.preventDefault && e.data.preventDefault && e.preventDefault();
        e.stopPropagation && e.data.preventDefault && e.stopPropagation();
        e.data.move.x = e.pageX - e.data.position.x;
        e.data.move.y = e.pageY - e.data.position.y;
        e.data.position.x = e.pageX;
        e.data.position.y = e.pageY;
        e.data.offset.x = e.pageX - e.data.start.x;
        e.data.offset.y = e.pageY - e.data.start.y;
        e.data.event = e;
        e.data.onmove && e.data.onmove.call(e.data.element, e.data)
    }

    function r(e) {
        e.preventDefault && e.data.preventDefault && e.preventDefault();
        e.stopPropagation && e.data.stopPropagation && e.stopPropagation();
        G(e.data.affects, "mousemove", I);
        G(e.data.affects, "mouseup", r);
        e.data.event = e;
        e.data.onfinish && e.data.onfinish.call(e.data.element, e.data)
    }

    function P(e) {
        e.data.position.x = e.touches[0].pageX;
        e.data.position.y = e.touches[0].pageY;
        e.data.start.x = e.touches[0].pageX;
        e.data.start.y = e.touches[0].pageY;
        e.data.event = e;
        e.data.onstart && e.data.onstart.call(e.data.element, e.data) || (e.preventDefault && e.data.preventDefault && e.preventDefault(), e.stopPropagation &&
            e.data.stopPropagation && e.stopPropagation(), n(e.data.affects, "touchmove", H, e.data), n(e.data.affects, "touchend", T, e.data))
    }

    function H(e) {
        e.preventDefault && e.data.preventDefault && e.preventDefault();
        e.stopPropagation && e.data.stopPropagation && e.stopPropagation();
        e.data.move.x = e.touches[0].pageX - e.data.position.x;
        e.data.move.y = e.touches[0].pageY - e.data.position.y;
        e.data.position.x = e.touches[0].pageX;
        e.data.position.y = e.touches[0].pageY;
        e.data.offset.x = e.touches[0].pageX - e.data.start.x;
        e.data.offset.y =
            e.touches[0].pageY - e.data.start.y;
        e.data.event = e;
        e.data.onmove && e.data.onmove.call(e.data.elem, e.data)
    }

    function T(e) {
        e.preventDefault && e.data.preventDefault && e.preventDefault();
        e.stopPropagation && e.data.stopPropagation && e.stopPropagation();
        G(e.data.affects, "touchmove", H);
        G(e.data.affects, "touchend", T);
        e.data.event = e;
        e.data.onfinish && e.data.onfinish.call(e.data.element, e.data)
    }
    var X = d.extend;
    n._binds = [];
    d.fn.lunaradiograb = function(e, B) {
        return this.each(function() {
            var C = {
                move: {
                    x: 0,
                    y: 0
                },
                offset: {
                    x: 0,
                    y: 0
                },
                position: {
                    x: 0,
                    y: 0
                },
                start: {
                    x: 0,
                    y: 0
                },
                affects: document.documentElement,
                stopPropagation: !1,
                preventDefault: !1,
                touch: !0
            };
            X(C, e);
            C.element = this;
            n(this, "mousedown", t, C);
            C.touch && n(this, "touchstart", P, C)
        })
    };
    d.fn.lunaradioungrab = function(e) {
        return this.each(function() {
            G(this, "mousedown", "mousedown")
        })
    }
})(jQuery);

//]]>
