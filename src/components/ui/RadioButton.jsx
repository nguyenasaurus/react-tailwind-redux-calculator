import PropTypes from "prop-types";
import noop from "lodash/noop";
import classNames from "classnames";

const RadioButton = ({
  checked = false,
  children = null,
  onChange = noop,
  showRadio = true,
  wrapperClassName = "",
  value = "",
}) => (
  <label
    className={classNames("cursor-pointer flex items-center z-10 px-1.5", wrapperClassName)}
  >
    <input className={classNames({"hidden": showRadio})} type="radio" value={value} checked={checked} onChange={onChange} />
    {children}
  </label>
);

RadioButton.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
  onChange: PropTypes.func,
  showRadio: PropTypes.bool,
  wrapperClassName: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default RadioButton;
