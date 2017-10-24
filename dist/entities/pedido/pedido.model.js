"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mesa_model_1 = require("./../mesa/mesa.model");
var pedido_item_model_1 = require("./../pedido-item/pedido-item.model");
var user_model_1 = require("../user/user.model");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("../base-entity");
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var Pedido = (function (_super) {
    tslib_1.__extends(Pedido, _super);
    function Pedido() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        typeorm_1.Column({
            nullable: true,
            precision: 10
        }),
        class_validator_1.IsNumber({ message: "Deve ser um número do tipo inteiro." }),
        tslib_1.__metadata("design:type", Number)
    ], Pedido.prototype, "valorTotal", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            default: false
        }),
        class_validator_1.IsBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], Pedido.prototype, "fechado", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function (type) { return type = user_model_1.User; }, function (user) { return user.pedidos; }),
        class_transformer_1.Type(function () { return user_model_1.User; }),
        tslib_1.__metadata("design:type", user_model_1.User)
    ], Pedido.prototype, "user", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function (type) { return type = mesa_model_1.Mesa; }, function (mesa) { return mesa.pedidos; }),
        class_transformer_1.Type(function () { return mesa_model_1.Mesa; }),
        tslib_1.__metadata("design:type", mesa_model_1.Mesa)
    ], Pedido.prototype, "mesa", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function (type) { return type = pedido_item_model_1.ItemPedido; }, function (item) { return item.pedido; }),
        class_transformer_1.Type(function () { return pedido_item_model_1.ItemPedido; }),
        tslib_1.__metadata("design:type", Array)
    ], Pedido.prototype, "itens", void 0);
    Pedido = tslib_1.__decorate([
        typeorm_1.Entity()
    ], Pedido);
    return Pedido;
}(base_entity_1.BaseEntity));
exports.Pedido = Pedido;
