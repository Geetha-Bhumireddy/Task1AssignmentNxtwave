import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[22px]",
};
const variants = {
  fill: {
    orange_50: "bg-orange-50 text-green-800_01",
    white_A700_01: "bg-white-A700_01 text-gray-900",
    green_800_01: "bg-green-800_01 text-white-A700_01",
    indigo_700_0a: "bg-indigo-700_0a text-gray-800",
    gray_50_02: "bg-gray-50_02 text-green-800_01",
  },
  outline: {
    gray_300: "border-gray-300 border border-solid text-green-800_01",
  },
};
const sizes = {
  xs: "h-[36px] px-[21px] text-base",
  lg: "h-[43px] px-[9px]",
  "5xl": "h-[62px] px-4 text-base",
  "3xl": "h-[56px] px-[29px] text-2xl",
  "4xl": "h-[59px] px-[33px] text-xl",
  "2xl": "h-[48px] px-[13px]",
  sm: "h-[40px] px-[19px] text-xl",
  md: "h-[40px] px-2.5",
  xl: "h-[43px] px-4 text-base",
  "6xl": "h-[67px] px-[17px] text-[15px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "6xl",
  color = "gray_50_02",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "lg", "5xl", "3xl", "4xl", "2xl", "sm", "md", "xl", "6xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["orange_50", "white_A700_01", "green_800_01", "indigo_700_0a", "gray_50_02", "gray_300"]),
};

export { Button };
