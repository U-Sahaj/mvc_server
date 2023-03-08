import { UuidGenerator } from "../services/uuidGenerator";

exported class Transaction {
    id: string;
    type: 'deposit' | 'withdrawal';
    timestamp: Date;
    amount: number;
  
    constructor(type: 'deposit' | 'withdrawal', amount: number) {
      this.id = UuidGenerator.getUuid(); // generate a unique ID using uuid library
      this.type = type;
      this.timestamp = new Date();
      this.amount = amount;
    }
  }