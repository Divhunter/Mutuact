"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const winston_2 = require("winston");
const logger = winston_1.default.createLogger({
    level: "info",
    format: winston_2.format.combine(winston_2.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), winston_2.format.splat()),
    defaultMeta: { service: "your-service-name" },
    transports: [
        new winston_1.default.transports.Console({
            format: winston_2.format.combine((0, winston_2.format)((info) => {
                info.level = ` ${info.level.toUpperCase()} `;
                return info;
            })(), winston_2.format.colorize(), winston_2.format.printf(({ timestamp, level, message }) => {
                const isObjectOrArray = typeof message === "object" || Array.isArray(message);
                const logMessage = isObjectOrArray ? JSON.stringify(message, null, 2) : message;
                return `${timestamp} ${level}: ${logMessage}`;
            })),
        }),
        new winston_1.default.transports.File({ filename: "error.log", level: "error" }),
        new winston_1.default.transports.File({ filename: "combined.log" }),
    ],
});
exports.default = logger;
//# sourceMappingURL=logger.js.map