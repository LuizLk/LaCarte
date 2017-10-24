"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    sql: {
        autoSchemaSync: true,
        autoMigrationsRun: false,
        driver: {
            type: "postgres",
            host: "stampy.db.elephantsql.com",
            port: 5432,
            username: "gxiubqwv",
            password: "Eor0v0XVSaO5EkcKrqGwSL2tlWo_huxc",
            database: "gxiubqwv",
        },
        dropSchemaOnConnection: false
    },
    jwt: {
        jwtSecret: "l@Cart3A$$PiE$%T/s",
        jwtSession: { session: false }
    }
};
