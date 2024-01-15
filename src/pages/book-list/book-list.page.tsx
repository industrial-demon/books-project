import { useCallback, useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";

import { useRootStore } from "../../hooks";
import { SortingFieldEnum } from "../../stores/sorter-control";
import { Select } from "../../components/select/select.component";
import { BookCard } from "../../components/book-card";
import { PageLayout } from "../../layouts/page-layout";
import { ButtonSort } from "../../components/button-sort";
import { SpinIcon } from "../../icons";

import "./book-list.page.css";

const BookList = () => {
  const store = useRootStore();
  const elementRef = useRef<HTMLDivElement>(null);

  const onIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const firstEntry = entries[0];
      if (
        firstEntry.isIntersecting &&
        store.paginator.hasMore &&
        !store.loading
      ) {
        store.setPage(store.paginator.page + 1);
        store.setLoaded(true);
        store.loadBooks();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [store.paginator.hasMore, store.loading]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection, {
      threshold: 0.5,
    });

    if (elementRef.current && observer) {
      observer.observe(elementRef.current);
    }
    return () => observer?.disconnect();
  }, [onIntersection]);

  return (
    <PageLayout headerContent={<span>Books read this month</span>}>
      <div className="book-list-controls">
        <span className="list-controls-total">{store.totalBooks}</span>
        <div className="list-controls">
          <ButtonSort />
          <span>Sort By</span>
          <Select
            value={store.sorter.sortingField}
            onValueChange={store.sorter.changeSortField}
          >
            <Select.Item value={SortingFieldEnum.RATING}>
              Popularity
            </Select.Item>
            <Select.Item value={SortingFieldEnum.NAME}>Name</Select.Item>
            <Select.Item value={SortingFieldEnum.RELEASE_DATE}>
              Date
            </Select.Item>
            <Select.Item value={SortingFieldEnum.AUTHOR}>Author</Select.Item>
          </Select>
        </div>
      </div>

      <div className="book-list-content">
        {store.sortedBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      <div
        className="loader-container"
        style={{ display: store.loading ? "flex" : "none" }}
      >
        <SpinIcon />
      </div>
      <div className="mark-scroll-el" ref={elementRef}></div>
    </PageLayout>
  );
};

export const BookListPage = observer(BookList);
