var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import "reflect-metadata"; //It's important that this import is in the file were the container is created and ONLY used once!
import pkg from 'inversify';
const { Container, injectable } = pkg;
import { Shuriken } from "./Shuriken.js";
import { Katana } from "./Katana.js";
let Ninja = class Ninja {
    constructor(katana, shuriken) {
        this._katana = katana;
        this._shuriken = shuriken;
    }
    fight() { return this._katana.hit(); }
    ;
    sneak() { return this._shuriken.throw(); }
    ;
};
Ninja = __decorate([
    injectable(),
    __metadata("design:paramtypes", [Katana, Shuriken])
], Ninja);
var container = new Container();
container.bind(Ninja).to(Ninja); // Needs to be bound to the container, because it's in need of dependencies
/*
 by binding it you add it to the container which makes it an available dependency for Ninja.
 You can resolve this dependency without binding it to the container,
 reason is because there it got no dependency to other classes. Also because it got the injectable tag...
 */
container.bind(Katana).to(Katana);
/*
 by binding it you add it to the container which makes it an available dependency for Ninja.
 You can resolve this dependency without binding it to the container,
 reason is because there it got no dependency to other classes. Also because it got the injectable tag...
 */
container.bind(Shuriken).to(Shuriken);
const instance = container.resolve(Ninja);
instance.fight(); //Prints Cut
instance.sneak(); //Prints Hit
const instance2 = container.resolve(Katana);
instance2.hit(); //Prints Cut
const instance3 = container.resolve(Shuriken);
instance3.throw(); //Prints Hit
//If your terminal outputs the below then the injection were sucessful:
/**
"cut!"
"hit!"
"cut!"
"hit!"
 */ 
