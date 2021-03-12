import {createDecorator} from "@/common/instantiation/createDecorator";
import {IThrowableWeapon} from "@/common/instantiation/specs/ThrowableWeapon";

export interface IWeapon {
    hit: () => string;
}
export const IWeapon = createDecorator<IWeapon>('weapon');

export class Katana implements IWeapon {

    constructor(
      @IThrowableWeapon private readonly throwableWeapon: IThrowableWeapon,
    ) {}

    hit():string {
        return "cut!";
    }
}
