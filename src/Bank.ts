import { Account } from "./Account"

const minBalanceHighValueCustomer = 5000

export class Bank {
    private accounts: Account[]
  
    constructor() {
      this.accounts = []
    }
  
    createAccount(accountNumber: string, customerName: string): Account {
      const account = new Account(accountNumber, customerName)
      this.accounts.push(account)
      return account
    }
  
    getHighValueCustomers(): Account[] {
      return this.accounts.filter(account => account.getBalance() > minBalanceHighValueCustomer)
                          .sort((a, b) => b.getBalance() - a.getBalance())
    }
}