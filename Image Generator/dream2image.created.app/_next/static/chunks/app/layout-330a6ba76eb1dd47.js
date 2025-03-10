try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        n = (new e.Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e7f410d0-d973-4be7-b9fc-2976253bfd5f", e._sentryDebugIdIdentifier = "sentry-dbid-e7f410d0-d973-4be7-b9fc-2976253bfd5f")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3185], {
        27328: function(e, n, t) {
            Promise.resolve().then(t.bind(t, 2327))
        },
        2327: function(e, n, t) {
            "use strict";
            t.d(n, {
                default: function() {
                    return o
                }
            });
            var _ = t(24004),
                r = t(14218),
                E = t(42204);

            function o(e) {
                let {
                    children: n
                } = e;
                return (0, _.jsx)(E.FeatureFlagProvider, {
                    clientSideID: r.ZP.NEXT_PUBLIC_LD_CLIENT_ID,
                    children: n
                })
            }
        },
        14218: function(e, n, t) {
            "use strict";
            var _ = t(7954),
                r = t(77580);
            let E = {
                    NEXT_PUBLIC_URL: _.z.string(),
                    NEXT_PUBLIC_HOSTED_DOMAIN: _.z.string(),
                    NEXT_PUBLIC_SENTRY_ENABLED: (0, _.Yv)().optional(),
                    NEXT_PUBLIC_SENTRY_ENVIRONMENT: _.z.string().optional(),
                    NEXT_PUBLIC_SENTRY_DSN: _.z.string().optional(),
                    NEXT_PUBLIC_SENTRY_CLIENT_APPS_DSN: _.z.string().optional(),
                    NEXT_PUBLIC_TRACES_SAMPLE_RATE: _.z.number({
                        coerce: !0
                    }).optional(),
                    NEXT_PUBLIC_REPLAYS_ON_ERROR_SAMPLE_RATE: _.z.number({
                        coerce: !0
                    }).optional(),
                    NEXT_PUBLIC_LD_CLIENT_ID: _.z.string(),
                    NEXT_PUBLIC_VERCEL_ENV: _.z.enum(["development", "preview", "production"]).optional(),
                    NEXT_PUBLIC_SEGMENT_WRITE_KEY: _.z.string().optional(),
                    NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY: _.z.string()
                },
                o = {
                    NODE_ENV: _.z.enum(["development", "production", "test"]),
                    API_BASE_URL: _.z.string(),
                    NEXT_PUBLIC_WS_BASE_URL: _.z.string()
                },
                i = function(e) {
                    let {
                        client: n,
                        runtimeMap: t
                    } = e;
                    return (0, _.G)(n, {
                        skipValidation: !0,
                        env: t
                    })
                }({
                    client: { ...E,
                        ...o
                    },
                    runtimeMap: {
                        NODE_ENV: "production",
                        API_BASE_URL: r.env.API_BASE_URL,
                        NEXT_PUBLIC_WS_BASE_URL: "",
                        NEXT_PUBLIC_URL: "https://created.app/",
                        NEXT_PUBLIC_HOSTED_DOMAIN: "created.app",
                        NEXT_PUBLIC_LD_CLIENT_ID: "671fe0f5c7a8b30886147865",
                        NEXT_PUBLIC_VERCEL_ENV: r.env.NEXT_PUBLIC_VERCEL_ENV,
                        NEXT_PUBLIC_SEGMENT_WRITE_KEY: "KMO420oxM7i2PDPjGBMmgyHBB38UuwTy",
                        NEXT_PUBLIC_REPLAYS_ON_ERROR_SAMPLE_RATE: r.env.NEXT_PUBLIC_REPLAYS_ON_ERROR_SAMPLE_RATE,
                        NEXT_PUBLIC_SENTRY_ENABLED: "true",
                        NEXT_PUBLIC_SENTRY_ENVIRONMENT: r.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT,
                        NEXT_PUBLIC_SENTRY_DSN: "https://91f5667076b3c2ff81a2bf6bf06b4940@o1154715.ingest.us.sentry.io/4506742732881920",
                        NEXT_PUBLIC_SENTRY_CLIENT_APPS_DSN: r.env.NEXT_PUBLIC_SENTRY_CLIENT_APPS_DSN,
                        NEXT_PUBLIC_TRACES_SAMPLE_RATE: r.env.NEXT_PUBLIC_TRACES_SAMPLE_RATE,
                        NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY: "e1a4c9d0d2f9f737c5e1"
                    }
                });
            n.ZP = i
        },
        42204: function(e, n, t) {
            "use strict";
            var _ = Object.defineProperty,
                r = Object.getOwnPropertyDescriptor,
                E = Object.getOwnPropertyNames,
                o = Object.prototype.hasOwnProperty,
                i = {};
            ((e, n) => {
                for (var t in n) _(e, t, {
                    get: n[t],
                    enumerable: !0
                })
            })(i, {
                FeatureFlagProvider: () => s,
                useFlags: () => N.useFlags,
                useIdentify: () => T
            }), e.exports = ((e, n, t, i) => {
                if (n && "object" == typeof n || "function" == typeof n)
                    for (let N of E(n)) o.call(e, N) || N === t || _(e, N, {
                        get: () => n[N],
                        enumerable: !(i = r(n, N)) || i.enumerable
                    });
                return e
            })(_({}, "__esModule", {
                value: !0
            }), i);
            var N = t(79511),
                u = t(79511),
                s = class extends u.LDProvider {},
                a = t(79511),
                L = t(14978),
                T = () => {
                    let e = (0, a.useLDClient)();
                    return {
                        identify: (0, L.useCallback)(function() {
                            for (var n = arguments.length, t = Array(n), _ = 0; _ < n; _++) t[_] = arguments[_];
                            if (!e) {
                                console.warn("LD client not ready");
                                return
                            }
                            return e.identify(...t)
                        }, [e])
                    }
                }
        },
        7954: function(e, n, t) {
            "use strict";
            t.d(n, {
                G: function() {
                    return o
                },
                Yv: function() {
                    return i
                },
                z: function() {
                    return r.z
                }
            });
            var _ = t(22296),
                r = t(18171),
                E = t(77580),
                o = (e, n) => {
                    let t = Object.keys(e).reduce((e, t) => {
                        var _;
                        return { ...e,
                            [t]: (null !== (_ = null == n ? void 0 : n.env) && void 0 !== _ ? _ : E.env)[t]
                        }
                    }, {});
                    if (null == n ? void 0 : n.skipValidation) return t;
                    let o = r.z.object({ ...e
                        }).safeParse(t),
                        {
                            DISABLE_ENV_VALIDATION: i
                        } = E.env;
                    if (!1 === o.success) {
                        if (!i) throw Error("Invalid environment variables:\n".concat(o.error.errors.map(e => "❌ ".concat(_.red(e.message), ": ").concat(e.path)).join("\n")));
                        return t
                    }
                    return o.data
                },
                i = () => r.z.preprocess(e => {
                    if (!e) return !1;
                    let n = String(e).toLowerCase();
                    return "true" === n || "1" === n || "yes" === n || "t" === n
                }, r.z.boolean())
        }
    },
    function(e) {
        e.O(0, [5343, 9511, 3840, 8470, 5166, 1744], function() {
            return e(e.s = 27328)
        }), _N_E = e.O()
    }
]);