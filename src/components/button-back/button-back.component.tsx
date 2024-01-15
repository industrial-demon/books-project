import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "../../icons";
import './button-back.component.css'

export function ButtonBack() {
  return (
    <button className="button-back">
      <Link to="..">
        <ArrowLeftIcon />
      </Link>
    </button>
  );
}
