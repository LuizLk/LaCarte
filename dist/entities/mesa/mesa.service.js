"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var restaurante_model_1 = require("./../restaurante/restaurante.model");
var mesa_model_1 = require("./mesa.model");
var typedi_1 = require("typedi");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var response_data_1 = require("../response-data");
var MesaService = (function () {
    function MesaService() {
    }
    MesaService.prototype.create = function (props) {
        var _this = this;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var idRestaurante = params[0];
        var responseData = new response_data_1.ResponseData();
        return class_validator_1.validate(props).then(function (errors) {
            if (errors.length > 0) {
                errors.forEach(function (val) {
                    responseData.mensagens.push(val.value);
                });
                responseData.status = false;
                responseData.objeto = props;
            }
            else {
                var restaurante_1;
                _this.restauranteRepository
                    .findOneById(idRestaurante)
                    .then(function (res) { return (restaurante_1 = res); })
                    .catch(function (err) {
                    responseData.mensagens.push(err);
                    responseData.status = false;
                });
                if (responseData.mensagens.length == 0) {
                    responseData.mensagens.push("OK!");
                    props.restaurante = restaurante_1;
                    responseData.objeto = _this.mesaRepository.persist(props);
                }
            }
            return responseData;
        });
    };
    MesaService.prototype.readOne = function (id) {
        var result = {};
        try {
            result = this.mesaRepository
                .findOneById(id)
                .then()
                .catch(function (res) { return (result = res); });
        }
        catch (_a) {
        }
        return result;
    };
    MesaService.prototype.update = function (props) {
        return this.mesaRepository.persist(props);
    };
    MesaService.prototype.drop = function (id) {
        var result = {};
        try {
            result = this.readOne(id)
                .then(function (res) { return (result = res); })
                .catch(function (res) { return (result = res); });
            result = this.mesaRepository
                .remove(result)
                .then()
                .catch(function (res) { return (result = res); });
        }
        catch (_a) {
        }
        return result;
    };
    MesaService.prototype.readAll = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var idRestaurante = params[0];
        return this.mesaRepository.find({ cardapio: idRestaurante });
    };
    tslib_1.__decorate([
        typeorm_typedi_extensions_1.OrmRepository(mesa_model_1.Mesa),
        tslib_1.__metadata("design:type", typeorm_1.Repository)
    ], MesaService.prototype, "mesaRepository", void 0);
    tslib_1.__decorate([
        typeorm_typedi_extensions_1.OrmRepository(restaurante_model_1.Restaurante),
        tslib_1.__metadata("design:type", typeorm_1.Repository)
    ], MesaService.prototype, "restauranteRepository", void 0);
    MesaService = tslib_1.__decorate([
        typedi_1.Service()
    ], MesaService);
    return MesaService;
}());
exports.MesaService = MesaService;
