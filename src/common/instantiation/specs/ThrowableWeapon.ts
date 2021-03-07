import {createDecorator} from "@/common/instantiation/createDecorator";

export interface IThrowableWeapon {
    throw: () => string;
}

export const IThrowableWeapon = createDecorator<IThrowableWeapon>('IThrowableWeapon');

export class Shuriken implements IThrowableWeapon {
    throw():string {
        return "hit!";
    }
}
