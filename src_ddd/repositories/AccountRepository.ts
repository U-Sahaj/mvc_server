import { Repository } from "./Repository"

export class AccountRepository implements Repository<Account> {
    private accounts: Account[] = [];
  
    getById(id: string): Account | undefined {
      return this.accounts.find(account => account.id === id);
    }
  
    save(account: Account): void {
      const index = this.accounts.findIndex(a => a.id === account.id);
      if (index === -1) {
        this.accounts.push(account);
      } else {
        this.accounts[index] = account;
      }
    }
  }