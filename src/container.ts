import { Container } from "inversify";
import { TYPES } from "@/service/types";
import { Warrior, Weapon, ThrowableWeapon } from "@/service/interface";
import { Ninja, Katana, Shuriken } from "@/service/entities";

const container = new Container();
container.bind<Warrior>(TYPES.Warrior).to(Ninja);
container.bind<Weapon>(TYPES.Weapon).to(Katana);
container.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

export { container };