import { Descriptor } from './descriptor';
export interface SliderDescriptor extends Descriptor {
    readonly range?: ReadonlyArray<number>;
    readonly unit?: string;
}
export declare namespace SliderDescriptor {
    interface Controller {
        setter(deviceId: string, value: number): void | PromiseLike<void>;
        getter(deviceId: string): number | PromiseLike<number>;
    }
}
