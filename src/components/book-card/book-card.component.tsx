import { useNavigate } from "react-router";
import { RecivedCheckIcon, RecivedIcon } from "../../icons";
import { Book } from "../../data/MOCK";
import { srcMap } from "./coversMap";
import "./book-card.component.css";

export const BookCard = ({ book }: { book: Book }) => {
  const navigate = useNavigate();

  return (
    <div className="book-card" onClick={() => navigate(book.id)}>
      <div className="card-image">
        {book.revised ? (
          <RecivedCheckIcon className="recived" />
        ) : (
          <RecivedIcon className="recived" />
        )}

        <img
          className="book-card-img"
          src={srcMap[book.img as keyof typeof srcMap]}
        />
      </div>

      <div className="book-card-info">
        <span className="book-card-author">{book.author}</span>
        <span className="book-card-name">{book.name}</span>
        <span className="book-card-rating">{`${book.rating}/5`}</span>
      </div>
    </div>
  );
};
