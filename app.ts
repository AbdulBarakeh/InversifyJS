
import "reflect-metadata";//It's important that this import is in the file were the container is created and ONLY used once!
import pkg from 'inversify';
const { Container, injectable } = pkg;
import {Shuriken} from "./Shuriken.js"
import {Katana} from "./Katana.js"



@injectable()
class Ninja implements Ninja {

    private _katana: Katana;
    private _shuriken: Shuriken;

    public constructor(katana: Katana, shuriken: Shuriken) {
        this._katana = katana;
        this._shuriken = shuriken;
    }

    public fight() { return this._katana.hit(); };
    public sneak() { return this._shuriken.throw(); };

}

var container = new Container();
container.bind<Ninja>(Ninja).to(Ninja);// Needs to be bound to the container, because it's in need of dependencies
/*
 by binding it you add it to the container which makes it an available dependency for Ninja.
 You can resolve this dependency without binding it to the container,
 reason is because there it got no dependency to other classes. Also because it got the injectable tag...
 */
container.bind<Katana>(Katana).to(Katana);
/*
 by binding it you add it to the container which makes it an available dependency for Ninja.
 You can resolve this dependency without binding it to the container,
 reason is because there it got no dependency to other classes. Also because it got the injectable tag...
 */
container.bind<Shuriken>(Shuriken).to(Shuriken);

const instance = container.resolve(Ninja)
instance.fight()//Prints Cut
instance.sneak()//Prints Hit
const instance2 = container.resolve(Katana)
instance2.hit()//Prints Cut
const instance3 = container.resolve(Shuriken)
instance3.throw()//Prints Hit
//If your terminal outputs the below then the injection were sucessful:
/**
"cut!"
"hit!"
"cut!"
"hit!"
 */