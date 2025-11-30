(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/services/supabaseClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
"use client";
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://qnjlbyrgnbjvxmvkbayn.supabase.co/");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuamxieXJnbmJqdnhtdmtiYXluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEzMzg1NTcsImV4cCI6MjA3NjkxNDU1N30.cB4FFKuINlOi5_H9V7Q6f_g_pVD4-x7yswD-8MK6BTI");
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/services/http.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "http",
    ()=>http
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const http = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "http://localhost:3000/") || "http://localhost:3000",
    withCredentials: true
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/services/auth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/services/auth.ts
__turbopack_context__.s([
    "login",
    ()=>login,
    "registerClient",
    ()=>registerClient,
    "registerProvider",
    ()=>registerProvider,
    "thirdPartyLogin",
    ()=>thirdPartyLogin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$http$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/services/http.ts [app-client] (ecmascript)");
;
async function registerClient(data) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$http$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"].post("/auth/register/client", data);
    return response.data;
}
async function login(data) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$http$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"].post("/auth/login", data);
    return response.data;
}
async function registerProvider(data) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$http$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"].post("/auth/register/provider", data);
    return response.data;
}
async function thirdPartyLogin(role, data) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$http$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"].post(`/auth/third-party/${role}`, data);
    return response.data;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/oauth/callback/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OAuthCallbackPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/services/supabaseClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/services/auth.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function OAuthCallbackPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const role = searchParams.get("role") || "client";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OAuthCallbackPage.useEffect": ()=>{
            const processOAuthLogin = {
                "OAuthCallbackPage.useEffect.processOAuthLogin": async ()=>{
                    try {
                        console.log("➡️ Entró a OAuthCallbackPage (Next)");
                        console.log("➡️ role =>", role);
                        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                        ;
                        console.log("➡️ location.href =>", window.location.href);
                        console.log("➡️ location.hash =>", window.location.hash);
                        // 1. Intentar sacar access_token del hash de la URL
                        let accessToken = null;
                        if (window.location.hash) {
                            const hash = window.location.hash.replace("#", "");
                            const hashParams = new URLSearchParams(hash);
                            accessToken = hashParams.get("access_token");
                        }
                        console.log("➡️ accessToken desde hash =>", accessToken);
                        // 2. Si no hay token en el hash, usar getSession() como respaldo
                        if (!accessToken) {
                            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
                            console.log("➡️ getSession() data =>", data);
                            console.log("➡️ getSession() error =>", error);
                            if (!error && data.session) {
                                accessToken = data.session.access_token;
                            }
                        }
                        if (!accessToken) {
                            console.error("⛔ No se encontró accessToken ni en hash ni en sesión");
                            alert("No se pudo obtener el token de Google/Supabase.");
                            router.push("/login");
                            return;
                        }
                        // 3. Obtener info básica del usuario desde Supabase
                        const { data: userData, error: userError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser(accessToken);
                        if (userError || !userData?.user) {
                            console.error("⛔ Error al obtener usuario de Supabase:", userError);
                            alert("Error al validar usuario en Supabase.");
                            router.push("/login");
                            return;
                        }
                        const supaUser = userData.user;
                        const body = {
                            accessToken,
                            name: supaUser.user_metadata?.name || supaUser.user_metadata?.full_name || null,
                            surname: supaUser.user_metadata?.surname ?? null,
                            phone: supaUser.user_metadata?.phone ?? null,
                            profileImgUrl: supaUser.user_metadata?.avatar_url ?? null
                        };
                        console.log("➡️ Body enviado al back =>", body);
                        // 4. Llamar al back (mismo cliente http que login/register)
                        const dataBack = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["thirdPartyLogin"])(role, body);
                        console.log("✅ Data back =>", dataBack);
                        // Guardar en localStorage para que AuthContext lo lea
                        localStorage.setItem("token", dataBack.accessToken);
                        localStorage.setItem("user", JSON.stringify(dataBack.user));
                        // Limpiar hash de la URL
                        window.history.replaceState({}, document.title, "/");
                        // Redirección según rol
                        if (role === "client") {
                            router.push("/");
                        } else {
                            router.push("/dashboard/provider");
                        }
                    } catch (err) {
                        console.error("⛔ Error en OAuthCallback (Next):", err);
                        alert("Error inesperado en autenticación.");
                        router.push("/login");
                    }
                }
            }["OAuthCallbackPage.useEffect.processOAuthLogin"];
            processOAuthLogin();
        }
    }["OAuthCallbackPage.useEffect"], [
        router,
        role
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center bg-gray-100 text-gray-700",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white shadow-md rounded-xl p-6 text-center w-80",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-semibold mb-2",
                    children: "Conectando con Google…"
                }, void 0, false, {
                    fileName: "[project]/src/app/oauth/callback/page.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500",
                    children: "Por favor espera unos segundos."
                }, void 0, false, {
                    fileName: "[project]/src/app/oauth/callback/page.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/oauth/callback/page.tsx",
            lineNumber: 110,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/oauth/callback/page.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_s(OAuthCallbackPage, "8i1PHtDhDf9NMpKTkROQKKwA/RI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = OAuthCallbackPage;
var _c;
__turbopack_context__.k.register(_c, "OAuthCallbackPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_968da7aa._.js.map