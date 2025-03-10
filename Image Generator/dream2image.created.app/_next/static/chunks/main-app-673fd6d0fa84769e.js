try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        n = (new e.Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "47c494dc-b230-4e25-9991-36908f0b8264", e._sentryDebugIdIdentifier = "sentry-dbid-47c494dc-b230-4e25-9991-36908f0b8264")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1744], {
        1913: function(e, n, t) {
            Promise.resolve().then(t.t.bind(t, 60905, 23)), Promise.resolve().then(t.t.bind(t, 13861, 23)), Promise.resolve().then(t.t.bind(t, 54166, 23)), Promise.resolve().then(t.t.bind(t, 84204, 23)), Promise.resolve().then(t.t.bind(t, 89023, 23)), Promise.resolve().then(t.t.bind(t, 69822, 23))
        },
        25759: function(e, n, t) {
            "use strict";
            var r = t(98573),
                s = t(71832),
                i = t(77580);
            i.env.NEXT_PUBLIC_SENTRY_CLIENT_APPS_DSN;
            let l = Number(i.env.NEXT_PUBLIC_TRACES_SAMPLE_RATE);
            var o = t(77580);
            globalThis._sentryRewritesTunnelPath = "/monitoring", globalThis.SENTRY_RELEASE = {
                id: "96a34db77d5e7c8af1480b43dcb725dc663ec7d4"
            }, globalThis._sentryBasePath = void 0, globalThis._sentryRewriteFramesAssetPrefixPath = "", globalThis._sentryAssetPrefix = void 0, globalThis._sentryExperimentalThirdPartyOriginStackFrames = void 0;
            let a = Number(o.env.NEXT_PUBLIC_REPLAYS_ON_ERROR_SAMPLE_RATE),
                b = Number(o.env.NEXT_PUBLIC_REPLAYS_ON_ERROR_SAMPLE_RATE);
            r.S1({
                enabled: !0,
                dsn: "https://91f5667076b3c2ff81a2bf6bf06b4940@o1154715.ingest.us.sentry.io/4506742732881920",
                tracesSampler: e => {
                    let {
                        name: n
                    } = e;
                    return "POST /api/graphql" === n ? .001 : n.startsWith("POST /integrations") ? 1 : l
                },
                replaysOnErrorSampleRate: a,
                replaysSessionSampleRate: b,
                integrations: [s.G({
                    maskAllText: !1,
                    maskAllInputs: !1,
                    blockAllMedia: !1
                })],
                beforeSend: function(e, n) {
                    return e
                },
                ignoreErrors: ["Failed to fetch"]
            })
        }
    },
    function(e) {
        var n = function(n) {
            return e(e.s = n)
        };
        e.O(0, [3840, 8470, 5166], function() {
            return n(25759), n(76102), n(1913)
        }), _N_E = e.O()
    }
]);