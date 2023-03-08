import { Bank } from "./Bank";

describe('Bank', () => {
    it('should return a high value customer', () => {
        const bank = new Bank();
        const johnAcc = bank.createAccount("12345", "John Doe");
        const janeAcc = bank.createAccount("67890", "Jane Smith");
        johnAcc.deposit(1000, 'Initial Deposit')
        janeAcc.deposit(6000, 'Initial Deposit')
        const highValueCustomers = bank.getHighValueCustomers();
        expect(highValueCustomers[0].getBalance()).toEqual(6000)
    })
})