"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var pedido_item_adicional_model_1 = require("../pedido-item-adicional/pedido-item-adicional.model");
var produto_model_1 = require("../produto/produto.model");
var pedido_model_1 = require("../pedido/pedido.model");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("../base-entity");
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var ItemPedido = (function (_super) {
    tslib_1.__extends(ItemPedido, _super);
    function ItemPedido() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        typeorm_1.Column({
            type: 'int'
        }),
        class_validator_1.IsInt(),
        tslib_1.__metadata("design:type", Number)
    ], ItemPedido.prototype, "quantidade", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            nullable: true
        }),
        class_validator_1.IsNumber(),
        tslib_1.__metadata("design:type", Number)
    ], ItemPedido.prototype, "valorDesconto", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function (type) { return type = pedido_model_1.Pedido; }, function (p) { return p.itens; }),
        class_transformer_1.Type(function () { return pedido_model_1.Pedido; }),
        tslib_1.__metadata("design:type", pedido_model_1.Pedido)
    ], ItemPedido.prototype, "pedido", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function (type) { return type = produto_model_1.Produto; }, function (produto) { return produto.itensPedido; }),
        class_transformer_1.Type(function () { return produto_model_1.Produto; }),
        tslib_1.__metadata("design:type", produto_model_1.Produto)
    ], ItemPedido.prototype, "produto", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function (type) { return type = pedido_item_adicional_model_1.ItemPedidoAdicional; }, function (i) { return i.itemPedido; }),
        class_transformer_1.Type(function () { return pedido_item_adicional_model_1.ItemPedidoAdicional; }),
        tslib_1.__metadata("design:type", Array)
    ], ItemPedido.prototype, "adicionais", void 0);
    ItemPedido = tslib_1.__decorate([
        typeorm_1.Entity()
    ], ItemPedido);
    return ItemPedido;
}(base_entity_1.BaseEntity));
exports.ItemPedido = ItemPedido;
