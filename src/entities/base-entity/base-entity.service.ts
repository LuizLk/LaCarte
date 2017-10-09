export interface IServiceBase<TRequest, TResponse> {
  create(props: TRequest): Promise<TResponse>;

  readOne(id: number): Promise<TResponse>;

  update(props: TRequest): Promise<TResponse>;

  drop(id: number): Promise<TResponse>;

  readAll(): Promise<TResponse[]>;
}
