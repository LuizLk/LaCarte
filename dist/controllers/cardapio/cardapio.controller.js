"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var class_transformer_1 = require("class-transformer");
var routing_controllers_1 = require("routing-controllers");
var typedi_1 = require("typedi");
var cardapio_1 = require("../../entities/cardapio");
var passport_1 = require("../../config/passport");
var CardapioController = (function () {
    function CardapioController() {
    }
    CardapioController.prototype.httpPost = function (props) {
        var cardapio = class_transformer_1.plainToClass(cardapio_1.Cardapio, props);
        return this.cardapioService.create(cardapio);
    };
    CardapioController.prototype.httpGetAll = function () {
        return this.cardapioService.readAll();
    };
    CardapioController.prototype.httpGet = function (id) {
        return this.cardapioService.readOne(id);
    };
    tslib_1.__decorate([
        typedi_1.Inject(),
        tslib_1.__metadata("design:type", cardapio_1.CardapioService)
    ], CardapioController.prototype, "cardapioService", void 0);
    tslib_1.__decorate([
        routing_controllers_1.Post(),
        routing_controllers_1.HttpCode(201),
        tslib_1.__param(0, routing_controllers_1.Body({
            required: true
        })),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], CardapioController.prototype, "httpPost", null);
    tslib_1.__decorate([
        routing_controllers_1.Get(),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Promise)
    ], CardapioController.prototype, "httpGetAll", null);
    tslib_1.__decorate([
        routing_controllers_1.Get("/:id"),
        tslib_1.__param(0, routing_controllers_1.Param("id")),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number]),
        tslib_1.__metadata("design:returntype", Promise)
    ], CardapioController.prototype, "httpGet", null);
    CardapioController = tslib_1.__decorate([
        routing_controllers_1.UseBefore(function () { return passport_1.default.authenticate(); }),
        routing_controllers_1.JsonController("/cardapio")
    ], CardapioController);
    return CardapioController;
}());
exports.CardapioController = CardapioController;
