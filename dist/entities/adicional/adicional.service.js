"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var adicional_model_1 = require("./adicional.model");
var typedi_1 = require("typedi");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var response_data_1 = require("../response-data");
var AdicionalService = (function () {
    function AdicionalService() {
    }
    AdicionalService.prototype.create = function (props) {
        var _this = this;
        var response = new response_data_1.ResponseData();
        return class_validator_1.validate(props).then(function (errors) {
            if (errors.length > 0) {
                errors.forEach(function (val) {
                    response.mensagens.push(val.value);
                });
                response.status = false;
                response.objeto = props;
            }
            else {
                response.mensagens.push("OK!");
                response.objeto = _this.repository.persist(props);
            }
            return response;
        });
    };
    AdicionalService.prototype.readOne = function (id) {
        var result = {};
        try {
            result = this.repository
                .findOneById(id)
                .then()
                .catch(function (res) { return (result = res); });
        }
        catch (_a) {
        }
        return result;
    };
    AdicionalService.prototype.update = function (props) {
        return this.repository.persist(props);
    };
    AdicionalService.prototype.drop = function (id) {
        var result = {};
        try {
            result = this.readOne(id)
                .then(function (res) { return (result = res); })
                .catch(function (res) { return (result = res); });
            result = this.repository.remove(result)
                .then()
                .catch(function (res) { return (result = res); });
        }
        catch (_a) {
        }
        return result;
    };
    AdicionalService.prototype.readAll = function () {
        return this.repository.find();
    };
    tslib_1.__decorate([
        typeorm_typedi_extensions_1.OrmRepository(adicional_model_1.Adicional),
        tslib_1.__metadata("design:type", typeorm_1.Repository)
    ], AdicionalService.prototype, "repository", void 0);
    AdicionalService = tslib_1.__decorate([
        typedi_1.Service()
    ], AdicionalService);
    return AdicionalService;
}());
exports.AdicionalService = AdicionalService;
