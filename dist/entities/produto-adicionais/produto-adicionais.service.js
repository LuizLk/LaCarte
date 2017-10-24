"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var produto_adicionais_model_1 = require("./produto-adicionais.model");
var typedi_1 = require("typedi");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var typeorm_1 = require("typeorm");
var ProdutoAdicionaisService = (function () {
    function ProdutoAdicionaisService() {
    }
    ProdutoAdicionaisService.prototype.create = function (props) {
        return this.repository.persist(props);
    };
    ProdutoAdicionaisService.prototype.readOne = function (id) {
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
    ProdutoAdicionaisService.prototype.update = function (props) {
        return this.repository.persist(props);
    };
    ProdutoAdicionaisService.prototype.drop = function (id) {
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
    ProdutoAdicionaisService.prototype.readAll = function () {
        return this.repository.find();
    };
    tslib_1.__decorate([
        typeorm_typedi_extensions_1.OrmRepository(produto_adicionais_model_1.ProdutoAdicionais),
        tslib_1.__metadata("design:type", typeorm_1.Repository)
    ], ProdutoAdicionaisService.prototype, "repository", void 0);
    ProdutoAdicionaisService = tslib_1.__decorate([
        typedi_1.Service()
    ], ProdutoAdicionaisService);
    return ProdutoAdicionaisService;
}());
exports.ProdutoAdicionaisService = ProdutoAdicionaisService;
