export interface Repository<T> {
  getById(id: string): T | undefined;
  save(entity: T): void;
}