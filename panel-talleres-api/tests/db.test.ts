"use strict";
import QUnit from "qunit";
import db from "../data/db.json";
import config from "../data/config.json";
import stats from "../data/stats.json";
import { validarTaller, validarProfesor } from "./validators";
QUnit.module("integridad de data/*.json", function(){
    QUnit.test("ids de profesores únicos", function(assert){
        const ids = db.profesores.map(p => p.id);
        const unicos = new Set(ids).size;
        assert.strictEqual(unicos, ids.length);
    });
    QUnit.test("ids de talleres únicos", function(assert){
        const ids = db.talleres.map(t => t.id);
        const unicos = new Set(ids).size;
        assert.strictEqual(unicos, ids.length);
    });
    QUnit.test("cada taller referencia un profesor existente o null", function(assert){
        const ids = new Set(db.profesores.map(p => p.id));
        const invalidos = db.talleres.filter(t => t.profesorId !== null && !ids.has(t.profesorId));
        assert.strictEqual(invalidos.length, 0);
    });
    QUnit.test("programas y días de los talleres existen en config", function(assert){
        const invalidos = db.talleres.filter(t => !config.programas.includes(t.programa) || t.dias.some(d => !config.dias.includes(d)));
        assert.strictEqual(invalidos.length, 0);
    });
    QUnit.test("estado de cada taller es Activo o Suspendido", function(assert){
        const permitidos = ["Activo", "Suspendido"];
        const invalidos = db.talleres.filter(t => !permitidos.includes(t.estado));
        assert.strictEqual(invalidos.length, 0);
    });
    QUnit.test("los talleres semilla pasan la validación del formulario", function(assert){
        const conErrores = db.talleres.filter(t => Object.keys(validarTaller(t, db.talleres, config.programas)).length > 0);
        assert.strictEqual(conErrores.length, 0);
    });
    QUnit.test("los profesores semilla pasan la validación del formulario", function(assert){
        const conErrores = db.profesores.filter(p => Object.keys(validarProfesor(p, db.profesores)).length > 0);
        assert.strictEqual(conErrores.length, 0);
    });
    QUnit.test("las estadísticas cubren todos los programas y hay un color por programa", function(assert){
        const faltantes = config.programas.filter(p => !(p in stats.asistenciaPrograma));
        assert.ok(faltantes.length === 0 && config.colores.length >= config.programas.length);
    });
});
