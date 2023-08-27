import classes from "./Button.module.scss";
import clsx from "clsx";
import { PropTypes } from "prop-types";
const themes = {
  primary: classes.Primary,
  secondary: classes.Secondary,
};
const Button = ({ onClick, className, theme }) => {
  const desireTheme = theme ? themes[theme] : "Primary";
  console.log(desireTheme);
  const btnClass = clsx(classes.ButtonType, desireTheme);
  console.log(btnClass);

  return (
    <button className={btnClass} onClick={onClick}>
      Hello
    </button>
  );
};
Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  theme: PropTypes.oneOf(Object.keys(themes)),
};
Button.defaultProps = {
  theme: "primary",
};
export default Button;
