import { container } from "@/container";
import { Warrior } from "@/service/interface";
import { TYPES } from "@/service/types";

export function sayHello() {
    const ninja = container.get<Warrior>(TYPES.Warrior);
    return ninja.fight() + ninja.sneak();
}