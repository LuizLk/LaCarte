"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var cliente_model_1 = require("../cliente/cliente.model");
var typeorm_1 = require("typeorm");
var typeorm_2 = require("typeorm");
var base_entity_1 = require("../base-entity");
var cardapio_1 = require("../cardapio");
var mesa_model_1 = require("../mesa/mesa.model");
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var Restaurante = (function (_super) {
    tslib_1.__extends(Restaurante, _super);
    function Restaurante() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        typeorm_2.Column({
            length: 100
        }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        tslib_1.__metadata("design:type", String)
    ], Restaurante.prototype, "nome", void 0);
    tslib_1.__decorate([
        typeorm_2.Column({
            length: 150,
            nullable: true
        }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        tslib_1.__metadata("design:type", String)
    ], Restaurante.prototype, "descricao", void 0);
    tslib_1.__decorate([
        typeorm_2.Column({
            length: 150
        }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        tslib_1.__metadata("design:type", String)
    ], Restaurante.prototype, "endereco", void 0);
    tslib_1.__decorate([
        typeorm_2.Column({
            length: 20
        }),
        class_validator_1.IsNumberString(),
        tslib_1.__metadata("design:type", String)
    ], Restaurante.prototype, "telefone", void 0);
    tslib_1.__decorate([
        typeorm_2.Column({ nullable: true }),
        class_validator_1.IsUrl(),
        tslib_1.__metadata("design:type", String)
    ], Restaurante.prototype, "site", void 0);
    tslib_1.__decorate([
        typeorm_2.Column(),
        class_transformer_1.Exclude(),
        tslib_1.__metadata("design:type", Boolean)
    ], Restaurante.prototype, "ativo", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function (type) { return type = cliente_model_1.Cliente; }, function (c) { return c.restaurantes; }),
        class_transformer_1.Type(function () { return cliente_model_1.Cliente; }),
        tslib_1.__metadata("design:type", cliente_model_1.Cliente)
    ], Restaurante.prototype, "cliente", void 0);
    tslib_1.__decorate([
        typeorm_2.OneToMany(function (type) { return type = cardapio_1.Cardapio; }, function (cardapio) { return cardapio.restaurante; }, {
            lazy: true
        }),
        class_transformer_1.Type(function () { return cardapio_1.Cardapio; }),
        tslib_1.__metadata("design:type", Array)
    ], Restaurante.prototype, "cardapios", void 0);
    tslib_1.__decorate([
        typeorm_2.OneToMany(function (type) { return type = mesa_model_1.Mesa; }, function (mesa) { return mesa.restaurante; }, {
            lazy: true
        }),
        class_transformer_1.Type(function () { return mesa_model_1.Mesa; }),
        tslib_1.__metadata("design:type", Array)
    ], Restaurante.prototype, "mesas", void 0);
    Restaurante = tslib_1.__decorate([
        typeorm_2.Entity()
    ], Restaurante);
    return Restaurante;
}(base_entity_1.BaseEntity));
exports.Restaurante = Restaurante;
