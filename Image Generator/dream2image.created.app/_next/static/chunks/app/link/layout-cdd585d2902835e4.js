try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        _ = (new e.Error).stack;
    _ && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[_] = "51a8e3a3-1dec-44f4-9de5-46aa1eeb12bf", e._sentryDebugIdIdentifier = "sentry-dbid-51a8e3a3-1dec-44f4-9de5-46aa1eeb12bf")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9098], {
        58476: function(e, _, E) {
            Promise.resolve().then(E.bind(E, 96783))
        },
        14218: function(e, _, E) {
            "use strict";
            var n = E(7954),
                t = E(77580);
            let r = {
                    NEXT_PUBLIC_URL: n.z.string(),
                    NEXT_PUBLIC_HOSTED_DOMAIN: n.z.string(),
                    NEXT_PUBLIC_SENTRY_ENABLED: (0, n.Yv)().optional(),
                    NEXT_PUBLIC_SENTRY_ENVIRONMENT: n.z.string().optional(),
                    NEXT_PUBLIC_SENTRY_DSN: n.z.string().optional(),
                    NEXT_PUBLIC_SENTRY_CLIENT_APPS_DSN: n.z.string().optional(),
                    NEXT_PUBLIC_TRACES_SAMPLE_RATE: n.z.number({
                        coerce: !0
                    }).optional(),
                    NEXT_PUBLIC_REPLAYS_ON_ERROR_SAMPLE_RATE: n.z.number({
                        coerce: !0
                    }).optional(),
                    NEXT_PUBLIC_LD_CLIENT_ID: n.z.string(),
                    NEXT_PUBLIC_VERCEL_ENV: n.z.enum(["development", "preview", "production"]).optional(),
                    NEXT_PUBLIC_SEGMENT_WRITE_KEY: n.z.string().optional(),
                    NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY: n.z.string()
                },
                N = {
                    NODE_ENV: n.z.enum(["development", "production", "test"]),
                    API_BASE_URL: n.z.string(),
                    NEXT_PUBLIC_WS_BASE_URL: n.z.string()
                },
                i = function(e) {
                    let {
                        client: _,
                        runtimeMap: E
                    } = e;
                    return (0, n.G)(_, {
                        skipValidation: !0,
                        env: E
                    })
                }({
                    client: { ...r,
                        ...N
                    },
                    runtimeMap: {
                        NODE_ENV: "production",
                        API_BASE_URL: t.env.API_BASE_URL,
                        NEXT_PUBLIC_WS_BASE_URL: "",
                        NEXT_PUBLIC_URL: "https://created.app/",
                        NEXT_PUBLIC_HOSTED_DOMAIN: "created.app",
                        NEXT_PUBLIC_LD_CLIENT_ID: "671fe0f5c7a8b30886147865",
                        NEXT_PUBLIC_VERCEL_ENV: t.env.NEXT_PUBLIC_VERCEL_ENV,
                        NEXT_PUBLIC_SEGMENT_WRITE_KEY: "KMO420oxM7i2PDPjGBMmgyHBB38UuwTy",
                        NEXT_PUBLIC_REPLAYS_ON_ERROR_SAMPLE_RATE: t.env.NEXT_PUBLIC_REPLAYS_ON_ERROR_SAMPLE_RATE,
                        NEXT_PUBLIC_SENTRY_ENABLED: "true",
                        NEXT_PUBLIC_SENTRY_ENVIRONMENT: t.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT,
                        NEXT_PUBLIC_SENTRY_DSN: "https://91f5667076b3c2ff81a2bf6bf06b4940@o1154715.ingest.us.sentry.io/4506742732881920",
                        NEXT_PUBLIC_SENTRY_CLIENT_APPS_DSN: t.env.NEXT_PUBLIC_SENTRY_CLIENT_APPS_DSN,
                        NEXT_PUBLIC_TRACES_SAMPLE_RATE: t.env.NEXT_PUBLIC_TRACES_SAMPLE_RATE,
                        NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY: "e1a4c9d0d2f9f737c5e1"
                    }
                });
            _.ZP = i
        },
        96783: function(e, _, E) {
            "use strict";
            E.d(_, {
                Analytics: function() {
                    return T
                }
            });
            var n = E(14218),
                t = E(30797);
            let r = n.ZP.NEXT_PUBLIC_SEGMENT_WRITE_KEY ? t.b.load({
                writeKey: n.ZP.NEXT_PUBLIC_SEGMENT_WRITE_KEY
            }) : void 0;
            var N = E(65181),
                i = E(38912),
                o = E(14978);

            function T() {
                let e = (0, i.usePathname)(),
                    _ = (0, i.useSearchParams)();
                return (0, o.useEffect)(() => {
                    let E = async () => {
                        await (null == r ? void 0 : r.page())
                    };
                    e && E().catch(E => {
                        N.Tb(Error("Failed to record page view", {
                            cause: E
                        }), {
                            extra: {
                                pathname: e,
                                searchParams: _
                            }
                        })
                    })
                }, [e, _]), null
            }
        },
        7954: function(e, _, E) {
            "use strict";
            E.d(_, {
                G: function() {
                    return N
                },
                Yv: function() {
                    return i
                },
                z: function() {
                    return t.z
                }
            });
            var n = E(22296),
                t = E(18171),
                r = E(77580),
                N = (e, _) => {
                    let E = Object.keys(e).reduce((e, E) => {
                        var n;
                        return { ...e,
                            [E]: (null !== (n = null == _ ? void 0 : _.env) && void 0 !== n ? n : r.env)[E]
                        }
                    }, {});
                    if (null == _ ? void 0 : _.skipValidation) return E;
                    let N = t.z.object({ ...e
                        }).safeParse(E),
                        {
                            DISABLE_ENV_VALIDATION: i
                        } = r.env;
                    if (!1 === N.success) {
                        if (!i) throw Error("Invalid environment variables:\n".concat(N.error.errors.map(e => "❌ ".concat(n.red(e.message), ": ").concat(e.path)).join("\n")));
                        return E
                    }
                    return N.data
                },
                i = () => t.z.preprocess(e => {
                    if (!e) return !1;
                    let _ = String(e).toLowerCase();
                    return "true" === _ || "1" === _ || "yes" === _ || "t" === _
                }, t.z.boolean())
        }
    },
    function(e) {
        e.O(0, [5343, 1594, 3840, 8470, 5166, 1744], function() {
            return e(e.s = 58476)
        }), _N_E = e.O()
    }
]);