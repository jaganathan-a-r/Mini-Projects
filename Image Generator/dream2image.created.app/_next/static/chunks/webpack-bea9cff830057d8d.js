try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b0f3f3ff-0970-4998-b045-4e7981491d17", e._sentryDebugIdIdentifier = "sentry-dbid-b0f3f3ff-0970-4998-b045-4e7981491d17")
} catch (e) {}! function() {
    "use strict";
    var e, t, n, r, o, i, u, f, c, a = {},
        d = {};

    function l(e) {
        var t = d[e];
        if (void 0 !== t) return t.exports;
        var n = d[e] = {
                id: e,
                loaded: !1,
                exports: {}
            },
            r = !0;
        try {
            a[e].call(n.exports, n, n.exports, l), r = !1
        } finally {
            r && delete d[e]
        }
        return n.loaded = !0, n.exports
    }
    l.m = a, e = [], l.O = function(t, n, r, o) {
        if (n) {
            o = o || 0;
            for (var i = e.length; i > 0 && e[i - 1][2] > o; i--) e[i] = e[i - 1];
            e[i] = [n, r, o];
            return
        }
        for (var u = 1 / 0, i = 0; i < e.length; i++) {
            for (var n = e[i][0], r = e[i][1], o = e[i][2], f = !0, c = 0; c < n.length; c++) u >= o && Object.keys(l.O).every(function(e) {
                return l.O[e](n[c])
            }) ? n.splice(c--, 1) : (f = !1, o < u && (u = o));
            if (f) {
                e.splice(i--, 1);
                var a = r();
                void 0 !== a && (t = a)
            }
        }
        return t
    }, l.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return l.d(t, {
            a: t
        }), t
    }, n = Object.getPrototypeOf ? function(e) {
        return Object.getPrototypeOf(e)
    } : function(e) {
        return e.__proto__
    }, l.t = function(e, r) {
        if (1 & r && (e = this(e)), 8 & r || "object" == typeof e && e && (4 & r && e.__esModule || 16 & r && "function" == typeof e.then)) return e;
        var o = Object.create(null);
        l.r(o);
        var i = {};
        t = t || [null, n({}), n([]), n(n)];
        for (var u = 2 & r && e;
            "object" == typeof u && !~t.indexOf(u); u = n(u)) Object.getOwnPropertyNames(u).forEach(function(t) {
            i[t] = function() {
                return e[t]
            }
        });
        return i.default = function() {
            return e
        }, l.d(o, i), o
    }, l.d = function(e, t) {
        for (var n in t) l.o(t, n) && !l.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, l.f = {}, l.e = function(e) {
        return Promise.all(Object.keys(l.f).reduce(function(t, n) {
            return l.f[n](e, t), t
        }, []))
    }, l.u = function(e) {
        return "static/chunks/" + (({
            1687: "0a8f5965",
            3096: "queryString",
            4604: "tsub-middleware",
            5526: "695b3971",
            7353: "4c9474bf",
            7493: "schemaFilter",
            8119: "auto-track",
            8150: "legacyVideos",
            9214: "remoteMiddleware",
            9464: "ajs-destination"
        })[e] || e) + "." + ({
            1687: "37532815f9d0c186",
            3026: "4fee37925f0a03a0",
            3096: "7a3a6c9dc15625f5",
            3571: "3ef9f5fd8f771ddc",
            4317: "5db51195db5e4142",
            4543: "c4fa4e8aa86b25cc",
            4604: "e79de2059bc325d7",
            5404: "79197ba8ea01204a",
            5526: "cec93842990458c1",
            6043: "b44ef9ad4b76c550",
            7174: "78c6056902d20104",
            7353: "540d30919be24259",
            7493: "3d9774fd1ffb79e3",
            7651: "3f9ac4ebe77b2d42",
            8016: "6c99b24dfa95d238",
            8119: "abd39988a87c758f",
            8150: "7dd4759da66aa0cc",
            9185: "9e62e021143edc88",
            9214: "a2694cd698a0efbf",
            9464: "8fc3e58f5be3a84b",
            9523: "368ae416f593ea20",
            9961: "961ddc05cbac70ca"
        })[e] + ".js"
    }, l.miniCssF = function(e) {}, l.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), l.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r = {}, o = "_N_E:", l.l = function(e, t, n, i) {
        if (r[e]) {
            r[e].push(t);
            return
        }
        if (void 0 !== n)
            for (var u, f, c = document.getElementsByTagName("script"), a = 0; a < c.length; a++) {
                var d = c[a];
                if (d.getAttribute("src") == e || d.getAttribute("data-webpack") == o + n) {
                    u = d;
                    break
                }
            }
        u || (f = !0, (u = document.createElement("script")).charset = "utf-8", u.timeout = 120, l.nc && u.setAttribute("nonce", l.nc), u.setAttribute("data-webpack", o + n), u.src = l.tu(e)), r[e] = [t];
        var s = function(t, n) {
                u.onerror = u.onload = null, clearTimeout(b);
                var o = r[e];
                if (delete r[e], u.parentNode && u.parentNode.removeChild(u), o && o.forEach(function(e) {
                        return e(n)
                    }), t) return t(n)
            },
            b = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: u
            }), 12e4);
        u.onerror = s.bind(null, u.onerror), u.onload = s.bind(null, u.onload), f && document.head.appendChild(u)
    }, l.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, l.nmd = function(e) {
        return e.paths = [], e.children || (e.children = []), e
    }, l.tt = function() {
        return void 0 === i && (i = {
            createScriptURL: function(e) {
                return e
            }
        }, "undefined" != typeof trustedTypes && trustedTypes.createPolicy && (i = trustedTypes.createPolicy("nextjs#bundler", i))), i
    }, l.tu = function(e) {
        return l.tt().createScriptURL(e)
    }, l.p = "/_next/", u = {
        2272: 0,
        6529: 0,
        4687: 0
    }, l.f.j = function(e, t) {
        var n = l.o(u, e) ? u[e] : void 0;
        if (0 !== n) {
            if (n) t.push(n[2]);
            else if (/^(2272|4687|6529)$/.test(e)) u[e] = 0;
            else {
                var r = new Promise(function(t, r) {
                    n = u[e] = [t, r]
                });
                t.push(n[2] = r);
                var o = l.p + l.u(e),
                    i = Error();
                l.l(o, function(t) {
                    if (l.o(u, e) && (0 !== (n = u[e]) && (u[e] = void 0), n)) {
                        var r = t && ("load" === t.type ? "missing" : t.type),
                            o = t && t.target && t.target.src;
                        i.message = "Loading chunk " + e + " failed.\n(" + r + ": " + o + ")", i.name = "ChunkLoadError", i.type = r, i.request = o, n[1](i)
                    }
                }, "chunk-" + e, e)
            }
        }
    }, l.O.j = function(e) {
        return 0 === u[e]
    }, f = function(e, t) {
        var n, r, o = t[0],
            i = t[1],
            f = t[2],
            c = 0;
        if (o.some(function(e) {
                return 0 !== u[e]
            })) {
            for (n in i) l.o(i, n) && (l.m[n] = i[n]);
            if (f) var a = f(l)
        }
        for (e && e(t); c < o.length; c++) r = o[c], l.o(u, r) && u[r] && u[r][0](), u[r] = 0;
        return l.O(a)
    }, (c = self.webpackChunk_N_E = self.webpackChunk_N_E || []).forEach(f.bind(null, 0)), c.push = f.bind(null, c.push.bind(c)), l.nc = void 0
}();;
(function() {
    if (!/(?:^|;\s)__vercel_toolbar=1(?:;|$)/.test(document.cookie)) return;
    var s = document.createElement('script');
    s.src = 'https://vercel.live/_next-live/feedback/feedback.js';
    s.setAttribute("data-explicit-opt-in", "true");
    s.setAttribute("data-cookie-opt-in", "true");
    s.setAttribute("data-deployment-id", "dpl_FF57vAUKLFbWwamgwSyzKNSTuCnt");
    ((document.head || document.documentElement).appendChild(s))
})();