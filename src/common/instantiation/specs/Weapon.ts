import {createDecorator} from "@/common/instantiation/createDecorator";

export interface IWeapon {
    hit: () => string;
}
export const IWeapon = createDecorator<IWeapon>('weapon');

export class Katana implements IWeapon {
    hit():string {
        return "cut!";
    }
}
