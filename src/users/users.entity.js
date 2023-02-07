"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserEntity = void 0;
var typeorm_1 = require("typeorm");
// import { Exclude } from 'class-transformer';
var UserEntity = /** @class */ (function () {
    function UserEntity() {
    }
    UserEntity.prototype.logUserId = function () {
        console.log("user create ".concat(this.id));
    };
    UserEntity.prototype.removeUser = function () {
        console.log("user remove ".concat(this.id));
    };
    UserEntity.prototype.updateUser = function () {
        console.log("user update ".concat(this.id));
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], UserEntity.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], UserEntity.prototype, "email");
    __decorate([
        (0, typeorm_1.Column)()
        // used to intercept outgoing response
        // @Exclude()
    ], UserEntity.prototype, "password");
    __decorate([
        (0, typeorm_1.AfterInsert)()
    ], UserEntity.prototype, "logUserId");
    __decorate([
        (0, typeorm_1.AfterRemove)()
    ], UserEntity.prototype, "removeUser");
    __decorate([
        (0, typeorm_1.AfterUpdate)()
    ], UserEntity.prototype, "updateUser");
    UserEntity = __decorate([
        (0, typeorm_1.Entity)()
    ], UserEntity);
    return UserEntity;
}());
exports.UserEntity = UserEntity;
