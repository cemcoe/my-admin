export interface IResponse<T> {
  status: number;
  data: T;
  pagination: any;
}
