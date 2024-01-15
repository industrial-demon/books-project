import { Children, ReactNode, useEffect } from "react";
import { useParams } from "react-router";
import { observer } from "mobx-react-lite";
import { useRootStore } from "../../hooks";

import "./book.page.css";
import { ButtonBack } from "../../components/button-back";
import { PageLayout } from "../../layouts/page-layout";
import { srcMap } from "../../components/book-card/coversMap";

export const Book = () => {
  const params = useParams<{ bookId: string }>();
  const store = useRootStore();
  const book = store.getBook(params.bookId as string);

  useEffect(() => {
    if (params.bookId) {
      store.markView(params.bookId);
    }
  }, [params.bookId, store]);

  return (
    <PageLayout
      headerContent={
        <div>
          <ButtonBack />
        </div>
      }
    >
      <div className="book-content">
        <section className="book-left">
          <img
            src={srcMap[book?.img as keyof typeof srcMap]}
            className="book-image"
          />
          <span>
            <b>Downloads:</b>
            {book?.downloads}
          </span>
        </section>

        <section className="book-detais">
          <RowDetail detail="Title" value={book?.name} />
          <RowDetail detail="Author" value={book?.author} />
          <RowDetail detail="Rating" value={book?.rating?.toString()} />
          <RowDetail detail="Description" value={book?.description} />
          <RowDetail detail="Reader reviews">
            <ul className="book-comments">
              {book?.reviews.map((rev, idx) => (
                <li key={idx + book?.id}>
                  <span className="row-value">"{rev.comment}"</span>
                  <span>{rev.userName}</span>
                </li>
              ))}
            </ul>
          </RowDetail>
        </section>
      </div>
    </PageLayout>
  );
};

export const BookPage = observer(Book);

function RowDetail({
  detail,
  value,
  children,
}: {
  detail: string;
  value?: string;
  children?: ReactNode;
}) {
  return (
    <div className="row-detail">
      <span>
        <b>{detail}:</b>
      </span>
      {children || <span className="row-value">{value}</span>}
    </div>
  );
}
