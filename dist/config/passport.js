"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var passport = require("passport");
var passportJWT = require("passport-jwt");
var user_1 = require("../entities/user");
var config_1 = require("../config");
var typedi_1 = require("typedi");
var Auth = (function () {
    function Auth() {
        var _this = this;
        this.ExtractJwt = passportJWT.ExtractJwt;
        this.Strategy = passportJWT.Strategy;
        this.params = {
            secretOrKey: config_1.config.jwt.jwtSecret,
            jwtFromRequest: this.ExtractJwt.fromAuthHeader()
        };
        var strategy = new this.Strategy(this.params, function (payload, done) {
            var user;
            _this.userService
                .readOne(payload.id)
                .then(function (res) {
                if (user) {
                    return done(null, {
                        id: user.id,
                        email: user.email
                    });
                }
                else {
                    return done(new Error("usuario nao encontrado"), null);
                }
            })
                .catch(function (error) { return done(new Error("usuario nao encontrado"), null); });
        });
        passport.use(strategy);
    }
    Auth.initialize = function () {
        return passport.initialize();
    };
    Auth.authenticate = function () {
        return passport.authenticate("jwt", config_1.config.jwt.jwtSession);
    };
    tslib_1.__decorate([
        typedi_1.Inject(),
        tslib_1.__metadata("design:type", user_1.UserService)
    ], Auth.prototype, "userService", void 0);
    return Auth;
}());
exports.default = Auth;
