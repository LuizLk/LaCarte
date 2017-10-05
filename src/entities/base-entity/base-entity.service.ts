export interface IService<T, TModel> {
  create(props: T): Promise<TModel>;

  readOne(id: number): Promise<TModel>;

  update(props: T): Promise<TModel>;

  drop(id: number): Promise<TModel>;

  readAll(): Promise<TModel[]>;
}
