"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var restaurante_1 = require("../restaurante");
var pedido_model_1 = require("../pedido/pedido.model");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("../base-entity");
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var Mesa = (function (_super) {
    tslib_1.__extends(Mesa, _super);
    function Mesa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        typeorm_1.Column({
            unique: true
        }),
        class_validator_1.IsNotEmpty({ message: "Número não pode ser vazio." }),
        class_validator_1.IsNumber({ message: "Deve ser um número do tipo inteiro." }),
        tslib_1.__metadata("design:type", Number)
    ], Mesa.prototype, "numero", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 100
        }),
        class_validator_1.IsString(),
        tslib_1.__metadata("design:type", String)
    ], Mesa.prototype, "qrcode", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function (type) { return pedido_model_1.Pedido; }, function (pedido) { return pedido.mesa; }),
        class_transformer_1.Type(function () { return pedido_model_1.Pedido; }),
        tslib_1.__metadata("design:type", Array)
    ], Mesa.prototype, "pedidos", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function (type) { return restaurante_1.Restaurante; }, function (restaurante) { return restaurante.mesas; }),
        class_transformer_1.Type(function () { return restaurante_1.Restaurante; }),
        tslib_1.__metadata("design:type", restaurante_1.Restaurante)
    ], Mesa.prototype, "restaurante", void 0);
    Mesa = tslib_1.__decorate([
        typeorm_1.Entity()
    ], Mesa);
    return Mesa;
}(base_entity_1.BaseEntity));
exports.Mesa = Mesa;
