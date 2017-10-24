"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var produto_tipo_model_1 = require("./produto-tipo.model");
var typedi_1 = require("typedi");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var typeorm_1 = require("typeorm");
var TipoProdutoService = (function () {
    function TipoProdutoService() {
    }
    TipoProdutoService.prototype.create = function (props) {
        return this.repository.persist(props);
    };
    TipoProdutoService.prototype.readOne = function (id) {
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
    TipoProdutoService.prototype.update = function (props) {
        return this.repository.persist(props);
    };
    TipoProdutoService.prototype.drop = function (id) {
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
    TipoProdutoService.prototype.readAll = function () {
        return this.repository.find();
    };
    tslib_1.__decorate([
        typeorm_typedi_extensions_1.OrmRepository(produto_tipo_model_1.TipoProduto),
        tslib_1.__metadata("design:type", typeorm_1.Repository)
    ], TipoProdutoService.prototype, "repository", void 0);
    TipoProdutoService = tslib_1.__decorate([
        typedi_1.Service()
    ], TipoProdutoService);
    return TipoProdutoService;
}());
exports.TipoProdutoService = TipoProdutoService;
