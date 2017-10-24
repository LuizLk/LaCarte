"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var produto_model_1 = require("./../produto/produto.model");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("../base-entity");
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var TipoProduto = (function (_super) {
    tslib_1.__extends(TipoProduto, _super);
    function TipoProduto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 20
        }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        tslib_1.__metadata("design:type", String)
    ], TipoProduto.prototype, "nome", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function (type) { return type = produto_model_1.Produto; }, function (produtos) { return produtos.tipoProduto; }),
        class_transformer_1.Type(function () { return produto_model_1.Produto; }),
        tslib_1.__metadata("design:type", Array)
    ], TipoProduto.prototype, "produtos", void 0);
    TipoProduto = tslib_1.__decorate([
        typeorm_1.Entity()
    ], TipoProduto);
    return TipoProduto;
}(base_entity_1.BaseEntity));
exports.TipoProduto = TipoProduto;
