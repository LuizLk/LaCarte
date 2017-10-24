"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var class_transformer_1 = require("class-transformer");
var routing_controllers_1 = require("routing-controllers");
var typedi_1 = require("typedi");
var user_1 = require("../../entities/user");
var bcrypt = require("bcrypt");
var compression = require("compression");
var saltRounds = 0;
var myPlaintextPassword = "123";
var someOtherPlaintextPassword = '1234';
var UserController = (function () {
    function UserController() {
    }
    UserController.prototype.httpPost = function (props) {
        var user = class_transformer_1.plainToClass(user_1.User, props);
        return this.userService.create(user);
    };
    UserController.prototype.httpGetAll = function () {
        return this.userService.readAll();
    };
    UserController.prototype.httpGet = function (id) {
        var salt = bcrypt.genSaltSync(saltRounds);
        var hash = bcrypt.hashSync(myPlaintextPassword, salt);
        console.log(hash);
        console.log(bcrypt.compareSync(myPlaintextPassword, hash));
        console.log(bcrypt.compareSync(someOtherPlaintextPassword, hash));
        return this.userService.readOne(id);
    };
    UserController.prototype.httpGetEmail = function (email) {
        return this.userService.readOneByEmail(email);
    };
    tslib_1.__decorate([
        typedi_1.Inject(),
        tslib_1.__metadata("design:type", user_1.UserService)
    ], UserController.prototype, "userService", void 0);
    tslib_1.__decorate([
        routing_controllers_1.Post(),
        routing_controllers_1.HttpCode(201),
        tslib_1.__param(0, routing_controllers_1.Body({
            required: true
        })),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], UserController.prototype, "httpPost", null);
    tslib_1.__decorate([
        routing_controllers_1.Get(),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Promise)
    ], UserController.prototype, "httpGetAll", null);
    tslib_1.__decorate([
        routing_controllers_1.Get("/:id"),
        routing_controllers_1.UseBefore(compression()),
        tslib_1.__param(0, routing_controllers_1.Param("id")),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number]),
        tslib_1.__metadata("design:returntype", Promise)
    ], UserController.prototype, "httpGet", null);
    tslib_1.__decorate([
        routing_controllers_1.Get("/email/:email"),
        tslib_1.__param(0, routing_controllers_1.Param("email")),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String]),
        tslib_1.__metadata("design:returntype", Promise)
    ], UserController.prototype, "httpGetEmail", null);
    UserController = tslib_1.__decorate([
        routing_controllers_1.JsonController("/user")
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
