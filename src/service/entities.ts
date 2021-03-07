import { injectable, inject } from "inversify";
import "reflect-metadata";
import { Weapon, ThrowableWeapon, Warrior } from "./interface";
import { TYPES } from "./types";

@injectable()
class Katana implements Weapon {
    hit() {
        return "cut!";
    }
}

@injectable()
class Shuriken implements ThrowableWeapon {
    throw() {
        return "hit!";
    }
}

@injectable()
class Ninja implements Warrior {

    private _katana: Weapon;
    private _shuriken: ThrowableWeapon;

    constructor(
	    @inject(TYPES.Weapon) katana: Weapon,
	    @inject(TYPES.ThrowableWeapon) shuriken: ThrowableWeapon
    ) {
        this._katana = katana;
        this._shuriken = shuriken;
    }

    fight() { return this._katana.hit(); }
    sneak() { return this._shuriken.throw(); }

}

export { Ninja, Katana, Shuriken };
