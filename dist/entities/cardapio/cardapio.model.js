"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var produto_model_1 = require("./../produto/produto.model");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("../base-entity");
var restaurante_1 = require("../restaurante");
var class_validator_1 = require("class-validator");
var Cardapio = (function (_super) {
    tslib_1.__extends(Cardapio, _super);
    function Cardapio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 50
        }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        tslib_1.__metadata("design:type", String)
    ], Cardapio.prototype, "nome", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 250,
            nullable: true
        }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        tslib_1.__metadata("design:type", String)
    ], Cardapio.prototype, "descricao", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            default: true
        }),
        tslib_1.__metadata("design:type", Boolean)
    ], Cardapio.prototype, "ativo", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function (type) { return (type = restaurante_1.Restaurante); }, function (restaurante) { return restaurante.cardapios; }),
        tslib_1.__metadata("design:type", restaurante_1.Restaurante)
    ], Cardapio.prototype, "restaurante", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToMany(function (type) { return (type = produto_model_1.Produto); }, function (produtos) { return produtos.cardapios; }, {
            lazy: true
        }),
        tslib_1.__metadata("design:type", Array)
    ], Cardapio.prototype, "produtos", void 0);
    Cardapio = tslib_1.__decorate([
        typeorm_1.Entity("cardapios")
    ], Cardapio);
    return Cardapio;
}(base_entity_1.BaseEntity));
exports.Cardapio = Cardapio;
