"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var class_transformer_1 = require("class-transformer");
var pedido_model_1 = require("./../pedido/pedido.model");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("../base-entity");
var class_validator_1 = require("class-validator");
var User = (function (_super) {
    tslib_1.__extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        typeorm_1.Column({
            nullable: true
        }),
        class_validator_1.IsOptional(),
        class_validator_1.IsDate(),
        tslib_1.__metadata("design:type", Date)
    ], User.prototype, "dataNascimento", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ unique: true }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsEmail(),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "email", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            unique: true,
            length: 11
        }),
        class_validator_1.Length(11, 11),
        class_validator_1.IsNumberString(),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "cpf", void 0);
    tslib_1.__decorate([
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "senha", void 0);
    tslib_1.__decorate([
        typeorm_1.Column(),
        class_validator_1.IsNumberString(),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "telefone", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 100
        }),
        class_validator_1.IsOptional(),
        class_validator_1.IsString(),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "sobrenome", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 20
        }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "nome", void 0);
    tslib_1.__decorate([
        typeorm_1.Column(),
        class_validator_1.IsOptional(),
        class_validator_1.IsString(),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "token", void 0);
    tslib_1.__decorate([
        typeorm_1.Column(),
        class_validator_1.IsOptional(),
        class_validator_1.IsString(),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "tokenFacebook", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function () { return pedido_model_1.Pedido; }, function (pedido) { return pedido.user; }),
        class_transformer_1.Type(function () { return pedido_model_1.Pedido; }),
        tslib_1.__metadata("design:type", Array)
    ], User.prototype, "pedidos", void 0);
    User = tslib_1.__decorate([
        typeorm_1.Entity()
    ], User);
    return User;
}(base_entity_1.BaseEntity));
exports.User = User;
