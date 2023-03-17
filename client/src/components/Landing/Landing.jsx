import Spline from "@splinetool/react-spline";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import React from "react";

export default function Landing2() {
  return (
    <div className={style.container}>
      <div className={style.waves_container}>
        <Spline
          className={style.splinewaves}
          scene="https://prod.spline.design/ETlKk7yNQfbifC5m/scene.splinecode"
        />
      </div>
      <div className={style.left_container}>
        <h1>El 90% del éxito se basa en el esfuerzo.</h1>
        <div className={style.buttons}>
          <Link to="/home">
            <button type="button" className={style.buttonn}>
              EXPLORAR
            </button>
          </Link>
          <Link to="/login">
            <button type="button" className={style.buttonn}>
              INICIAR SESION
            </button>
          </Link>
        </div>
      </div>
      <div className={style.gym_container}>
        <div className={style.spline_gym_div}>
          <Spline
            className={style.gym_spline}
            scene="https://prod.spline.design/8ZGu1Nn72DALpfwr/scene.splinecode"
          />
        </div>
      </div>
    </div>
  );
}
