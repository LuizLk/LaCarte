"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var produto_1 = require("../produto");
var response_data_1 = require("../response-data");
var typeorm_1 = require("typeorm");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var typedi_1 = require("typedi");
var class_validator_1 = require("class-validator");
var ProdutoService = (function () {
    function ProdutoService() {
    }
    ProdutoService.prototype.create = function (props) {
        var _this = this;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var responseData = new response_data_1.ResponseData();
        return class_validator_1.validate(props).then(function (errors) {
            if (errors.length > 0) {
                errors.forEach(function (val) {
                    responseData.mensagens.push(val.value);
                });
                responseData.objeto = props;
            }
            else {
                responseData.mensagens.push("OK!");
                responseData.objeto = _this.repository.persist(props);
            }
            return responseData;
        });
    };
    ProdutoService.prototype.readOne = function (id) {
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
    ProdutoService.prototype.update = function (props) {
        return this.repository.persist(props);
    };
    ProdutoService.prototype.drop = function (id) {
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
    ProdutoService.prototype.readAll = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var idCardapio = params[0];
        return this.repository.find({ cardapio: idCardapio });
    };
    tslib_1.__decorate([
        typeorm_typedi_extensions_1.OrmRepository(produto_1.Produto),
        tslib_1.__metadata("design:type", typeorm_1.Repository)
    ], ProdutoService.prototype, "repository", void 0);
    ProdutoService = tslib_1.__decorate([
        typedi_1.Service()
    ], ProdutoService);
    return ProdutoService;
}());
exports.ProdutoService = ProdutoService;
