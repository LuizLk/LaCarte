"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var restaurante_model_1 = require("./restaurante.model");
var typedi_1 = require("typedi");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var response_data_1 = require("../response-data");
var RestauranteService = (function () {
    function RestauranteService() {
    }
    RestauranteService.prototype.create = function (props) {
        var _this = this;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var idCliente = params[0];
        var responseData = new response_data_1.ResponseData();
        return class_validator_1.validate(props).then(function (errors) {
            if (errors.length > 0) {
                errors.forEach(function (val) {
                    responseData.mensagens.push(val.value);
                    idCliente.mensagens.push(val.value);
                });
                responseData.status = false;
                responseData.objeto = props;
            }
            else {
                responseData.mensagens.push("OK!");
                props.cliente = idCliente;
                responseData.objeto = _this.restauranteRepository.persist(props);
            }
            return responseData;
        });
    };
    RestauranteService.prototype.readOne = function (id) {
        var result = {};
        try {
            result = this.restauranteRepository
                .findOneById(id)
                .then()
                .catch(function (res) { return (result = res); });
        }
        catch (_a) {
        }
        return result;
    };
    RestauranteService.prototype.update = function (props) {
        return this.restauranteRepository.persist(props);
    };
    RestauranteService.prototype.drop = function (id) {
        var result = {};
        try {
            result = this.readOne(id)
                .then(function (res) { return (result = res); })
                .catch(function (res) { return (result = res); });
            result = this.restauranteRepository
                .remove(result)
                .then()
                .catch(function (res) { return (result = res); });
        }
        catch (_a) {
        }
        return result;
    };
    RestauranteService.prototype.readAll = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        return this.restauranteRepository.find();
    };
    tslib_1.__decorate([
        typeorm_typedi_extensions_1.OrmRepository(restaurante_model_1.Restaurante),
        tslib_1.__metadata("design:type", typeorm_1.Repository)
    ], RestauranteService.prototype, "restauranteRepository", void 0);
    RestauranteService = tslib_1.__decorate([
        typedi_1.Service()
    ], RestauranteService);
    return RestauranteService;
}());
exports.RestauranteService = RestauranteService;
