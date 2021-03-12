import {ServiceCollection} from "@/common/instantiation/serviceConllection";
import {IWeapon, Katana} from "@/common/instantiation/specs/Weapon";
import {IThrowableWeapon, Shuriken} from "@/common/instantiation/specs/ThrowableWeapon";
import {IWarrior, Ninja} from "@/common/instantiation/specs/Ninja";
import {InstantiationService} from "@/common/instantiation/instantiationService";

describe('test instantiation', () => {
    it('should ok', function () {
        const services = new ServiceCollection();
        services.set(IWeapon, Katana)
        services.set(IThrowableWeapon, Shuriken);
        services.set(IWarrior, Ninja);

        const instantiationService = new InstantiationService(services);
        const accessor = instantiationService.getAccessor();
        const throwableWeapon = accessor.get(IThrowableWeapon);
        const weapon = accessor.get(IWeapon);
        const ninja = accessor.get(IWarrior);

        expect(ninja.sneak()).toBe(weapon.hit());
        expect(ninja.fight()).toBe(throwableWeapon.throw());
        expect(throwableWeapon.num).toEqual(3);
    });
})
