import {ServiceIdentifier} from "@/common/instantiation/serviceIdentifier";
import {decorate, inject} from "inversify";

export function createDecorator<T>(serviceId: string): ServiceIdentifier<T> {
    const id = <any>function (target: Function, key: string, index: number): any {
        if (arguments.length !== 3) {
            throw new Error('@IServiceName-decorator can only be used to decorate a parameter');
        }
        decorate(inject(id), target, index);
    };

    id.toString = () => serviceId;

    return id;
}


