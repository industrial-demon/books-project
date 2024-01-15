import {
  action,
  autorun,
  computed,
  makeObservable,
  observable,
  runInAction,
  set,
  toJS,
} from "mobx";

import { Book, fetchBooks } from "../data/MOCK";
import { PaginatorControl } from "./paginator-control";
import { SorterConrol, sortByField } from "./sorter-control";

const STORAGE_NAME = "store";

export class RootStore {
  loading = false;
  loaded = false;
  bookList: Book[] = [];

  constructor(
    readonly paginator: PaginatorControl,
    readonly sorter: SorterConrol
  ) {
    makeObservable(this, {
      bookList: observable,
      loading: observable,
      loaded: observable,
      loadBooks: action.bound,
      markView: action.bound,
      setLoaded: action.bound,
      setPage: action.bound,
      sortedBooks: computed,
    });
    autoSave(this, STORAGE_NAME)
  }

  get sortedBooks() {
    return sortByField(
      this.bookList,
      this.sorter.sortingField,
      this.sorter.sortDirection
    );
  }

  get totalBooks() {
    return `${this.paginator.total} Books`;
  }

  markView(id: string) {
    const targetBook = this.bookList.find((book) => book.id === id);
    if (targetBook && !targetBook.revised) {
      targetBook.revised = true;
    }
  }

  getBook(id: string) {
    return this.bookList.find((book) => book.id === id);
  }

  setLoaded(val: boolean) {
    this.loaded = val;
  }

  setPage(page: number) {
    this.paginator.page = page;
    this.loaded = false;
  }

  async loadBooks() {
    this.loading = true;

    try {
      const books = await fetchBooks(
        this.paginator.page,
        this.paginator.perSize
      );
      runInAction(() => {
        this.bookList = this.bookList.concat(books);
      });
    } catch (e) {
      throw new Error("Fetch failed");
    } finally {
      runInAction(() => (this.loading = false));
    }
  }
}

function autoSave(_this: RootStore, storeName: string) {
  const storedJson = localStorage.getItem(storeName);
  try {
    if (storedJson) {
      const { bookList, sorter, paginator }: RootStore = JSON.parse(storedJson);
      set(_this, { bookList });
      set(_this.sorter, sorter);
      set(_this.paginator, paginator);
    }
  } catch (e) {
    console.warn(e);
  }

  autorun(() => {
    const value = toJS(_this);
    try {
      localStorage.setItem(storeName, JSON.stringify(value));
    } catch (e) {
      console.warn(e);
    }
  });
}
