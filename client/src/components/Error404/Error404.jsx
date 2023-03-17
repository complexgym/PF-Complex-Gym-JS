import Spline from "@splinetool/react-spline";
import style from "./style.module.css";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className={style.container}>
      <div className={style.button_container}>
        <Link to="/home">
          <button>
            <span></span>
            <span></span>
            <span></span>
            <span></span> HOME
          </button>
        </Link>
      </div>
      <Spline scene="https://prod.spline.design/Rzo5ZlF65oj7z0po/scene.splinecode" />
    </div>
  );
}
