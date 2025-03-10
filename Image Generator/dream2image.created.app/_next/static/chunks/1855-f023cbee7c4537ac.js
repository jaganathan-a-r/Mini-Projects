try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f4e64ea3-6ced-4d4b-a464-b91b907f246d", e._sentryDebugIdIdentifier = "sentry-dbid-f4e64ea3-6ced-4d4b-a464-b91b907f246d")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1855], {
        11855: function(e, t, r) {
            let o, n;
            r.d(t, {
                J: function() {
                    return ed
                }
            });
            var i = r(14978),
                l = r(24004),
                s = Object.getOwnPropertyNames,
                a = (o = {
                    "src/configs/tailwind/tokens/custom/typography.cjs" (e, t) {
                        "use strict";
                        var r = {
                                fontFamily: "'Inter', sans-serif",
                                fontStyle: "normal"
                            },
                            o = {
                                ".text-display-xxl": { ...r,
                                    fontWeight: 400,
                                    fontSize: "4.5rem",
                                    lineHeight: "120%"
                                },
                                ".text-display-xl": {
                                    fontWeight: 400,
                                    fontSize: "3.75rem",
                                    lineHeight: "120%"
                                },
                                ".text-display-lg": {
                                    fontWeight: 400,
                                    fontSize: "3rem",
                                    lineHeight: "120%"
                                },
                                ".text-display-md": {
                                    fontWeight: 400,
                                    fontSize: "2.25rem",
                                    lineHeight: "120%"
                                },
                                ".text-display-sm": {
                                    fontWeight: 400,
                                    fontSize: "1.875rem",
                                    lineHeight: "120%"
                                },
                                ".text-display-xs": {
                                    fontWeight: 400,
                                    fontSize: "1.5rem",
                                    lineHeight: "120%"
                                },
                                ".text-body-xl": { ...r,
                                    fontSize: "1.25rem",
                                    lineHeight: "150%",
                                    fontWeight: 400
                                },
                                ".text-body-lg": { ...r,
                                    fontSize: "1.125rem",
                                    lineHeight: "150%",
                                    fontWeight: 400
                                },
                                ".text-body-md": { ...r,
                                    fontSize: "1rem",
                                    lineHeight: "150%",
                                    fontWeight: 400
                                },
                                ".text-body-sm": { ...r,
                                    fontSize: ".875rem",
                                    lineHeight: "150%",
                                    fontWeight: 400
                                },
                                ".text-body-xs": { ...r,
                                    fontWeight: 400,
                                    fontSize: ".75rem",
                                    lineHeight: "136%"
                                },
                                ".text-body-xxs": { ...r,
                                    fontWeight: 400,
                                    fontSize: ".625rem",
                                    lineHeight: "120%"
                                }
                            },
                            n = {
                                ".text-h1": { ...r,
                                    fontWeight: 600,
                                    fontSize: "2.5rem",
                                    lineHeight: "120%"
                                },
                                ".text-h2": { ...r,
                                    fontWeight: 600,
                                    fontSize: "2rem",
                                    lineHeight: "120%"
                                },
                                ".text-h3": { ...r,
                                    fontWeight: 600,
                                    fontSize: "1.5rem",
                                    lineHeight: "120%"
                                },
                                ".text-h4": { ...r,
                                    fontWeight: 600,
                                    fontSize: "1.25rem",
                                    lineHeight: "120%"
                                },
                                ".text-h5": { ...r,
                                    fontWeight: 600,
                                    fontSize: "1rem",
                                    lineHeight: "120%"
                                },
                                ".text-h6": { ...r,
                                    fontWeight: 600,
                                    fontSize: ".875rem",
                                    lineHeight: "120%"
                                },
                                ".text-body-lg": { ...r,
                                    fontSize: "1rem",
                                    lineHeight: "150%",
                                    fontWeight: 400
                                },
                                ".text-body-md": { ...r,
                                    fontSize: "0.875rem",
                                    lineHeight: "150%",
                                    fontWeight: 400
                                },
                                ".text-body-sm": { ...r,
                                    fontSize: ".75rem",
                                    lineHeight: "150%",
                                    fontWeight: 400
                                },
                                ".text-body-xs": { ...r,
                                    fontWeight: 400,
                                    fontSize: ".75rem",
                                    lineHeight: "136%"
                                },
                                ".text-body-xxs": { ...r,
                                    fontWeight: 400,
                                    fontSize: ".625rem",
                                    lineHeight: "120%"
                                },
                                ".text-body-lg-heavy": { ...r,
                                    fontSize: "1rem",
                                    lineHeight: "150%",
                                    fontWeight: 600
                                },
                                ".text-body-md-heavy": { ...r,
                                    fontSize: "0.875rem",
                                    lineHeight: "150%",
                                    fontWeight: 600
                                },
                                ".text-body-sm-heavy": { ...r,
                                    fontSize: ".75rem",
                                    lineHeight: "150%",
                                    fontWeight: 600
                                },
                                ".text-body-xs-heavy": { ...r,
                                    fontSize: "0.75rem",
                                    lineHeight: "0.75rem",
                                    fontWeight: 600
                                },
                                ...o,
                                ".comeback-text-body-xs": {
                                    fontSize: "0.625rem",
                                    lineHeight: "140%",
                                    fontWeight: 400
                                },
                                ".comeback-text-body-sm": {
                                    fontSize: "0.75rem",
                                    lineHeight: "140%",
                                    fontWeight: 400
                                },
                                ".comeback-text-body-md": {
                                    fontSize: "0.875rem",
                                    lineHeight: "140%",
                                    fontWeight: 400
                                },
                                ".comeback-text-body-lg": {
                                    fontSize: "1rem",
                                    lineHeight: "140%",
                                    fontWeight: 400
                                },
                                ".comeback-text-body-xl": {
                                    fontSize: "1.125rem",
                                    lineHeight: "140%",
                                    fontWeight: 400
                                },
                                ".comeback-text-display-xs": {
                                    fontFamily: "'Instrument Sans', 'Inter', sans-serif",
                                    fontSize: "1.375rem",
                                    lineHeight: "140%",
                                    fontWeight: 400
                                },
                                ".comeback-text-display-sm": {
                                    fontFamily: "'Instrument Sans', 'Inter', sans-serif",
                                    fontSize: "1.625rem",
                                    lineHeight: "140%",
                                    fontWeight: 400
                                },
                                ".comeback-text-display-md": {
                                    fontFamily: "'Instrument Sans', 'Inter', sans-serif",
                                    fontSize: "1.875rem",
                                    lineHeight: "140%",
                                    fontWeight: 400
                                },
                                ".comeback-text-display-lg": {
                                    fontFamily: "'Instrument Sans', 'Inter', sans-serif",
                                    fontSize: "2.625rem",
                                    lineHeight: "140%",
                                    fontWeight: 400
                                },
                                ".comeback-text-display-xl": {
                                    fontFamily: "'Instrument Sans', 'Inter', sans-serif",
                                    fontSize: "3.375rem",
                                    lineHeight: "140%",
                                    fontWeight: 400
                                },
                                ".comeback-text-display-xxl": {
                                    fontFamily: "'Instrument Sans', 'Inter', sans-serif",
                                    fontSize: "4.375rem",
                                    lineHeight: "140%",
                                    fontWeight: 400
                                }
                            };
                        t.exports = { ...n
                        }
                    }
                }, function() {
                    return n || (0, o[s(o)[0]])((n = {
                        exports: {}
                    }).exports, n), n.exports
                }),
                d = e => {
                    let t = u(e),
                        {
                            conflictingClassGroups: r,
                            conflictingClassGroupModifiers: o
                        } = e;
                    return {
                        getClassGroupId: e => {
                            let r = e.split("-");
                            return "" === r[0] && 1 !== r.length && r.shift(), c(r, t) || f(e)
                        },
                        getConflictingClassGroupIds: (e, t) => {
                            let n = r[e] || [];
                            return t && o[e] ? [...n, ...o[e]] : n
                        }
                    }
                },
                c = (e, t) => {
                    var r;
                    if (0 === e.length) return t.classGroupId;
                    let o = e[0],
                        n = t.nextPart.get(o),
                        i = n ? c(e.slice(1), n) : void 0;
                    if (i) return i;
                    if (0 === t.validators.length) return;
                    let l = e.join("-");
                    return null === (r = t.validators.find(e => {
                        let {
                            validator: t
                        } = e;
                        return t(l)
                    })) || void 0 === r ? void 0 : r.classGroupId
                },
                p = /^\[(.+)\]$/,
                f = e => {
                    if (p.test(e)) {
                        let t = p.exec(e)[1],
                            r = null == t ? void 0 : t.substring(0, t.indexOf(":"));
                        if (r) return "arbitrary.." + r
                    }
                },
                u = e => {
                    let {
                        theme: t,
                        prefix: r
                    } = e, o = {
                        nextPart: new Map,
                        validators: []
                    };
                    return h(Object.entries(e.classGroups), r).forEach(e => {
                        let [r, n] = e;
                        b(n, o, r, t)
                    }), o
                },
                b = (e, t, r, o) => {
                    e.forEach(e => {
                        if ("string" == typeof e) {
                            ("" === e ? t : g(t, e)).classGroupId = r;
                            return
                        }
                        if ("function" == typeof e) {
                            if (m(e)) {
                                b(e(o), t, r, o);
                                return
                            }
                            t.validators.push({
                                validator: e,
                                classGroupId: r
                            });
                            return
                        }
                        Object.entries(e).forEach(e => {
                            let [n, i] = e;
                            b(i, g(t, n), r, o)
                        })
                    })
                },
                g = (e, t) => {
                    let r = e;
                    return t.split("-").forEach(e => {
                        r.nextPart.has(e) || r.nextPart.set(e, {
                            nextPart: new Map,
                            validators: []
                        }), r = r.nextPart.get(e)
                    }), r
                },
                m = e => e.isThemeGetter,
                h = (e, t) => t ? e.map(e => {
                    let [r, o] = e;
                    return [r, o.map(e => "string" == typeof e ? t + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map(e => {
                        let [r, o] = e;
                        return [t + r, o]
                    })) : e)]
                }) : e,
                x = e => {
                    if (e < 1) return {
                        get: () => void 0,
                        set: () => {}
                    };
                    let t = 0,
                        r = new Map,
                        o = new Map,
                        n = (n, i) => {
                            r.set(n, i), ++t > e && (t = 0, o = r, r = new Map)
                        };
                    return {
                        get(e) {
                            let t = r.get(e);
                            return void 0 !== t ? t : void 0 !== (t = o.get(e)) ? (n(e, t), t) : void 0
                        },
                        set(e, t) {
                            r.has(e) ? r.set(e, t) : n(e, t)
                        }
                    }
                },
                y = e => {
                    let {
                        separator: t,
                        experimentalParseClassName: r
                    } = e, o = 1 === t.length, n = t[0], i = t.length, l = e => {
                        let r;
                        let l = [],
                            s = 0,
                            a = 0;
                        for (let d = 0; d < e.length; d++) {
                            let c = e[d];
                            if (0 === s) {
                                if (c === n && (o || e.slice(d, d + i) === t)) {
                                    l.push(e.slice(a, d)), a = d + i;
                                    continue
                                }
                                if ("/" === c) {
                                    r = d;
                                    continue
                                }
                            }
                            "[" === c ? s++ : "]" === c && s--
                        }
                        let d = 0 === l.length ? e : e.substring(a),
                            c = d.startsWith("!"),
                            p = c ? d.substring(1) : d;
                        return {
                            modifiers: l,
                            hasImportantModifier: c,
                            baseClassName: p,
                            maybePostfixModifierPosition: r && r > a ? r - a : void 0
                        }
                    };
                    return r ? e => r({
                        className: e,
                        parseClassName: l
                    }) : l
                },
                v = e => {
                    if (e.length <= 1) return e;
                    let t = [],
                        r = [];
                    return e.forEach(e => {
                        "[" === e[0] ? (t.push(...r.sort(), e), r = []) : r.push(e)
                    }), t.push(...r.sort()), t
                },
                w = e => ({
                    cache: x(e.cacheSize),
                    parseClassName: y(e),
                    ...d(e)
                }),
                z = /\s+/,
                k = (e, t) => {
                    let {
                        parseClassName: r,
                        getClassGroupId: o,
                        getConflictingClassGroupIds: n
                    } = t, i = [], l = e.trim().split(z), s = "";
                    for (let e = l.length - 1; e >= 0; e -= 1) {
                        let t = l[e],
                            {
                                modifiers: a,
                                hasImportantModifier: d,
                                baseClassName: c,
                                maybePostfixModifierPosition: p
                            } = r(t),
                            f = !!p,
                            u = o(f ? c.substring(0, p) : c);
                        if (!u) {
                            if (!f || !(u = o(c))) {
                                s = t + (s.length > 0 ? " " + s : s);
                                continue
                            }
                            f = !1
                        }
                        let b = v(a).join(":"),
                            g = d ? b + "!" : b,
                            m = g + u;
                        if (i.includes(m)) continue;
                        i.push(m);
                        let h = n(u, f);
                        for (let e = 0; e < h.length; ++e) {
                            let t = h[e];
                            i.push(g + t)
                        }
                        s = t + (s.length > 0 ? " " + s : s)
                    }
                    return s
                };

            function S() {
                let e, t, r = 0,
                    o = "";
                for (; r < arguments.length;)(e = arguments[r++]) && (t = W(e)) && (o && (o += " "), o += t);
                return o
            }
            var W = e => {
                let t;
                if ("string" == typeof e) return e;
                let r = "";
                for (let o = 0; o < e.length; o++) e[o] && (t = W(e[o])) && (r && (r += " "), r += t);
                return r
            };

            function H(e) {
                let t, r, o;
                for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++) i[l - 1] = arguments[l];
                let s = function(n) {
                    return r = (t = w(i.reduce((e, t) => t(e), e()))).cache.get, o = t.cache.set, s = a, a(n)
                };

                function a(e) {
                    let n = r(e);
                    if (n) return n;
                    let i = k(e, t);
                    return o(e, i), i
                }
                return function() {
                    return s(S.apply(null, arguments))
                }
            }
            var j = e => {
                    let t = t => t[e] || [];
                    return t.isThemeGetter = !0, t
                },
                I = /^\[(?:([a-z-]+):)?(.+)\]$/i,
                C = /^\d+\/\d+$/,
                N = new Set(["px", "full", "screen"]),
                G = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                P = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                _ = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
                E = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
                O = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
                F = e => R(e) || N.has(e) || C.test(e),
                M = e => X(e, "length", Y),
                R = e => !!e && !Number.isNaN(Number(e)),
                $ = e => X(e, "number", R),
                A = e => !!e && Number.isInteger(Number(e)),
                B = e => e.endsWith("%") && R(e.slice(0, -1)),
                D = e => I.test(e),
                T = e => G.test(e),
                q = new Set(["length", "size", "percentage"]),
                J = e => X(e, q, Z),
                K = e => X(e, "position", Z),
                L = new Set(["image", "url"]),
                Q = e => X(e, L, et),
                U = e => X(e, "", ee),
                V = () => !0,
                X = (e, t, r) => {
                    let o = I.exec(e);
                    return !!o && (o[1] ? "string" == typeof t ? o[1] === t : t.has(o[1]) : r(o[2]))
                },
                Y = e => P.test(e) && !_.test(e),
                Z = () => !1,
                ee = e => E.test(e),
                et = e => O.test(e),
                er = () => {
                    let e = j("colors"),
                        t = j("spacing"),
                        r = j("blur"),
                        o = j("brightness"),
                        n = j("borderColor"),
                        i = j("borderRadius"),
                        l = j("borderSpacing"),
                        s = j("borderWidth"),
                        a = j("contrast"),
                        d = j("grayscale"),
                        c = j("hueRotate"),
                        p = j("invert"),
                        f = j("gap"),
                        u = j("gradientColorStops"),
                        b = j("gradientColorStopPositions"),
                        g = j("inset"),
                        m = j("margin"),
                        h = j("opacity"),
                        x = j("padding"),
                        y = j("saturate"),
                        v = j("scale"),
                        w = j("sepia"),
                        z = j("skew"),
                        k = j("space"),
                        S = j("translate"),
                        W = () => ["auto", "contain", "none"],
                        H = () => ["auto", "hidden", "clip", "visible", "scroll"],
                        I = () => ["auto", D, t],
                        C = () => [D, t],
                        N = () => ["", F, M],
                        G = () => ["auto", R, D],
                        P = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
                        _ = () => ["solid", "dashed", "dotted", "double", "none"],
                        E = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
                        O = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
                        q = () => ["", "0", D],
                        L = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
                        X = () => [R, D];
                    return {
                        cacheSize: 500,
                        separator: ":",
                        theme: {
                            colors: [V],
                            spacing: [F, M],
                            blur: ["none", "", T, D],
                            brightness: X(),
                            borderColor: [e],
                            borderRadius: ["none", "", "full", T, D],
                            borderSpacing: C(),
                            borderWidth: N(),
                            contrast: X(),
                            grayscale: q(),
                            hueRotate: X(),
                            invert: q(),
                            gap: C(),
                            gradientColorStops: [e],
                            gradientColorStopPositions: [B, M],
                            inset: I(),
                            margin: I(),
                            opacity: X(),
                            padding: C(),
                            saturate: X(),
                            scale: X(),
                            sepia: q(),
                            skew: X(),
                            space: C(),
                            translate: C()
                        },
                        classGroups: {
                            aspect: [{
                                aspect: ["auto", "square", "video", D]
                            }],
                            container: ["container"],
                            columns: [{
                                columns: [T]
                            }],
                            "break-after": [{
                                "break-after": L()
                            }],
                            "break-before": [{
                                "break-before": L()
                            }],
                            "break-inside": [{
                                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                            }],
                            "box-decoration": [{
                                "box-decoration": ["slice", "clone"]
                            }],
                            box: [{
                                box: ["border", "content"]
                            }],
                            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                            float: [{
                                float: ["right", "left", "none", "start", "end"]
                            }],
                            clear: [{
                                clear: ["left", "right", "both", "none", "start", "end"]
                            }],
                            isolation: ["isolate", "isolation-auto"],
                            "object-fit": [{
                                object: ["contain", "cover", "fill", "none", "scale-down"]
                            }],
                            "object-position": [{
                                object: [...P(), D]
                            }],
                            overflow: [{
                                overflow: H()
                            }],
                            "overflow-x": [{
                                "overflow-x": H()
                            }],
                            "overflow-y": [{
                                "overflow-y": H()
                            }],
                            overscroll: [{
                                overscroll: W()
                            }],
                            "overscroll-x": [{
                                "overscroll-x": W()
                            }],
                            "overscroll-y": [{
                                "overscroll-y": W()
                            }],
                            position: ["static", "fixed", "absolute", "relative", "sticky"],
                            inset: [{
                                inset: [g]
                            }],
                            "inset-x": [{
                                "inset-x": [g]
                            }],
                            "inset-y": [{
                                "inset-y": [g]
                            }],
                            start: [{
                                start: [g]
                            }],
                            end: [{
                                end: [g]
                            }],
                            top: [{
                                top: [g]
                            }],
                            right: [{
                                right: [g]
                            }],
                            bottom: [{
                                bottom: [g]
                            }],
                            left: [{
                                left: [g]
                            }],
                            visibility: ["visible", "invisible", "collapse"],
                            z: [{
                                z: ["auto", A, D]
                            }],
                            basis: [{
                                basis: I()
                            }],
                            "flex-direction": [{
                                flex: ["row", "row-reverse", "col", "col-reverse"]
                            }],
                            "flex-wrap": [{
                                flex: ["wrap", "wrap-reverse", "nowrap"]
                            }],
                            flex: [{
                                flex: ["1", "auto", "initial", "none", D]
                            }],
                            grow: [{
                                grow: q()
                            }],
                            shrink: [{
                                shrink: q()
                            }],
                            order: [{
                                order: ["first", "last", "none", A, D]
                            }],
                            "grid-cols": [{
                                "grid-cols": [V]
                            }],
                            "col-start-end": [{
                                col: ["auto", {
                                    span: ["full", A, D]
                                }, D]
                            }],
                            "col-start": [{
                                "col-start": G()
                            }],
                            "col-end": [{
                                "col-end": G()
                            }],
                            "grid-rows": [{
                                "grid-rows": [V]
                            }],
                            "row-start-end": [{
                                row: ["auto", {
                                    span: [A, D]
                                }, D]
                            }],
                            "row-start": [{
                                "row-start": G()
                            }],
                            "row-end": [{
                                "row-end": G()
                            }],
                            "grid-flow": [{
                                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                            }],
                            "auto-cols": [{
                                "auto-cols": ["auto", "min", "max", "fr", D]
                            }],
                            "auto-rows": [{
                                "auto-rows": ["auto", "min", "max", "fr", D]
                            }],
                            gap: [{
                                gap: [f]
                            }],
                            "gap-x": [{
                                "gap-x": [f]
                            }],
                            "gap-y": [{
                                "gap-y": [f]
                            }],
                            "justify-content": [{
                                justify: ["normal", ...O()]
                            }],
                            "justify-items": [{
                                "justify-items": ["start", "end", "center", "stretch"]
                            }],
                            "justify-self": [{
                                "justify-self": ["auto", "start", "end", "center", "stretch"]
                            }],
                            "align-content": [{
                                content: ["normal", ...O(), "baseline"]
                            }],
                            "align-items": [{
                                items: ["start", "end", "center", "baseline", "stretch"]
                            }],
                            "align-self": [{
                                self: ["auto", "start", "end", "center", "stretch", "baseline"]
                            }],
                            "place-content": [{
                                "place-content": [...O(), "baseline"]
                            }],
                            "place-items": [{
                                "place-items": ["start", "end", "center", "baseline", "stretch"]
                            }],
                            "place-self": [{
                                "place-self": ["auto", "start", "end", "center", "stretch"]
                            }],
                            p: [{
                                p: [x]
                            }],
                            px: [{
                                px: [x]
                            }],
                            py: [{
                                py: [x]
                            }],
                            ps: [{
                                ps: [x]
                            }],
                            pe: [{
                                pe: [x]
                            }],
                            pt: [{
                                pt: [x]
                            }],
                            pr: [{
                                pr: [x]
                            }],
                            pb: [{
                                pb: [x]
                            }],
                            pl: [{
                                pl: [x]
                            }],
                            m: [{
                                m: [m]
                            }],
                            mx: [{
                                mx: [m]
                            }],
                            my: [{
                                my: [m]
                            }],
                            ms: [{
                                ms: [m]
                            }],
                            me: [{
                                me: [m]
                            }],
                            mt: [{
                                mt: [m]
                            }],
                            mr: [{
                                mr: [m]
                            }],
                            mb: [{
                                mb: [m]
                            }],
                            ml: [{
                                ml: [m]
                            }],
                            "space-x": [{
                                "space-x": [k]
                            }],
                            "space-x-reverse": ["space-x-reverse"],
                            "space-y": [{
                                "space-y": [k]
                            }],
                            "space-y-reverse": ["space-y-reverse"],
                            w: [{
                                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", D, t]
                            }],
                            "min-w": [{
                                "min-w": [D, t, "min", "max", "fit"]
                            }],
                            "max-w": [{
                                "max-w": [D, t, "none", "full", "min", "max", "fit", "prose", {
                                    screen: [T]
                                }, T]
                            }],
                            h: [{
                                h: [D, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                            }],
                            "min-h": [{
                                "min-h": [D, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                            }],
                            "max-h": [{
                                "max-h": [D, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                            }],
                            size: [{
                                size: [D, t, "auto", "min", "max", "fit"]
                            }],
                            "font-size": [{
                                text: ["base", T, M]
                            }],
                            "font-smoothing": ["antialiased", "subpixel-antialiased"],
                            "font-style": ["italic", "not-italic"],
                            "font-weight": [{
                                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", $]
                            }],
                            "font-family": [{
                                font: [V]
                            }],
                            "fvn-normal": ["normal-nums"],
                            "fvn-ordinal": ["ordinal"],
                            "fvn-slashed-zero": ["slashed-zero"],
                            "fvn-figure": ["lining-nums", "oldstyle-nums"],
                            "fvn-spacing": ["proportional-nums", "tabular-nums"],
                            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                            tracking: [{
                                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", D]
                            }],
                            "line-clamp": [{
                                "line-clamp": ["none", R, $]
                            }],
                            leading: [{
                                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", F, D]
                            }],
                            "list-image": [{
                                "list-image": ["none", D]
                            }],
                            "list-style-type": [{
                                list: ["none", "disc", "decimal", D]
                            }],
                            "list-style-position": [{
                                list: ["inside", "outside"]
                            }],
                            "placeholder-color": [{
                                placeholder: [e]
                            }],
                            "placeholder-opacity": [{
                                "placeholder-opacity": [h]
                            }],
                            "text-alignment": [{
                                text: ["left", "center", "right", "justify", "start", "end"]
                            }],
                            "text-color": [{
                                text: [e]
                            }],
                            "text-opacity": [{
                                "text-opacity": [h]
                            }],
                            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                            "text-decoration-style": [{
                                decoration: [..._(), "wavy"]
                            }],
                            "text-decoration-thickness": [{
                                decoration: ["auto", "from-font", F, M]
                            }],
                            "underline-offset": [{
                                "underline-offset": ["auto", F, D]
                            }],
                            "text-decoration-color": [{
                                decoration: [e]
                            }],
                            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                            "text-wrap": [{
                                text: ["wrap", "nowrap", "balance", "pretty"]
                            }],
                            indent: [{
                                indent: C()
                            }],
                            "vertical-align": [{
                                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", D]
                            }],
                            whitespace: [{
                                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                            }],
                            break: [{
                                break: ["normal", "words", "all", "keep"]
                            }],
                            hyphens: [{
                                hyphens: ["none", "manual", "auto"]
                            }],
                            content: [{
                                content: ["none", D]
                            }],
                            "bg-attachment": [{
                                bg: ["fixed", "local", "scroll"]
                            }],
                            "bg-clip": [{
                                "bg-clip": ["border", "padding", "content", "text"]
                            }],
                            "bg-opacity": [{
                                "bg-opacity": [h]
                            }],
                            "bg-origin": [{
                                "bg-origin": ["border", "padding", "content"]
                            }],
                            "bg-position": [{
                                bg: [...P(), K]
                            }],
                            "bg-repeat": [{
                                bg: ["no-repeat", {
                                    repeat: ["", "x", "y", "round", "space"]
                                }]
                            }],
                            "bg-size": [{
                                bg: ["auto", "cover", "contain", J]
                            }],
                            "bg-image": [{
                                bg: ["none", {
                                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                                }, Q]
                            }],
                            "bg-color": [{
                                bg: [e]
                            }],
                            "gradient-from-pos": [{
                                from: [b]
                            }],
                            "gradient-via-pos": [{
                                via: [b]
                            }],
                            "gradient-to-pos": [{
                                to: [b]
                            }],
                            "gradient-from": [{
                                from: [u]
                            }],
                            "gradient-via": [{
                                via: [u]
                            }],
                            "gradient-to": [{
                                to: [u]
                            }],
                            rounded: [{
                                rounded: [i]
                            }],
                            "rounded-s": [{
                                "rounded-s": [i]
                            }],
                            "rounded-e": [{
                                "rounded-e": [i]
                            }],
                            "rounded-t": [{
                                "rounded-t": [i]
                            }],
                            "rounded-r": [{
                                "rounded-r": [i]
                            }],
                            "rounded-b": [{
                                "rounded-b": [i]
                            }],
                            "rounded-l": [{
                                "rounded-l": [i]
                            }],
                            "rounded-ss": [{
                                "rounded-ss": [i]
                            }],
                            "rounded-se": [{
                                "rounded-se": [i]
                            }],
                            "rounded-ee": [{
                                "rounded-ee": [i]
                            }],
                            "rounded-es": [{
                                "rounded-es": [i]
                            }],
                            "rounded-tl": [{
                                "rounded-tl": [i]
                            }],
                            "rounded-tr": [{
                                "rounded-tr": [i]
                            }],
                            "rounded-br": [{
                                "rounded-br": [i]
                            }],
                            "rounded-bl": [{
                                "rounded-bl": [i]
                            }],
                            "border-w": [{
                                border: [s]
                            }],
                            "border-w-x": [{
                                "border-x": [s]
                            }],
                            "border-w-y": [{
                                "border-y": [s]
                            }],
                            "border-w-s": [{
                                "border-s": [s]
                            }],
                            "border-w-e": [{
                                "border-e": [s]
                            }],
                            "border-w-t": [{
                                "border-t": [s]
                            }],
                            "border-w-r": [{
                                "border-r": [s]
                            }],
                            "border-w-b": [{
                                "border-b": [s]
                            }],
                            "border-w-l": [{
                                "border-l": [s]
                            }],
                            "border-opacity": [{
                                "border-opacity": [h]
                            }],
                            "border-style": [{
                                border: [..._(), "hidden"]
                            }],
                            "divide-x": [{
                                "divide-x": [s]
                            }],
                            "divide-x-reverse": ["divide-x-reverse"],
                            "divide-y": [{
                                "divide-y": [s]
                            }],
                            "divide-y-reverse": ["divide-y-reverse"],
                            "divide-opacity": [{
                                "divide-opacity": [h]
                            }],
                            "divide-style": [{
                                divide: _()
                            }],
                            "border-color": [{
                                border: [n]
                            }],
                            "border-color-x": [{
                                "border-x": [n]
                            }],
                            "border-color-y": [{
                                "border-y": [n]
                            }],
                            "border-color-s": [{
                                "border-s": [n]
                            }],
                            "border-color-e": [{
                                "border-e": [n]
                            }],
                            "border-color-t": [{
                                "border-t": [n]
                            }],
                            "border-color-r": [{
                                "border-r": [n]
                            }],
                            "border-color-b": [{
                                "border-b": [n]
                            }],
                            "border-color-l": [{
                                "border-l": [n]
                            }],
                            "divide-color": [{
                                divide: [n]
                            }],
                            "outline-style": [{
                                outline: ["", ..._()]
                            }],
                            "outline-offset": [{
                                "outline-offset": [F, D]
                            }],
                            "outline-w": [{
                                outline: [F, M]
                            }],
                            "outline-color": [{
                                outline: [e]
                            }],
                            "ring-w": [{
                                ring: N()
                            }],
                            "ring-w-inset": ["ring-inset"],
                            "ring-color": [{
                                ring: [e]
                            }],
                            "ring-opacity": [{
                                "ring-opacity": [h]
                            }],
                            "ring-offset-w": [{
                                "ring-offset": [F, M]
                            }],
                            "ring-offset-color": [{
                                "ring-offset": [e]
                            }],
                            shadow: [{
                                shadow: ["", "inner", "none", T, U]
                            }],
                            "shadow-color": [{
                                shadow: [V]
                            }],
                            opacity: [{
                                opacity: [h]
                            }],
                            "mix-blend": [{
                                "mix-blend": [...E(), "plus-lighter", "plus-darker"]
                            }],
                            "bg-blend": [{
                                "bg-blend": E()
                            }],
                            filter: [{
                                filter: ["", "none"]
                            }],
                            blur: [{
                                blur: [r]
                            }],
                            brightness: [{
                                brightness: [o]
                            }],
                            contrast: [{
                                contrast: [a]
                            }],
                            "drop-shadow": [{
                                "drop-shadow": ["", "none", T, D]
                            }],
                            grayscale: [{
                                grayscale: [d]
                            }],
                            "hue-rotate": [{
                                "hue-rotate": [c]
                            }],
                            invert: [{
                                invert: [p]
                            }],
                            saturate: [{
                                saturate: [y]
                            }],
                            sepia: [{
                                sepia: [w]
                            }],
                            "backdrop-filter": [{
                                "backdrop-filter": ["", "none"]
                            }],
                            "backdrop-blur": [{
                                "backdrop-blur": [r]
                            }],
                            "backdrop-brightness": [{
                                "backdrop-brightness": [o]
                            }],
                            "backdrop-contrast": [{
                                "backdrop-contrast": [a]
                            }],
                            "backdrop-grayscale": [{
                                "backdrop-grayscale": [d]
                            }],
                            "backdrop-hue-rotate": [{
                                "backdrop-hue-rotate": [c]
                            }],
                            "backdrop-invert": [{
                                "backdrop-invert": [p]
                            }],
                            "backdrop-opacity": [{
                                "backdrop-opacity": [h]
                            }],
                            "backdrop-saturate": [{
                                "backdrop-saturate": [y]
                            }],
                            "backdrop-sepia": [{
                                "backdrop-sepia": [w]
                            }],
                            "border-collapse": [{
                                border: ["collapse", "separate"]
                            }],
                            "border-spacing": [{
                                "border-spacing": [l]
                            }],
                            "border-spacing-x": [{
                                "border-spacing-x": [l]
                            }],
                            "border-spacing-y": [{
                                "border-spacing-y": [l]
                            }],
                            "table-layout": [{
                                table: ["auto", "fixed"]
                            }],
                            caption: [{
                                caption: ["top", "bottom"]
                            }],
                            transition: [{
                                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", D]
                            }],
                            duration: [{
                                duration: X()
                            }],
                            ease: [{
                                ease: ["linear", "in", "out", "in-out", D]
                            }],
                            delay: [{
                                delay: X()
                            }],
                            animate: [{
                                animate: ["none", "spin", "ping", "pulse", "bounce", D]
                            }],
                            transform: [{
                                transform: ["", "gpu", "none"]
                            }],
                            scale: [{
                                scale: [v]
                            }],
                            "scale-x": [{
                                "scale-x": [v]
                            }],
                            "scale-y": [{
                                "scale-y": [v]
                            }],
                            rotate: [{
                                rotate: [A, D]
                            }],
                            "translate-x": [{
                                "translate-x": [S]
                            }],
                            "translate-y": [{
                                "translate-y": [S]
                            }],
                            "skew-x": [{
                                "skew-x": [z]
                            }],
                            "skew-y": [{
                                "skew-y": [z]
                            }],
                            "transform-origin": [{
                                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", D]
                            }],
                            accent: [{
                                accent: ["auto", e]
                            }],
                            appearance: [{
                                appearance: ["none", "auto"]
                            }],
                            cursor: [{
                                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", D]
                            }],
                            "caret-color": [{
                                caret: [e]
                            }],
                            "pointer-events": [{
                                "pointer-events": ["none", "auto"]
                            }],
                            resize: [{
                                resize: ["none", "y", "x", ""]
                            }],
                            "scroll-behavior": [{
                                scroll: ["auto", "smooth"]
                            }],
                            "scroll-m": [{
                                "scroll-m": C()
                            }],
                            "scroll-mx": [{
                                "scroll-mx": C()
                            }],
                            "scroll-my": [{
                                "scroll-my": C()
                            }],
                            "scroll-ms": [{
                                "scroll-ms": C()
                            }],
                            "scroll-me": [{
                                "scroll-me": C()
                            }],
                            "scroll-mt": [{
                                "scroll-mt": C()
                            }],
                            "scroll-mr": [{
                                "scroll-mr": C()
                            }],
                            "scroll-mb": [{
                                "scroll-mb": C()
                            }],
                            "scroll-ml": [{
                                "scroll-ml": C()
                            }],
                            "scroll-p": [{
                                "scroll-p": C()
                            }],
                            "scroll-px": [{
                                "scroll-px": C()
                            }],
                            "scroll-py": [{
                                "scroll-py": C()
                            }],
                            "scroll-ps": [{
                                "scroll-ps": C()
                            }],
                            "scroll-pe": [{
                                "scroll-pe": C()
                            }],
                            "scroll-pt": [{
                                "scroll-pt": C()
                            }],
                            "scroll-pr": [{
                                "scroll-pr": C()
                            }],
                            "scroll-pb": [{
                                "scroll-pb": C()
                            }],
                            "scroll-pl": [{
                                "scroll-pl": C()
                            }],
                            "snap-align": [{
                                snap: ["start", "end", "center", "align-none"]
                            }],
                            "snap-stop": [{
                                snap: ["normal", "always"]
                            }],
                            "snap-type": [{
                                snap: ["none", "x", "y", "both"]
                            }],
                            "snap-strictness": [{
                                snap: ["mandatory", "proximity"]
                            }],
                            touch: [{
                                touch: ["auto", "none", "manipulation"]
                            }],
                            "touch-x": [{
                                "touch-pan": ["x", "left", "right"]
                            }],
                            "touch-y": [{
                                "touch-pan": ["y", "up", "down"]
                            }],
                            "touch-pz": ["touch-pinch-zoom"],
                            select: [{
                                select: ["none", "text", "all", "auto"]
                            }],
                            "will-change": [{
                                "will-change": ["auto", "scroll", "contents", "transform", D]
                            }],
                            fill: [{
                                fill: [e, "none"]
                            }],
                            "stroke-w": [{
                                stroke: [F, M, $]
                            }],
                            stroke: [{
                                stroke: [e, "none"]
                            }],
                            sr: ["sr-only", "not-sr-only"],
                            "forced-color-adjust": [{
                                "forced-color-adjust": ["auto", "none"]
                            }]
                        },
                        conflictingClassGroups: {
                            overflow: ["overflow-x", "overflow-y"],
                            overscroll: ["overscroll-x", "overscroll-y"],
                            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                            "inset-x": ["right", "left"],
                            "inset-y": ["top", "bottom"],
                            flex: ["basis", "grow", "shrink"],
                            gap: ["gap-x", "gap-y"],
                            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                            px: ["pr", "pl"],
                            py: ["pt", "pb"],
                            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                            mx: ["mr", "ml"],
                            my: ["mt", "mb"],
                            size: ["w", "h"],
                            "font-size": ["leading"],
                            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                            "fvn-ordinal": ["fvn-normal"],
                            "fvn-slashed-zero": ["fvn-normal"],
                            "fvn-figure": ["fvn-normal"],
                            "fvn-spacing": ["fvn-normal"],
                            "fvn-fraction": ["fvn-normal"],
                            "line-clamp": ["display", "overflow"],
                            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                            "rounded-s": ["rounded-ss", "rounded-es"],
                            "rounded-e": ["rounded-se", "rounded-ee"],
                            "rounded-t": ["rounded-tl", "rounded-tr"],
                            "rounded-r": ["rounded-tr", "rounded-br"],
                            "rounded-b": ["rounded-br", "rounded-bl"],
                            "rounded-l": ["rounded-tl", "rounded-bl"],
                            "border-spacing": ["border-spacing-x", "border-spacing-y"],
                            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                            "border-w-x": ["border-w-r", "border-w-l"],
                            "border-w-y": ["border-w-t", "border-w-b"],
                            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                            "border-color-x": ["border-color-r", "border-color-l"],
                            "border-color-y": ["border-color-t", "border-color-b"],
                            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                            "scroll-mx": ["scroll-mr", "scroll-ml"],
                            "scroll-my": ["scroll-mt", "scroll-mb"],
                            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                            "scroll-px": ["scroll-pr", "scroll-pl"],
                            "scroll-py": ["scroll-pt", "scroll-pb"],
                            touch: ["touch-x", "touch-y", "touch-pz"],
                            "touch-x": ["touch"],
                            "touch-y": ["touch"],
                            "touch-pz": ["touch"]
                        },
                        conflictingClassGroupModifiers: {
                            "font-size": ["leading"]
                        }
                    }
                },
                eo = (e, t) => {
                    let {
                        cacheSize: r,
                        prefix: o,
                        separator: n,
                        experimentalParseClassName: i,
                        extend: l = {},
                        override: s = {}
                    } = t;
                    for (let t in en(e, "cacheSize", r), en(e, "prefix", o), en(e, "separator", n), en(e, "experimentalParseClassName", i), s) ei(e[t], s[t]);
                    for (let t in l) el(e[t], l[t]);
                    return e
                },
                en = (e, t, r) => {
                    void 0 !== r && (e[t] = r)
                },
                ei = (e, t) => {
                    if (t)
                        for (let r in t) en(e, r, t[r])
                },
                el = (e, t) => {
                    if (t)
                        for (let r in t) {
                            let o = t[r];
                            void 0 !== o && (e[r] = (e[r] || []).concat(o))
                        }
                },
                es = function(e) {
                    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
                    return "function" == typeof e ? H(er, e, ...r) : H(() => eo(er(), e), ...r)
                }({
                    extend: {
                        classGroups: {
                            "font-size": Object.keys(a()).map(e => e.replace(".", ""))
                        }
                    }
                }),
                ea = {
                    size: "medium",
                    viewBoxWidth: 18,
                    viewBoxHeight: 18
                },
                ed = (0, i.forwardRef)(function(e, t) {
                    let r = { ...ea,
                        ...e
                    };
                    return (0, l.jsx)("div", {
                        children: (0, l.jsx)("svg", {
                            ref: t,
                            className: function() {
                                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                return es(function() {
                                    for (var e, t, r = 0, o = "", n = arguments.length; r < n; r++)(e = arguments[r]) && (t = function e(t) {
                                        var r, o, n = "";
                                        if ("string" == typeof t || "number" == typeof t) n += t;
                                        else if ("object" == typeof t) {
                                            if (Array.isArray(t)) {
                                                var i = t.length;
                                                for (r = 0; r < i; r++) t[r] && (o = e(t[r])) && (n && (n += " "), n += o)
                                            } else
                                                for (o in t) t[o] && (n && (n += " "), n += o)
                                        }
                                        return n
                                    }(e)) && (o && (o += " "), o += t);
                                    return o
                                }(t))
                            }("shrink-0 fill-current", {
                                "h-[36px] w-[36px]": "xxl" === r.size,
                                "h-[30px] w-[30px]": "xl" === r.size,
                                "h-[24px] w-[24px]": "large" === r.size,
                                "h-[18px] w-[18px]": "medium" === r.size,
                                "h-[16px] w-[16px]": "small" === r.size,
                                "h-[13px] w-[13px]": "xs" === r.size,
                                "h-[8px] w-[8px]": "xxs" === r.size
                            }, r.className),
                            viewBox: "0 0 ".concat(r.viewBoxWidth, " ").concat(r.viewBoxHeight),
                            xmlns: "http://www.w3.org/2000/svg",
                            children: "string" == typeof r.content ? (0, l.jsx)("path", {
                                d: r.content,
                                fillRule: "evenodd",
                                clipRule: "evenodd"
                            }) : r.content
                        })
                    })
                })
        }
    }
]);