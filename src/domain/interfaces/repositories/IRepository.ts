export interface IRepository<T> {
    Add(obj: T): Promise<T>;
    Get(obj: T): Promise<T>;
    Update(obj: T): void;
    Remove(id: string): void;
}