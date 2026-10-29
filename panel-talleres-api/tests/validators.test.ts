"use strict";
import QUnit from "qunit";
import { validarTaller, validarProfesor } from "./validators";
import db from "../data/db.json";
import config from "../data/config.json";
const tallerBase = { nombre: "Taller Nuevo", programa: "ECNT", recinto: "Sede Norte", cupo: "20", dias: ["Lun"] };
const profesorBase = { nombre: "Juan Pérez Soto", cargo: "Kinesiólogo", especialidad: "Rehabilitación", centro: "CESFAM", email: "jperez@padrehurtado.cl" };
QUnit.module("validación de talleres", function(){
    QUnit.test("Taller válido", function(assert){
        // Hay 3 pasos para cada test
        // 1 - colocar los datos de prueba
        const taller = { ...tallerBase };
        const errores = validarTaller(taller, db.talleres, config.programas);
        assert.deepEqual(errores, {});
    });
    QUnit.test("Taller no válido 1, nombre con menos de 3 caracteres", function(assert){
        const taller = { ...tallerBase, nombre: "ab" };
        const errores = validarTaller(taller, db.talleres, config.programas);
        assert.ok(errores.nombre);
    });
    QUnit.test("Taller no válido 2, nombre duplicado (sin distinguir tildes ni mayúsculas)", function(assert){
        const taller = { ...tallerBase, nombre: "yoga terapeutico" };
        const errores = validarTaller(taller, db.talleres, config.programas);
        assert.strictEqual(errores.nombre, "Ya existe un taller con ese nombre.");
    });
    QUnit.test("Taller válido 2, editar el mismo taller conserva su nombre", function(assert){
        const taller = { ...tallerBase, id: 1, nombre: "Yoga Terapéutico" };
        const errores = validarTaller(taller, db.talleres, config.programas);
        assert.strictEqual(errores.nombre, undefined);
    });
    QUnit.test("Taller no válido 3, programa vacío", function(assert){
        const taller = { ...tallerBase, programa: "" };
        const errores = validarTaller(taller, db.talleres, config.programas);
        assert.ok(errores.programa);
    });
    QUnit.test("Taller no válido 4, programa inexistente", function(assert){
        const taller = { ...tallerBase, programa: "Inventado" };
        const errores = validarTaller(taller, db.talleres, config.programas);
        assert.ok(errores.programa);
    });
    QUnit.test("Taller no válido 5, recinto vacío", function(assert){
        const taller = { ...tallerBase, recinto: "  " };
        const errores = validarTaller(taller, db.talleres, config.programas);
        assert.ok(errores.recinto);
    });
    QUnit.test("Taller no válido 6, sin días seleccionados", function(assert){
        const taller = { ...tallerBase, dias: [] };
        const errores = validarTaller(taller, db.talleres, config.programas);
        assert.ok(errores.dias);
    });
    QUnit.test("Cupo no válido, vacío", function(assert){
        const taller = { ...tallerBase, cupo: "" };
        const errores = validarTaller(taller, db.talleres, config.programas);
        assert.ok(errores.cupo);
    });
    QUnit.test("Cupo no válido, igual a 0", function(assert){
        const taller = { ...tallerBase, cupo: "0" };
        const errores = validarTaller(taller, db.talleres, config.programas);
        assert.ok(errores.cupo);
    });
    QUnit.test("Cupo no válido, negativo", function(assert){
        const taller = { ...tallerBase, cupo: "-5" };
        const errores = validarTaller(taller, db.talleres, config.programas);
        assert.ok(errores.cupo);
    });
    QUnit.test("Cupo no válido, mayor a 200", function(assert){
        const taller = { ...tallerBase, cupo: "201" };
        const errores = validarTaller(taller, db.talleres, config.programas);
        assert.ok(errores.cupo);
    });
    QUnit.test("Cupo no válido, decimal", function(assert){
        const taller = { ...tallerBase, cupo: "2.5" };
        const errores = validarTaller(taller, db.talleres, config.programas);
        assert.ok(errores.cupo);
    });
    QUnit.test("Cupo no válido, con letras", function(assert){
        const taller = { ...tallerBase, cupo: "abc" };
        const errores = validarTaller(taller, db.talleres, config.programas);
        assert.ok(errores.cupo);
    });
    QUnit.test("Cupo válido, mínimo 1", function(assert){
        const taller = { ...tallerBase, cupo: "1" };
        const errores = validarTaller(taller, db.talleres, config.programas);
        assert.strictEqual(errores.cupo, undefined);
    });
    QUnit.test("Cupo válido, máximo 200", function(assert){
        const taller = { ...tallerBase, cupo: "200" };
        const errores = validarTaller(taller, db.talleres, config.programas);
        assert.strictEqual(errores.cupo, undefined);
    });
});

QUnit.module("validación de profesores", function(){
    QUnit.test("Profesor válido", function(assert){
        const profesor = { ...profesorBase };
        const errores = validarProfesor(profesor, db.profesores);
        assert.deepEqual(errores, {});
    });
    QUnit.test("Profesor no válido 1, nombre duplicado", function(assert){
        const profesor = { ...profesorBase, nombre: "CLAUDIA PEÑALOZA VERA" };
        const errores = validarProfesor(profesor, db.profesores);
        assert.strictEqual(errores.nombre, "Este profesor ya está registrado.");
    });
    QUnit.test("Profesor válido 2, editar al mismo profesor", function(assert){
        const profesor = { ...profesorBase, id: 1, nombre: "Claudia Peñaloza Vera" };
        const errores = validarProfesor(profesor, db.profesores);
        assert.strictEqual(errores.nombre, undefined);
    });
    QUnit.test("Profesor no válido 2, nombre muy corto", function(assert){
        const profesor = { ...profesorBase, nombre: "Al" };
        const errores = validarProfesor(profesor, db.profesores);
        assert.ok(errores.nombre);
    });
    QUnit.test("Profesor no válido 3, cargo vacío", function(assert){
        const profesor = { ...profesorBase, cargo: " " };
        const errores = validarProfesor(profesor, db.profesores);
        assert.ok(errores.cargo);
    });
    QUnit.test("Profesor no válido 4, especialidad vacía", function(assert){
        const profesor = { ...profesorBase, especialidad: " " };
        const errores = validarProfesor(profesor, db.profesores);
        assert.ok(errores.especialidad);
    });
    QUnit.test("Profesor no válido 5, centro vacío", function(assert){
        const profesor = { ...profesorBase, centro: " " };
        const errores = validarProfesor(profesor, db.profesores);
        assert.ok(errores.centro);
    });
    QUnit.test("Correo no válido, vacío", function(assert){
        const profesor = { ...profesorBase, email: "" };
        const errores = validarProfesor(profesor, db.profesores);
        assert.ok(errores.email);
    });
    QUnit.test("Correo no válido, sin arroba", function(assert){
        const profesor = { ...profesorBase, email: "sin-arroba" };
        const errores = validarProfesor(profesor, db.profesores);
        assert.ok(errores.email);
    });
    QUnit.test("Correo no válido, sin dominio", function(assert){
        const profesor = { ...profesorBase, email: "a@b" };
        const errores = validarProfesor(profesor, db.profesores);
        assert.ok(errores.email);
    });
    QUnit.test("Correo no válido, con espacios", function(assert){
        const profesor = { ...profesorBase, email: "a b@c.cl" };
        const errores = validarProfesor(profesor, db.profesores);
        assert.ok(errores.email);
    });
});
