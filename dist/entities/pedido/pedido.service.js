"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var pedido_model_1 = require("./pedido.model");
var typedi_1 = require("typedi");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var typeorm_1 = require("typeorm");
var response_data_1 = require("../response-data");
var class_validator_1 = require("class-validator");
var PedidoService = (function () {
    function PedidoService() {
    }
    PedidoService.prototype.create = function (props) {
        var _this = this;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var idUser = params[0];
        var response = new response_data_1.ResponseData();
        return class_validator_1.validate(props).then(function (errors) {
            if (errors.length > 0) {
                errors.forEach(function (val) {
                    response.mensagens.push(val.value);
                });
                response.status = false;
                response.objeto = props;
            }
            else {
                response.mensagens.push("OK!");
                props = idUser;
                response.objeto = _this.repository.persist(props);
            }
            return response;
        });
    };
    PedidoService.prototype.readOne = function (id) {
        var result = {};
        try {
            result = this.repository
                .findOneById(id)
                .then()
                .catch(function (res) { return (result = res); });
        }
        catch (_a) {
        }
        return result;
    };
    PedidoService.prototype.update = function (props) {
        return this.repository.persist(props);
    };
    PedidoService.prototype.drop = function (id) {
        var result = {};
        try {
            result = this.readOne(id)
                .then(function (res) { return (result = res); })
                .catch(function (res) { return (result = res); });
            result = this.repository.remove(result)
                .then()
                .catch(function (res) { return (result = res); });
        }
        catch (_a) {
        }
        return result;
    };
    PedidoService.prototype.readAll = function () {
        return this.repository.find();
    };
    tslib_1.__decorate([
        typeorm_typedi_extensions_1.OrmRepository(pedido_model_1.Pedido),
        tslib_1.__metadata("design:type", typeorm_1.Repository)
    ], PedidoService.prototype, "repository", void 0);
    PedidoService = tslib_1.__decorate([
        typedi_1.Service()
    ], PedidoService);
    return PedidoService;
}());
exports.PedidoService = PedidoService;
