"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var restaurante_model_1 = require("./../restaurante/restaurante.model");
var typedi_1 = require("typedi");
var cardapio_model_1 = require("./cardapio.model");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var response_data_1 = require("../response-data");
var CardapioService = (function () {
    function CardapioService() {
    }
    CardapioService.prototype.create = function (props) {
        var _this = this;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var idRestaurante = params[0];
        var responseData = new response_data_1.ResponseData();
        return class_validator_1.validate(props).then(function (errors) {
            if (errors.length > 0) {
                errors.forEach(function (val) {
                    responseData.mensagens.push(val.value);
                });
                responseData.status = false;
                responseData.objeto = props;
            }
            else {
                var restaurante_1;
                _this.restauranteRepository
                    .findOneById(idRestaurante)
                    .then(function (res) { return (restaurante_1 = res); })
                    .catch(function (err) {
                    responseData.mensagens.push(err);
                    responseData.status = false;
                });
                if (responseData.mensagens.length == 0) {
                    responseData.mensagens.push("OK!");
                    props.restaurante = restaurante_1;
                    responseData.objeto = _this.repository.persist(props);
                }
            }
            return responseData;
        });
    };
    CardapioService.prototype.readOne = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            resolve(_this.repository.findOneById(id));
            var response = new response_data_1.ResponseData();
            response.mensagens.push("id não encontrado.");
            response.status = false;
            reject(response);
        });
        return promise;
    };
    CardapioService.prototype.update = function (props) {
        return this.repository.persist(props);
    };
    CardapioService.prototype.drop = function (id) {
        var cardapio;
        this.readOne(id).then(function (res) { return (cardapio = res); });
        return this.repository.remove(cardapio);
    };
    CardapioService.prototype.readAll = function () {
        return this.repository.find();
    };
    tslib_1.__decorate([
        typeorm_typedi_extensions_1.OrmRepository(cardapio_model_1.Cardapio),
        tslib_1.__metadata("design:type", typeorm_1.Repository)
    ], CardapioService.prototype, "repository", void 0);
    tslib_1.__decorate([
        typeorm_typedi_extensions_1.OrmRepository(restaurante_model_1.Restaurante),
        tslib_1.__metadata("design:type", typeorm_1.Repository)
    ], CardapioService.prototype, "restauranteRepository", void 0);
    CardapioService = tslib_1.__decorate([
        typedi_1.Service()
    ], CardapioService);
    return CardapioService;
}());
exports.CardapioService = CardapioService;
