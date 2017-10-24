"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt_1 = require("bcrypt");
var EncryptionService = (function () {
    function EncryptionService() {
    }
    EncryptionService.prototype.genSalt = function () {
        return bcrypt_1.genSalt()
            .then(function (salt) { return salt; });
    };
    EncryptionService.prototype.hash = function (input, salt) {
        return bcrypt_1.hash(input, salt);
    };
    EncryptionService.prototype.compare = function (input, salt) {
        return bcrypt_1.compare(input, salt);
    };
    return EncryptionService;
}());
exports.EncryptionService = EncryptionService;
exports.encryptionService = new EncryptionService();
