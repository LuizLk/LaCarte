"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var pedido_item_adicional_model_1 = require("../pedido-item-adicional/pedido-item-adicional.model");
var class_transformer_1 = require("class-transformer");
var produto_adicionais_model_1 = require("../produto-adicionais/produto-adicionais.model");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("../base-entity");
var class_validator_1 = require("class-validator");
var Adicional = (function (_super) {
    tslib_1.__extends(Adicional, _super);
    function Adicional() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 20
        }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        tslib_1.__metadata("design:type", String)
    ], Adicional.prototype, "nome", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function (type) { return type = produto_adicionais_model_1.ProdutoAdicionais; }, function (produtoAdicionais) { return produtoAdicionais.adicionais; }),
        class_transformer_1.Type(function () { return produto_adicionais_model_1.ProdutoAdicionais; }),
        tslib_1.__metadata("design:type", Array)
    ], Adicional.prototype, "produtosAdicionais", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function (type) { return type = pedido_item_adicional_model_1.ItemPedidoAdicional; }, function (i) { return i.adicional; }),
        class_transformer_1.Type(function () { return produto_adicionais_model_1.ProdutoAdicionais; }),
        tslib_1.__metadata("design:type", Array)
    ], Adicional.prototype, "itemPedidoAdicionais", void 0);
    Adicional = tslib_1.__decorate([
        typeorm_1.Entity()
    ], Adicional);
    return Adicional;
}(base_entity_1.BaseEntity));
exports.Adicional = Adicional;
