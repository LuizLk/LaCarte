"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var body_parser_1 = require("body-parser");
var express = require("express");
var helmet = require("helmet");
var morgan = require("morgan");
var class_validator_1 = require("class-validator");
var routing_controllers_1 = require("routing-controllers");
var typedi_1 = require("typedi");
var controllers_1 = require("../controllers");
var cliente_1 = require("../entities/cliente");
var passport_1 = require("../config/passport");
routing_controllers_1.useContainer(typedi_1.Container);
class_validator_1.useContainer(typedi_1.Container);
var config = express();
config
    .use(morgan('dev'))
    .use(helmet())
    .use(passport_1.default.initialize())
    .use(body_parser_1.urlencoded({
    extended: true
}));
var app = routing_controllers_1.useExpressServer(config, {
    controllers: [
        controllers_1.UserController,
        controllers_1.CardapioController
    ],
    authorizationChecker: function (action, roles) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var token, user;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    token = action.request.headers["authorization"];
                    return [4, typedi_1.Container.get(cliente_1.ClienteService).findOneByToken(token)];
                case 1:
                    user = _a.sent();
                    if (user)
                        return [2, true];
                    return [2, false];
            }
        });
    }); },
    routePrefix: '/api/v1',
    validation: true
});
exports.app = app;
