try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d217e95c-96d0-4d6c-a074-5287c6a6d240", e._sentryDebugIdIdentifier = "sentry-dbid-d217e95c-96d0-4d6c-a074-5287c6a6d240")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7246], {
        86678: function(e, t, r) {
            let o;

            function n(e) {
                return [...e.v, (e.i ? "!" : "") + e.n].join(":")
            }
            r.d(t, {
                EQ: function() {
                    return M
                },
                Fv: function() {
                    return H
                },
                ZD: function() {
                    return P
                },
                _2: function() {
                    return s
                },
                cY: function() {
                    return eo
                },
                hG: function() {
                    return _
                },
                iE: function() {
                    return N
                },
                jU: function() {
                    return S
                },
                sS: function() {
                    return I
                },
                wT: function() {
                    return V
                },
                zJ: function() {
                    return l
                }
            });
            let i = "undefined" != typeof CSS && CSS.escape || (e => e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));

            function a(e) {
                for (var t = 9, r = e.length; r--;) t = Math.imul(t ^ e.charCodeAt(r), 1597334677);
                return "#" + ((t ^ t >>> 9) >>> 0).toString(36)
            }

            function l(e, t = "@media ") {
                return t + s(e).map(e => ("string" == typeof e && (e = {
                    min: e
                }), e.raw || Object.keys(e).map(t => `(${t}-width:${e[t]})`).join(" and "))).join(",")
            }

            function s(e = []) {
                return Array.isArray(e) ? e : null == e ? [] : [e]
            }

            function c(e) {
                return e
            }

            function d() {}
            let f = {
                d: 0,
                b: 134217728,
                c: 268435456,
                a: 671088640,
                u: 805306368,
                o: 939524096
            };

            function p(e) {
                return e.match(/[-=:;]/g) ? .length || 0
            }

            function u(e) {
                return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e) ? Math.max(0, 29.63 * (+RegExp.$1 / (RegExp.$2 ? 15 : 1)) ** .137 - 43) : 0, 15) << 22 | Math.min(p(e), 15) << 18
            }
            let g = ["rst-c", "st-ch", "h-chi", "y-lin", "nk", "sited", "ecked", "pty", "ad-on", "cus-w", "ver", "cus", "cus-v", "tive", "sable", "tiona", "quire"];

            function m({
                n: e,
                i: t,
                v: r = []
            }, o, i, a) {
                for (let c of (e && (e = n({
                        n: e,
                        i: t,
                        v: r
                    })), a = [...s(a)], r)) {
                    let e = o.theme("screens", c);
                    for (let t of s(e && l(e) || o.v(c))) a.push(t), i |= e ? 67108864 | u(t) : "dark" == c ? 1073741824 : "@" == t[0] ? u(t) : 1 << ~(/:([a-z-]+)/.test(t) && ~g.indexOf(RegExp.$1.slice(2, 7)) || -18)
                }
                return {
                    n: e,
                    p: i,
                    r: a,
                    i: t
                }
            }
            let b = new Map;

            function h(e) {
                if (e.d) {
                    let t = [],
                        r = w(e.r.reduce((e, r) => "@" == r[0] ? (t.push(r), e) : r ? w(e, e => w(r, t => {
                            let r = /(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(t);
                            if (r) {
                                let o = e.indexOf(r[1]);
                                return ~o ? e.slice(0, o) + r[0] + e.slice(o + r[1].length) : x(e, t)
                            }
                            return x(t, e)
                        })) : e, "&"), t => x(t, e.n ? "." + i(e.n) : ""));
                    return r && t.push(r.replace(/:merge\((.+?)\)/g, "$1")), t.reduceRight((e, t) => t + "{" + e + "}", e.d)
                }
            }

            function w(e, t) {
                return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (e, r, o) => t(r) + o)
            }

            function x(e, t) {
                return e.replace(/&/g, t)
            }
            let y = new Intl.Collator("en", {
                numeric: !0
            });

            function v(e, t) {
                for (var r = 0, o = e.length; r < o;) {
                    let n = o + r >> 1;
                    0 >= k(e[n], t) ? r = n + 1 : o = n
                }
                return o
            }

            function k(e, t) {
                let r = e.p & f.o;
                return r == (t.p & f.o) && (r == f.b || r == f.o) ? 0 : e.p - t.p || e.o - t.o || y.compare($(e.n), $(t.n)) || y.compare(E(e.n), E(t.n))
            }

            function $(e) {
                return (e || "").split(/:/).pop().split("/").pop() || "\0"
            }

            function E(e) {
                return (e || "").replace(/\W/g, e => String.fromCharCode(127 + e.charCodeAt(0))) + "\0"
            }

            function T(e, t) {
                return Math.round(parseInt(e, 16) * t)
            }

            function S(e, t = {}) {
                if ("function" == typeof e) return e(t);
                let {
                    opacityValue: r = "1",
                    opacityVariable: o
                } = t, n = o ? `var(${o})` : r;
                if (e.includes("<alpha-value>")) return e.replace("<alpha-value>", n);
                if ("#" == e[0] && (4 == e.length || 7 == e.length)) {
                    let t = (e.length - 1) / 3,
                        r = [17, 1, .062272][t - 1];
                    return `rgba(${[T(e.substr(1,t),r),T(e.substr(1+t,t),r),T(e.substr(1+2*t,t),r),n]})`
                }
                return "1" == n ? e : "0" == n ? "#0000" : e.replace(/^(rgb|hsl)(\([^)]+)\)$/, `$1a$2,${n})`)
            }

            function Q(e, t, r, o, n = []) {
                return function e(t, {
                    n: r,
                    p: o,
                    r: n = [],
                    i: i
                }, c) {
                    let d = [],
                        g = "",
                        m = 0,
                        b = 0;
                    for (let y in t || {}) {
                        var w, x;
                        let v = t[y];
                        if ("@" == y[0]) {
                            if (!v) continue;
                            if ("a" == y[1]) {
                                d.push(...A(r, o, W("" + v), c, o, n, i, !0));
                                continue
                            }
                            if ("l" == y[1]) {
                                for (let t of s(v)) d.push(...e(t, {
                                    n: r,
                                    p: (w = f[y[7]], o & ~f.o | w),
                                    r: "d" == y[7] ? [] : n,
                                    i: i
                                }, c));
                                continue
                            }
                            if ("i" == y[1]) {
                                d.push(...s(v).map(e => ({
                                    p: -1,
                                    o: 0,
                                    r: [],
                                    d: y + " " + e
                                })));
                                continue
                            }
                            if ("k" == y[1]) {
                                d.push({
                                    p: f.d,
                                    o: 0,
                                    r: [y],
                                    d: e(v, {
                                        p: f.d
                                    }, c).map(h).join("")
                                });
                                continue
                            }
                            if ("f" == y[1]) {
                                d.push(...s(v).map(t => ({
                                    p: f.d,
                                    o: 0,
                                    r: [y],
                                    d: e(t, {
                                        p: f.d
                                    }, c).map(h).join("")
                                })));
                                continue
                            }
                        }
                        if ("object" != typeof v || Array.isArray(v)) "label" == y && v ? r = v + a(JSON.stringify([o, i, t])) : (v || 0 === v) && (y = y.replace(/[A-Z]/g, e => "-" + e.toLowerCase()), b += 1, m = Math.max(m, "-" == (x = y)[0] ? 0 : p(x) + (/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(x) ? +!!RegExp.$1 || -!!RegExp.$2 : 0) + 1), g += (g ? ";" : "") + s(v).map(e => c.s(y, C("" + e, c.theme) + (i ? " !important" : ""))).join(";"));
                        else if ("@" == y[0] || y.includes("&")) {
                            let t = o;
                            "@" == y[0] && (y = y.replace(/\bscreen\(([^)]+)\)/g, (e, r) => {
                                let o = c.theme("screens", r);
                                return o ? (t |= 67108864, l(o, "")) : e
                            }), t |= u(y)), d.push(...e(v, {
                                n: r,
                                p: t,
                                r: [...n, y],
                                i: i
                            }, c))
                        } else d.push(...e(v, {
                            p: o,
                            r: [...n, y]
                        }, c))
                    }
                    return d.unshift({
                        n: r,
                        p: o,
                        o: Math.max(0, 15 - b) + 1.5 * Math.min(m || 15, 15),
                        r: n,
                        d: g
                    }), d.sort(k)
                }(e, m(t, r, o, n), r)
            }

            function C(e, t) {
                return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g, (e, r, o, n, i = "") => {
                    let a = t(o, i);
                    return "function" == typeof a && /color|fill|stroke/i.test(o) ? S(a) : "" + s(a).filter(e => Object(e) !== e)
                })
            }

            function z(e, t) {
                let r;
                let o = [];
                for (let n of e) n.d && n.n ? r ? .p == n.p && "" + r.r == "" + n.r ? (r.c = [r.c, n.c].filter(Boolean).join(" "), r.d = r.d + ";" + n.d) : o.push(r = { ...n,
                    n: n.n && t
                }) : o.push({ ...n,
                    n: n.n && t
                });
                return o
            }

            function F(e, t, r = f.u, o, i) {
                let a = [];
                for (let l of e)
                    for (let e of function(e, t, r, o, i) {
                            let a = function(e, t) {
                                let r = b.get(e.n);
                                return r ? r(e, t) : t.r(e.n, "dark" == e.v[0])
                            }(e = { ...e,
                                i: e.i || i
                            }, t);
                            return a ? "string" == typeof a ? ({
                                r: o,
                                p: r
                            } = m(e, t, r, o), z(F(W(a), t, r, o, e.i), e.n)) : Array.isArray(a) ? a.map(e => {
                                var t, n;
                                return {
                                    o: 0,
                                    ...e,
                                    r: [...s(o), ...s(e.r)],
                                    p: (t = r, n = e.p ? ? r, t & ~f.o | n)
                                }
                            }) : Q(a, e, t, r, o) : [{
                                c: n(e),
                                p: 0,
                                o: 0,
                                r: []
                            }]
                        }(l, t, r, o, i)) a.splice(v(a, e), 0, e);
                return a
            }

            function A(e, t, r, o, n, i, a, l) {
                return z((l ? r.flatMap(e => F([e], o, n, i, a)) : F(r, o, n, i, a)).map(e => e.p & f.o && (e.n || t == f.b) ? { ...e,
                    p: e.p & ~f.o | t,
                    o: 0
                } : e), e)
            }

            function j(e, t, r) {
                if ("(" != e[e.length - 1]) {
                    let r = [],
                        o = !1,
                        n = !1,
                        i = "";
                    for (let t of e)
                        if (!("(" == t || /[~@]$/.test(t))) {
                            if ("!" == t[0] && (t = t.slice(1), o = !o), t.endsWith(":")) {
                                r["dark:" == t ? "unshift" : "push"](t.slice(0, -1));
                                continue
                            }
                            "-" == t[0] && (t = t.slice(1), n = !n), t.endsWith("-") && (t = t.slice(0, -1)), t && "&" != t && (i += (i && "-") + t)
                        }
                    i && (n && (i = "-" + i), t[0].push({
                        n: i,
                        v: r.filter(O),
                        i: o
                    }))
                }
            }

            function O(e, t, r) {
                return r.indexOf(e) == t
            }
            let D = new Map;

            function W(e) {
                let t = D.get(e);
                if (!t) {
                    let r = [],
                        o = [
                            []
                        ],
                        i = 0,
                        l = 0,
                        s = null,
                        c = 0,
                        d = (t, n = 0) => {
                            i != c && (r.push(e.slice(i, c + n)), t && j(r, o)), i = c + 1
                        };
                    for (; c < e.length; c++) {
                        let t = e[c];
                        if (l) "\\" != e[c - 1] && (l += +("[" == t) || -("]" == t));
                        else if ("[" == t) l += 1;
                        else if (s) "\\" != e[c - 1] && s.test(e.slice(c)) && (s = null, i = c + RegExp.lastMatch.length);
                        else if ("/" == t && "\\" != e[c - 1] && ("*" == e[c + 1] || "/" == e[c + 1])) s = "*" == e[c + 1] ? /^\*\// : /^[\r\n]/;
                        else if ("(" == t) d(), r.push(t);
                        else if (":" == t) ":" != e[c + 1] && d(!1, 1);
                        else if (/[\s,)]/.test(t)) {
                            d(!0);
                            let e = r.lastIndexOf("(");
                            if (")" == t) {
                                let t = r[e - 1];
                                if (/[~@]$/.test(t)) {
                                    let i = o.shift();
                                    r.length = e, j([...r, "#"], o);
                                    let {
                                        v: l
                                    } = o[0].pop();
                                    for (let e of i) e.v.splice(+("dark" == e.v[0]) - +("dark" == l[0]), l.length);
                                    j([...r, function(e, t, r, o) {
                                        var n;
                                        return n = (e, n) => {
                                            let {
                                                n: i,
                                                p: a,
                                                r: l,
                                                i: s
                                            } = m(e, n, t);
                                            return r && A(i, t, r, n, a, l, s, o)
                                        }, b.set(e, n), e
                                    }(t.length > 1 ? t.slice(0, -1) + a(JSON.stringify([t, i])) : t + "(" + function(e, t = ",") {
                                        return e.map(n).join(t)
                                    }(i) + ")", f.a, i, /@$/.test(t))], o)
                                }
                                e = r.lastIndexOf("(", e - 1)
                            }
                            r.length = e + 1
                        } else /[~@]/.test(t) && "(" == e[c + 1] && o.unshift([])
                    }
                    d(!0), D.set(e, t = o[0])
                }
                return t
            }
            let R = / *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;

            function M(e, t, r) {
                return [e, L(t, r)]
            }

            function L(e, t) {
                return "function" == typeof e ? e : "string" == typeof e && /^[\w-]+$/.test(e) ? (r, o) => ({
                    [e]: t ? t(r, o) : U(r, 1)
                }) : t => e || {
                    [t[1]]: U(t, 2)
                }
            }

            function U(e, t, r = e.slice(t).find(Boolean) || e.$$ || e.input) {
                return "-" == e.input[0] ? `calc(${r} * -1)` : r
            }

            function V(e, t, r, o) {
                let n;
                return [e, (n = "string" == typeof r ? (e, t) => ({
                    [r]: o ? o(e, t) : e._
                }) : r || (({
                    1: e,
                    _: t
                }, r, o) => ({
                    [e || o]: t
                })), (e, r) => {
                    let o = B(t || e[1]),
                        i = r.theme(o, e.$$) ? ? N(e.$$, o, r);
                    if (null != i) return e._ = U(e, 0, i), n(e, r, o)
                })]
            }

            function I(e, t = {}, r) {
                return [e, function(e = {}, t) {
                    return (r, o) => {
                        let {
                            section: n = B(r[0]).replace("-", "") + "Color"
                        } = e, [i, a] = (r.$$.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/) || []).slice(1);
                        if (!i) return;
                        let l = o.theme(n, i) || N(i, n, o);
                        if (!l || "object" == typeof l) return;
                        let {
                            opacityVariable: s = `--tw-${r[0].replace(/-$/,"")}-opacity`,
                            opacitySection: c = n.replace("Color", "Opacity"),
                            property: d = n,
                            selector: f
                        } = e, p = o.theme(c, a || "DEFAULT") || a && N(a, c, o), u = t || (({
                            _: e
                        }) => {
                            let t = _(d, e);
                            return f ? {
                                [f]: t
                            } : t
                        });
                        r._ = {
                            value: S(l, {
                                opacityVariable: s || void 0,
                                opacityValue: p || void 0
                            }),
                            color: e => S(l, e),
                            opacityVariable: s || void 0,
                            opacityValue: p || void 0
                        };
                        let g = u(r, o);
                        if (!r.dark) {
                            let e = o.d(n, i, l);
                            e && e !== l && (r._ = {
                                value: S(e, {
                                    opacityVariable: s || void 0,
                                    opacityValue: p || "1"
                                }),
                                color: t => S(e, t),
                                opacityVariable: s || void 0,
                                opacityValue: p || void 0
                            }, g = {
                                "&": g,
                                [o.v("dark")]: u(r, o)
                            })
                        }
                        return g
                    }
                }(t, r)]
            }

            function _(e, t) {
                let r = {};
                return "string" == typeof t ? r[e] = t : (t.opacityVariable && t.value.includes(t.opacityVariable) && (r[t.opacityVariable] = t.opacityValue || "1"), r[e] = t.value), r
            }

            function N(e, t, r) {
                if ("[" == e[0] && "]" == e.slice(-1)) {
                    if (e = H(C(e.slice(1, -1), r.theme)), !t) return e;
                    if (!(/color|fill|stroke/i.test(t) && !(/^color:/.test(e) || /^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e)) || /image/i.test(t) && !(/^image:/.test(e) || /^[a-z-]+\(/.test(e)) || /weight/i.test(t) && !(/^(number|any):/.test(e) || /^\d+$/.test(e)) || /position/i.test(t) && /^(length|size):/.test(e))) return e.replace(/^[a-z-]+:/, "")
                }
            }

            function B(e) {
                return e.replace(/-./g, e => e[1].toUpperCase())
            }

            function H(e) {
                return e.includes("url(") ? e.replace(/(.*?)(url\(.*?\))(.*?)/g, (e, t = "", r, o = "") => H(t) + r + H(o)) : e.replace(/(^|[^\\])_+/g, (e, t) => t + " ".repeat(e.length - t.length)).replace(/\\_/g, "_").replace(/(calc|min|max|clamp)\(.+\)/g, e => e.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 "))
            }

            function P({
                presets: e = [],
                ...t
            }) {
                let r = {
                    darkMode: void 0,
                    darkColor: void 0,
                    preflight: !1 !== t.preflight && [],
                    theme: {},
                    variants: s(t.variants),
                    rules: s(t.rules),
                    ignorelist: s(t.ignorelist),
                    hash: void 0,
                    stringify: (e, t) => e + ":" + t,
                    finalize: []
                };
                for (let o of s([...e, {
                        darkMode: t.darkMode,
                        darkColor: t.darkColor,
                        preflight: !1 !== t.preflight && s(t.preflight),
                        theme: t.theme,
                        hash: t.hash,
                        stringify: t.stringify,
                        finalize: t.finalize
                    }])) {
                    let {
                        preflight: e,
                        darkMode: t = r.darkMode,
                        darkColor: n = r.darkColor,
                        theme: i,
                        variants: a,
                        rules: l,
                        ignorelist: c,
                        hash: d = r.hash,
                        stringify: f = r.stringify,
                        finalize: p
                    } = "function" == typeof o ? o(r) : o;
                    r = {
                        preflight: !1 !== r.preflight && !1 !== e && [...r.preflight, ...s(e)],
                        darkMode: t,
                        darkColor: n,
                        theme: { ...r.theme,
                            ...i,
                            extend: { ...r.theme.extend,
                                ...i ? .extend
                            }
                        },
                        variants: [...r.variants, ...s(a)],
                        rules: [...r.rules, ...s(l)],
                        ignorelist: [...r.ignorelist, ...s(c)],
                        hash: d,
                        stringify: f,
                        finalize: [...r.finalize, ...s(p)]
                    }
                }
                return r
            }

            function G(e, t, r, o, n, i) {
                for (let a of t) {
                    let t = r.get(a);
                    t || r.set(a, t = o(a));
                    let l = t(e, n, i);
                    if (l) return l
                }
            }

            function q(e) {
                var t;
                return J(e[0], "function" == typeof(t = e[1]) ? t : () => t)
            }

            function Y(e) {
                var t, r;
                return Array.isArray(e) ? J(e[0], L(e[1], e[2])) : J(e, L(t, r))
            }

            function J(e, t) {
                return Z(e, (e, r, o, n) => {
                    let i = r.exec(e);
                    if (i) return i.$$ = e.slice(i[0].length), i.dark = n, t(i, o)
                })
            }

            function Z(e, t) {
                let r = s(e).map(X);
                return (e, o, n) => {
                    for (let i of r) {
                        let r = t(e, i, o, n);
                        if (r) return r
                    }
                }
            }

            function X(e) {
                return "string" == typeof e ? RegExp("^" + e + (e.includes("$") || "-" == e.slice(-1) ? "" : "$")) : e
            }

            function K(e) {
                let t = document.querySelector(e || 'style[data-twind=""]');
                return t && "STYLE" == t.tagName || (t = document.createElement("style"), document.head.prepend(t)), t.dataset.twind = "claimed", t
            }

            function ee(e, t) {
                var r, o, n;
                let i, a, l;
                let s = "undefined" == typeof document ? (r = !t, {
                    target: i = [],
                    snapshot() {
                        let e = [...i];
                        return () => {
                            i.splice(0, i.length, ...e)
                        }
                    },
                    clear() {
                        i.length = 0
                    },
                    destroy() {
                        this.clear()
                    },
                    insert(e, t, o) {
                        i.splice(t, 0, r ? `/*!${o.p.toString(36)},${(2*o.o).toString(36)}${o.n?","+o.n:""}*/${e}` : e)
                    },
                    resume: d
                }) : e ? {
                    target: a = K(o),
                    snapshot() {
                        let e = Array.from(a.childNodes, e => e.textContent);
                        return () => {
                            this.clear(), e.forEach(this.insert)
                        }
                    },
                    clear() {
                        a.textContent = ""
                    },
                    destroy() {
                        a.remove()
                    },
                    insert(e, t) {
                        a.insertBefore(document.createTextNode(e), a.childNodes[t] || null)
                    },
                    resume: d
                } : {
                    target: l = (n && "string" != typeof n ? n : K(n)).sheet,
                    snapshot() {
                        let e = Array.from(l.cssRules, e => e.cssText);
                        return () => {
                            this.clear(), e.forEach(this.insert)
                        }
                    },
                    clear() {
                        for (let e = l.cssRules.length; e--;) l.deleteRule(e)
                    },
                    destroy() {
                        l.ownerNode ? .remove()
                    },
                    insert(e, t) {
                        try {
                            l.insertRule(e, t)
                        } catch (e) {
                            l.insertRule(":root{}", t)
                        }
                    },
                    resume: d
                };
                return t || (s.resume = et), s
            }

            function et(e, t) {
                var r, o;
                let n = ((r = this.target).ownerNode || r).textContent || (r.cssRules ? Array.from(r.cssRules, e => e.cssText) : s(r)).join(""),
                    i = /\/\*!([\da-z]+),([\da-z]+)(?:,(.+?))?\*\//g;
                if (i.test(n)) {
                    let r;
                    if (i.lastIndex = 0, this.clear(), "undefined" != typeof document)
                        for (let t of document.querySelectorAll("[class]")) e(t.getAttribute("class"));
                    for (; o = i.exec(n), r && t(n.slice(r.index + r[0].length, o ? .index), {
                            p: parseInt(r[1], 36),
                            o: parseInt(r[2], 36) / 2,
                            n: r[3]
                        }), r = o;);
                }
            }
            let er = new Proxy(d, {
                apply: (e, t, r) => o(r[0]),
                get(e, t) {
                    let r = o[t];
                    return "function" == typeof r ? function() {
                        return r.apply(o, arguments)
                    } : r
                }
            });

            function eo(e = {}, t = ee, r) {
                return o ? .destroy(), o = function(e = er, t = "undefined" != typeof document && document.documentElement) {
                    if (t) {
                        let r = function(e) {
                            let t = new MutationObserver(r);
                            return {
                                observe(e) {
                                    t.observe(e, {
                                        attributeFilter: ["class"],
                                        subtree: !0,
                                        childList: !0
                                    }), o(e), r([{
                                        target: e,
                                        type: ""
                                    }])
                                },
                                disconnect() {
                                    t.disconnect()
                                }
                            };

                            function r(e) {
                                for (let {
                                        type: t,
                                        target: r
                                    } of e)
                                    if ("a" == t[0]) o(r);
                                    else
                                        for (let e of r.querySelectorAll("[class]")) o(e);
                                t.takeRecords()
                            }

                            function o(t) {
                                var r, o;
                                let n;
                                let i = t.getAttribute ? .("class");
                                i && (r = i) != (o = n = e(i)) && "" + r.split(" ").sort() != "" + o.split(" ").sort() && t.setAttribute("class", n)
                            }
                        }(e);
                        r.observe(t);
                        let {
                            destroy: o
                        } = e;
                        e.destroy = () => {
                            r.disconnect(), o.call(e)
                        }
                    }
                    return e
                }(function(e, t) {
                    let r = P(e),
                        o = function({
                            theme: e,
                            darkMode: t,
                            darkColor: r = d,
                            variants: o,
                            rules: n,
                            hash: l,
                            stringify: f,
                            ignorelist: p,
                            finalize: u
                        }) {
                            let g = new Map,
                                m = new Map,
                                b = new Map,
                                h = new Map,
                                w = Z(p, (e, t) => t.test(e));
                            o.push(["dark", Array.isArray(t) || "class" == t ? `${s(t)[1]||".dark"} &` : "string" == typeof t && "media" != t ? t : "@media (prefers-color-scheme:dark)"]);
                            let x = "function" == typeof l ? e => l(e, a) : l ? a : c;
                            x !== c && u.push(e => ({ ...e,
                                n: e.n && x(e.n),
                                d: e.d ? .replace(/--(tw(?:-[\w-]+)?)\b/g, (e, t) => "--" + x(t).replace("#", ""))
                            }));
                            let y = {
                                theme: function({
                                    extend: e = {},
                                    ...t
                                }) {
                                    let r = {},
                                        o = {
                                            get colors() {
                                                return n("colors")
                                            },
                                            theme: n,
                                            negative: () => ({}),
                                            breakpoints(e) {
                                                let t = {};
                                                for (let r in e) "string" == typeof e[r] && (t["screen-" + r] = e[r]);
                                                return t
                                            }
                                        };
                                    return n;

                                    function n(o, a, l, s) {
                                        if (o) {
                                            if ({
                                                    1: o,
                                                    2: s
                                                } = /^(\S+?)(?:\s*\/\s*([^/]+))?$/.exec(o) || [, o], /[.[]/.test(o)) {
                                                let e = [];
                                                o.replace(/\[([^\]]+)\]|([^.[]+)/g, (t, r, o = r) => e.push(o)), o = e.shift(), l = a, a = e.join("-")
                                            }
                                            let c = r[o] || Object.assign(Object.assign(r[o] = {}, i(t, o)), i(e, o));
                                            if (null == a) return c;
                                            a || (a = "DEFAULT");
                                            let d = c[a] ? ? a.split("-").reduce((e, t) => e ? .[t], c) ? ? l;
                                            return s ? S(d, {
                                                opacityValue: C(s, n)
                                            }) : d
                                        }
                                        let c = {};
                                        for (let r of [...Object.keys(t), ...Object.keys(e)]) c[r] = n(r);
                                        return c
                                    }

                                    function i(e, t) {
                                        let r = e[t];
                                        return ("function" == typeof r && (r = r(o)), r && /color|fill|stroke/i.test(t)) ? function e(t, r = []) {
                                            let o = {};
                                            for (let n in t) {
                                                let i = t[n],
                                                    a = [...r, n];
                                                o[a.join("-")] = i, "DEFAULT" == n && (a = r, o[r.join("-")] = i), "object" == typeof i && Object.assign(o, e(i, a))
                                            }
                                            return o
                                        }(r) : r
                                    }
                                }(e),
                                e: i,
                                h: x,
                                s: (e, t) => f(e, t, y),
                                d: (e, t, o) => r(e, t, y, o),
                                v: e => (g.has(e) || g.set(e, G(e, o, m, q, y) || "&:" + e), g.get(e)),
                                r(e, t) {
                                    let r = JSON.stringify([e, t]);
                                    return b.has(r) || b.set(r, !w(e, y) && G(e, n, h, Y, y, t)), b.get(r)
                                },
                                f: e => u.reduce((e, t) => t(e, y), e)
                            };
                            return y
                        }(r),
                        n = new Map,
                        l = [],
                        p = new Set;

                    function u(e) {
                        let r = o.f(e),
                            n = h(r);
                        if (n && !p.has(n)) {
                            p.add(n);
                            let r = v(l, e);
                            t.insert(n, r, e), l.splice(r, 0, e)
                        }
                        return r.n
                    }
                    return t.resume(e => n.set(e, e), (e, r) => {
                        t.insert(e, l.length, r), l.push(r), p.add(e)
                    }), Object.defineProperties(function(e) {
                        if (!n.size)
                            for (let e of s(r.preflight)) "function" == typeof e && (e = e(o)), e && ("string" == typeof e ? A("", f.b, W(e), o, f.b, [], !1, !0) : Q(e, {}, o, f.b)).forEach(u);
                        e = "" + e;
                        let t = n.get(e);
                        if (!t) {
                            let r = new Set;
                            for (let t of F(W(e), o)) r.add(t.c).add(u(t));
                            t = [...r].filter(Boolean).join(" "), n.set(e, t).set(t, t)
                        }
                        return t
                    }, Object.getOwnPropertyDescriptors({
                        get target() {
                            return t.target
                        },
                        theme: o.theme,
                        config: r,
                        snapshot() {
                            let e = t.snapshot(),
                                r = new Set(p),
                                o = new Map(n),
                                i = [...l];
                            return () => {
                                e(), p = r, n = o, l = i
                            }
                        },
                        clear() {
                            t.clear(), p = new Set, n = new Map, l = []
                        },
                        destroy() {
                            this.clear(), t.destroy()
                        }
                    }))
                }(e, "function" == typeof t ? t() : t), r)
            }
        },
        24514: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return i
                }
            });
            var o = new Map([
                ["align-self", "-ms-grid-row-align"],
                ["color-adjust", "-webkit-print-color-adjust"],
                ["column-gap", "grid-column-gap"],
                ["forced-color-adjust", "-ms-high-contrast-adjust"],
                ["gap", "grid-gap"],
                ["grid-template-columns", "-ms-grid-columns"],
                ["grid-template-rows", "-ms-grid-rows"],
                ["justify-self", "-ms-grid-column-align"],
                ["margin-inline-end", "-webkit-margin-end"],
                ["margin-inline-start", "-webkit-margin-start"],
                ["mask-border", "-webkit-mask-box-image"],
                ["mask-border-outset", "-webkit-mask-box-image-outset"],
                ["mask-border-slice", "-webkit-mask-box-image-slice"],
                ["mask-border-source", "-webkit-mask-box-image-source"],
                ["mask-border-repeat", "-webkit-mask-box-image-repeat"],
                ["mask-border-width", "-webkit-mask-box-image-width"],
                ["overflow-wrap", "word-wrap"],
                ["padding-inline-end", "-webkit-padding-end"],
                ["padding-inline-start", "-webkit-padding-start"],
                ["print-color-adjust", "color-adjust"],
                ["row-gap", "grid-row-gap"],
                ["scroll-margin-bottom", "scroll-snap-margin-bottom"],
                ["scroll-margin-left", "scroll-snap-margin-left"],
                ["scroll-margin-right", "scroll-snap-margin-right"],
                ["scroll-margin-top", "scroll-snap-margin-top"],
                ["scroll-margin", "scroll-snap-margin"],
                ["text-combine-upright", "-ms-text-combine-horizontal"]
            ]);
            let n = [
                ["-webkit-", 1],
                ["-moz-", 2],
                ["-ms-", 4]
            ];

            function i() {
                return ({
                    stringify: e
                }) => ({
                    stringify(t, r, i) {
                        var a, l;
                        let s = "",
                            c = o.get(t);
                        c && (s += e(c, r, i) + ";");
                        let d = (a = /^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl)|pr|hyphena|flex-d)|(tab-|column(?!-s)|text-align-l)|(ap)|u|hy)/i.exec(t)) ? a[1] ? 1 : a[2] ? 2 : a[3] ? 3 : 5 : 0,
                            f = (l = /^(?:(pos)|(cli)|(background-i)|(flex(?:$|-b)|(?:max-|min-)?(?:block-s|inl|he|widt))|dis)/i.exec(t)) ? l[1] ? /^sti/i.test(r) ? 1 : 0 : l[2] ? /^pat/i.test(r) ? 1 : 0 : l[3] ? /^image-/i.test(r) ? 1 : 0 : l[4] ? "-" === r[3] ? 2 : 0 : /^(?:inline-)?grid$/i.test(r) ? 4 : 0 : 0;
                        for (let o of n) d & o[1] && (s += e(o[0] + t, r, i) + ";"), f & o[1] && (s += e(t, o[0] + r, i) + ";");
                        return s + e(t, r, i)
                    }
                })
            }
        },
        32664: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return S
                }
            });
            let o = {
                screens: {
                    sm: "640px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1280px",
                    "2xl": "1536px"
                },
                columns: {
                    auto: "auto",
                    "3xs": "16rem",
                    "2xs": "18rem",
                    xs: "20rem",
                    sm: "24rem",
                    md: "28rem",
                    lg: "32rem",
                    xl: "36rem",
                    "2xl": "42rem",
                    "3xl": "48rem",
                    "4xl": "56rem",
                    "5xl": "64rem",
                    "6xl": "72rem",
                    "7xl": "80rem"
                },
                spacing: {
                    px: "1px",
                    0: "0px",
                    ...a(4, "rem", 4, .5, .5),
                    ...a(12, "rem", 4, 5),
                    14: "3.5rem",
                    ...a(64, "rem", 4, 16, 4),
                    72: "18rem",
                    80: "20rem",
                    96: "24rem"
                },
                durations: {
                    75: "75ms",
                    100: "100ms",
                    150: "150ms",
                    200: "200ms",
                    300: "300ms",
                    500: "500ms",
                    700: "700ms",
                    1e3: "1000ms"
                },
                animation: {
                    none: "none",
                    spin: "spin 1s linear infinite",
                    ping: "ping 1s cubic-bezier(0,0,0.2,1) infinite",
                    pulse: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
                    bounce: "bounce 1s infinite"
                },
                aspectRatio: {
                    auto: "auto",
                    square: "1/1",
                    video: "16/9"
                },
                backdropBlur: l("blur"),
                backdropBrightness: l("brightness"),
                backdropContrast: l("contrast"),
                backdropGrayscale: l("grayscale"),
                backdropHueRotate: l("hueRotate"),
                backdropInvert: l("invert"),
                backdropOpacity: l("opacity"),
                backdropSaturate: l("saturate"),
                backdropSepia: l("sepia"),
                backgroundColor: l("colors"),
                backgroundImage: {
                    none: "none"
                },
                backgroundOpacity: l("opacity"),
                backgroundSize: {
                    auto: "auto",
                    cover: "cover",
                    contain: "contain"
                },
                blur: {
                    none: "none",
                    0: "0",
                    sm: "4px",
                    DEFAULT: "8px",
                    md: "12px",
                    lg: "16px",
                    xl: "24px",
                    "2xl": "40px",
                    "3xl": "64px"
                },
                brightness: { ...a(200, "", 100, 0, 50),
                    ...a(110, "", 100, 90, 5),
                    75: "0.75",
                    125: "1.25"
                },
                borderColor: ({
                    theme: e
                }) => ({
                    DEFAULT: e("colors.gray.200", "currentColor"),
                    ...e("colors")
                }),
                borderOpacity: l("opacity"),
                borderRadius: {
                    none: "0px",
                    sm: "0.125rem",
                    DEFAULT: "0.25rem",
                    md: "0.375rem",
                    lg: "0.5rem",
                    xl: "0.75rem",
                    "2xl": "1rem",
                    "3xl": "1.5rem",
                    "1/2": "50%",
                    full: "9999px"
                },
                borderSpacing: l("spacing"),
                borderWidth: {
                    DEFAULT: "1px",
                    ...i(8, "px")
                },
                boxShadow: {
                    sm: "0 1px 2px 0 rgba(0,0,0,0.05)",
                    DEFAULT: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",
                    md: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
                    lg: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
                    xl: "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)",
                    "2xl": "0 25px 50px -12px rgba(0,0,0,0.25)",
                    inner: "inset 0 2px 4px 0 rgba(0,0,0,0.05)",
                    none: "0 0 #0000"
                },
                boxShadowColor: l("colors"),
                caretColor: l("colors"),
                accentColor: ({
                    theme: e
                }) => ({
                    auto: "auto",
                    ...e("colors")
                }),
                contrast: { ...a(200, "", 100, 0, 50),
                    75: "0.75",
                    125: "1.25"
                },
                content: {
                    none: "none"
                },
                divideColor: l("borderColor"),
                divideOpacity: l("borderOpacity"),
                divideWidth: l("borderWidth"),
                dropShadow: {
                    sm: "0 1px 1px rgba(0,0,0,0.05)",
                    DEFAULT: ["0 1px 2px rgba(0,0,0,0.1)", "0 1px 1px rgba(0,0,0,0.06)"],
                    md: ["0 4px 3px rgba(0,0,0,0.07)", "0 2px 2px rgba(0,0,0,0.06)"],
                    lg: ["0 10px 8px rgba(0,0,0,0.04)", "0 4px 3px rgba(0,0,0,0.1)"],
                    xl: ["0 20px 13px rgba(0,0,0,0.03)", "0 8px 5px rgba(0,0,0,0.08)"],
                    "2xl": "0 25px 25px rgba(0,0,0,0.15)",
                    none: "0 0 #0000"
                },
                fill: ({
                    theme: e
                }) => ({ ...e("colors"),
                    none: "none"
                }),
                grayscale: {
                    DEFAULT: "100%",
                    0: "0"
                },
                hueRotate: {
                    0: "0deg",
                    15: "15deg",
                    30: "30deg",
                    60: "60deg",
                    90: "90deg",
                    180: "180deg"
                },
                invert: {
                    DEFAULT: "100%",
                    0: "0"
                },
                flex: {
                    1: "1 1 0%",
                    auto: "1 1 auto",
                    initial: "0 1 auto",
                    none: "none"
                },
                flexBasis: ({
                    theme: e
                }) => ({ ...e("spacing"),
                    ...n(2, 6),
                    ...n(12, 12),
                    auto: "auto",
                    full: "100%"
                }),
                flexGrow: {
                    DEFAULT: 1,
                    0: 0
                },
                flexShrink: {
                    DEFAULT: 1,
                    0: 0
                },
                fontFamily: {
                    sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),
                    serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),
                    mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")
                },
                fontSize: {
                    xs: ["0.75rem", "1rem"],
                    sm: ["0.875rem", "1.25rem"],
                    base: ["1rem", "1.5rem"],
                    lg: ["1.125rem", "1.75rem"],
                    xl: ["1.25rem", "1.75rem"],
                    "2xl": ["1.5rem", "2rem"],
                    "3xl": ["1.875rem", "2.25rem"],
                    "4xl": ["2.25rem", "2.5rem"],
                    "5xl": ["3rem", "1"],
                    "6xl": ["3.75rem", "1"],
                    "7xl": ["4.5rem", "1"],
                    "8xl": ["6rem", "1"],
                    "9xl": ["8rem", "1"]
                },
                fontWeight: {
                    thin: "100",
                    extralight: "200",
                    light: "300",
                    normal: "400",
                    medium: "500",
                    semibold: "600",
                    bold: "700",
                    extrabold: "800",
                    black: "900"
                },
                gap: l("spacing"),
                gradientColorStops: l("colors"),
                gridAutoColumns: {
                    auto: "auto",
                    min: "min-content",
                    max: "max-content",
                    fr: "minmax(0,1fr)"
                },
                gridAutoRows: {
                    auto: "auto",
                    min: "min-content",
                    max: "max-content",
                    fr: "minmax(0,1fr)"
                },
                gridColumn: {
                    auto: "auto",
                    "span-full": "1 / -1"
                },
                gridRow: {
                    auto: "auto",
                    "span-full": "1 / -1"
                },
                gridTemplateColumns: {
                    none: "none"
                },
                gridTemplateRows: {
                    none: "none"
                },
                height: ({
                    theme: e
                }) => ({ ...e("spacing"),
                    ...n(2, 6),
                    min: "min-content",
                    max: "max-content",
                    fit: "fit-content",
                    auto: "auto",
                    full: "100%",
                    screen: "100vh"
                }),
                inset: ({
                    theme: e
                }) => ({ ...e("spacing"),
                    ...n(2, 4),
                    auto: "auto",
                    full: "100%"
                }),
                keyframes: {
                    spin: {
                        from: {
                            transform: "rotate(0deg)"
                        },
                        to: {
                            transform: "rotate(360deg)"
                        }
                    },
                    ping: {
                        "0%": {
                            transform: "scale(1)",
                            opacity: "1"
                        },
                        "75%,100%": {
                            transform: "scale(2)",
                            opacity: "0"
                        }
                    },
                    pulse: {
                        "0%,100%": {
                            opacity: "1"
                        },
                        "50%": {
                            opacity: ".5"
                        }
                    },
                    bounce: {
                        "0%, 100%": {
                            transform: "translateY(-25%)",
                            animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
                        },
                        "50%": {
                            transform: "none",
                            animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
                        }
                    }
                },
                letterSpacing: {
                    tighter: "-0.05em",
                    tight: "-0.025em",
                    normal: "0em",
                    wide: "0.025em",
                    wider: "0.05em",
                    widest: "0.1em"
                },
                lineHeight: { ...a(10, "rem", 4, 3),
                    none: "1",
                    tight: "1.25",
                    snug: "1.375",
                    normal: "1.5",
                    relaxed: "1.625",
                    loose: "2"
                },
                margin: ({
                    theme: e
                }) => ({
                    auto: "auto",
                    ...e("spacing")
                }),
                maxHeight: ({
                    theme: e
                }) => ({
                    full: "100%",
                    min: "min-content",
                    max: "max-content",
                    fit: "fit-content",
                    screen: "100vh",
                    ...e("spacing")
                }),
                maxWidth: ({
                    theme: e,
                    breakpoints: t
                }) => ({ ...t(e("screens")),
                    none: "none",
                    0: "0rem",
                    xs: "20rem",
                    sm: "24rem",
                    md: "28rem",
                    lg: "32rem",
                    xl: "36rem",
                    "2xl": "42rem",
                    "3xl": "48rem",
                    "4xl": "56rem",
                    "5xl": "64rem",
                    "6xl": "72rem",
                    "7xl": "80rem",
                    full: "100%",
                    min: "min-content",
                    max: "max-content",
                    fit: "fit-content",
                    prose: "65ch"
                }),
                minHeight: {
                    0: "0px",
                    full: "100%",
                    min: "min-content",
                    max: "max-content",
                    fit: "fit-content",
                    screen: "100vh"
                },
                minWidth: {
                    0: "0px",
                    full: "100%",
                    min: "min-content",
                    max: "max-content",
                    fit: "fit-content"
                },
                opacity: { ...a(100, "", 100, 0, 10),
                    5: "0.05",
                    25: "0.25",
                    75: "0.75",
                    95: "0.95"
                },
                order: {
                    first: "-9999",
                    last: "9999",
                    none: "0"
                },
                padding: l("spacing"),
                placeholderColor: l("colors"),
                placeholderOpacity: l("opacity"),
                outlineColor: l("colors"),
                outlineOffset: i(8, "px"),
                outlineWidth: i(8, "px"),
                ringColor: ({
                    theme: e
                }) => ({ ...e("colors"),
                    DEFAULT: "#3b82f6"
                }),
                ringOffsetColor: l("colors"),
                ringOffsetWidth: i(8, "px"),
                ringOpacity: ({
                    theme: e
                }) => ({ ...e("opacity"),
                    DEFAULT: "0.5"
                }),
                ringWidth: {
                    DEFAULT: "3px",
                    ...i(8, "px")
                },
                rotate: { ...i(2, "deg"),
                    ...i(12, "deg", 3),
                    ...i(180, "deg", 45)
                },
                saturate: a(200, "", 100, 0, 50),
                scale: { ...a(150, "", 100, 0, 50),
                    ...a(110, "", 100, 90, 5),
                    75: "0.75",
                    125: "1.25"
                },
                scrollMargin: l("spacing"),
                scrollPadding: l("spacing"),
                sepia: {
                    0: "0",
                    DEFAULT: "100%"
                },
                skew: { ...i(2, "deg"),
                    ...i(12, "deg", 3)
                },
                space: l("spacing"),
                stroke: ({
                    theme: e
                }) => ({ ...e("colors"),
                    none: "none"
                }),
                strokeWidth: a(2),
                textColor: l("colors"),
                textDecorationColor: l("colors"),
                textDecorationThickness: {
                    "from-font": "from-font",
                    auto: "auto",
                    ...i(8, "px")
                },
                textUnderlineOffset: {
                    auto: "auto",
                    ...i(8, "px")
                },
                textIndent: l("spacing"),
                textOpacity: l("opacity"),
                transitionDuration: ({
                    theme: e
                }) => ({ ...e("durations"),
                    DEFAULT: "150ms"
                }),
                transitionDelay: l("durations"),
                transitionProperty: {
                    none: "none",
                    all: "all",
                    DEFAULT: "color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",
                    colors: "color,background-color,border-color,text-decoration-color,fill,stroke",
                    opacity: "opacity",
                    shadow: "box-shadow",
                    transform: "transform"
                },
                transitionTimingFunction: {
                    DEFAULT: "cubic-bezier(0.4,0,0.2,1)",
                    linear: "linear",
                    in: "cubic-bezier(0.4,0,1,1)",
                    out: "cubic-bezier(0,0,0.2,1)",
                    "in-out": "cubic-bezier(0.4,0,0.2,1)"
                },
                translate: ({
                    theme: e
                }) => ({ ...e("spacing"),
                    ...n(2, 4),
                    full: "100%"
                }),
                width: ({
                    theme: e
                }) => ({
                    min: "min-content",
                    max: "max-content",
                    fit: "fit-content",
                    screen: "100vw",
                    ...e("flexBasis")
                }),
                willChange: {
                    scroll: "scroll-position"
                },
                zIndex: { ...a(50, "", 1, 0, 10),
                    auto: "auto"
                }
            };

            function n(e, t) {
                let r = {};
                do
                    for (var o = 1; o < e; o++) r[`${o}/${e}`] = Number((o / e * 100).toFixed(6)) + "%"; while (++e <= t);
                return r
            }

            function i(e, t, r = 0) {
                let o = {};
                for (; r <= e; r = 2 * r || 1) o[r] = r + t;
                return o
            }

            function a(e, t = "", r = 1, o = 0, n = 1, i = {}) {
                for (; o <= e; o += n) i[o] = o / r + t;
                return i
            }

            function l(e) {
                return ({
                    theme: t
                }) => t(e)
            }
            let s = {
                "*,::before,::after": {
                    boxSizing: "border-box",
                    borderWidth: "0",
                    borderStyle: "solid",
                    borderColor: "theme(borderColor.DEFAULT, currentColor)"
                },
                "::before,::after": {
                    "--tw-content": "''"
                },
                html: {
                    lineHeight: 1.5,
                    WebkitTextSizeAdjust: "100%",
                    MozTabSize: "4",
                    tabSize: 4,
                    fontFamily: `theme(fontFamily.sans, ${o.fontFamily.sans})`,
                    fontFeatureSettings: "theme(fontFamily.sans[1].fontFeatureSettings, normal)"
                },
                body: {
                    margin: "0",
                    lineHeight: "inherit"
                },
                hr: {
                    height: "0",
                    color: "inherit",
                    borderTopWidth: "1px"
                },
                "abbr:where([title])": {
                    textDecoration: "underline dotted"
                },
                "h1,h2,h3,h4,h5,h6": {
                    fontSize: "inherit",
                    fontWeight: "inherit"
                },
                a: {
                    color: "inherit",
                    textDecoration: "inherit"
                },
                "b,strong": {
                    fontWeight: "bolder"
                },
                "code,kbd,samp,pre": {
                    fontFamily: `theme(fontFamily.mono, ${o.fontFamily.mono})`,
                    fontFeatureSettings: "theme(fontFamily.mono[1].fontFeatureSettings, normal)",
                    fontSize: "1em"
                },
                small: {
                    fontSize: "80%"
                },
                "sub,sup": {
                    fontSize: "75%",
                    lineHeight: 0,
                    position: "relative",
                    verticalAlign: "baseline"
                },
                sub: {
                    bottom: "-0.25em"
                },
                sup: {
                    top: "-0.5em"
                },
                table: {
                    textIndent: "0",
                    borderColor: "inherit",
                    borderCollapse: "collapse"
                },
                "button,input,optgroup,select,textarea": {
                    fontFamily: "inherit",
                    fontSize: "100%",
                    lineHeight: "inherit",
                    color: "inherit",
                    margin: "0",
                    padding: "0"
                },
                "button,select": {
                    textTransform: "none"
                },
                "button,[type='button'],[type='reset'],[type='submit']": {
                    WebkitAppearance: "button",
                    backgroundColor: "transparent",
                    backgroundImage: "none"
                },
                ":-moz-focusring": {
                    outline: "auto"
                },
                ":-moz-ui-invalid": {
                    boxShadow: "none"
                },
                progress: {
                    verticalAlign: "baseline"
                },
                "::-webkit-inner-spin-button,::-webkit-outer-spin-button": {
                    height: "auto"
                },
                "[type='search']": {
                    WebkitAppearance: "textfield",
                    outlineOffset: "-2px"
                },
                "::-webkit-search-decoration": {
                    WebkitAppearance: "none"
                },
                "::-webkit-file-upload-button": {
                    WebkitAppearance: "button",
                    font: "inherit"
                },
                summary: {
                    display: "list-item"
                },
                "blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre": {
                    margin: "0"
                },
                fieldset: {
                    margin: "0",
                    padding: "0"
                },
                legend: {
                    padding: "0"
                },
                "ol,ul,menu": {
                    listStyle: "none",
                    margin: "0",
                    padding: "0"
                },
                textarea: {
                    resize: "vertical"
                },
                "input::placeholder,textarea::placeholder": {
                    opacity: 1,
                    color: "theme(colors.gray.400, #9ca3af)"
                },
                'button,[role="button"]': {
                    cursor: "pointer"
                },
                ":disabled": {
                    cursor: "default"
                },
                "img,svg,video,canvas,audio,iframe,embed,object": {
                    display: "block",
                    verticalAlign: "middle"
                },
                "img,video": {
                    maxWidth: "100%",
                    height: "auto"
                },
                "[hidden]": {
                    display: "none"
                }
            };
            var c = r(86678);
            let d = [(0, c.EQ)("\\[([-\\w]+):(.+)]", ({
                1: e,
                2: t
            }, r) => ({
                "@layer overrides": {
                    "&": {
                        [e]: (0, c.iE)(`[${t}]`, "", r)
                    }
                }
            })), (0, c.EQ)("(group|peer)([~/][^-[]+)?", ({
                input: e
            }, {
                h: t
            }) => [{
                c: t(e)
            }]), (0, c.wT)("aspect-", "aspectRatio"), (0, c.EQ)("container", (e, {
                theme: t
            }) => {
                let {
                    screens: r = t("screens"),
                    center: o,
                    padding: n
                } = t("container"), i = {
                    width: "100%",
                    marginRight: o && "auto",
                    marginLeft: o && "auto",
                    ...a("xs")
                };
                for (let e in r) {
                    let t = r[e];
                    "string" == typeof t && (i[(0, c.zJ)(t)] = {
                        "&": {
                            maxWidth: t,
                            ...a(e)
                        }
                    })
                }
                return i;

                function a(e) {
                    let t = n && ("string" == typeof n ? n : n[e] || n.DEFAULT);
                    if (t) return {
                        paddingRight: t,
                        paddingLeft: t
                    }
                }
            }), (0, c.wT)("content-", "content", ({
                _: e
            }) => ({
                "--tw-content": e,
                content: "var(--tw-content)"
            })), (0, c.EQ)("(?:box-)?decoration-(slice|clone)", "boxDecorationBreak"), (0, c.EQ)("box-(border|content)", "boxSizing", ({
                1: e
            }) => e + "-box"), (0, c.EQ)("hidden", {
                display: "none"
            }), (0, c.EQ)("table-(auto|fixed)", "tableLayout"), (0, c.EQ)(["(block|flex|table|grid|inline|contents|flow-root|list-item)", "(inline-(block|flex|table|grid))", "(table-(caption|cell|column|row|(column|row|footer|header)-group))"], "display"), "(float)-(left|right|none)", "(clear)-(left|right|none|both)", "(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)", "(isolation)-(auto)", (0, c.EQ)("isolate", "isolation"), (0, c.EQ)("object-(contain|cover|fill|none|scale-down)", "objectFit"), (0, c.wT)("object-", "objectPosition"), (0, c.EQ)("object-(top|bottom|center|(left|right)(-(top|bottom))?)", "objectPosition", f), (0, c.EQ)("overscroll(-[xy])?-(auto|contain|none)", ({
                1: e = "",
                2: t
            }) => ({
                ["overscroll-behavior" + e]: t
            })), (0, c.EQ)("(static|fixed|absolute|relative|sticky)", "position"), (0, c.wT)("-?inset(-[xy])?(?:$|-)", "inset", ({
                1: e,
                _: t
            }) => ({
                top: "-x" != e && t,
                right: "-y" != e && t,
                bottom: "-x" != e && t,
                left: "-y" != e && t
            })), (0, c.wT)("-?(top|bottom|left|right)(?:$|-)", "inset"), (0, c.EQ)("(visible|collapse)", "visibility"), (0, c.EQ)("invisible", {
                visibility: "hidden"
            }), (0, c.wT)("-?z-", "zIndex"), (0, c.EQ)("flex-((row|col)(-reverse)?)", "flexDirection", p), (0, c.EQ)("flex-(wrap|wrap-reverse|nowrap)", "flexWrap"), (0, c.wT)("(flex-(?:grow|shrink))(?:$|-)"), (0, c.wT)("(flex)-"), (0, c.wT)("grow(?:$|-)", "flexGrow"), (0, c.wT)("shrink(?:$|-)", "flexShrink"), (0, c.wT)("basis-", "flexBasis"), (0, c.wT)("-?(order)-"), "-?(order)-(\\d+)", (0, c.wT)("grid-cols-", "gridTemplateColumns"), (0, c.EQ)("grid-cols-(\\d+)", "gridTemplateColumns", k), (0, c.wT)("col-", "gridColumn"), (0, c.EQ)("col-(span)-(\\d+)", "gridColumn", v), (0, c.wT)("col-start-", "gridColumnStart"), (0, c.EQ)("col-start-(auto|\\d+)", "gridColumnStart"), (0, c.wT)("col-end-", "gridColumnEnd"), (0, c.EQ)("col-end-(auto|\\d+)", "gridColumnEnd"), (0, c.wT)("grid-rows-", "gridTemplateRows"), (0, c.EQ)("grid-rows-(\\d+)", "gridTemplateRows", k), (0, c.wT)("row-", "gridRow"), (0, c.EQ)("row-(span)-(\\d+)", "gridRow", v), (0, c.wT)("row-start-", "gridRowStart"), (0, c.EQ)("row-start-(auto|\\d+)", "gridRowStart"), (0, c.wT)("row-end-", "gridRowEnd"), (0, c.EQ)("row-end-(auto|\\d+)", "gridRowEnd"), (0, c.EQ)("grid-flow-((row|col)(-dense)?)", "gridAutoFlow", e => f(p(e))), (0, c.EQ)("grid-flow-(dense)", "gridAutoFlow"), (0, c.wT)("auto-cols-", "gridAutoColumns"), (0, c.wT)("auto-rows-", "gridAutoRows"), (0, c.wT)("gap-x(?:$|-)", "gap", "columnGap"), (0, c.wT)("gap-y(?:$|-)", "gap", "rowGap"), (0, c.wT)("gap(?:$|-)", "gap"), "(justify-(?:items|self))-", (0, c.EQ)("justify-", "justifyContent", m), (0, c.EQ)("(content|items|self)-", e => ({
                ["align-" + e[1]]: m(e)
            })), (0, c.EQ)("(place-(content|items|self))-", ({
                1: e,
                $$: t
            }) => ({
                [e]: ("wun".includes(t[3]) ? "space-" : "") + t
            })), (0, c.wT)("p([xytrbl])?(?:$|-)", "padding", b("padding")), (0, c.wT)("-?m([xytrbl])?(?:$|-)", "margin", b("margin")), (0, c.wT)("-?space-(x|y)(?:$|-)", "space", ({
                1: e,
                _: t
            }) => ({
                "&>:not([hidden])~:not([hidden])": {
                    [`--tw-space-${e}-reverse`]: "0",
                    ["margin-" + ({
                        y: "top",
                        x: "left"
                    })[e]]: `calc(${t} * calc(1 - var(--tw-space-${e}-reverse)))`,
                    ["margin-" + ({
                        y: "bottom",
                        x: "right"
                    })[e]]: `calc(${t} * var(--tw-space-${e}-reverse))`
                }
            })), (0, c.EQ)("space-(x|y)-reverse", ({
                1: e
            }) => ({
                "&>:not([hidden])~:not([hidden])": {
                    [`--tw-space-${e}-reverse`]: "1"
                }
            })), (0, c.wT)("w-", "width"), (0, c.wT)("min-w-", "minWidth"), (0, c.wT)("max-w-", "maxWidth"), (0, c.wT)("h-", "height"), (0, c.wT)("min-h-", "minHeight"), (0, c.wT)("max-h-", "maxHeight"), (0, c.wT)("font-", "fontWeight"), (0, c.wT)("font-", "fontFamily", ({
                _: e
            }) => "string" == typeof(e = (0, c._2)(e))[1] ? {
                fontFamily: g(e)
            } : {
                fontFamily: g(e[0]),
                ...e[1]
            }), (0, c.EQ)("antialiased", {
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale"
            }), (0, c.EQ)("subpixel-antialiased", {
                WebkitFontSmoothing: "auto",
                MozOsxFontSmoothing: "auto"
            }), (0, c.EQ)("italic", "fontStyle"), (0, c.EQ)("not-italic", {
                fontStyle: "normal"
            }), (0, c.EQ)("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)", ({
                1: e,
                2: t = "",
                3: r
            }) => "normal" == t ? {
                fontVariantNumeric: "normal"
            } : {
                ["--tw-" + (r ? "numeric-fraction" : "pt".includes(t[0]) ? "numeric-spacing" : t ? "numeric-figure" : e)]: e,
                fontVariantNumeric: "var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)",
                ...$({
                    "--tw-ordinal": "var(--tw-empty,/*!*/ /*!*/)",
                    "--tw-slashed-zero": "var(--tw-empty,/*!*/ /*!*/)",
                    "--tw-numeric-figure": "var(--tw-empty,/*!*/ /*!*/)",
                    "--tw-numeric-spacing": "var(--tw-empty,/*!*/ /*!*/)",
                    "--tw-numeric-fraction": "var(--tw-empty,/*!*/ /*!*/)"
                })
            }), (0, c.wT)("tracking-", "letterSpacing"), (0, c.wT)("leading-", "lineHeight"), (0, c.EQ)("list-(inside|outside)", "listStylePosition"), (0, c.wT)("list-", "listStyleType"), (0, c.EQ)("list-", "listStyleType"), (0, c.wT)("placeholder-opacity-", "placeholderOpacity", ({
                _: e
            }) => ({
                "&::placeholder": {
                    "--tw-placeholder-opacity": e
                }
            })), (0, c.sS)("placeholder-", {
                property: "color",
                selector: "&::placeholder"
            }), (0, c.EQ)("text-(left|center|right|justify|start|end)", "textAlign"), (0, c.EQ)("text-(ellipsis|clip)", "textOverflow"), (0, c.wT)("text-opacity-", "textOpacity", "--tw-text-opacity"), (0, c.sS)("text-", {
                property: "color"
            }), (0, c.wT)("text-", "fontSize", ({
                _: e
            }) => "string" == typeof e ? {
                fontSize: e
            } : {
                fontSize: e[0],
                ..."string" == typeof e[1] ? {
                    lineHeight: e[1]
                } : e[1]
            }), (0, c.wT)("indent-", "textIndent"), (0, c.EQ)("(overline|underline|line-through)", "textDecorationLine"), (0, c.EQ)("no-underline", {
                textDecorationLine: "none"
            }), (0, c.wT)("underline-offset-", "textUnderlineOffset"), (0, c.sS)("decoration-", {
                section: "textDecorationColor",
                opacityVariable: !1,
                opacitySection: "opacity"
            }), (0, c.wT)("decoration-", "textDecorationThickness"), (0, c.EQ)("decoration-", "textDecorationStyle"), (0, c.EQ)("(uppercase|lowercase|capitalize)", "textTransform"), (0, c.EQ)("normal-case", {
                textTransform: "none"
            }), (0, c.EQ)("truncate", {
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis"
            }), (0, c.EQ)("align-", "verticalAlign"), (0, c.EQ)("whitespace-", "whiteSpace"), (0, c.EQ)("break-normal", {
                wordBreak: "normal",
                overflowWrap: "normal"
            }), (0, c.EQ)("break-words", {
                overflowWrap: "break-word"
            }), (0, c.EQ)("break-all", {
                wordBreak: "break-all"
            }), (0, c.EQ)("break-keep", {
                wordBreak: "keep-all"
            }), (0, c.sS)("caret-", {
                opacityVariable: !1,
                opacitySection: "opacity"
            }), (0, c.sS)("accent-", {
                opacityVariable: !1,
                opacitySection: "opacity"
            }), (0, c.EQ)("bg-gradient-to-([trbl]|[tb][rl])", "backgroundImage", ({
                1: e
            }) => `linear-gradient(to ${u(e," ")},var(--tw-gradient-stops))`), (0, c.sS)("from-", {
                section: "gradientColorStops",
                opacityVariable: !1,
                opacitySection: "opacity"
            }, ({
                _: e
            }) => ({
                "--tw-gradient-from": e.value,
                "--tw-gradient-to": e.color({
                    opacityValue: "0"
                }),
                "--tw-gradient-stops": "var(--tw-gradient-from),var(--tw-gradient-to)"
            })), (0, c.sS)("via-", {
                section: "gradientColorStops",
                opacityVariable: !1,
                opacitySection: "opacity"
            }, ({
                _: e
            }) => ({
                "--tw-gradient-to": e.color({
                    opacityValue: "0"
                }),
                "--tw-gradient-stops": `var(--tw-gradient-from),${e.value},var(--tw-gradient-to)`
            })), (0, c.sS)("to-", {
                section: "gradientColorStops",
                property: "--tw-gradient-to",
                opacityVariable: !1,
                opacitySection: "opacity"
            }), (0, c.EQ)("bg-(fixed|local|scroll)", "backgroundAttachment"), (0, c.EQ)("bg-origin-(border|padding|content)", "backgroundOrigin", ({
                1: e
            }) => e + "-box"), (0, c.EQ)(["bg-(no-repeat|repeat(-[xy])?)", "bg-repeat-(round|space)"], "backgroundRepeat"), (0, c.EQ)("bg-blend-", "backgroundBlendMode"), (0, c.EQ)("bg-clip-(border|padding|content|text)", "backgroundClip", ({
                1: e
            }) => e + ("text" == e ? "" : "-box")), (0, c.wT)("bg-opacity-", "backgroundOpacity", "--tw-bg-opacity"), (0, c.sS)("bg-", {
                section: "backgroundColor"
            }), (0, c.wT)("bg-", "backgroundImage"), (0, c.wT)("bg-", "backgroundPosition"), (0, c.EQ)("bg-(top|bottom|center|(left|right)(-(top|bottom))?)", "backgroundPosition", f), (0, c.wT)("bg-", "backgroundSize"), (0, c.wT)("rounded(?:$|-)", "borderRadius"), (0, c.wT)("rounded-([trbl]|[tb][rl])(?:$|-)", "borderRadius", ({
                1: e,
                _: t
            }) => {
                let r = {
                    t: ["tl", "tr"],
                    r: ["tr", "br"],
                    b: ["bl", "br"],
                    l: ["bl", "tl"]
                }[e] || [e, e];
                return {
                    [`border-${u(r[0])}-radius`]: t,
                    [`border-${u(r[1])}-radius`]: t
                }
            }), (0, c.EQ)("border-(collapse|separate)", "borderCollapse"), (0, c.wT)("border-opacity(?:$|-)", "borderOpacity", "--tw-border-opacity"), (0, c.EQ)("border-(solid|dashed|dotted|double|none)", "borderStyle"), (0, c.wT)("border-spacing(-[xy])?(?:$|-)", "borderSpacing", ({
                1: e,
                _: t
            }) => ({ ...$({
                    "--tw-border-spacing-x": "0",
                    "--tw-border-spacing-y": "0"
                }),
                ["--tw-border-spacing" + (e || "-x")]: t,
                ["--tw-border-spacing" + (e || "-y")]: t,
                "border-spacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)"
            })), (0, c.sS)("border-([xytrbl])-", {
                section: "borderColor"
            }, b("border", "Color")), (0, c.sS)("border-"), (0, c.wT)("border-([xytrbl])(?:$|-)", "borderWidth", b("border", "Width")), (0, c.wT)("border(?:$|-)", "borderWidth"), (0, c.wT)("divide-opacity(?:$|-)", "divideOpacity", ({
                _: e
            }) => ({
                "&>:not([hidden])~:not([hidden])": {
                    "--tw-divide-opacity": e
                }
            })), (0, c.EQ)("divide-(solid|dashed|dotted|double|none)", ({
                1: e
            }) => ({
                "&>:not([hidden])~:not([hidden])": {
                    borderStyle: e
                }
            })), (0, c.EQ)("divide-([xy]-reverse)", ({
                1: e
            }) => ({
                "&>:not([hidden])~:not([hidden])": {
                    ["--tw-divide-" + e]: "1"
                }
            })), (0, c.wT)("divide-([xy])(?:$|-)", "divideWidth", ({
                1: e,
                _: t
            }) => {
                let r = {
                    x: "lr",
                    y: "tb"
                }[e];
                return {
                    "&>:not([hidden])~:not([hidden])": {
                        [`--tw-divide-${e}-reverse`]: "0",
                        [`border-${u(r[0])}Width`]: `calc(${t} * calc(1 - var(--tw-divide-${e}-reverse)))`,
                        [`border-${u(r[1])}Width`]: `calc(${t} * var(--tw-divide-${e}-reverse))`
                    }
                }
            }), (0, c.sS)("divide-", {
                property: "borderColor",
                selector: "&>:not([hidden])~:not([hidden])"
            }), (0, c.wT)("ring-opacity(?:$|-)", "ringOpacity", "--tw-ring-opacity"), (0, c.sS)("ring-offset-", {
                property: "--tw-ring-offset-color",
                opacityVariable: !1
            }), (0, c.wT)("ring-offset(?:$|-)", "ringOffsetWidth", "--tw-ring-offset-width"), (0, c.EQ)("ring-inset", {
                "--tw-ring-inset": "inset"
            }), (0, c.sS)("ring-", {
                property: "--tw-ring-color"
            }), (0, c.wT)("ring(?:$|-)", "ringWidth", ({
                _: e
            }, {
                theme: t
            }) => ({ ...$({
                    "--tw-ring-offset-shadow": "0 0 #0000",
                    "--tw-ring-shadow": "0 0 #0000",
                    "--tw-shadow": "0 0 #0000",
                    "--tw-shadow-colored": "0 0 #0000",
                    "&": {
                        "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
                        "--tw-ring-offset-width": t("ringOffsetWidth", "", "0px"),
                        "--tw-ring-offset-color": (0, c.jU)(t("ringOffsetColor", "", "#fff")),
                        "--tw-ring-color": (0, c.jU)(t("ringColor", "", "#93c5fd"), {
                            opacityVariable: "--tw-ring-opacity"
                        }),
                        "--tw-ring-opacity": t("ringOpacity", "", "0.5")
                    }
                }),
                "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
                "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${e} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
                boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)"
            })), (0, c.sS)("shadow-", {
                section: "boxShadowColor",
                opacityVariable: !1,
                opacitySection: "opacity"
            }, ({
                _: e
            }) => ({
                "--tw-shadow-color": e.value,
                "--tw-shadow": "var(--tw-shadow-colored)"
            })), (0, c.wT)("shadow(?:$|-)", "boxShadow", ({
                _: e
            }) => ({ ...$({
                    "--tw-ring-offset-shadow": "0 0 #0000",
                    "--tw-ring-shadow": "0 0 #0000",
                    "--tw-shadow": "0 0 #0000",
                    "--tw-shadow-colored": "0 0 #0000"
                }),
                "--tw-shadow": g(e),
                "--tw-shadow-colored": g(e).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g, "$1var(--tw-shadow-color)$2"),
                boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)"
            })), (0, c.wT)("(opacity)-"), (0, c.EQ)("mix-blend-", "mixBlendMode"), ...h(), ...h("backdrop-"), (0, c.wT)("transition(?:$|-)", "transitionProperty", (e, {
                theme: t
            }) => ({
                transitionProperty: g(e),
                transitionTimingFunction: "none" == e._ ? void 0 : g(t("transitionTimingFunction", "")),
                transitionDuration: "none" == e._ ? void 0 : g(t("transitionDuration", ""))
            })), (0, c.wT)("duration(?:$|-)", "transitionDuration", "transitionDuration", g), (0, c.wT)("ease(?:$|-)", "transitionTimingFunction", "transitionTimingFunction", g), (0, c.wT)("delay(?:$|-)", "transitionDelay", "transitionDelay", g), (0, c.wT)("animate(?:$|-)", "animation", (e, {
                theme: t,
                h: r,
                e: o
            }) => {
                let n = g(e),
                    i = n.split(" "),
                    a = t("keyframes", i[0]);
                return a ? {
                    ["@keyframes " + (i[0] = o(r(i[0])))]: a,
                    animation: i.join(" ")
                } : {
                    animation: n
                }
            }), "(transform)-(none)", (0, c.EQ)("transform", x), (0, c.EQ)("transform-(cpu|gpu)", ({
                1: e
            }) => ({
                "--tw-transform": y("gpu" == e)
            })), (0, c.wT)("scale(-[xy])?-", "scale", ({
                1: e,
                _: t
            }) => ({
                ["--tw-scale" + (e || "-x")]: t,
                ["--tw-scale" + (e || "-y")]: t,
                ...x()
            })), (0, c.wT)("-?(rotate)-", "rotate", w), (0, c.wT)("-?(translate-[xy])-", "translate", w), (0, c.wT)("-?(skew-[xy])-", "skew", w), (0, c.EQ)("origin-(center|((top|bottom)(-(left|right))?)|left|right)", "transformOrigin", f), "(appearance)-", (0, c.wT)("(columns)-"), "(columns)-(\\d+)", "(break-(?:before|after|inside))-", (0, c.wT)("(cursor)-"), "(cursor)-", (0, c.EQ)("snap-(none)", "scroll-snap-type"), (0, c.EQ)("snap-(x|y|both)", ({
                1: e
            }) => ({ ...$({
                    "--tw-scroll-snap-strictness": "proximity"
                }),
                "scroll-snap-type": e + " var(--tw-scroll-snap-strictness)"
            })), (0, c.EQ)("snap-(mandatory|proximity)", "--tw-scroll-snap-strictness"), (0, c.EQ)("snap-(?:(start|end|center)|align-(none))", "scroll-snap-align"), (0, c.EQ)("snap-(normal|always)", "scroll-snap-stop"), (0, c.EQ)("scroll-(auto|smooth)", "scroll-behavior"), (0, c.wT)("scroll-p([xytrbl])?(?:$|-)", "padding", b("scroll-padding")), (0, c.wT)("-?scroll-m([xytrbl])?(?:$|-)", "scroll-margin", b("scroll-margin")), (0, c.EQ)("touch-(auto|none|manipulation)", "touch-action"), (0, c.EQ)("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))", ({
                1: e,
                2: t,
                3: r
            }) => ({ ...$({
                    "--tw-pan-x": "var(--tw-empty,/*!*/ /*!*/)",
                    "--tw-pan-y": "var(--tw-empty,/*!*/ /*!*/)",
                    "--tw-pinch-zoom": "var(--tw-empty,/*!*/ /*!*/)",
                    "--tw-touch-action": "var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)"
                }),
                [`--tw-${t?"pan-x":r?"pan-y":e}`]: e,
                "touch-action": "var(--tw-touch-action)"
            })), (0, c.EQ)("outline-none", {
                outline: "2px solid transparent",
                "outline-offset": "2px"
            }), (0, c.EQ)("outline", {
                outlineStyle: "solid"
            }), (0, c.EQ)("outline-(dashed|dotted|double)", "outlineStyle"), (0, c.wT)("-?(outline-offset)-"), (0, c.sS)("outline-", {
                opacityVariable: !1,
                opacitySection: "opacity"
            }), (0, c.wT)("outline-", "outlineWidth"), "(pointer-events)-", (0, c.wT)("(will-change)-"), "(will-change)-", ["resize(?:-(none|x|y))?", "resize", ({
                1: e
            }) => ({
                x: "horizontal",
                y: "vertical"
            })[e] || e || "both"], (0, c.EQ)("select-(none|text|all|auto)", "userSelect"), (0, c.sS)("fill-", {
                section: "fill",
                opacityVariable: !1,
                opacitySection: "opacity"
            }), (0, c.sS)("stroke-", {
                section: "stroke",
                opacityVariable: !1,
                opacitySection: "opacity"
            }), (0, c.wT)("stroke-", "strokeWidth"), (0, c.EQ)("sr-only", {
                position: "absolute",
                width: "1px",
                height: "1px",
                padding: "0",
                margin: "-1px",
                overflow: "hidden",
                whiteSpace: "nowrap",
                clip: "rect(0,0,0,0)",
                borderWidth: "0"
            }), (0, c.EQ)("not-sr-only", {
                position: "static",
                width: "auto",
                height: "auto",
                padding: "0",
                margin: "0",
                overflow: "visible",
                whiteSpace: "normal",
                clip: "auto"
            })];

            function f(e) {
                return ("string" == typeof e ? e : e[1]).replace(/-/g, " ").trim()
            }

            function p(e) {
                return ("string" == typeof e ? e : e[1]).replace("col", "column")
            }

            function u(e, t = "-") {
                let r = [];
                for (let t of e) r.push({
                    t: "top",
                    r: "right",
                    b: "bottom",
                    l: "left"
                }[t]);
                return r.join(t)
            }

            function g(e) {
                return e && "" + (e._ || e)
            }

            function m({
                $$: e
            }) {
                return (({
                    r: "flex-",
                    "": "flex-",
                    w: "space-",
                    u: "space-",
                    n: "space-"
                })[e[3] || ""] || "") + e
            }

            function b(e, t = "") {
                return ({
                    1: r,
                    _: o
                }) => {
                    let n = {
                        x: "lr",
                        y: "tb"
                    }[r] || r + r;
                    return n ? { ...(0, c.hG)(e + "-" + u(n[0]) + t, o),
                        ...(0, c.hG)(e + "-" + u(n[1]) + t, o)
                    } : (0, c.hG)(e + t, o)
                }
            }

            function h(e = "") {
                let t = ["blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", e && "opacity", "saturate", "sepia", !e && "drop-shadow"].filter(Boolean),
                    r = {};
                for (let o of t) r[`--tw-${e}${o}`] = "var(--tw-empty,/*!*/ /*!*/)";
                return r = { ...$(r),
                    [`${e}filter`]: t.map(t => `var(--tw-${e}${t})`).join(" ")
                }, [`(${e}filter)-(none)`, (0, c.EQ)(`${e}filter`, r), ...t.map(t => (0, c.wT)(`${"h"==t[0]?"-?":""}(${e}${t})(?:$|-)`, t, ({
                    1: e,
                    _: o
                }) => ({
                    [`--tw-${e}`]: (0, c._2)(o).map(e => `${t}(${e})`).join(" "),
                    ...r
                })))]
            }

            function w({
                1: e,
                _: t
            }) {
                return {
                    ["--tw-" + e]: t,
                    ...x()
                }
            }

            function x() {
                return { ...$({
                        "--tw-translate-x": "0",
                        "--tw-translate-y": "0",
                        "--tw-rotate": "0",
                        "--tw-skew-x": "0",
                        "--tw-skew-y": "0",
                        "--tw-scale-x": "1",
                        "--tw-scale-y": "1",
                        "--tw-transform": y()
                    }),
                    transform: "var(--tw-transform)"
                }
            }

            function y(e) {
                return [e ? "translate3d(var(--tw-translate-x),var(--tw-translate-y),0)" : "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))", "rotate(var(--tw-rotate))", "skewX(var(--tw-skew-x))", "skewY(var(--tw-skew-y))", "scaleX(var(--tw-scale-x))", "scaleY(var(--tw-scale-y))"].join(" ")
            }

            function v({
                1: e,
                2: t
            }) {
                return `${e} ${t} / ${e} ${t}`
            }

            function k({
                1: e
            }) {
                return `repeat(${e},minmax(0,1fr))`
            }

            function $(e) {
                return {
                    "@layer defaults": {
                        "*,::before,::after": e,
                        "::backdrop": e
                    }
                }
            }
            let E = [
                    ["sticky", "@supports ((position: -webkit-sticky) or (position:sticky))"],
                    ["motion-reduce", "@media (prefers-reduced-motion:reduce)"],
                    ["motion-safe", "@media (prefers-reduced-motion:no-preference)"],
                    ["print", "@media print"],
                    ["(portrait|landscape)", ({
                        1: e
                    }) => `@media (orientation:${e})`],
                    ["contrast-(more|less)", ({
                        1: e
                    }) => `@media (prefers-contrast:${e})`],
                    ["(first-(letter|line)|placeholder|backdrop|before|after)", ({
                        1: e
                    }) => `&::${e}`],
                    ["(marker|selection)", ({
                        1: e
                    }) => `& *::${e},&::${e}`],
                    ["file", "&::file-selector-button"],
                    ["(first|last|only)", ({
                        1: e
                    }) => `&:${e}-child`],
                    ["even", "&:nth-child(2n)"],
                    ["odd", "&:nth-child(odd)"],
                    ["open", "&[open]"],
                    ["(aria|data)-", ({
                        1: e,
                        $$: t
                    }, r) => t && `&[${e}-${r.theme(e,t)||(0,c.iE)(t,"",r)||`${t}="true"`}]`],
                    ["((group|peer)(~[^-[]+)?)(-\\[(.+)]|[-[].+?)(\\/.+)?", ({
                        2: e,
                        3: t = "",
                        4: r,
                        5: o = "",
                        6: n = t
                    }, {
                        e: i,
                        h: a,
                        v: l
                    }) => {
                        let s = (0, c.Fv)(o) || ("[" == r[0] ? r : l(r.slice(1)));
                        return `${(s.includes("&")?s:"&"+s).replace(/&/g,`:merge(.${i(a(e+n))})`)}${"p"==e[0]?"~":" "}&`
                    }],
                    ["(ltr|rtl)", ({
                        1: e
                    }) => `[dir="${e}"] &`],
                    ["supports-", ({
                        $$: e
                    }, t) => {
                        if (e && (e = t.theme("supports", e) || (0, c.iE)(e, "", t)), e) return e.includes(":") || (e += ":var(--tw)"), /^\w*\s*\(/.test(e) || (e = `(${e})`), `@supports ${e.replace(/\b(and|or|not)\b/g," $1 ").trim()}`
                    }],
                    ["max-", ({
                        $$: e
                    }, t) => {
                        if (e && (e = t.theme("screens", e) || (0, c.iE)(e, "", t)), "string" == typeof e) return `@media not all and (min-width:${e})`
                    }],
                    ["min-", ({
                        $$: e
                    }, t) => (e && (e = (0, c.iE)(e, "", t)), e && `@media (min-width:${e})`)],
                    [/^\[(.+)]$/, ({
                        1: e
                    }) => /[&@]/.test(e) && (0, c.Fv)(e).replace(/[}]+$/, "").split("{")]
                ],
                T = {
                    __proto__: null,
                    slate: {
                        50: "#f8fafc",
                        100: "#f1f5f9",
                        200: "#e2e8f0",
                        300: "#cbd5e1",
                        400: "#94a3b8",
                        500: "#64748b",
                        600: "#475569",
                        700: "#334155",
                        800: "#1e293b",
                        900: "#0f172a"
                    },
                    gray: {
                        50: "#f9fafb",
                        100: "#f3f4f6",
                        200: "#e5e7eb",
                        300: "#d1d5db",
                        400: "#9ca3af",
                        500: "#6b7280",
                        600: "#4b5563",
                        700: "#374151",
                        800: "#1f2937",
                        900: "#111827"
                    },
                    zinc: {
                        50: "#fafafa",
                        100: "#f4f4f5",
                        200: "#e4e4e7",
                        300: "#d4d4d8",
                        400: "#a1a1aa",
                        500: "#71717a",
                        600: "#52525b",
                        700: "#3f3f46",
                        800: "#27272a",
                        900: "#18181b"
                    },
                    neutral: {
                        50: "#fafafa",
                        100: "#f5f5f5",
                        200: "#e5e5e5",
                        300: "#d4d4d4",
                        400: "#a3a3a3",
                        500: "#737373",
                        600: "#525252",
                        700: "#404040",
                        800: "#262626",
                        900: "#171717"
                    },
                    stone: {
                        50: "#fafaf9",
                        100: "#f5f5f4",
                        200: "#e7e5e4",
                        300: "#d6d3d1",
                        400: "#a8a29e",
                        500: "#78716c",
                        600: "#57534e",
                        700: "#44403c",
                        800: "#292524",
                        900: "#1c1917"
                    },
                    red: {
                        50: "#fef2f2",
                        100: "#fee2e2",
                        200: "#fecaca",
                        300: "#fca5a5",
                        400: "#f87171",
                        500: "#ef4444",
                        600: "#dc2626",
                        700: "#b91c1c",
                        800: "#991b1b",
                        900: "#7f1d1d"
                    },
                    orange: {
                        50: "#fff7ed",
                        100: "#ffedd5",
                        200: "#fed7aa",
                        300: "#fdba74",
                        400: "#fb923c",
                        500: "#f97316",
                        600: "#ea580c",
                        700: "#c2410c",
                        800: "#9a3412",
                        900: "#7c2d12"
                    },
                    amber: {
                        50: "#fffbeb",
                        100: "#fef3c7",
                        200: "#fde68a",
                        300: "#fcd34d",
                        400: "#fbbf24",
                        500: "#f59e0b",
                        600: "#d97706",
                        700: "#b45309",
                        800: "#92400e",
                        900: "#78350f"
                    },
                    yellow: {
                        50: "#fefce8",
                        100: "#fef9c3",
                        200: "#fef08a",
                        300: "#fde047",
                        400: "#facc15",
                        500: "#eab308",
                        600: "#ca8a04",
                        700: "#a16207",
                        800: "#854d0e",
                        900: "#713f12"
                    },
                    lime: {
                        50: "#f7fee7",
                        100: "#ecfccb",
                        200: "#d9f99d",
                        300: "#bef264",
                        400: "#a3e635",
                        500: "#84cc16",
                        600: "#65a30d",
                        700: "#4d7c0f",
                        800: "#3f6212",
                        900: "#365314"
                    },
                    green: {
                        50: "#f0fdf4",
                        100: "#dcfce7",
                        200: "#bbf7d0",
                        300: "#86efac",
                        400: "#4ade80",
                        500: "#22c55e",
                        600: "#16a34a",
                        700: "#15803d",
                        800: "#166534",
                        900: "#14532d"
                    },
                    emerald: {
                        50: "#ecfdf5",
                        100: "#d1fae5",
                        200: "#a7f3d0",
                        300: "#6ee7b7",
                        400: "#34d399",
                        500: "#10b981",
                        600: "#059669",
                        700: "#047857",
                        800: "#065f46",
                        900: "#064e3b"
                    },
                    teal: {
                        50: "#f0fdfa",
                        100: "#ccfbf1",
                        200: "#99f6e4",
                        300: "#5eead4",
                        400: "#2dd4bf",
                        500: "#14b8a6",
                        600: "#0d9488",
                        700: "#0f766e",
                        800: "#115e59",
                        900: "#134e4a"
                    },
                    cyan: {
                        50: "#ecfeff",
                        100: "#cffafe",
                        200: "#a5f3fc",
                        300: "#67e8f9",
                        400: "#22d3ee",
                        500: "#06b6d4",
                        600: "#0891b2",
                        700: "#0e7490",
                        800: "#155e75",
                        900: "#164e63"
                    },
                    sky: {
                        50: "#f0f9ff",
                        100: "#e0f2fe",
                        200: "#bae6fd",
                        300: "#7dd3fc",
                        400: "#38bdf8",
                        500: "#0ea5e9",
                        600: "#0284c7",
                        700: "#0369a1",
                        800: "#075985",
                        900: "#0c4a6e"
                    },
                    blue: {
                        50: "#eff6ff",
                        100: "#dbeafe",
                        200: "#bfdbfe",
                        300: "#93c5fd",
                        400: "#60a5fa",
                        500: "#3b82f6",
                        600: "#2563eb",
                        700: "#1d4ed8",
                        800: "#1e40af",
                        900: "#1e3a8a"
                    },
                    indigo: {
                        50: "#eef2ff",
                        100: "#e0e7ff",
                        200: "#c7d2fe",
                        300: "#a5b4fc",
                        400: "#818cf8",
                        500: "#6366f1",
                        600: "#4f46e5",
                        700: "#4338ca",
                        800: "#3730a3",
                        900: "#312e81"
                    },
                    violet: {
                        50: "#f5f3ff",
                        100: "#ede9fe",
                        200: "#ddd6fe",
                        300: "#c4b5fd",
                        400: "#a78bfa",
                        500: "#8b5cf6",
                        600: "#7c3aed",
                        700: "#6d28d9",
                        800: "#5b21b6",
                        900: "#4c1d95"
                    },
                    purple: {
                        50: "#faf5ff",
                        100: "#f3e8ff",
                        200: "#e9d5ff",
                        300: "#d8b4fe",
                        400: "#c084fc",
                        500: "#a855f7",
                        600: "#9333ea",
                        700: "#7e22ce",
                        800: "#6b21a8",
                        900: "#581c87"
                    },
                    fuchsia: {
                        50: "#fdf4ff",
                        100: "#fae8ff",
                        200: "#f5d0fe",
                        300: "#f0abfc",
                        400: "#e879f9",
                        500: "#d946ef",
                        600: "#c026d3",
                        700: "#a21caf",
                        800: "#86198f",
                        900: "#701a75"
                    },
                    pink: {
                        50: "#fdf2f8",
                        100: "#fce7f3",
                        200: "#fbcfe8",
                        300: "#f9a8d4",
                        400: "#f472b6",
                        500: "#ec4899",
                        600: "#db2777",
                        700: "#be185d",
                        800: "#9d174d",
                        900: "#831843"
                    },
                    rose: {
                        50: "#fff1f2",
                        100: "#ffe4e6",
                        200: "#fecdd3",
                        300: "#fda4af",
                        400: "#fb7185",
                        500: "#f43f5e",
                        600: "#e11d48",
                        700: "#be123c",
                        800: "#9f1239",
                        900: "#881337"
                    }
                };

            function S({
                disablePreflight: e
            } = {}) {
                return function({
                    colors: e,
                    disablePreflight: t
                } = {}) {
                    return {
                        preflight: t ? void 0 : s,
                        theme: { ...o,
                            colors: {
                                inherit: "inherit",
                                current: "currentColor",
                                transparent: "transparent",
                                black: "#000",
                                white: "#fff",
                                ...e
                            }
                        },
                        variants: E,
                        rules: d,
                        finalize: e => e.n && e.d && e.r.some(e => /^&::(before|after)$/.test(e)) && !/(^|;)content:/.test(e.d) ? { ...e,
                            d: "content:var(--tw-content);" + e.d
                        } : e
                    }
                }({
                    colors: T,
                    disablePreflight: e
                })
            }
        }
    }
]);