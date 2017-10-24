"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var pedido_item_model_1 = require("./pedido-item.model");
var typedi_1 = require("typedi");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var typeorm_1 = require("typeorm");
var response_data_1 = require("../response-data");
var class_validator_1 = require("class-validator");
var ItemPedidoService = (function () {
    function ItemPedidoService() {
    }
    ItemPedidoService.prototype.create = function (props) {
        var _this = this;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var idPedido = params[0];
        var idProduto = params[1];
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
                responseData.mensagens.push("OK!");
                props.pedido = idPedido;
                props.produto = idProduto;
                responseData.objeto = _this.repository.persist(props);
            }
            return responseData;
        });
    };
    ItemPedidoService.prototype.readOne = function (id) {
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
    ItemPedidoService.prototype.update = function (props) {
        return this.repository.persist(props);
    };
    ItemPedidoService.prototype.drop = function (id) {
        var result = {};
        try {
            result = this.readOne(id)
                .then(function (res) { return (result = res); })
                .catch(function (res) { return (result = res); });
            result = this.repository
                .remove(result)
                .then()
                .catch(function (res) { return (result = res); });
        }
        catch (_a) {
        }
        return result;
    };
    ItemPedidoService.prototype.readAll = function () {
        return this.repository.find();
    };
    tslib_1.__decorate([
        typeorm_typedi_extensions_1.OrmRepository(pedido_item_model_1.ItemPedido),
        tslib_1.__metadata("design:type", typeorm_1.Repository)
    ], ItemPedidoService.prototype, "repository", void 0);
    ItemPedidoService = tslib_1.__decorate([
        typedi_1.Service()
    ], ItemPedidoService);
    return ItemPedidoService;
}());
exports.ItemPedidoService = ItemPedidoService;
