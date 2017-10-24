"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var pedido_item_model_1 = require("../pedido-item/pedido-item.model");
var produto_adicionais_model_1 = require("../produto-adicionais/produto-adicionais.model");
var cardapio_1 = require("../cardapio");
var produto_tipo_1 = require("../produto-tipo");
var base_entity_1 = require("../base-entity");
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var Produto = (function (_super) {
    tslib_1.__extends(Produto, _super);
    function Produto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 50
        }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        tslib_1.__metadata("design:type", String)
    ], Produto.prototype, "nome", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 100,
            nullable: true
        }),
        class_validator_1.IsOptional(),
        class_validator_1.IsString(),
        tslib_1.__metadata("design:type", String)
    ], Produto.prototype, "descricao", void 0);
    tslib_1.__decorate([
        typeorm_1.Column(),
        class_validator_1.IsNumber(),
        tslib_1.__metadata("design:type", Number)
    ], Produto.prototype, "valor", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 256
        }),
        class_validator_1.IsUrl(),
        tslib_1.__metadata("design:type", String)
    ], Produto.prototype, "urlImagem", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            default: true
        }),
        class_transformer_1.Exclude(),
        tslib_1.__metadata("design:type", Boolean)
    ], Produto.prototype, "ativo", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToMany(function (type) { return cardapio_1.Cardapio; }),
        typeorm_1.JoinTable(),
        tslib_1.__metadata("design:type", Array)
    ], Produto.prototype, "cardapios", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function (type) { return (type = produto_tipo_1.TipoProduto); }, function (tipoProduto) { return tipoProduto.produtos; }),
        class_transformer_1.Type(function () { return produto_tipo_1.TipoProduto; }),
        tslib_1.__metadata("design:type", produto_tipo_1.TipoProduto)
    ], Produto.prototype, "tipoProduto", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function (type) { return (type = produto_adicionais_model_1.ProdutoAdicionais); }, function (produtoAdicionais) { return produtoAdicionais.produto; }),
        class_transformer_1.Type(function () { return produto_adicionais_model_1.ProdutoAdicionais; }),
        tslib_1.__metadata("design:type", Array)
    ], Produto.prototype, "produtosAdicionais", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function (type) { return (type = pedido_item_model_1.ItemPedido); }, function (itemPedido) { return itemPedido.produto; }),
        class_transformer_1.Type(function () { return pedido_item_model_1.ItemPedido; }),
        tslib_1.__metadata("design:type", Array)
    ], Produto.prototype, "itensPedido", void 0);
    Produto = tslib_1.__decorate([
        typeorm_1.Entity()
    ], Produto);
    return Produto;
}(base_entity_1.BaseEntity));
exports.Produto = Produto;
