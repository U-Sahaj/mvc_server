import { Transaction } from "./Transaction"

class Account {
    readonly _id: string
    _balance: number 
    //_transactions: Transaction[] = []

    constructor(id: string, 
                customerName: string, 
                balance: number = 0) {
        this._id = id
        this._balance = balance
    }
    
    public get id() : string {
        return this._id
    }
    
}