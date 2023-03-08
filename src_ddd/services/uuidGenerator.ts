export class UuidGenerator {
    static _runningNumber: number
    constructor(seed: number) {
        UuidGenerator._runningNumber = seed
    }
    static getUuid() : string{
        UuidGenerator._runningNumber += 1
        return UuidGenerator._runningNumber as unknown as string
    }
}