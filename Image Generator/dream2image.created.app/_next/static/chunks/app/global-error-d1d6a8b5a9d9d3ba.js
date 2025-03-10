try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        n = (new e.Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "73236bdf-4ae0-485b-8f22-3aa0f0ab6801", e._sentryDebugIdIdentifier = "sentry-dbid-73236bdf-4ae0-485b-8f22-3aa0f0ab6801")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6470], {
        45207: function(e, n, t) {
            Promise.resolve().then(t.bind(t, 83502))
        },
        83502: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return b
                }
            });
            var l = t(24004),
                f = t(81529);
            let s = () => (0, l.jsx)("div", {
                className: "flex h-full w-full flex-col items-center justify-center",
                children: (0, l.jsx)(f.AlertBox, {})
            });
            var d = t(14218),
                i = t(86678),
                o = t(24514),
                r = t(32664);
            "development" === d.ZP.NODE_ENV && window.addEventListener("warning", e => {
                e.preventDefault();
                let n = "detail" in e ? e.detail : void 0;
                n && "object" == typeof n && "code" in n && "string" == typeof n.code && "TWIND_INVALID_CLASS" === n.code || console.warn(n)
            });
            var a = (0, i.ZD)({
                    presets: [(0, o.Z)(), (0, r.Z)()]
                }),
                u = t(14978),
                c = t(65181);

            function b(e) {
                let {
                    error: n
                } = e;
                return (0, u.useEffect)(() => {
                    c.Tb(n)
                }, [n]), ! function(e) {
                    let {
                        config: n,
                        enabled: t
                    } = e;
                    (0, u.useEffect)(() => {
                        t && (0, i.cY)(n)
                    }, [n, t])
                }({
                    config: a,
                    enabled: !0
                }), (0, l.jsx)("html", {
                    lang: "en",
                    className: "h-full w-full",
                    children: (0, l.jsx)("body", {
                        className: "h-full w-full",
                        children: (0, l.jsx)(s, {})
                    })
                })
            }
        }
    },
    function(e) {
        e.O(0, [5343, 8695, 7246, 1855, 2466, 3840, 8470, 5166, 1744], function() {
            return e(e.s = 45207)
        }), _N_E = e.O()
    }
]);