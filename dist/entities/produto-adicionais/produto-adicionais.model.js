"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var adicional_model_1 = require("./../adicional/adicional.model");
var produto_model_1 = require("./../produto/produto.model");
var produto_tipo_1 = require("../produto-tipo");
var base_entity_1 = require("../base-entity");
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var ProdutoAdicionais = (function (_super) {
    tslib_1.__extends(ProdutoAdicionais, _super);
    function ProdutoAdicionais() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        typeorm_1.Column({
            precision: 10,
            scale: 2
        }),
        class_validator_1.IsNumber(),
        tslib_1.__metadata("design:type", Number)
    ], ProdutoAdicionais.prototype, "valor", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function (type) { return type = produto_model_1.Produto; }, function (produto) { return produto.produtosAdicionais; }),
        class_transformer_1.Type(function () { return produto_model_1.Produto; }),
        tslib_1.__metadata("design:type", produto_model_1.Produto)
    ], ProdutoAdicionais.prototype, "produto", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function (type) { return type = adicional_model_1.Adicional; }, function (adicionais) { return adicionais.produtosAdicionais; }),
        class_transformer_1.Type(function () { return produto_tipo_1.TipoProduto; }),
        tslib_1.__metadata("design:type", adicional_model_1.Adicional)
    ], ProdutoAdicionais.prototype, "adicionais", void 0);
    ProdutoAdicionais = tslib_1.__decorate([
        typeorm_1.Entity()
    ], ProdutoAdicionais);
    return ProdutoAdicionais;
}(base_entity_1.BaseEntity));
exports.ProdutoAdicionais = ProdutoAdicionais;
