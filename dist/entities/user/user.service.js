"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var typedi_1 = require("typedi");
var typeorm_1 = require("typeorm");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var user_model_1 = require("./user.model");
var response_data_1 = require("../response-data");
var class_validator_1 = require("class-validator");
var UserService = (function () {
    function UserService(repository) {
        this.repository = repository;
    }
    UserService.prototype.create = function (props) {
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
    UserService.prototype.readOne = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            resolve(_this.repository.findOneById(id));
            var response = new response_data_1.ResponseData();
            response.mensagens.push("Id não encontrado.");
            response.status = false;
            reject(response);
        });
        return promise;
    };
    UserService.prototype.readOneByEmail = function (email) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            resolve(_this.repository.findOne({ email: email }));
            var response = new response_data_1.ResponseData();
            response.mensagens.push("email não encontrado.");
            response.status = false;
            reject(response);
        });
        return promise;
    };
    UserService.prototype.update = function (props) {
        return this.repository.persist(props);
    };
    UserService.prototype.drop = function (id) {
        var user;
        this.readOne(id).then(function (res) { return (user = res); });
        return this.repository.remove(user);
    };
    UserService.prototype.readAll = function () {
        return this.repository.find();
    };
    UserService.prototype.findOneByToken = function (token) {
        return this.repository.findOne({ token: token });
    };
    UserService = tslib_1.__decorate([
        typedi_1.Service(),
        tslib_1.__param(0, typeorm_typedi_extensions_1.OrmRepository(user_model_1.User)),
        tslib_1.__metadata("design:paramtypes", [typeorm_1.Repository])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
