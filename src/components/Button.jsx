import PropTypes from "prop-types";
import noop from "lodash/noop";
import classNames from "classnames";

const Button = ({ type = "", className = "", onClick = noop, children = null }) => (
  <button
    className={classNames(
      "rounded-sm border-b-4 active:border-0",
      {
        "bg-theme-button-primary border-theme-button-primary text-theme-button-primary":
          type === "primary",
        "bg-theme-button-secondary border-theme-button-secondary text-theme-primary": type === "secondary",
        "bg-theme-button-tertiary border-theme-button-tertiary text-theme-primary": type === "tertiary",
      },
      className
    )}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
};

export default Button;
