import {createDecorator} from "@/common/instantiation/createDecorator";

export interface IThrowableWeapon {
    num:number;
    throw: () => string;
}

export const IThrowableWeapon = createDecorator<IThrowableWeapon>('IThrowableWeapon');

export class Shuriken implements IThrowableWeapon {
    num;

    throw():string {
        return "hit!";
    }
}
