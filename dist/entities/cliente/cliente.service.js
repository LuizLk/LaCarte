"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var cliente_1 = require("../cliente");
var typedi_1 = require("typedi");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var response_data_1 = require("../response-data");
var ClienteService = (function () {
    function ClienteService() {
    }
    ClienteService.prototype.create = function (props) {
        var _this = this;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
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
                responseData.mensagens.push("OK!");
                responseData.objeto = _this.repository.persist(props);
            }
            return responseData;
        });
    };
    ClienteService.prototype.readOne = function (id) {
        var result = new response_data_1.ResponseData();
        return this.repository
            .findOneById(id)
            .then(function (res) {
            result.objeto = res;
        })
            .catch(function (res) { return (result.mensagens = res); });
    };
    ClienteService.prototype.update = function (props) {
        return this.repository.persist(props);
    };
    ClienteService.prototype.drop = function (id) {
        var result = {};
        try {
            result = this.readOne(id)
                .then(function (res) { return (result = res); })
                .catch(function (res) { return (result = res); });
            result = this.repository
                .remove(result)
                .then()
                .catch(function (res) { return (result = res); });
        }
        catch (_a) {
        }
        return result;
    };
    ClienteService.prototype.readAll = function () {
        return this.repository.find();
    };
    ClienteService.prototype.findOneByToken = function (token) {
        return this.repository.findOne({ token: token });
    };
    tslib_1.__decorate([
        typeorm_typedi_extensions_1.OrmRepository(cliente_1.Cliente),
        tslib_1.__metadata("design:type", typeorm_1.Repository)
    ], ClienteService.prototype, "repository", void 0);
    ClienteService = tslib_1.__decorate([
        typedi_1.Service()
    ], ClienteService);
    return ClienteService;
}());
exports.ClienteService = ClienteService;
