"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http = require("http");
require("reflect-metadata");
require("es6-shim");
var typedi_1 = require("typedi");
var typeorm_1 = require("typeorm");
var config_1 = require("../config");
var entities_1 = require("../entities");
var app_1 = require("./app");
typeorm_1.useContainer(typedi_1.Container);
var port = process.env.port || 8082;
typeorm_1.createConnection(tslib_1.__assign({}, config_1.config.sql, { entities: [
        entities_1.BaseEntity,
        entities_1.User,
        entities_1.Adicional,
        entities_1.ItemPedidoAdicional,
        entities_1.Pedido,
        entities_1.ItemPedido,
        entities_1.Produto,
        entities_1.ProdutoAdicionais,
        entities_1.TipoProduto,
        entities_1.Mesa,
        entities_1.Cliente,
        entities_1.Cardapio,
        entities_1.Restaurante
    ] })).then(function () { return http
    .createServer(app_1.app)
    .listen(port, function () { return console.log('Server started on port ' + port); }); }).catch(function (err) { return console.error(err.message); });
