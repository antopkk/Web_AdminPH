module.exports = [
(()=>{"use strict";return[
"[project]/app/profesores/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfesoresPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PageHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PageHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useDB$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/useDB.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tests$2f$validators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tests/validators.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const VACIO = {
    id: 0,
    nombre: "",
    cargo: "",
    especialidad: "",
    centro: "",
    email: ""
};
const CAMPOS = [
    [
        "nombre",
        "Nombre completo",
        "Ej: Claudia Peñaloza Vera"
    ],
    [
        "cargo",
        "Cargo",
        "Ej: Kinesiólogo"
    ],
    [
        "especialidad",
        "Especialidad",
        "Ej: Rehabilitación"
    ],
    [
        "centro",
        "Centro",
        "Ej: CESFAM Padre Hurtado"
    ],
    [
        "email",
        "Correo",
        "nombre@padrehurtado.cl"
    ]
];
function ProfForm({ initial, db, onSave, onClose }) {
    const [f, setF] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initial);
    const [er, setEr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const submit = ()=>{
        const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$tests$2f$validators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validarProfesor"])(f, db.profesores);
        const n = f.nombre.trim();
        setEr(e);
        if (Object.keys(e).length) return;
        onSave({
            ...f,
            nombre: n,
            cargo: f.cargo.trim(),
            especialidad: f.especialidad.trim(),
            centro: f.centro.trim(),
            email: f.email.trim()
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Modal"], {
        title: f.id ? "Editar Profesor" : "Agregar Profesor",
        onClose: onClose,
        children: [
            CAMPOS.map(([k, l, ph])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                    label: l,
                    error: er[k],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: er[k] ? "bad" : "",
                        value: f[k],
                        onChange: (e)=>setF({
                                ...f,
                                [k]: e.target.value
                            }),
                        placeholder: ph
                    }, void 0, false, {
                        fileName: "[project]/app/profesores/page.tsx",
                        lineNumber: 29,
                        columnNumber: 48
                    }, this)
                }, k, false, {
                    fileName: "[project]/app/profesores/page.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "acts",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn ghost",
                        onClick: onClose,
                        children: "Cancelar"
                    }, void 0, false, {
                        fileName: "[project]/app/profesores/page.tsx",
                        lineNumber: 31,
                        columnNumber: 29
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn",
                        onClick: submit,
                        children: "Guardar"
                    }, void 0, false, {
                        fileName: "[project]/app/profesores/page.tsx",
                        lineNumber: 31,
                        columnNumber: 94
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/profesores/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/profesores/page.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
function ProfesoresPage() {
    const { db, setDb } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useDB$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDB"])();
    const [q, setQ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(""), [modal, setModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null), [sel, setSel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const tal = (id)=>db.talleres.filter((t)=>t.profesorId === id);
    const list = db.profesores.filter((p)=>!q || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["norm"])(`${p.nombre} ${p.cargo} ${p.especialidad} ${p.centro}`).includes((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["norm"])(q)));
    const sp = db.profesores.find((p)=>p.id === sel);
    const save = (p)=>{
        setDb((d)=>({
                ...d,
                profesores: p.id ? d.profesores.map((x)=>x.id === p.id ? p : x) : [
                    ...d.profesores,
                    {
                        ...p,
                        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nextId"])(d.profesores)
                    }
                ]
            }));
        setModal(null);
    };
    const del = (p)=>{
        if (!window.confirm(`¿Eliminar a "${p.nombre}"? Sus talleres quedarán sin asignar.`)) return;
        setDb((d)=>({
                profesores: d.profesores.filter((x)=>x.id !== p.id),
                talleres: d.talleres.map((t)=>t.profesorId === p.id ? {
                        ...t,
                        profesorId: null
                    } : t)
            }));
        setSel(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PageHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: "Profesores"
            }, void 0, false, {
                fileName: "[project]/app/profesores/page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cont",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tools",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "cnt",
                                children: [
                                    list.length,
                                    " profesores"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profesores/page.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                placeholder: "Buscar profesor, cargo o centro…",
                                value: q,
                                onChange: (e)=>setQ(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/app/profesores/page.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn",
                                onClick: ()=>setModal(VACIO),
                                children: "＋ Agregar Profesor"
                            }, void 0, false, {
                                fileName: "[project]/app/profesores/page.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profesores/page.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card tbl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Profesor/a"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/profesores/page.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 24
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Cargo"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/profesores/page.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 43
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Especialidad"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/profesores/page.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 57
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Centro"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/profesores/page.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 78
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Talleres asignados"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/profesores/page.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 93
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Acciones"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/profesores/page.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 120
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/profesores/page.tsx",
                                            lineNumber: 64,
                                            columnNumber: 20
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/profesores/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: list.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "click",
                                                onClick: ()=>setSel(p.id),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "avatar",
                                                                children: p.nombre.split(" ").slice(0, 2).map((w)=>w[0]).join("")
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/profesores/page.tsx",
                                                                lineNumber: 68,
                                                                columnNumber: 23
                                                            }, this),
                                                            p.nombre
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/profesores/page.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-cargo",
                                                        children: p.cargo
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/profesores/page.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-esp",
                                                        children: p.especialidad
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/profesores/page.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 57
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-centro",
                                                        children: p.centro
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/profesores/page.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 100
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: tal(p.id).length ? tal(p.id).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "chip",
                                                                children: t.nombre
                                                            }, t.id, false, {
                                                                fileName: "[project]/app/profesores/page.tsx",
                                                                lineNumber: 70,
                                                                columnNumber: 62
                                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mut",
                                                            children: "Sin taller asignado"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/profesores/page.tsx",
                                                            lineNumber: 70,
                                                            columnNumber: 117
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/profesores/page.tsx",
                                                        lineNumber: 70,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        onClick: (e)=>e.stopPropagation(),
                                                        style: {
                                                            whiteSpace: "nowrap"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "ic",
                                                                title: "Editar",
                                                                onClick: ()=>setModal(p),
                                                                children: "✏️"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/profesores/page.tsx",
                                                                lineNumber: 72,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "ic",
                                                                title: "Eliminar",
                                                                onClick: ()=>del(p),
                                                                children: "🗑️"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/profesores/page.tsx",
                                                                lineNumber: 73,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/profesores/page.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, p.id, true, {
                                                fileName: "[project]/app/profesores/page.tsx",
                                                lineNumber: 67,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/profesores/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profesores/page.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            !list.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "empty",
                                children: "Sin resultados."
                            }, void 0, false, {
                                fileName: "[project]/app/profesores/page.tsx",
                                lineNumber: 79,
                                columnNumber: 28
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profesores/page.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    sp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card detail",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "detail-head",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: sp.nombre
                                            }, void 0, false, {
                                                fileName: "[project]/app/profesores/page.tsx",
                                                lineNumber: 84,
                                                columnNumber: 20
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "detail-sub",
                                                children: [
                                                    sp.cargo,
                                                    " · ",
                                                    sp.centro,
                                                    " · ",
                                                    sp.email
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/profesores/page.tsx",
                                                lineNumber: 84,
                                                columnNumber: 40
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/profesores/page.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "ic",
                                        onClick: ()=>setSel(null),
                                        children: "✕"
                                    }, void 0, false, {
                                        fileName: "[project]/app/profesores/page.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profesores/page.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "TALLERES ASIGNADOS"
                            }, void 0, false, {
                                fileName: "[project]/app/profesores/page.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            tal(sp.id).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "detail-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "info",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: t.nombre
                                                }, void 0, false, {
                                                    fileName: "[project]/app/profesores/page.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 39
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: [
                                                        t.dias.join(" – "),
                                                        " · ",
                                                        t.recinto
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/profesores/page.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 56
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/profesores/page.tsx",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `pill ${t.estado === "Activo" ? "" : "s"}`,
                                            children: t.estado
                                        }, void 0, false, {
                                            fileName: "[project]/app/profesores/page.tsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, t.id, true, {
                                    fileName: "[project]/app/profesores/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this)),
                            !tal(sp.id).length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mut",
                                children: "Sin talleres asignados."
                            }, void 0, false, {
                                fileName: "[project]/app/profesores/page.tsx",
                                lineNumber: 94,
                                columnNumber: 36
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profesores/page.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/profesores/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            modal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfForm, {
                initial: modal,
                db: db,
                onSave: save,
                onClose: ()=>setModal(null)
            }, void 0, false, {
                fileName: "[project]/app/profesores/page.tsx",
                lineNumber: 98,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/profesores/page.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Modal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Field",
    ()=>Field,
    "Modal",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Modal({ title, onClose, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ov",
        onMouseDown: (e)=>e.target === e.currentTarget && onClose(),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: title
                }, void 0, false, {
                    fileName: "[project]/components/Modal.tsx",
                    lineNumber: 6,
                    columnNumber: 30
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/components/Modal.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Modal.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
function Field({ label, error, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: label
            }, void 0, false, {
                fileName: "[project]/components/Modal.tsx",
                lineNumber: 12,
                columnNumber: 15
            }, this),
            children,
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "err",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/Modal.tsx",
                lineNumber: 12,
                columnNumber: 57
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Modal.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
}),
"[project]/components/PageHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PageHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function PageHeader({ title }) {
    const f = new Date().toLocaleDateString("es-CL", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "top",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: title
            }, void 0, false, {
                fileName: "[project]/components/PageHeader.tsx",
                lineNumber: 5,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                children: f.charAt(0).toUpperCase() + f.slice(1)
            }, void 0, false, {
                fileName: "[project]/components/PageHeader.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PageHeader.tsx",
        lineNumber: 4,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/db.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Carga los datos desde /data/*.json. Para usar una API, reemplaza estos imports por fetch().
__turbopack_context__.s([
    "DIAS",
    ()=>DIAS,
    "PCOL",
    ()=>PCOL,
    "PROGRAMAS",
    ()=>PROGRAMAS,
    "SEED_DB",
    ()=>SEED_DB,
    "STATS",
    ()=>STATS,
    "pcol",
    ()=>pcol
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$db$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/db.json.[json].cjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$config$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/config.json.[json].cjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$stats$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/stats.json.[json].cjs [app-ssr] (ecmascript)");
;
;
;
const SEED_DB = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$db$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
const STATS = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$stats$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
const PROGRAMAS = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$config$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].programas;
const DIAS = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$config$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dias;
const PCOL = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$config$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colores;
const pcol = (p)=>PCOL[PROGRAMAS.indexOf(p)] ?? "#999";
}),
"[project]/lib/useDB.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDB",
    ()=>useDB
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api";
function useDB() {
    const [db, setDbState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEED_DB"]);
    const dbRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEED_DB"]);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [apiError, setApiError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let active = true;
        fetch(`${API_URL}/db`).then((response)=>{
            if (!response.ok) throw new Error(`API respondió ${response.status}`);
            return response.json();
        }).then((data)=>{
            if (active) {
                dbRef.current = data;
                setDbState(data);
                setApiError(null);
            }
        }).catch(()=>{
            if (active) setApiError("No se pudo conectar con la API simulada (puerto 4000). Se muestran datos de ejemplo locales.");
        }).finally(()=>{
            if (active) setReady(true);
        });
        return ()=>{
            active = false;
        };
    }, []);
    const setDb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((updater)=>{
        const next = typeof updater === "function" ? updater(dbRef.current) : updater;
        dbRef.current = next;
        setDbState(next);
        // La API mantiene los cambios en memoria, sin persistirlos en disco.
        fetch(`${API_URL}/db`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(next)
        }).then((response)=>{
            if (!response.ok) throw new Error(`API respondió ${response.status}`);
            setApiError(null);
        }).catch(()=>setApiError("No se pudo enviar el cambio a la API. Comprueba que el puerto 4000 esté activo."));
    }, []);
    return {
        db,
        setDb,
        ready,
        apiError
    };
}
}),
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nextId",
    ()=>nextId,
    "norm",
    ()=>norm
]);
const norm = (s)=>s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const nextId = (a)=>a.reduce((m, x)=>Math.max(m, x.id), 0) + 1;
}),
"[project]/tests/validators.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validarProfesor",
    ()=>validarProfesor,
    "validarTaller",
    ()=>validarTaller
]);
// Reglas de validación puras (sin React), usadas por los formularios y por /tests.
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
function validarTaller(f, existentes, programas) {
    const e = {};
    const n = f.nombre.trim(), c = Number(f.cupo);
    if (n.length < 3) e.nombre = "Mínimo 3 caracteres.";
    else if (existentes.some((t)=>t.id !== f.id && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["norm"])(t.nombre) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["norm"])(n))) e.nombre = "Ya existe un taller con ese nombre.";
    if (!f.programa || !programas.includes(f.programa)) e.programa = "Selecciona un programa de salud.";
    if (f.recinto.trim().length < 3) e.recinto = "Ingresa el recinto.";
    if (String(f.cupo).trim() === "" || !Number.isInteger(c) || c < 1 || c > 200) e.cupo = "Entero entre 1 y 200.";
    if (!f.dias.length) e.dias = "Selecciona al menos un día.";
    return e;
}
function validarProfesor(f, existentes) {
    const e = {};
    const n = f.nombre.trim();
    if (n.length < 3) e.nombre = "Mínimo 3 caracteres.";
    else if (existentes.some((p)=>p.id !== f.id && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["norm"])(p.nombre) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["norm"])(n))) e.nombre = "Este profesor ya está registrado.";
    if (!f.cargo.trim()) e.cargo = "Ingresa el cargo.";
    if (!f.especialidad.trim()) e.especialidad = "Ingresa la especialidad.";
    if (!f.centro.trim()) e.centro = "Ingresa el centro.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = "Correo electrónico inválido.";
    return e;
}
}),
]})(),
"[project]/data/config.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "programas": [
        "Envejecimiento Activo",
        "Salud Mental y Bienestar",
        "ECNT",
        "Salud Infantil",
        "Rehabilitación"
    ],
    "dias": [
        "Lun",
        "Mar",
        "Mié",
        "Jue",
        "Vie",
        "Sáb",
        "Dom"
    ],
    "colores": [
        "#1f5f99",
        "#3fae29",
        "#f5a623",
        "#7a4f2c",
        "#9ccbec"
    ]
};
}),
"[project]/data/db.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "profesores": [
        {
            "id": 1,
            "nombre": "Claudia Peñaloza Vera",
            "cargo": "Enfermera Comunitaria",
            "especialidad": "Salud Mental / Yoga",
            "centro": "CESFAM Padre Hurtado",
            "email": "cpenaloza@padrehurtado.cl"
        },
        {
            "id": 2,
            "nombre": "Rodrigo Molina Soto",
            "cargo": "Kinesiólogo",
            "especialidad": "Actividad Física Adulto Mayor",
            "centro": "Gimnasio Municipal Norte",
            "email": "rmolina@padrehurtado.cl"
        },
        {
            "id": 3,
            "nombre": "Valentina Reyes Castro",
            "cargo": "Nutricionista",
            "especialidad": "ECNT / Hipertensión",
            "centro": "CESFAM Padre Hurtado",
            "email": "vreyes@padrehurtado.cl"
        },
        {
            "id": 4,
            "nombre": "Marco Fuentes Ibáñez",
            "cargo": "Terapeuta Ocupacional",
            "especialidad": "Rehabilitación",
            "centro": "Centro Comunitario Norte",
            "email": "mfuentes@padrehurtado.cl"
        },
        {
            "id": 5,
            "nombre": "Andrea López Muñoz",
            "cargo": "Educadora de Párvulos",
            "especialidad": "Desarrollo Infantil",
            "centro": "Jardín Infantil Municipal",
            "email": "alopez@padrehurtado.cl"
        }
    ],
    "talleres": [
        {
            "id": 1,
            "nombre": "Yoga Terapéutico",
            "programa": "Salud Mental y Bienestar",
            "dias": [
                "Lun",
                "Mié",
                "Vie"
            ],
            "cupo": 20,
            "inscritos": 87,
            "recinto": "Sede Los Aromos",
            "profesorId": 1,
            "estado": "Activo"
        },
        {
            "id": 2,
            "nombre": "Zumba Adultos Mayores",
            "programa": "Envejecimiento Activo",
            "dias": [
                "Mar",
                "Jue"
            ],
            "cupo": 25,
            "inscritos": 112,
            "recinto": "Gimnasio Norte",
            "profesorId": 2,
            "estado": "Activo"
        },
        {
            "id": 3,
            "nombre": "Control de Hipertensión",
            "programa": "ECNT",
            "dias": [
                "Lun",
                "Mié"
            ],
            "cupo": 15,
            "inscritos": 95,
            "recinto": "CESFAM P.H.",
            "profesorId": 3,
            "estado": "Activo"
        },
        {
            "id": 4,
            "nombre": "Psicomotricidad Infantil",
            "programa": "Salud Infantil",
            "dias": [
                "Vie"
            ],
            "cupo": 18,
            "inscritos": 64,
            "recinto": "Jardín Municipal",
            "profesorId": null,
            "estado": "Suspendido"
        },
        {
            "id": 5,
            "nombre": "Pilates Funcional",
            "programa": "Rehabilitación",
            "dias": [
                "Mar",
                "Jue",
                "Sáb"
            ],
            "cupo": 22,
            "inscritos": 80,
            "recinto": "Centro Deportivo",
            "profesorId": 4,
            "estado": "Activo"
        }
    ]
};
}),
"[project]/data/stats.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "asistenciaMensual": [
        [
            "Abr",
            70
        ],
        [
            "May",
            77
        ],
        [
            "Jun",
            65
        ],
        [
            "Jul",
            80
        ],
        [
            "Ago",
            83
        ],
        [
            "Sep",
            76
        ],
        [
            "Oct",
            23
        ]
    ],
    "metaAsistencia": 80,
    "desercion": 12.4,
    "nuevosMes": 23,
    "edades": [
        [
            "18–35",
            18
        ],
        [
            "36–50",
            28
        ],
        [
            "51–65",
            34
        ],
        [
            "65+",
            20
        ]
    ],
    "asistenciaPrograma": {
        "Envejecimiento Activo": 82,
        "Salud Mental y Bienestar": 74,
        "ECNT": 68,
        "Salud Infantil": 79,
        "Rehabilitación": 85
    }
};
}),
];

//# sourceMappingURL=_1kwi0c6j08qv2._.js.map