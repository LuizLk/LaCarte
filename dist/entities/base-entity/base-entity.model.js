"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var class_transformer_1 = require("class-transformer");
var typeorm_1 = require("typeorm");
var BaseEntity = (function () {
    function BaseEntity() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryColumn("int", {
            type: "int",
            generated: true
        }),
        tslib_1.__metadata("design:type", Number)
    ], BaseEntity.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.CreateDateColumn(),
        class_transformer_1.Exclude(),
        tslib_1.__metadata("design:type", Date)
    ], BaseEntity.prototype, "createdAt", void 0);
    tslib_1.__decorate([
        typeorm_1.UpdateDateColumn(),
        class_transformer_1.Exclude(),
        tslib_1.__metadata("design:type", Date)
    ], BaseEntity.prototype, "updatedAt", void 0);
    tslib_1.__decorate([
        typeorm_1.VersionColumn(),
        class_transformer_1.Exclude(),
        tslib_1.__metadata("design:type", Number)
    ], BaseEntity.prototype, "version", void 0);
    BaseEntity = tslib_1.__decorate([
        typeorm_1.AbstractEntity()
    ], BaseEntity);
    return BaseEntity;
}());
exports.BaseEntity = BaseEntity;
