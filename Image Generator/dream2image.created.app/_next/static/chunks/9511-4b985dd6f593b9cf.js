try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d65cdd87-5a20-4232-9e3c-88647bf00341", e._sentryDebugIdIdentifier = "sentry-dbid-d65cdd87-5a20-4232-9e3c-88647bf00341")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9511], {
        30979: function(e, t, n) {
            "use strict";
            var r = n(64938),
                o = {
                    childContextTypes: !0,
                    contextType: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromError: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                i = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    callee: !0,
                    arguments: !0,
                    arity: !0
                },
                a = {
                    $$typeof: !0,
                    compare: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0,
                    type: !0
                },
                l = {};

            function s(e) {
                return r.isMemo(e) ? a : l[e.$$typeof] || o
            }
            l[r.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }, l[r.Memo] = a;
            var u = Object.defineProperty,
                c = Object.getOwnPropertyNames,
                f = Object.getOwnPropertySymbols,
                d = Object.getOwnPropertyDescriptor,
                p = Object.getPrototypeOf,
                g = Object.prototype;
            e.exports = function e(t, n, r) {
                if ("string" != typeof n) {
                    if (g) {
                        var o = p(n);
                        o && o !== g && e(t, o, r)
                    }
                    var a = c(n);
                    f && (a = a.concat(f(n)));
                    for (var l = s(t), v = s(n), y = 0; y < a.length; ++y) {
                        var m = a[y];
                        if (!i[m] && !(r && r[m]) && !(v && v[m]) && !(l && l[m])) {
                            var h = d(n, m);
                            try {
                                u(t, m, h)
                            } catch (e) {}
                        }
                    }
                }
                return t
            }
        },
        99058: function(e, t) {
            "use strict";
            var n = "function" == typeof Symbol && Symbol.for,
                r = n ? Symbol.for("react.element") : 60103,
                o = n ? Symbol.for("react.portal") : 60106,
                i = n ? Symbol.for("react.fragment") : 60107,
                a = n ? Symbol.for("react.strict_mode") : 60108,
                l = n ? Symbol.for("react.profiler") : 60114,
                s = n ? Symbol.for("react.provider") : 60109,
                u = n ? Symbol.for("react.context") : 60110,
                c = n ? Symbol.for("react.async_mode") : 60111,
                f = n ? Symbol.for("react.concurrent_mode") : 60111,
                d = n ? Symbol.for("react.forward_ref") : 60112,
                p = n ? Symbol.for("react.suspense") : 60113,
                g = n ? Symbol.for("react.suspense_list") : 60120,
                v = n ? Symbol.for("react.memo") : 60115,
                y = n ? Symbol.for("react.lazy") : 60116,
                m = n ? Symbol.for("react.block") : 60121,
                h = n ? Symbol.for("react.fundamental") : 60117,
                b = n ? Symbol.for("react.responder") : 60118,
                w = n ? Symbol.for("react.scope") : 60119;

            function k(e) {
                if ("object" == typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case r:
                            switch (e = e.type) {
                                case c:
                                case f:
                                case i:
                                case l:
                                case a:
                                case p:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case u:
                                        case d:
                                        case y:
                                        case v:
                                        case s:
                                            return e;
                                        default:
                                            return t
                                    }
                            }
                        case o:
                            return t
                    }
                }
            }

            function E(e) {
                return k(e) === f
            }
            t.AsyncMode = c, t.ConcurrentMode = f, t.ContextConsumer = u, t.ContextProvider = s, t.Element = r, t.ForwardRef = d, t.Fragment = i, t.Lazy = y, t.Memo = v, t.Portal = o, t.Profiler = l, t.StrictMode = a, t.Suspense = p, t.isAsyncMode = function(e) {
                return E(e) || k(e) === c
            }, t.isConcurrentMode = E, t.isContextConsumer = function(e) {
                return k(e) === u
            }, t.isContextProvider = function(e) {
                return k(e) === s
            }, t.isElement = function(e) {
                return "object" == typeof e && null !== e && e.$$typeof === r
            }, t.isForwardRef = function(e) {
                return k(e) === d
            }, t.isFragment = function(e) {
                return k(e) === i
            }, t.isLazy = function(e) {
                return k(e) === y
            }, t.isMemo = function(e) {
                return k(e) === v
            }, t.isPortal = function(e) {
                return k(e) === o
            }, t.isProfiler = function(e) {
                return k(e) === l
            }, t.isStrictMode = function(e) {
                return k(e) === a
            }, t.isSuspense = function(e) {
                return k(e) === p
            }, t.isValidElementType = function(e) {
                return "string" == typeof e || "function" == typeof e || e === i || e === f || e === l || e === a || e === p || e === g || "object" == typeof e && null !== e && (e.$$typeof === y || e.$$typeof === v || e.$$typeof === s || e.$$typeof === u || e.$$typeof === d || e.$$typeof === h || e.$$typeof === b || e.$$typeof === w || e.$$typeof === m)
            }, t.typeOf = k
        },
        64938: function(e, t, n) {
            "use strict";
            e.exports = n(99058)
        },
        24227: function(e, t, n) {
            "use strict";

            function r(e) {
                function t(e, t) {
                    Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), this.message = e, this.code = t
                }
                return t.prototype = Error(), t.prototype.name = e, t.prototype.constructor = t, t
            }
            n.r(t), n.d(t, {
                basicLogger: function() {
                    return tl
                },
                createConsoleLogger: function() {
                    return ts
                },
                default: function() {
                    return tc
                },
                initialize: function() {
                    return ta
                },
                version: function() {
                    return tu
                }
            });
            let o = r("LaunchDarklyUnexpectedResponseError"),
                i = r("LaunchDarklyInvalidEnvironmentIdError"),
                a = r("LaunchDarklyInvalidUserError"),
                l = r("LaunchDarklyInvalidEventKeyError"),
                s = r("LaunchDarklyInvalidArgumentError"),
                u = r("LaunchDarklyFlagFetchError");
            for (var c = {
                    LDUnexpectedResponseError: o,
                    LDInvalidEnvironmentIdError: i,
                    LDInvalidUserError: a,
                    LDInvalidEventKeyError: l,
                    LDInvalidArgumentError: s,
                    LDInvalidDataError: r("LaunchDarklyInvalidDataError"),
                    LDFlagFetchError: u,
                    isHttpErrorRecoverable: function(e) {
                        return !(e >= 400 && e < 500) || 400 === e || 408 === e || 429 === e
                    }
                }, f = [], d = [], p = ("undefined" != typeof Uint8Array && Uint8Array, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), g = 0; g < 64; ++g) f[g] = p[g], d[p.charCodeAt(g)] = g;
            d["-".charCodeAt(0)] = 62, d["_".charCodeAt(0)] = 63;
            var v = function(e) {
                    for (var t, n = e.length, r = n % 3, o = [], i = 0, a = n - r; i < a; i += 16383) o.push(function(e, t, n) {
                        for (var r, o = [], i = t; i < n; i += 3) o.push(f[(r = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (255 & e[i + 2])) >> 18 & 63] + f[r >> 12 & 63] + f[r >> 6 & 63] + f[63 & r]);
                        return o.join("")
                    }(e, i, i + 16383 > a ? a : i + 16383));
                    return 1 === r ? o.push(f[(t = e[n - 1]) >> 2] + f[t << 4 & 63] + "==") : 2 === r && o.push(f[(t = (e[n - 2] << 8) + e[n - 1]) >> 10] + f[t >> 4 & 63] + f[t << 2 & 63] + "="), o.join("")
                },
                y = Array.isArray,
                m = Object.keys,
                h = Object.prototype.hasOwnProperty,
                b = function e(t, n) {
                    if (t === n) return !0;
                    if (t && n && "object" == typeof t && "object" == typeof n) {
                        var r, o, i, a = y(t),
                            l = y(n);
                        if (a && l) {
                            if ((o = t.length) != n.length) return !1;
                            for (r = o; 0 != r--;)
                                if (!e(t[r], n[r])) return !1;
                            return !0
                        }
                        if (a != l) return !1;
                        var s = t instanceof Date,
                            u = n instanceof Date;
                        if (s != u) return !1;
                        if (s && u) return t.getTime() == n.getTime();
                        var c = t instanceof RegExp,
                            f = n instanceof RegExp;
                        if (c != f) return !1;
                        if (c && f) return t.toString() == n.toString();
                        var d = m(t);
                        if ((o = d.length) !== m(n).length) return !1;
                        for (r = o; 0 != r--;)
                            if (!h.call(n, d[r])) return !1;
                        for (r = o; 0 != r--;)
                            if (!e(t[i = d[r]], n[i])) return !1;
                        return !0
                    }
                    return t != t && n != n
                };
            let w = ["key", "ip", "country", "email", "firstName", "lastName", "avatar", "name"];

            function k(e) {
                return v(function(e) {
                    let t = [];
                    for (let n = 0; n < e.length; n++) t.push(e.charCodeAt(n));
                    return t
                }(unescape(encodeURIComponent(e))))
            }

            function E(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            var x, O = {
                    appendUrlPath: function(e, t) {
                        return (e.endsWith("/") ? e.substring(0, e.length - 1) : e) + (t.startsWith("/") ? "" : "/") + t
                    },
                    base64URLEncode: function(e) {
                        return k(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
                    },
                    btoa: k,
                    clone: function(e) {
                        return JSON.parse(JSON.stringify(e))
                    },
                    deepEquals: function(e, t) {
                        return b(e, t)
                    },
                    extend: function(...e) {
                        return e.reduce((e, t) => ({ ...e,
                            ...t
                        }), {})
                    },
                    getLDUserAgentString: function(e) {
                        let t = e.version || "?";
                        return e.userAgent + "/" + t
                    },
                    objectHasOwnProperty: E,
                    onNextTick: function(e) {
                        setTimeout(e, 0)
                    },
                    sanitizeContext: function(e) {
                        let t;
                        return e ? (null !== e.kind && void 0 !== e.kind || w.forEach(n => {
                            let r = e[n];
                            void 0 !== r && "string" != typeof r && ((t = t || { ...e
                            })[n] = String(r))
                        }), t || e) : e
                    },
                    transformValuesToVersionedValues: function(e) {
                        let t = {};
                        for (let n in e) E(e, n) && (t[n] = {
                            value: e[n],
                            version: 0
                        });
                        return t
                    },
                    transformVersionedValuesToValues: function(e) {
                        let t = {};
                        for (let n in e) E(e, n) && (t[n] = e[n].value);
                        return t
                    },
                    wrapPromiseCallback: function(e, t) {
                        let n = e.then(e => (t && setTimeout(() => {
                            t(null, e)
                        }, 0), e), e => {
                            if (!t) return Promise.reject(e);
                            setTimeout(() => {
                                t(e, null)
                            }, 0)
                        });
                        return t ? void 0 : n
                    }
                },
                C = new Uint8Array(16);

            function D() {
                if (!x && !(x = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                return x(C)
            }
            var P = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

            function S(e) {
                return "string" == typeof e && P.test(e)
            }
            for (var j, I, L = [], T = 0; T < 256; ++T) L.push((T + 256).toString(16).substr(1));

            function R(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = (L[e[t + 0]] + L[e[t + 1]] + L[e[t + 2]] + L[e[t + 3]] + "-" + L[e[t + 4]] + L[e[t + 5]] + "-" + L[e[t + 6]] + L[e[t + 7]] + "-" + L[e[t + 8]] + L[e[t + 9]] + "-" + L[e[t + 10]] + L[e[t + 11]] + L[e[t + 12]] + L[e[t + 13]] + L[e[t + 14]] + L[e[t + 15]]).toLowerCase();
                if (!S(n)) throw TypeError("Stringified UUID is invalid");
                return n
            }
            var U = 0,
                F = 0;

            function A(e) {
                if (!S(e)) throw TypeError("Invalid UUID");
                var t, n = new Uint8Array(16);
                return n[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24, n[1] = t >>> 16 & 255, n[2] = t >>> 8 & 255, n[3] = 255 & t, n[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8, n[5] = 255 & t, n[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8, n[7] = 255 & t, n[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8, n[9] = 255 & t, n[10] = (t = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255, n[11] = t / 4294967296 & 255, n[12] = t >>> 24 & 255, n[13] = t >>> 16 & 255, n[14] = t >>> 8 & 255, n[15] = 255 & t, n
            }

            function N(e, t, n) {
                function r(e, r, o, i) {
                    if ("string" == typeof e && (e = function(e) {
                            e = unescape(encodeURIComponent(e));
                            for (var t = [], n = 0; n < e.length; ++n) t.push(e.charCodeAt(n));
                            return t
                        }(e)), "string" == typeof r && (r = A(r)), 16 !== r.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
                    var a = new Uint8Array(16 + e.length);
                    if (a.set(r), a.set(e, r.length), (a = n(a))[6] = 15 & a[6] | t, a[8] = 63 & a[8] | 128, o) {
                        i = i || 0;
                        for (var l = 0; l < 16; ++l) o[i + l] = a[l];
                        return o
                    }
                    return R(a)
                }
                try {
                    r.name = e
                } catch (e) {}
                return r.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", r.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", r
            }

            function $(e) {
                return 14 + (e + 64 >>> 9 << 4) + 1
            }

            function M(e, t) {
                var n = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
            }

            function V(e, t, n, r, o, i) {
                var a;
                return M((a = M(M(t, e), M(r, i))) << o | a >>> 32 - o, n)
            }

            function K(e, t, n, r, o, i, a) {
                return V(t & n | ~t & r, e, t, o, i, a)
            }

            function H(e, t, n, r, o, i, a) {
                return V(t & r | n & ~r, e, t, o, i, a)
            }

            function _(e, t, n, r, o, i, a) {
                return V(t ^ n ^ r, e, t, o, i, a)
            }

            function z(e, t, n, r, o, i, a) {
                return V(n ^ (t | ~r), e, t, o, i, a)
            }

            function q(e, t) {
                return e << t | e >>> 32 - t
            }
            var J = Object.freeze({
                __proto__: null,
                v1: function(e, t, n) {
                    var r = t && n || 0,
                        o = t || Array(16),
                        i = (e = e || {}).node || j,
                        a = void 0 !== e.clockseq ? e.clockseq : I;
                    if (null == i || null == a) {
                        var l = e.random || (e.rng || D)();
                        null == i && (i = j = [1 | l[0], l[1], l[2], l[3], l[4], l[5]]), null == a && (a = I = 16383 & (l[6] << 8 | l[7]))
                    }
                    var s = void 0 !== e.msecs ? e.msecs : Date.now(),
                        u = void 0 !== e.nsecs ? e.nsecs : F + 1,
                        c = s - U + (u - F) / 1e4;
                    if (c < 0 && void 0 === e.clockseq && (a = a + 1 & 16383), (c < 0 || s > U) && void 0 === e.nsecs && (u = 0), u >= 1e4) throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
                    U = s, F = u, I = a;
                    var f = (1e4 * (268435455 & (s += 122192928e5)) + u) % 4294967296;
                    o[r++] = f >>> 24 & 255, o[r++] = f >>> 16 & 255, o[r++] = f >>> 8 & 255, o[r++] = 255 & f;
                    var d = s / 4294967296 * 1e4 & 268435455;
                    o[r++] = d >>> 8 & 255, o[r++] = 255 & d, o[r++] = d >>> 24 & 15 | 16, o[r++] = d >>> 16 & 255, o[r++] = a >>> 8 | 128, o[r++] = 255 & a;
                    for (var p = 0; p < 6; ++p) o[r + p] = i[p];
                    return t || R(o)
                },
                v3: N("v3", 48, function(e) {
                    if ("string" == typeof e) {
                        var t = unescape(encodeURIComponent(e));
                        e = new Uint8Array(t.length);
                        for (var n = 0; n < t.length; ++n) e[n] = t.charCodeAt(n)
                    }
                    return function(e) {
                        for (var t = [], n = 32 * e.length, r = "0123456789abcdef", o = 0; o < n; o += 8) {
                            var i = e[o >> 5] >>> o % 32 & 255,
                                a = parseInt(r.charAt(i >>> 4 & 15) + r.charAt(15 & i), 16);
                            t.push(a)
                        }
                        return t
                    }(function(e, t) {
                        e[t >> 5] |= 128 << t % 32, e[$(t) - 1] = t;
                        for (var n = 1732584193, r = -271733879, o = -1732584194, i = 271733878, a = 0; a < e.length; a += 16) {
                            var l = n,
                                s = r,
                                u = o,
                                c = i;
                            n = K(n, r, o, i, e[a], 7, -680876936), i = K(i, n, r, o, e[a + 1], 12, -389564586), o = K(o, i, n, r, e[a + 2], 17, 606105819), r = K(r, o, i, n, e[a + 3], 22, -1044525330), n = K(n, r, o, i, e[a + 4], 7, -176418897), i = K(i, n, r, o, e[a + 5], 12, 1200080426), o = K(o, i, n, r, e[a + 6], 17, -1473231341), r = K(r, o, i, n, e[a + 7], 22, -45705983), n = K(n, r, o, i, e[a + 8], 7, 1770035416), i = K(i, n, r, o, e[a + 9], 12, -1958414417), o = K(o, i, n, r, e[a + 10], 17, -42063), r = K(r, o, i, n, e[a + 11], 22, -1990404162), n = K(n, r, o, i, e[a + 12], 7, 1804603682), i = K(i, n, r, o, e[a + 13], 12, -40341101), o = K(o, i, n, r, e[a + 14], 17, -1502002290), n = H(n, r = K(r, o, i, n, e[a + 15], 22, 1236535329), o, i, e[a + 1], 5, -165796510), i = H(i, n, r, o, e[a + 6], 9, -1069501632), o = H(o, i, n, r, e[a + 11], 14, 643717713), r = H(r, o, i, n, e[a], 20, -373897302), n = H(n, r, o, i, e[a + 5], 5, -701558691), i = H(i, n, r, o, e[a + 10], 9, 38016083), o = H(o, i, n, r, e[a + 15], 14, -660478335), r = H(r, o, i, n, e[a + 4], 20, -405537848), n = H(n, r, o, i, e[a + 9], 5, 568446438), i = H(i, n, r, o, e[a + 14], 9, -1019803690), o = H(o, i, n, r, e[a + 3], 14, -187363961), r = H(r, o, i, n, e[a + 8], 20, 1163531501), n = H(n, r, o, i, e[a + 13], 5, -1444681467), i = H(i, n, r, o, e[a + 2], 9, -51403784), o = H(o, i, n, r, e[a + 7], 14, 1735328473), n = _(n, r = H(r, o, i, n, e[a + 12], 20, -1926607734), o, i, e[a + 5], 4, -378558), i = _(i, n, r, o, e[a + 8], 11, -2022574463), o = _(o, i, n, r, e[a + 11], 16, 1839030562), r = _(r, o, i, n, e[a + 14], 23, -35309556), n = _(n, r, o, i, e[a + 1], 4, -1530992060), i = _(i, n, r, o, e[a + 4], 11, 1272893353), o = _(o, i, n, r, e[a + 7], 16, -155497632), r = _(r, o, i, n, e[a + 10], 23, -1094730640), n = _(n, r, o, i, e[a + 13], 4, 681279174), i = _(i, n, r, o, e[a], 11, -358537222), o = _(o, i, n, r, e[a + 3], 16, -722521979), r = _(r, o, i, n, e[a + 6], 23, 76029189), n = _(n, r, o, i, e[a + 9], 4, -640364487), i = _(i, n, r, o, e[a + 12], 11, -421815835), o = _(o, i, n, r, e[a + 15], 16, 530742520), n = z(n, r = _(r, o, i, n, e[a + 2], 23, -995338651), o, i, e[a], 6, -198630844), i = z(i, n, r, o, e[a + 7], 10, 1126891415), o = z(o, i, n, r, e[a + 14], 15, -1416354905), r = z(r, o, i, n, e[a + 5], 21, -57434055), n = z(n, r, o, i, e[a + 12], 6, 1700485571), i = z(i, n, r, o, e[a + 3], 10, -1894986606), o = z(o, i, n, r, e[a + 10], 15, -1051523), r = z(r, o, i, n, e[a + 1], 21, -2054922799), n = z(n, r, o, i, e[a + 8], 6, 1873313359), i = z(i, n, r, o, e[a + 15], 10, -30611744), o = z(o, i, n, r, e[a + 6], 15, -1560198380), r = z(r, o, i, n, e[a + 13], 21, 1309151649), n = z(n, r, o, i, e[a + 4], 6, -145523070), i = z(i, n, r, o, e[a + 11], 10, -1120210379), o = z(o, i, n, r, e[a + 2], 15, 718787259), r = z(r, o, i, n, e[a + 9], 21, -343485551), n = M(n, l), r = M(r, s), o = M(o, u), i = M(i, c)
                        }
                        return [n, r, o, i]
                    }(function(e) {
                        if (0 === e.length) return [];
                        for (var t = 8 * e.length, n = new Uint32Array($(t)), r = 0; r < t; r += 8) n[r >> 5] |= (255 & e[r / 8]) << r % 32;
                        return n
                    }(e), 8 * e.length))
                }),
                v4: function(e, t, n) {
                    var r = (e = e || {}).random || (e.rng || D)();
                    if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t) {
                        n = n || 0;
                        for (var o = 0; o < 16; ++o) t[n + o] = r[o];
                        return t
                    }
                    return R(r)
                },
                v5: N("v5", 80, function(e) {
                    var t = [1518500249, 1859775393, 2400959708, 3395469782],
                        n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
                    if ("string" == typeof e) {
                        var r = unescape(encodeURIComponent(e));
                        e = [];
                        for (var o = 0; o < r.length; ++o) e.push(r.charCodeAt(o))
                    } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
                    e.push(128);
                    for (var i = e.length / 4 + 2, a = Math.ceil(i / 16), l = Array(a), s = 0; s < a; ++s) {
                        for (var u = new Uint32Array(16), c = 0; c < 16; ++c) u[c] = e[64 * s + 4 * c] << 24 | e[64 * s + 4 * c + 1] << 16 | e[64 * s + 4 * c + 2] << 8 | e[64 * s + 4 * c + 3];
                        l[s] = u
                    }
                    l[a - 1][14] = 8 * (e.length - 1) / 4294967296, l[a - 1][14] = Math.floor(l[a - 1][14]), l[a - 1][15] = 8 * (e.length - 1) & 4294967295;
                    for (var f = 0; f < a; ++f) {
                        for (var d = new Uint32Array(80), p = 0; p < 16; ++p) d[p] = l[f][p];
                        for (var g = 16; g < 80; ++g) d[g] = q(d[g - 3] ^ d[g - 8] ^ d[g - 14] ^ d[g - 16], 1);
                        for (var v = n[0], y = n[1], m = n[2], h = n[3], b = n[4], w = 0; w < 80; ++w) {
                            var k = Math.floor(w / 20),
                                E = q(v, 5) + function(e, t, n, r) {
                                    switch (e) {
                                        case 0:
                                            return t & n ^ ~t & r;
                                        case 1:
                                        case 3:
                                            return t ^ n ^ r;
                                        case 2:
                                            return t & n ^ t & r ^ n & r
                                    }
                                }(k, y, m, h) + b + t[k] + d[w] >>> 0;
                            b = h, h = m, m = q(y, 30) >>> 0, y = v, v = E
                        }
                        n[0] = n[0] + v >>> 0, n[1] = n[1] + y >>> 0, n[2] = n[2] + m >>> 0, n[3] = n[3] + h >>> 0, n[4] = n[4] + b >>> 0
                    }
                    return [n[0] >> 24 & 255, n[0] >> 16 & 255, n[0] >> 8 & 255, 255 & n[0], n[1] >> 24 & 255, n[1] >> 16 & 255, n[1] >> 8 & 255, 255 & n[1], n[2] >> 24 & 255, n[2] >> 16 & 255, n[2] >> 8 & 255, 255 & n[2], n[3] >> 24 & 255, n[3] >> 16 & 255, n[3] >> 8 & 255, 255 & n[3], n[4] >> 24 & 255, n[4] >> 16 & 255, n[4] >> 8 & 255, 255 & n[4]]
                }),
                NIL: "00000000-0000-0000-0000-000000000000",
                version: function(e) {
                    if (!S(e)) throw TypeError("Invalid UUID");
                    return parseInt(e.substr(14, 1), 16)
                },
                validate: S,
                stringify: R,
                parse: A
            });
            let B = ["debug", "info", "warn", "error", "none"];
            var G = {
                commonBasicLogger: function(e, t) {
                    if (e && e.destination && "function" != typeof e.destination) throw Error("destination for basicLogger was set to a non-function");

                    function n(e) {
                        return function(t) {
                            console && console[e] && console[e].call(console, t)
                        }
                    }
                    let r = e && e.destination ? [e.destination, e.destination, e.destination, e.destination] : [n("log"), n("info"), n("warn"), n("error")],
                        o = !(!e || !e.destination),
                        i = e && void 0 !== e.prefix && null !== e.prefix ? e.prefix : "[LaunchDarkly] ",
                        a = 1;
                    if (e && e.level)
                        for (let t = 0; t < B.length; t++) B[t] === e.level && (a = t);
                    let l = {};
                    for (let e = 0; e < B.length; e++) {
                        let n = B[e];
                        if ("none" !== n) {
                            if (e < a) l[n] = () => {};
                            else {
                                let a = e;
                                l[n] = function() {
                                    ! function(e, n, a) {
                                        let l;
                                        if (a.length < 1) return;
                                        let s = o ? n + ": " + i : i;
                                        if (1 !== a.length && t) {
                                            let e = [...a];
                                            e[0] = s + e[0], l = t(...e)
                                        } else l = s + a[0];
                                        try {
                                            r[e](l)
                                        } catch (e) {
                                            console && console.log && console.log("[LaunchDarkly] Configured logger's " + n + " method threw an exception: " + e)
                                        }
                                    }(a, n, arguments)
                                }
                            }
                        }
                    }
                    return l
                },
                validateLogger: function(e) {
                    B.forEach(t => {
                        if ("none" !== t && (!e[t] || "function" != typeof e[t])) throw Error("Provided logger instance must support logger." + t + "(...) method")
                    })
                }
            };

            function W(e) {
                return e && e.message ? e.message : "string" == typeof e || e instanceof String ? e : JSON.stringify(e)
            }
            let Z = " Please see https://docs.launchdarkly.com/sdk/client-side/javascript#initializing-the-client for instructions on SDK initialization.";
            var X = {
                bootstrapInvalid: function() {
                    return "LaunchDarkly bootstrap data is not available because the back end could not read the flags."
                },
                bootstrapOldFormat: function() {
                    return "LaunchDarkly client was initialized with bootstrap data that did not include flag metadata. Events may not be sent correctly." + Z
                },
                clientInitialized: function() {
                    return "LaunchDarkly client initialized"
                },
                debugEnqueueingEvent: function(e) {
                    return 'enqueueing "' + e + '" event'
                },
                debugPostingDiagnosticEvent: function(e) {
                    return "sending diagnostic event (" + e.kind + ")"
                },
                debugPostingEvents: function(e) {
                    return "sending " + e + " events"
                },
                debugStreamDelete: function(e) {
                    return 'received streaming deletion for flag "' + e + '"'
                },
                debugStreamDeleteIgnored: function(e) {
                    return 'received streaming deletion for flag "' + e + '" but ignored due to version check'
                },
                debugStreamPatch: function(e) {
                    return 'received streaming update for flag "' + e + '"'
                },
                debugStreamPatchIgnored: function(e) {
                    return 'received streaming update for flag "' + e + '" but ignored due to version check'
                },
                debugStreamPing: function() {
                    return "received ping message from stream"
                },
                debugPolling: function(e) {
                    return "polling for feature flags at " + e
                },
                debugStreamPut: function() {
                    return "received streaming update for all flags"
                },
                deprecated: function(e, t) {
                    return t ? '"' + e + '" is deprecated, please use "' + t + '"' : '"' + e + '" is deprecated'
                },
                environmentNotFound: function() {
                    return "Environment not found. Double check that you specified a valid environment/client-side ID." + Z
                },
                environmentNotSpecified: function() {
                    return "No environment/client-side ID was specified." + Z
                },
                errorFetchingFlags: function(e) {
                    return "Error fetching flag settings: " + W(e)
                },
                eventCapacityExceeded: function() {
                    return "Exceeded event queue capacity. Increase capacity to avoid dropping events."
                },
                eventWithoutContext: function() {
                    return "Be sure to call `identify` in the LaunchDarkly client: https://docs.launchdarkly.com/sdk/features/identify#javascript"
                },
                httpErrorMessage: function(e, t, n) {
                    return "Received error " + e + (401 === e ? " (invalid SDK key)" : "") + " for " + t + " - " + (c.isHttpErrorRecoverable(e) ? n : "giving up permanently")
                },
                httpUnavailable: function() {
                    return "Cannot make HTTP requests in this environment." + Z
                },
                identifyDisabled: function() {
                    return "identify() has no effect here; it must be called on the main client instance"
                },
                inspectorMethodError: (e, t) => `an inspector: "${t}" of type: "${e}" generated an exception`,
                invalidContentType: function(e) {
                    return 'Expected application/json content type but got "' + e + '"'
                },
                invalidData: function() {
                    return "Invalid data received from LaunchDarkly; connection may have been interrupted"
                },
                invalidInspector: (e, t) => `an inspector: "${t}" of an invalid type (${e}) was configured`,
                invalidContext: function() {
                    return "Invalid context specified." + Z
                },
                invalidTagValue: e => `Config option "${e}" must only contain letters, numbers, ., _ or -.`,
                localStorageUnavailable: function(e) {
                    return "local storage is unavailable: " + W(e)
                },
                networkError: e => "network error" + (e ? " (" + e + ")" : ""),
                optionBelowMinimum: (e, t, n) => 'Config option "' + e + '" was set to ' + t + ", changing to minimum value of " + n,
                streamClosing: function() {
                    return "Closing stream connection"
                },
                streamConnecting: function(e) {
                    return "Opening stream connection to " + e
                },
                streamError: function(e, t) {
                    return "Error on stream connection: " + W(e) + ", will continue retrying after " + t + " milliseconds."
                },
                tagValueTooLong: e => `Value of "${e}" was longer than 64 characters and was discarded.`,
                unknownCustomEventKey: function(e) {
                    return 'Custom event "' + e + '" does not exist'
                },
                unknownOption: e => 'Ignoring unknown config option "' + e + '"',
                contextNotSpecified: function() {
                    return "No context specified." + Z
                },
                unrecoverableStreamError: e => `Error on stream connection ${W(e)}, giving up permanently`,
                wrongOptionType: (e, t, n) => 'Config option "' + e + '" should be of type ' + t + ", got " + n + ", using default value",
                wrongOptionTypeBoolean: (e, t) => 'Config option "' + e + '" should be a boolean, got ' + t + ", converting to boolean"
            };
            let {
                validateLogger: Y
            } = G, Q = {
                baseUrl: {
                    default: "https://app.launchdarkly.com"
                },
                streamUrl: {
                    default: "https://clientstream.launchdarkly.com"
                },
                eventsUrl: {
                    default: "https://events.launchdarkly.com"
                },
                sendEvents: {
                    default: !0
                },
                streaming: {
                    type: "boolean"
                },
                sendLDHeaders: {
                    default: !0
                },
                requestHeaderTransform: {
                    type: "function"
                },
                sendEventsOnlyForVariation: {
                    default: !1
                },
                useReport: {
                    default: !1
                },
                evaluationReasons: {
                    default: !1
                },
                eventCapacity: {
                    default: 100,
                    minimum: 1
                },
                flushInterval: {
                    default: 2e3,
                    minimum: 2e3
                },
                samplingInterval: {
                    default: 0,
                    minimum: 0
                },
                streamReconnectDelay: {
                    default: 1e3,
                    minimum: 0
                },
                allAttributesPrivate: {
                    default: !1
                },
                privateAttributes: {
                    default: []
                },
                bootstrap: {
                    type: "string|object"
                },
                diagnosticRecordingInterval: {
                    default: 9e5,
                    minimum: 2e3
                },
                diagnosticOptOut: {
                    default: !1
                },
                wrapperName: {
                    type: "string"
                },
                wrapperVersion: {
                    type: "string"
                },
                stateProvider: {
                    type: "object"
                },
                application: {
                    validator: function(e, t, n) {
                        let r = {};
                        return t.id && (r.id = en(`${e}.id`, t.id, n)), t.version && (r.version = en(`${e}.version`, t.version, n)), r
                    }
                },
                inspectors: {
                    default: []
                }
            }, ee = /^(\w|\.|-)+$/;

            function et(e) {
                return e && e.replace(/\/+$/, "")
            }

            function en(e, t, n) {
                if ("string" == typeof t && t.match(ee)) {
                    if (!(t.length > 64)) return t;
                    n.warn(X.tagValueTooLong(e))
                } else n.warn(X.invalidTagValue(e))
            }
            var er = {
                baseOptionDefs: Q,
                validate: function(e, t, n, r) {
                    var o;
                    let i = O.extend({
                            logger: {
                                default: r
                            }
                        }, Q, n),
                        a = {};

                    function l(e) {
                        O.onNextTick(() => {
                            t && t.maybeReportError(new c.LDInvalidArgumentError(e))
                        })
                    }
                    let s = O.extend({}, e || {});
                    return o = s, Object.keys(a).forEach(e => {
                        if (void 0 !== o[e]) {
                            let t = a[e];
                            r && r.warn(X.deprecated(e, t)), t && (void 0 === o[t] && (o[t] = o[e]), delete o[e])
                        }
                    }), Y((s = function(e) {
                        let t = O.extend({}, e),
                            n = e => {
                                if (null === e) return "any";
                                if (void 0 === e) return;
                                if (Array.isArray(e)) return "array";
                                let t = typeof e;
                                return "boolean" === t || "string" === t || "number" === t || "function" === t ? t : "object"
                            };
                        return Object.keys(e).forEach(o => {
                            let a = e[o];
                            if (null != a) {
                                let s = i[o];
                                if (void 0 === s) l(X.unknownOption(o));
                                else {
                                    let i = s.type || n(s.default),
                                        u = s.validator;
                                    if (u) {
                                        let n = u(o, e[o], r);
                                        void 0 !== n ? t[o] = n : delete t[o]
                                    } else if ("any" !== i) {
                                        let e = i.split("|"),
                                            r = n(a);
                                        0 > e.indexOf(r) ? "boolean" === i ? (t[o] = !!a, l(X.wrongOptionTypeBoolean(o, r))) : (l(X.wrongOptionType(o, i, r)), t[o] = s.default) : "number" === r && void 0 !== s.minimum && a < s.minimum && (l(X.optionBelowMinimum(o, a, s.minimum)), t[o] = s.minimum)
                                    }
                                }
                            }
                        }), t.baseUrl = et(t.baseUrl), t.streamUrl = et(t.streamUrl), t.eventsUrl = et(t.eventsUrl), t
                    }(s = function(e) {
                        let t = O.extend({}, e);
                        return Object.keys(i).forEach(e => {
                            void 0 !== t[e] && null !== t[e] || (t[e] = i[e] && i[e].default)
                        }), t
                    }(s))).logger), s
                },
                getTags: function(e) {
                    let t = {};
                    return e && (e.application && void 0 !== e.application.id && null !== e.application.id && (t["application-id"] = [e.application.id]), e.application && void 0 !== e.application.version && null !== e.application.id && (t["application-version"] = [e.application.version])), t
                }
            };
            let {
                getLDUserAgentString: eo
            } = O;
            var ei = {
                getLDHeaders: function(e, t) {
                    if (t && !t.sendLDHeaders) return {};
                    let n = {};
                    n[e.userAgentHeaderName || "User-Agent"] = eo(e), t && t.wrapperName && (n["X-LaunchDarkly-Wrapper"] = t.wrapperVersion ? t.wrapperName + "/" + t.wrapperVersion : t.wrapperName);
                    let r = er.getTags(t),
                        o = Object.keys(r);
                    return o.length && (n["x-launchdarkly-tags"] = o.sort().map(e => Array.isArray(r[e]) ? r[e].sort().map(t => `${e}/${t}`) : [`${e}/${r[e]}`]).reduce((e, t) => e.concat(t), []).join(" ")), n
                },
                transformHeaders: function(e, t) {
                    return t && t.requestHeaderTransform ? t.requestHeaderTransform({ ...e
                    }) : e
                }
            };
            let {
                v1: ea
            } = J, {
                getLDHeaders: el,
                transformHeaders: es
            } = ei;
            var eu = function(e, t, n) {
                let r = O.extend({
                        "Content-Type": "application/json"
                    }, el(e, n)),
                    o = {};
                return o.sendEvents = (t, o, i) => {
                    if (!e.httpRequest) return Promise.resolve();
                    let a = JSON.stringify(t),
                        l = i ? null : ea();
                    return (function t(s) {
                        let u = i ? r : O.extend({}, r, {
                            "X-LaunchDarkly-Event-Schema": "4",
                            "X-LaunchDarkly-Payload-ID": l
                        });
                        return e.httpRequest("POST", o, es(u, n), a).promise.then(e => {
                            if (e) return e.status >= 400 && c.isHttpErrorRecoverable(e.status) && s ? t(!1) : function(e) {
                                let t = {
                                        status: e.status
                                    },
                                    n = e.header("date");
                                if (n) {
                                    let e = Date.parse(n);
                                    e && (t.serverTime = e)
                                }
                                return t
                            }(e)
                        }).catch(() => s ? t(!1) : Promise.reject())
                    })(!0).catch(() => {})
                }, o
            };
            let {
                commonBasicLogger: ec
            } = G;

            function ef(e) {
                return "string" == typeof e && "kind" !== e && e.match(/^(\w|\.|-)+$/)
            }

            function ed(e) {
                return e.includes("%") || e.includes(":") ? e.replace(/%/g, "%25").replace(/:/g, "%3A") : e
            }
            var ep = {
                checkContext: function(e, t) {
                    if (e) {
                        if (t && (void 0 === e.kind || null === e.kind)) return void 0 !== e.key && null !== e.key;
                        let n = e.key,
                            r = void 0 === e.kind ? "user" : e.kind,
                            o = ef(r),
                            i = "multi" === r || null != n && "" !== n;
                        if ("multi" === r) {
                            let t = Object.keys(e).filter(e => "kind" !== e);
                            return i && t.every(e => ef(e)) && t.every(t => {
                                let n = e[t].key;
                                return null != n && "" !== n
                            })
                        }
                        return i && o
                    }
                    return !1
                },
                getContextKeys: function(e, t = ec()) {
                    if (!e) return;
                    let n = {},
                        {
                            kind: r,
                            key: o
                        } = e;
                    switch (r) {
                        case void 0:
                            n.user = `${o}`;
                            break;
                        case "multi":
                            Object.entries(e).filter(([e]) => "kind" !== e).forEach(([e, t]) => {
                                t && t.key && (n[e] = t.key)
                            });
                            break;
                        case null:
                            t.warn(`null is not a valid context kind: ${e}`);
                            break;
                        case "":
                            t.warn(`'' is not a valid context kind: ${e}`);
                            break;
                        default:
                            n[r] = `${o}`
                    }
                    return n
                },
                getContextKinds: function(e) {
                    return e ? null === e.kind || void 0 === e.kind ? ["user"] : "multi" !== e.kind ? [e.kind] : Object.keys(e).filter(e => "kind" !== e) : []
                },
                getCanonicalKey: function(e) {
                    if (e) {
                        if ((void 0 === e.kind || null === e.kind || "user" === e.kind) && e.key) return e.key;
                        if ("multi" !== e.kind && e.key) return `${e.kind}:${ed(e.key)}`;
                        if ("multi" === e.kind) return Object.keys(e).sort().filter(e => "kind" !== e).map(t => `${t}:${ed(e[t].key)}`).join(":")
                    }
                }
            };
            let {
                getContextKinds: eg
            } = ep;
            var ev = function() {
                let e = {},
                    t = 0,
                    n = 0,
                    r = {},
                    o = {};
                return e.summarizeEvent = e => {
                    if ("feature" === e.kind) {
                        let i = e.key + ":" + (null !== e.variation && void 0 !== e.variation ? e.variation : "") + ":" + (null !== e.version && void 0 !== e.version ? e.version : ""),
                            a = r[i],
                            l = o[e.key];
                        l || (l = new Set, o[e.key] = l), (e.context ? eg(e.context) : e.contextKeys ? Object.keys(e.contextKeys) : []).forEach(e => l.add(e)), a ? a.count = a.count + 1 : r[i] = {
                            count: 1,
                            key: e.key,
                            version: e.version,
                            variation: e.variation,
                            value: e.value,
                            default: e.default
                        }, (0 === t || e.creationDate < t) && (t = e.creationDate), e.creationDate > n && (n = e.creationDate)
                    }
                }, e.getSummary = () => {
                    let e = {},
                        i = !0;
                    for (let t of Object.values(r)) {
                        let n = e[t.key];
                        n || (n = {
                            default: t.default,
                            counters: [],
                            contextKinds: [...o[t.key]]
                        }, e[t.key] = n);
                        let r = {
                            value: t.value,
                            count: t.count
                        };
                        void 0 !== t.variation && null !== t.variation && (r.variation = t.variation), void 0 !== t.version && null !== t.version ? r.version = t.version : r.unknown = !0, n.counters.push(r), i = !1
                    }
                    return i ? null : {
                        startDate: t,
                        endDate: n,
                        features: e
                    }
                }, e.clearSummary = () => {
                    t = 0, n = 0, r = {}, o = {}
                }, e
            };

            function ey(e) {
                return e.replace(/~/g, "~0").replace(/\//g, "~1")
            }

            function em(e) {
                return (e.startsWith("/") ? e.substring(1) : e).split("/").map(e => e.indexOf("~") >= 0 ? e.replace(/~1/g, "/").replace(/~0/g, "~") : e)
            }

            function eh(e) {
                return !e.startsWith("/")
            }

            function eb(e, t) {
                let n = eh(e),
                    r = eh(t);
                if (n && r) return e === t;
                if (n) {
                    let n = em(t);
                    return 1 === n.length && e === n[0]
                }
                if (r) {
                    let n = em(e);
                    return 1 === n.length && t === n[0]
                }
                return e === t
            }

            function ew(e) {
                return `/${ey(e)}`
            }
            var ek = {
                    cloneExcluding: function(e, t) {
                        let n = [],
                            r = {},
                            o = [];
                        for (n.push(...Object.keys(e).map(t => ({
                                key: t,
                                ptr: ew(t),
                                source: e,
                                parent: r,
                                visited: [e]
                            }))); n.length;) {
                            let e = n.pop();
                            if (t.some(t => eb(t, e.ptr))) o.push(e.ptr);
                            else {
                                let t = e.source[e.key];
                                if (null === t) e.parent[e.key] = t;
                                else if (Array.isArray(t)) e.parent[e.key] = [...t];
                                else if ("object" == typeof t) {
                                    if (e.visited.includes(t)) continue;
                                    e.parent[e.key] = {}, n.push(...Object.keys(t).map(n => {
                                        var r, o;
                                        return {
                                            key: n,
                                            ptr: (r = e.ptr, o = ey(n), `${r}/${o}`),
                                            source: t,
                                            parent: e.parent[e.key],
                                            visited: [...e.visited, t]
                                        }
                                    }))
                                } else e.parent[e.key] = t
                            }
                        }
                        return {
                            cloned: r,
                            excluded: o.sort()
                        }
                    },
                    compare: eb,
                    literalToReference: ew
                },
                eE = function(e) {
                    let t = {},
                        n = e.allAttributesPrivate,
                        r = e.privateAttributes || [],
                        o = ["key", "kind", "_meta", "anonymous"],
                        i = ["name", "ip", "firstName", "lastName", "email", "avatar", "country"],
                        a = (e, t) => {
                            if ("object" != typeof e || null === e || Array.isArray(e)) return;
                            let {
                                cloned: i,
                                excluded: a
                            } = ek.cloneExcluding(e, (n || t && e.anonymous ? Object.keys(e) : [...r, ...e._meta && e._meta.privateAttributes || []]).filter(e => !o.some(t => ek.compare(e, t))));
                            return i.key = String(i.key), a.length && (i._meta || (i._meta = {}), i._meta.redactedAttributes = a), i._meta && (delete i._meta.privateAttributes, 0 === Object.keys(i._meta).length && delete i._meta), void 0 !== i.anonymous && (i.anonymous = !!i.anonymous), i
                        };
                    return t.filter = (e, t = !1) => void 0 === e.kind || null === e.kind ? a((e => {
                        let t = { ...e.custom || {},
                            kind: "user",
                            key: e.key
                        };
                        for (let n of (void 0 !== e.anonymous && (t.anonymous = !!e.anonymous), i)) delete t[n], void 0 !== e[n] && null !== e[n] && (t[n] = String(e[n]));
                        return void 0 !== e.privateAttributeNames && null !== e.privateAttributeNames && (t._meta = t._meta || {}, t._meta.privateAttributes = e.privateAttributeNames.map(e => e.startsWith("/") ? ek.literalToReference(e) : e)), t
                    })(e), t) : "multi" === e.kind ? ((e, t) => {
                        let n = {
                            kind: e.kind
                        };
                        for (let r of Object.keys(e))
                            if ("kind" !== r) {
                                let o = a(e[r], t);
                                o && (n[r] = o)
                            }
                        return n
                    })(e, t) : a(e, t), t
                };
            let {
                getContextKeys: ex
            } = ep;
            var eO = function(e, t, n, r = null, o = null, i = null) {
                    let a = {},
                        l = i || eu(e, n, t),
                        s = O.appendUrlPath(t.eventsUrl, "/events/bulk/" + n),
                        u = ev(),
                        f = eE(t),
                        d = t.samplingInterval,
                        p = t.eventCapacity,
                        g = t.flushInterval,
                        v = t.logger,
                        y, m = [],
                        h = 0,
                        b = !1,
                        w = !1;

                    function k() {
                        return 0 === d || 0 === Math.floor(Math.random() * d)
                    }

                    function E(e) {
                        m.length < p ? (m.push(e), w = !1) : (w || (w = !0, v.warn(X.eventCapacityExceeded())), r && r.incrementDroppedEvents())
                    }
                    return a.enqueue = function(e) {
                        if (b) return;
                        let t = !1,
                            n = !1;
                        if (u.summarizeEvent(e), "feature" === e.kind ? k() && (t = !!e.trackEvents, n = !!e.debugEventsUntilDate && e.debugEventsUntilDate > h && e.debugEventsUntilDate > (new Date).getTime()) : t = k(), t && E(function(e) {
                                let t = O.extend({}, e);
                                return "identify" === e.kind ? t.context = f.filter(e.context) : "feature" === e.kind ? t.context = f.filter(e.context, !0) : (t.contextKeys = ex(e.context, v), delete t.context), "feature" === e.kind && (delete t.trackEvents, delete t.debugEventsUntilDate), t
                            }(e)), n) {
                            let t = O.extend({}, e, {
                                kind: "debug"
                            });
                            t.context = f.filter(t.context), delete t.trackEvents, delete t.debugEventsUntilDate, E(t)
                        }
                    }, a.flush = function() {
                        if (b) return Promise.resolve();
                        let e = m,
                            t = u.getSummary();
                        return u.clearSummary(), t && (t.kind = "summary", e.push(t)), r && r.setEventsInLastBatch(e.length), 0 === e.length ? Promise.resolve() : (m = [], v.debug(X.debugPostingEvents(e.length)), l.sendEvents(e, s).then(e => {
                            e && (e.serverTime && (h = e.serverTime), c.isHttpErrorRecoverable(e.status) || (b = !0), e.status >= 400 && O.onNextTick(() => {
                                o.maybeReportError(new c.LDUnexpectedResponseError(X.httpErrorMessage(e.status, "event posting", "some events were dropped")))
                            }))
                        }))
                    }, a.start = function() {
                        let e = () => {
                            a.flush(), y = setTimeout(e, g)
                        };
                        y = setTimeout(e, g)
                    }, a.stop = function() {
                        clearTimeout(y)
                    }, a
                },
                eC = function(e) {
                    let t = {},
                        n = {};
                    return t.on = function(e, t, r) {
                        n[e] = n[e] || [], n[e] = n[e].concat({
                            handler: t,
                            context: r
                        })
                    }, t.off = function(e, t, r) {
                        if (n[e])
                            for (let o = 0; o < n[e].length; o++) n[e][o].handler === t && n[e][o].context === r && (n[e] = n[e].slice(0, o).concat(n[e].slice(o + 1)))
                    }, t.emit = function(e) {
                        if (!n[e]) return;
                        let t = n[e].slice(0);
                        for (let e = 0; e < t.length; e++) t[e].handler.apply(t[e].context, Array.prototype.slice.call(arguments, 1))
                    }, t.getEvents = function() {
                        return Object.keys(n)
                    }, t.getEventListenerCount = function(e) {
                        return n[e] ? n[e].length : 0
                    }, t.maybeReportError = function(t) {
                        t && (n.error ? this.emit("error", t) : (e || console).error(t.message))
                    }, t
                };
            let eD = "ready",
                eP = "initialized",
                eS = "failed";
            var ej = function(e) {
                    let t = !1,
                        n = !1,
                        r = null,
                        o = null,
                        i = new Promise(t => {
                            let n = () => {
                                e.off(eD, n), t()
                            };
                            e.on(eD, n)
                        }).catch(() => {});
                    return {
                        getInitializationPromise: () => o || (t ? Promise.resolve() : n ? Promise.reject(r) : o = new Promise((t, n) => {
                            let r = () => {
                                    e.off(eP, r), t()
                                },
                                o = t => {
                                    e.off(eS, o), n(t)
                                };
                            e.on(eP, r), e.on(eS, o)
                        })),
                        getReadyPromise: () => i,
                        signalSuccess: () => {
                            t || n || (t = !0, e.emit(eP), e.emit(eD))
                        },
                        signalFailure: o => {
                            t || n || (n = !0, r = o, e.emit(eS, o), e.emit(eD)), e.maybeReportError(o)
                        }
                    }
                },
                eI = function(e, t, n, r) {
                    let o = {};

                    function i() {
                        let e = "",
                            o = r.getContext();
                        return o && (e = n || O.btoa(JSON.stringify(o))), "ld:" + t + ":" + e
                    }
                    return o.loadFlags = () => e.get(i()).then(e => {
                        if (null == e) return null;
                        try {
                            let t = JSON.parse(e);
                            if (t) {
                                let e = t.$schema;
                                void 0 === e || e < 1 ? t = O.transformValuesToVersionedValues(t) : delete t.$schema
                            }
                            return t
                        } catch (e) {
                            return o.clearFlags().then(() => null)
                        }
                    }), o.saveFlags = t => {
                        let n = O.extend({}, t, {
                            $schema: 1
                        });
                        return e.set(i(), JSON.stringify(n))
                    }, o.clearFlags = () => e.clear(i()), o
                },
                eL = function(e, t) {
                    let n = {},
                        r = !1,
                        o = e => {
                            r || (r = !0, t.warn(X.localStorageUnavailable(e)))
                        };
                    return n.isEnabled = () => !!e, n.get = t => new Promise(n => {
                        e ? e.get(t).then(n).catch(e => {
                            o(e), n(void 0)
                        }) : n(void 0)
                    }), n.set = (t, n) => new Promise(r => {
                        e ? e.set(t, n).then(() => r(!0)).catch(e => {
                            o(e), r(!1)
                        }) : r(!1)
                    }), n.clear = t => new Promise(n => {
                        e ? e.clear(t).then(() => n(!0)).catch(e => {
                            o(e), n(!1)
                        }) : n(!1)
                    }), n
                };
            let {
                appendUrlPath: eT,
                base64URLEncode: eR,
                objectHasOwnProperty: eU
            } = O, {
                getLDHeaders: eF,
                transformHeaders: eA
            } = ei, {
                isHttpErrorRecoverable: eN
            } = c;
            var e$ = function(e, t, n, r) {
                    let o = t.streamUrl,
                        i = t.logger,
                        a = {},
                        l = eT(o, "/eval/" + n),
                        s = t.useReport,
                        u = t.evaluationReasons,
                        c = t.streamReconnectDelay,
                        f = eF(e, t),
                        d, p = !1,
                        g = null,
                        v = null,
                        y = null,
                        m = null,
                        h = null,
                        b = 0;

                    function w(e) {
                        if (e.status && "number" == typeof e.status && !eN(e.status)) return x(), i.error(X.unrecoverableStreamError(e)), void(v && (clearTimeout(v), v = null));
                        let t = function() {
                            var e;
                            let t = (e = function() {
                                let e = c * Math.pow(2, b);
                                return e > 3e4 ? 3e4 : e
                            }()) - Math.trunc(.5 * Math.random() * e);
                            return b += 1, t
                        }();
                        p || (i.warn(X.streamError(e, t)), p = !0), O(!1), x(), k(t)
                    }

                    function k(e) {
                        v || (e ? v = setTimeout(E, e) : E())
                    }

                    function E() {
                        let r;
                        v = null;
                        let a = "",
                            c = {
                                headers: f,
                                readTimeoutMillis: 3e5
                            };
                        if (e.eventSourceFactory) {
                            for (let f in null != m && (a = "h=" + m), s ? e.eventSourceAllowsReport ? (r = l, c.method = "REPORT", c.headers["Content-Type"] = "application/json", c.body = JSON.stringify(y)) : (r = eT(o, "/ping/" + n), a = "") : r = l + "/" + eR(JSON.stringify(y)), c.headers = eA(c.headers, t), u && (a = a + (a ? "&" : "") + "withReasons=true"), r = r + (a ? "?" : "") + a, x(), i.info(X.streamConnecting(r)), d = (new Date).getTime(), g = e.eventSourceFactory(r, c), h) eU(h, f) && g.addEventListener(f, h[f]);
                            g.onerror = w, g.onopen = () => {
                                b = 0
                            }
                        }
                    }

                    function x() {
                        g && (i.info(X.streamClosing()), g.close(), g = null)
                    }

                    function O(e) {
                        d && r && r.recordStreamInit(d, !e, (new Date).getTime() - d), d = null
                    }
                    return a.connect = function(e, t, n) {
                        for (let r in y = e, m = t, h = {}, n || {}) h[r] = function(e) {
                            p = !1, O(!0), n[r] && n[r](e)
                        };
                        k()
                    }, a.disconnect = function() {
                        clearTimeout(v), v = null, x()
                    }, a.isConnected = function() {
                        return !!(g && e.eventSourceIsActive && e.eventSourceIsActive(g))
                    }, a
                },
                eM = function(e) {
                    let t, n, r, o;
                    let i = {
                        addPromise: (i, a) => {
                            t = i, n && n(), n = a, i.then(n => {
                                t === i && (r(n), e && e())
                            }, n => {
                                t === i && (o(n), e && e())
                            })
                        }
                    };
                    return i.resultPromise = new Promise((e, t) => {
                        r = e, o = t
                    }), i
                };
            let {
                transformHeaders: eV,
                getLDHeaders: eK
            } = ei, eH = "application/json";
            var e_ = function(e, t, n) {
                    let r = t.baseUrl,
                        o = t.useReport,
                        i = t.evaluationReasons,
                        a = t.logger,
                        l = {},
                        s = {};

                    function u(n, r) {
                        if (!e.httpRequest) return new Promise((e, t) => {
                            t(new c.LDFlagFetchError(X.httpUnavailable()))
                        });
                        let o = eK(e, t);
                        r && (o["Content-Type"] = eH);
                        let i = s[n];
                        i || (i = eM(() => {
                            delete s[n]
                        }), s[n] = i);
                        let a = e.httpRequest(r ? "REPORT" : "GET", n, eV(o, t), r),
                            l = a.promise.then(e => {
                                if (200 === e.status) {
                                    if (e.header("content-type") && e.header("content-type").substring(0, 16) === eH) return JSON.parse(e.body); {
                                        let t = X.invalidContentType(e.header("content-type") || "");
                                        return Promise.reject(new c.LDFlagFetchError(t))
                                    }
                                }
                                return Promise.reject(404 === e.status ? new c.LDInvalidEnvironmentIdError(X.environmentNotFound()) : new c.LDFlagFetchError(X.errorFetchingFlags(e.statusText || String(e.status))))
                            }, e => Promise.reject(new c.LDFlagFetchError(X.networkError(e))));
                        return i.addPromise(l, () => {
                            a.cancel && a.cancel()
                        }), i.resultPromise
                    }
                    return l.fetchJSON = function(e) {
                        return u(O.appendUrlPath(r, e), null)
                    }, l.fetchFlagSettings = function(e, t) {
                        let l, s, c = "";
                        return o ? (l = [r, "/sdk/evalx/", n, "/context"].join(""), s = JSON.stringify(e)) : l = [r, "/sdk/evalx/", n, "/contexts/", O.base64URLEncode(JSON.stringify(e))].join(""), t && (c = "h=" + t), i && (c = c + (c ? "&" : "") + "withReasons=true"), l = l + (c ? "?" : "") + c, a.debug(X.debugPolling(l)), u(l, s)
                    }, l
                },
                ez = function(e, t) {
                    let n;
                    let r = {};
                    return r.setContext = function(e) {
                        (n = O.sanitizeContext(e)) && t && t(O.clone(n))
                    }, r.getContext = function() {
                        return n ? O.clone(n) : null
                    }, e && r.setContext(e), r
                };
            let {
                v1: eq
            } = J, {
                getContextKinds: eJ
            } = ep;
            var eB = function(e) {
                function t(e) {
                    return null == e || "user" === e ? "ld:$anonUserId" : `ld:$contextKey:${e}`
                }

                function n(n, r) {
                    return null !== r.key && void 0 !== r.key ? (r.key = r.key.toString(), Promise.resolve(r)) : r.anonymous ? e.get(t(n)).then(o => {
                        if (o) return r.key = o, r; {
                            let o = eq();
                            return r.key = o, e.set(t(n), o).then(() => r)
                        }
                    }) : Promise.reject(new c.LDInvalidUserError(X.invalidContext()))
                }
                this.processContext = e => {
                    if (!e) return Promise.reject(new c.LDInvalidUserError(X.contextNotSpecified()));
                    let t = O.clone(e);
                    return "multi" === e.kind ? Promise.all(eJ(t).map(e => n(e, t[e]))).then(() => t) : n(e.kind, t)
                }
            };
            let {
                v1: eG
            } = J, {
                baseOptionDefs: eW
            } = er, {
                appendUrlPath: eZ
            } = O;
            var eX = {
                    DiagnosticId: function(e) {
                        let t = {
                            diagnosticId: eG()
                        };
                        return e && (t.sdkKeySuffix = e.length > 6 ? e.substring(e.length - 6) : e), t
                    },
                    DiagnosticsAccumulator: function(e) {
                        let t, n, r, o;

                        function i(e) {
                            t = e, n = 0, r = 0, o = []
                        }
                        return i(e), {
                            getProps: () => ({
                                dataSinceDate: t,
                                droppedEvents: n,
                                eventsInLastBatch: r,
                                streamInits: o
                            }),
                            setProps: e => {
                                t = e.dataSinceDate, n = e.droppedEvents || 0, r = e.eventsInLastBatch || 0, o = e.streamInits || []
                            },
                            incrementDroppedEvents: () => {
                                n++
                            },
                            setEventsInLastBatch: e => {
                                r = e
                            },
                            recordStreamInit: (e, t, n) => {
                                o.push({
                                    timestamp: e,
                                    failed: t,
                                    durationMillis: n
                                })
                            },
                            reset: i
                        }
                    },
                    DiagnosticsManager: function(e, t, n, r, o, i, a) {
                        let l = !!e.diagnosticUseCombinedEvent,
                            s = "ld:" + o + ":$diagnostics",
                            u = eZ(i.eventsUrl, "/events/diagnostic/" + o),
                            c = i.diagnosticRecordingInterval,
                            f, d, p = !!i.streaming,
                            g = {};

                        function v() {
                            return {
                                sdk: function() {
                                    let t = { ...e.diagnosticSdkData
                                    };
                                    return i.wrapperName && (t.wrapperName = i.wrapperName), i.wrapperVersion && (t.wrapperVersion = i.wrapperVersion), t
                                }(),
                                configuration: {
                                    customBaseURI: i.baseUrl !== eW.baseUrl.default,
                                    customStreamURI: i.streamUrl !== eW.streamUrl.default,
                                    customEventsURI: i.eventsUrl !== eW.eventsUrl.default,
                                    eventsCapacity: i.eventCapacity,
                                    eventsFlushIntervalMillis: i.flushInterval,
                                    reconnectTimeMillis: i.streamReconnectDelay,
                                    streamingDisabled: !p,
                                    allAttributesPrivate: !!i.allAttributesPrivate,
                                    diagnosticRecordingIntervalMillis: i.diagnosticRecordingInterval,
                                    usingSecureMode: !!i.hash,
                                    bootstrapMode: !!i.bootstrap,
                                    fetchGoalsDisabled: !i.fetchGoals,
                                    sendEventsOnlyForVariation: !!i.sendEventsOnlyForVariation
                                },
                                platform: e.diagnosticPlatformData
                            }
                        }

                        function y(e) {
                            i.logger && i.logger.debug(X.debugPostingDiagnosticEvent(e)), r.sendEvents(e, u, !0).then(() => {}).catch(() => {})
                        }

                        function m() {
                            y(function() {
                                let e = (new Date).getTime(),
                                    t = {
                                        kind: l ? "diagnostic-combined" : "diagnostic",
                                        id: a,
                                        creationDate: e,
                                        ...n.getProps()
                                    };
                                return l && (t = { ...t,
                                    ...v()
                                }), n.reset(e), t
                            }()), d = setTimeout(m, c), f = (new Date).getTime(), l && function() {
                                if (t.isEnabled()) {
                                    let e = { ...n.getProps()
                                    };
                                    t.set(s, JSON.stringify(e))
                                }
                            }()
                        }
                        return g.start = () => {
                            l ? function(e) {
                                if (!t.isEnabled()) return e(!1);
                                t.get(s).then(t => {
                                    if (t) try {
                                        let e = JSON.parse(t);
                                        n.setProps(e), f = e.dataSinceDate
                                    } catch (e) {}
                                    e(!0)
                                }).catch(() => {
                                    e(!1)
                                })
                            }(e => {
                                if (e) {
                                    let e = (f || 0) + c,
                                        t = (new Date).getTime();
                                    t >= e ? m() : d = setTimeout(m, e - t)
                                } else 0 === Math.floor(4 * Math.random()) ? m() : d = setTimeout(m, c)
                            }) : (y({
                                kind: "diagnostic-init",
                                id: a,
                                creationDate: n.getProps().dataSinceDate,
                                ...v()
                            }), d = setTimeout(m, c))
                        }, g.stop = () => {
                            d && clearTimeout(d)
                        }, g.setStreaming = e => {
                            p = e
                        }, g
                    }
                },
                eY = function(e, t) {
                    let n = !1,
                        r = {
                            type: e.type,
                            name: e.name,
                            method: (...o) => {
                                try {
                                    e.method(...o)
                                } catch {
                                    n || (n = !0, t.warn(X.inspectorMethodError(r.type, r.name)))
                                }
                            }
                        };
                    return r
                };
            let {
                onNextTick: eQ
            } = O, e0 = {
                flagUsed: "flag-used",
                flagDetailsChanged: "flag-details-changed",
                flagDetailChanged: "flag-detail-changed",
                clientIdentityChanged: "client-identity-changed"
            };
            Object.freeze(e0);
            let {
                commonBasicLogger: e1
            } = G, {
                checkContext: e2,
                getContextKeys: e5
            } = ep, {
                InspectorTypes: e6,
                InspectorManager: e3
            } = {
                InspectorTypes: e0,
                InspectorManager: function(e, t) {
                    let n = {},
                        r = {
                            [e0.flagUsed]: [],
                            [e0.flagDetailsChanged]: [],
                            [e0.flagDetailChanged]: [],
                            [e0.clientIdentityChanged]: []
                        },
                        o = e && e.map(e => eY(e, t));
                    return o && o.forEach(e => {
                        Object.prototype.hasOwnProperty.call(r, e.type) ? r[e.type].push(e) : t.warn(X.invalidInspector(e.type, e.name))
                    }), n.hasListeners = e => r[e] && r[e].length, n.onFlagUsed = (e, t, n) => {
                        r[e0.flagUsed].length && eQ(() => {
                            r[e0.flagUsed].forEach(r => r.method(e, t, n))
                        })
                    }, n.onFlags = e => {
                        r[e0.flagDetailsChanged].length && eQ(() => {
                            r[e0.flagDetailsChanged].forEach(t => t.method(e))
                        })
                    }, n.onFlagChanged = (e, t) => {
                        r[e0.flagDetailChanged].length && eQ(() => {
                            r[e0.flagDetailChanged].forEach(n => n.method(e, t))
                        })
                    }, n.onIdentityChanged = e => {
                        r[e0.clientIdentityChanged].length && eQ(() => {
                            r[e0.clientIdentityChanged].forEach(t => t.method(e))
                        })
                    }, n
                }
            }, e4 = "change", e8 = "internal-change";
            var e9 = function(e, t, n, r, o) {
                let i = n && n.logger ? n.logger : o && o.logger && o.logger.default || e1("warn"),
                    a = eC(i),
                    l = ej(a),
                    s = er.validate(n, a, o, i),
                    u = e3(s.inspectors, i),
                    f = s.sendEvents,
                    d = e,
                    p = s.hash,
                    g = eL(r.localStorage, i),
                    v = eu(r, d, s),
                    y = s.sendEvents && !s.diagnosticOptOut,
                    m = y ? eX.DiagnosticId(d) : null,
                    h = y ? eX.DiagnosticsAccumulator((new Date).getTime()) : null,
                    b = y ? eX.DiagnosticsManager(r, g, h, v, d, s, m) : null,
                    w = e$(r, s, d, h),
                    k = s.eventProcessor || eO(r, s, d, h, a, v),
                    E = e_(r, s, d),
                    x, C, D, P = {},
                    S = s.streaming,
                    j = !1,
                    I = !1,
                    L = !0,
                    T = s.stateProvider,
                    R = ez(null, function(e) {
                        !T && e && A({
                            kind: "identify",
                            context: e,
                            creationDate: (new Date).getTime()
                        }), u.hasListeners(e6.clientIdentityChanged) && u.onIdentityChanged(R.getContext())
                    }),
                    U = new eB(g),
                    F = g.isEnabled() ? eI(g, d, p, R) : null;

                function A(e) {
                    d && (T && T.enqueueEvent && T.enqueueEvent(e) || (e.context ? (L = !1, !f || I || r.isDoNotTrack() || (i.debug(X.debugEnqueueingEvent(e.kind)), k.enqueue(e))) : L && (i.warn(X.eventWithoutContext()), L = !1)))
                }

                function N(e, t) {
                    u.hasListeners(e6.flagDetailChanged) && u.onFlagChanged(e.key, H(t))
                }

                function $() {
                    u.hasListeners(e6.flagDetailsChanged) && u.onFlags(Object.entries(P).map(([e, t]) => ({
                        key: e,
                        detail: H(t)
                    })).reduce((e, t) => (e[t.key] = t.detail, e), {}))
                }

                function M(e, t, n, r) {
                    let o = R.getContext(),
                        i = new Date,
                        a = {
                            kind: "feature",
                            key: e,
                            context: o,
                            value: t ? t.value : null,
                            variation: t ? t.variationIndex : null,
                            default: n,
                            creationDate: i.getTime()
                        },
                        l = P[e];
                    l && (a.version = l.flagVersion ? l.flagVersion : l.version, a.trackEvents = l.trackEvents, a.debugEventsUntilDate = l.debugEventsUntilDate), (r || l && l.trackReason) && t && (a.reason = t.reason), A(a)
                }

                function V(e) {
                    return e2(e, !1) ? Promise.resolve(e) : Promise.reject(new c.LDInvalidUserError(X.invalidContext()))
                }

                function K(e, t, n, r, o) {
                    var i;
                    let a;
                    if (P && O.objectHasOwnProperty(P, e) && P[e] && !P[e].deleted) {
                        let n = P[e];
                        a = H(n), null !== n.value && void 0 !== n.value || (a.value = t)
                    } else a = {
                        value: t,
                        variationIndex: null,
                        reason: {
                            kind: "ERROR",
                            errorKind: "FLAG_NOT_FOUND"
                        }
                    };
                    return n && M(e, a, t, r), o || (i = a, u.hasListeners(e6.flagUsed) && u.onFlagUsed(e, i, R.getContext())), a
                }

                function H(e) {
                    return {
                        value: e.value,
                        variationIndex: void 0 === e.variation ? null : e.variation,
                        reason: e.reason || null
                    }
                }

                function _() {
                    if (C = !0, !R.getContext()) return;
                    let e = e => {
                        try {
                            return JSON.parse(e)
                        } catch (e) {
                            return void a.maybeReportError(new c.LDInvalidDataError(X.invalidData()))
                        }
                    };
                    w.connect(R.getContext(), p, {
                        ping: function() {
                            i.debug(X.debugStreamPing());
                            let e = R.getContext();
                            E.fetchFlagSettings(e, p).then(t => {
                                O.deepEquals(e, R.getContext()) && q(t || {})
                            }).catch(e => {
                                a.maybeReportError(new c.LDFlagFetchError(X.errorFetchingFlags(e)))
                            })
                        },
                        put: function(t) {
                            let n = e(t.data);
                            n && (i.debug(X.debugStreamPut()), q(n))
                        },
                        patch: function(t) {
                            let n = e(t.data);
                            if (!n) return;
                            let r = P[n.key];
                            if (r && r.version && n.version && !(r.version < n.version)) i.debug(X.debugStreamPatchIgnored(n.key));
                            else {
                                i.debug(X.debugStreamPatch(n.key));
                                let e = {},
                                    t = O.extend({}, n);
                                delete t.key, P[n.key] = t;
                                let o = H(t);
                                e[n.key] = r ? {
                                    previous: r.value,
                                    current: o
                                } : {
                                    current: o
                                }, J(e), N(n, t)
                            }
                        },
                        delete: function(t) {
                            let n = e(t.data);
                            if (n) {
                                if (!P[n.key] || P[n.key].version < n.version) {
                                    i.debug(X.debugStreamDelete(n.key));
                                    let e = {};
                                    P[n.key] && !P[n.key].deleted && (e[n.key] = {
                                        previous: P[n.key].value
                                    }), P[n.key] = {
                                        version: n.version,
                                        deleted: !0
                                    }, N(n, P[n.key]), J(e)
                                } else i.debug(X.debugStreamDeleteIgnored(n.key))
                            }
                        }
                    })
                }

                function z() {
                    C && (w.disconnect(), C = !1)
                }

                function q(e) {
                    let t = {};
                    if (!e) return Promise.resolve();
                    for (let n in P) O.objectHasOwnProperty(P, n) && P[n] && (e[n] && !O.deepEquals(e[n].value, P[n].value) ? t[n] = {
                        previous: P[n].value,
                        current: H(e[n])
                    } : e[n] && !e[n].deleted || (t[n] = {
                        previous: P[n].value
                    }));
                    for (let n in e) O.objectHasOwnProperty(e, n) && e[n] && (!P[n] || P[n].deleted) && (t[n] = {
                        current: H(e[n])
                    });
                    return P = { ...e
                    }, $(), J(t).catch(() => {})
                }

                function J(e) {
                    let t = Object.keys(e);
                    if (t.length > 0) {
                        let n = {};
                        t.forEach(t => {
                            let r = e[t].current,
                                o = r ? r.value : void 0,
                                i = e[t].previous;
                            a.emit(e4 + ":" + t, o, i), n[t] = r ? {
                                current: o,
                                previous: i
                            } : {
                                previous: i
                            }
                        }), a.emit(e4, n), a.emit(e8, P), s.sendEventsOnlyForVariation || T || t.forEach(t => {
                            M(t, e[t].current)
                        })
                    }
                    return x && F ? F.saveFlags(P) : Promise.resolve()
                }

                function B() {
                    let e = S || D && void 0 === S;
                    e && !C ? _() : !e && C && z(), b && b.setStreaming(e)
                }

                function G(e) {
                    return e === e4 || e.substr(0, 7) === e4 + ":"
                }
                if ("string" == typeof s.bootstrap && "LOCALSTORAGE" === s.bootstrap.toUpperCase() && (F ? x = !0 : i.warn(X.localStorageUnavailable())), "object" == typeof s.bootstrap && (P = function(e) {
                        let t = Object.keys(e),
                            n = "$flagsState",
                            r = "$valid",
                            o = e[n];
                        !o && t.length && i.warn(X.bootstrapOldFormat()), !1 === e[r] && i.warn(X.bootstrapInvalid());
                        let a = {};
                        return t.forEach(t => {
                            if (t !== n && t !== r) {
                                let n = {
                                    value: e[t]
                                };
                                o && o[t] ? n = O.extend(n, o[t]) : n.version = 0, a[t] = n
                            }
                        }), a
                    }(s.bootstrap)), T) {
                    let e = T.getInitialState();
                    e ? W(e) : T.on("init", W), T.on("update", function(e) {
                        e.context && R.setContext(e.context), e.flags && q(e.flags)
                    })
                } else(e ? U.processContext(t).then(V).then(e => (R.setContext(e), "object" == typeof s.bootstrap ? Z() : x ? F.loadFlags().then(e => null == e ? (P = {}, E.fetchFlagSettings(R.getContext(), p).then(e => q(e || {})).then(Z).catch(e => {
                    Y(new c.LDFlagFetchError(X.errorFetchingFlags(e)))
                })) : (P = e, O.onNextTick(Z), E.fetchFlagSettings(R.getContext(), p).then(e => q(e)).catch(e => a.maybeReportError(e)))) : E.fetchFlagSettings(R.getContext(), p).then(e => {
                    P = e || {}, $(), Z()
                }).catch(e => {
                    P = {}, Y(e)
                }))) : Promise.reject(new c.LDInvalidEnvironmentIdError(X.environmentNotSpecified()))).catch(Y);

                function W(e) {
                    d = e.environment, R.setContext(e.context), P = { ...e.flags
                    }, O.onNextTick(Z)
                }

                function Z() {
                    i.info(X.clientInitialized()), j = !0, B(), l.signalSuccess()
                }

                function Y(e) {
                    l.signalFailure(e)
                }
                return {
                    client: {
                        waitForInitialization: () => l.getInitializationPromise(),
                        waitUntilReady: () => l.getReadyPromise(),
                        identify: function(e, t, n) {
                            if (I) return O.wrapPromiseCallback(Promise.resolve({}), n);
                            if (T) return i.warn(X.identifyDisabled()), O.wrapPromiseCallback(Promise.resolve(O.transformVersionedValuesToValues(P)), n);
                            let r = x && F ? F.clearFlags() : Promise.resolve();
                            return O.wrapPromiseCallback(r.then(() => U.processContext(e)).then(V).then(e => E.fetchFlagSettings(e, t).then(n => {
                                let r = O.transformVersionedValuesToValues(n);
                                return R.setContext(e), p = t, n ? q(n).then(() => r) : r
                            })).then(e => (C && _(), e)).catch(e => (a.maybeReportError(e), Promise.reject(e))), n)
                        },
                        getContext: function() {
                            return R.getContext()
                        },
                        variation: function(e, t) {
                            return K(e, t, !0, !1, !1).value
                        },
                        variationDetail: function(e, t) {
                            return K(e, t, !0, !0, !1)
                        },
                        track: function(e, t, n) {
                            if ("string" != typeof e) return void a.maybeReportError(new c.LDInvalidEventKeyError(X.unknownCustomEventKey(e)));
                            r.customEventFilter && !r.customEventFilter(e) && i.warn(X.unknownCustomEventKey(e));
                            let o = R.getContext(),
                                l = {
                                    kind: "custom",
                                    key: e,
                                    context: o,
                                    url: r.getCurrentUrl(),
                                    creationDate: (new Date).getTime()
                                };
                            o && o.anonymous && (l.contextKind = o.anonymous ? "anonymousUser" : "user"), null != t && (l.data = t), null != n && (l.metricValue = n), A(l)
                        },
                        on: function(e, t, n) {
                            G(e) ? (D = !0, j && B(), a.on(e, t, n)) : a.on(...arguments)
                        },
                        off: function(e) {
                            if (a.off(...arguments), G(e)) {
                                let e = !1;
                                a.getEvents().forEach(t => {
                                    G(t) && a.getEventListenerCount(t) > 0 && (e = !0)
                                }), e || (D = !1, C && void 0 === S && z())
                            }
                        },
                        setStreaming: function(e) {
                            let t = null === e ? void 0 : e;
                            t !== S && (S = t, B())
                        },
                        flush: function(e) {
                            return O.wrapPromiseCallback(f ? k.flush() : Promise.resolve(), e)
                        },
                        allFlags: function() {
                            let e = {};
                            if (!P) return e;
                            for (let t in P) O.objectHasOwnProperty(P, t) && !P[t].deleted && (e[t] = K(t, null, !s.sendEventsOnlyForVariation, !1, !0).value);
                            return e
                        },
                        close: function(e) {
                            if (I) return O.wrapPromiseCallback(Promise.resolve(), e);
                            let t = () => {
                                    I = !0, P = {}
                                },
                                n = Promise.resolve().then(() => {
                                    if (z(), b && b.stop(), f) return k.stop(), k.flush()
                                }).then(t).catch(t);
                            return O.wrapPromiseCallback(n, e)
                        }
                    },
                    options: s,
                    emitter: a,
                    ident: R,
                    logger: i,
                    requestor: E,
                    start: function() {
                        f && (b && b.start(), k.start())
                    },
                    enqueueEvent: A,
                    getFlagsInternal: function() {
                        return P
                    },
                    getEnvironmentId: () => d,
                    internalChangeEventName: e8
                }
            };

            function e7(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function te(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? e7(Object(n), !0).forEach(function(t) {
                        ! function(e, t, n) {
                            var r;
                            (t = "symbol" == typeof(r = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var r = n.call(e, t || "default");
                                    if ("object" != typeof r) return r;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(t, "string")) ? r : r + "") in e ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = n
                        }(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : e7(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var tt = {
                    promise: Promise.resolve({
                        status: 200,
                        header: function() {
                            return null
                        },
                        body: null
                    })
                },
                tn = e => {
                    if ("string" != typeof e) throw TypeError("Expected a string");
                    return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
                };

            function tr(e, t) {
                for (var n = {}, r = null, o = [], i = 0; i < e.length; i++)
                    for (var a = e[i], l = a.urls || [], s = 0; s < l.length; s++)
                        if (function(e, t, n, r) {
                                var o, i, a = (("substring" === e.kind || "regex" === e.kind) && r.includes("/") ? t : t.replace(r, "")).replace(n, "");
                                switch (e.kind) {
                                    case "exact":
                                        i = t, o = RegExp("^" + tn(e.url) + "/?$");
                                        break;
                                    case "canonical":
                                        i = a, o = RegExp("^" + tn(e.url) + "/?$");
                                        break;
                                    case "substring":
                                        i = a, o = RegExp(".*" + tn(e.substring) + ".*$");
                                        break;
                                    case "regex":
                                        i = a, o = new RegExp(e.pattern);
                                        break;
                                    default:
                                        return !1
                                }
                                return o.test(i)
                            }(l[s], window.location.href, window.location.search, window.location.hash)) {
                            "pageview" === a.kind ? t("pageview", a) : (o.push(a), t("click_pageview", a));
                            break
                        }
                return o.length > 0 && (r = function(e) {
                    for (var n = function(e, t) {
                            for (var n = [], r = 0; r < t.length; r++)
                                for (var o = e.target, i = t[r], a = i.selector, l = document.querySelectorAll(a); o && l.length > 0;) {
                                    for (var s = 0; s < l.length; s++) o === l[s] && n.push(i);
                                    o = o.parentNode
                                }
                            return n
                        }(e, o), r = 0; r < n.length; r++) t("click", n[r])
                }, document.addEventListener("click", r)), n.dispose = function() {
                    document.removeEventListener("click", r)
                }, n
            }
            var to = "goalsReady",
                ti = {
                    fetchGoals: {
                        default: !0
                    },
                    hash: {
                        type: "string"
                    },
                    eventProcessor: {
                        type: "object"
                    },
                    eventUrlTransformer: {
                        type: "function"
                    },
                    disableSyncEventPost: {
                        default: !1
                    }
                };

            function ta(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = function(e) {
                        var t, n = {
                            userAgentHeaderName: "X-LaunchDarkly-User-Agent",
                            synchronousFlush: !1
                        };
                        if (window.XMLHttpRequest) {
                            var r = e && e.disableSyncEventPost;
                            n.httpRequest = function(e, t, o, i) {
                                var a = !r & n.synchronousFlush;
                                return n.synchronousFlush = !1,
                                    function(e, t, n, r, o) {
                                        if (o && ! function() {
                                                var e = window.navigator && window.navigator.userAgent;
                                                if (e) {
                                                    var t = e.match(/Chrom(e|ium)\/([0-9]+)\./);
                                                    if (t) return 73 > parseInt(t[2], 10)
                                                }
                                                return !0
                                            }()) return tt;
                                        var i, a = new window.XMLHttpRequest;
                                        for (var l in a.open(e, t, !o), n || {}) Object.prototype.hasOwnProperty.call(n, l) && a.setRequestHeader(l, n[l]);
                                        if (o) {
                                            try {
                                                a.send(r)
                                            } catch (e) {}
                                            return tt
                                        }
                                        return {
                                            promise: new Promise(function(e, t) {
                                                a.addEventListener("load", function() {
                                                    i || e({
                                                        status: a.status,
                                                        header: function(e) {
                                                            return a.getResponseHeader(e)
                                                        },
                                                        body: a.responseText
                                                    })
                                                }), a.addEventListener("error", function() {
                                                    i || t(Error())
                                                }), a.send(r)
                                            }),
                                            cancel: function() {
                                                i = !0, a.abort()
                                            }
                                        }
                                    }(e, t, o, i, a)
                            }
                        }
                        n.httpAllowsPost = function() {
                            return void 0 === t && (t = !!window.XMLHttpRequest && "withCredentials" in new window.XMLHttpRequest), t
                        }, n.httpFallbackPing = function(e) {
                            (new window.Image).src = e
                        };
                        var o, i = e && e.eventUrlTransformer;
                        n.getCurrentUrl = function() {
                            return i ? i(window.location.href) : window.location.href
                        }, n.isDoNotTrack = function() {
                            var e;
                            return 1 === (e = window.navigator && void 0 !== window.navigator.doNotTrack ? window.navigator.doNotTrack : window.navigator && void 0 !== window.navigator.msDoNotTrack ? window.navigator.msDoNotTrack : window.doNotTrack) || !0 === e || "1" === e || "yes" === e
                        };
                        try {
                            window.localStorage && (n.localStorage = {
                                get: function(e) {
                                    return new Promise(function(t) {
                                        t(window.localStorage.getItem(e))
                                    })
                                },
                                set: function(e, t) {
                                    return new Promise(function(n) {
                                        window.localStorage.setItem(e, t), n()
                                    })
                                },
                                clear: function(e) {
                                    return new Promise(function(t) {
                                        window.localStorage.removeItem(e), t()
                                    })
                                }
                            })
                        } catch (e) {
                            n.localStorage = null
                        }
                        return e && e.useReport && "function" == typeof window.EventSourcePolyfill && window.EventSourcePolyfill.supportedOptions && window.EventSourcePolyfill.supportedOptions.method ? (n.eventSourceAllowsReport = !0, o = window.EventSourcePolyfill) : (n.eventSourceAllowsReport = !1, o = window.EventSource), window.EventSource && (n.eventSourceFactory = function(e, t) {
                            var n = te(te({}, {
                                heartbeatTimeout: 3e5,
                                silentTimeout: 3e5,
                                skipDefaultHeaders: !0
                            }), t);
                            return new o(e, n)
                        }, n.eventSourceIsActive = function(e) {
                            return e.readyState === window.EventSource.OPEN || e.readyState === window.EventSource.CONNECTING
                        }), n.userAgent = "JSClient", n.version = "3.2.0", n.diagnosticSdkData = {
                            name: "js-client-sdk",
                            version: "3.2.0"
                        }, n.diagnosticPlatformData = {
                            name: "JS"
                        }, n.diagnosticUseCombinedEvent = !0, n
                    }(n),
                    o = e9(e, t, n, r, ti),
                    i = o.client,
                    a = o.options,
                    l = o.emitter,
                    s = new Promise(function(e) {
                        var t = l.on(to, function() {
                            l.off(to, t), e()
                        })
                    });
                i.waitUntilGoalsReady = function() {
                    return s
                }, a.fetchGoals ? function(e, t) {
                    var n, r;

                    function o() {
                        r && r.dispose(), n && n.length && (r = tr(n, i))
                    }

                    function i(t, n) {
                        var r = e.ident.getContext(),
                            o = {
                                kind: t,
                                key: n.key,
                                data: null,
                                url: window.location.href,
                                creationDate: (new Date).getTime(),
                                context: r
                            };
                        return "click" === t && (o.selector = n.selector), e.enqueueEvent(o)
                    }
                    return e.requestor.fetchJSON("/sdk/goals/" + e.getEnvironmentId()).then(function(e) {
                        e && e.length > 0 && (r = tr(n = e, i), function(e, t) {
                            var n, r = window.location.href;

                            function o() {
                                (n = window.location.href) !== r && (r = n, t())
                            }(function e(t, n) {
                                t(), setTimeout(function() {
                                    e(t, n)
                                }, n)
                            })(o, 300), window.history && window.history.pushState ? window.addEventListener("popstate", o) : window.addEventListener("hashchange", o)
                        }(0, o)), t()
                    }).catch(function(n) {
                        e.emitter.maybeReportError(new c.LDUnexpectedResponseError((n && n.message, n.message))), t()
                    }), {}
                }(o, function() {
                    return l.emit(to)
                }) : l.emit(to), "complete" !== document.readyState ? window.addEventListener("load", o.start) : o.start();
                var u = function() {
                    r.synchronousFlush = !0, i.flush().catch(function() {}), r.synchronousFlush = !1
                };
                return document.addEventListener("visibilitychange", function() {
                    "hidden" === document.visibilityState && u()
                }), window.addEventListener("pagehide", u), i
            }
            var tl = function(e) {
                    return e1(te({
                        destination: console.log
                    }, e))
                },
                ts = void 0,
                tu = "3.2.0",
                tc = {
                    initialize: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return console && console.warn && console.warn(X.deprecated("default export", "named LDClient export")), ta(e, t, n)
                    },
                    version: tu
                }
        },
        79511: function(e, t, n) {
            "use strict";
            var r, o = n(14978),
                i = n(24227),
                a = n(61654),
                l = n(30979),
                s = (r = Object.create(null), o && Object.keys(o).forEach(function(e) {
                    if ("default" !== e) {
                        var t = Object.getOwnPropertyDescriptor(o, e);
                        Object.defineProperty(r, e, t.get ? t : {
                            enumerable: !0,
                            get: function() {
                                return o[e]
                            }
                        })
                    }
                }), r.default = o, Object.freeze(r));
            let u = {
                    useCamelCaseFlagKeys: !0,
                    sendEventsOnFlagRead: !0
                },
                c = o.createContext({
                    flags: {},
                    flagKeyMap: {},
                    ldClient: void 0
                }),
                {
                    Provider: f,
                    Consumer: d
                } = c,
                p = e => {
                    var t;
                    return null != (t = e.context) ? t : e.user
                },
                g = e => {
                    let t = {};
                    for (let n in e) 0 !== n.indexOf("$") && (t[a(n)] = e[n]);
                    return t
                },
                v = (e, t) => {
                    let n = {};
                    for (let r in e) t && void 0 === t[r] || (n[r] = e[r].current);
                    return n
                },
                y = (e, t) => {
                    let n = e.allFlags();
                    return t ? Object.keys(t).reduce((e, r) => (e[r] = Object.prototype.hasOwnProperty.call(n, r) ? n[r] : t[r], e), {}) : n
                };
            g.camelCaseKeys = g;
            var m = Object.defineProperty,
                h = Object.getOwnPropertySymbols,
                b = Object.prototype.hasOwnProperty,
                w = Object.prototype.propertyIsEnumerable,
                k = (e, t, n) => t in e ? m(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                E = (e, t) => {
                    for (var n in t || (t = {})) b.call(t, n) && k(e, n, t[n]);
                    if (h)
                        for (var n of h(t)) w.call(t, n) && k(e, n, t[n]);
                    return e
                };
            let x = {
                    wrapperName: "react-client-sdk",
                    wrapperVersion: "3.1.0",
                    sendEventsOnlyForVariation: !0
                },
                O = (e, ...t) => {
                    var n, r, o;
                    return n = void 0, r = [e, ...t], o = function*(e, t = {
                        anonymous: !0,
                        kind: "user"
                    }, n, r) {
                        let o = i.initialize(e, t, E(E({}, x), n));
                        return new Promise(e => {
                            function t() {
                                o.off("ready", i), o.off("failed", n)
                            }

                            function n(n) {
                                t(), e({
                                    flags: {},
                                    ldClient: o,
                                    error: n
                                })
                            }

                            function i() {
                                t(), e({
                                    flags: y(o, r),
                                    ldClient: o
                                })
                            }
                            o.on("failed", n), o.on("ready", i)
                        })
                    }, new Promise((e, t) => {
                        var i = e => {
                                try {
                                    l(o.next(e))
                                } catch (e) {
                                    t(e)
                                }
                            },
                            a = e => {
                                try {
                                    l(o.throw(e))
                                } catch (e) {
                                    t(e)
                                }
                            },
                            l = t => t.done ? e(t.value) : Promise.resolve(t.value).then(i, a);
                        l((o = o.apply(n, r)).next())
                    })
                };

            function C(e, t, n = u, r) {
                let o = void 0 === r ? t : Object.keys(r).reduce((e, n) => (D(t, n) && (e[n] = t[n]), e), {}),
                    {
                        useCamelCaseFlagKeys: i = !0
                    } = n,
                    [l, s = {}] = i ? function(e) {
                        let t = {},
                            n = {};
                        for (let r in e) {
                            if (0 === r.indexOf("$")) continue;
                            let o = a(r);
                            t[o] = e[r], n[o] = r
                        }
                        return [t, n]
                    }(o) : [o];
                return {
                    flags: n.sendEventsOnFlagRead ? new Proxy(l, {
                        get(t, n, r) {
                            let o = Reflect.get(t, n, r),
                                a = i && D(s, n) || D(t, n);
                            if ("symbol" == typeof n || !a) return o;
                            if (void 0 === o) return;
                            let l = i ? s[n] : n;
                            return e.variation(l, o)
                        }
                    }) : l,
                    flagKeyMap: s
                }
            }

            function D(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            var P = Object.defineProperty,
                S = Object.defineProperties,
                j = Object.getOwnPropertyDescriptors,
                I = Object.getOwnPropertySymbols,
                L = Object.prototype.hasOwnProperty,
                T = Object.prototype.propertyIsEnumerable,
                R = (e, t, n) => t in e ? P(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                U = (e, t) => {
                    for (var n in t || (t = {})) L.call(t, n) && R(e, n, t[n]);
                    if (I)
                        for (var n of I(t)) T.call(t, n) && R(e, n, t[n]);
                    return e
                },
                F = (e, t, n) => (R(e, "symbol" != typeof t ? t + "" : t, n), n),
                A = (e, t, n) => new Promise((r, o) => {
                    var i = e => {
                            try {
                                l(n.next(e))
                            } catch (e) {
                                o(e)
                            }
                        },
                        a = e => {
                            try {
                                l(n.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        },
                        l = e => e.done ? r(e.value) : Promise.resolve(e.value).then(i, a);
                    l((n = n.apply(e, t)).next())
                });
            class N extends o.Component {
                constructor(e) {
                    super(e), F(this, "state"), F(this, "getReactOptions", () => U(U({}, u), this.props.reactOptions)), F(this, "subscribeToChanges", e => {
                        let {
                            flags: t
                        } = this.props;
                        e.on("change", n => {
                            let r = this.getReactOptions(),
                                o = v(n, t),
                                i = U(U({}, this.state.unproxiedFlags), o);
                            Object.keys(o).length > 0 && this.setState(U({
                                unproxiedFlags: i
                            }, C(e, i, r, t)))
                        })
                    }), F(this, "initLDClient", () => A(this, null, function*() {
                        let {
                            clientSideID: e,
                            flags: t,
                            options: n
                        } = this.props, r = yield this.props.ldClient, o = this.getReactOptions(), i, a = this.state.unproxiedFlags;
                        if (r) a = y(r, t);
                        else {
                            let o = yield O(e, p(this.props), n, t);
                            (i = o.error) || (a = o.flags), r = o.ldClient
                        }
                        this.setState(S(U({
                            unproxiedFlags: a
                        }, C(r, a, o, t)), j({
                            ldClient: r,
                            error: i
                        }))), this.subscribeToChanges(r)
                    }));
                    let {
                        options: t
                    } = e;
                    if (this.state = {
                            flags: {},
                            unproxiedFlags: {},
                            flagKeyMap: {},
                            ldClient: void 0
                        }, t) {
                        let {
                            bootstrap: e
                        } = t;
                        if (e && "localStorage" !== e) {
                            let {
                                useCamelCaseFlagKeys: t
                            } = this.getReactOptions();
                            this.state = {
                                flags: t ? g(e) : e,
                                unproxiedFlags: e,
                                flagKeyMap: {},
                                ldClient: void 0
                            }
                        }
                    }
                }
                componentDidMount() {
                    return A(this, null, function*() {
                        let {
                            deferInitialization: e
                        } = this.props;
                        e && !p(this.props) || (yield this.initLDClient())
                    })
                }
                componentDidUpdate(e) {
                    return A(this, null, function*() {
                        let {
                            deferInitialization: t
                        } = this.props, n = !p(e) && p(this.props);
                        t && n && (yield this.initLDClient())
                    })
                }
                render() {
                    let {
                        flags: e,
                        flagKeyMap: t,
                        ldClient: n,
                        error: r
                    } = this.state;
                    return o.createElement(f, {
                        value: {
                            flags: e,
                            flagKeyMap: t,
                            ldClient: n,
                            error: r
                        }
                    }, this.props.children)
                }
            }
            var $ = Object.defineProperty,
                M = Object.defineProperties,
                V = Object.getOwnPropertyDescriptors,
                K = Object.getOwnPropertySymbols,
                H = Object.prototype.hasOwnProperty,
                _ = Object.prototype.propertyIsEnumerable,
                z = (e, t, n) => t in e ? $(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                q = (e, t) => {
                    for (var n in t || (t = {})) H.call(t, n) && z(e, n, t[n]);
                    if (K)
                        for (var n of K(t)) _.call(t, n) && z(e, n, t[n]);
                    return e
                },
                J = Object.defineProperty,
                B = Object.getOwnPropertySymbols,
                G = Object.prototype.hasOwnProperty,
                W = Object.prototype.propertyIsEnumerable,
                Z = (e, t, n) => t in e ? J(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                X = (e, t) => {
                    for (var n in t || (t = {})) G.call(t, n) && Z(e, n, t[n]);
                    if (B)
                        for (var n of B(t)) W.call(t, n) && Z(e, n, t[n]);
                    return e
                },
                Y = Object.defineProperty,
                Q = Object.getOwnPropertySymbols,
                ee = Object.prototype.hasOwnProperty,
                et = Object.prototype.propertyIsEnumerable,
                en = (e, t, n) => t in e ? Y(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                er = (e, t) => {
                    for (var n in t || (t = {})) ee.call(t, n) && en(e, n, t[n]);
                    if (Q)
                        for (var n of Q(t)) et.call(t, n) && en(e, n, t[n]);
                    return e
                };
            t.LDProvider = N, t.asyncWithLDProvider = function(e) {
                var t, n;
                return t = this, n = function*() {
                    let {
                        clientSideID: t,
                        flags: n,
                        options: r,
                        reactOptions: i
                    } = e, a = X(X({}, u), i), {
                        ldClient: l,
                        flags: s,
                        error: c
                    } = yield O(t, p(e), r, n), d = (null == r ? void 0 : r.bootstrap) && "localStorage" !== r.bootstrap ? r.bootstrap : s;
                    return ({
                        children: e
                    }) => {
                        let [t, r] = o.useState(() => X({
                            unproxiedFlags: d
                        }, C(l, d, a, n)));
                        o.useEffect(() => {
                            function e(e) {
                                let t = v(e, n);
                                Object.keys(t).length > 0 && r(({
                                    unproxiedFlags: e
                                }) => {
                                    let r = X(X({}, e), t);
                                    return X({
                                        unproxiedFlags: r
                                    }, C(l, r, a, n))
                                })
                            }
                            return l.on("change", e),
                                function() {
                                    l.off("change", e)
                                }
                        }, []);
                        let {
                            flags: i,
                            flagKeyMap: s
                        } = t;
                        return o.createElement(f, {
                            value: {
                                flags: i,
                                flagKeyMap: s,
                                ldClient: l,
                                error: c
                            }
                        }, e)
                    }
                }, new Promise((e, r) => {
                    var o = e => {
                            try {
                                a(n.next(e))
                            } catch (e) {
                                r(e)
                            }
                        },
                        i = e => {
                            try {
                                a(n.throw(e))
                            } catch (e) {
                                r(e)
                            }
                        },
                        a = t => t.done ? e(t.value) : Promise.resolve(t.value).then(o, i);
                    a((n = n.apply(t, null)).next())
                })
            }, t.camelCaseKeys = g, t.defaultReactOptions = u, t.useFlags = () => {
                let {
                    flags: e
                } = o.useContext(c);
                return e
            }, t.useLDClient = () => {
                let {
                    ldClient: e
                } = o.useContext(c);
                return e
            }, t.useLDClientError = function() {
                let {
                    error: e
                } = o.useContext(c);
                return e
            }, t.withLDConsumer = function(e = {
                clientOnly: !1
            }) {
                return function(t) {
                    return n => s.createElement(d, null, ({
                        flags: r,
                        ldClient: o
                    }) => e.clientOnly ? s.createElement(t, er({
                        ldClient: o
                    }, n)) : s.createElement(t, er({
                        flags: r,
                        ldClient: o
                    }, n)))
                }
            }, t.withLDProvider = function(e) {
                return function(t) {
                    let {
                        reactOptions: n
                    } = e, r = q(q({}, u), n), o = M(q({}, e), V({
                        reactOptions: r
                    }));

                    function i(e) {
                        return s.createElement(N, q({}, o), s.createElement(t, q({}, e)))
                    }
                    return l(i, t), i
                }
            }, Object.keys(i).forEach(function(e) {
                "default" === e || Object.prototype.hasOwnProperty.call(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return i[e]
                    }
                })
            })
        },
        61654: function(e, t, n) {
            var r, o, i = 1 / 0,
                a = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                l = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                s = "\ud800-\udfff",
                u = "\\u0300-\\u036f\\ufe20-\\ufe23",
                c = "\\u20d0-\\u20f0",
                f = "\\u2700-\\u27bf",
                d = "a-z\\xdf-\\xf6\\xf8-\\xff",
                p = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                g = "\\ufe0e\\ufe0f",
                v = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                y = "['’]",
                m = "[" + v + "]",
                h = "[" + u + c + "]",
                b = "[" + d + "]",
                w = "[^" + s + v + "\\d+" + f + d + p + "]",
                k = "\ud83c[\udffb-\udfff]",
                E = "[^" + s + "]",
                x = "(?:\ud83c[\udde6-\uddff]){2}",
                O = "[\ud800-\udbff][\udc00-\udfff]",
                C = "[" + p + "]",
                D = "\\u200d",
                P = "(?:" + b + "|" + w + ")",
                S = "(?:" + y + "(?:d|ll|m|re|s|t|ve))?",
                j = "(?:" + y + "(?:D|LL|M|RE|S|T|VE))?",
                I = "(?:" + h + "|" + k + ")?",
                L = "[" + g + "]?",
                T = "(?:" + D + "(?:" + [E, x, O].join("|") + ")" + L + I + ")*",
                R = L + I + T,
                U = "(?:" + ["[" + f + "]", x, O].join("|") + ")" + R,
                F = "(?:" + [E + h + "?", h, x, O, "[" + s + "]"].join("|") + ")",
                A = RegExp(y, "g"),
                N = RegExp(h, "g"),
                $ = RegExp(k + "(?=" + k + ")|" + F + R, "g"),
                M = RegExp([C + "?" + b + "+" + S + "(?=" + [m, C, "$"].join("|") + ")", "(?:" + C + "|" + w + ")+" + j + "(?=" + [m, C + P, "$"].join("|") + ")", C + "?" + P + "+" + S, C + "+" + j, "\\d+", U].join("|"), "g"),
                V = RegExp("[" + D + s + u + c + g + "]"),
                K = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                H = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
                _ = "object" == typeof self && self && self.Object === Object && self,
                z = H || _ || Function("return this")(),
                q = (r = {
                    À: "A",
                    Á: "A",
                    Â: "A",
                    Ã: "A",
                    Ä: "A",
                    Å: "A",
                    à: "a",
                    á: "a",
                    â: "a",
                    ã: "a",
                    ä: "a",
                    å: "a",
                    Ç: "C",
                    ç: "c",
                    Ð: "D",
                    ð: "d",
                    È: "E",
                    É: "E",
                    Ê: "E",
                    Ë: "E",
                    è: "e",
                    é: "e",
                    ê: "e",
                    ë: "e",
                    Ì: "I",
                    Í: "I",
                    Î: "I",
                    Ï: "I",
                    ì: "i",
                    í: "i",
                    î: "i",
                    ï: "i",
                    Ñ: "N",
                    ñ: "n",
                    Ò: "O",
                    Ó: "O",
                    Ô: "O",
                    Õ: "O",
                    Ö: "O",
                    Ø: "O",
                    ò: "o",
                    ó: "o",
                    ô: "o",
                    õ: "o",
                    ö: "o",
                    ø: "o",
                    Ù: "U",
                    Ú: "U",
                    Û: "U",
                    Ü: "U",
                    ù: "u",
                    ú: "u",
                    û: "u",
                    ü: "u",
                    Ý: "Y",
                    ý: "y",
                    ÿ: "y",
                    Æ: "Ae",
                    æ: "ae",
                    Þ: "Th",
                    þ: "th",
                    ß: "ss",
                    Ā: "A",
                    Ă: "A",
                    Ą: "A",
                    ā: "a",
                    ă: "a",
                    ą: "a",
                    Ć: "C",
                    Ĉ: "C",
                    Ċ: "C",
                    Č: "C",
                    ć: "c",
                    ĉ: "c",
                    ċ: "c",
                    č: "c",
                    Ď: "D",
                    Đ: "D",
                    ď: "d",
                    đ: "d",
                    Ē: "E",
                    Ĕ: "E",
                    Ė: "E",
                    Ę: "E",
                    Ě: "E",
                    ē: "e",
                    ĕ: "e",
                    ė: "e",
                    ę: "e",
                    ě: "e",
                    Ĝ: "G",
                    Ğ: "G",
                    Ġ: "G",
                    Ģ: "G",
                    ĝ: "g",
                    ğ: "g",
                    ġ: "g",
                    ģ: "g",
                    Ĥ: "H",
                    Ħ: "H",
                    ĥ: "h",
                    ħ: "h",
                    Ĩ: "I",
                    Ī: "I",
                    Ĭ: "I",
                    Į: "I",
                    İ: "I",
                    ĩ: "i",
                    ī: "i",
                    ĭ: "i",
                    į: "i",
                    ı: "i",
                    Ĵ: "J",
                    ĵ: "j",
                    Ķ: "K",
                    ķ: "k",
                    ĸ: "k",
                    Ĺ: "L",
                    Ļ: "L",
                    Ľ: "L",
                    Ŀ: "L",
                    Ł: "L",
                    ĺ: "l",
                    ļ: "l",
                    ľ: "l",
                    ŀ: "l",
                    ł: "l",
                    Ń: "N",
                    Ņ: "N",
                    Ň: "N",
                    Ŋ: "N",
                    ń: "n",
                    ņ: "n",
                    ň: "n",
                    ŋ: "n",
                    Ō: "O",
                    Ŏ: "O",
                    Ő: "O",
                    ō: "o",
                    ŏ: "o",
                    ő: "o",
                    Ŕ: "R",
                    Ŗ: "R",
                    Ř: "R",
                    ŕ: "r",
                    ŗ: "r",
                    ř: "r",
                    Ś: "S",
                    Ŝ: "S",
                    Ş: "S",
                    Š: "S",
                    ś: "s",
                    ŝ: "s",
                    ş: "s",
                    š: "s",
                    Ţ: "T",
                    Ť: "T",
                    Ŧ: "T",
                    ţ: "t",
                    ť: "t",
                    ŧ: "t",
                    Ũ: "U",
                    Ū: "U",
                    Ŭ: "U",
                    Ů: "U",
                    Ű: "U",
                    Ų: "U",
                    ũ: "u",
                    ū: "u",
                    ŭ: "u",
                    ů: "u",
                    ű: "u",
                    ų: "u",
                    Ŵ: "W",
                    ŵ: "w",
                    Ŷ: "Y",
                    ŷ: "y",
                    Ÿ: "Y",
                    Ź: "Z",
                    Ż: "Z",
                    Ž: "Z",
                    ź: "z",
                    ż: "z",
                    ž: "z",
                    Ĳ: "IJ",
                    ĳ: "ij",
                    Œ: "Oe",
                    œ: "oe",
                    ŉ: "'n",
                    ſ: "ss"
                }, function(e) {
                    return null == r ? void 0 : r[e]
                }),
                J = Object.prototype.toString,
                B = z.Symbol,
                G = B ? B.prototype : void 0,
                W = G ? G.toString : void 0;

            function Z(e) {
                return null == e ? "" : function(e) {
                    if ("string" == typeof e) return e;
                    if ("symbol" == typeof(t = e) || t && "object" == typeof t && "[object Symbol]" == J.call(t)) return W ? W.call(e) : "";
                    var t, n = e + "";
                    return "0" == n && 1 / e == -i ? "-0" : n
                }(e)
            }
            var X = (o = function(e, t, n) {
                    return t = t.toLowerCase(), e + (n ? Y(Z(t).toLowerCase()) : t)
                }, function(e) {
                    var t;
                    return function(e, t, n, r) {
                        for (var o = -1, i = e ? e.length : 0; ++o < i;) n = t(n, e[o], o, e);
                        return n
                    }(function(e, t, n) {
                        if (e = Z(e), void 0 === t) {
                            var r;
                            return (r = e, K.test(r)) ? e.match(M) || [] : e.match(a) || []
                        }
                        return e.match(t) || []
                    }(((t = Z(t = e)) && t.replace(l, q).replace(N, "")).replace(A, "")), o, "")
                }),
                Y = function(e) {
                    var t, n, r, o, i = (n = e = Z(e), V.test(n)) ? (t = e, V.test(t) ? t.match($) || [] : t.split("")) : void 0,
                        a = i ? i[0] : e.charAt(0),
                        l = i ? (o = i.length, function(e, t, n) {
                            var r = -1,
                                o = e.length;
                            t < 0 && (t = -t > o ? 0 : o + t), (n = n > o ? o : n) < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
                            for (var i = Array(o); ++r < o;) i[r] = e[r + t];
                            return i
                        }(i, 1, r = void 0 === r ? o : r)).join("") : e.slice(1);
                    return a.toUpperCase() + l
                };
            e.exports = X
        }
    }
]);