try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "528541e5-df9f-490f-a2ab-9a2f7123ada2", e._sentryDebugIdIdentifier = "sentry-dbid-528541e5-df9f-490f-a2ab-9a2f7123ada2")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [656], {
        70656: function(e, t, n) {
            n.d(t, {
                eA: function() {
                    return ed
                },
                zB: function() {
                    return el
                },
                w7: function() {
                    return ec
                },
                kP: function() {
                    return ea
                }
            });
            var s, a, r, o, i, l = n(24004),
                c = n(14978),
                d = n.t(c, 2);
            class u extends Error {
                constructor(e, t) {
                    e instanceof Error ? super(void 0, {
                        cause: {
                            err: e,
                            ...e.cause,
                            ...t
                        }
                    }) : "string" == typeof e ? (t instanceof Error && (t = {
                        err: t,
                        ...t.cause
                    }), super(e, t)) : super(void 0, e), this.name = this.constructor.name, this.type = this.constructor.type ? ? "AuthError", this.kind = this.constructor.kind ? ? "error", Error.captureStackTrace ? .(this, this.constructor);
                    let n = `https://errors.authjs.dev#${this.type.toLowerCase()}`;
                    this.message += `${this.message?". ":""}Read more at ${n}`
                }
            }
            class v extends u {}
            v.kind = "signIn";
            class f extends u {}
            f.type = "AdapterError";
            class h extends u {}
            h.type = "AccessDenied";
            class p extends u {}
            p.type = "CallbackRouteError";
            class y extends u {}
            y.type = "ErrorPageLoop";
            class w extends u {}
            w.type = "EventError";
            class g extends u {}
            g.type = "InvalidCallbackUrl";
            class E extends v {
                constructor() {
                    super(...arguments), this.code = "credentials"
                }
            }
            E.type = "CredentialsSignin";
            class b extends u {}
            b.type = "InvalidEndpoints";
            class S extends u {}
            S.type = "InvalidCheck";
            class x extends u {}
            x.type = "JWTSessionError";
            class _ extends u {}
            _.type = "MissingAdapter";
            class m extends u {}
            m.type = "MissingAdapterMethods";
            class U extends u {}
            U.type = "MissingAuthorize";
            class L extends u {}
            L.type = "MissingSecret";
            class k extends v {}
            k.type = "OAuthAccountNotLinked";
            class R extends v {}
            R.type = "OAuthCallbackError";
            class A extends u {}
            A.type = "OAuthProfileParseError";
            class T extends u {}
            T.type = "SessionTokenError";
            class C extends v {}
            C.type = "OAuthSignInError";
            class P extends v {}
            P.type = "EmailSignInError";
            class I extends u {}
            I.type = "SignOutError";
            class N extends u {}
            N.type = "UnknownAction";
            class M extends u {}
            M.type = "UnsupportedStrategy";
            class O extends u {}
            O.type = "InvalidProvider";
            class X extends u {}
            X.type = "UntrustedHost";
            class D extends u {}
            D.type = "Verification";
            class H extends v {}
            H.type = "MissingCSRF";
            class j extends u {}
            j.type = "DuplicateConditionalUI";
            class W extends u {}
            W.type = "MissingWebAuthnAutocomplete";
            class V extends u {}
            V.type = "WebAuthnVerificationError";
            class $ extends v {}
            $.type = "AccountNotLinked";
            class B extends u {}
            B.type = "ExperimentalFeatureNotEnabled";
            class F extends u {}
            class z extends u {}
            async function J(e, t, n) {
                let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    a = "".concat(q(t), "/").concat(e);
                try {
                    var r;
                    let e = {
                        headers: {
                            "Content-Type": "application/json",
                            ...(null == s ? void 0 : null === (r = s.headers) || void 0 === r ? void 0 : r.cookie) ? {
                                cookie: s.headers.cookie
                            } : {}
                        }
                    };
                    (null == s ? void 0 : s.body) && (e.body = JSON.stringify(s.body), e.method = "POST");
                    let t = await fetch(a, e),
                        n = await t.json();
                    if (!t.ok) throw n;
                    return n
                } catch (e) {
                    return n.error(new F(e.message, e)), null
                }
            }

            function q(e) {
                return "undefined" == typeof window ? "".concat(e.baseUrlServer).concat(e.basePathServer) : e.basePath
            }

            function G() {
                return Math.floor(Date.now() / 1e3)
            }

            function K(e) {
                let t = new URL("http://localhost:3000/api/auth");
                e && !e.startsWith("http") && (e = "https://".concat(e));
                let n = new URL(e || t),
                    s = ("/" === n.pathname ? t.pathname : n.pathname).replace(/\/$/, ""),
                    a = "".concat(n.origin).concat(s);
                return {
                    origin: n.origin,
                    host: n.host,
                    path: s,
                    base: a,
                    toString: () => a
                }
            }
            var Q = n(77580);
            let Y = {
                    baseUrl: K(null !== (a = Q.env.NEXTAUTH_URL) && void 0 !== a ? a : Q.env.VERCEL_URL).origin,
                    basePath: K(Q.env.NEXTAUTH_URL).path,
                    baseUrlServer: K(null !== (o = null !== (r = Q.env.NEXTAUTH_URL_INTERNAL) && void 0 !== r ? r : Q.env.NEXTAUTH_URL) && void 0 !== o ? o : Q.env.VERCEL_URL).origin,
                    basePathServer: K(null !== (i = Q.env.NEXTAUTH_URL_INTERNAL) && void 0 !== i ? i : Q.env.NEXTAUTH_URL).path,
                    _lastSync: 0,
                    _session: void 0,
                    _getSession: () => {}
                },
                Z = null;

            function ee() {
                return new BroadcastChannel("next-auth")
            }

            function et() {
                return "undefined" == typeof BroadcastChannel ? {
                    postMessage: () => {},
                    addEventListener: () => {},
                    removeEventListener: () => {}
                } : (null === Z && (Z = ee()), Z)
            }
            let en = {
                    debug: console.debug,
                    error: console.error,
                    warn: console.warn
                },
                es = null === (s = c.createContext) || void 0 === s ? void 0 : s.call(d, void 0);

            function ea(e) {
                if (!es) throw Error("React Context is unavailable in Server Components");
                let t = c.useContext(es),
                    {
                        required: n,
                        onUnauthenticated: s
                    } = null != e ? e : {},
                    a = n && "unauthenticated" === t.status;
                return (c.useEffect(() => {
                    if (a) {
                        let e = "".concat(Y.basePath, "/signin?").concat(new URLSearchParams({
                            error: "SessionRequired",
                            callbackUrl: window.location.href
                        }));
                        s ? s() : window.location.href = e
                    }
                }, [a, s]), a) ? {
                    data: t.data,
                    update: t.update,
                    status: "loading"
                } : t
            }
            async function er(e) {
                var t;
                let n = await J("session", Y, en, e);
                return (null === (t = null == e ? void 0 : e.broadcast) || void 0 === t || t) && ee().postMessage({
                    event: "session",
                    data: {
                        trigger: "getSession"
                    }
                }), n
            }
            async function eo() {
                var e;
                let t = await J("csrf", Y, en);
                return null !== (e = null == t ? void 0 : t.csrfToken) && void 0 !== e ? e : ""
            }
            async function ei() {
                return J("providers", Y, en)
            }
            async function el(e, t, n) {
                var s, a, r;
                let {
                    redirect: o = !0
                } = null != t ? t : {}, i = null !== (a = null !== (s = null == t ? void 0 : t.redirectTo) && void 0 !== s ? s : null == t ? void 0 : t.callbackUrl) && void 0 !== a ? a : window.location.href, l = q(Y), c = await ei();
                if (!c) {
                    window.location.href = "".concat(l, "/error");
                    return
                }
                if (!e || !(e in c)) {
                    window.location.href = "".concat(l, "/signin?").concat(new URLSearchParams({
                        callbackUrl: i
                    }));
                    return
                }
                let d = "credentials" === c[e].type,
                    u = "email" === c[e].type,
                    v = "".concat(l, "/").concat(d ? "callback" : "signin", "/").concat(e),
                    f = await eo(),
                    h = await fetch("".concat(v, "?").concat(new URLSearchParams(n)), {
                        method: "post",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                            "X-Auth-Return-Redirect": "1"
                        },
                        body: new URLSearchParams({ ...t,
                            csrfToken: f,
                            callbackUrl: i
                        })
                    }),
                    p = await h.json();
                if (o || !(d || u)) {
                    let e = null !== (r = p.url) && void 0 !== r ? r : i;
                    window.location.href = e, e.includes("#") && window.location.reload();
                    return
                }
                let y = new URL(p.url).searchParams.get("error"),
                    w = new URL(p.url).searchParams.get("code");
                return h.ok && await Y._getSession({
                    event: "storage"
                }), {
                    error: y,
                    code: w,
                    status: h.status,
                    ok: h.ok,
                    url: y ? null : p.url
                }
            }
            async function ec(e) {
                var t, n, s, a;
                let r = null !== (n = null !== (t = null == e ? void 0 : e.redirectTo) && void 0 !== t ? t : null == e ? void 0 : e.callbackUrl) && void 0 !== n ? n : window.location.href,
                    o = q(Y),
                    i = await eo(),
                    l = await fetch("".concat(o, "/signout"), {
                        method: "post",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                            "X-Auth-Return-Redirect": "1"
                        },
                        body: new URLSearchParams({
                            csrfToken: i,
                            callbackUrl: r
                        })
                    }),
                    c = await l.json();
                if (et().postMessage({
                        event: "session",
                        data: {
                            trigger: "signout"
                        }
                    }), null === (s = null == e ? void 0 : e.redirect) || void 0 === s || s) {
                    let e = null !== (a = c.url) && void 0 !== a ? a : r;
                    window.location.href = e, e.includes("#") && window.location.reload();
                    return
                }
                return await Y._getSession({
                    event: "storage"
                }), c
            }

            function ed(e) {
                if (!es) throw Error("React Context is unavailable in Server Components");
                let {
                    children: t,
                    basePath: n,
                    refetchInterval: s,
                    refetchWhenOffline: a
                } = e;
                n && (Y.basePath = n);
                let r = void 0 !== e.session;
                Y._lastSync = r ? G() : 0;
                let [o, i] = c.useState(() => (r && (Y._session = e.session), e.session)), [d, u] = c.useState(!r);
                c.useEffect(() => (Y._getSession = async function() {
                    let {
                        event: e
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    try {
                        let t = "storage" === e;
                        if (t || void 0 === Y._session) {
                            Y._lastSync = G(), Y._session = await er({
                                broadcast: !t
                            }), i(Y._session);
                            return
                        }
                        if (!e || null === Y._session || G() < Y._lastSync) return;
                        Y._lastSync = G(), Y._session = await er(), i(Y._session)
                    } catch (e) {
                        en.error(new z(e.message, e))
                    } finally {
                        u(!1)
                    }
                }, Y._getSession(), () => {
                    Y._lastSync = 0, Y._session = void 0, Y._getSession = () => {}
                }), []), c.useEffect(() => {
                    let e = () => Y._getSession({
                        event: "storage"
                    });
                    return et().addEventListener("message", e), () => et().removeEventListener("message", e)
                }, []), c.useEffect(() => {
                    let {
                        refetchOnWindowFocus: t = !0
                    } = e, n = () => {
                        t && "visible" === document.visibilityState && Y._getSession({
                            event: "visibilitychange"
                        })
                    };
                    return document.addEventListener("visibilitychange", n, !1), () => document.removeEventListener("visibilitychange", n, !1)
                }, [e.refetchOnWindowFocus]);
                let v = function() {
                        let [e, t] = c.useState("undefined" != typeof navigator && navigator.onLine), n = () => t(!0), s = () => t(!1);
                        return c.useEffect(() => (window.addEventListener("online", n), window.addEventListener("offline", s), () => {
                            window.removeEventListener("online", n), window.removeEventListener("offline", s)
                        }), []), e
                    }(),
                    f = !1 !== a || v;
                c.useEffect(() => {
                    if (s && f) {
                        let e = setInterval(() => {
                            Y._session && Y._getSession({
                                event: "poll"
                            })
                        }, 1e3 * s);
                        return () => clearInterval(e)
                    }
                }, [s, f]);
                let h = c.useMemo(() => ({
                    data: o,
                    status: d ? "loading" : o ? "authenticated" : "unauthenticated",
                    async update(e) {
                        if (d) return;
                        u(!0);
                        let t = await J("session", Y, en, void 0 === e ? void 0 : {
                            body: {
                                csrfToken: await eo(),
                                data: e
                            }
                        });
                        return u(!1), t && (i(t), et().postMessage({
                            event: "session",
                            data: {
                                trigger: "getSession"
                            }
                        })), t
                    }
                }), [o, d]);
                return (0, l.jsx)(es.Provider, {
                    value: h,
                    children: t
                })
            }
        }
    }
]);