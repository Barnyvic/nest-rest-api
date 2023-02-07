"use strict";
exports.__esModule = true;
exports.SerializeInterceptors = exports.Serialize = void 0;
var common_1 = require("@nestjs/common");
var class_transformer_1 = require("class-transformer");
var rxjs_1 = require("rxjs");
// decorator function
function Serialize(dto) {
    return (0, common_1.UseInterceptors)(new SerializeInterceptors(dto));
}
exports.Serialize = Serialize;
var SerializeInterceptors = /** @class */ (function () {
    function SerializeInterceptors(dto) {
        this.dto = dto;
    }
    SerializeInterceptors.prototype.intercept = function (context, next) {
        // Run something before a request is handled
        var _this = this;
        return next.handle().pipe(
        // Run something before the response is sent out
        (0, rxjs_1.map)(function (data) {
            return (0, class_transformer_1.plainToClass)(_this.dto, data, {
                excludeExtraneousValues: true
            });
        }));
    };
    return SerializeInterceptors;
}());
exports.SerializeInterceptors = SerializeInterceptors;
