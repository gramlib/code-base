import {createDecorator} from "@/common/instantiation/createDecorator";
import {IThrowableWeapon} from "@/common/instantiation/specs/ThrowableWeapon";
import {IWeapon} from "@/common/instantiation/specs/Weapon";

export const IWarrior = createDecorator<IWarrior>('Warrior');

export interface IWarrior {
    fight: () => string;
    sneak: () => string;
}

export class Ninja implements IWarrior{
    constructor(
        @IThrowableWeapon private readonly throwableWeapon: IThrowableWeapon,
        @IWeapon private readonly katana: IWeapon
    ) {
    }

    fight(): string {
        return this.throwableWeapon.throw();
    }

    sneak(): string {
        this.throwableWeapon.num = 3;
        return this.katana.hit();
    }
}
