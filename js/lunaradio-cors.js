/*
 LUNA RADIO PLAYER V5.21.01.28
 https://www.luna-universe.com

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
                top: "9px",
                left: "9px",
                width: "3000%",
                height: "100%",
                transition: "fill 0.5s",
                fill: A
            }).html('<svg class="lunaradioplayicon" x="0px" y="0px"\t viewBox="0 0 800 800" ><path d="M22 12C22 6.46 17.54 2 12 2C10.83 2 9.7 2.19 8.62 2.56L9.32 4.5C10.17 4.16 11.06 3.97 12 3.97C16.41 3.97 20.03 7.59 20.03 12C20.03 16.41 16.41 20.03 12 20.03C7.59 20.03 3.97 16.41 3.97 12C3.97 11.06 4.16 10.12 4.5 9.28L2.56 8.62C2.19 9.7 2 10.83 2 12C2 17.54 6.46 22 12 22C17.54 22 22 17.54 22 12M5.47 3.97C6.32 3.97 7 4.68 7 5.47C7 6.32 6.32 7 5.47 7C4.68 7 3.97 6.32 3.97 5.47C3.97 4.68 4.68 3.97 5.47 3.97M18 12C18 8.67 15.33 6 12 6C8.67 6 6 8.67 6 12C6 15.33 8.67 18 12 18C15.33 18 18 15.33 18 12M15 12L10 15V9"/></svg>').on("mouseenter",
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
                 top: "9px",
                left: "9px",
                width: "3000%",
                height: "100%",
                transition: "fill 0.5s",
                fill: A
            }).html('<svg class="lunaradiopauseicon" x="0px" y="0px" viewBox="0 0 800 800" ><path d="M22 12C22 6.46 17.54 2 12 2C10.83 2 9.7 2.19 8.62 2.56L9.32 4.5C10.17 4.16 11.06 3.97 12 3.97C16.41 3.97 20.03 7.59 20.03 12C20.03 16.41 16.41 20.03 12 20.03C7.59 20.03 3.97 16.41 3.97 12C3.97 11.06 4.16 10.12 4.5 9.28L2.56 8.62C2.19 9.7 2 10.83 2 12C2 17.54 6.46 22 12 22C17.54 22 22 17.54 22 12M5.47 3.97C6.32 3.97 7 4.68 7 5.47C7 6.32 6.32 7 5.47 7C4.68 7 3.97 6.32 3.97 5.47C3.97 4.68 4.68 3.97 5.47 3.97M18 12C18 8.67 15.33 6 12 6C8.67 6 6 8.67 6 12C6 15.33 8.67 18 12 18C15.33 18 18 15.33 18 12M11 9V15H9V9M15 9V15H13V9"/></svg>').on("mouseenter",
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
            var a = document.createElement("div"); //efect blur OFICIAL
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
 "-webkit-filter": "blur(20px)", 
                filter: "blur(10px)",  //blur effect
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
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAAGACAYAAACkx7W/AACAAElEQVR4nOy9B3wcx3n3/5vZ3ds73B1w6I0F7F0kJZKiKiWRktWLbVmW3OIavS4pfv06ee3kb6fHfuMkduzEUhxbkWVHtiRbvXdSFHsXGwii9wNwqNd2d/6fnd07HPoBONSbr3TE1d3Z2d3nmXnmKRQCgUAgSEuEAhAIBII0RSgAgUAgSFOEAhAIBII0RSgAgUAgSFOEAhAIBII0RSgAgUAgSFOEAhAIBII0RSgAgUAgSFOEAhAIBII0RSgAgUAgSFOEAhAIBII0RSgAgUAgSFOEAhAIBII0RSgAgUAgSFOEAhAIBII0RSgAgUAgSFOEAhAIBII0RSgAgUAgSFOEAhAIBII0RSgAgUAgSFOEAhAIBII0RSgAgUAgSFOEAhAIBII0RSgAgUAgSFOEAhAIBII0RSgAgUAgSFOEAhAIBII0RSgAgUAgSFOEAhAIBII0RSgAgUAgSFOEAhAIBII0RSgAgUAgSFOEAhAIBII0RSgAgUAgSFOEAhAIBII0RSgAgUAgSFOEAhAIBII0RSgAgUAgSFOEAhAIBII0RSgAgUAgSFOEAhAIBII0RSgAgUAgSFOEAhAIBII0RSgAgUAgSFOEAhAIBII0RSgAgUAgSFOEAhAIBII0RSgAgUAgSFOEAhAIBII0RSgAgUAgSFOEAhAIBII0RSgAgUAgSFOEAhAIBII0RSgAgUAgSFOEAhAIBII0RSgAgUAgSFOEAhAIBII0RSgAgUAgSFOEAhAIBII0RSgAgUAgSFPkmW6AYMohCX/JoPcGPx/ud5PZ53hhk9jnXGE8fTNT/THaftkwfwe/J5gjCAUw9yFJPGjCXzroMwwjlOKvKaVEURQ4VNX8y58rskIcDoWoTid/LcsykSQJVJKIRCVCCGD+Qynlv+/fHANj/MEM869hwLAezHq//zu8EYTYDzrg/UTM9/p/zwa8Z25b1/UBn/PvmA+zfYRY0ivWFqthlhwzP7PfN//q5vZ0HbpuQDd0GLrOj8HcBqEUEqVElmWrL2QZDoeDOFWVJPSb/blCzD4hfN9WWwyDwWCx7etM0zRomsai0aj54M/tB39uHlf8dTTKIpEIzO+axzpBkhH4SBD2sYdhP9gwfwc/F8xChAKYe5BBwlwy/2ZmZsrrN2xQS0pK1KXLlmUsWbrMV7ZsaWl2dk6p0+0uVVS1QJKkbCpJXkJoBggchBAJhMgAUWDKQ3N7lCoE5vvmtUH4vsx/mCWFE/dv/kMYIcMqEmKJ7PhrNlSQWH8toT+KgCAJ6mNoRyS+TRK2Q5gt28mQfWLgvgd8wLUQIwNbOvj1gGfx5sX7gVidM+C19dx6D4n9FOuAga1iiW8OGF2TxJ/GGzj0+IYeWj8E/fsAs4S0qfoImA7GNGb1gwEGnYHpjLEoM4ywEY0EIuFIW7C3t7nD31pdXVlVXVlV6a+4cKGzuqoqeOL48WA4HNYA6PYj8bkhFMLsYzLTfMH0MUDgb770UvVTn/lMwcbNm1cUly64yuX1blcUZbFEqFeiUCioKnEBT+WYzBF3nCAVEHvGhNgQn8CIaHrUAIvomt7V6W/df/LYsddfeuGFky+/9GJza2trEEAYQNR+aAkKQSiDGUYogNlL4khf/pu/+7vsXR+6eUtBael9stN5tUKlXFWWPBKLjznjPxIIposh0psx6BQIR/VIXyjUXFNx4ZVnnvjtc089+eTFutrabgChBIWgDZodCKYZIS9mHzHBL33hi1/M+NwXvrh5YVnZ5yVXxi0KpbkSIQNct8QJFMw2EpWCKdV1xozu3t6WC6c/ePY/f/ofv3/iN7+pAtAHIDiMMhCzgmlEyI/ZBTfxfPPP/9z72S984Y6svPw/lmRlowJQao/yxQkTzDVi0txgDEFNCwc62s+//eqrv/zxD/9195nTp/0Aem1lELGVgVAE04SQJ7MDbt//7Oc/7/76N//s1pzCwm87ZGWdAsu8I06SYL4QW/M3JX1nT0/T7tdefeR7f/u3L507d7YZQI89MwjZikCYhqYYIVtmFm7qWbRokfLcyy/fmFtc+pcORdnigBD8gvlNTBGEAbR1tNc98eijP/nOt7/1FoAOAN32rCBsm4YMMRuYGoSMmRlidn75nb17L1m+es33ZFW9QWVC8AvSi5giMIf8dTXVJ77zzW/+0wvPP3cGQLutCPps05AuZgOpR5rpBqQhfNT/rz/6Ue5/PPLId3NLF/7EqcgrHaBW0NNMt04gmEaIHTIhE4JMX2bhDbfeduOysjK8/OILjcCAEBAxA5gChLyZXrhL5/4jRy9fsGzZQzKV1qiUipMgENiYUj7CGCrKzx/72pe++INDBw+eB+AH0DVoNiAUQgoQM4DpgY/6/+iP/9j7+LPP/aWvuOSnqkQKHUQIf4EgEX6jEAJfbk7Rh+6485q2lpaGUydP9gyTXgJCCUweIX+mHn5N//7ZZxds23Hd45Cky12ExhPyCASCocQkfU8kEnnp97978g8/99nHADQCaLNnA4meQoIJImTQ1MKF/95DhzcvWLnyaUpIiYdKotMFgiQxFUGQGTh28ODez3z8vh+1NDdXAWgB0GmbhKLCS2jiCBPQ1MG9fN4/fHhr6YqVLyuE5LslIfwFgvHAbyJCkFdcsvCmW27esPfddyv8fn8kIUZAxApMAqEApgZ+3R4+deqagiVLX1AJzcoQwl8gmBAxJZCZk5u3Y+fOS3a/9eaFtra2cELGUUPMAiaGkEmpJ2b2uaxkxYpXVUIzXUL4zwgMBpihgepGPGMy4YmQDSvlP2P8gdgD1mvDoYKpLgin3NmFeYZChoEL589e/Ngdd/xTQ0PDOQD19rpAT0IaCUGSiCs89Uivv/PuqmUbN72jUJrnEcJ/xtCivYhUngarrQMoAYOpDHRA1wBDB2UMVNNAzNeaAWLoIEwH27AFZO02SESZ6UMQDCK2JnD0wIEPbr3h+n8BcBFAna0EesXC8PgQBWFSC/3bv//7rGWXXPIrIoT/jCN3dyPwy1+j9X9+BpoJEBqrbmMZP4lkV0ch9vzAsN7zff7PkL1qi7g7ZiHm6XMRio2XX77uxw8//ImvfulLjw5TYyAqzEHJIS7x1MFNlR//3Bf+klBpk08I/xlHIRIcLgI5R4Pssa081FIEMfh7en9NMkrN32mQWOoHkczeJklswMBvJJQZi8kvcRUNxuwRNwju/Nh917756msXf/fkE5GEgjMxRSCCxZJAKIDUwIX/0TNnb5EzMr6WKYT/rECnEqiaB1fmMtAcCcwUvOEeGKFW6EaYC31Z8YJmFcJQMnh5K0oJiKcwpXKXry7oGsIN5yH1huDILgIyM2GoKhiVubi3qx5zqUUHyH4m1iKGwewRj+KQvvu979174vix5gvl5eGE5HG6/VysB4yBuLJSg/TUM88svmzH9W9nSNJClY40whNMFzyQKBoCrTkHtbEORFG5wNWOHEDbC79AoKOCfyl31ZXI/uiDMFavB4UESmXoXi8MT7ZVLjkFDTEIA+vyw/+Tb0E+dhiey64D1m2EXlwIml0CR1YxmMcD3eHgqoDEFqt5kWbrHcFQuK2HMRw+eLDy5ut3/BuAswCqALTaieTEesAYiBnA5KEfv/9+1+arrv4PidKFDiH8Zwd8eK9CX7oBoaUb+FsGIZB6wpD25APtlgKQ3JlAyVJoC1ZzMWtYRW8hpWrcTRh0QiDXVkOua0Sg4QwCjeeA5wicCuBdcinky3ahb80akJwCZGQVgRSUQMtwY2DtN8FgCDfzEWzatm3JV/7oj2/4yY9+2DuoypioOzwGQgFMDu7y+Z1//N5noDhu8grTz6hMp1WbL/byYbT5x4DOvYAIHESCJFO+2Ms0gBkGiPmANVKnjEBixF4YTkFLzWE8YYiUn4LeWgmqmkMGA0y3spr5Lx6CUX6YNzhTdkBdux3KZ78JeulV/BgII2KiPgpmzzgBfPkb39j56ksvXSgvP98zTC0BYQoaATHEmBz0N08+VerM8n3HK6XvRJ0xxsv98f8Y9763h13Wf9b/zPLLj3861RBIBoHM5bhlSLFs6xJgyFwsmAKWL8waBv9MZqR/+ZWl6GyaQlwLof3iYXS3XrReU0DNLoKavQiS0wmqGKCyjh49iPbKY+hrrwczb00xbk0K80wV5ua4fvTwQx8GsBBAEQAfAJc9yBVybgTEDGDi8IXfrVdf802J0nxlRM+ONIAQPno2JZYpSHXzuWFAieqAoVkCWFJgSJJd8GaaVKU1DbCmacyWp2YbpP4AeGowUHMGkFhzmaSufdzxqN0P0hiw0pd5AMWVifzbPgc1twztJ99Ab/1F0O4+GP5W+FZfDXfJekRZQpB+uo4sxoEMik3bti/6wh/+4dU/e+ihTjswLChMQaMjFMDEoa+8+eZK4nR9Ou39/e2IWj6y7+sFWusQbK+B1tEFuS8IJsnQs7OAogWQC5cCGV47G+r09xqjhA/uY26f0Bg3FKTI4DMErnwqzkLprAFxWmanrJKtkDffiPCmbfDe8QC8PQGotRcR3fs2UFwKvaQUOjUVU2zomtZXV1KYPaQCePBPv37t8888c7apqanTXggODio0L0hAKICJwUf/K9at/xNVou70Hfvbph4CkHAIRn0lQsf2QHvn9/Cf3A2t07LDMwOQMwh8GzYg88bPwdi+C7S4DMyOyppORUB4ABjpl/g6A9PZFCkAxoeeoVPHEam5YK07RAHdlwWZMNDebhhOF5gnG9G1W8DWbIFGuPEHksGQMCcRJIHZbwsWLMj8o//9jR3f+j/faAYQsGcCIXs9QASIDUIogIlBH3/yyUVUdd2bkYZlHFncis+4EGe9vcDRfej93U/RduhFEMJAFEDJTbzdGDrPHEfwzJ/Dd+p24At/DpSujo9ySQrNLsM32hKozBTCUizqC9w6QJiR0nMYWwvhqwlaGG211ejtaIeSBRAZiJ7YhwhUaJu3gZWUQs0pAcstAbJ8cDj4KrHdHibk/ziwFoQJ7rr3vg3//sMfHqqrq21LUAKxSmJiQTiB9B28Thw++r/s8is+r0jUm0p78dyC8bE7M0f+B99G50N/A//BF0AdjK+zMvOP4oLLmQeFuq00CzIQNoLo3vMitFcfg8bs9YHp6ENTUZn7odTOARE7DJ3nBUpVC+LL34TBIBRKYwOcPa2QHNbSgrnrrr4G1Lz3P6j/16+j45v3IfjdL8L4739BtPI09JgyIv1rGIJxQAhy8nKdH3vg/s32YnAegEzbQiTqMA1CKIDxQx/62c8KZI/ns+40HP3D9q405ZwOA+ziSfQ+81/oqDgASbUEP3HmwLF8C7KvvQslNz2IzG33gBaUQXJmQileD2Xr3XCuvQFyMAga7LGS8EwDPDiMymBU6q8pqGv8kbqdEJjqRCeWN1Go4gy0tmpQh6VrJEcWVNUNYof8hhwMzfVn0PzKI4hUnEhdO9KUmFvohx/45Dq3210KoABAFoAMAIpQAAMRJqDxQy+/9toPEVkqSNfRP19EBYHU14veI++i7fDLkNyWHGeeArhv+RTyPv4VIKuIO2MrRgTZ+58GO7Ifnh2fgLZkKaItzQi++yqcsgPq9mthuH1xm/dU9Sp3BeGBelK/dUU3YBhGytYA+CifO50aMKCh/exb6Ks7Zrmc6kDm6muRkZcF/6lKRIIhOOROhDsakblyCzIWrrWmSVMAs2dssWOcz1euOaNcvHyZ95odO1a+/OKLdQByALQnpIwW0cE2QgGMD1N6yJ6cvAc9ND1H/4lIjfWQTn1gjWYZQB1eZNz4AHxf+DYgOe3AKkClDkjbPwK64UZEmmqhv/Y09FeeRNOeN5GzcivyPC5EL9/Jh2cM0tRUKWKMC2FejVknVhAYAfRoFLoR5W2VUuT7L3HRT8FCHTBau2GEAMkFyJITZPs1IHd/EfmyBMnfCPmDE2h9/0WQpesglS5Jyf6HQyf9ieYkw342TwcwVsZQ4Mt/8qcbX37xxZMAcu0ykl0JC8JiMVgogHFD/u0/flrMqLxGTnPrGSMMWks9UHGSR7eaAtWzeAMKt9+BqOTi419TLxA9CnR2wKi7CO2Dfeh79Wm0fXAQSgbgKDR/V4Hw+cMgl++AznM0p04QD2hvLDDYqUIqLINashnEQUALFsFQHXbEbWp2ZG5KYoBcUwOlvRlUsmZHmb4FcPoWgikSKJMQzV8I7bpFyLrudjCmweAzh6nxR4odHw/DI7YZbx5j3p9rNl+au2r16kXnzp6ttwPD2kXhmIEIBTA+pM1bt25xKjRjphsys1j2bb3Xj0hHlTUv0gDD5YGRn2MFP5nCLBqGXn4K5KXfoW/Pi2hvOAfqBNQsxH3xpY1XQrnhHmhE5kKKV+iaCgFo5/kJlS6C+3NfhS/0JUCi0FUFkaxspCoSwFSMjNmxBmc/AGu6yD2izMOKqgThxvOQTxZB8RVAycqG4coAk2W+YCyxlDUj1hr7rx3h3NkGKBI/T8ReCJ+fcwALt8spXXnV1WXnzp49bysAt70YLDKF2ggFkDw8pidvwYIvuEn6pn2wsFwqCaWATC0HOwpIegi0u9tWDwwkHETw9Vfgf+hfuD+GI8cLxZ0PPdIFrc/Pg4S1kA6mGTwTJ7FHp1MxObcyawLU4QYrzkA4vhPKK4OlKvUPDy0wd6RHEKg6jJ6mCqsGgQT0NJWj6+ffQVbmAvhWb4e2YQuiixeBFi4CKVkOuL0pdkdFPOLNCPZAe+m3IJIOdsUu0KJlgCwPaPl8uqZjLqG33XNP2SM//68cxpip5b32GnGvbc5N+7UAURQ+eaS///73C9ds2fa3XkVxzqebZbxYbooMJNAN48wZ9HXU8LVLiUlwmIJszSaeVM1wqJAjfjibzsLIKoH3qptQtOt+GAzovXAKVAZc3SG4fMXA+kv5CNiKqZ6KGYD9H0l4bgs9QkhK7eEGIWDhXoROnYPuD8DpcHKFYBhRLpXD4S4Eak+jY+/r6Hv7KWTU1cCxZB1QVGJFAKSgLbHaAnwmokfBdr8I/69+hLbXfg309cCZUwz4csBkq+wlmXcqwDqvjqwsx/NPPVnf2WlOf9CRsA4ggsKEAhgX8tf+9OvrFi4p+7KTpvcMgNnCQjY0RGrPo+fsUe7mGO7uQESWkLHxClBXFpdjUlYe3Ku2wb3rI8BtDyBCge5DbyBae56PihXihLpyC8jm7YiL/zm9OGmbsWQHHJdsRvYVO5BbuhJwuhAhHiiObKgSgRENg0kGTJ3gXrkNGZfvArJzrd+n4PiJHYesEYbIuf1oe+QfEKk9zs9T8IOTkJvq4HD7oOcXgTqcfLF+bvf78FCnSo+8v7fr3NmzTbYC6ATQZweGiRnATDdgjsBTj//5d777QLY38wY5Tf3/YxB7FUB3uRBqa0F0/ztgNMoFvtLbDSeRQcvWAmoGt3FHFiyCnp0H1lqHrhd+hr43fx1Px+xYshme2z4BUrI4bqaZy4KIMWsdgC/myk4gqwDGyg2QrrkFnl13IWfjlfD6ihFhbhiyD7KSBfm6XaBbr+CCODZDmdC+E/61nlGw2nJ0/vwvEDn9XnxiwZVAYyWM44ehO8G9j2SXd97NAGKE+vrw4vPPV9kKIBYZLNYBxBpA0nD7v9PrvU4R7p+2WZmAKSo8azZC2nw5Wo69ZQmWtga0Pfc/yGQEdPsNyMgogBHpQbSpEn3vPYOeN38VDyST1Ewo67cCay/p96ma451r5fCnXAnIcVlMIEEBc+VAW5MDY+0W+D6tIz/QApwph15QAN3lhcGslZCJ9oFhC/+YJxEJtIE89hBw8Eh8rKt4cmFE+qAjiJ7OKjgf+QfIC5dBueLOqXLAnTF4yD4B1m/a5HM6nb5QKJSZsBAs27OAtDYDCQWQHFwBUElZmt7GHwtTBRqxerXLNwC3PACl6jy07nru8RJuL0fzf/8VvK8+BmfZFQj7K9Bx7n30RWEFjOkAJR5kX3ozsm68F8yVOdOHlFpio3gy4K34y3hdgqxisO1F1vRystVy2MCwfhbpg/bK02g98BrC0U7+oewqRN7Vt6Hr9AH0Vp/iyiqreBMyPAuGNQYwNvfjBcz7Na+wSPV6vZmhUMhjRwTHFMDcPbAUIRRAcpDb7rgjg8ryPJNUE4MRq3oW93lXnMjYfiMUfzNanvgPRHvqecETSoHe1gr0NFbw3xAHICmWPzx15cC3/ia4P/qHCK/dBMcUuX6OxniEGktIaJdqDFOZ2qP2SSWqIbZZzlQ9ho7o0bfQ8vR/Itp2gfc91TNQuPN+ZGzYgs7yD6xaxRogb7ocKCod4H0a90a1KuZYie3msBJwuT2S1+v1tra2uu0iMQ5b49F0NwMJBZAcZMWKFRkyNW8lQazwC7MjiozsAsh3fAp5ThUdLzwGtFQj3BeI+7SbApTqgMOVBVawBK7tN8B7+2dhLFhu+b5P2yycTMjBpv83do7OFLaZMjbh4K/+2N7+ADQ+M7twBP5f/jMijcchOXltHmRtuBLSzfcidPAtGP4aLv7McxIqWwIl02e54NqzO+ZvhSETUG8WL+Qz11EdCnF7PC5b+CcqgLmr1VKEUADJQXJyc12KqNLN4e6TtvyLRdgiKx+uO7+AjDXb0Pf6k2g/ewykLwIQg6d3cHhU5K7eAGnn/dBWroMkqZBiPhgpGl2aI9WgbiCss/5NEkytgyOxTSV2xTGVEjglCprkMQ382vhaadiL8dZkzDLL6S11CP7yezDOvc/dbPUooJYthfLpL4EtW47233wfoa5GPhPzuHPgyC0BHCpi2ZCkvi5En/sfGJFeOK7eBWP5OhDVxU0pc1VaqopCcnJyXLbpx2EnhZNEMkyhAJKFZOfmehRKHHP1Jkg5JPaHxBIM8EVhfd02SGs3obS3C0p3JwxNB3Gq0Lw5iDhd0IkExxRVhzfn8sfLK3D0fBWcakbcjDHYHp8ybO3H5T9j0HUda1csxuZlC+GWkl1QnVzcA7OzjnI7Rk8n6O9/idCJY1ayGwNwZJYg997/Dde6HYDfD9bRzddgzEfWph1w5S+BbtcfZnoUkX0vo/mlnyNYdQ4FZw7A/fH/BbrxKsDlnnAbZxK+eEeAJUuXZrzz9tuOQQqAxD1m0xShAJKDLFq8uEim8pyaDw93VU+NHCTQLP9FKLy+rgTdkwPDkxtPGwF+1zHLpjxFo0lzRLznlZfxXz/+JfJyyxIK10wPwVAvPvzgJ7F80cfGoQAmDs84ygg3xWl6BNKel9Hx1pMIdjXywDyZelFw66egbrsFekYW5H3vgra38DUaFgXYhk0wCovs7K4MkfPvw//4D6H5z8GRBfgPvgypuBTexStB5qgCgL3ovmTJUpct+B223BMzAKEAksKUVbSgZMFaypPdz+45QNw+bVc9NMJBSOZIPCsbUFR+xVsCOHVimDDCXR4ZMXgaBHO7EosJfoObKMzvGGabiGQvdk6FaCZQHFlwe/OR4cqIe7HEPks9bMDmJUqhmn08TZdI7AxGiQbj5F60P/VThJrOcOFvaIDv8ush7fwojLxiwIii79R+aO31tn8kEC4ugeTxWNd0zXkEHv07RKuOxEtXupatgnTTHWCFJXPW/AP7zBcVF6u2Aog95IQCMWIGIBgRPk10ebwrZ7/wj9ejsqp1RUPQTx5C6N1XIF1xNRybr4HudPMIUZ4Vn6XG/k7iFhY6WCbG3FMsAWm1ctL7G7EdYJColY2/v21TWVWrX3bwvmeWuWG6hpXUYNBNbdPThcDvH0aw/AD3vmIaIC9fDXL/l8BWrLEqE/d2o8t/FuFwB2+nq6QIal4+qKSABVoQ/tXD0I+d4tMofhyZC5H3qW/BsfYagCqYunnb9FBYWORImAEMNgGlLWk/BUoSSmWlZKYbMSY8jYxhrcrqUbCK0wg99lPU/eyf0fqTv0B074ugXQHrpE9TFa6ZZXz398SkAel/DPIWmmoYofxUO4NBuArL4PDl8/hWybcUWZ/8/+Bef7U1MzNVYkM9WGOXZf+PApmX3Apn0Qo+Q4y+9hTa97+ASLjDikmgPuR95PMg266DrjptHTe35WSWzycpiuJImAFIokSkmAEkA7FSRtKsmW7ImMS9QQjk3g6Ed7+C5jd/D7UU0OpPw//Tv0H+xwKQbrgLyCmwyjfGfshJv3thOJkdf8oG/JnARqcWRqyEb0bBAng/+w24Ml3ofOV1ZNz5aXguvQ7cDYjZMQYn90PqrOWBenoXoC9aCyM7G8aRt9D23C8Q7ay2CqXpQM61N0O+/h4QXwEkw5gXw2TVqVJJlpVoNKqINYB+hAIYm5gCmP2rYLbdX+aCnULJLYBr1SpE289xWRBpvQD/oz9AQVcA0s33QS9dZPnzx4OQ5vZtPp5gpaS+Sgb8ibt6zia4cGYMJCMXjvv/Dwquvge6rxBGZia35eiQQIwwwuePI9rezH/jkFxgeQsQrS5H26++j0jdSW73NzTAtWodyH1/AGXhMhCD8cFE4r7mKqrTRRVZlkOWzJOFCcgi7TVgkpjze3WmGzEWfPEV1BKEmTlw3PxxFD74F1AWrrNLNgLhnho0//YnCP/3j6FVnEGU6FatXDYg5HUeMPx9PfIdT4Z5DP3KbJIWFJRXvpLsVQ8iu4AlGyD7Cng+IsLTazNIgXYE/LUIRvv4+kDuls1wm9fCL34I/eQxa+AQBRyFK5D5me/AuXI7KJH4dWRte64PDQBZkYmiKPKg0X/ay7+074AksGYAhDhm3fBvDFiGG8o1tyP/y38LZcUlPAM6oUAk2gL/q79A+N+/A+3cfki6FvcLms8QDJbtowj7kT5PWglMf1+ShGO0Yh9sE3fFBaCtLV6Yni5cA7rvLfSe34eoFOELv46MEuTf9yfIuGQHiKTOvqnOJHE4HERVnTHhn2j/n98X/RgIE1CSEO5cN4tg/a6ePBKUl9eKgqmuhPAsQHc4IG3diWyXA70//SuEz52Bhm5oci/ajj4P9d+bgD/4K7jWXgHicPZvfh6YhBIZeiTjPbYEb0G7pu6oMnKGnQuZba9iFKDVF0ADfqtZMhA69jY6OjsQjrRz06AUdSHvlvuhXnUzmNsbTzIxn86/LMtEcSiJI3+hAMQMIDnMi2d29JXt5DnA3ZPBiAShnTmKzmd+g779b8CoKQf6ukCYAZkRKESGa/0OZP3JvyFr692Q1Xy+NXOAGDp+CO0//jZCB14H+rq50jAY40Xd5xRjGfWHjPwntJNhn47xzRmBX6zECrzDkhVwrN4GyZnNz3lnWwUieju3++sakHnp1TxPECso4cFlsbiN+YQkSeZ9TIdRAGnN7BrVzk6ILCuEETILFIAl9A1iZZGkDNCNCPQLx9H3799H62svI2NpHvK33oDQpq0gi5bBVbQSRn4e4HKBrLwE6lf/L3KfKID/3SegddTwDJ3R8mNo//F3kPeZr8Nx5S3QfTm8pONcYnzOnqN/OvrAfa7EDVnDf0oAbcs18BUVgz2Rj+53fwvW3WINIHTAuXwNlE99FfKytXbPSPNSLFKJEkUZMANI+9E/hAJIDsZ95mfBTc8sA7RB7FGaoUOvPo+uxx9C16GXoZYBmu5Hw7u/hfHGb+HML0Dupl3QNm6GtHgpXAWrQfLywT75ZRTmF6D19z9DpK2cpwuONJ5B239+D3mBTpCddwL5JVYl83nAWHc5wchuoKOd9dmsCniaaWIliuOxACXL4f3it8DyfQi/+ATCVVWQC4uRc9834VxzFQ/2ms+Y4zeJUhJf0+s/zWmtBIQCSAJdnyUpw3naTYOnEDYYoDVVoufJh9D52m+g+KwoVKIBUQrIHkDra0Hj278Ge/3XcBcVQVl7E/RNG6EtLoN345UoVlU0PPVjaG0XuI9TqO0Cmn/1L8iRIlA+9uV5VyFqOAiG0QDxD9nYtv5Ziin8qQHoCesW1O2D54E/gzd3NboefxzOndeBbt0JzemCxOZ2pO9YJHj0juHqlV4IBZAEs6kYBgOFThgibbXoe/YhdL7wczi81qWsZvqQUboGXT0A6ahEuLvJKs7iBkLdTajd8yjYbsCVlwdpzS6QNevhW7sOrbsvWDMKBdAydfSqOrLnkvCfzPkZSfjHPpyMBrALqswEMrMsltbh9bdBJRKMmz+MnPWXQM/Khp6Zx6PCyfTX5JlWzFNhGHxdS4z8ExAKIAlsBTArLhheuIMZiDZeRPTdV0A1AE4rs4OWkQvHjntRXLYO0bMH0HFqL4z6DqC7GsFAI/+95AAiXX407n4c8luAww1QO/kXzS6E+44vwnvbV7iH+XyAjPlqbAMRGZJVlMQT7pGJRgtPB2T4YzRVQ3jhCh4hrDA7DHBWXN1TCCOzZyY/i5gfd/kUQyidJTFABLH8bd6F65Bx99fR/KsfWZG+LiBcU4HWx36C3Hu/Bvn6+5D/4QchV19A3+G3YBzbA9rSDhaoQaijgW9DdwEhc4AbAYgrD5k7PwXfnV8Gk51xR9B5wWhu/sn+flZK+Ikjc5OPdY6pOQOY0qR5M485+jcMY56dxckjFEAS0FlkAyKM8AhQKTMf8p0fRWGWG/U/+1cYHcesdA8dFWh99HvIa6qBctcDiKzaCGn1JhR+9EuQK8sReu9t+I/vgdxtKoNaBNvqQJQceK+9F757HwRz+/oLjM+aox6diTRzElEA8wISCyKx00pj9mc6nxSGrjFd1xNP4Xw6nRNGKIAkoNLsKR9q3qRybMruyoSy827k5eeg8z+/C5w/wheA9XAj/M8/hOzWi1A+9XU4Vm4GUzJgrNwEx8qNKIx+CY7KcoQPvIuWE+/AlbcUBfd/EUZuqb2TmT7K+cFsVhqWgk+fE80MBk3TWELNe4FQAMnBjNkZFMUn8LIDGZuvg/zVv0f0p99Fz/mTiOi90NGLjr3PwxtogfGlb4NuuBoSdfAbX1ZcYCsvgbzyEhRqnweJBKFl5Ey4OPmcJN2nAGkEse9h2wQ0+JHWzIrgptlOJBJhdmaFWYdujuKoAnn9lXD/6Q+Qu/12OJz5vLW6pKHz9F50/eRbiBx+AyRiR/rGfOIYIEsuUFdOGtwNqVZsaaIoh4Nh0LJ4vzwdWoQzQdbOVLJBAuiGzphVIm6w8J/fl/0YCAWQBJqmxaLBZhVWRIu1mKdAAlm2GcqDf4HcD30SqncRz/zIZKCv4ji6fvpt6O+9ALmnk/+WJWyE19Bi83sRUJA6DGKnILHFvZWahFlZZQmgEYM/DHvU1P/tmdIB1nVtsCF7T2vhD2ECSh42CxUArDSl9jPClYFeshTyJ/4Ieb4CND/zC0RaznMPoUjVGbQ+/A/ICQThuO4OIDvXLuU4O/ybBHMHw64baV5xsdkk0yIgHW0g9ZWIdLYAOiA73JAKisGKFwCeTF5bYKZW05hhmA9h/hmEUADJYY5xZr8TMbMUgpFbBHzkD5CbnYOWR38EvfUD7iEUrjuPwO8eRemKTdCy88xvilG/YNxIdpCZlZNKh1Rbhd7zhyF/cBTsyJuIVp8D0yQQdxYcazcjeul2eC65BmzVJYAzY0auOVP22xMAIfwTEAogWazqe7Oa+DolYSCeLMg3fRh5mR60//wHiFQegeTOg7plO7RFpXyqbjA6l+J9BbMIU/hrWgi9J3ZDfv4JdO19CeGeNh5oyKWKAkAPQj/yEnDgJZB110K5/T5IO+4EsnKtJQEyfSmnB60BQCgCC6EAkmS2moAGQ+3FXa4MVA+UK28DdXvR9ti/wV2wDFkPfAV6Vj5kZtjmIzEDEIwXAj0aQui9l9H987+CVnuOR5NLGfZ1p/V/UzIVgQPwn30X3qpjcBAFbOfdgMszrZWouQmofw0g7QV/DKEAxiZ2scx+BUAGB/4zGIoC5+YdKFmyGjQYhJFfCsmcDseEf9rI/1S7uKavDGHEQOjo6+h4+G9gNJ7jQt7QrfTS7uwiKPllYE4vWCiISP1JRHs6eTnS7lAX5Cf+C56yFZDWXgYiTZ/4MRWAHQgm1gASEAogSdhQD4JZD7On6pIkg+SWcg8MBoO7jvL6wXPuiIZntkYvzJPuHQLraEHPb/8NRssZnkXanBurUiboyg3I2/YhOC/dAZJXCHR2ILD7cfS+/iyCbbUgTg1t5/dD3v0c3KVlQE6BvcWpP3vcU6l/DWDAR1O+81mMUADJM+cuFMoAalh54bkisAt8M0KslNKE8bQSacl4tcacO/upI+bbT+w6A9E9z8OoruJzYvMTB/Uhc/sdcH3iD0GWb0Cv4uDXl1y4CNKqNfD5FiH6+L8g0lkH2Q1EXnsK6lW3QcrOgzRNNSfsYxhs/0/js2qRpnf/uJmbF0vcykO54CfEUgCKAUiMzOv874JUY3nza9DQ+ubzCPtreH1hIwpkbdoFx+e+DqzaDEIVEHuybH5fIg7Q2x+Ac+WloMTBJU7AX82z2dJIZNquQWYI+/9wCAUwryF8XYAHCw8ueTWNHhiCOU7MqQAEUrQXRlMULGi976IekNvugrSwzHJBNq+3UB9oNARGGC80IzmzkLfmGjgy8izxqwNKYz1fk5q2Q7BMQEIJDEKYgATzmpEsPcIClDyW6cdyHCBRDcTNeBlRs1OyfQsBXyl02QGma2CV5xE6sBeusjKQTZfDcHm5q7FSuBDEkWEpEwpInQGQaHTa+nWYJbx0PqVxxAxAMPcZa31+qm51NoZtcB6JGBabQ8oZYGEZsF09QywEw4hwhwLa14nIow+h7f/9Jbp/9v/AqsohGTpghNFTeRxaMMC1CT9dTjeYLM2nLpqTCAWQPMJeMudho75M9meT+OHchKdwINy2Tx1OZGRmgVKZ3xHtXZXQ6y+ABIPctBPyt4NkhdF2fje0va8AnQGgqw3+E28i2uvno39ejGhBKXSXa1p7aFAgmEAoAEE6wxL+He1bQmLEINwMlHvTVVDzi7nfP084+PbzQPUZGF4fsu/9OBwliyHJQOilp8DKT0IKachw5PJ05EYEyCheDG3xUjBVnbZRFeNrYWlUACFJhAJIFnHxzB0GnamxBfhI3xCi38IaOMfuAHL1XVBL1oMaMk/94D/0MjqefRjGmUMgl22HunAVqKygrek0wm/8BlEYyNz5YVBvCYgO+G78OFyla8DdiKYJcfMOj1gEFoxAf6D+cDFws1ofjkdux1eDBy8Lj13tfa6pB/M8mudt8PlM7lyyWCFJaHnFyLr+FoQaP0A4UMODwTpf/iVocwuUjVdA7g5AkiQYzii6XvkNsrbsgHLNjXAe3gsn84PcfA9YTp5VUH+aLiNKRdar4RAKIElmsbibMoYLnJzO/C3jJSbHYwJueMHGBiXLsHInWT8YukYwVMjPNbFvEeuT4ZQ5G7Me8MCcUdTsl9s+BmdzJcLPPwoWaeO5gAKHXoG+7xWe9oHKptAFevQQ1Dee4lHC2fd+Fqx4IagvlweUJXR8qg93CJSQmAVoNl66M4YwASXN3LzxJwpjBJ3dIZyqaMCFxg50RnU7poDMzVqyY4zkY8VKBjzGu71ZfokkKsRAVEdFaxdOnK5GINA9rkItvK9cWfB99EH4dn0CcOVx2z5RAMUDbv83ooCugyuD1jdeQOjsEegr1gLZBQkxxdMHpUNE3Ry8iFOPmAEkCUvZ9dK/9EgSUuJOZDbMBo/H7Sl+KjA3U15Rg0d+8xo82R4sWVSAMp8HhcXFyFlcjPwsN9wSHdQexNsxtK0DWjol8NxHTINuaDGv9QGfkRHNPePZQ8IsY1BfGzzj5NQLttFH7GTYHH9Bg6G1qxft1Y1oaahHRaAX1Y0BdFY14FOfuhXbLlvDPX0wnp4pXIjsP/gTaNmZwKHdCNYdQ6SjE6oMONZdAZpbAFRcQLhsAU9FzoOxCOOif7pLLEuSZCoBMmQ6k+YIBZA0qbtcrWk4scrk6VEeEEMJz9LDvRUY95WLfZtYkTPxVlgpHKyaHFaOH/MFs131UmVWjRgMNfUNOPT6G1AVB3brGtwuF5asXoWiDctRVpCFstwcFC5aiJySPORmOKDGRlm2dBrJ5jxVUEKwcOkSlCwrQ19rDxRZnpJo51gJRCCmvAmihobcxSVYsKgUTmnqJ9aDFepgxR9lDG19YbQ1taG5uh41bX5Utnah+dQFXDx9Ft29fTxJoMEMlN+0Fev1VfBINKkBROzoDAB6XjGyP/sNOK64Be37nkFXVT08GRTuOz8NpWQ59H3vIbJ+E6TSxZAI5bmp+PifX6+pG1aN2WZZIrYCgFAA/QgFkCQsZRcNiZscSCgI7YPD6D10CLKTWmN6QmDYPtYxkyWTrAUsPlvgyoGCUUsE8CRvhQuRccX1oERNmQroCEZwsb2bKynVocJJnDAYw/kPzuDU0WMwdB35BUVYsnEtileUYnleFhYVFcFXWoScvCz4VAUKSbDHT7pFo8NswXTt9degx1Dw7GO/R0ddMxdyieu5A2cB42lZ4kask8GFJQOiehRZJfm49f47sOPKy+CWp1YBEGrVcrPGAFa7TIHfFdHh9wcQqGtEbVMTKtq6UF9ej8oTZ9DS3MgXQl2qkw82PBlufiDdfT2orG5GoLMP3hyPVftujIXh2Cd8xsBnsSoiazcjc81mOKkGmVEQJkEjDOzmj0DlN48BKZZQ3S4NOZ1y2LwOJElKHP2LmYBQAOMhdW4EvBoXMUBb6tH3yA/Q/MproB77s8GD5cGXLLX+xsYylKrIvO4eYPv1fHWOsNTk+G9r8qPmTDUyVHf8PXOE7ZAVOGQHF+zBviCO7X4fB94Iw6UoKF2yBIVrlmHB4kKsyM9BaVEhvKUFyMv2wCtL8epjicKFDXvQ44fYI9Icp4Lbdl7O+8dUAq3VTVBkxdqXbTsZ6H0ylsJkA57GfGGsSRlBSAsjq7QAt95/J+7cuR1FXnXSxzLwwPrnMPGFXPt5l2bA39mLrvoWNDQ242JbADXVTWg6fQHVFRcQjkbhUFR+/JnurNjmBszIVEVFw6kKdF3fBuR4JtBAZpcitYxuqiFZ9n1mGXrMfZkj/Si1Lnw6Q1JXtmYANOGOErMBoQCShqQyHIh7URg6ws2V6D79GtQy+4PEXZCBzwfYTFm/xHNll6Bg23XQJNVKzD6Jdf1E75m22npUHjwKWZYTBLaVWM6qrW0pBKei8of52/qaOlRVXMT7jCE7MxOlS5cgZ9VilC3Iw7LcbBQUFyK7tBA5HidfP6Ax4ZakQhjR9p1YCIcx5KoKbr7+ct6mZx97Gu219kwgsfuGKIGxOmfgU3Pb0WgEnqJc3Hzf7bjrxitQ7HbajYw3bFymw8Q5yeAROFe4BkNbbxgdDS1obWjCxbYOXKxvQ9vZKjRUVKGjK8B/zZW04oLqyIj/tn87/e3iwlmS0HzhIlr97dDIYsgM417kJzHDpH1+LDHPQBnhNn/Ayj5rzaNnRt7KioMoDgcdOIxKb+EPoQDGQQrt2LwYS28fUFmOcNTympDlDLi9iwBDA9OigK7B0HuhG1GE9F67DQnNsFKsILqoBLjyOksomTMDNjETUKKQCBkM1e0dqG9tQp4vf6DbJBvePGC+p0gyf5iEI1GUf3AG0RMn8D6lyM/OQcHyxShcsxRLC7JRlpeLHFMZFOUhx6XAaa8fjCQyk+n+RMGZ73Lglhu2c0n/7C+fQVtNE2R7JoAh7p9jdU5s9gB7TQOIRKPILMnDrfffhbtvugrFHtfQjSUh/wc0IaYQ7eIlYcYQCEbR1tKOjvpG1LS242JrJxrPVaG5vAotrS3QDJ2P8GUqw6W6+nedcI6GO18xRSBRAn9nAGfbOrAxoiPHMV6RYG2b2qMUFj9oy4ZJ45+zGXUeo7IM2TIBCeGfgFAASZK6NQDwURFrawTd8yI3LFFihcfn3/FNGHoUCIWASBCaHkBvXQV63/gtqNMcxXjhXr4JWtkykKgOPWyALV6HaEGJPdqimKwFyBQW/q5eVLX1IsPpnrBXESUUVKZx80uguwf+Q8dxYv9hOB0q8gsKULBqCUqXL8SSnEyUFuQhd2EJ8vMy+frB4HlMPAqVkCEydaQWciVw/RUwDOCZR3+H9rpmbhKJMZL7fyKxj1iC8A9Hw8gsKcBtn7gLd994ZYLwH9ouNpyyTFS4ibMfU+BHdPjbu9BW04D65lZUtneh/mI9ms5eQGtjM0KRCGTLns2PRZ3g+RlwXilB9cVGdHb0ILcoe/yL9onKJvYvGTyJnUmZy7gbqKIog01Aaa8IhAJIklQqAOg6tMZKBI6/zQtmW9WGNfQWZYBtvRGy7OTTal0Lgb3+HPTnfsv9qRXfIhTc/01Ett8AakTNb/DyjjIkvgkyiRl2TCBw809DC6pPnofqcI4RVJXw+9ESKjDGzT2q4oAsWQqhpakFDfX1OPoGg1N1Ir+0BKXrV2Dhwjws9XlRWFqMnEUl3N3UK0tD9pUMZnvyXA7ctutK7u3y+0eeQEe9f8BIGUkaaYi94BnRIvCW5OPWT9yJu268EkVu1XL9JMOb3sZqa1DT0drVh7bqBjQ1NKIq0I2aujY0nDqPlrp69IVCIJTyylmmEMtw2madQW6uk8GhONB8ohyBXX4YRdnzTyLaq9p2JNhw6wBpi1AAM4GuQe/rQZBZwl+nQE9VOfSf/F8o97bBd9WNiOaXgvrbIR/dB8ltrRtI2TkIb9jEhY0hqfzKlhixhQGz7a2TuKYJgcYYmhuaUHvyNKShwTP9Xx3yZNCeh1nPYAy2dRhcqKmS036fobGmFnVVVdira/C4XChdsQzF65ajNNeNshwfipcsQd6CAuR7nLa5KDn7jfmtfKeCu268mgvqpx99Ct2NHVDsheyRFFvc5JPgtaVFI/CU5OGWB+7i2ys2hT+MMZVj4n7CjMHfG4a/vhUNFytR7W9DfUcvmj64iLryCnT19fHZkznKNwW+OVvqP0YW78j4jAhD+3nYThhF0clEQu3Fi6hva8dag0GdZ2Ixdv7sk5CoBNIeoQCSJWVrAMxy61yyAlkfuhfRo4fQ01YJwwH01F2E9JO/hqvmApTr70YwEkTfvld5rhWHIxPZy9ZD92bDEW9KbJ4dm3hP7po2f90V0VAZ6EFPMMhNQMN9J6ndDFAMJEFeD79+YAo888FkFZrBcPFMOc6d+ICbW3J8PizdeAmKVpZiaW4mFhcXo2zFYpQU5nBX09GaEPs416ng7puuhUwlPPvYM+ioa7EXhocqkn7XVRKPY4hqGrIWFHJXz7t2XYkSj9P+zujOYTHhU9vchuoLNahttNwzGy80ouLYCbT5W6EoDj7bkribpmuU89g/Sxvcx6OS+PVhIpzN7XX2dONCczsuD0W46Wy8C9izGRYL5GRs8Kg/7ZWAUADJksLsZ5TKcCzdBPqVHwCvPAXj9V+h7+IhEAnQI01oevJhZF08ie6FpYh2XrRyqOcvhvOauxFhU+djbgq69o4eVFU1D2vSGF74J+lCOXimMMKolNijbmovKGc4M2BoDGf2H8bR3XsgSxKKFi7CVbfswD13XIclBb6kj89UArftugpmRz/32NNoq23iQnfwmR3opsoQjYbhW1CIW2zhX+xxjjp7GExTTxBPv7oXu59/C001NYhENS7wFVlBTlauFVQ2iqwdbrY1yreGYeB5IMPszmxP7fkadPoDyF9YYLuLJnFwc4WB6aCF+cdG5AJKnhRdMNa1R8EgZeeC3PNJ5H7hW3BdegMPmDFhcg/aj72GyAuP8NE/BYWSUwR9zQZYIUAxWMpGabF7o6uxBY0ny+OLt4mtHmpvGKtLRllrI3FHkTG3xD2MuC97JlxON1oaGvH2i29h7/4TCOpWf9g1X8c8zlxVxi03XI7bP3EX8hYVQTf0UfcejkTgKcm3XD13XYkijxpvUzLojOG9/Sfx2vNvorG6DqqSgSxPFo+liPnJM4Nx81TiuYz32ojW6vGsY5IhGnjwL8z+rTt6GoHmlnky7h8EoTD6fWDFLMBGKICZwJamZufLqhvSthuR97/+GpnX3wt33nKeSItKQCyjgEwJnC4HNKeLl+az6rMyPqNNZZqFCGNo9LfzUapE5WHaPOyLcZCEMhgknAYKdisNhlNR0dnUgoPv7kdldaOdmmFsYtspcDlw287tXAnkLiyCpmsJ++nfUiQagTfu6nk1ir3OBDvKSLEKbECbaxr82PfabnTWNsLpcMY9iQYcPh+dUvvokhX6E2GkBRvw9Z7a+jpUt3UgbExH5qZpxpzRzqspTWoQCmBsYndBSvuKmzn4fwSUSKDLNsP5le8j+76vwbViG3TNiusifJ1YR0/TOfS89SRYh98KsYcBA0hNvSp7NNsZjqKivRO9oeCQ0ShGeDWJnY6qEPpHwCT+iGF5FUm4cLIce949zDNbJrXHhO3E4gRu++Rd8C0sQFSPoD9Rn4GIFkZmaR5ue+Au3HPTVSjxuuLnjMTqGo5Bn67j7Xf24/zpCj7CTvxJYltI4gwr5UJ/uO0NfmZh9mtFUwcCvSG7jSna5SzAvE90w5jpZsw6hAJIFjJVFSXsUScjoDkFIHd8Anlf/Dbcl+6EaioBncd8oaf6Ajp/9lfo+90vQCsrrMyXlHH/9MkS20SnvxO15TXjM/MnfIWQQY9xt4IMeTmckDL/M0es3d3deH//MZw+fXFC4jHfqeDWnaYSuBOZJbl8wdkkGo0isziPp3e4+8ar4jb/pI4iQWqeP1eF/XsOIuBv426ww21ieME/PqE//r4fuohsttupOlF1ohyB5rak9juX4GMpMQMYglAAScJGcvROybbtm9ZUAqob0tbrkffgXyPzho/B5SuDEbKihbXWOnQ/9yjUE4e4KYgHuExiZJgo1AzG0N7QjIbj57g3TuLotJ+h+xpgshg8qp+QQhjGXp3wWz5ytl8pkoK60xfw3lv70dITird52KInSMz132+iKVAV3LnzKtzxibuQVZKL3r4eeIvzcfP9d+EuW/gn9tdwtQIStxdbHG4LRfHOm/tQe66K59sBBs5iBvbbCMc+Wg8l9OuofZ/EtmKY573i0BG0NTbF011MDyyl61nD7oHxFCZCAwxCKIAkSU2KteG3TEAh2ZFmkilAzMnGykvh/No/IuejX4W6Ygv0qB2N5nGBlRTz73Jn5kle0iwhz0xNRwBNTc3cMya5lo9quxhdISS19aELl3GzkP12JBrFvsMn8N6hkzyGIVEQJyZP6/9naIflqwru+dB1+PCnP4pV11xmL/hehSKzr4f8isV9KQdvKbY/sx2HT5zHgWNn0BeKDFkw7u+3EY51pN4YTeCP1H9JXrixuAd/oB0X2zvRm2BWm1JFYCtVS6tOnc3JlP3Wgv/QFkzZTucAwg00aabuOrHuZ7tIBukPO2Y5hZDu+TRyly5B+5MPgxzcDerLgbZ2gxWexO+cSejwxApRvSFcaGxHXzgEj8s9qHEYXsgMlWRj7XDAU5JYYGXU37AhT2N+ioqsoLWiBvte34vNq5ZicXHu0Nb2a4ARyVVl3H7j1dh8+WbkOR0oyXSNcWTxaj79LbX7s769B++98T6azlfzyOfEJHbDC/+Rj3zU/k+KEfw+kXih9R+SKyMT5XVtaOvsgScva8jMJpXwbcbbginbDxIGOoKBCAWQHNO+HkaYVYKROTMgb70J2fmlIKW/glGQDS3DCzkFy78xxWPeGJ3N7Wg4XckFajLpH1LTHzGpaAuCERXBQCUQk2ex9pltPn3iHN7dcwj3fuQmOOmQlYOkWpPnVJDvyuajxeRiqtmAkiaxBG7vHziFkyfOQdf1oea0JIR/agT/0G2O1Aux68DEITtw8dApdFx7KRblZvZ/J2V3AIun1Ibt4MAM3XrNazcMZ3qc9C75Xg3DSFB1AggFkDx2KvPp2hdP/QBmuXyCEihL14M++BcgfUEYROGjX8pSUJ/XnBoDaG9uRfOZ8rjA6h+dTQfJKIIRZgJ24rn25hYc2HMAWzauxrpVZQPNP8m0wD7m+HGPXSl9WKrqWnHwnX0I1DbyvhzuMId5kdCO0T+fMKNpgAQkSUL12XNo9Puxji2DMko6kGTgKpJhQJoSEg6B1FeB1DUh3FGOsNHNr2XVsRBKUSnY0hXQfTm230WsxoUxqYRy1qkVcn8wQgEkzfRMAoidWpcQyw4fL/PIJMCZCTi9Vj2BFOqjkG6gMtCJpnY/HHKKC5qMiwRFMIYSGCzPXGoGqk5X4e13DqFoUSlynBO/tCc62u3SDOx57wjKT53nVbsGt3ykVxiynjIFJCn7zL1HtSguBnp4hbGcSSYGsnZrQCeWHV764BRCJ/ZAP30A5GIVwv7TCNIeSDrgUhZDWbgU2vpNyLjsOkiXXA7d47VSSdsODxNtTUKIR+IsIO01glAASTJ1i8DD7mvo60Ejw1TKikBXHyprW/iCqqrYOW7GSnA2daIqbucZXgn0fyU+IbB96nuCQew7dAprN6/FdVvWjH+vk9Tx585WYf+eQ+hs7+CmlCHtHXXnyXxp4oxH0jkUByrP1iJweSd8JbmTGHdbv9Mpgc7C6H7/OdCnnkLPibcRDXXBnMgS+zxqAMLharDz1TDOvIXsI3uQefPHYHzoo6BZeWCTFFWGrqcyode8QXgBJc+8vXgCTa1oOFXOI2wTGfOAk1hcnRTDSh0y4seKpKDhbAX2vXMATZ29U7KYOGyLCIE/GMGet/ah5vSFIaafMUf/U9rM0fMMDYcsK6g9cgqdTa2TV0lcuBPg3acRfPi76Dj8LAzWxetb8I81wOgFjKAV80IoIDmAzoqD6PzlP4Hufhno67XMQJOB0sRumLf38ngRM4Akmc4ZwHRijotaWvyoPzdUcA1k6JifxdxQJ5uGeliSNFon/oIQaJqGQ0c/wIpDa3D7DdugUtvXKMm6BskweJHc7MP9hz/A+4dOIBgODx39J9f6SbdrKMO7q8Y/G/LMQiKU1yaoC3Ra6aGHLKqPAwKodTXo+tXDYJWVvK6F2X26BmQWr4JUshy66gUxr6GuNvSWH4QR7QRRgc6uZrD/eQTuZeugrro0bhadCIZhiAnAMAgFkKbEhFhXVMd5fwCtnZ3wZniH+eLosik2CSBJ11ccH+NVA6YS81fVY/87B7Bh9RKsWFAwZeYqw65vUOvvxJ7X96KlotYO+pppknGvHfjVwWi6hnPNHdgaDKPI7Zx4S5gO47XH0d1QCU3ia7lQlSzoV90I3/Zboa7aCMPnAzEYjKZGGPtfhPbyLxDtaAJVgY5zB+E58h7oguVg3okXq2GpSZoy7xAKIE2Jeb0EAj2oqW4GpdKwPtgDB/gji9J4LfQBkWkpGG2P8/tm+80R7NnjZ/H++0dRfM9OuCUp/lkqiPWdeXhRZuDd9w7h5ImzPN3DzDHQwDF6v408+o9hXg91J8rRfcVGFLmLJ9wqEuxG25HXoPU1W6EbBuC+/qNQPvW/QYvL4rlt+YpsXgnca9aBqQQdjz8Mrc8P2WNAf+9pRK+6EbLXN+Fl4Km2Vs5VxBpAWkMQaGxB3YlzfOEvOUa+ixLTLQyMvJ2Iw8X479bYrEaSKDr9fp6H58LZ6klHSw+3H0sxMlRerMeht/ch0NDEaxVgwgFHE+kfNjAyeZg0FaPuZ5QvKrKMxpNn0dbSBn0S/af4W6F1hflsyRT+3kWXQL77s1CKF8eFuW6P0CljcEhOOO78PGjxYv4ZkYH2c4cQ7m6feCPM7RvxOYBQAwkIBZDGRBlDfUsrqsvLIVEy4mLk0NtmbIGeqAxGVgijPEbOuJwUiqSg8sR57Nl9CG3BiNWmFNqAza7qjOp4691DuHi2iidSi382zpnAZPonOaGPoedsjN9QQtEcaEd1oJtnNR0vsb3RzgBIJGKN/jUge9OH4MpZAIMwSB3NkGvOgVSchhHqtWNbGODJhbegkC9Gm/S28+LJXOFOFLt72eC30h2hAJJk/L4Us59AKILy1g4EQ6GEqfXIS4ZsiNxPfmQ/WCGw0WTbqJ098ieJgpdSir5wGHsPHMfh42d5YZZUc+pUBfbtP47urm4uMJNr8ej9O1K/DO675I9mqOAf/WJm8ZxDUU1DRV0runpCSe8tEStdeUKhG/Op1wNJlsH0CLpf+DU6/usf0fvYP0BrrrLjgwlkBqhMsgIdzV+busFy45xQO8Y2eKUvQgEkz7y7etpb2lB1upKXAxw4ah1D/I6oCMbXRSPpgGR/PLIojY32CfwVtag+U4FgCnPMmNuJMIba0xfQeqGae5j0zy5GOIJxdM2E+2TYLQx8K5nt9ZvSZFQfOYOulomZX3gMgDcTBlXs6QDAGqqhB/vAoCP0/nNof/03aHnzd9A6mm0NAdC+XnS3N0MzInwjkgcwVBlswudPLAGPhFAAyTIu+4Ft8ER/psP46G4WXYgsqkExgEy3G32hPoQiYT7qMxLDJhMOO17tasQZASYltpJo8cBnCdW3WLy9gKbriOoa8spKcMNdO7Fp42oeUZ2yVth9sGb9ctxw9y6ULF/M96np2pDvDWxv4qtU98/QfmcD+mdwhtT+7xsJ39MMHREtgt5gLzJUla8F6MyYkAA1e1zz5YB4VctJQAG6jr6LXn81L3mXm7cYqscFvZsBfUG+n6gRQvjN3yLYXB+/vnwrlkDx+FIprmbPTTjDCC+g5BnP4JTn87FShZGEm42/abtMznxYQX5xPm6/excuXbkQF1tb0dwVgr+mBR21ddyfHbxUoMTNKYmDr5jwjY+oE3tmwGEN7rKJj+AGvLJfxmKDiB2lYegGF8KZhXlYf8lqXLFjC7Zu3WC5MabYQ0clBJs2rcLC1cuw7pJVvDLZyWNnELDTaUvD5NBhQ0ImYsc1kbaNcjkmTEZi16B96Q2IKOdV5QyGqK7zdqmqAwWli5BXVoiCLCcW5+Rh4YY1KCwdvyttzH2XuLPgLVwEveIYdCOIgP8CPC/+DL6sLEjexSCKG8QIQukJ8mjdjid/C/zun8G66rm814IEWdtuBc0pnEAfDW7UzN9zsw2hAJJkvGsAup3TxyC8mAwonxEQfjtSTGeitZHJ9bhw7bY1INvWoCeqo7qtG/Xnq1F3/gJqA51oaulEe3UDOlta+ezAFCSSJA2wdw87ARgxmeVwXThST4xg4GGJv7RtxObIVdOQ4c7A+nXrcdm1W3D1FZeirMAXH+umMhAscRu5Thk3XXMZVq9diff3HcPBPYdw7tR59Aa6QCUKCdKQoxqq/yc5IGWjbWVgwkDGBX6E15NWHSpyC/PgKytGYYEPC7K8WLRsKUpWL8biAh8yFWlSBYe4CUhxIWP7beg+dRBa+0UeCBZ57Tfo7DXQ29yEqB4EVQDa2Q4jGkHvS48BzbWQVGvR2ONbAly9CyQ7u38QNQGM8S2cpA1CASRJknXH41BY2ToNQ4fU5YfsbwMxDGgOBSgtAxyzIWCoXzB6ZIq1RT6sK/JBu+YSXtGqrrEDzecvoq6mDtUdnWhtaEWgqgGBQIArBFlSuL84HVSzF4OsHaMnwUyyW0e4f80RvznaXrxmObZeuRk7rtyM5SsX8RE62IC515Qq3UW5XhTfdg02rV+Od/YexdH3jqDqzAWEIlEoCSmhkWAOmnD6n1EFvv1ZgqnHVI6aoUGVHfBlZsK7uAQFpfkoy83GgoWlKFi5BAtKcnmxfIUkmK5iM4j/n733gI/jvO+8v8/MVmCx6CQBsIC9kxKreqOsLkqyiiUrtl87ySW53CW+tLvcJffmLpf3dZMv7yW2U2xLjp1YsiTbskVR3ZJIWYWdBEiKFQBJEETv2DIzz/vZZ2YXi8pFIwFifjZEYNs88+zMv/9//zEoTSkk5g1bCH34Osb79ViyE0NA9K3nVYlnQiGIxK3QVI+IRilcUEpHfYB4T4TsQAkFD34ea8lV6JpvTAEgOTmc7kkHVwFkjKQJcfGrKDk8XOW9It2w631atv8MoZlo+XMJ//6fYvr8fcsc+1mEff8UDp0uaXbv2DHo50iJRwhmBX3MWjATsXCWYgut645yvqaOuiMnqLpQT3VDMy21TbSfOU9zW5uKgXu9PiWMkx5CsrFMOrmQJI2dEBlGP+Sgv6rPNS1TfU5x+WzWrlvJDTesZ/XapRT4PX1i3cnpYRN779vH8gnBsvISSmbPZN2Kxby7cze7P9pPY3UtpiVVaKj/cPs+5H4ZHSVN+g8imJN7kxD6iWPl54QJzymhYHYRc4vzKS8uZuayRZTOm8WsnCBBTfQ2ttGX5mI8hsFoEqxwATkPfB6r4SxtlR9giSh6IC2HlFAEDc2Y0Rj5BSvo8byDf8FKcq/bimfrE5j5hWN3ktJGibqqoBeuAsgMUkrLGsHLe00OI4Zx5hh1O15EeCWBsg3kx/8Ac8AV3SsMJGm6RqYCHakcwnhevv3n1JKaq5scuiUJ6BrlOUHKV87HXFFOp2FyvrWLC1XnuHDiNCfqGjjX0Err2Xqaz52nrbNDVZAkLN+EIkT0O0PZLx86xCn1EfpOLNuy7Dh/dlE+a9at4tqbNrBuwyrKwll9LMRLRQQ32LFyPRqbrl7CnMVzWLl6Mb/euY8Duw/RXt+oQmipkZv9vYIMkLys0ucfJ37iZtzOf2SFKJ5TRv7cmcwqymPxjCJmLZpP6eLZzMzNJsejo/dTQv3rGwaMsBzTXgo0S2Kuu47sz/4B3jdKiVfsBl8A/F466j7BMjoxqnajdbUiNm4mKxQjuHQd+tXXIbLy8CijYRziN67YHwBXAWSOESgAJ9Ar7CkywqehZYHQQWSRsuaTyWDpZOdEv2lJSVpkKZ1DZ+yDjB19kr5JAaFoFgS5Xg/hojBLi8KYG5bTFjOpbWznwvFqzp4+zfH6BhqaOmmpqqXh7DliRhyv1686ZUXvIMg+GDac4Zx4LB4lEPCx/KqVrL95M9dfezXzSwoGCLTJgMQ6SkJBZtyygSXLF/PBykXs2bmbIweP0N3ZrTiDRiNYk5Z5QuBH4xHFfTSjpIT88jKKisMsKi5k9vz5lCwpp2RGLvleDx7BICGoITIG6QbBeORLpN1XIBNe4Q13kzt3IcbBvQg9iOUX8OxT0NSCJ5yN1MFYv5mcjRuRegBN6MNwv44M0nbgXRXQD64CyBAjFisqbGMLTUt4euuwJcS1hDaxAxOWirFKpLDswdWJZxI3jZTohvOGxPPexA3htTslLxcGSYQkbNkCn05+WQGrywqI33yVokY+e76Zuk9Ocfr0KWqa22mqa+XCJydpaGki4A2oZiAVEmHoDuQkTNO0BeqieVx7/dXccv0GFq1YQJaWpkxGmqSZYCSFbMIAWDQzj9kP3MLVKxbyzq/38NG7uzh3sgbLlH1GRg75WU5YJ27ElRIsysunbMUyCsvymZMbZn75PEqWLqS0rIjioA+/1jdJP5zAn3gI+3q2bEUem7MYOWeRuvpjMk6WjODtNtFmziJePAfhDai4kZDppsI4yG2ZDES6SIerADLFCC8d4TgBptAQmk/5D8ILZvt5Gn74HQwzrG4K2yyxsISpXAxTsxB6QnBY6JY9KcMzo4zwww8jc4rHnddmPJC+JK8QlGT5KVlYAgtLiFjXUtcR4eypc9RUHObE+fM0dZs0VZ+nqeoMXZEeRQJvl07qA2LPpmmQWzqDtetXceMN61m3aY0a4J5u6U9Wsy4VxZOSgKaxauk8Zi8oY/XShbz34X72frSP5jN16LpX5U7SE7eWJbGkqUJeQX+AGfPnUzRvFkUhnYUzZjJ79QrmLJxNaThLfXbqmJNOxkmSbNJasiTVyWl5E/fFlkeVMWQ5RRMTVaoz2XZlssBVABMFkSz3E6qOPnEFaglHoPMcLT9+CqsDhDmwEkRRnnt7y1ZkHIJLNzPjjjswQ0WXLAQ0EthxfccCF32T1AnhVJ6bxbyrFnH9VYvoMixqWjqoPVbNueMnqGlpo66hg6aqWlrOX1DVRZa057+GCwtYsWYxG29Yx+bN65hTEOodsC4GJk8vr6XbF0N9R7kenZuvW8ui1YtZs2ohH+zYR8X+o7Q3NTvNgwKf10tR2SyK5s9mVnEuc/LCzF60kLIl85hblEOO1zMkc2um67hUSK5RS1+NcAol+iw4Lew51uEvQ2DyKcfLD1cBTBRksuofLD0tkqmDNxdE3sAql6QySKvCUwrAk29/UWb/ksrJiPRQjBhYsRTy6iwvzmV58RrM61bTHDU4V9/KheNVnKk5S01LK+drG1QY46r1q7jpmqtYOHdmnzj/0MeegPMZJ6TPmE8IotJQkK2fup6VK5ax44O97Nt1kB5TMmNmAXPzw8yeO5uZi+czu6SAQr8XrybsJFR6N68r0DKGu1ODw1UAEwKnQkM4ZZB6motugRnDHoKaDt2xjLRe6z/xu+ooFlL1E5iaxGNNehXQizSvACEGWOgJoV4U8FI8bwZi3gwi1gbqu6PU1TaoUNL88hJlMV8ZGDwCvWh2EbM+vYX161YqBTBzVgEzswMEdW0ADQf9kt2XstJpykP2oZd19YEDVwFkCOl4rJnfcrbAMxNC3CNS9EB6oIC8Tbdi5jtDNoREarpSACqUm7iptYTwTygOu0LIWzSbWChs5wgETDmRmK4I+kGkeT8BTWNuKMjcJXOdt40i8TIFb+2QrrNmYdlFXzcWOuTpDrcReHC4CiBDXLxWZcAb7JJHIbA0TQ28TigALTSTos/8NubidXbZp0oP2LXymhM0kk4sSDocLokjW7oP3RrxKiYNknmCwcJCQ53SSC3cqSf/By+JzSSP4Vr/I4d0Y2YD4CqAzDHiO061AiAUHa7K71mJvz3o2bkYWTkD+BJ6x+P1Nn9ZyWSyXVNqW4FT+d7vF8oYb6RXEU1+uGbppcIQBQLTfvddBZAhpBhm4segb5Bq6pFIWP8qnpt2EcbMQbgQhFPiadf9p0Ij0u4WSLoCclzJIC4P+ofShu9EHfk9Kvrw2dgKp7eXTfShO5hoJAs7RVofkhCDMKq6mGDITCiUph1cBZA5MlYASYPdEsImSvN48ATA6wcZkhgYvRU/zvXYW9/fG8jQUtQPV5iQSNMAE2WtiyQZXP9SycvhHTikapbzfWtp7ERigj0iF2lwRf8AuAogM4yYT0wmOxl1HW3hWnJ/9y/weCVabjHWjLKBJGDpvQB9/7B1zzSQEZ2GxclTtdSfPouWqv4ZzYn32nrJgYSa0FiwoJT55bMuaS+Fw/KR7ETFtAxkewO6NxuZlacMhWnw1U4OuBs9AK4CyBQj8NWFndbFkkJV+GjlywjP/3N0RykYwp57Om0xyE52xE127K1k+wuv0VR9AaHrjmUsehnkRoK0l1uWxOfz8fDDW5QCuJRIElInPBFTmnDwdXr2vop/4UY86+/DChVOvaquKYmpHjidGLgKYKKQvNqkjp6cdapG6/VSvk1b9OPtSQj/9/Ye5vlnXuT0wU8UNULfLRqbtrTpFPx0t3ekQkMTBiePk/jHErbCT/xrWQZUbCP26lP0nNhL9NTH5FgSz8YHMEMFiiYhmd+ZxlfGhCGd6dZFL1wFkCFG5qnbN3HSspPCLvBUJZAyYf1P8UqecYQt/I/ywg9+RtWh4/i8/n4icOzCOiGAdTXW8lJsukwlOWTyO7fiyIptRF75GpGa/eCD2IUKOt74B3IA34atyJzkxCttehsHEwVX+A8KVwFkjtFdQaJftF+4zmgSScs/IfyrDx3D6/EO8qqx7lVvUe2l2HYpwHQS+aoEWFqYla/Qs/2rRKoPKBmva+DxQbzhIJ1vfZucxGObtkJOgeo2dK+O8YdweycGhasAMsVIy0BdDERa+KXTMNm5t5IXnnlRWf4ej3fohrBhPjJz/+BS3fy28DeVt2cSr9hOzytfI1Z1QFV6acnK1MTN54V4fQXtb32HUOLvzVuR2YWXaJ3TDCJFu+hqgTS4CiADaNpYRmO7SMER/h2Gxbu7K3ju+89x9vBpPB5fykoX/fsELrLx4qLF3aLfb6nkzOjPYwBsnh+ZTFYrRWcQrdhOZPtXMKv2qaNqaT0AyTSEpoNRf8j2BBLe4aYHsLLz0/ZhavuLpjAgGkHzBJCaxyl7tTfLcrrfL8X5CU0Tg3gAU3lrxwWuVZsBfD6fazmMEzod4f9v332OqkMn+gh/+rGiZrTjYmQJGoeXblxh9xZYitPeFGDJuEr4RrZ9BeP0PnWT6WlhaNFvHSoclPAE3vwO8d0vYXU1q8+5EgrFpBGh5WfPYL76HEbrOeLCUsOPVHPjJT7BNAXg3ssOXA8gA3i9PuGWa48dnYbJu3sqefZ7z3Gm8iRBf5bDcmk/P/TtmUEQSKTK7S85FN9T0nuxDDj0skr4mtUH7MeGu3jSlIDyBN74DiEJ3o0PILILpvxFp3f30PX6zzA7GpCH3iX3lofR1mzCCuYO0g0/sZi6TFoTB1cBZACP18MVYpBdBtj3XEfcYMfewzz//ReoqTxJwBdIPTs6wZ/+GjnEX2mvGkfvX6Yxc0qn1FNxOUkDUbGN6KtftxO+qgEtbT39D+m4O0m+J48XjAuH6Hrr24SEhW/9gxAqTH/plINeW4se76aj7ji8chxx4hhZa6/Gv+VxxKK1SFX1JdNJM1Sl3IScbN8Y4FTcznGHqwAygMfjcUNAo0RC8LbFTN7bd1QlfKsrTqQGoiesf21Q32qkWy36egIZcKyNxRZMCn+7u8Np9ZImZsUrxF/9GpHq/X2s/iGPlea1JBk/9GRi+I3vEFaegK0EksecKhmB5PwCcfoENHfYLOc+6Dr+EUbVR3iPnyB3w53ot9yFWTYPoXnsHXWaJaUc34o513obHK4CyABuAdDo0Z6w/Pcd4YVnfkZ1stqn31jHvhjtDT+U7T/+sNIOZQlF8IB5aBs9r3yVaPV+e/wng5/KYB0OfR5LCMqEErhQqZRASGgENjwA2fkTeUoTBnPeAvK3PETT+z/CaKpTE/FiQHT/m8iThxHHPyT/mnsQ126B/CJ0p4IqWUY7nupuqijPSwlXAWQAKa3LvYQpiU7DVGGfF55+0Rb+uqeP0E8le/s+MihGVLszwbrAntNgqe5dMyHMKrYTfeWrGFX71fOaGLicoZbZ+5m9D2oq7wRGfSXdb34bjxRoG7eqnMBUoY0QDnOtuXwtWcUzia5cgHj/bTr3vo3R04xIeAPdtcgdL8KJSjjwHqHbHsa35hoIhpzqoPHMEbike4PBVQAZIBqNuh7kCNFpWLynEr4/4UzlqT6WPwOE/zCCfwhhOniyd2IkfzLmb6UG0dthHxOLeMWrRF75KvHq/ejJOv9R9J2JVBK592+lBC5U0P7Gt8nGwp/wBEKF9tHl5E9pqnOSArOohOBdXyBYWE7PiUqM7ubUCWsadNYfRb5+FLP6KPqaqwnf/gT6gjXoHr8jt+3qKk2OzYYfZBbRtIerADJAd1eXPZr3ci9kikCVeu6p4Mf//Cw1h0/i9wZGLPzFwBemQTLRlD79j9ebpHQekQbxileIbv8asnqffSOll3mO8igklZtTJqp7IFZ/CPnGt9Gw8G54CBkqTM6Lm/SpKbuDxsIjNbS4E+aXEAD8BfPobGnAtLrRPNDzyUfIkx9hHD1B7rpb8d5+P3ppOUI4+QGXJmPc4SqADGAYaoL7pPECJvNA8E7D5B1V5/8sZw+fIuAL9uHgz0j4X9QzSMaIL92XYiWbvBzhb1S8TOSVrxOv2p+q6x+WcWKoU+l/AqK3WcySoAunY7jBzgnkoOPb+CBk502ZyiDLUaCR/a8iu84rLyenaAH+h34Pf2cL8Xdeou3cMaQWVyK+Z++biOMHMPftpfj3/gzPkpUD42pjw1TYtksCVwFkBnk5Ba4cZGjIZFQCHXGTnfsO85Onf6JKPbOSdf4OLib8h7f6B8El0gBJBleV8LVM1eQVfeXrxKr3913LMMJ/SPk/RHIj/WGhg0eA2XCY9je/TRiBZ9MDaFn5U0CS2QNwosRpP7WfeE+rMuazlt2AuHkrvnAO8cVr8RzYQc+7z9PdegEtAD3RBswPfkbssSfxyOUgPeMQw5/8u3Wp4SqAzDFhNF3SmVylJQsLpaaSjELaQ+VVzDfWg7emCqOpCbl+I0L3q8cnQ1hTqGofu9Tz+adfoKbyFME0y18T/aXjOAh/Jk74J4M9dn+vUMleZeArVs/XiW3/Zp9qnyFj/hnkAlKCfhBFkHQ6knkBzQOmygl8izBS5QSsUL5a3eQJjtjx+mQprnBUgK+rlXhHjIT+TPywdDV6Ti5GTh7cej85azagL12N76c/oL1qL4aMUFA6Dy2vUPFlTI5zu/LgKoDLDmmPj1T/SnSnK0hZndJAb6zDOLCb7v3vEjtXi0cLkl86A2POUoS0nPrxS397pIcf1DCXZJ3/oRN4dV/fNV2k0mdUwn+CIZwJXghNCTQsA1nxCtFXnlJNXumTOofb/kzPqI8iSC9+kWmbLRzaiMYKOt74lp0o3vgAMrvA8QhHcsSJggVS681nOJujX6iDSET9rnkhlhfE091OoKMD2dmGaG0k6MsnHvAgNAvigpzZK9BCBfZ5uRm4CYGrADKEmLBhsgLNIciSygeQyEgH/uNH6Nyzg46aCsSxw0SqDxGRkJU3m/D77xD/7BK8llT0wZfjpheO4mmPOXX+T79I1aFjqtSz/+uG+osxCv+BX8j4jf22nPUkRJkhLaKV24lv/zpG9X76ROSGsf5H862IQZSA6J0zk9BHdsdwYyVtb36bHCHseQLZ+ZMiJ5BsV9PaG/GeOQtNDcTbGuk69i5WyxnlMuleaP3V83Tu/jWemIkW6YSuVqyebjqaj2HJGNIQiOXL0HNyBgwQcjF+cBVAhphIKgjFJWPG0C+cIb73I1qOfoC/5hTRE4fo6GlU/PEEbEKxeHc9zbveI/TQ45iBHPX+y9Wm1hE32Ln/MD95+gVl+Q8q/Mc77KOQQavvGKHKvhRlmWWzem6zSz3TGT2HXPUYpfAAJZC2TdJyqoN0MOsr6HzzW4SlwLtx66RoFkvsmSkk1tu/pHPHq5gtFzC7W4h01mBFIynF2bPvXaThvCmdoE+3lZxlCoz5SxChbKepbjzUm6tG+sNVAJliDGEW6VRCOCy4ymo3FUmMCd1tyIq9NH24DVF1Ac5XKN6ULif5l7jRlVdtgvCAKWNE605SUHkIY/31l/SiTrX3p0o9K1Wp59mjp1Nhn2RyeuKEv7OWoR6R6eWUvYnypP+m8i1J1oghDi2k3TVqYdBT+Srd276CrNrXpxDlYqsej3RlfyWQRJI6InFtWBcq6Hjz78mREs+mrchQAbplOd/T5fEHpLRo//BNOvduxxJxJdATP0kvBufaToa3ZLL/wQQMME3w6iALi0FxBbmd+BMFVwFkjjFJWuFc/SYCaXQhzlUR3fUBrUd2o5/7hK4TH0E3aCG79jsh8K04+LLC5C/ZiFGQS3zXK3SaEYzWKjp3/ILQ1dfaN8cluM9liosGOk2Ld/dW8K//9GNV7RP0B/vQO0ys8JfD1v8PKvyRai6waVr9XjX08S0rpur8469+DbN6X58k65i3Wwyy4CFeNkAJpIWcpJMYjl2ooPWNvydHs8NBVnaues1lSQwnFhxpo6O6ATMSR3h7+xqUpe8FXwz8XvAUzMVXWI5WUEI8NwczKwBZQWL+EL5gAO+Cleh4xi3HNWFR3CkMVwFkCMHo+SCEU0hoJEzISBfGh7+i/YfPYDVV0lVfje6zb2RCIOOJG9dL7swFeDbegFy0HH92Cf4PXqcxbqm7Ot7eRuu+g2S3NUNe8aW5yZ2bUHX47rUt/zOHTynhP8gJD/0xjE34Dy4wh4/9R2NRCsvLKF5UntlREkuLdhI9/Dbx07blP2573P+zLtLQNlQ4KD314/GB2VhJ1xvfQpcSbdNWRFbBeK14REiof1/jBQrD+YhlN6DPmoHMCWPl5CoBL7N9eLUAfq8XT84s9LxSyC1EhrKQAR9m0E/cn4VH86LL8R3E5KYSBsJVAJlCJmzyUb7VGUxuU0QKIl0ttO19BU8BeLJsoW9FIVhcQHjhLVgr1uIvX4Z/+Rqi0Q56fvgPdH/4Gj1GTH2eN2sG+auvxfR58FyqzJ+UyvLfufcIz33vJ6rUM+ALpMI+SVws6TtW4T9k6Ie+fQFJqzEaj1I4fzZ3PnI3a9YstsMNF+UEkGgeP/7lt6lyT+v0LkVZMKAQeJz2PZlTGEo8DZkTSHtI94J54RBtr/29KhFNVgcJJ2R0yQrFhFQD7nO+9DvomheRnw9Z2cisbCyfD9PnI2HxCHRlFJlCOHTY0k65C0sJfs0a76prkc7p5SoCB64CyBRCjOGisYmt1MBvXxD/ghXkL19By8nD+EIh8hetQ161Hn3RInLKN2GWz8cKBDCrK+h55m/ofucNIlpEXbbe7JkU3fU5fA98Dis7jLAmTgPINB6cDsNi575PeP7pF6mpOJmidCZN2F409DMW4X+xu7afckgopbgRo2h+Gfc9sZV7btrIjFAw8zs/8T2tuJ0cJJ2v/m+lBISeFjwa7dUwxNc1XMx/qOf7VIlKh0W0oZLO1/9erdu78UE1XlI6zViXKicg82fA5pmY/defXrDgxIUSjycr2VReQ4oJ0ViCyzMsaLLDVQCZYgyUoCJ5qQvQ0QjOmIv/3i/iqdiNuGojoQVrYNFyzHAelqarQ5k1h+h++n/QseNVTCcRrGeXUHT/lwhu/Q3iJfNsK2mCINNkTYdhskMJ/xeoPnRsALFbJhhbCn2om7dv4jfdE4nFYxQuKGPrZx/gbiX8BxlAM8xqVReALwv/yjtUaUrHtv+NefpDVYJ50Q+Qw08BG0plj1YJpH4XKmdKtP6w4g4KJyzpTQ9AKHzJyoUT17k+zPr7LLbf4ykzYoKWKeUE3jBTFK4CyAwyNf9jPD4stwB556fJv3YL8bnzMT0+uxPYsnlmIjUHaf3BX2O8/xqmZldH6FmlFD/422Td/znMGWVKIhqJ94yRIXHYdQI9cZP39x/lJ9//ibL8dX2UhMRjWGQmwh/HE0kogWg8SsH82dz/xAPK8i92hP9oILxB/Ctvt72gl5/CqNmFx9MvBnOxstDBlj5UBRLD5wWGUhJJ+S7UDGubSrr99W+RIzT0Tfchs6b+eMkxQrpJ4IFwFUDmGD8FoOvIolmYBSV21UyyNNEy6T59iLan/4rIx2/a7nLC8s+aTdGjv4f/vieIF85SzUlJd1qKvmGJ8fScLSnZe7CSH3zrGS4cr8XjtQe4D3kfXfTYI6/3H1b4J/9KladK2/J3hP+9N28YtfBPBkzUkbwB/Ku2IIVGx7ZvYlR/qCq1BGmuUv9KxYt5ARf7robxBAZ7aTKPoPoEnJyA0VhB5+t/R5bfh3b1PRAIZ/aBVyCkZeE4AKlCscu7oskBt8A2Qwg5fgpAxT0tO/llqf8JMA3ix/fR+s9/RfSDN5XLrmr/s+eQ99k/xPvgb2AVzbCTbEKiSQutsxm98kPEkV30FjyO43UtJVnZWYQL8rESkmW4TGVmHziC12Ug/NMSvonzTlj+xQvLeOCzD3DfzRtUzH80EGlhO835wZutPIGce/8EfcE1iqkzKfuTLAUDlnuRfrXhnhsuXTLUc0n+HSu9RLSuAuvUXkRX+0XO+gqHTe3hCv9+cD2ADDG+vad2t6T9m6WEf+zYHlq/+zdE971lN80kLP/cueQ//ocE73kcwvn2a2NR9HM1xHa/T1Pl+3jqzuJduoKcJWtUdYU2XoQAUqILwYpF8/mN3/wsz3p/xuGde/CqIPhQ7xnm0BkvK4OYf7IZqn/Mf5zCPqTSk/3gCRBYeRuasOh87RsYpz+2m8NE3xX2f+eQp34RL2E4J2CwUJBMhtbTiNgS15JuGGjmNJ9qZ18wAx69PIuZPHAVwMWRlEjjdLEkScbsTzbNOGblx7R87ytEDr2jbtjE43rRPAoe/yMCdz4KwTCepjrEwV/T9fFbtJyvxzxzmK6G06pzMijj5J6vQs5eOm5xXuFMXAnoGuuWlmN97iGeQ+Pwzl34PL5RnDUpL2VYLTGkpu0r/EmL+SeEf8H8MrY+8QB33zT6sM/wJ2B/YdIbwLPiNrKFSdf2b2Ke3qWoOobMsV5M8V1MCYxg8I3oF9+YiJLVKYvefZz2Qj8drgK4DBAO0YAlBNEzVbT94/8iVrlTNYQlrk5P6XxyPvtnBDbfgag+gfnxO9SfOoh++gixs5X0xEHzge633X2r6gzm+2/D40sVhfR4K4EsXWPjsnL43IM8LySVO3bh8/ovLtn6Pd8b9+7/3MCE7sDPGuyD7FLPwgVldsz/ptGHfS6GdEZr05eFZ8WnCKHRue0pzNMfK5qO9LpM0e/0hhPyF31+CFdgyKqhEeQPpgsGCSq64SBXAVwO2HenZtlSxWdYBLsN4pot17wFJRTf9BDeuKT5e3+FdfIMVk0lXR0NSqgIZy6GGQWfL4eiVeuRq27CXLwcfbzCP+mrTVMCm5bNQ//8g/xYWhx892OC/qw+/D/JevThliCT/T2ib+xi6LtwCJWg6vztJi+71NMW/v0b08YDyfHkqcSwTHgCWegrbidkabRv+wZGzUfKE9B6dVnfbchECTB4YtiV5+MOdzsduAogQwgxfklg1BVo8/4HZpQib91K8//5EF8BWLEInRV7kL/aTtf5I5iOta957W5hIpA9exahq+7DXLqa4OLViPJlGOEQDqv0uLv7SaFqh4PmIz//aQzTpOK93WQHs/udV/rhB19M5rnkgWGf5KN22GdgzH+iSv36n4WQEs0TwL9yC2Fp0b79G5jVdrMYaRTOI1ICmVQHuRgd5MQzyE5FuAogc4xbbCWZ/k38ZoRzkEuXkR2EmASzo4W2g++mKj0SAsXoAl0PM2PD9cSvupZg+XyyFm0kPmuWKilVbfWil3BuIgK+SU8gqGtsWLYA+cVH+aElqdy5i5ys8MATFIP+MQIMIfydmH9+ud3kNZZSz7FChRV8flUiGhaStpefwqzZRYoVe7D+gAyVQHo/1MWqheQwf7twMRxcBZA5xk2qilRrukAKHX/ZIvJuuoe6915R81BVOZ9h/5tdUop/8yNY5SvJWbIKc+ESRCBblY6qkI9T+C3k8KWD47JuxzTN8gg2LZsPX3qMH+uCI+/vw+cNpLFv9vdERqoEBpZ6Jv9QMf/5pdz/xFZH+E9M2Gc4qNppmWbme4P4Vt5OLoL2V57CqP4Yj06vUh4k5XExJTCisrNLLPVl0tV06l8n22zqwWBzDbmqsT9cBZAhxDhe5UlaiGQ+1Couw7jhIczXXlFVQP7CQnJWbUEsX40+ZwH+5ddA4UxnSpVTl+58kh1zuHRFHsk1Bzwam5YvQP/io/xY91CxY4+qDhqbEhgo+FOZuoTlr4S/Xed/z0228GcCwz5DQaSZ58KhsVe0Eas+pQa2t2//BkbVx/icFww6M1gOM0t4KkCKqeVvaJpbBTQIXAWQOSasaU76A+hLr6Lk3ieRZWVoi5aQXb4Oc/ZcpC9bXbOKMRGZSjJeTiQjTUFdqJyA9flPq+2p3Lkbr+69iBJIYpgAxyDEbtF4jMLyUlXqOR51/uMJmWSz9PjsnIBm0f7qNzBO71ZT3OQwOQHIwBsY7thcDpGm2swcxqSpBJcLoj9cBZAphJgYBeBk/fxl5fi+9GdYuflYefn2YG2HtjgZ3tEyqLK5FEg/fJausWHpPPjcQzwLHN7h9AmkKQEGDU8NLvgHPmML/4LyMu5/Mmn5Tx7hT1pBk0rs+wL4VtyuPIHO7d8gfsqmkhbpQn6QTrGxKIFLgfQBO/HuNvB50b1BRd08FTLXwh0GMChcBZAhJuz+FPZQeOHPxpq3RD2k2aJEfTlJea9L0csbP8kQ9OisXzYPPv8gz2Fx6L1d+H3BlMHVp0SUIVplB1EJ6ZTOW598UAn/GZNM+JOyhdO4gTxB/Mu3KKne/vLXMat22QN/hjMhRhESGsz6n4jrwxR286Kdt4rS/K//RLC5luytT2AtWYf0eFN5Aa1PiHKSodcBmIy30WWBqwAyx4Rd1WLAgJLeHIFtOffG/CejoSVUOEhj/dJyhCoRNTj47i5CwVCf1/W//QaLIKdGT4okvUMZDySEv8PtMxkZHUVaiZjTcGQTyK24jRwpaPvl1zHOfIzXUQCDBcLSn8jEG7iUu2Bbz9L2SN9+FeP1H9PeWE137VEK7/wC4sY7EOEC23BRhQ2T0ZsZ4AFMvgvpMsBVABfH5LuWJyE0Jxy0cel8rC88imlKjuzcQ1a/PoF0DHYHCqfDNxqLpko973Gqfayp9mUoKuktFGDR9vLXiZ/ZbVNJp4XxBo3oyWGoJdJek8FD4wKl1BLCv+oYbT//N8yWakw9QuzQe4jGBkIH3yTr4d9DLrwK9Elr/7tcQIPAVQAuxhV+XbBx+QLElz7DjzTB4Z27yQqEMnqvHWd2mrzKy7g/KfyzA5PS8h8MTmGkMwUahDegSkRz0Gnb9nWM6o/Q9TTvbjiLf7SnPO5bJZRlrwuJYTVixiPgtdlGu+uOYDYco63mHIX3/Sb+Gz8F4Ty7uk1Iu3taeQXJMNKlm0yWDjlUm/U0xyine0wrJPYo8O//+M9+JzfgC7uX0EUgBF4BxYV5FM8ppaGtg7qqM2ianqJttrlyBu8QTtb5b/3sg9x780Zm5NilnmKKWf8iTdRZuhe9cA56/myMhiqslnOpxLAU/d83OvQPr6XKZy0IzNuId/E1kJ076g9PrFMLBhGlc8kOhImdOYsZ7UJ4wUASq63GPH0c89xuRGkZVt5M1eNiz6sQmKI3VHapFUBiL5ojMf7l239XG41G64Ba4ALQavfWM+p531MdrgfgYtxgJ0HtWGtWwhNYNh++8DDPahqV7+3B5/EOkHD9KZ0Lyku5PyH8J1mp50iQLuAs9ZeJ8HgJLr8FXZp0vPpV4jV2iWgqcZwWEmKkieBxeM1wSFaiSV8Q3/o7EaXLyV+yjuhPn6Lr7HElPT1BiFyoJP5mJV1n6yh68N/j3XQbMpSTWkQ8YRzIy2R1qjKsqWRCXBq4A2EyxCQtwJmccJouA05i+LHfeIgVN2wkbsQd67/3RcIx7W16B8fyn4SlnqNFQh0mlIAlNEUb4VtxK+G7/xh93joM07bQnRcO6IOTAx8e8NyAByfiHERSUDj1TqVz8d3xMNmlc9CTMtVCeQMJfR49uJPm732F+He/ClWVYBmpWcGXTeDIqeVBXiq4HsAVDhVXTybxpOWQ0NnPTZQrns5hr1hEl5bD57byE0yVE/B6fXZHs3BKPVMx/we575YNFOdkXTE9O5oUKeI/JYV8QbwrbicXXSWGjepddk5AG4I2wsFIdkOmN+GNahvtN6q4SE8nwjScBdr0I1IT6If20lLXhOEoMI8HRVyYkPCaDyK1B2l+7QzamQMU3vfbsPkWPMHcPl3UlxJDdAFMe53gKoDMMeUuFqkMM3uEpBQa9nx52yb1oqdXr487RFpII+jRVDhI+/xDikr60LsfEwhkqaqehFdQkLD8n3yIe25ab/P5XyHCn2T4JEUKp4JBSG82vuVbyEWj9Rdfw6j5GG9adGwsp59qvBtD0iTxGYYQ+KpO0vSzHxBrPInmTftAD4gzZ+g5dxIjBgUrrkO7/W58p2pofPMl4rF6xV4bibXA/rex6hvJPbAL7aEn0eYsRohhpspNFAaGf6bc/TwRcBXAFQ7pXPgJ69+qOYbn/bcw5y/CuPYuvNbEh0WF44UEdcH6FJW0QcWOXXg9PgrmlbL1sw9x703rKXKqfaYCuVjGGOBt2fVBmjeAd8VthC3oePmrmGd22UNlGNoLGA79dUafprtRaBQr1k3TL56m49UfYEab7MB9sn8jLY7j80HgjofR73oCrbWNvEVraf7pNzHOn0oluiNnDxI/e5bijdcSnL1oxGsZD8i+G3oFXWBjg6sAMsUUlUrKmTfjmId30vZv/xsqPiGwZjO5cxZC6eJLsoYUlbRHY/2y+fDFR3k62s656jMq5n/PTRuU8J8OECkLG/D6CKy8Rc0Ybnvpq0RP77GF62is90FkvKpAioI0TKS0RvCRAvPlf6TrnR8r4S/0tDGcWm9bvBmF3LseQ79mC3owDys7j+C9nyF3bgmt//AXWNVH1LrMCOTfeCPe0vl27ejlgJ0EnpL38ETCVQAZYlI2N/aD069pj4kUdvyZjlbMd1+h/sV/wKzdDXHo+bAHMzCHvD/+U8jKTxHMiYGEPeOG5L2X7dHZuGwh3t/9PI1NTVyzbn2q1POKs/4HgUj7rzKkfQH0VbeRo3uQx/cizNgI3LLBXtfbTmwi8cQtxKJ1mFk5vVVHg70rFTuSxGuO0bVjO3rkPL4c8IkAXj0XvPl0Rc7R09OhXq97wLvxU3iK52JqmkNpEiI3u5hufERkwviAgrLlhB78IlrZgstYiZO6tq7sC2yEcBVA5pgSFVN2ww12883ZE5jPf5+m918lduGomiGcOIt4VxNd5w4S7m5HD+YnbUXnEybu/kh+clAXbFixTK3TlyYQrnThT6oOvvcvCwvNk0Vg+a2I+ZsQhjmCK20YBWDZRoAuJYbfB/7QRUjbZKpmiXAegcf/hKyeL6kqH09CTOhBND2I763nMD/8JdGeViwr6V1IhDTVNUe0hebvPk3s5Cnbc9DB//DjyNUbFT3GBKadhoXQ9XGldL9S4CqATCHE1GiaSwh+M4qs/DUd//q3xA7sJRppVnXaCWtMl9nkXXM9nsf/HXp2YRofT3Ly7QQvz4kleB2CONvwvPIt/6Gh2bvg8UPIn/ouBkUmsfy07LtQlTymesymaLv4HmtSg/wZZG36lKOg0kuTNALHK9H3vAXRVqVkOrd9F0/xLPSVm5EyRvfz/4fOil9iyQ4Vfsq//RF8N9yPCOXZXunINmf8IN0ugMHgKoDMIJQCmARUzP0h+zDr2yEf+evtNPz02xgn9tg3nc+eMOYLl1G05TNon3oYlqxEaE4lkLx0zO7p07sGI4ObbhDJKSXpTKBDCvoMdivtJVZK8GdW8msl1YRMEllIVbufbIIxBfjKl4E/H9laq/IB3Ud3Y/zDX6PNm4MVMTAPfwg0KkmfO3MF2Xd+Hn3WfKc0+DLTRvcee6o1lk8YXAWQIQQTNA9gDEhazwkhr0IJtVUYL/2Yph0vEq07qlxwIVUfDr65i8l/+D+ib74bZpapeG2qOFEwkJNgApFUAsnk8PS1/nslUZ+inSE048X2KV1viD7NW5lBcz7fk3pfr1mgriMpiK5ZhygtRpy3nZfE85ETe6B6jzIyNMeh8ccha+uTeFesR/P608718n3XYpCpFNNdEbgKIFOIycmbZAqBZcWg4iN6/uWbtB89QKT7vCq2UHOFLT/5qzfj/dx/QF9zI5ZqxrEh0HrTkpdYCCePN52Fv4JITwvT+/sotqX/Vo7kI/p+D71XSLKpLzmRLp5XiO9zf4RlNNJzsMImsnPK+kXimoupWUbkfOb38NzxaUQ4r1foX07j/zIff7LCVQAZY/J5AIk7U+tuJ/bBdlqe+w7mid3ENUvdiFYPeH0lFD/wGPqdD6MvXasGdyTcezPF0OjeEy4uDqesAA0LjxRkr7kJz+9+jfA779D06o/pOXdGKQqrG4pXrUV/4EG8n3ocvXj2ZbX4+2CgnnXhKoCpCJnilxHnz2G88AxN779ItP6oEvyJK9yIgqdkMTMe/QMCN96JNWu2E+uXSV5c+/+uBnCRAUQyeCMTbrCF1LwElt+Cp3gFrL0Go7YGLRYj7gsRmLcQ37JVWDn5TvhopPR2Li4lXAUwBaFkuCYRkTZip3YTqTqKnmuHfDxWgIIV16B9/vfxr70JmRVWk5pkWqhHu+i0ERcuetEnOOSEivTEo0UzCRbdiYhHwLCwfD6k7nXGQvZ6DpMBqsbtCqIYGS+4CiBDiElCUCMdVkNhYVv2t95HXsXHtEVa8IdnUXzzI+j3fAZ92RplqdlxK9HvJk7+cllOwcVUg0hPn/a7lhJXmDfLHhDT/22T6AKTliUTP5d7HZMNrgLIEHIAnchlWoWwO32FtDCzw+g33Yv/wml8O16i6IH/iOf6u5AlsxX9sG5NHgvMhYvLCSktLCknkDR7asJVABlCqDaqyYBkRFbDk9BKeTPRHvptitbfQmDJRqycXNsSc0fgTXPYdM7J3Kca6CKkXc7plIhOJgt9wmHJhBeQ/CtdEUxrheAqgAwhJMblXkP6LSuSjI9CQyuah7doLsKhfCZVWz6tr+1pDel0AkshMHva8AhdzSKw+RmGmUN8pcIyMO0QkHtTpGHylTZOUkjLil7uNSRhh2J7R9wJIZTwp1+L47Sy8FykIKVUfP5xHcTRg7T+r7+m6923UeT9QiK16ScHpWlK01Dja4Ybtjbt4HoAmUGa0uy83Itw4eJiSFa6aNEujJ/+I83vbKOz4jBZuQL9qqsxZ5ahWWJaNeDZFUAWhmG4wr8fXA/g4lAXihWLN0+rMjJpCxNT9RxYdveBNJDRDmRXM4bVozjtTfVjYdlJNuc9Li4rhMDT0Ej3B+/ScfjX4G1FHNuLVXfOeZ5pJf8S1268p8cyDMN0aG/7ewLTFq4HkBmsSE/3OUnB5V7HJYMUElM4VUSmiVl1hNgvXqTpyCEwLQJhD4XXbIDbvoAxYxaeJAllQglcYm4hF71IWvZmfi49Mpj46tAD0FR1CHmhiixzHUL3TKvqsIS072xvtdKEv5mmBKY1XAVwcSgroeF87YHy2WWPaGKaRNadW8NMWP9H9hL//jdpq3hfzRKQFlhesKp24d9VSfiOrYib7kb6Q33e6+LywQqFyV8wn7bjYaJmO9HuDrSzJ9C62jHDhdPG9VfT16Sk5uSJuCP4jX4KYFpfrdPlOhgL1Gz1iv37DsUv90ouJRRfv0BvrEO+s42W3W8QN5rQs0AL2HdQV3M97btfpv6Zv6Htma/C2VNYGqkyVOneX+OOJANs375EO/SmNLO0qUI0KchetR5PUZkSdboP9E8qMBsuJL+caYOEAjhy8GAENQ8v9WOkTUGatnA9gItDUaGfOHasPmZJsqeJykwK7/ipA7S9/yyG1qPo8ISEvLlLCc1eS9uBXbQ1ncas+4TotiY4foKcux7DvPkupDeo7i9dCSrd7UkYB0iH+lsRr/XpS5TJmmB7Vq+QeA7vo+2DV4i0nbd5nzzQfOJ9shuOk7VwCUJMn1s/KiWVBw/2ALHEn86/hhsGchVAJlAeQG3tuY7otOskN4m0NNJVewbNa08U86y8htAX/xxfYTm5xyvRXv83Wne9jNXZSPv+V4nUHsV/6gDh+76AWTY3xUc/TfTmhMK0Bzcg4j3IV38ODeexttyLmLcE3dlhq6cNc9u/0vbGz+k6cwjLaEsNde8630hWbS0yFsXyeabHdyIhZkF11enIIArAdBWAi0xgna0502OZGEg80yEJkOw2DgZzyMsuoC3aTDA0k7w1d8PVt2JoOrJ0DqH5C/DMmU1s+w/pjHXRU3eU6IuNyIYecn/zP2CVzMYjXUqK8YCWkFVnT9H68jNE3vk5dHaRdeg9sr/wH7HW3ojn+Ce0/fIZun/9S4yW85iaiYzbvV9qoKkGnpOn8DS1QEnocp/OpYMFbW1tUdcDGAhXAVwcKhZyYP++HmHG2y3hKZiUk2HGCplG3qtktYXWXIf/9CkMLageisU66G6vJTceR/N5sHwBrPIlUL6IqBmzP0cDrxkl4AEZzlOx6PGinU6NkkwfKznJQ0vJILPWb/2jgVZfTdM/fou2HT8BrUntqXGwke5/rCNrZhlmXTOdNZ9gRVtVOiBx0IKb7qP79Emi546g+cHY/Qvit96FXjJnck44GmcktiHW3Wl1dXYmhX/EVQC9cBVAZlB5ACPSdTwa9G0O6voVZ89K4cT9pcDAoHvvO3Q8/RSeurNYkSanGrSb9p0voek5FDz6Wxhz5iKO7EO+/lNiRhxNRw0CZ/UmAo8+CVkhJ5swusopVe9DxEQAAB+VSURBVFLq/N5nSuIkF/79+0WkI2nEGNds5hTgv/1TeBv2ED3WhK4lPjdO9MRBzJMHsUy7LyPxHRQtuArv/Y/h2Xwr+nf/Buv8EQwNmk+eoeD8BXJMA/Qr+/ZP7HuPtDhz4rjR2dkZcRSA6wGk4cq+AsYPqnb45NGjLwc2XbM5eCWaTnZ5CaYmsI5UYP3g74keeBfD6wwFd7q7ZEcdba8+jVVzmtwbbiF+9gQdFXtUiMGKQbBsNQUP/SbW/BXqfbol+o2uzxx9hGX67OCktzIF5gn3EfpOo9xo1yyDYQLX3UrBrFyMZ/+ZzvdfI2q0qASv6nHV7JGM+bc9QO49X8RatQkZCpOzegs9hw8Sb6nB1MBz/hRaRwvkFY/vyU5CdJsWr7z0005H8Pc4HkDUrQKycSWKsolAwoP3enQ9es2n7vq/cj36lVfU4pAIadFuYr9+jbZfPA3euBLdAW8uRYs3ESidS6yhBjPag9FSRfTEAbpPHiIebVXv9fsLyLv5UXwP/AbCH7Btf+VUiFEnHFXoybLosCyilqX+9mqaw380Ob+E5LpiUtJimJxJGJ9SEvR6BrxmZJAITUcrLEVfuIbsYJjY2WriXa32wFLnI3O8ITybbsGatwRNePF6/XTs+4hYY41K5oekxLdsAxSXjtcpT05ISbth8pdf/nJdW1trHXDG+bkAtDmKYForAdcDyAyqn+RHP3jm3H/+m6+cN4LeEu8VFwSyz8fb2k6s+jQxs1sJCz9BctbdjucLX8YnNPQ97xDd/hwtZw5itVTbO6MrskXE2nV4H3wckZ2DZoHdNDfCkYBpLz/b3s2ujys48dF+Gto7lELJz86mdOF8lmxew4rymeR59D4hl3TBOljOYMizH4FA7v9Z6e/tME0+Od/CyT2HOXvkBKframnu7OSJx+/nri3X4RlDI2GSBFDHgz5nIdZDXyR/3gLE89+k58R+ZaYkvIH2mgo6vvOXhD73n/Bfdy/W3Dl4ZuThPYnyAOr27SO/7hy5K9alqKLHGp6ajDCE5Ozx40b9hbouIOEFdABdjhfgegCuAsgYyfbx6ImKA8+Gr7v+P+VeYXkANWdYgFSBZCeha4GvpJzsWx4gtuxqJZz10nKywjORz/4t7bUVvaGfOWso2vqbaHOXqLcKkcZaOgocqTzFcy++wf6Dh4m1dKgcA8oN8+DbU0Ho7fe56pqrue+em1heVjSsgB8gsNPufJH2mkwFYFKhpOckolJy4OAJ3n5jJ0eOn6ajoZV4ZzfdkQjdkR6OX1/PdTGTAp/ujGoYRUis32RzWVCM/4a7yZtVSPYPvkX77neIiW7iehSqDtL6T/8PM843wh2PEF5yHfGKvXR3niMe6ULUn4FIF/hzEPaE6RGvZzIjscddpuT5f3m6MxKJJIR/u/PTmaYApnX8HzcENCKo6EOsJ9KxZesDn8vStSvslrFjQIYu6ak5RteHv1JVI14ZxzdrFlx1E7rmwdI1uk9V0vX2z5D0qFsoEJhB/m2Po9/3uAr9aEqciDRy6hHslIDjNXX8+IXXeP+tnfR0dNkEc6allIBhmsQjUTqbWqg+WUVjexczy0qYmZ8zQKhKhzJb60ObLVJU2umvH6kHkOxx1oBWQ/LSy+/w7DMvcnj/EVrqGol29xCNx4kbBq0djYRmFrNqxTKKw1kjPt5QG6XW4PHgKZqNtngVQU8W8ZozGNF2NA9Y7c3ET35CoKkJ/+kjdF84QdyMoGmQFypFX3o1Ii/Xng0gxBWnBLosyV/84R9eaG9vOw/UAFVALdDs5AOmPW+h6wFkDlVR9rMXXzjz1W99pzbuyS71XVEus00hQDBE9vKNmMs20HpqNxHaaHj9WQKah/wHfwdZdQrzue8QjzTbQsYEfeVVeO97DCsrFyGTc3NGd2n1WBa/3rOXX73xNh5LQ9PsEePzVi+ndM0yOqrOcmr3ftq6OhCdko/eeIeCwhAln3+YQl/vMU0kO97by+vb3iUWj+LVPei6jt/rI+D3E/T5CGYF8WQFyZ5Tytq1i1g8IzejNSrhLWVq6M72l17jJz/6JR1NbUrZRGL26IgFq1Yxf8MqZs7KZc3CuZTmh3rfPw7QEoox4Y0IPyxcjffxIornLaH+B39H9EIFWhbE2mtoeuff0C2TmNGpykPjFxLfmxc8Gskc/QjV9KRGQjHGLYtP9u6JnzlT0+7E+1ucf7ucKqBp3wSGqwBGBMvhEOne9d4737vhzrv/0uu5ssJAyqcROtqydeR++t9hfb+ZtsZTmC11GD9/muieDxBmJ0ZNhd0ZbEBg3lXkPfhbKiatKUGij+m+OtfcyeFT9RjdMXyBLCWwb755M/c+difZhfnEO7qoPHUNL237FSc+2IvoNjmy9xNObDxN4drFqc+JScnpM7Xs+mg/hmGga7oSvAmFoid+dA1N1xWlwpw1KymZVZCxAkgPKR04coadO/bTWt9sKxlN59q7b+Xmm9azoGQm4RmFhEJBQj4PXiEUZXZCeaQnxUerEIRwdlug+i2sGSXotz9IwaxSmv/lr4lWfqxKc2ORFnvdcQj5wf87v0/gni+gF81EytTQyFGtYbKi07T46v/8q1Yn7t/iWP0JBdDt3MfTPv6PqwBGBOnEDSP/31PfeOOa227/svToOVfKbZMMAKjwRnYO2s33UhAM4fvF92k48CbEm4geeV8lGVW5oYSsnFnkX3s/2vpbkFqSjGBstmTLhWZazjXh9fgw4nFKli1i/T23sGLJXPvTi8KUlBWrvMBzR6tpam+jvvo81UdOcs1VS2zhnLDCDUlrd4R4PI7X41WC1zSNPk5/QoDGjDhFkShCy7xOKT2pfGDXfk4dPYVPHcPimjtv4JEn72dBaTENPTGO1zbScfwc/qwAi+YUMTc3m6TnaDfdjUX0ij67nViTlpWDb8ONhIqeIudH/0TnjpeJxFqU5Z+74Q5y73wYNt2GyC9BiCvLgEkiIdnPnakxf71zZ0LwJ5RAk6MA2p3QT9y1/m24CiBzyGQi+OOPPrpQuWf38+uuve5LoSssF5AUbiKcDzfcgW/uPApeW0ns5R/RFWmyKQWSpf0r1uK5/zFEIEdZ/+OxEVYkhtkTUaItIVC94WyCRXl2zNshQcv26czKyyU7FKKlvZ3WlmYaGuudWQT2IiJxk7buHmLxOLruIS8cprggH9OIE40ZKjZvGiaReJTs3Bw0v3fE+9RmWNQ2NdPT0YHH46G4oJBr1q4Aj4/v/uAXHNy1l7auKNKUSmnmBH1s3nIj995xPXMKcuzPGfuW9a4JYes3zUvWwnXI3/qvBBasIv6rn2NcfS2BTz2CPm8ZVjBgc8ddgUicVqdh8fdf/UpHPB5vc4R/o6MAkv0AbvjHgasARgbLiR92/e3XvvLC93/y08+ieQNXWlNAysINBPEuWY2noBhr4Qr8256lqeJXSmj5Fl5Fzqd/C1kyX71nvIaM+/Jy8BeEMS1DWe6tJ89Sta+Sq+cWE3As3k5TcrKpiYbmZoQmkIbEsqxUbD6BjmiMzmgcTRN0drVx/U1r+NyTjziegKVen/gxpIk3N0xp6ciH/XSZJt2maVdQSUl2cTFnu0ze++HP2ffOB0TaO9TrdM0uVW2WkvPnLtBjGXzmvtsoywkmN3wcdo4U6Z6Q0g4Nlc5D3P8kno03YBXORCuYpTwdTY62N3vyI7HPNadOmj9/4fkmJ/TT4Py0OvF/N/yTBlcBjAzJMFDP22+9VVP1yZHXF65evTXnChwSk4xL64lLpHg21m0PEZy/jMJX5yLf3UZgwx141t6CVB1IVr9gxOgxu6SA8rmF7IlH8fsCtDe38Mpz26hvbGfF9RvxBb0c/fgAO37xNtFoVCVdg/4AoWB2n8/paOuis70bTdPx+YKUlJUSnFfGicZ2ItE44Ww/8/KzmRn02ec7irXb6Wk7eKYJjbaGRnb88g0aGy7Q1thITlaIcHaIts5WDMvC6/ETa+tix09fZ2XJDGbdslH1BYwXnCAeQvQG48gtRMvNJ91PvfKuVhvK+peS//bHX26NRCJJ4V/veABtTvjHLf9Mg6sARoYkrUvCjez4v//rn//z9579yY3ZOaH8K7GeNl1QaIEQ3qXr0IqKkVseQS+ei+bP6qV5GKcQUEHQx423XkvlsdMcee9jcrJylNX82k9f4d1f7UTXBZHWTiJtHSqZa1oWxTNmMKOkxDbrnK7jSFMr0aY2lfQN+Pzs//goRz55itqWFixL4tE1CnNCXHXDZm67/VoWFzjsmCMQyGGfTshrC9vEWjrb22htaSIvFOK2Jx9m/ebVFAQDnGxp5Zcvvkb1/qPKq2k4U8v+k1VctXkNs7ICY9+0NAwm3Effhz21kPj+33vzzfi7b7/d5IR+LgB1zu8dadU/LhxciXLrUkGrrqoyigsLO1Zu3HSL7wr0ApJQWk8IpCbQssOIWfPQsgvsgENC4CYpRMdhA4SQ5OfmULZgHlETzh47SXtXO/FojLbGJlrrG/ALnWx/FrF4jLhpULJiETfccQNzCsOp5rOTR06y+9d76OzsUtZ5a2sH58+ep/lCA13NbXS3tNNc38wnR0/Q3GNQOncOhaGAs4aLn4iUUllPJw6f5tiRUximoUJBHt3DnQ/cxqNP3MPyJfMoLSli7uwSDN1PVXUt3W3tKlwULi1l+dIFzAhnj33TXKhrtMO0+J3feKKxob4+IfSrgZNO7f95xwOIuOGfvnA9gJEjmQxOXEztf/nn/+XN+z798GcCZWXLrqy+gF4INWJQOolYDekIfinse0kKMY5JRUG218OGxfOY+1uPcPL2azlS30J9SxceXWfOjFzqK47z1rZ3VJI4Ho8zoyhM+dyZqU8wsWhta6OlqYVoQkkYhlIM81YvZ/76NbScqOH03oN0RyMY7V28/cLPKM3Tmf/kw/g0bUja5v4dxZoQlK1cSuHCg9QePa6OUVhYwPJlCyktyrdzKUiyvTrlyxeSW1JMU3WNyglEO7qJdfeM16ZNayS+lahl8dKz/xY5XFHR7IR+zjs/jU71T8RN/g6EqwBGh2QyuDPhXv6XL//BV/7hh//6nYJgMHi5FzZRsIVhMi+QNPjTBOQ46b4LXVEOnqpFMyUrl87lus1FrI3F6YnGlSV/6pPT7KuqVeWbiSXNKCpibfk8ipKxfFVrD/mLF7LpsQeJdHUTb+9g0Zxirrv+agqLCoh2dPHWSzPY9vKv6OzpQUZMjp6o4+SFFpbN6k0GD0cvkVQO85fMVeycpw9GCfiDGNEYVtxwIkkylRnpudBEvK1TxedNy8STHcAT8I/Pprng+MlT1l/86Z80OAK/zun4veAkgrvd0s/B4SqA0SHdC2h7bfv2I6+99PMf3ffoZ377SisLtSEG+W3gX+OBuvPNvPrS25w4cIDC/DCL58xl3oqlePNzaTxdzYH3d1NdU4suNCKxCCWbFrH8+g2pC9mSEl0I1i2aw+KyGUjTxIwb5GT5yc3NVkpEK8ih4Y4b+LjqHC0f7lFsmW11LTSdvQCzClLc/UkKicFI5ZJ0EGW52SydNYsjgSz1WFNrK+/uOULZyiUsnFNEDMnBwzX88udvUHe6WnUj90QjzCnJZ2ZRZo1nLoZG4jtoNyy+/O9+q6Wtra3REfrnHAXQ6MT+oy73/+BwFcDokewM7kp4Ab/7m196ds81197omzdvmf8KDQVdCtQeP8UnH+yms7WNjvNN1J6sJbi3AuHzYXR3E+noQlpSeQCF8+Zy6+03snh2Yer9iZ0/297D/n3HaTlzHhEMEC4tZs2KeRRgl4lKIQjmhwnkhVQpqEfXkLE4VjRudws7Qj5qWSqu3GNadEYN1Vg2K9vP3JysVFo1oAmuu/tm9p84zZEP9hHwBdi98yPOna6itLhIhZlq6xtprW9Bxk2iRozyVSvYsGYlBQHflJhpMFlhD3yRPPOdb/Xs/vijRqfi56zzk279u8yfQ8BVAKNHqjHMiTE2/PsvffH//dGLL36zKL+gcHrUXYwfkpa1ZlgQjavYfcJaN6UkGouq39XrLItILMbM8jk88vhWPnXdaoJ6393ujMXZuXsPe7e/gz+YTUFhIb4n7mX+ndc4Az4lbSfP0Fl1XlFCJGx5b14Yb37YPoYjkGtau3ju+Zc5tONDLJX70Hn4sXsouedmApqWGlKzfN4s7vn0vTQ3tVF//BSyW3LmRDW1p87a/QbSsuPUsYhKNj/2yF2sX7VQeSouRo+ERN/94YfGX//3v7jgCP9zDt//Ocf6T2/8cjEI3CqgsUGm/XDu3NnYqWPHqu64f+vNfo/HVa4ZoE94RQgKivJYvXk1C69fT97suYTwoscNVe6Z5fMze3451269nYefuIeb1i0n32HX7ANd45PKTzj88UGsmEF7SwvtTW1YoRy6wtkcPFLNaz9/g+OVn6j6+O5IJ0vXL+O2LdeRF/CliN4ao3F2/OpDKt/fR7S9h86WVuYvX8Cq1UuVAkj1SggoKc4nd24p9U2t1NecIRqLYRg2g2lPpIdQIMjVd9zKZz7/IDeuX044FBwHKojpi8TeVZ0/bz2x9f6GtlY17KUGOOFU/pxJUwBu49cwcIXU2JGeEG7c9vLL+/75W3/3vd/7oz/5/SzXwrsoUtz6jjVdUJjL+oIwy+MmHVetIHLndfR0dxMx4yomn5WVTV5RHnnhbAL6QD8r8Tn5Pg9Xr13F3uUVnDt6UhHKfXLsFOf+7hl8OVkYkZhi7jTjhrLOZxYUs2nhQkocZZL0AIJeD9mBAD5fAJ/Xq7ySSNwkalp97pzEuvOy/Gy5ejlLZuRTWX0Hx8800tnajSfgpawkn+WzCpk7exYzivIJetIatVyMGAnhX9/RKf/od3+nrbb2XL0T7692lECtU/ff6dyXrvAfBq4CGDuSoaAep9bY9z//+39/edmKlQtuvePuu7N09za/GFLJVSc+nxD0IZ+HUGEYrTCsErsy2aPlpPESr7Mc6oMkkt5Ewq3dtHoxjfdu4cdNbTTU1ZFFkNYLjVh10qaYFkL1Efh8Pu649zZu2XKNImmTjvWfOFjAo6NJk7aOFvWezo466hrPEolb4B943MSal82fzdw5JdzYE8OIGQhdIyvoI+Tz4hF9z9lMHMvNAYwIqt7fsPgf//lPO3/15ht1TqlntVPvf8YJBbW7nD+Zwb3yxg8JuZMQC2FgJlD+6tvv/re1GzduzNLcbf7/2bu72Diuuo/jZ2bX612vndiO49jxUzl58iqkAC3ElZoWoYIKN1wgKhCQ8KJeBJUrQAgJaOCmEjcUQSvBRWn6klCCGlJQIW5Qq6ZCaUDloqWBKLEd27Edv9uxd722Z2cGze4Z+3iya6833rWT8/1IJzNZz85u4tn/b+bszJlCBT+tuf7n3BV+7i9zczIh/nH5mnjz3AVx6e2LYnx6auHJ0cqo2H3wI+KRzz4kPvHRfWJrY/2SdXlFPeW44sKlLnH1+g1RH4+I2pAjdtzTLFr/755MONyuVd4sU3uuP8zzT48ln37q5/3yy94OIcRlIcQVGQLDylW/7P2vgG1v7RgyBKJCiM1CiOZIJLLr1bOvf//etvs/RgiUn/fpT1m2GB+dEKNDo2IkNSembFtUhgzRUBkRjVvqReO2LSIezV5DEDya8J9vua6oCJmZFvYHXGOvvaz84v/kj3+Y/PWvfjkgv+jtkoXfL/6DgYu+sAK24rVlyG61mBCizgsBIcT/v3z6zOOffOQzhwiB8vLP1fd7jixXiLTrCu/XEDFuHSEn1w3lAwtkJ6V+41jC+030j425P/vJscRLx58bkN0+XsG/Kps63EOKrp/CcRbQ2nOVQeO8DdE5/YdTnc3bGiv3HfjwrkgoxzeXKIkl9/z1ktk0RIUhMqdfqmOXGoH7A+fDWTvl5/2f/6ej0zl65CsT7X95bUB+yesX/075xe+gMtYPxX8VCIDSUAMg0861t1/v7+keb3vowX2xqqoIKVAefnE3lBvDC+WxfIXfCCyz8DyOAMrG+wC98db59JFHPz909cqVQdntc0053bNHXvBF8S8SAVAa6lFA2m+XPvhg/NzZv167/4EHdm5ubNxcQSlZF8UWcYp/eXgfnNHpKfc3zzyT+u63vzUwNTU1KM/w6VKKf69S/FNc7VscAqB0gl1BltfGRkeTzz/77H+r4/GKHXv3N9fEYpyKC0jeB+af779vH/3a4fFTJ08M2Lbtn+bpF/8u5XRPf8+f4l8kAqC0gkcCljw9be6tN9/oe+3M6Wv7Dxxo2t66o44UgM68D8lYIuG+cPz43OPf/Ppgb3f3Ddnl0y33+Dtk90+fHO5ZPduH4l8kAqD0XOVisbQfAF6bnJxM/P7kiY6BvuszH7rv4y2ba2oidDFAJ/7e0YV3/2UfPfLVsZPPHx+wLOtGni6fAW7uvrYIgPLIFwIpr/37vfeGT514sSNeUxPdvmtXQzwW9YfcB+5K2cLvis4bN5wnjz2R+NH3vjPQ39c3GNjr71T2+oeUG7vPM7zz2iAAykv9TsAPAe8wNjU7O5v4W3t779k/vdpbt2VLdWPrjtpYJHuyEEGAu4W/JzQ4PeX++ZVX5o4ePjz497fP+339vXKvv1NOu5Vx/afkDhODu60hasv6MGX4RuRFY5uEEPVCiEYhRJMQYvu+/ft3/+CJYw8e+tSnW+urq8OZcWr4heEO5O+mzzuOGJyYcF//4+nZp3/x1FhvT8+EHLN/RLmLV7+8qGtEdvdMK4WfLp81Rj1ZP4YMgrAcQyguh5BQg6Bp1+7dO7/x2GP3fu4LX9zT0NwUrTINYea9Qxew/tQKnRaOSKRdMdDTY595+WTyhed+Oz48NHRTdueMy7N5/EHdBuXfx+QZPjPyKDmtDruOtUP9WH+mbBE5jpAaBFtlGGyLRqNNB9vadj76pS/vPfTww02bt26N1ESjZqVhiuwtTRbxS0W5BLe7zPhJjiMmp5Pu+PCQff5ce+p3L704eeXy5WnLshKysE/IIj8s25Dc4/cLf1J2jbLXX2LUio3BUMYRqpDdQn4Q1AkhGpS2JRQK1be0tGzdvXdvw8GDbQ33HWyra92zpyq2aVM4WlFhxCIVoqqy0qgwQ4Y6hLKPTxNuh1fkHcMVU9NJdzqVcmfnLDeZmHL6Ojusdy++k7p44Z1kZ2fHzOjIyIzsvpmRXTlTSvEfVdqEUvhT8vsxTu8sAwJgY1G7hdQgqFHCwGu1sm0SQlTLZWLRaLSqKh6P1dbWxlpbd1Rtb2mJNTc3V9bW1VVUV1eHa6prwvHquBmPx0NV8bhZFYuZlZVRIxyJGOFQyAiHwyIU8kJDDn9gGtl5cetwCNnhFMTiJuQvKR/3h2Hzn68Ov2CaZmZE/1xBFBwi2R+TbU021FJs7Sul6W29ZuHjDrmO4zryxjrBJpTB7eR9FzLD5GX+dFxhu07mVpvej9Jpy03btkhbljs/N+/Ozc26iUTCGRsdsUdHRtLDQ0Ppvv7++e6urtnu7muzN2/enJ9JJi3LsuYDZ7jNymKeVIq/v/c/qRT9aaXwW8pFXeynlAEBsDEFgyCqhEG1DAS/xWWrkstE5XcKEfncsDINyy+fvWaaphnK/BEKZaaGYcjJLYQ/FbLWq/MLY+QsPG7Ier9Q9L01C/kCwjBNw5/3Xi97gxZT5ouxOOJapgRk/3C9lbqZYPEr2eJ/lbEwdo+3Fm9dQv5rMjeXyb7ekseMxTAzFuusXL9fGGWZ9JdRyrEbeGtLfnULixlL35sfhoaabn499guycJV1G0uHJXWz708Wbsd1HEfY3tS2hW07ru3Y3nzmccdxXEko04V578fZ5WzXzj7HCxDXsb312m46nXYsy3K8qb/Tr5zGnFaKvaVc4Oi3WWXPPynP20/IYj8t5/2iP0vhXz8EwMZmKGcMVchWqQSC2qKB4h9RnqMGQSjQzEAzlKHxlwyaGXhfwfdZ6N+D61tuvbcj17pWep+3q5T3eFmuMLqrnOaadwPzrlL4neC4VkrxVwu/5V/kqF7nogSCPz8nl08rXT0U/nVAANwZjEAYhAPFPRKYBvf6w7mOAJT1qYXfCDRRZAgst/x6hUCpXqdYi4cUhVuu5yxYxIPL55rP9xxXKcx2niMAK9CCj83nWUYt+hT+dbQRPgRYHTUM1CIe3Ktfbt7IscdfbOEv9LGVwmC5dRVrtUcqxcpXxEq9/uDPC93jz/ezQo8EbCUM7EBz8jzmUPQ3HgLgzhcs3EaOop6v0AefL/KMepxvOylk+1mPrpjl1nm3bfOFFPZ8f19u+VxBoB4VOHnm8zVsQHfbhwFL5duTX647Jtfzi3nNUi1fDB2283xFttDiW2g45DpKWM3rYAPR4YOBOwvb5NqgIAMAgNy4NS0AaIoAAABNEQAAoCkCAAA0RQAAgKYIAADQFAEAAJoiAABAUwQAAGiKAAAATREAAKApAgAANEUAAICmCAAA0BQBAACaIgAAQFMEAABoigAAAE0RAACgKQIAADRFAACApggAANAUAQAAmiIAAEBTBAAAaIoAAABNEQAAoCkCAAA0RQAAgKYIAADQFAEAAJoiAABAUwQAAGiKAAAATREAAKApAgAANEUAAICmCAAA0BQBAACaIgAAQFMEAABoigAAAE0RAACgKQIAADRFAACApggAANAUAQAAmiIAAEBTBAAAaIoAAABNEQAAoCkCAAA0RQAAgKYIAADQFAEAAJoiAABAUwQAAGiKAAAATREAAKApAgAANEUAAICmCAAA0BQBAACaIgAAQFMEAABoigAAAE0RAACgKQIAADRFAACApggAANAUAQAAmiIAAEBT/wsAAP//vjI/WQBslqoAAAAASUVORK5CYII="),
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
