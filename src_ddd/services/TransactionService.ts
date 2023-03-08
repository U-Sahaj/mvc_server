class AccountService {
  private accountRepo: AccountRepository;
  private transactionRepo: TransactionRepository;

  constructor(accountRepo: AccountRepository, transactionRepo: TransactionRepository) {
    this.accountRepo = accountRepo;
    this.transactionRepo = transactionRepo;
  }

  deposit(accountId: string, amount: number): void {
    const account = this.accountRepo.getById(accountId);
    if (!account) {
      throw new Error(`Account with ID ${accountId} not found`);
    }

    account.balance += amount;
    const transaction = new Transaction('deposit', amount);
    account.transactions.push(transaction);

    this.accountRepo.save(account);
    this.transactionRepo.save(transaction);
  }

  withdraw(accountId: string, amount: number): void {
    const account = this.accountRepo.getById(accountId);
    if (!account) {
      throw new Error(`Account with ID ${accountId} not found`);
    }

    if (account.balance < amount) {
      throw new Error('Insufficient balance');
    }

    account.balance -= amount;
    const transaction = new Transaction('withdrawal', -amount);
    account.transactions.push(transaction);

    this.accountRepo.save(account);
    this.transactionRepo.save(transaction);
  }

  getBalance(accountId: string): number {
    const account = this.accountRepo.getById(accountId);
    if (!account) {
    }
