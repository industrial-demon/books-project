import { makeAutoObservable } from "mobx";
import { Book } from "../data/MOCK";

type SortingField = "name" | "rating" | "releaseDate" | "author";

export const SortingFieldEnum = {
  NAME: "name",
  RATING: "rating",
  RELEASE_DATE: "releaseDate",
  AUTHOR: "author",
} as const;

export type SortingFieldEnum =
  (typeof SortingFieldEnum)[keyof typeof SortingFieldEnum];

export const SortDirectionEnum = {
  ASC: "asc",
  DESC: "desc",
} as const;

export type SortDirectionEnum =
  (typeof SortDirectionEnum)[keyof typeof SortDirectionEnum];

export class SorterConrol {
  sortDirection: SortDirectionEnum = "asc";
  sortingField: SortingFieldEnum = "name";

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  changeSortField(field: SortingField) {
    this.sortingField = field;
  }

  changeSortDirection() {
    if (this.sortDirection === "asc") {
      this.sortDirection = "desc";
    } else {
      this.sortDirection = "asc";
    }
  }
}

export function sortByField(
  books: Book[],
  field: SortingFieldEnum,
  direction: SortDirectionEnum
) {
  
  const fn = (a: Book, b: Book) => {
    if (field === "name" || field === "author") {
      return direction === "asc"
        ? a[field].localeCompare(b[field])
        : b[field].localeCompare(a[field]);
    }

    if (field === "rating") {
      return direction === "asc" ? a[field] - b[field] : b[field] - a[field];
    }

    const dateA = new Date(a[field]).getTime();
    const dateB = new Date(b[field]).getTime();

    return direction === "asc" ? dateA - dateB : dateB - dateA;
  };

  return books.slice().sort(fn);
}
