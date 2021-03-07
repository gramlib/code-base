import {ServiceIdentifier} from "@/common/instantiation/serviceIdentifier";
import { Container, decorate, injectable } from "inversify";
import "reflect-metadata";

export class ServiceCollection {
    private _entries = new Container();

    constructor(...entries: Array<[ServiceIdentifier<any>, any]>) {
        for (const [id, service] of entries) {
            this.set(id, service);
        }
    }

    set<T>(
        id: ServiceIdentifier<T>,
        ctor: new (...args: any[]) => T,
    ) {
        decorate(injectable(), ctor);
        this._entries.bind(id).to(ctor);
    }

    has(id: ServiceIdentifier<any>): boolean {
        return this._entries.isBound(id);
    }

    get<T>(id: ServiceIdentifier<T>): T {
        return this._entries.get(id);
    }
}