export interface IService<T> {
    Add(obj: T): T;
    Get(obj: T): T;
    Update(obj: T): T;
    Remove(id: string): void;
}