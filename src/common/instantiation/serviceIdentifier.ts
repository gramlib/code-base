export interface ServiceIdentifier<T> {
    (...args: any[]): void;

    type: T;
}