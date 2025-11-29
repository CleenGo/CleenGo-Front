(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/app/components/RegisterFormProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RegisterProviderForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/services/auth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function RegisterProviderForm() {
    _s();
    const { register, handleSubmit, watch, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const passwordValue = watch("password");
    const birthDateValue = watch("birthDate");
    const onSubmit = async (data)=>{
        setLoading(true);
        setError("");
        setSuccess("");
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerProvider"])(data);
            setSuccess("Proveedor registrado exitosamente");
        } catch (err) {
            setError(err.response?.data?.message || "Error inesperado");
        } finally{
            setLoading(false);
        }
    };
    // VALIDAR SI ES MAYOR DE 18
    const validateAge = (value)=>{
        const today = new Date();
        const birth = new Date(value);
        const age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birth.getDate()) {
            return age - 1;
        }
        return age;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white shadow-lg rounded-xl p-8 w-full max-w-md flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-[400px] h-[200px] mx-auto mb-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/logo-cleengo.svg",
                    alt: "CleenGo Logo",
                    fill: true,
                    className: "object-contain"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
                    lineNumber: 74,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
                lineNumber: 73,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-semibold text-center mb-6",
                children: "Registro Proveedor"
            }, void 0, false, {
                fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
                lineNumber: 82,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "flex flex-col gap-4 w-full",
                onSubmit: handleSubmit(onSubmit),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "Nombre"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
                                lineNumber: 90,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "border rounded-lg px-3 py-2",
                                ...register("name", {
                                    required: "El nombre es obligatorio"
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
                                lineNumber: 91,
                                columnNumber: 21
                            }, this),
                            errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-500",
                                children: errors.name.message
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
                                lineNumber: 95,
                                columnNumber: 37
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
                        lineNumber: 89,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "Apellido"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
                                lineNumber: 100,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "border rounded-lg px-3 py-2",
                                ...register("surname", {
                                    required: "El apellido es obligatorio"
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
                                lineNumber: 101,
                                columnNumber: 21
                            }, this),
                            errors.surname && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-500",
                                children: errors.surname.message
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
                                lineNumber: 105,
                                columnNumber: 40
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
                        lineNumber: 99,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "Correo"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
                                lineNumber: 110,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                className: "border rounded-lg px-3 py-2",
                                ...register("email", {
                                    required: "El correo es obligatorio",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Correo inválido"
                                    }
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
                                lineNumber: 111,
                                columnNumber: 21
                            }, this),
                            errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-500",
                                children: errors.email.message
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
                                lineNumber: 122,
                                columnNumber: 38
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
                        lineNumber: 109,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "Contraseña"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
                                lineNumber: 127,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "password",
                                className: `border rounded-lg px-3 py-2 
            ${errors.password ? "border-red-500" : "border-black-300"}`,
                                ...register("password", {
                                    required: "La contraseña es obligatoria",
                                    validate: {
                                        minLength: (value)=>value.length >= 8 || "Debe tener mínimo 8 caracteres",
                                        hasUpperCase: (value)=>/[A-Z]/.test(value) || "Debe incluir una mayúscula",
                                        hasLowerCase: (value)=>/[a-z]/.test(value) || "Debe incluir una minúscula",
                                        hasNumber: (value)=>/\d/.test(value) || "Debe incluir un número"
                                    }
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
                                lineNumber: 128,
                                columnNumber: 21
                            }, this),
                            errors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-500 text-sm mt-1",
                                children: errors.password.message
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
                                lineNumber: 149,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
                        lineNumber: 126,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "Confirmar contraseña"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
                                lineNumber: 157,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "password",
                                className: `border rounded-lg px-3 py-2 
            ${errors.confirmPassword ? "border-red-500" : "border-black-300"}`,
                                ...register("confirmPassword", {
                                    required: "Debes confirmar la contraseña",
                                    validate: (value)=>value === passwordValue || "Las contraseñas no coinciden"
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
                                lineNumber: 158,
                                columnNumber: 21
                            }, this),
                            errors.confirmPassword && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-500 text-sm mt-1",
                                children: errors.confirmPassword.message
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
                                lineNumber: 169,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
                        lineNumber: 156,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "Fecha de nacimiento"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
                                lineNumber: 176,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "date",
                                className: "border rounded-lg px-3 py-2",
                                ...register("birthDate", {
                                    required: "La fecha de nacimiento es obligatoria",
                                    validate: (value)=>validateAge(value) >= 18 || "Debes ser mayor de 18 años"
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
                                lineNumber: 177,
                                columnNumber: 21
                            }, this),
                            errors.birthDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-500",
                                children: errors.birthDate.message
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
                                lineNumber: 188,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
                        lineNumber: 175,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "Teléfono"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
                                lineNumber: 194,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "border rounded-lg px-3 py-2",
                                ...register("phone", {
                                    required: "El teléfono es obligatorio",
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: "Solo números"
                                    },
                                    minLength: {
                                        value: 9,
                                        message: "Debe tener al menos 9 dígitos"
                                    },
                                    maxLength: {
                                        value: 15,
                                        message: "Número demasiado largo"
                                    }
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
                                lineNumber: 195,
                                columnNumber: 21
                            }, this),
                            errors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-500",
                                children: errors.phone.message
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
                                lineNumber: 207,
                                columnNumber: 38
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
                        lineNumber: 193,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: loading,
                        className: "bg-blue-600 text-white py-2 rounded-lg hover:opacity-90 disabled:opacity-70",
                        children: loading ? "Registrando..." : "Registrarme como Proveedor"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
                        lineNumber: 210,
                        columnNumber: 17
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-500",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
                        lineNumber: 217,
                        columnNumber: 27
                    }, this),
                    success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-green-600",
                        children: success
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
                        lineNumber: 218,
                        columnNumber: 29
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
                lineNumber: 86,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/RegisterFormProvider.tsx",
        lineNumber: 71,
        columnNumber: 9
    }, this);
}
_s(RegisterProviderForm, "iOyC9kngoIrm2cwGcmJbYqNcTZE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = RegisterProviderForm;
var _c;
__turbopack_context__.k.register(_c, "RegisterProviderForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_2738ba1e._.js.map