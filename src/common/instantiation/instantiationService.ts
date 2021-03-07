import {ServiceCollection} from "@/common/instantiation/serviceConllection";
import {ServiceIdentifier} from "@/common/instantiation/serviceIdentifier";

export interface ServicesAccessor {
    get<T>(id: ServiceIdentifier<T>): T;
    // get<T>(id: ServiceIdentifier<T>, isOptional: typeof optional): T | undefined;
}

export class InstantiationService {

    private readonly _services: ServiceCollection;

    constructor(
        services: ServiceCollection = new ServiceCollection(),
    ) {
        this._services = services;
    }

    invokeFunction<R, TS extends any[] = []>(
        fn: (accessor: ServicesAccessor, ...args: TS) => R,
        ...args: TS
    ): R {
        const accessor = this.getAccessor();
        return fn(accessor, ...args);
    }

    getAccessor(): ServicesAccessor {
        const accessor: ServicesAccessor = {
            get: <T>(id: ServiceIdentifier<T>,) => {
                const result = this._services.get(id);
                if (!result) {
                    throw new Error(`[invokeFunction] unknown service '${id}'`);
                }
                return result;
            },
        };
        return accessor;
    }
}