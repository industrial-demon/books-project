import { makeAutoObservable } from "mobx";
import { BOOKS } from "../data/MOCK";

export class PaginatorControl {
  page = 0;
  perSize = 10;
  total = BOOKS.length;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  get hasMore() {
    return (this.page + 1) * this.perSize <= this.total;
  }
}
