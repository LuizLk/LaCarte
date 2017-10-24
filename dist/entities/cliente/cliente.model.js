"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var restaurante_model_1 = require("../restaurante/restaurante.model");
var class_transformer_1 = require("class-transformer");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("../base-entity");
var class_validator_1 = require("class-validator");
var Cliente = (function (_super) {
    tslib_1.__extends(Cliente, _super);
    function Cliente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        typeorm_1.Column({ unique: true }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsEmail(),
        tslib_1.__metadata("design:type", String)
    ], Cliente.prototype, "email", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 20,
            unique: true
        }),
        class_validator_1.Length(14, 20),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumberString(),
        tslib_1.__metadata("design:type", String)
    ], Cliente.prototype, "cnpj", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 50
        }),
        class_validator_1.IsNotEmpty(),
        tslib_1.__metadata("design:type", String)
    ], Cliente.prototype, "senha", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            nullable: true
        }),
        class_validator_1.IsOptional(),
        class_validator_1.IsNumberString(),
        tslib_1.__metadata("design:type", String)
    ], Cliente.prototype, "telefone", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 100
        }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        tslib_1.__metadata("design:type", String)
    ], Cliente.prototype, "nome", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            nullable: true
        }),
        class_validator_1.IsOptional(),
        class_validator_1.IsString(),
        tslib_1.__metadata("design:type", String)
    ], Cliente.prototype, "token", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function (type) { return restaurante_model_1.Restaurante; }, function (r) { return r.cliente; }, {
            lazy: true
        }),
        class_transformer_1.Type(function () { return restaurante_model_1.Restaurante; }),
        tslib_1.__metadata("design:type", Array)
    ], Cliente.prototype, "restaurantes", void 0);
    Cliente = tslib_1.__decorate([
        typeorm_1.Entity()
    ], Cliente);
    return Cliente;
}(base_entity_1.BaseEntity));
exports.Cliente = Cliente;
