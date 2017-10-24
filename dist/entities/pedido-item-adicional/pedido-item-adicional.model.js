"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var adicional_model_1 = require("./../adicional/adicional.model");
var pedido_item_model_1 = require("../pedido-item/pedido-item.model");
var pedido_model_1 = require("../pedido/pedido.model");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("../base-entity");
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var ItemPedidoAdicional = (function (_super) {
    tslib_1.__extends(ItemPedidoAdicional, _super);
    function ItemPedidoAdicional() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        typeorm_1.Column({
            type: 'int'
        }),
        class_validator_1.IsInt(),
        tslib_1.__metadata("design:type", Number)
    ], ItemPedidoAdicional.prototype, "quantidade", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function (type) { return type = pedido_item_model_1.ItemPedido; }, function (itemPedido) { return itemPedido.adicionais; }),
        class_transformer_1.Type(function () { return pedido_model_1.Pedido; }),
        tslib_1.__metadata("design:type", pedido_item_model_1.ItemPedido)
    ], ItemPedidoAdicional.prototype, "itemPedido", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function (type) { return type = adicional_model_1.Adicional; }, function (a) { return a.itemPedidoAdicionais; }),
        class_transformer_1.Type(function () { return adicional_model_1.Adicional; }),
        tslib_1.__metadata("design:type", adicional_model_1.Adicional)
    ], ItemPedidoAdicional.prototype, "adicional", void 0);
    ItemPedidoAdicional = tslib_1.__decorate([
        typeorm_1.Entity()
    ], ItemPedidoAdicional);
    return ItemPedidoAdicional;
}(base_entity_1.BaseEntity));
exports.ItemPedidoAdicional = ItemPedidoAdicional;
